// --- 1. VARIABLES Y ESCALAS ---
const escSost = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const escBem  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const nombresTonalidad = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

let seleccionadas = [];
let cancionActualId = null;
let trasposicionActual = 0;

// --- 2. LÓGICA DE INTERFAZ Y FILTROS ---

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    } else {
        console.error("No se encontró el elemento con id 'sidebar'");
    }
}

function filterSongs() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryTerm = document.getElementById('category-filter').value;
    const container = document.getElementById('song-list-container');
    
    if(!container) return;
    container.innerHTML = ''; 

    // --- NUEVA LÓGICA DE LIMPIEZA ---
    // Si no hay nada escrito Y el filtro está en "todos", no mostramos nada y salimos de la función
    if (searchTerm.trim() === "" && categoryTerm === "todos") {
        return; // Detiene la ejecución aquí para que la lista quede vacía
    }
    // --------------------------------

    const filtradas = canciones.filter(s => {
        const coincideTitulo = s.titulo.toLowerCase().includes(searchTerm);
        const coincideLetra = s.letra.toLowerCase().includes(searchTerm);
        const coincideCategoria = (categoryTerm === 'todos' || s.categoria.toLowerCase() === categoryTerm.toLowerCase());
        
        return (coincideTitulo || coincideLetra) && coincideCategoria;
    });

    filtradas.forEach(s => {
        const div = document.createElement('div');
        div.className = 'song-item';
        const isChecked = seleccionadas.includes(s.id) ? 'checked' : '';
        div.innerHTML = `
            <input type="checkbox" onchange="toggleSelect(${s.id})" ${isChecked}>
            <span onclick="prepararDisplay(${s.id})" style="cursor:pointer">
                <strong>${s.titulo}</strong><br>
                <small>${s.autor} - (${s.tonoOriginal})</small>
            </span>
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
    const usaBemoles = tonoDestino.includes('b') || (tonoDestino.startsWith('F') && !tonoDestino.startsWith('F#'));
    const escalaParaLetra = usaBemoles ? escBem : escSost;

    const letraFormateadaHtml = formatearAcordesEnLetra(song.letra, trasposicionActual, escalaParaLetra);

    display.innerHTML = `
        <div class="song-card">
            <div class="song-header">
                <h2>${song.titulo}</h2>
                <div class="controles-tono">
                    <button onclick="cambiarTono(-1)">-</button>
                    <button onclick="cambiarTono(0)">⟳</button>
                    <button onclick="cambiarTono(1)">+</button>
                    <span>Tono: <strong>${tonoDestino}</strong></span>
                </div>
                <p style="color: #666;"><em>Autor: ${song.autor}</em></p>
            </div>
            <div class="lyrics-container">
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
    
    let nuevoIndice = (indice + semitonos) % 12;
    if (nuevoIndice < 0) nuevoIndice += 12;

    return nombresTonalidad[nuevoIndice] + adorno;
}

function trasponerAcorde(acordeStr, semitonos, escalaElegida) {
    const regex = /^([A-G][#b]?)(.*)$/;
    const match = acordeStr.match(regex);
    if (!match) return acordeStr;

    let notaRaiz = match[1];
    let adornos = match[2];

    let indice = escSost.indexOf(notaRaiz);
    if (indice === -1) indice = escBem.indexOf(notaRaiz);
    if (indice === -1) return acordeStr;

    let nuevoIndice = (indice + semitonos) % 12;
    if (nuevoIndice < 0) nuevoIndice += 12;

    return escalaElegida[nuevoIndice] + adornos;
}

function formatearAcordesEnLetra(letraRaw, semitonos, escalaElegida) {
    // Reemplaza saltos de línea y maneja la notación [Acorde]Texto
    let textoHtml = letraRaw.replace(/\n/g, '<br>');
    const regexAcordeTexto = /\[(.*?)\]([^\[\s]*)/g;

    textoHtml = textoHtml.replace(regexAcordeTexto, (match, acorde, textoSiguiente) => {
        let baseTexto = textoSiguiente || '&nbsp;'; 
        let acordeFinal = trasponerAcorde(acorde, semitonos, escalaElegida);
        return `<ruby>${baseTexto}<rt>${acordeFinal}</rt></ruby>`;
    });

    return textoHtml;
}

// --- 4. UTILIDADES Y EVENTOS ---

function cambiarTono(valor) {
    if (valor === 0) trasposicionActual = 0;
    else trasposicionActual += valor;
    displaySong();
}

function toggleSelect(id) {
    const idx = seleccionadas.indexOf(id);
    if (idx > -1) seleccionadas.splice(idx, 1);
    else seleccionadas.push(id);
}

function generateRepertoire() {
    if (seleccionadas.length === 0) return alert("Selecciona al menos una canción");
    localStorage.setItem('repertorioActual', JSON.stringify(seleccionadas));
    window.location.href = 'repertorio.html';
}

window.onload = () => {
    // Ya no llamamos a filterSongs() aquí para que la lista empiece vacía
    console.log("Aplicación Angeli Christi lista.");
};
function clearSearch() {
    // 1. Limpiamos el texto del buscador
    document.getElementById('search-input').value = "";
    
    // 2. Reseteamos el selector de categorías a la primera opción ("todos")
    document.getElementById('category-filter').selectedIndex = 0;
    
    // 3. Ejecutamos el filtro para que la lista se vacíe (por la regla de "si está vacío, no mostrar nada")
    filterSongs();
    
    console.log("Búsqueda y filtros reseteados.");
}
function toggleDarkMode() {
    // Alterna una clase llamada 'dark-mode' en el cuerpo de la página
    document.body.classList.toggle('dark-mode');
    
    // Opcional: Guardar la preferencia en el navegador
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkTheme', isDark);
    
    console.log("Modo oscuro:", isDark);
}

// Para que el modo oscuro se mantenga al recargar la página
if (localStorage.getItem('darkTheme') === 'true') {
    document.body.classList.add('dark-mode');
}