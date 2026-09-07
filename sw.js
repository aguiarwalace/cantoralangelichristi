// Cantoral Online Angeli Christi - Service Worker (sw.js)
// IMPORTANTE: Incrementa este número de versión cada vez que hagas cambios en el código o canciones.
const CACHE_NAME = 'cantoral-angeli-v20260907';

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
    './fonts/Thelorin.otf',
    './tuner/tuner.html',
    './tuner/tuner.js',
    './tuner/style.css',
    './tuner/notes.js',
    './tuner/meter.js',
    './tuner/frequency-bars.js',
    './tuner/app.js',
];

/**
 * Función auxiliar: Cancela la petición de red si tarda más del tiempo límite (ms)
 */
function fetchConTimeout(peticion, tiempoLimite = 2000) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('Tiempo de espera de red agotado (Conexión débil)'));
        }, tiempoLimite);

        fetch(peticion).then(
            (respuesta) => {
                clearTimeout(timer);
                resolve(respuesta);
            },
            (error) => {
                clearTimeout(timer);
                reject(error);
            }
        );
    });
}

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

// 3. INTERCEPTACIÓN DE PETICIONES (Estrategia Network-First con Timeout)
self.addEventListener('fetch', (event) => {
    // Solo interceptamos peticiones HTTP/HTTPS (ignoramos extensiones de Chrome, etc.)
    if (!event.request.url.startsWith('http')) return;

    event.respondWith(
        // Intenta obtener la versión más reciente de la red con un límite de 2 segundos
        fetchConTimeout(event.request, 2000)
            .then((networkResponse) => {
                // Si la red responde correctamente dentro del tiempo, actualizamos la copia en caché
                if (networkResponse && networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                // Si NO hay red o si tardó más de 2 segundos, entregamos la versión en caché
                console.log('📡 [Service Worker] Conexión lenta o ausente. Entregando desde memoria local:', event.request.url);
                return caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    // Respaldo por si se solicita una ruta secundaria no registrada
                    return caches.match('./index.html');
                });
            })
    );
});
