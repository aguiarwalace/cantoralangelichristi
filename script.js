// Cantoral Online Angeli Christi - Lógica Principal (script.js)

// --- 1. VARIABLES Y ESCALAS ---
const escSost = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const escBem  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
// Lista gramatical exacta de los tonos que llevan bemoles
const tonosConBemoles = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Dm', 'Gm', 'Cm', 'Fm', 'Bbm'];

let seleccionadas = [];
let cancionActualId = null;
let trasposicionActual = 0;
let fontSizeActual = 1.2; // Tamaño base en rem

// --- 2. FUNCIÓN AUXILIAR DE NORMALIZACIÓN DE TEXTO ---

/**
 * Normaliza una cadena de texto para facilitar búsquedas flexibles:
 * 1. Convierte a minúsculas.
 * 2. Remueve acentos y tildes (NFD + Regex).
 * 3. Elimina signos de puntuación, símbolos y caracteres especiales.
 * 4. Recorta espacios innecesarios.
 * 
 * @param {string} texto - Cadena de texto original.
 * @returns {string} Texto limpio sin acentos ni puntuación.
 */
function normalizarTexto(texto) {
    if (!texto) return '';
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Elimina acentos/diacríticos
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'¡!¿«»]/g, '') // Elimina signos de puntuación
        .trim();
}

// --- 3. LÓGICA DE INTERFAZ Y FILTROS OPTIMIZADOS ---

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

/**
 * Filtra la lista de canciones considerando:
 * - Búsqueda insensible a tildes, mayúsculas y signos de puntuación.
 * - Coincidencia por palabras independientes (Multi-palabra).
 * - Búsqueda en Título, Autor y Letra.
 * - Categoría o apartado litúrgico seleccionado.
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

    // Obtener la lista activa (Memoria o LocalStorage)
    const listaBase = (typeof canciones !== 'undefined') ? canciones : obtenerCancionesLocales();

    // Normalizamos el texto de búsqueda y lo dividimos en palabras clave individuales
    const textoBusquedaNorm = normalizarTexto(rawSearchTerm);
    const palabrasClave = textoBusquedaNorm.split(/\s+/).filter(palabra => palabra.length > 0);

    const filtradas = listaBase.filter(s => {
        // 1. Validar categoría
        const coincideCategoria = (categoryTerm === 'todos' || 
                                    s.categoria.toLowerCase().includes(categoryTerm.toLowerCase()));
        if (!coincideCategoria) return false;

        // Si no se escribió nada en el buscador pero hay una categoría activa
        if (palabrasClave.length === 0) return true;

        // 2. Normalizar campos de la canción
        const tituloNorm = normalizarTexto(s.titulo);
        const autorNorm = normalizarTexto(s.autor || '');
        const letraNorm = normalizarTexto(s.letra);

        // Combinar los campos para permitir búsquedas cruzadas (ej: "autor palabra_letra")
        const contenidoCompleto = `${tituloNorm} ${autorNorm} ${letraNorm}`;

        // 3. Verificar que TODAS las palabras clave buscadas existan dentro del contenido de la canción
        return palabrasClave.every(palabra => contenidoCompleto.includes(palabra));
    });

    // Renderizar resultados
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

    // Formateo dinámico en Flexbox con soporte para marcas entre {}
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

// --- 4. LÓGICA MUSICAL ---

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
 * Procesa la letra convirtiendo [acordes] e {indicaciones}
 * manteniendo el formato alineado Flexbox de la app.
 */
/**
 * Procesa la letra convirtiendo [acordes] e {indicaciones/tablaturas}
 * manteniendo el formato alineado Flexbox de la app.
 */
/**
 * Procesa la letra convirtiendo [acordes] e {indicaciones/tablaturas}
 * manteniendo el formato alineado Flexbox de la app.
 */
/**
 * Procesa la letra convirtiendo [acordes] e {indicaciones/tablaturas}
 * Soporta saltos de línea dentro de las llaves { }.
 */
