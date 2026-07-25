/* =======================================================
   SISTEMA DE VISOR DE CIFRAS Y CANCIONERO LITÚRGICO
   ======================================================= */

// Escalas musicales para transposición
const escalaSostenidos = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const escalaBemoles    = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const tonosConBemoles  = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Dm', 'Gm', 'Cm', 'Fm', 'Bbm', 'Ebm'];

let currentSong = null;
let currentOffset = 0;
let fontSizeActual = 1.0;

/* --- MODO OSCURO GLOBAL --- */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

// Cargar preferencia de modo oscuro guardada
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

/* --- CONTROL DE SIDEBAR / MENÚ --- */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

/* --- BÚSQUEDA Y FILTRADO DE CANCIONES --- */
function filterSongs() {
    const query = document.getElementById('search-input')?.value.toLowerCase() || '';
    const category = document.getElementById('filter-category')?.value || 'all';
    const container = document.getElementById('song-list-container');

    if (!container || typeof canciones === 'undefined') return;

    container.innerHTML = '';

    const filtered = canciones.filter(song => {
        const matchesQuery = song.titulo.toLowerCase().includes(query) || 
                             (song.autor && song.autor.toLowerCase().includes(query)) ||
                             song.letra.toLowerCase().includes(query);
                             
        const matchesCategory = (category === 'all') || (song.categoria === category);

        return matchesQuery && matchesCategory;
    });

    filtered.forEach(song => {
        const item = document.createElement('div');
        item.className = 'song-item';
        item.style.cursor = 'pointer';
        
        // Obtener el primer momento litúrgico si existe
        const momentos = obtenerMomentosLiturgicosCancion(song.id);
        const badgeHtml = momentos.length > 0 
            ? `<span class="badge-list">${momentos[0].momento}</span>` 
            : '';

        item.innerHTML = `
            <div onclick="prepararDisplay(${song.id})" style="flex-grow:1;">
                <strong>${song.titulo}</strong> ${badgeHtml}
                <br><small style="opacity:0.7;">${song.autor || 'Desconocido'} (${song.tonoOriginal || ''})</small>
            </div>
        `;
        container.appendChild(item);
    });
}

/* --- BÚSQUEDA ROBUSTA EN DATOS LITÚRGICOS --- */
function obtenerMomentosLiturgicosCancion(songId, filtroCelebracionId = null) {
    if (typeof datosLiturgicos === 'undefined' || !datosLiturgicos) return [];

    const resultados = [];
    const nombresMomentos = {
        entrada: 'Entrada', piedad: 'Piedad', gloria: 'Gloria', aleluya: 'Aleluya',
        credo: 'Credo', ofertorio: 'Ofertorio', santo: 'Santo', padrenuestro: 'Padre Nuestro',
        paz: 'Paz', cordero: 'Cordero', comunion: 'Comunión', reflexion: 'Reflexión', final: 'Salida'
    };

    try {
        for (const categoria in datosLiturgicos) {
            const listaCelebraciones = datosLiturgicos[categoria];
            if (!Array.isArray(listaCelebraciones)) continue;

            listaCelebraciones.forEach(cel => {
                if (!cel) return;
                if (filtroCelebracionId && cel.id !== filtroCelebracionId) return;

                const cantosData = cel.cantos;
                if (!cantosData) return;

                // Si cantos es un Objeto { entrada: 1, comunion: [2, 3] }
                if (!Array.isArray(cantosData) && typeof cantosData === 'object') {
                    for (const claveMomento in cantosData) {
                        const valor = cantosData[claveMomento];
                        const idsMomento = Array.isArray(valor) ? valor : [valor];

                        if (idsMomento.some(id => String(id) === String(songId))) {
                            resultados.push({
                                celebracionId: cel.id,
                                celebracionNombre: cel.nombre,
                                momento: nombresMomentos[claveMomento] || claveMomento.toUpperCase()
                            });
                        }
                    }
                } 
                // Si cantos es un Array simple [1, 2, 3]
                else if (Array.isArray(cantosData)) {
                    if (cantosData.some(id => String(id) === String(songId))) {
                        resultados.push({
                            celebracionId: cel.id,
                            celebracionNombre: cel.nombre,
                            momento: 'Litúrgico'
                        });
                    }
                }
            });
        }
    } catch (e) {
        console.error("Error al buscar momentos litúrgicos:", e);
    }

    return resultados;
}

/* --- MOSTRAR CANCIÓN EN EL VISOR PRINCIPAL --- */
function prepararDisplay(songId) {
    if (typeof canciones === 'undefined') return;
    const song = canciones.find(s => String(s.id) === String(songId));
    if (song) {
        currentSong = song;
        currentOffset = 0;
        displaySong(song, 0);
        toggleSidebar(); // Cierra el menú lateral tras seleccionar
    }
}

