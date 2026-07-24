// Cantoral Online Angeli Christi - Lógica Principal (script.js)

// --- 1. VARIABLES Y ESCALAS ---
const escSost = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const escBem  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
// Lista gramatical exacta de los tonos que llevan bemoles
const tonosConBemoles = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Dm', 'Gm', 'Cm', 'Fm', 'Bbm', 'Ebm'];

let seleccionadas = [];
let cancionActualId = null;
let trasposicionActual = 0;
let fontSizeActual = 1.2; // Tamaño base en rem

// --- 2. LÓGICA DE INTERFAZ Y FILTROS ---

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

function filterSongs() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const container = document.getElementById('song-list-container');
    
    if (!container || !searchInput || !categoryFilter) return;

    const searchTerm = searchInput.value.toLowerCase();
    const categoryTerm = categoryFilter.value;
    
    container.innerHTML = ''; 

    if (searchTerm.trim() === "" && categoryTerm === "todos") return; 

    // Obtener la lista activa (Memoria o LocalStorage)
    const listaBase = (typeof canciones !== 'undefined') ? canciones : obtenerCancionesLocales();

    const filtradas = listaBase.filter(s => {
        const coincideTitulo = s.titulo.toLowerCase().includes(searchTerm);
        const coincideLetra = s.letra.toLowerCase().includes(searchTerm);
        const coincideCategoria = (categoryTerm === 'todos' || 
                                    s.categoria.toLowerCase().includes(categoryTerm.toLowerCase()));
        return (coincideTitulo || coincideLetra) && coincideCategoria;
    });

    filtradas.forEach(s => {
        const div = document.createElement('div');
        div.className = 'song-item';
        const isChecked = seleccionadas.includes(s.id) ? 'checked' : '';
        div.innerHTML = `
            <input type="checkbox" onchange="toggleSelect(${s.id})" ${isChecked}>
            <div onclick="prepararDisplay(${s.id})" style="flex-grow:1; cursor:pointer">
                <strong>${s.titulo}</strong><br>
                <small>${s.autor} - (${s.tonoOriginal})</small>
            </div>
        `;
        container.appendChild(div);
    });
}

function prepararDisplay(id) {
    cancionActualId = id;
    trasposicionActual = 0;
    displaySong();
    toggleMenu();
}

