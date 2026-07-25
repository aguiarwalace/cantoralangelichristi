// Cantoral Online Angeli Christi - Service Worker (sw.js)
// IMPORTANTE: Incrementa este número de versión cada vez que hagas cambios en el código o canciones.
const CACHE_NAME = 'cantoral-angeli-v20260725.1';

// Lista de archivos esenciales que se guardarán para el uso sin internet
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './celebraciones.html',
    './style.css',
    './lista_canciones.js',
    './script.js',
    './calendario.js',
    './repertorio.html',
    './img/angeli_christi_logo.png',
    './img/angeli_christi_logo_blc.png',
    './img/angeli_christi_logo.ico',
    './img/banner.png',
    './pdf/preces-leoninas.pdf',
    './fonts/Thelorin.otf' 
];

// 1. INSTALACIÓN: Guarda los archivos en la memoria interna del navegador
self.addEventListener('install', (event) => {
    // Forzamos al nuevo Service Worker a activarse sin esperar
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('✅ [Service Worker] Guardando archivos esenciales en memoria...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. ACTIVACIÓN: Elimina versiones antiguas de caché cuando cambias CACHE_NAME
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('🧹 [Service Worker] Eliminando caché antiguo:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Toma el control de la aplicación inmediatamente
    );
});

// 3. INTERCEPTACIÓN DE PETICIONES (Estrategia Network-First / Primero Red)
self.addEventListener('fetch', (event) => {
    // Solo interceptamos peticiones HTTP/HTTPS (ignoramos extensiones de Chrome, etc.)
    if (!event.request.url.startsWith('http')) return;

    event.respondWith(
        // Intenta obtener la versión más reciente de la red
        fetch(event.request)
            .then((networkResponse) => {
                // Si la red responde correctamente, actualizamos la copia guardada en caché
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                // Si NO hay red (modo offline), entregamos la versión guardada en caché
                console.log('📡 [Service Worker] Sin conexión. Entregando desde memoria local:', event.request.url);
                return caches.match(event.request);
            })
    );
});