function displaySong(song, offset = 0) {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const escalaInicial = tonosConBemoles.includes(song.tonoOriginal) ? escalaBemoles : escalaSostenidos;
    const tonoCalculado = calcularNombreTono(song.tonoOriginal, offset);
    const escalaUsar = tonosConBemoles.includes(tonoCalculado) ? escalaBemoles : escalaSostenidos;

    // Badges Litúrgicos
    const momentos = obtenerMomentosLiturgicosCancion(song.id);
    let badgesHtml = '';
    if (momentos.length > 0) {
        const badges = momentos.map(m => `<span class="badge-liturgico">📌 ${m.momento} (${m.celebracionNombre})</span>`).join('');
        badgesHtml = `<div class="badge-container">${badges}</div>`;
    }

    // Botones de Recursos (YouTube y Partitura)
    let recursosHtml = '';
    if (song.linkYoutube || song.linkPartitura) {
        let btns = '';
        if (song.linkYoutube) btns += `<a href="${song.linkYoutube}" target="_blank" class="btn-recurso btn-youtube">▶ YouTube</a>`;
        if (song.linkPartitura) btns += `<a href="${song.linkPartitura}" target="_blank" class="btn-recurso btn-partitura">🎼 Partitura / Audio</a>`;
        recursosHtml = `<div class="seccion-recursos">${btns}</div>`;
    }

    mainContent.innerHTML = `
        <div class="song-card">
            <div class="song-header">
                <h2>${song.titulo}</h2>
                ${badgesHtml}
                <p style="margin:5px 0; opacity:0.8; font-style:italic;">Autor: ${song.autor || 'Desconocido'}</p>
            </div>

            <div class="controles-group" style="margin: 15px 0;">
                <div class="controles-tono">
                    <span>Tono: <strong id="tono-label">${tonoCalculado}</strong></span>
                    <button onclick="cambiarTono(-1)">-</button>
                    <button onclick="cambiarTono(0)">⟳</button>
                    <button onclick="cambiarTono(1)">+</button>
                </div>
                <div class="controles-tono">
                    <span>Texto</span>
                    <button onclick="cambiarTamanoTexto(-0.1)">A-</button>
                    <button onclick="cambiarTamanoTexto(0.1)">A+</button>
                </div>
            </div>

            ${recursosHtml}

            <div id="visor-letra" class="visor-cancion" style="font-size: ${fontSizeActual}rem; margin-top: 15px;">
                ${formatearAcordesEnLetra(song.letra, offset, escalaUsar, song.tonoOriginal)}
            </div>
        </div>
    `;
}

/* --- TRANSPOSICIÓN Y FORMATO DE ACORDES --- */
function cambiarTono(delta) {
    if (!currentSong) return;
    currentOffset = (delta === 0) ? 0 : currentOffset + delta;
    displaySong(currentSong, currentOffset);
}

function cambiarTamanoTexto(delta) {
    fontSizeActual += delta;
    if (fontSizeActual < 0.8) fontSizeActual = 0.8;
    if (fontSizeActual > 2.2) fontSizeActual = 2.2;
    
    const visor = document.getElementById('visor-letra');
    if (visor) visor.style.fontSize = `${fontSizeActual}rem`;
}

function calcularNombreTono(tonoOriginal, offset) {
    if (!tonoOriginal) return '';
    const esMenor = tonoOriginal.endsWith('m');
    const notaBase = esMenor ? tonoOriginal.slice(0, -1) : tonoOriginal;

    let escala = escalaSostenidos;
    let index = escala.indexOf(notaBase);
    
    if (index === -1) {
        escala = escalaBemoles;
        index = escala.indexOf(notaBase);
    }

    if (index === -1) return tonoOriginal; // Si no la reconoce, la devuelve igual

    let nuevoIndex = (index + offset) % 12;
    if (nuevoIndex < 0) nuevoIndex += 12;

    return escala[nuevoIndex] + (esMenor ? 'm' : '');
}

/* --- PARSER DE ACORDES EN FORMATO FLEXBOX --- */
function formatearAcordesEnLetra(texto, offset, escala, tonoOriginal) {
    if (!texto) return '';

    const lineas = texto.split('\n');
    let htmlResult = '';

    lineas.forEach(linea => {
        if (linea.trim() === '') {
            htmlResult += `<div class="linea-vacia"></div>`;
            return;
        }

        htmlResult += `<div class="linea-cancion">`;

        // Busca patrones de acordes tipo [C], [G#m], [D/F#]
        const partes = linea.split(/(\[[^\]]+\])/g);

        partes.forEach(parte => {
            if (parte.startsWith('[') && parte.endsWith(']')) {
                const acordeOriginal = parte.slice(1, -1);
                const acordeTranspuesto = transponerAcordeCompuesto(acordeOriginal, offset);

                htmlResult += `
                    <div class="contenedor-palabra">
                        <div class="par-acorde-palabra">
                            <span class="acorde-texto">${acordeTranspuesto}</span>
                            <span class="palabra-texto"></span>
                        </div>
                    </div>
                `;
            } else if (parte.length > 0) {
                const palabras = parte.split(' ');
                palabras.forEach((palabra, idx) => {
                    if (palabra !== '') {
                        htmlResult += `
                            <div class="contenedor-palabra">
                                <div class="par-acorde-palabra">
                                    <span class="acorde-texto"></span>
                                    <span class="palabra-texto">${palabra}</span>
                                </div>
                            </div>
                        `;
                    }
                    if (idx < palabras.length - 1) {
                        htmlResult += `<span class="espacio-palabra"></span>`;
                    }
                });
            }
        });

        htmlResult += `</div>`;
    });

    return htmlResult;
}

function transponerAcordeCompuesto(acorde, offset) {
    if (offset === 0) return acorde;

    // Manejo de bajos compuestos como C/G
    if (acorde.includes('/')) {
        const subPartes = acorde.split('/');
        return transponerNotaSimple(subPartes[0], offset) + '/' + transponerNotaSimple(subPartes[1], offset);
    }

    return transponerNotaSimple(acorde, offset);
}

function transponerNotaSimple(nota, offset) {
    const regex = /^([A-G][#b]?)(.*)/;
    const match = nota.match(regex);

    if (!match) return nota;

    const notaBase = match[1];
    const adorno = match[2]; // m, 7, maj7, sus4, etc.

    let escala = escalaSostenidos;
    let index = escala.indexOf(notaBase);

    if (index === -1) {
        escala = escalaBemoles;
        index = escala.indexOf(notaBase);
    }

    if (index === -1) return nota;

    let nuevoIndex = (index + offset) % 12;
    if (nuevoIndex < 0) nuevoIndex += 12;

    return escala[nuevoIndex] + adorno;
                               }
