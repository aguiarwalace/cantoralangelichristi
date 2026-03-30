// 1. FUNCIÓN DE MENÚ (SIEMPRE ARRIBA)
function toggleMenu() {
    console.log("Botón presionado"); // Esto nos dirá en la consola si funciona
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    } else {
        console.error("Error: No encontré el ID 'sidebar' en el HTML");
    }
}

// 2. BUSCADOR (FILTRO)
function filterSongs() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryTerm = document.getElementById('category-filter').value;
    const container = document.getElementById('song-list-container');
    
    if(!container) return; // Seguridad
    container.innerHTML = ''; 

    // Usamos el array 'canciones' que viene del archivo lista_canciones.js
    const filtradas = canciones.filter(s => {
        const coincideTitulo = s.titulo.toLowerCase().includes(searchTerm);
        const coincideLetra = s.letra.toLowerCase().includes(searchTerm);
        const coincideCategoria = (categoryTerm === 'todos' || s.categoria === categoryTerm);
        return (coincideTitulo || coincideLetra) && coincideCategoria;
    });

    filtradas.forEach(s => {
        const div = document.createElement('div');
        div.className = 'song-item';
        div.innerHTML = `
            <input type="checkbox" onchange="toggleSelect(${s.id})" ${seleccionadas.includes(s.id) ? 'checked' : ''}>
            <span onclick="prepararDisplay(${s.id})" style="cursor:pointer">
                <strong>${s.titulo}</strong><br>
                <small>${s.autor} - (${s.tonoOriginal})</small>
            </span>
        `;
        container.appendChild(div);
    });
}

// Escalas técnicas
const escSost = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const escBem  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

// Nombres preferidos de tonalidad según tu lista
const nombresTonalidad = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

let seleccionadas = [];
let cancionActualId = null;
let trasposicionActual = 0;

// --- INTERFAZ ---

function renderSongList() {
    const container = document.getElementById('song-list-container');
    container.innerHTML = '';
    canciones.forEach(s => {
        const div = document.createElement('div');
        div.className = 'song-item';
        div.innerHTML = `
            <input type="checkbox" onchange="toggleSelect(${s.id})">
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

    const tonoDestino = calcularNombreTono(song.tonoOriginal, trasposicionActual);
    const usaBemoles = tonoDestino.includes('b') || (tonoDestino.startsWith('F') && !tonoDestino.startsWith('F#'));
    const escalaParaLetra = usaBemoles ? escBem : escSost;

    const letraFormateadaHtml = formatearAcordesEnLetra(song.letra, trasposicionActual, escalaParaLetra);

    // Actualizado con la clase song-card
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

// --- LÓGICA MUSICAL ---

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
    let textoHtml = letraRaw.replace(/\n/g, '<br>');
    const regexAcordeTexto = /\[(.*?)\]([^\[\s]*)/g;

    textoHtml = textoHtml.replace(regexAcordeTexto, (match, acorde, textoSiguiente) => {
        let baseTexto = textoSiguiente || '&nbsp;'; 
        let acordeFinal = trasponerAcorde(acorde, semitonos, escalaElegida);
        return `<ruby>${baseTexto}<rt>${acordeFinal}</rt></ruby>`;
    });

    return textoHtml;
}

// --- UTILIDADES ---
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

// Esta función es la que hace que el menú aparezca y desaparezca
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    } else {
        console.error("No se encontró el elemento con id 'sidebar'");
    }
}

function generateRepertoire() {
    if (seleccionadas.length === 0) return alert("Selecciona canciones");
    localStorage.setItem('repertorioActual', JSON.stringify(seleccionadas));
    window.location.href = 'repertorio.html';
}

// window.onload = renderSongList; //código actualizado
window.onload = () => {
    // Solo ejecuta renderSongList si existe el contenedor de la lista (página inicio)
    if (document.getElementById('song-list-container')) {
        renderSongList();
    }
};
function filterSongs() {
    // 1. Obtenemos lo que el usuario escribió (en minúsculas para que no importe si usa Mayúsculas)
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryTerm = document.getElementById('category-filter').value;
    const container = document.getElementById('song-list-container');
    
    container.innerHTML = ''; // Limpiamos la lista para mostrar los nuevos resultados

    // 2. Filtramos el array de canciones
    const filtradas = canciones.filter(s => {
        // Buscamos en el título
        const coincideTitulo = s.titulo.toLowerCase().includes(searchTerm);
        
        // Buscamos en la letra (aquí está la clave de tu pedido)
        const coincideLetra = s.letra.toLowerCase().includes(searchTerm);
        
        // Verificamos la categoría
        const coincideCategoria = (categoryTerm === 'todos' || s.categoria === categoryTerm);
        
        // Retornamos la canción si coincide el título O la letra, Y además la categoría es correcta
        return (coincideTitulo || coincideLetra) && coincideCategoria;
    });

    // 3. Dibujamos las canciones filtradas en el menú
    filtradas.forEach(s => {
        const div = document.createElement('div');
        div.className = 'song-item';
        div.innerHTML = `
            <input type="checkbox" onchange="toggleSelect(${s.id})" ${seleccionadas.includes(s.id) ? 'checked' : ''}>
            <span onclick="prepararDisplay(${s.id})" style="cursor:pointer">
                <strong>${s.titulo}</strong><br>
                <small>${s.autor} - (${s.tonoOriginal})</small>
            </span>
        `;
        container.appendChild(div);
    });
}