function formatearAcordesEnLetra(letraRaw, semitonos, escalaElegida) {
    if (!letraRaw) return '';

    // 1. Buscamos bloques entre { } que pueden incluir saltos de línea [\s\S]*?
    let textoProcesado = letraRaw.replace(/\{([\s\S]*?)\}/g, (match, contenido) => {
        // Dividimos el interior del bloque { } por cada salto de línea
        const lineasBloque = contenido.split('\n');
        
        // Convertimos cada línea del bloque en una línea estilizada con clase indicacion-texto
        return lineasBloque.map(linea => {
            return `<div class="linea-bloque-indicacion"><span class="indicacion-texto">${linea}</span></div>`;
        }).join('\n');
    });

    const lineas = textoProcesado.trim().split('\n');
    let htmlFinal = '<div class="visor-cancion">';

    lineas.forEach(linea => {
        if (!linea.trim()) {
            htmlFinal += '<div class="linea-vacia"></div>';
            return;
        }

        // Si la línea pertenece a un bloque de indicación/tablatura
        if (linea.includes('class="linea-bloque-indicacion"')) {
            htmlFinal += `<div class="linea-cancion">${linea}</div>`;
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
                    // Es un ACORDE
                    const acordeLimpio = parte.slice(1, -1);
                    acordeActual = trasponerAcorde(acordeLimpio, semitonos, escalaElegida);
                } else {
                    // Es TEXTO/LETRA normal
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

// --- 5. UTILIDADES Y CONTROLES ---

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

// --- 6. ACTUALIZACIÓN AUTOMÁTICA Y SOPORTE OFFLINE ---

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

/* =======================================================
   CARGA DE CALENDARIO PARA PWA (OFFLINE + ANTI-CACHE)
   ======================================================= */

const URL_WEB_APP_GOOGLE = "https://script.google.com/macros/s/AKfycby8GXF2HslQN45DlEY156SVfH452tqeeA0i8u5wRvDratojoCFQgwSr8wvNpqrNGGf0xA/exec";
const CALENDAR_CACHE_KEY = 'cantoral_eventos_cache';

async function cargarEventosDinamicos() {
    const eventsContainer = document.getElementById('calendar-events-list');
    const loadingElement = document.getElementById('calendar-loading');

    if (!eventsContainer) return;

    // STEP 1: Intentar cargar datos desde el almacenamiento local (Offline PWA)
    const datosGuardados = localStorage.getItem(CALENDAR_CACHE_KEY);
    if (datosGuardados) {
        try {
            const eventosCache = JSON.parse(datosGuardados);
            renderizarEventos(eventosCache, eventsContainer, loadingElement);
        } catch (e) {
            console.error("Error al leer el cache local:", e);
        }
    }

    // STEP 2: Consultar Google Sheets para obtener los datos más recientes
    try {
        const cacheBuster = new Date().getTime();
        const urlComCacheBuster = `${URL_WEB_APP_GOOGLE}?nocache=${cacheBuster}`;

        const response = await fetch(urlComCacheBuster, {
            method: 'GET',
            redirect: 'follow'
        });

        if (!response.ok) {
            throw new Error(`Error en la red: ${response.status}`);
        }

        const eventosNuevos = await response.json();

        // Guardar la copia más reciente en la memoria del dispositivo para uso offline
        localStorage.setItem(CALENDAR_CACHE_KEY, JSON.stringify(eventosNuevos));

        // Renderizar nuevamente con la información fresca
        renderizarEventos(eventosNuevos, eventsContainer, loadingElement);

    } catch (error) {
        console.warn("No se pudo conectar con Google Sheets (Modo Offline o red lenta):", error);

        if (!datosGuardados && loadingElement) {
            loadingElement.innerText = "No se pudieron cargar los eventos.";
        } else if (loadingElement) {
            loadingElement.style.display = 'none';
        }
    }
}

/**
 * Función auxiliar para procesar y dibujar el HTML de los eventos
 */
function renderizarEventos(eventos, container, loadingElement) {
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    // Filtrar solo los eventos futuros
    const eventosFuturos = eventos.filter(ev => {
        if (!ev.fecha) return false;
        const partesFecha = ev.fecha.split('-');
        const fechaEvento = new Date(partesFecha[0], partesFecha[1] - 1, partesFecha[2]);
        return fechaEvento >= hoy;
    });

    const proximos10Eventos = eventosFuturos.slice(0, 20);

    if (proximos10Eventos.length === 0) {
        container.innerHTML = "<p>No hay eventos próximos programados.</p>";
        return;
    }

    container.innerHTML = proximos10Eventos.map(ev => {
        let fechaFormateada = ev.fecha;
        if (ev.fecha.includes('-')) {
            const [anio, mes, dia] = ev.fecha.split('-');
            fechaFormateada = `${dia}/${mes}`;
        }

        const horaTexto = ev.hora ? `: ${ev.hora}` : '';
        const linea1 = `${fechaFormateada}${horaTexto}`;

        let linkPin = '';
        if (ev.ubic_url && typeof ev.ubic_url === 'string' && ev.ubic_url.trim().startsWith('http')) {
            linkPin = ` <a href="${ev.ubic_url.trim()}" target="_blank" rel="noopener" title="Ver ubicación en Google Maps">📍</a>`;
        }

        const lugarTexto = ev.lugar ? ` - ${ev.lugar}` : '';
        const linea2 = `${ev.titulo}${lugarTexto}${linkPin}`;

        return `
            <p>
                ${linea1} <br>
                ${linea2}
            </p>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', cargarEventosDinamicos);