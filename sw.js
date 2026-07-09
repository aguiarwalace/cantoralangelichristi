// Nombre de la memoria interna (puedes cambiar el v1 a v2 cuando agregues muchos cantos nuevos)
const CACHE_NAME = 'cantoral-angeli-v1';

// Lista de archivos que el teléfono debe guardar para funcionar sin internet
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './lista_canciones.js',
    './img/angeli_christi_logo.png',
    './img/1000083962.png',
    './fonts/Thelorin.otf' 
];

// 1. INSTALACIÓN: Descarga los archivos y los guarda en el celular
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Guardando archivos en la memoria del teléfono...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. INTERCEPCIÓN: Cuando el usuario abre la app, el celular responde usando la memoria, no internet
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // Si el archivo está en la memoria, lo usa. Si no (ej. un enlace externo), lo busca en internet.
            return cachedResponse || fetch(event.request);
        })
    );
});