function displaySong() {
    const listaBase = (typeof canciones !== 'undefined') ? canciones : obtenerCancionesLocales();
    const song = listaBase.find(s => s.id === cancionActualId);
    const display = document.getElementById('main-content');
    if (!song || !display) return;

    const tonoDestino = calcularNombreTono(song.tonoOriginal, trasposicionActual);
    
    // Extraemos la base inteligente
    const match = tonoDestino.match(/^([A-G][#b]?m?)/);
    const tonoBase = match ? match[1] : tonoDestino;
    
    // Elegimos la escala correcta según regla de bemoles
    const escalaElegida = tonosConBemoles.includes(tonoBase) ? escBem : escSost;

    // Formateo dinámico en Flexbox
    const letraFormateadaHtml = formatearAcordesEnLetra(song.letra, trasposicionActual, escalaElegida);

    // --- LÓGICA PARA LOS LINKS EXTERNOS ---
    let botonesLinksHtml = '';
    
    if (song.linkYoutube) {
        botonesLinksHtml += `<a href="${song.linkYoutube}" target="_blank" style="display:inline-block; background:#ff0000; color:white; padding:5px 12px; border-radius:5px; text-decoration:none; font-size:0.9rem; margin-right:10px;">▶ YouTube</a>`;
    }
    if (song.linkPartitura) {
        botonesLinksHtml += `<a href="${song.linkPartitura}" target="_blank" style="display:inline-block; background:var(--accent); color:white; padding:5px 12px; border-radius:5px; text-decoration:none; font-size:0.9rem; margin-right:10px;">🎼 Partitura / Audio</a>`;
    }

    let seccionRecursos = botonesLinksHtml ? `<div style="margin-top: 15px;">${botonesLinksHtml}</div>` : '';

    display.innerHTML = `
        <div class="song-card">
            <div class="song-header">
                <h2>${song.titulo}</h2>
                <div class="controles-group" style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center;">
                    <div class="controles-tono">
                        <button onclick="cambiarTono(-1)">-</button>
                        <button onclick="cambiarTono(0)">⟳</button>
                        <button onclick="cambiarTono(1)">+</button>
                        <span>Tono: <strong>${tonoDestino}</strong></span>
                    </div>
                    <div class="controles-tono">
                        <button class="btn-size" onclick="cambiarTamano(-0.1)">A-</button>
                        <button class="btn-size" onclick="cambiarTamano(0.1)">A+</button>
                        <span>Letra</span>
                    </div>
                </div>
                <p style="color: #666; margin-top:10px;"><em>Autor: ${song.autor}</em></p>
                ${seccionRecursos}
            </div>
            <div class="lyrics-container" style="font-size: ${fontSizeActual}rem;">
                ${letraFormateadaHtml}
            </div>
        </div>
    `;
}

// --- 3. LÓGICA MUSICAL ---

function calcularNombreTono(tonoOriginal, semitonos) {
    const regex = /^([A-G][#b]?)(.*)$/;
    const match = tonoOriginal.match(regex);
    if (!match) return tonoOriginal;
    
    let raiz = match[1];
    let adorno = match[2];
    
    let indice = escSost.indexOf(raiz);
    if (indice === -1) indice = escBem.indexOf(raiz);
    
    let nuevoIndice = (indice + semitonos + 12) % 12;
    
    const baseBem = escBem[nuevoIndice] + adorno;
    const matchBase = baseBem.match(/^([A-G][#b]?m?)/);
    const tonoParaComparar = matchBase ? matchBase[1] : baseBem;
    
    if (tonosConBemoles.includes(tonoParaComparar)) {
        return escBem[nuevoIndice] + adorno;
    } else {
        return escSost[nuevoIndice] + adorno;
    }
}

function trasponerAcorde(acordeStr, semitonos, escalaElegida) {
    return acordeStr.replace(/[A-G][#b]?/g, (nota) => {
        let indice = escSost.indexOf(nota);
        if (indice === -1) indice = escBem.indexOf(nota);
        if (indice === -1) return nota;
        let nIdx = (indice + semitonos + 12) % 12;
        return escalaElegida[nIdx];
    });
}

/**
 * MOTOR RESPONSIVO FLEXBOX: Convierte la letra con [Acordes] en contenedores
 * indivisibles para evitar solapamientos y cortes de palabras en celulares.
 */
function formatearAcordesEnLetra(letraRaw, semitonos, escalaElegida) {
    if (!letraRaw) return '';

    const lineas = letraRaw.trim().split('\n');
    let htmlFinal = '<div class="visor-cancion">';

    lineas.forEach(linea => {
        // Línea vacía entre estrofas
        if (!linea.trim()) {
            htmlFinal += '<div class="linea-vacia"></div>';
            return;
        }

        htmlFinal += '<div class="linea-cancion">';
        const palabras = linea.split(' ');

        palabras.forEach((palabra, index) => {
            if (!palabra) return;

            // Envoltorio para evitar que la palabra se divida al final del renglón
            htmlFinal += '<span class="contenedor-palabra">';

            // Separar acordes [X] del texto
            const partes = palabra.split(/(\[[^\]]+\])/g);
            let acordeActual = '';

            partes.forEach(parte => {
                if (!parte) return;

                if (parte.startsWith('[') && parte.endsWith(']')) {
                    const acordeLimpio = parte.slice(1, -1);
                    acordeActual = trasponerAcorde(acordeLimpio, semitonos, escalaElegida);
                } else {
                    htmlFinal += `
                        <div class="par-acorde-palabra">
                            <span class="acorde-texto">${acordeActual}</span>
                            <span class="palabra-texto">${parte}</span>
                        </div>`;
                    acordeActual = '';
                }
            });

            // Si quedó un acorde solo al final (ej. Intros)
            if (acordeActual) {
                htmlFinal += `
                    <div class="par-acorde-palabra">
                        <span class="acorde-texto">${acordeActual}</span>
                        <span class="palabra-texto">&nbsp;</span>
                    </div>`;
            }

            htmlFinal += '</span>';

            // Espacio entre palabras
            if (index < palabras.length - 1) {
                htmlFinal += '<span class="espacio-palabra"></span>';
            }
        });

        htmlFinal += '</div>';
    });

    htmlFinal += '</div>';
    return htmlFinal;
}

// --- 4. UTILIDADES Y CONTROLES ---

function cambiarTono(valor) {
    trasposicionActual = (valor === 0) ? 0 : trasposicionActual + valor;
    displaySong();
}

function cambiarTamano(delta) {
    fontSizeActual += delta;
    if (fontSizeActual < 0.8) fontSizeActual = 0.8;
    if (fontSizeActual > 3.0) fontSizeActual = 3.0;

    const container = document.querySelector('.lyrics-container');
    if (container) {
        container.style.fontSize = fontSizeActual + 'rem';
    }
}

function toggleSelect(id) {
    const idx = seleccionadas.indexOf(id);
    if (idx > -1) seleccionadas.splice(idx, 1);
    else seleccionadas.push(id);
}

function clearSearch() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    if (searchInput) searchInput.value = "";
    if (categoryFilter) categoryFilter.selectedIndex = 0;
    filterSongs();
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkTheme', document.body.classList.contains('dark-mode'));
}

window.onload = () => {
    if (localStorage.getItem('darkTheme') === 'true') document.body.classList.add('dark-mode');
    console.log("Aplicación Angeli Christi lista.");
};

function generateRepertoire() {
    if (seleccionadas.length === 0) {
        return alert("Selecciona al menos una canción para generar el repertorio.");
    }
    localStorage.setItem('repertorioActual', JSON.stringify(seleccionadas));
    window.location.href = 'repertorio.html';
}

// --- 5. ACTUALIZACIÓN AUTOMÁTICA Y SOPORTE OFFLINE ---

const CLAVE_LOCAL_CANCIONES = 'angeli_christi_canciones_v1';

function obtenerCancionesLocales() {
    const cancionesGuardadas = localStorage.getItem(CLAVE_LOCAL_CANCIONES);
    if (cancionesGuardadas) {
        try {
            return JSON.parse(cancionesGuardadas);
        } catch (e) {
            console.error("Error al leer canciones guardadas localmente:", e);
        }
    }
    return typeof canciones !== 'undefined' ? canciones : [];
}

async function comprobarActualizacionesCanciones() {
    try {
        const urlAntiCache = `lista_canciones.js?t=${Date.now()}`;
        const respuesta = await fetch(urlAntiCache);

        if (!respuesta.ok) return;

        const textoScript = await respuesta.text();
        const scriptAnterior = localStorage.getItem('angeli_christi_script_raw');

        if (textoScript !== scriptAnterior) {
            console.log("🎵 ¡Nuevas canciones o correcciones detectadas! Actualizando repertorio...");
            
            localStorage.setItem('angeli_christi_script_raw', textoScript);

            const nuevoScript = document.createElement('script');
            nuevoScript.text = textoScript;
            document.head.appendChild(nuevoScript);

            if (typeof canciones !== 'undefined') {
                localStorage.setItem(CLAVE_LOCAL_CANCIONES, JSON.stringify(canciones));
            }

            if (typeof filterSongs === 'function') {
                filterSongs();
            }
            if (cancionActualId !== null && typeof displaySong === 'function') {
                displaySong();
            }
        } else {
            console.log("✅ El repertorio ya está en su versión más reciente.");
        }

    } catch (error) {
        console.warn("📡 Modo Offline activado: Usando canciones guardadas en el dispositivo.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof filterSongs === 'function') {
        filterSongs();
    }
    comprobarActualizacionesCanciones();
});

window.addEventListener("focus", () => {
    comprobarActualizacionesCanciones();
});
