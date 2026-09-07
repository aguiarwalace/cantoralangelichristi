// Cantoral Online Angeli Christi - Lógica Principal (script.js)

// --- 1. VARIÁVEIS E ESCALAS MUSICAIS ---
const escSost = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const escBem  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

// Lista gramatical completa dos tons que utilizam bemóis (Maior e Menor)
const tonosConBemoles = ['F', 'Bb', 'Eb', 'Ab', 'Dm', 'Gm', 'Cm', 'Fm'];

let seleccionadas = [];
let cancionActualId = null;
let trasposicionActual = 0;
let fontSizeActual = 1.2; // Tamanho base em rem

// --- 2. FUNÇÃO AUXILIAR DE NORMALIZAÇÃO DE TEXTO ---

/**
 * Normaliza uma cadeia de texto para facilitar buscas flexíveis:
 * 1. Converte para minúsculas.
 * 2. Remove acentos e til.
 * 3. Elimina sinais de pontuação e caracteres especiais.
 * 4. Remove espaços desnecessários.
 * 
 * @param {string} texto - Texto original.
 * @returns {string} Texto limpo.
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

// --- 3. LÓGICA DE INTERFACE E FILTROS OPTIMIZADOS ---

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

/**
 * Filtra a lista de canções por título, autor, letra e categoria.
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
    
    // Extrai o tom base limpando sufixos ou capocastro
    const match = tonoDestino.match(/^([A-G][#b]?m?)/);
    const tonoBase = match ? match[1] : tonoDestino;
    
    // Seleciona a escala adequada (bemóis ou sustenidos)
    const escalaElegida = tonosConBemoles.includes(tonoBase) ? escBem : escSost;

    const letraFormateadaHtml = formatearAcordesEnLetra(song.letra, trasposicionActual, escalaElegida);

    // Links externos (YouTube e Partitura)
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

// --- 4. LÓGICA MUSICAL E TRANSPOSIÇÃO ---

function calcularNombreTono(tonoOriginal, semitonos) {
    if (!tonoOriginal) return '';
    
    const regex = /^([A-G][#b]?)(.*)$/;
    const match = tonoOriginal.match(regex);
    if (!match) return tonoOriginal;
    
    let raiz = match[1];
    let adorno = match[2];
    
    let indice = escSost.indexOf(raiz);
    if (indice === -1) indice = escBem.indexOf(raiz);
    if (indice === -1) return tonoOriginal;
    
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
 * Converte a letra formatando [acordes] e {indicações}.
 * Transpõe acordes em qualquer parte da linha, inclusive dentro de indicações.
 */
