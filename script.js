let canciones = [];
let seleccionadas = [];

// Escala internacional para transposición
const escala = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

async function cargarCanciones() {
    const response = await fetch('canciones.json');
    canciones = await response.json();
    renderSongList(canciones);
}

function renderSongList(lista) {
    const container = document.getElementById('song-list-container');
    container.innerHTML = '';
    lista.forEach(s => {
        const div = document.createElement('div');
        div.className = 'song-item';
        div.innerHTML = `
            <input type="checkbox" onchange="toggleSelect(${s.id})">
            <span><strong>${s.titulo}</strong><br><small>${s.autor || ''} - (${s.tonoOriginal})</small></span>
        `;
        container.appendChild(div);
    });
}

function toggleSelect(id) {
    if (seleccionadas.includes(id)) {
        seleccionadas = seleccionadas.filter(sid => sid !== id);
    } else {
        seleccionadas.push(id);
    }
}

function generateRepertoire() {
    if (seleccionadas.length === 0) return alert("Selecciona al menos una canción");
    localStorage.setItem('repertorioActual', JSON.stringify(seleccionadas));
    window.location.href = 'repertorio.html';
}

function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('active');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Inicialización
cargarCanciones();