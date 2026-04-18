// --- 1. VARIABLES Y ESCALAS ---
const escSost = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const escBem  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const preferSost = ['G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'Em', 'Bm', 'F#m', 'C#m', 'G#m', 'D#m'];

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
    const usaSost = preferSost.some(t => tonoDestino.startsWith(t));
    const escalaElegida = usaSost ? escSost : escBem;

    const letraFormateadaHtml = formatearAcordesEnLetra(song.letra, trasposicionActual, escalaElegida, tonoDestino);

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
            </div>
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
    const provisional = escSost[nuevoIndice];
    const usaSost = preferSost.includes(provisional) || preferSost.includes(provisional + adorno);
    
    return (usaSost ? escSost[nuevoIndice] : escBem[nuevoIndice]) + adorno;
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

function formatearAcordesEnLetra(letraRaw, semitonos, escalaElegida, tonoDestino) {
    let textoHtml = letraRaw.replace(/\n/g, '<br>');
    const regexAcordeTexto = /\[(.*?)\]([^\[\n<]*)/g;

    return textoHtml.replace(regexAcordeTexto, (match, acorde, textoSiguiente) => {
        let baseTexto = textoSiguiente;
        if (!baseTexto || baseTexto.trim() === "") baseTexto = "&nbsp;&nbsp;"; 
        let acordeFinal = trasponerAcorde(acorde, semitonos, escalaElegida);
        return `<ruby>${baseTexto}<rt>${acordeFinal}</rt></ruby>`;
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
    // Verificamos si hay canciones seleccionadas
    if (seleccionadas.length === 0) {
        return alert("Selecciona al menos una canción para generar el repertorio.");
    }
    
    // Guardamos el array de IDs en el almacenamiento local
    localStorage.setItem('repertorioActual', JSON.stringify(seleccionadas));
    
    // Redirigimos a la página del repertorio
    window.location.href = 'repertorio.html';
}