function formatearAcordesEnLetra(letraRaw, semitonos, escalaElegida) {
    if (!letraRaw) return '';

    // 1. Converte blocos entre { } em linhas com a classe "linea-bloque-indicacion"
    let textoProcesado = letraRaw.replace(/\{([\s\S]*?)\}/g, (match, contenido) => {
        const lineasBloque = contenido.split('\n');
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

        // 2. Se a linha for uma indicação entre { }, transpõe qualquer [acorde] presente nela
        if (linea.includes('class="linea-bloque-indicacion"')) {
            const lineaTranspuesta = linea.replace(/\[([^\]]+)\]/g, (m, acordeLimpio) => {
                const acordeTranspuesto = trasponerAcorde(acordeLimpio, semitonos, escalaElegida);
                return `<span class="acorde-texto inline-acorde">${acordeTranspuesto}</span>`;
            });
            htmlFinal += `<div class="linea-cancion">${lineaTranspuesta}</div>`;
            return;
        }

        // 3. Processamento padrão de linhas de letra com acordes alinhados
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

// --- 5. UTILITÁRIOS E CONTROLES ---

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
    console.log("Aplicação Angeli Christi pronta.");
};

function generateRepertoire() {
    if (seleccionadas.length === 0) {
        return alert("Seleciona pelo menos uma canção para gerar o repertório.");
    }
    localStorage.setItem('repertorioActual', JSON.stringify(seleccionadas));
    window.location.href = 'repertorio.html';
}

// --- 6. ATUALIZAÇÃO AUTOMÁTICA E SUPORTE OFFLINE ---

const CLAVE_LOCAL_CANCIONES = 'angeli_christi_canciones_v1';

function obtenerCancionesLocales() {
    const cancionesGuardadas = localStorage.getItem(CLAVE_LOCAL_CANCIONES);
    if (cancionesGuardadas) {
        try {
            return JSON.parse(cancionesGuardadas);
        } catch (e) {
            console.error("Erro ao ler canções salvas localmente:", e);
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
            console.log("🎵 Novas canções ou correções detetadas! Atualizando repertório...");
            
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
        console.warn("📡 Modo Offline ativado: A usar canções salvas no dispositivo.");
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
   CARGA DE CALENDÁRIO PARA PWA (OFFLINE + ANTI-CACHE)
   ======================================================= */

const URL_WEB_APP_GOOGLE = "https://script.google.com/macros/s/AKfycby8GXF2HslQN45DlEY156SVfH452tqeeA0i8u5wRvDratojoCFQgwSr8wvNpqrNGGf0xA/exec";
const CALENDAR_CACHE_KEY = 'cantoral_eventos_cache';

async function cargarEventosDinamicos() {
    const eventsContainer = document.getElementById('calendar-events-list');
    const loadingElement = document.getElementById('calendar-loading');

    if (!eventsContainer) return;

    const datosGuardados = localStorage.getItem(CALENDAR_CACHE_KEY);
    if (datosGuardados) {
        try {
            const eventosCache = JSON.parse(datosGuardados);
            renderizarEventos(eventosCache, eventsContainer, loadingElement);
        } catch (e) {
            console.error("Erro ao ler o cache local:", e);
        }
    }

    try {
        const cacheBuster = new Date().getTime();
        const urlComCacheBuster = `${URL_WEB_APP_GOOGLE}?nocache=${cacheBuster}`;

        const response = await fetch(urlComCacheBuster, {
            method: 'GET',
            redirect: 'follow'
        });

        if (!response.ok) {
            throw new Error(`Erro na rede: ${response.status}`);
        }

        const eventosNuevos = await response.json();

        localStorage.setItem(CALENDAR_CACHE_KEY, JSON.stringify(eventosNuevos));
        renderizarEventos(eventosNuevos, eventsContainer, loadingElement);

    } catch (error) {
        console.warn("Não foi possível ligar ao Google Sheets (Modo Offline):", error);

        if (!datosGuardados && loadingElement) {
            loadingElement.innerText = "Não foi possível carregar os eventos.";
        } else if (loadingElement) {
            loadingElement.style.display = 'none';
        }
    }
}

function renderizarEventos(eventos, container, loadingElement) {
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const eventosFuturos = eventos.filter(ev => {
        if (!ev.fecha) return false;
        const partesFecha = ev.fecha.split('-');
        const fechaEvento = new Date(partesFecha[0], partesFecha[1] - 1, partesFecha[2]);
        return fechaEvento >= hoy;
    });

    const proximos10Eventos = eventosFuturos.slice(0, 20);

    if (proximos10Eventos.length === 0) {
        container.innerHTML = "<p>Não há eventos próximos agendados.</p>";
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
            linkPin = ` <a href="${ev.ubic_url.trim()}" target="_blank" rel="noopener" title="Ver localização no Google Maps">📍</a>`;
        }

        const lugarTexto = ev.lugar ? ` - ${ev.lugar}` : '';
        const linea2 = `${ev.titulo}${lugarTexto}${linkPin}`;
        const linea3 = ev.observaciones ? `→ ${ev.observaciones}` : '';
        return `
            <p>
                <strong>${linea1}</strong> <br>
                ${linea2} <br>
                ${linea3}
            </p>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', cargarEventosDinamicos);