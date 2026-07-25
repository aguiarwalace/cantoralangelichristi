// Cantoral Online Angeli Christi - Lógica Principal (script.js)

// --- 1. VARIÁVEIS E ESCALAS MUSICAIS ---
const escSost = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const escBem  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

// Lista exata dos tons que utilizam bemóis por regra harmónica
const tonosConBemoles = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Dm', 'Gm', 'Cm', 'Fm', 'Bbm', 'Ebm'];

let seleccionadas = [];
let cancionActualId = null;
let trasposicionActual = 0;
let fontSizeActual = 1.2; // Tamanho base em rem

// --- 2. NORMALIZAÇÃO DE TEXTO PARA BUSCAS ---

/**
 * Normaliza uma string de texto para facilitar buscas flexíveis:
 * 1. Converte para minúsculas.
 * 2. Remove acentos e til.
 * 3. Elimina pontuação e símbolos especiais.
 * 4. Remove espaços desnecessários.
 */
function normalizarTexto(texto) {
    if (!texto) return '';
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'¡!¿«»]/g, '')
        .trim();
}

// --- 3. LÓGICA DE INTERFACE E FILTROS ---

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

/**
 * Filtra a lista de músicas considerando termo de pesquisa e categoria.
 */
function filterSongs() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const container = document.getElementById('song-list-container');
    
    if (!container || !searchInput || !categoryFilter) return;

    const rawSearchTerm = searchInput.value;
    const categoryTerm = categoryFilter.value;
    
    container.innerHTML = ''; 

    if (rawSearchTerm.trim() === "" && categoryTerm === "todos") return; 

    const listaBase = (typeof canciones !== 'undefined') ? canciones : obtenerCancionesLocales();

    const textoBusquedaNorm = normalizarTexto(rawSearchTerm);
    const palabrasClave = textoBusquedaNorm.split(/\s+/).filter(palabra => palabra.length > 0);

    const filtradas = listaBase.filter(s => {
        const coincideCategoria = (categoryTerm === 'todos' || 
                                    s.categoria.toLowerCase().includes(categoryTerm.toLowerCase()));
        if (!coincideCategoria) return false;

        if (palabrasClave.length === 0) return true;

        const tituloNorm = normalizarTexto(s.titulo);
        const autorNorm = normalizarTexto(s.autor || '');
        const letraNorm = normalizarTexto(s.letra);

        const contenidoCompleto = `${tituloNorm} ${autorNorm} ${letraNorm}`;

        return palabrasClave.every(palabra => contenidoCompleto.includes(palabra));
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
    
    const match = tonoDestino.match(/^([A-G][#b]?m?)/);
    const tonoBase = match ? match[1] : tonoDestino;
    
    const escalaElegida = tonosConBemoles.includes(tonoBase) ? escBem : escSost;

    const letraFormateadaHtml = formatearAcordesEnLetra(song.letra, trasposicionActual, escalaElegida);

    let botonesLinksHtml = '';
    
    if (song.linkYoutube) {
        botonesLinksHtml += `<a href="${song.linkYoutube}" target="_blank" style="display:inline-block; background:#ff0000; color:white; padding:5px 12px; border-radius:5px; text-decoration:none; font-size:0.9rem; margin-right:10px;">▶ YouTube</a>`;
    }
    if (song.linkPartitura) {
        botonesLinksHtml += `<a href="${song.linkPartitura}" target="_blank" style="display:inline-block; background:var(--accent); color:white; padding:5px 12px; border-radius:5px; text-decoration:none; font-size:0.9rem; margin-right:10px;">🎼 Partitura / Áudio</a>`;
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

// --- 4. LÓGICA MUSICAL E TRANSPOSIÇÃO ---

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

function formatearAcordesEnLetra(letraRaw, semitonos, escalaElegida) {
    if (!letraRaw) return '';

    const lineas = letraRaw.trim().split('\n');
    let htmlFinal = '<div class="visor-cancion">';

    lineas.forEach(linea => {
        if (!linea.trim()) {
            htmlFinal += '<div class="linea-vacia"></div>';
            return;
        }

        htmlFinal += '<div class="linea-cancion">';
        const palabras = linea.split(' ');

        palabras.forEach((palabra, index) => {
            if (!palabra) return;

            htmlFinal += '<span class="contenedor-palabra">';
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

            if (acordeActual) {
                htmlFinal += `
                    <div class="par-acorde-palabra">
                        <span class="acorde-texto">${acordeActual}</span>
                        <span class="palabra-texto">&nbsp;</span>
                    </div>`;
            }

            htmlFinal += '</span>';

            if (index < palabras.length - 1) {
                htmlFinal += '<span class="espacio-palabra"></span>';
            }
        });

        htmlFinal += '</div>';
    });

    htmlFinal += '</div>';
    return htmlFinal;
}

// --- 5. CONTROLES DE INTERFACE E UTILITÁRIOS ---

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
    console.log("Aplicativo Angeli Christi pronto.");
};

function generateRepertoire() {
    if (seleccionadas.length === 0) {
        return alert("Selecciona al menos una canción para generar el repertorio.");
    }
    localStorage.setItem('repertorioActual', JSON.stringify(seleccionadas));
    window.location.href = 'repertorio.html';
}

// --- 6. ATUALIZAÇÃO AUTOMÁTICA E MODO OFFLINE ---

const CLAVE_LOCAL_CANCIONES = 'angeli_christi_canciones_v1';

function obtenerCancionesLocales() {
    const cancionesGuardadas = localStorage.getItem(CLAVE_LOCAL_CANCIONES);
    if (cancionesGuardadas) {
        try {
            return JSON.parse(cancionesGuardadas);
        } catch (e) {
            console.error("Erro ao ler músicas salvas localmente:", e);
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
            console.log("🎵 Novas músicas ou correções detetadas! Atualizando repertório...");
            
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
            console.log("✅ O repertório já está na versão mais recente.");
        }

    } catch (error) {
        console.warn("📡 Modo Offline ativo: A utilizar músicas salvas no dispositivo.");
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
