// --- DATOS Y CONFIGURACIÓN ---
const canciones = [
    { id: 1, titulo: "A TI LEVANTO MIS OJOS", autor: "Tradicional", categoria: "entrada", tonoOriginal: "Am", letra: "[Am]A TI LEVANTO MIS [Dm]OJOS, [G]A TI QUE HABITAS EN EL [C]CIELO. [Am]A TI LEVANTO MIS [Dm]OJOS, [E]PORQUE ESPERO TU MISERICOR[Am]DIA." },
    { id: 2, titulo: "ALABANZAS", autor: "Tradicional", categoria: "entrada", tonoOriginal: "G", letra: "[G]Alabanzas al Se[C]ñor, [D]porque Él es [G]bueno." },
    { id: 3, titulo: "SEÑOR TEN PIEDAD (I)", autor: "Misa Popular", categoria: "piedad", tonoOriginal: "Em", letra: "[Em]Señor ten pie[Am]dad de no[Em]sotros. [B7]Señor ten pie[Em]dad." },
    { id: 4, titulo: "TEN PIEDAD DE MI OH DIOS", autor: "Tradicional", categoria: "piedad", tonoOriginal: "Am", letra: "[Am]Ten piedad de [Dm]mí oh Dios, por tu [E]bondad." }
];

// Escala cromática para transposición
const escala = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

let seleccionadas = [];
let cancionActualId = null;
let trasposicionActual = 0; // Cuántos semitonos hemos movido

// --- FUNCIONES DE INTERFAZ ---

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

// Prepara los datos antes de mostrar
function prepararDisplay(id) {
    cancionActualId = id;
    trasposicionActual = 0; // Resetear el tono al original al abrir una nueva
    displaySong();
    toggleMenu();
}

function displaySong() {
    const song = canciones.find(s => s.id === cancionActualId);
    const display = document.getElementById('main-content');

    const letraFormateadaHtml = formatearAcordesEnLetra(song.letra, trasposicionActual);

    display.innerHTML = `
        <div class="song-viewer">
            <div class="song-header">
                <h2>${song.titulo}</h2>
                <div class="controles-tono">
                    <button onclick="cambiarTono(-1)">- Semitono</button>
                    <button onclick="cambiarTono(0)">Tono Original</button>
                    <button onclick="cambiarTono(1)">+ Semitono</button>
                    <span> Trasposición: ${trasposicionActual > 0 ? '+' : ''}${trasposicionActual}</span>
                </div>
            </div>
            <div class="lyrics-container">
                ${letraFormateadaHtml}
            </div>
        </div>
    `;
}

// --- LÓGICA DE TRANSPOSICIÓN ---

function cambiarTono(valor) {
    if (valor === 0) trasposicionActual = 0;
    else trasposicionActual += valor;
    displaySong();
}

function trasponerAcorde(acordeStr, semitonos) {
    if (semitonos === 0) return acordeStr;

    // Expresión para separar la nota raíz (ej: C#) de los adornos (ej: m7)
    const regex = /^([A-G]#?)(.*)$/;
    const match = acordeStr.match(regex);

    if (!match) return acordeStr;

    let notaRaiz = match[1];
    let adornos = match[2];

    // Buscar posición en la escala
    let indice = escala.indexOf(notaRaiz);
    if (indice === -1) return acordeStr;

    // Calcular nueva posición (usando módulo 12 para que sea circular)
    let nuevoIndice = (indice + semitonos) % 12;
    if (nuevoIndice < 0) nuevoIndice += 12;

    return escala[nuevoIndice] + adornos;
}

function formatearAcordesEnLetra(letraRaw, semitonos) {
    let textoHtml = letraRaw.replace(/\n/g, '<br>');
    const regexAcordeTexto = /\[(.*?)\]([^\[\s]*)/g;

    textoHtml = textoHtml.replace(regexAcordeTexto, (match, acorde, textoSiguiente) => {
        let baseTexto = textoSiguiente || '&nbsp;'; 
        // TRASPONER AQUÍ
        let acordeFinal = trasponerAcorde(acorde, semitonos);
        
        return `<ruby>${baseTexto}<rt>${acordeFinal}</rt></ruby>`;
    });

    return textoHtml;
}

// --- OTRAS FUNCIONES ---
function toggleSelect(id) {
    if (seleccionadas.includes(id)) {
        seleccionadas = seleccionadas.filter(sid => sid !== id);
    } else {
        seleccionadas.push(id);
    }
}

function generateRepertoire() {
    if (seleccionadas.length === 0) return alert("Selecciona canciones");
    localStorage.setItem('repertorioActual', JSON.stringify(seleccionadas));
    window.location.href = 'repertorio.html';
}

function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

window.onload = renderSongList;