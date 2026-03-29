// --- DATOS ---
const canciones = [
    { id: 1, titulo: "A TI LEVANTO MIS OJOS", autor: "Tradicional", categoria: "entrada", tonoOriginal: "Am", letra: "[Am]A TI LEVANTO MIS [Dm]OJOS, [G]A TI QUE HABITAS EN EL [C]CIELO. [Am]A TI LEVANTO MIS [Dm]OJOS, [E]PORQUE ESPERO TU MISERICOR[Am]DIA." },
    { id: 2, titulo: "ALABANZAS", autor: "Tradicional", categoria: "entrada", tonoOriginal: "G", letra: "[G]Alabanzas al Se[C]ñor, [D]porque Él es [G]bueno." },
    { id: 3, titulo: "SEÑOR TEN PIEDAD (I)", autor: "Misa Popular", categoria: "piedad", tonoOriginal: "Em", letra: "[Em]Señor ten pie[Am]dad de no[Em]sotros. [B7]Señor ten pie[Em]dad." },
    { id: 4, titulo: "TEN PIEDAD DE MI OH DIOS", autor: "Tradicional", categoria: "piedad", tonoOriginal: "Am", letra: "[Am]Ten piedad de [Dm]mí oh Dios, por tu [E]bondad." }
];

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
    
    // --- CORRECCIÓN DE LÓGICA AQUÍ ---
    // Usamos bemoles si el tono tiene 'b' O si es F natural (pero NO si es F#)
    const usaBemoles = tonoDestino.includes('b') || (tonoDestino.startsWith('F') && !tonoDestino.startsWith('F#'));
    
    const escalaParaLetra = usaBemoles ? escBem : escSost;

    const letraFormateadaHtml = formatearAcordesEnLetra(song.letra, trasposicionActual, escalaParaLetra);

    display.innerHTML = `
        <div class="song-viewer">
            <div class="song-header">
                <h2>${song.titulo}</h2>
                <div class="controles-tono">
                    <button onclick="cambiarTono(-1)">-</button>
                    <button onclick="cambiarTono(0)">Original</button>
                    <button onclick="cambiarTono(1)">+</button>
                    <span> Tono Actual: <strong>${tonoDestino}</strong> </span>
                </div>
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

function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

function generateRepertoire() {
    if (seleccionadas.length === 0) return alert("Selecciona canciones");
    localStorage.setItem('repertorioActual', JSON.stringify(seleccionadas));
    window.location.href = 'repertorio.html';
}

window.onload = renderSongList;