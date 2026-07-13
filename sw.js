// Atualizamos para v2.2 com pontos para forçar o celular a baixar a correção dos botões
const CACHE_NAME = 'cantoral-angeli-v20260713.1';

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

// 1. INSTALÇÃO: Guarda todos os arquivos essenciais na memória interna
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Guardando lógica e design na memória local...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. INTERCEPCIÓN: Responde usando a memória local quando estiver offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});