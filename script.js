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
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryTerm = document.getElementById('category-filter').value;
    const container = document.getElementById('song-list-container');
    
    if(!container) return;
    container.innerHTML = ''; 

    if (searchTerm.trim() === "" && categoryTerm === "todos") return; 

    const filtradas = canciones.filter(s => {
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
    const song = canciones.find(s => s.id === cancionActualId);
    const display = document.getElementById('main-content');
    if (!song || !display) return;

    const tonoDestino = calcularNombreTono(song.tonoOriginal, trasposicionActual);
    
    // Extraemos la base inteligente
    const match = tonoDestino.match(/^([A-G][#b]?m?)/);
    const tonoBase = match ? match[1] : tonoDestino;
    
    // Elegimos la escala correcta según nuestra nueva regla
    const escalaElegida = tonosConBemoles.includes(tonoBase) ? escBem : escSost;

    const letraFormateadaHtml = formatearAcordesEnLetra(song.letra, trasposicionActual, escalaElegida, tonoDestino);

    // --- LÓGICA PARA LOS LINKS EXTERNOS ---
    let botonesLinksHtml = '';
    
    if (song.linkYoutube) {
        botonesLinksHtml += `<a href="${song.linkYoutube}" target="_blank" style="display:inline-block; background:#ff0000; color:white; padding:5px 12px; border-radius:5px; text-decoration:none; font-size:0.9rem; margin-right:10px;">▶ YouTube</a>`;
    }
    if (song.linkPartitura) {
        botonesLinksHtml += `<a href="${song.linkPartitura}" target="_blank" style="display:inline-block; background:var(--accent); color:white; padding:5px 12px; border-radius:5px; text-decoration:none; font-size:0.9rem; margin-right:10px;">🎼 Partitura / Audio</a>`;
    }

    // Contenedor que solo aparece si hay al menos un link
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
                ${seccionRecursos} </div>
            <div class="lyrics-container" style="font-size: ${fontSizeActual}rem; line-height: 2.8;">
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
    
    // Creamos la versión bemol y le preguntamos a la regla si debe ir así
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

// FUNCIÓN RENOVA: Motor Híbrido que diferencia acordes en texto de acordes en intros
function formatearAcordesEnLetra(letraRaw, semitonos, escalaElegida, tonoDestino) {
    // 1. Convertimos los saltos de línea del texto a etiquetas <br>
    let textoHtml = letraRaw.replace(/\n/g, '<br>');
    
    // 2. Expresión que captura el acorde y el carácter que viene inmediatamente después
    const regexAcordePerfecto = /\[(.*?)\]([^\[<]?)/g;

    // 3. Evaluamos cada acorde de forma individual
    return textoHtml.replace(regexAcordePerfecto, (match, acorde, siguienteCaracter) => {
        let acordeFinal = trasponerAcorde(acorde, semitonos, escalaElegida);
        
        // Evaluamos mediante una expresión regular si el carácter siguiente es una letra o número
        const esLetraOTexto = siguienteCaracter && /[a-zA-Z0-9áéíóúÁÉÍÓÚñÑíÍóÓúÚüÜ]/.test(siguienteCaracter);
        
        if (esLetraOTexto) {
            // CASO 1: El acorde está sobre una palabra.
            // Usamos el sistema de ANCHO CERO absoluto para que las letras no se separen.
            return `<span class="acorde-wrapper"><span class="acorde-interno">${acordeFinal}</span></span>${siguienteCaracter}`;
        } else {
            // CASO 2: Es un acorde independiente (Intro, acordes seguidos o al final del renglón).
            // Conserva su ancho real para que se empujen entre sí, pero se eleva con CSS.
            let espacioBase = siguienteCaracter === " " ? "&nbsp;" : siguienteCaracter;
            return `<span class="acorde-bloque">${acordeFinal}</span>${espacioBase}`;
        }
    });
}

// --- 4. UTILIDADES ---

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
    document.getElementById('search-input').value = "";
    document.getElementById('category-filter').selectedIndex = 0;
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