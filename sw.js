/* Pip's Postcards offline helper. HTML = network-first; everything else = cache-first with a background refresh.
   When you publish changes, bump VERSION and the ?v= numbers in index.html.
   CORE is the offline starter set; every other picture (guide poses, baby stages, the girl, stickers) is cached the
   first time it loads, and the app pre-loads the chosen guide's poses, the baby's stages and the girl art. */
const VERSION = 'pips-v2.8.3';
const CORE = [
  './', 'index.html', 'styles.css?v=2.8.3', 'app.js?v=2.8.3', 'guide.js?v=2.8.3', 'audio/index.js?v=2.8.3', 'audio/lines.js?v=2.8.3', 'weeks/index.js?v=2.8.3', 'weeks/u1w2.js?v=2.8.3', 'manifest.webmanifest', 'favicon.png',
  'apple-touch-icon.png', 'icon-192.png', 'icon-512.png', 'fonts/andika-regular.woff2', 'fonts/andika-bold.woff2', 'fonts/fredoka.woff2', 'img/bonus_koala.webp', 'img/fri_barn.webp',
  'img/fri_radio.webp', 'img/item_aurora.webp', 'img/item_hill.webp', 'img/item_igloo.webp', 'img/item_pond.webp', 'img/item_sled.webp', 'img/item_slide.webp', 'img/item_snowman.webp',
  'img/koala.webp', 'img/mon_antarctica.webp', 'img/pip_happy.webp', 'img/thu_rainforest.webp', 'img/tue_batcave.webp', 'img/wed_desert.webp', 'guides/fox/main.webp', 'guides/otter/main.webp',
  'guides/penguin/main.webp', 'guides/pigeon/main.webp', 'guides/puffin/main.webp', 'guides/turtle/main.webp', 'babies/penguin/scene.webp', 'babies/penguin/reveal.webp',
  'babies/penguin/newborn.webp', 'babies/turtle/scene.webp', 'babies/turtle/reveal.webp', 'babies/turtle/newborn.webp', 'babies/fox/reveal.webp', 'babies/fox/newborn.webp',
  'babies/otter/reveal.webp', 'babies/otter/newborn.webp', 'babies/puffin/scene.webp', 'babies/puffin/reveal.webp', 'babies/puffin/newborn.webp', 'babies/pigeon/scene.webp',
  'babies/pigeon/reveal.webp', 'babies/pigeon/newborn.webp', 'babies/bat/newborn.webp', 'img/girl/hello.webp', 'img/girl/zoo_explorer_map.webp', 'img/girl/fox_walk.webp',
  'sfx/tap.mp3?v=2.8.3', 'sfx/key.mp3?v=2.8.3', 'sfx/swoosh.mp3?v=2.8.3', 'sfx/right.mp3?v=2.8.3', 'sfx/notyet.mp3?v=2.8.3', 'sfx/food.mp3?v=2.8.3', 'sfx/crack1.mp3?v=2.8.3', 'sfx/crack2.mp3?v=2.8.3', 'sfx/crack3.mp3?v=2.8.3', 'sfx/hatch.mp3?v=2.8.3', 'sfx/rustle.mp3?v=2.8.3', 'sfx/snuggle.mp3?v=2.8.3', 'sfx/grow.mp3?v=2.8.3', 'sfx/fanfare.mp3?v=2.8.3', 'sfx/plink.mp3?v=2.8.3', 'sfx/j_day.mp3?v=2.8.3', 'sfx/j_grow.mp3?v=2.8.3', 'sfx/j_level.mp3?v=2.8.3', 'sfx/j_start.mp3?v=2.8.3', 'img/pics/cage.svg', 'img/pics/chest.svg', 'img/pics/napkin.svg', 'img/pics/rake.svg', 'img/pics/stream.svg', 'img/pics/lime.svg', 'img/pics/redpanda.svg', 'weeks/u1w3.js?v=2.8.3', 'math/zoo-math-2026-09-28.js?v=2.8.3', 'img/pip_oops.webp', 'img/u1w3_fri_hatchlings.webp', 'img/u1w3_mon_puffins.webp', 'img/u1w3_thu_pigeons.webp', 'img/u1w3_tue_otters.webp', 'img/u1w3_wed_fennec.webp', 'img/u2w1_fri_slowrace.webp', 'img/u2w1_mon_otter.webp', 'img/u2w1_thu_puffling.webp', 'img/u2w1_tue_hatchlings.webp', 'img/u2w1_wed_goldfox.webp', 'img/u2w2_fri_monarchs.webp', 'img/u2w2_mon_penguins.webp', 'img/u2w2_thu_arcticfox.webp', 'img/u2w2_tue_bat.webp', 'img/u2w2_wed_redpanda.webp', 'img/u2w3_fri_festival.webp', 'img/u2w3_mon_bats.webp', 'img/u2w3_thu_glowbay.webp', 'img/u2w3_tue_pigeons.webp', 'img/u2w3_wed_galapagos.webp', 'img/pics/wing.svg'
];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting())); });
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
  const range = req.headers.get('range');
  if (range) {   // v2.7.1: iPhone Safari asks for sound clips in byte ranges; answer with a proper 206 slice, not the whole file
    e.respondWith(caches.match(req.url).then((hit) => hit || fetch(req.url).then((res) => {
      if (res.status === 200) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req.url, copy)); }
      return res;
    })).then((res) => (res.status === 200 ? sliceRange(res, range) : res)).catch(() => fetch(req)));
    return;
  }
  e.respondWith(caches.match(req).then((hit) => {
    const net = fetch(req).then((res) => { if (res.status === 200) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); } return res; });
    if (hit) { net.catch(() => {}); return hit; }
    return net;
  }));
});
function sliceRange(res, range) {
  return res.arrayBuffer().then((buf) => {
    const size = buf.byteLength, m = /bytes=(\d*)-(\d*)/.exec(range) || [];
    let start = m[1] ? parseInt(m[1], 10) : NaN, end = m[2] ? parseInt(m[2], 10) : NaN;
    if (isNaN(start)) { start = isNaN(end) ? 0 : Math.max(0, size - end); end = size - 1; } else if (isNaN(end) || end >= size) end = size - 1;
    if (start >= size || start > end) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + size } });
    return new Response(buf.slice(start, end + 1), { status: 206, statusText: 'Partial Content', headers: {
      'Content-Type': res.headers.get('Content-Type') || 'audio/mpeg', 'Content-Range': 'bytes ' + start + '-' + end + '/' + size,
      'Content-Length': String(end - start + 1), 'Accept-Ranges': 'bytes' } });
  });
}
