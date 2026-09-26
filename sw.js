/* Pip's Postcards offline helper. HTML = network-first; everything else = cache-first with a background refresh.
   When you publish changes, bump VERSION and the ?v= numbers in index.html. */
const VERSION = 'pips-v2.0';
const CORE = [
  './', 'index.html', 'styles.css?v=2.0', 'app.js?v=2.0', 'guide.js?v=2.0', 'audio/index.js?v=2.0', 'weeks/index.js?v=2.0', 'weeks/u1w2.js?v=2.0',
  'manifest.webmanifest', 'favicon.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png',
  'fonts/andika-regular.woff2', 'fonts/andika-bold.woff2', 'fonts/fredoka.woff2',
  'img/bonus_koala.webp', 'img/bonus_parrots.webp', 'img/chick_gray.webp', 'img/chick_mixed.webp', 'img/chick_navy.webp', 'img/eggshell.webp', 'img/fri_barn.webp', 'img/fri_radio.webp', 'img/guide_fox.webp', 'img/guide_otter.webp', 'img/guide_penguin.webp', 'img/guide_pigeon.webp', 'img/guide_puffin.webp', 'img/guide_turtle.webp', 'img/item_aurora.webp', 'img/item_hill.webp', 'img/item_igloo.webp', 'img/item_pond.webp', 'img/item_sled.webp', 'img/item_slide.webp', 'img/item_snowman.webp', 'img/koala.webp', 'img/mon_antarctica.webp', 'img/nest_bat.webp', 'img/nest_fox.webp', 'img/nest_grey.webp', 'img/nest_penguin.webp', 'img/nest_senegal.webp', 'img/nest_turtle.webp', 'img/pet_bat_baby.webp', 'img/pet_bat_grown.webp', 'img/pet_fox_baby.webp', 'img/pet_fox_grown.webp', 'img/pet_grey_baby.webp', 'img/pet_grey_grown.webp', 'img/pet_senegal_baby.webp', 'img/pet_senegal_grown.webp', 'img/pet_turtle_baby.webp', 'img/pet_turtle_grown.webp', 'img/pip_happy.webp', 'img/pip_oops.webp', 'img/thu_rainforest.webp', 'img/tue_batcave.webp', 'img/wed_desert.webp'
];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('pips-') && k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  const isHTML = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
  if (isHTML) {
    e.respondWith(fetch(req).then((res) => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put('index.html', copy)); } return res; })
      .catch(() => caches.match('index.html').then((r) => r || caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => {
    const net = fetch(req).then((res) => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); } return res; });
    if (hit) { net.catch(() => {}); return hit; }
    return net;
  }));
});
