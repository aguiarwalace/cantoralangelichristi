// Cambiamos el nombre a v2 para obligar al teléfono a borrar el caché viejo roto y descargar el nuevo completo
const CACHE_NAME = 'cantoral-angeli-v3';

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './celebraciones.html', // CORRECCIÓN: Agregada la página secundaria para evitar pantallas en blanco
    './style.css',
    './lista_canciones.js',
    './img/angeli_christi_logo.png',
    './img/angeli_christi_logo_blc.png', // CORRECCIÓN: Agregado el logo blanco del header
    './img/angeli_christi_logo.ico',     // CORRECCIÓN: Agregado el favicon del navegador
    './img/banner.png',
    './fonts/Thelorin.otf' 
];

// 1. INSTALACIÓN
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Guardando todos los recursos en la memoria local...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. INTERCEPCIÓN
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});