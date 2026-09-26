/* Pip's Postcards: phone-first reading practice. Vanilla JS, no build step.
   Everything is stored on this device only (localStorage + IndexedDB). */
(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) setPicText(e, txt); return e; };
  /* v2.5.1 pictures: "img:napkin" = a drawn picture (img/pics/napkin.svg) for words with no clear emoji. */
  function setPicText(e, txt) {
    const t = String(txt);
    if (/^img:[a-z0-9-]+$/.test(t)) { const im = document.createElement('img'); im.className = 'pic-img'; im.src = `img/pics/${t.slice(4)}.svg`; im.alt = t.slice(4); im.dataset.pic = t; im.draggable = false; e.replaceChildren(im); }
    else e.textContent = gtext(t);
  }
  const picTxt = (p) => (/^img:/.test(String(p || '')) ? '' : (p || ''));
  /* ---- the guide (picked + named by the child on the first screen; config in guide.js) ---- */
  const GUIDES = window.PIP_GUIDES || { kinds: {}, order: [], names: [], generic: { mishaps: [], landing: [], landBtn: [] }, voice: {} };
  const G = () => {
    let g = {}; try { g = (S && S.guide) || {}; } catch (_) {}
    const k = GUIDES.kinds[g.kind] || GUIDES.kinds.pigeon || {};
    return Object.assign({ kind: g.kind || 'pigeon', name: g.name || 'Pip' }, k, {
      mishaps: (k.mishaps || []).concat(GUIDES.generic.mishaps || []),
      landing: k.landing || GUIDES.generic.landing, landBtn: GUIDES.generic.landBtn });
  };
  function gtext(t) {
    if (typeof t !== 'string') return t;
    if (t.indexOf('Pip') < 0 && t.indexOf('{') < 0) return t;
    const g = G();
    return t.replace(/\bPip\b/g, g.name).replace(/\{species\}/g, g.species || 'bird').replace(/\{part\}/g, g.part || 'wing').replace(/\{nose\}/g, g.nose || 'nose').replace(/\{go\}/g, g.go || 'travel');
  }
  let mishapN = 0;
  const mishap = () => { const m = G().mishaps; return m.length ? m[(mishapN++) % m.length] : 'Hmm, I got mixed up!'; };
  /* Praise effort and strategy (never "smart"). */
  const PRAISE = {
    first: ['You looked at every letter! 👀', 'You took your time. That works! 🌟', 'You checked each sound! ✨'],
    retry: ['You kept going and got it! That is how readers grow. 🌱', 'You tried again. That is what great readers do! 💪', 'You did not give up. Yes! 🌟'],
    hint: ['You used the clue. Great readers use clues! 🔎', 'Clue used, word found! That is a great strategy. 🔎'],
    chunks: ['You split it into chunks. That is what great readers do! 🧩', 'Chunk by chunk. That is the reader way! 🧩'],
    listen: ['You listened to every sound! 👂', 'Great listening! 👂'],
    proof: ['You found the proof in the words! 🔎', 'You went back and looked. That is what readers do! 🔎'],
    brave: ['You tried a hard one. That is brave! 🦁', 'Challenge tried! That is how brains grow. 🌱']
  };
  const praiseN = {};
  const praise = (k) => { const l = PRAISE[k] || PRAISE.first; praiseN[k] = (praiseN[k] || 0) + 1; return l[praiseN[k] % l.length]; };
  const LEVELS = ['ground', 'sky', 'space'];
  const LEVEL_INFO = {
    ground: { icon: '🏕️', name: 'Ground', sub: 'this week' },
    sky: { icon: '☁️', name: 'Sky', sub: 'next week' },
    space: { icon: '🚀', name: 'Space', sub: '3rd-grade stretch' }
  };
  const levelLabel = (lv) => `${LEVEL_INFO[lv].icon} ${LEVEL_INFO[lv].name} · ${LEVEL_INFO[lv].sub}`;
  const WORD_TYPES = ['sort', 'build', 'pick', 'hear', 'rebel', 'fill', 'spell', 'type', 'says', 'dragword', 'phrase', 'model'];
  const TYPE_NAMES = { type: 'Type the word you hear', hear: 'Hear & tap (which word says it)', says: 'Which word says ___? (new words)', rebel: 'Find the sneaky word', fill: 'Fill the blank (word tiles)', sort: 'Sort', build: 'Build a word', pick: 'Pick the spelling', spell: 'Spell it',
    question: "Guide's question (evidence)", advisor: 'Advisor card', check: 'Picture checks', echo: 'Echo (review) words', warm: 'Warm-up (easy wins)',
    decode: 'Read new words (she self-checks)', teach: 'Teach the guide (she self-checks)', rpair: 'R or W? (listening)', rcatch: 'Catch the guide (R, listening)', sound: 'Which sound? (optional)', challenge: 'Challenge word (optional)',
    dragword: 'Drag the word (postcard line)', phrase: 'What does it mean? (phrase)', model: 'Pattern check', confirm: 'Known-word quick check', qpre: 'What do you think? (before the proof)', advpick: 'Advisor part 1', feedme: 'Feed the baby (read 3 words)', silly: 'Silly word (postcard line)', sneaky: 'Sneaky part' };
  /* The baby animal she raises (all art is Sue's: babies/<kind>/<stage>.webp). She picks one on first launch.
     Egg animals hatch (egg -> cracked -> peeking -> almost out, played in the reveal); the bat, fox and otter are
     born (snuggled up -> waking up). Then 5 growth stages. "Little baby" comes at the very first feed, so she always
     sees her baby change in session 1. Growth thresholds (food eaten) are shared. */
  const STAGE_KEYS = ['newborn', 'baby', 'growing', 'juvenile', 'adult'];
  const STAGE_NAMES = { newborn: 'Brand new', baby: 'Little baby', growing: 'Growing', juvenile: 'Big kid', adult: 'All grown up' };
  const PRE_NAMES = { egg: 'Egg', cracked: 'Crack!', peeking: 'Peek-a-boo', halfout: 'Almost out', snug: 'Snuggled up', waking: 'Waking up' };
  const STAGE_AT = [0, 1, 20, 42, 70];
  const STAGE_SCALE = [0.6, 0.7, 0.8, 0.9, 1];
  const ITEM_AT = [12, 26, 40, 55, 70, 88, 105];
  const EGG = ['egg', 'cracked', 'peeking', 'halfout'], BORN = ['snug', 'waking'];
  /* The sound each hidden stage makes (egg cracks for egg babies; born babies only rustle and snuggle, never egg sounds). */
  const PRE_SFX = { cracked: 'crack1', peeking: 'crack2', halfout: 'crack3', waking: 'rustle' };
  const PETS = {
    penguin: { kind: 'Penguin chick', nest: 'Snowy ice', icon: '🐧', food: '🐟', foodName: 'fish', how: 'egg', pre: EGG, scene: true, reveal: true,
      found: 'Pip found this baby emperor penguin on the ice.', sugs: ['Waddles', 'Snowy', 'Pebble', 'Flip'],
      items: [['Igloo', 'img/item_igloo.webp', [4, 38, 30]], ['Snow hill', 'img/item_hill.webp', [70, 44, 28]], ['Ice slide', 'img/item_slide.webp', [66, 12, 26]], ['Fish pond', 'img/item_pond.webp', [34, 2, 30]],
        ['Snowman', 'img/item_snowman.webp', [8, 6, 22]], ['Sled', 'img/item_sled.webp', [40, 50, 22]], ['Northern lights', 'img/item_aurora.webp', [4, 62, 26]]] },
    turtle: { kind: 'Sea turtle hatchling', nest: 'Sandy beach nest', icon: '🐢', food: '🦐', foodName: 'shrimp', how: 'egg', pre: ['egg', 'peeking', 'halfout'], scene: true, reveal: true,
      found: 'Pip watched this baby turtle dig out of its sandy nest on the beach.', sugs: ['Shelly', 'Coral', 'Splash', 'Kai'],
      items: [['Seashell', '🐚', [8, 6, 12]], ['Crab friend', '🦀', [74, 6, 12]], ['Sandcastle', '🏰', [4, 26, 20]], ['Coral', '🪸', [74, 40, 16]], ['Fish friends', '🐠', [10, 56, 14]], ['Sea grass', '🌿', [56, 44, 12]], ['Whale', '🐋', [36, 66, 18]]] },
    fox: { kind: 'Fennec fox kit', nest: 'Cozy desert den', icon: '🦊', food: '🫐', foodName: 'berries', how: 'born', pre: BORN, reveal: true,
      found: 'Pip found this baby fox snuggled in a cozy den in the desert.', sugs: ['Sandy', 'Ziggy', 'Dune', 'Pip Jr.'],
      items: [['Cactus', '🌵', [6, 10, 20]], ['Sun rock', '🪨', [72, 8, 16]], ['Date palm', '🌴', [74, 30, 22]], ['Beetle friend', '🪲', [34, 4, 10]], ['Oasis', '💧', [8, 42, 12]], ['Desert moon', '🌙', [72, 70, 14]], ['Tall dune', '🏜️', [30, 52, 20]]] },
    otter: { kind: 'Sea otter pup', nest: 'Kelp bed', icon: '🦦', food: '🦪', foodName: 'clams', how: 'born', pre: BORN, reveal: true,
      found: 'Pip found this baby otter floating safe and snug in the kelp.', sugs: ['Kelpie', 'Otto', 'Pebbles', 'Bubbles'],
      items: [['Kelp', '🌿', [6, 8, 16]], ['Smooth rock', '🪨', [72, 6, 16]], ['Clam snack', '🦪', [34, 4, 12]], ['Sea star', '⭐', [80, 30, 12]], ['Big wave', '🌊', [8, 42, 18]], ['Crab friend', '🦀', [60, 50, 12]], ['Sunset', '🌅', [30, 64, 20]]] },
    puffin: { kind: 'Puffin chick (puffling)', nest: 'Sea-cliff burrow', icon: '🐦', food: '🐟', foodName: 'fish', how: 'egg', pre: EGG, scene: true, reveal: true,
      found: 'Pip found this baby puffin in a cozy burrow on a sea cliff.', sugs: ['Puff', 'Nugget', 'Pebble', 'Clover'],
      items: [['Sea cliff', '⛰️', [4, 30, 22]], ['Flowers', '🌸', [74, 6, 12]], ['Fish snack', '🐟', [34, 4, 12]], ['Waves', '🌊', [70, 30, 18]], ['Little boat', '⛵', [12, 58, 14]], ['Lighthouse', '🗼', [78, 50, 16]], ['Rainbow', '🌈', [34, 62, 20]]] },
    pigeon: { kind: 'Pigeon chick (squab)', nest: 'Twig nest', icon: '🕊️', food: '🌾', foodName: 'seeds', how: 'egg', pre: EGG, scene: true, reveal: true,
      found: 'Pip found this baby pigeon in a twig nest on a sunny rooftop.', sugs: ['Coco', 'Dusty', 'Poppy', 'Skye'],
      items: [['Rooftop', '🏠', [4, 30, 22]], ['Flowers', '🌼', [74, 6, 12]], ['Seed snack', '🌾', [34, 4, 12]], ['Fountain', '⛲', [70, 30, 18]], ['Park bench', '🪑', [10, 6, 14]], ['Balloon', '🎈', [78, 56, 12]], ['Clock tower', '🕰️', [34, 60, 16]]] },
    bat: { kind: 'Bat pup', nest: 'Cozy cave', icon: '🦇', food: '🍑', foodName: 'fruit', how: 'born', pre: BORN,
      found: 'Pip found this baby bat snuggled on a rocky ledge in a cave.', sugs: ['Luna', 'Echo', 'Nibbles', 'Midnight'],
      items: [['Moon', '🌙', [74, 70, 14]], ['Cozy rock', '🪨', [6, 8, 18]], ['Saguaro cactus', '🌵', [72, 14, 20]], ['Fruit snack', '🍑', [30, 4, 12]], ['Fireflies', '✨', [12, 56, 14]], ['Bat house', '🏡', [4, 30, 20]], ['Starry sky', '🌌', [40, 64, 16]]] }
  };
  const PET_KINDS = ['penguin', 'turtle', 'fox', 'otter', 'puffin', 'pigeon', 'bat'];
  PET_KINDS.forEach((k) => { PETS[k].id = k; });
  const babyImg = (k, stage) => `babies/${k}/${stage}.webp`;
  const sceneOf = (pp) => (pp.scene ? babyImg(pp.id, 'scene') : '');
  const revealOf = (pp) => (pp.reveal ? babyImg(pp.id, 'reveal') : babyImg(pp.id, 'newborn'));
  /* The girl (Sue's art, img/girl/): where each picture shows. Several in one list take turns. Only full-body
     drawings are used bare; hello, hurray, question, dream, ciao and group_hug are drawn to the waist, so they come
     pre-framed as portraits (see art/sue2/export2.py). */
  const GIRL = {
    hello: ['hello'], home: ['backpack'], picker: ['zoo_explorer_map', 'otter_point'],
    found: { penguin: 'penguin_find', puffin: 'puffin_hug', pigeon: 'pigeon_hug', turtle: 'turtle_find', bat: 'bat_find', fox: 'fox_find', otter: 'otter_find' },
    zoo: { penguin: 'penguin_hug', puffin: 'puffin_hug', pigeon: 'pigeon_hug', turtle: 'turtle_pet', bat: 'bat_hold', fox: 'fox_hug', otter: 'otter_hug' },
    zooTop: ['group_hug'], zooEnd: ['walk_away'], grow: ['hurray', 'peace', 'roller'], grown: ['graduation'],
    boss: ['pirate_spyglass', 'pirate_map', 'pirate_flag'], bossWin: ['pirate_chest', 'pirate_cheer'], italia: ['ciao', 'italia_hat', 'pizza'],
    think: ['question', 'dream', 'writing_plan'], read: ['books'], spell: ['writing_books'], mail: ['special_message'],
    end: ['pillow_pj', 'pajamas_dog'], parent: ['bigger_dreams']
  };
  /* v2.7.3 (Sue: "she picked a new animal but still sees a penguin"): pictures with an animal in them follow HER choice.
     Home: the girl with her own baby's kind, taking turns with the backpack picture (was fox / penguin / backpack for
     everyone). The "Puffin Post" letter only shows with the puffin guide; the zoo group hug (the girl hugging a penguin)
     only when a penguin lives in her zoo. */
  const GIRL_HOME = { penguin: 'penguin_binoculars', fox: 'fox_walk', otter: 'otter_point', turtle: 'turtle_pet', bat: 'bat_hold', pigeon: 'pigeon_hug', puffin: 'puffin_hug' };
  function girlSlot(slot) {
    const kind = (S.chick && S.chick.kind) || '';
    if (slot === 'home') return kind && GIRL_HOME[kind] ? [GIRL_HOME[kind], 'backpack'] : GIRL.home;
    if (slot === 'mail') return G().kind === 'puffin' ? ['special_message', 'puffin_post'] : GIRL.mail;
    return GIRL[slot] || slot;
  }
  const STICKERS = ['heart', 'star', 'paw', 'book', 'globe', 'camera', 'compass', 'map', 'backpack', 'leaf', 'zoo_explorer', 'kindness', 'small_steps', 'heart_globe', 'postcard', 'backpack2', 'my_zoo'];
  const girlTurn = {};
  function girlSrc(slot, fixed) {
    const l = [].concat(girlSlot(slot)); const n = fixed ? 0 : (girlTurn[slot] = ((girlTurn[slot] == null ? -1 : girlTurn[slot]) + 1));
    return 'img/girl/' + l[n % l.length] + '.webp';
  }
  function girlEl(slot, cls, fixed) { const im = el('img', 'girl ' + (cls || '')); im.src = /\//.test(slot) ? slot : girlSrc(slot, fixed); im.alt = ''; im.setAttribute('aria-hidden', 'true'); im.decoding = 'async'; return im; }
  const kidName = () => (S.kid || '').trim();
  const oneName = (pp) => pp.one || pp.kind.replace(/ \(.*\)$/, '').toLowerCase();
  const bornWord = (pp) => (pp.how === 'born' ? 'was born' : 'hatched');
  const BASE_KINDS = PET_KINDS.slice();
  const pet = () => PETS[(S.chick && S.chick.kind) || 'penguin'] || PETS.penguin;
  const stagesOf = (pp) => STAGE_KEYS.map((key, i) => ({ at: STAGE_AT[i], key, name: STAGE_NAMES[key], img: babyImg(pp.id, key), scale: STAGE_SCALE[i] }));
  const itemsOf = (pp) => pp.items.map(([name, art, pos], i) => ({ at: ITEM_AT[i], name, pos, img: /\.webp$/.test(art) ? art : '', emoji: /\.webp$/.test(art) ? '' : art }));
  const AUTO_MS = 1100; // v2.5.1: like Arianna Scroll (1.2 s): a right answer shows its sparkle, then the feed moves on by itself (no Next tap).
  const LINE_RATE = 1.12; // guide chatter plays a little faster (words and chunks keep their natural speed)
  const MAX_DELAY = 1500;  // no card waits longer than this after it is done (except to read a new mini postcard)
  const KEY = 'pipsPostcards.v1';

  /* ---------------- state ---------------- */
  const fresh = () => ({
    guide: null, kid: '', tryAgain: {}, soundLog: [], rOn: true, rWords: null, italiaOn: true, italiaDone: {}, bossDone: {}, vol: 1,
    chick: { name: '', kind: '', fish: 0 }, family: [], level: 'ground', levelLock: false, good: 0, roughStreak: 0,
    sessions: [], sessionsDone: 0, review: [], levelLog: [], routeEcho: null, progress: null,
    muted: false, sfxOn: true, capsAlways: false, theme: 'light', hinted: false, weekId: null,
    words: {}, helpTaps: 0, mathLevel: 'ground', mathLock: false, mathGood: 0, mathRough: 0
  });
  let S = fresh();
  function load() { try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(fresh(), JSON.parse(raw)); } catch (_) {} }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (_) {} }
  load();
  if (S.chick && S.chick.name && !S.chick.kind) S.chick.kind = 'penguin'; // saves from before the baby choice existed
  // Parrots were removed (v2.2): a saved parrot baby becomes a pigeon chick, same name and growth.
  const PARROTS = { grey: 1, senegal: 1 };
  if (S.chick && PARROTS[S.chick.kind]) S.chick.kind = 'pigeon';
  (S.family || []).forEach((f) => { if (PARROTS[f.kind]) f.kind = 'pigeon'; });
  delete S.showParrots;

  const weekList = () => (window.PIP_WEEK_LIST || Object.keys(window.PIP_WEEKS || {})).filter((id) => window.PIP_WEEKS && window.PIP_WEEKS[id]);
  /* The week follows the school calendar: each week file has dates.start (a Monday). Weekends keep the week just finished.
     The grown-up area can pin a week (S.weekId); "Auto (by date)" clears the pin. */
  const WEEK_START_FALLBACK = { u1w2: '2026-09-14' };
  const weekStart = (id) => ((window.PIP_WEEKS[id] || {}).dates || {}).start || WEEK_START_FALLBACK[id] || '0000-01-01';
  const ymd = (d) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  function todayYmd() { try { const q = new URLSearchParams(location.search).get('today'); if (q && /^\d{4}-\d{2}-\d{2}$/.test(q)) return q; } catch (_) {} return ymd(new Date()); }
  function pickWeek() {
    const l = weekList();
    if (S.weekId && l.includes(S.weekId)) return S.weekId;
    const t = todayYmd(); const started = l.filter((id) => weekStart(id) <= t);
    return started.length ? started[started.length - 1] : l[0];
  }
  const currentWeek = () => {
    const id = pickWeek();
    if (S.lastWeek !== id) { if (S.lastWeek && S.progress && S.progress.week !== id) S.progress = null; S.lastWeek = id; try { save(); } catch (_) {} }
    return window.PIP_WEEKS[id];
  };
  const chickName = () => S.chick.name || 'Baby';
  const shownDay = (d) => d;
  const fillName = (t) => gtext(String(t).replace(/\{chick\}/g, chickName()));

  /* ---------------- helpers ---------------- */
  /* v2.5.1 fix: the old seed hash had no mixing, so seeds that differ only at the end ("title0", "title1", ...) produced
     nearly the same first random number, and every card in a session put the right answer in the SAME place (often last).
     Now: a well-mixed hash + mulberry32 for content choices, and answer positions use real randomness (see placeAnswer). */
  function hash32(str) { let h = 1779033703 ^ str.length; for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); } h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); return (h ^ (h >>> 16)) >>> 0; }
  function seeded(seed) { let a = hash32(String(seed)); return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function shuffle(arr, seed) { const r = seeded(seed); const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function rand() { try { const u = new Uint32Array(1); crypto.getRandomValues(u); return u[0] / 4294967296; } catch (_) { return Math.random(); } }
  function fyShuffle(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  /* Fisher-Yates per card view, and never the right answer in the same place (first / middle / last) 3 times in a row. */
  const POS_LOG = [];
  const posRole = (p, n) => (p === 0 ? 'first' : p === n - 1 ? 'last' : 'mid' + p);
  function placeAnswer(items, isAns, kind) {
    const a = fyShuffle(items), n = a.length;
    let pos = a.findIndex(isAns);
    if (n > 1 && pos >= 0) {
      const h = POS_LOG.slice(-2);
      if (h.length === 2 && h.every((x) => x.role === posRole(pos, n))) {
        const np = (pos + 1 + Math.floor(rand() * (n - 1))) % n; [a[pos], a[np]] = [a[np], a[pos]]; pos = np;
      }
      POS_LOG.push({ kind: kind || '?', n, pos, role: posRole(pos, n) }); if (POS_LOG.length > 5000) POS_LOG.shift();
    }
    return a;
  }
  const plain = (w) => String(w).replace(/[\[\]|]/g, '');
  /* Render word markup: "|" = syllable split (alternating colors), [..] = pattern highlight.
     v2.7.1: with no [..], vowels are highlighted ONLY in open/closed-syllable lessons (opts.vowels, see vowelLesson()).
     Before, every word without [..] lit its vowels, so "preview" on the pre-/mis- sort showed "e", "i", "e" instead of "pre". */
  function wordEl(markup, opts) {
    opts = opts || {};
    const wrap = el('span', 'w' + (opts.big ? ' w-big' : ''));
    const hasBr = /\[/.test(markup) || !opts.vowels;
    String(markup).split('|').forEach((syl, si) => {
      if (si > 0 && opts.gaps !== false) wrap.appendChild(el('span', 'w-gap', opts.dots ? '·' : ''));
      const sp = el('span', 'syl syl-' + (si % 3));
      let inBr = false;
      for (const ch of syl) {
        if (ch === '[') { inBr = true; continue; }
        if (ch === ']') { inBr = false; continue; }
        const isV = !hasBr && /[aeiou]/i.test(ch);
        const c = el('span', inBr ? 'pat' : (isV ? 'vow' : null), ch);
        sp.appendChild(c);
      }
      wrap.appendChild(sp);
    });
    wrap.setAttribute('aria-label', plain(markup));
    return wrap;
  }
  /* An open/closed-syllable (short/long vowel) lesson: both sort bins are syllable types. Only there does a word with no
     [..] light its vowels; every other lesson shows exactly its [..] pattern (prefix, suffix, vowel team, blend...). */
  const SYL_BIN = /^(closed|open|short vowel|long vowel|starts open|starts closed)\b/i;
  function vowelLesson(L) { L = L || (typeof P !== 'undefined' && P.L); const k = L && L.sort; return !!(k && SYL_BIN.test(k.a) && SYL_BIN.test(k.b)); }
  /* The marked-up word for a sort item: the week's split (with the pattern in [..]) or the plain word. */
  function sortMark(k, w) { return (k.split && k.split[w]) || w; }
  function btn(cls, txt, onClick) { const b = el('button', cls, txt); b.type = 'button'; if (onClick) b.addEventListener('click', onClick); return b; }
  function toast(msg, ms) { const t = $('toast'); t.textContent = fillName(msg); t.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => { t.hidden = true; }, ms || 1800); }
  const fmtDate = (d) => new Date(d).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  const fmtTime = (d) => new Date(d).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });

  /* ---------------- sound effects ----------------
     Tiny sounds in sfx/ (synthesized from scratch by art/make_sfx.py, CC0; about 60 KB in all). Decoded once into Web
     Audio buffers so rapid taps never lag; a small pool of <audio> elements is the fallback. They obey mute and soft
     volume, have their own switch in the grown-up area (S.sfxOn, default on), are set well below the voice, and duck
     while the guide is talking. iPad Safari: the audio context is created/resumed on the first tap (unlock).
     Levels (0..1, times the volume) were set by measuring each file against the voice files. */
  const SFX = { crack1: 0.53, crack2: 0.72, crack3: 0.46, hatch: 0.29, rustle: 0.36, snuggle: 0.23, tap: 0.145, key: 0.1, swoosh: 0.2,
    right: 0.21, notyet: 0.11, food: 0.11, grow: 0.27, fanfare: 0.27, plink: 0.18,
    j_start: 0.24, j_grow: 0.27, j_day: 0.26, j_level: 0.27 }; // jingles (v2.5.1): session start, baby grows, day finished, level up
  const SFX_ALIAS = { ok: 'right', wrong: 'notyet', fish: 'food' };
  const SFX_VER = '2.8.1';
  const sfx = { ctx: null, bus: null, raw: {}, buf: {}, pool: {}, last: {}, duck: false };
  const sfxAllowed = () => S.sfxOn !== false && !S.muted && vol() > 0;
  function sfxFetch() { Object.keys(SFX).forEach((k) => { if (!sfx.raw[k]) sfx.raw[k] = fetch('sfx/' + k + '.mp3?v=' + SFX_VER).then((r) => (r.ok ? r.arrayBuffer() : null)).catch(() => null); }); }
  function sfxCtx() {
    if (sfx.ctx) return sfx.ctx;
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null;
    try { sfx.ctx = new AC(); } catch (_) { return null; }
    sfx.bus = sfx.ctx.createGain(); sfx.bus.gain.value = 1; sfx.bus.connect(sfx.ctx.destination);
    sfxFetch();
    Object.keys(SFX).forEach((k) => sfx.raw[k].then((ab) => {
      if (!ab) return;
      new Promise((res) => { try { const pr = sfx.ctx.decodeAudioData(ab.slice(0), res, () => res(null)); if (pr && pr.then) pr.then(res, () => res(null)); } catch (_) { res(null); } })
        .then((b) => { if (b) sfx.buf[k] = b; });
    }));
    return sfx.ctx;
  }
  /* iOS 17+/Safari 17+: an audio session of type "playback" lets Web Audio (sound effects, Soft/Loud voice routing,
     word clips) play even when the iPhone's ring/silent switch is on silent, like the <audio> voice always did. */
  function audioSessionPlayback() { try { if (navigator.audioSession && navigator.audioSession.type !== 'playback') navigator.audioSession.type = 'playback'; } catch (_) {} }
  audioSessionPlayback();
  function sfxUnlock() {
    audioSessionPlayback();
    const c = sfxCtx(); if (!c) return;
    if (c.state !== 'running') { try { const pr = c.resume(); if (pr && pr.catch) pr.catch(() => {}); } catch (_) {} }
    if (!sfx.unlocked) { sfx.unlocked = true; try { const s0 = c.createBufferSource(); s0.buffer = c.createBuffer(1, 1, 22050); s0.connect(c.destination); s0.start(0); } catch (_) {} }
  }
  /* The guide's voice ducks the sound effects (a sound that starts while she talks is quieter; one already playing dips). */
  function voiceActive() { try { return !!(curAudio && !curAudio.paused && !curAudio.ended) || !!curSrcNode || !!(window.speechSynthesis && speechSynthesis.speaking); } catch (_) { return false; } }
  function sfxDuck() {
    const on = voiceActive(); if (on === sfx.duck) return; sfx.duck = on;
    if (sfx.bus) { try { sfx.bus.gain.setTargetAtTime(on ? 0.4 : 1, sfx.ctx.currentTime, 0.04); } catch (_) {} }
  }
  /* Play one effect: tap, key, swoosh, right, notyet, food, crack1-3, hatch, rustle, snuggle, grow, fanfare, plink. */
  function sound(kind, delay) {
    const k = SFX_ALIAS[kind] || kind; if (!SFX[k] || !sfxAllowed()) return;
    const now = Date.now(); if (sfx.last[k] && now - sfx.last[k] < (k === 'key' ? 45 : 35) && !delay) return; sfx.last[k] = now;
    const g = SFX[k] * vol() * (voiceActive() ? 0.4 : 1);
    if (window.__sfxLog) window.__sfxLog.push([k, Math.round(g * 1000) / 1000]); // test hook
    const c = sfxCtx();
    if (c) {
      if (c.state === 'suspended' && sfx.unlocked) { try { c.resume().catch(() => {}); } catch (_) {} }
      const b = sfx.buf[k]; if (!b) return; // still decoding (a few ms after the first tap)
      try { const src = c.createBufferSource(), gn = c.createGain(); src.buffer = b; gn.gain.value = g; src.connect(gn).connect(sfx.bus); src.start(c.currentTime + (delay || 0) / 1000); } catch (_) {}
      return;
    }
    const pool = sfx.pool[k] = sfx.pool[k] || [0, 1, 2].map(() => { const a = new Audio('sfx/' + k + '.mp3?v=' + SFX_VER); a.preload = 'auto'; return a; });
    const a = pool.find((x) => x.paused || x.ended) || pool[0];
    const go = () => { try { a.currentTime = 0; a.volume = Math.min(1, g); const pr = a.play(); if (pr && pr.catch) pr.catch(() => {}); } catch (_) {} };
    if (delay) setTimeout(go, delay); else go();
  }
  /* Voice. Words, chunks and suggested names: pre-made audio (audio/index.js). Guide lines, praise, hints and card
     instructions: pre-made audio too (audio/lines.js, same Kokoro af_heart voice), matched on the exact text. A line
     with a typed name (guide, baby, child) or a number is split: the fixed parts play their pre-made pieces and only
     the name is said by the device voice (or its pre-made file if it is a suggested name). Anything not pre-made
     falls back to the device's best natural female en-US voice at a natural pitch. Captions are always shown. */
  let voice = null;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    const vs = speechSynthesis.getVoices().filter((v) => /^en[-_]US/i.test(v.lang));
    const pref = (GUIDES.voice && GUIDES.voice.prefer) || [];
    for (const name of pref) { const v = vs.find((x) => x.name.indexOf(name) >= 0 && !/male/i.test(x.name.replace(/female/i, ''))); if (v) { voice = v; return; } }
    voice = vs.find((v) => /female|woman|girl/i.test(v.name)) || vs[0] || speechSynthesis.getVoices().find((v) => /^en/.test(v.lang)) || null;
  }
  if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  const canSpeak = () => 'speechSynthesis' in window;
  /* Volume (quick settings, per device): Off / Soft / Normal / Loud. Normal = the files at full level (the old default);
     Loud boosts the voice past full through Web Audio with a gentle limiter; effects scale along, always below the voice. */
  const VOL_LEVELS = { soft: 0.4, normal: 1, loud: 1.8 };
  const volLevel = () => (S.muted ? 'off' : (S.vol == null || (S.vol >= 0.7 && S.vol < 1.4)) ? 'normal' : S.vol < 0.7 ? 'soft' : 'loud');
  const vol = () => (S.muted ? 0 : VOL_LEVELS[volLevel()]);
  let voiceOutNode = null;
  function voiceOut() {
    if (voiceOutNode) return voiceOutNode;
    const c = sfx.ctx; const comp = c.createDynamicsCompressor();
    comp.threshold.value = -14; comp.knee.value = 8; comp.ratio.value = 4; comp.attack.value = 0.004; comp.release.value = 0.2;
    comp.connect(c.destination); voiceOutNode = comp; return comp;
  }
  /* Level for one voice clip: element volume where the browser honours it (iPad Safari does not, so the rest goes
     through a Web Audio gain), plus the Loud boost. */
  function routeVoice(a) {
    const v = vol(); a.volume = Math.min(1, v);
    const c = sfx.ctx, eff = a.volume || 1, g = v / eff;
    // v2.7.1: on an iPhone/iPad WITHOUT navigator.audioSession (iOS 16 and older), Web Audio is muted by the silent switch,
    // so Soft/Loud routing made every word silent there. Those devices play the clip at full level instead.
    if (IOS && !navigator.audioSession) return;
    if (c && c.state === 'running' && Math.abs(g - 1) > 0.02) { try { const n = c.createMediaElementSource(a), gn = c.createGain(); gn.gain.value = g; n.connect(gn).connect(voiceOut()); } catch (_) {} }
  }
  /* Guide chatter captions: with sound on, the guide's spoken bubble lines are heard, not shown (a small 🔁 stays).
     The words show when sound is off, when a line could not play, or when a grown-up turns on "Always show what the
     guide says" (S.capsAlways). Reading content (postcards, words, questions, answers) always stays written. */
  let voiceFails = 0, speakingWrap = null;
  const capsShown = () => !!S.capsAlways || vol() === 0 || voiceFails >= 2;
  function capMode(w) { if (!w || !w.classList) return; w.classList.toggle('cap-off', !w.classList.contains('content') && !capsShown()); if (w.fit) w.fit(); }
  function capsRefresh() { document.querySelectorAll('.pip-wrap, .guide-intro').forEach(capMode); }
  function voiceFailed() { voiceFails++; if (speakingWrap) { speakingWrap.classList.add('cap-fail'); if (speakingWrap.fit) speakingWrap.fit(); } if (voiceFails === 2) capsRefresh(); }
  function voiceWorked() { if (voiceFails >= 2) { voiceFails = 0; capsRefresh(); } voiceFails = 0; }
  const AUD = window.PIP_AUDIO || {};
  const LINES = window.PIP_LINES || {};
  const lineKey = (s) => String(s).toLowerCase().replace(/[\u2018\u2019]/g, "'").replace(/[^a-z0-9' ]+/g, ' ').replace(/'(?![a-z])|(^|\s)'/g, ' ').replace(/\s+/g, ' ').trim();
  const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  /* Plan a line as pre-made pieces. Whole-line file first; otherwise split at names and numbers. A typed name is never
     given to the device voice when it can be avoided: a suggested name plays its word file; a name used like "Great job,
     Mia!" / "I'm your guide, Zuzu!" is left out of the spoken line (it stays in the caption); a name used as a subject
     or object is said as "the puffin" (guide), "your baby" or "friend". null = not pre-made (device voice). */
  function linePlan(t, inner) {
    const whole = LINES[lineKey(t)] || (inner && AUD[lineKey(t)]); if (whole) return [{ src: whole }]; // (a lone word: its word file)
    if (!inner) { // a line built from fixed lines ("mishap joke + hint"): plan it sentence by sentence
      const ss = (t.match(/[^.!?\u2026]+[.!?\u2026]*["\u201d\u2019)]*\s*/g) || []).filter((x) => lineKey(x));
      if (ss.length > 1) { const ps = ss.map((x) => linePlan(x, true)); if (ps.every(Boolean)) return [].concat(...ps); }
    }
    const p = namePlan(t); if (p) return p;
    // a word in quotes inside a fixed line ("It is not “ex-plor-ee”!", "What does “gatto” mean?"): its word file
    const qs = t.split(/([\u201c"][^\u201d"]{1,40}[\u201d"])/);
    if (qs.length < 2) return null;
    const plan = [];
    for (let i = 0; i < qs.length; i++) {
      const x = qs[i]; if (!lineKey(x)) continue;
      if (i % 2) { const q = x.slice(1, -1).trim().toLowerCase(), f = AUD[q] || AUD['it:' + q] || LINES[lineKey(q)]; if (!f) return null; plan.push({ src: f }); continue; }
      const sub = LINES[lineKey(x)] ? [{ src: LINES[lineKey(x)] }] : namePlan(x); if (!sub) return null; plan.push(...sub);
    }
    return plan.length ? plan : null;
  }
  function namePlan(t) {
    const g = G(), role = {};
    const add = (n, r) => { if (n && n.trim() && !role[n.toLowerCase()]) role[n.toLowerCase()] = r; };
    add(g.name, 'g'); add(S.chick && S.chick.name, 'b'); add(S.kid, 'k'); (S.family || []).forEach((f) => add(f.name, 'b'));
    const names = Object.keys(role).sort((a, b) => b.length - a.length);
    const re = new RegExp('(' + names.map((n) => '\\b' + reEsc(n) + "(?:['\u2019]s)?\\b").concat(['\\b\\d+\\b']).join('|') + ')', 'i');
    const parts = t.split(re).filter((p) => p != null && p !== '');
    if (parts.length < 2) return null;
    const sub = { g: 'the ' + (g.species || 'bird'), b: 'your baby', k: 'friend' };
    const plan = [];
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i], k = lineKey(p); if (!k) continue;
      if (/^\d+$/.test(k)) { plan.push(LINES['num:' + k] ? { src: LINES['num:' + k] } : { speak: k }); continue; }
      const poss = /'s$/.test(k), base = poss ? k.slice(0, -2) : k;
      if (role[base]) {
        if (AUD[k]) { plan.push({ src: AUD[k] }); continue; }
        const prev = (parts[i - 1] || '').trim(), next = (parts[i + 1] || '').trim();
        if (!poss && (/,$/.test(prev) || (!prev && /^,/.test(next)))) continue; // "Great job, Mia!" -> "Great job!"
        const s = LINES[lineKey(sub[role[base]] + (poss ? "'s" : ''))];
        plan.push(s ? { src: s } : { speak: p.trim() }); continue;
      }
      const f = LINES[k] || AUD[k]; if (!f) return null;
      plan.push({ src: f });
    }
    return plan.length ? plan : null;
  }
  /* v2.7.1 voice player (Sue: "the first part of the word isn't pronounced", "it goes too fast", "they freeze").
     * Word clips (audio/w/) now start with 200 ms of silence and are spoken a little slower; "slow" plays a separate slow
       clip (AUD['slow:<word>']) at normal rate instead of stretching the clip.
     * iPhone/iPad (Safari 17+, navigator.audioSession): word clips play through Web Audio (decoded buffer on the already
       running AudioContext), so iOS's <audio> start-up can never swallow the first sound, and the level (Soft/Loud) is a
       gain that iOS honours. Everything else, and any clip that is not decoded within 1.5 s, uses <audio> as before.
     * Never stuck: a clip that has not STARTED within 5 s, a play() that rejects, a load error, or a Web Audio failure ends
       that clip (captions show); stopVoice() ends the current clip's promise at once (it used to wait for a 20 s guard).
     * Nothing cuts a word: sayAfter() queues behind what is playing, and auto-advance waits for the voice to finish. */
  let curAudio = null, curSrcNode = null, curFin = null, sayToken = 0;
  let listTok = -1, listRunning = false, listDone = Promise.resolve();
  const IOS = /iP(hone|od|ad)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const START_MS = 5000, WA_WAIT_MS = 1500;
  function voicePath() {
    try { const f = localStorage.getItem('pipsVoicePath'); if (f === 'wa' || f === 'el') return f; } catch (_) {} // test / support override
    return navigator.audioSession ? 'wa' : 'el';
  }
  const wBufs = new Map();
  function wBuf(src) {
    let p = wBufs.get(src);
    if (!p) {
      const c = sfx.ctx;
      p = fetch(src).then((r) => (r.ok ? r.arrayBuffer() : null)).then((ab) => (ab ? new Promise((res) => { try { const pr = c.decodeAudioData(ab, res, () => res(null)); if (pr && pr.then) pr.then(res, () => res(null)); } catch (_) { res(null); } }) : null)).catch(() => null);
      p.then((b) => { if (!b) wBufs.delete(src); });
      wBufs.set(src, p); if (wBufs.size > 160) wBufs.delete(wBufs.keys().next().value);
    }
    return p;
  }
  function voicePreload(words) { if (voicePath() !== 'wa' || !sfx.ctx) return; (words || []).forEach((w) => { const k = plain(String(w || '')).trim().toLowerCase(); if (AUD[k]) wBuf(AUD[k]); if (AUD['slow:' + k]) wBuf(AUD['slow:' + k]); }); }
  function stopVoice() {
    sayToken++; if (speakingWrap) speakingWrap.classList.remove('talking'); try { speechSynthesis.cancel(); } catch (_) {}
    if (curAudio) { try { curAudio.pause(); } catch (_) {} curAudio = null; }
    if (curSrcNode) { const n = curSrcNode; curSrcNode = null; try { n.onended = null; n.stop(); } catch (_) {} }
    const f = curFin; curFin = null; if (f) f();
    sfxDuck();
  }
  /* true while a spoken list (or its pauses) is still going, or any voice is audible */
  function voiceBusy() { return (listRunning && listTok === sayToken) || voiceActive(); }
  function playEl(src, rate, alive, fin, setGuard) {
    const a = new Audio(); a.preload = 'auto'; a.src = src; routeVoice(a); a.playbackRate = rate; try { a.preservesPitch = true; a.webkitPreservesPitch = true; } catch (_) {}
    curAudio = a; let started = false;
    setGuard(setTimeout(() => { if (!started) { if (window.__voiceStall) window.__voiceStall.push(src); voiceFailed(); fin(); } }, START_MS));
    a.onplaying = () => { if (started || !alive()) return; started = true; voiceWorked(); sfxDuck(); const d = isFinite(a.duration) && a.duration > 0 ? a.duration : 8; setGuard(setTimeout(fin, (d * 1000) / rate + 1500)); };
    a.onended = () => fin(); a.onerror = () => { voiceFailed(); fin(); };
    try { const pr = a.play(); if (pr && pr.catch) pr.catch((er) => { if (!er || er.name !== 'AbortError') voiceFailed(); fin(); }); } catch (_) { voiceFailed(); fin(); }
  }
  function playWA(src, alive, fin, setGuard, fallback) {
    const c = sfx.ctx; let state = 'wait';
    const giveUp = () => { if (state !== 'wait' || !alive()) return; state = 'fell'; fallback(); };
    setGuard(setTimeout(giveUp, WA_WAIT_MS));
    wBuf(src).then((b) => {
      if (state !== 'wait' || !alive()) return;
      if (!b || !c || c.state !== 'running') return giveUp();
      state = 'play';
      try {
        const n = c.createBufferSource(), g = c.createGain(), v = vol(); n.buffer = b; g.gain.value = v;
        n.connect(g).connect(v > 1.02 ? voiceOut() : c.destination);
        curSrcNode = n; n.onended = () => { if (curSrcNode === n) curSrcNode = null; fin(); };
        n.start(); if (window.__waLog) window.__waLog.push(src); voiceWorked(); sfxDuck();
        setGuard(setTimeout(() => { if (curSrcNode === n) { curSrcNode = null; try { n.stop(); } catch (_) {} } fin(); }, b.duration * 1000 + 1500));
      } catch (_) { state = 'wait'; giveUp(); }
    });
  }
  /* Speak one thing. opts: {rate, slow, lang, word} ; returns a Promise that resolves when done (always: see the guards). */
  function say1(text, opts) {
    opts = opts || {};
    const t = plain(gtext(String(text || ''))).trim();
    if (window.__sayLog && t && !opts.piece) window.__sayLog.push(opts.lang ? opts.lang + ':' + t : t); // test hook
    if (!opts.piece && opts.lang !== 'it' && t && vol() > 0 && !(opts.word !== false && AUD[t.toLowerCase()])) {
      const plan = linePlan(t);
      if (plan) return (async () => { const my = sayToken; for (const pc of plan) { if (my !== sayToken) return; await say1(pc.src ? pc.src : pc.speak, pc.src ? { file: pc.src, piece: true } : { piece: true, word: false, rate: opts.rate }); } })();
    }
    return new Promise((res) => {
      if (!t || vol() === 0) return setTimeout(res, opts.word ? 350 : 60);
      let done = false, guard = null;
      const fin = () => { if (done) return; done = true; clearTimeout(guard); if (curFin === fin) curFin = null; res(); setTimeout(sfxDuck, 0); };
      const alive = () => !done;
      const setGuard = (g) => { clearTimeout(guard); guard = g; };
      curFin = fin;
      guard = setTimeout(fin, 900 + t.length * (opts.slow ? 130 : 95));
      const key = (opts.lang ? opts.lang + ':' : '') + t.toLowerCase();
      const src0 = opts.file || AUD[key];
      if (src0 && (opts.file || opts.word !== false)) {
        const slowSrc = opts.slow && !opts.file ? AUD['slow:' + key] : null;
        const src = slowSrc || src0, isW = /audio\/w\//.test(src);
        // slow: the slow clip at normal rate; a chunk (no slow clip; chunk clips are already made slowly) at normal rate
        const rate = slowSrc || (opts.slow && isW) ? 1 : opts.slow ? 0.8 : (/audio\/l\//.test(src) ? LINE_RATE : 1);
        if (window.__playLog) window.__playLog.push(src.split('audio/')[1]);
        const el_ = () => { if (alive()) playEl(src, rate, alive, fin, setGuard); };
        if (isW && rate === 1 && voicePath() === 'wa' && sfx.ctx && sfx.ctx.state === 'running') playWA(src, alive, fin, setGuard, el_);
        else el_();
        return;
      }
      if (!canSpeak()) { voiceFailed(); return fin(); }
      try {
        if (window.__voiceMiss) window.__voiceMiss.push(t); // test hook: every time the device voice is used
        const u = new SpeechSynthesisUtterance(t);
        u.lang = opts.lang === 'it' ? 'it-IT' : 'en-US';
        const V = GUIDES.voice || {};
        u.rate = opts.rate || (opts.slow ? 0.6 : (V.rate || 0.95) * (opts.word === false ? 1.1 : 1)); u.pitch = V.pitch || 1.0; u.volume = Math.min(1, vol());
        if (voice && opts.lang !== 'it') u.voice = voice;
        u.onstart = () => { voiceWorked(); sfxDuck(); }; u.onend = () => fin(); u.onerror = (ev) => { if (!ev || !/interrupt|cancel/.test(ev.error || '')) voiceFailed(); fin(); };
        speechSynthesis.speak(u);
      } catch (_) { fin(); }
    });
  }
  /* Speak a list in order (stops whatever was playing). items: [text | {text, ...opts, onStart}] */
  function sayList(items) {
    stopVoice(); const my = sayToken; listTok = my; listRunning = true;
    const run = (async () => {
      try {
        for (const it of items) {
          if (my !== sayToken) return false;
          const o = typeof it === 'string' ? { text: it } : it;
          if (o.onStart) o.onStart();
          await say1(o.text, o);
          if (o.pause && my === sayToken) await new Promise((r) => setTimeout(r, Math.round(o.pause * 0.6)));
        }
        return my === sayToken;
      } finally { if (listTok === my) listRunning = false; }
    })();
    listDone = run.then(() => {}, () => {});
    return run;
  }
  /* Speak AFTER whatever is playing now (a word is never cut by a guide line or the next word). Dropped if something
     else starts speaking or the card changes meanwhile. */
  function sayAfter(items, maxWait) {
    if (!voiceBusy()) return sayList(items);
    const tok = sayToken;
    return Promise.race([listDone, new Promise((r) => setTimeout(r, maxWait || 12000))]).then(() => {
      if (sayToken !== tok) return false;
      if (voiceBusy()) return new Promise((r) => setTimeout(r, 150)).then(() => (sayToken === tok ? sayList(items) : false));
      return sayList(items);
    });
  }
  function speak(text, rate) { sayList([{ text, word: true, rate: rate }]); }
  function hearBtn(text, label) { const b = btn('hear-btn', label || '🔊', (e) => { e.stopPropagation(); speak(text); }); b.setAttribute('aria-label', 'Hear it: ' + plain(text)); return b; }

  /* ---------------- recordings: IndexedDB, on this device only ---------------- */
  const DB = { db: null };
  function dbOpen() {
    return new Promise((res, rej) => {
      if (DB.db) return res(DB.db);
      if (!('indexedDB' in window)) return rej(new Error('no-idb'));
      const r = indexedDB.open('pips-postcards', 1);
      r.onupgradeneeded = () => { const s = r.result.createObjectStore('recs', { keyPath: 'id' }); s.createIndex('date', 'date'); };
      r.onsuccess = () => { DB.db = r.result; res(DB.db); };
      r.onerror = () => rej(r.error);
    });
  }
  async function recPut(rec) { const db = await dbOpen(); return new Promise((res, rej) => { const t = db.transaction('recs', 'readwrite'); t.objectStore('recs').put(rec); t.oncomplete = () => res(rec); t.onerror = () => rej(t.error); }); }
  async function recAll() { const db = await dbOpen(); return new Promise((res, rej) => { const q = db.transaction('recs').objectStore('recs').getAll(); q.onsuccess = () => res(q.result || []); q.onerror = () => rej(q.error); }); }
  async function recDel(id) { const db = await dbOpen(); return new Promise((res) => { const t = db.transaction('recs', 'readwrite'); t.objectStore('recs').delete(id); t.oncomplete = () => res(); }); }
  async function recClear() { const db = await dbOpen(); return new Promise((res) => { const t = db.transaction('recs', 'readwrite'); t.objectStore('recs').clear(); t.oncomplete = () => res(); }); }

  /* A recorder widget. onSaved(rec) after a take is stored. If the mic is blocked or missing,
     it switches to a friendly "read it out loud to a grown-up" path so she can always continue. */
  function recorder(meta, onSaved, onFallback) {
    const box = el('div', 'rec');
    const main = btn('rec-btn', '🎙️ Record', null);
    const status = el('p', 'rec-status', '');
    box.append(main, status);
    let mr = null, chunks = [], stream = null, t0 = 0, stopT = null;
    const supported = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    function fallback(reason) {
      box.classList.add('rec-off');
      main.remove();
      status.textContent = reason === 'denied'
        ? 'The microphone is turned off. That is OK! Read it out loud to your grown-up. 💛'
        : 'This device cannot record here. That is OK! Read it out loud to your grown-up. 💛';
      const ok = btn('big-btn soft', '✅ I read it out loud', () => { ok.disabled = true; onFallback && onFallback(); });
      box.appendChild(ok);
    }
    async function start() {
      if (!supported) return fallback('unsupported');
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (e) { return fallback(e && (e.name === 'NotAllowedError' || e.name === 'SecurityError') ? 'denied' : 'unsupported'); }
      const types = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm', 'audio/ogg;codecs=opus'];
      const mime = types.find((t) => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) || '';
      try { mr = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream); } catch (e) { return fallback('unsupported'); }
      chunks = [];
      mr.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
      mr.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunks, { type: mr.mimeType || mime || 'audio/webm' });
        const rec = Object.assign({ id: 'r' + Date.now() + Math.random().toString(36).slice(2, 6), date: Date.now(), dur: Math.round((Date.now() - t0) / 1000), mime: blob.type, blob }, meta);
        try { await recPut(rec); } catch (_) {}
        main.disabled = false; main.textContent = '🎙️ Record again'; box.classList.remove('on');
        status.textContent = 'Saved on this device ✓';
        onSaved && onSaved(rec);
      };
      mr.start(); t0 = Date.now();
      box.classList.add('on'); main.textContent = '⏹️ Stop'; status.textContent = 'Recording... read like a radio star! 🌟';
      stopT = setTimeout(() => { if (mr && mr.state === 'recording') mr.stop(); }, 120000);
    }
    main.addEventListener('click', () => {
      if (mr && mr.state === 'recording') { clearTimeout(stopT); main.disabled = true; mr.stop(); return; }
      start();
    });
    box.stop = () => { try { if (mr && mr.state === 'recording') mr.stop(); } catch (_) {} };
    return box;
  }
  function audioFor(rec) { const a = el('audio'); a.controls = true; a.preload = 'metadata'; try { a.src = URL.createObjectURL(rec.blob); } catch (_) {} return a; }

  /* ---------------- session building ---------------- */
  function sentencesOf(L) { return L.chunks.flatMap((c) => c.s); }
  function dueReviews() { return S.review.filter((r) => r.due <= S.sessionsDone).slice(0, 2); }
  /* ---------------- the session plan (v2.5.1: short and snappy) ----------------
     About 12-15 cards, 8-10 minutes. Every card has one goal and one tap answers it. She picks the order of 3 stops on
     a mini map (Word lab, Postcard, Fly on). Never more than 2 reading cards in a row: quick game cards sit between.
     The curriculum is spread across the week (each weekday rotates different word games), not crammed into one day.
     Extra practice lives in an optional Bonus round. To change the pacing, edit the tables below. */
  const READING_K = ['chunk', 'question', 'broadcast', 'radio']; // the advisor is a short one-tap choice, not a reading card
  const STOPS = { words: ['🔤', 'Word lab'], postcard: ['📬', 'Postcard'], fly: ['🗺️', 'Fly on'] };
  // Word lab games by weekday (Mon..Fri; the 6th/bonus day uses Monday's). Every game shows up during the week.
  const WORD_GAMES = [['model', 'type'], ['hear', 'type'], ['rebel', 'type'], ['teach', 'type'], ['sneaky', 'type']];
  // Fly-on card by weekday (then "where next?"). Friday is the radio show / broadcast.
  const FLY_GAMES = ['fill', 'says', 'rcatch', 'fill', 'show'];
  // Quick game cards between postcard parts (1 tap, under 20 seconds each), taking turns through the week.
  const QUICK_GAMES = ['dragword', 'rquick', 'feedme', 'tappic', 'hatchmo', 'sortone'];
  const ADVISOR_DAYS = [1, 3]; // weekday index (Tue, Thu) + the bonus day; the question (evidence) is every day
  const dayIdx = (day) => Math.max(0, ((day && day.day) || 1) - 1) % 5;
  function sentencesOf(L) { return L.chunks.flatMap((c) => c.s); }
  function dueReviews() { return S.review.filter((r) => r.due <= S.sessionsDone).slice(0, 2); }
  /* Words for the quick "I know it / Help me" check: today's postcard words, words that came back, and a few more of
     the week's words at her level that she has not marked yet. At most 8. */
  /* Word practice words: today's words (up to 6) + up to 2 words she asked for help with before (they come back). */
  function practiceWords(week, day, lv) {
    const L = day.levels[lv], V = week.vocab || {}, seen = new Set(), nw = [];
    (L.preview || []).forEach((v) => { if (v && v.w && !seen.has(v.w) && nw.length < 6) { seen.add(v.w); nw.push(Object.assign({}, V[v.w] || {}, v)); } });
    const back = Object.entries(S.words || {}).filter(([w, m]) => m.week === week.id && (m.help || 0) > 0 && !seen.has(w) && V[w]).sort((a, b) => (b[1].help || 0) - (a[1].help || 0)).slice(0, 2).map(([w]) => Object.assign({ w }, V[w]));
    return { new: nw, back };
  }
  function checkWords(week, day, lv) {
    const L = day.levels[lv], out = [], seen = new Set();
    const add = (v) => { if (!v || !v.w || seen.has(v.w) || out.length >= 8) return; seen.add(v.w); out.push(v); };
    const wk = (w) => S.words[w];
    (L.preview || []).forEach((v) => { const m = wk(v.w); if (!m || m.st !== 'known') add(v); });
    Object.values(S.tryAgain || {}).forEach((t) => { const v = (week.vocab || {})[t.w]; if (v) add(Object.assign({ w: t.w }, v)); });
    Object.values(week.vocabByDay || {}).forEach((byLv) => (byLv[lv] || []).forEach((w) => { const v = (week.vocab || {})[w]; if (v && !wk(w)) add(Object.assign({ w }, v)); }));
    return out;
  }
  function quickGame(n, day, L) {
    let k = QUICK_GAMES[(dayIdx(day) * 2 + n) % QUICK_GAMES.length];
    if (k === 'rquick' && (S.rOn === false || !(W_().rPairs || []).length)) k = 'tappic';
    if (k === 'sortone' && !(L.sort && L.sort.items && L.sort.items.length)) k = 'tappic';
    return { k, n };
  }
  /* Postcard stop: parts with quick games so there are never more than 2 reading cards in a row. */
  function postcardStop(day, L, boss, budget) {
    const advDay = !boss && L.advisor && (ADVISOR_DAYS.includes(dayIdx(day)) || day.day === 6);
    const two = advDay && ['odd', 'feel', 'predict', 'rather'].includes(L.advisor.type);
    const hasPre = !boss && L.question && L.question.pre;
    const make = (pre, adv) => {
      const out = []; let run = 0, g = 0;
      const push = (spec) => {
        if (READING_K.includes(spec.k)) { if (run >= 2) { out.push(quickGame(g, day, L)); g++; run = 0; } run++; }
        else run = 0;
        out.push(spec);
      };
      L.chunks.forEach((c, i) => push({ k: 'chunk', i })); // every part is its own short card (they fit one screen)
      if (pre) push({ k: 'qpre' });
      push({ k: 'question' });
      if (adv >= 1) push({ k: 'advisor', step: 1 });
      if (adv >= 2) push({ k: 'advisor', step: 2 });
      return out;
    };
    // Optional extras fill the card budget so a session stays ~12-15 cards: the advisor (Tue/Thu/bonus day) first,
    // then the pre-question, then the advisor's second step.
    const tries = [[hasPre, two ? 2 : advDay ? 1 : 0], [hasPre, advDay ? 1 : 0], [false, advDay ? 1 : 0], [false, 0]];
    for (const [pre, adv] of tries) { const o = make(pre, adv); if (budget == null || o.length <= budget) return o; }
    return make(false, 0);
  }
  function wordStop(week, day, L) {
    const out = [];
    dueReviews().slice(0, 1).forEach((r) => out.push({ k: 'echo', r }));
    const words = practiceWords(week, day, P.lv);
    if (words.new.length) out.push({ k: 'wpractice', words: words.new, back: words.back }); // Watch me -> Your turn, one tap per word
    else out.push({ k: 'phrase', n: 0 });
    const pv = L.preview || [];
    // Long postcards leave room for fewer word games, to keep every session at 15 cards or fewer (v2.8: 6-part postcards
    // = word practice only; 5 parts = the weekday's skill game; shorter = 2 games).
    WORD_GAMES[dayIdx(day)].slice(0, L.chunks.length >= 6 ? 0 : L.chunks.length >= 5 ? 1 : 2).forEach((k, j) => {
      if ((k === 'teach' || k === 'sneaky') && !pv.length) k = 'hear';
      if (k === 'teach') out.push({ k, v: pv[S.sessionsDone % pv.length] });
      else if (k === 'type') out.push({ k, n: dayIdx(day) % 3 });
      else out.push({ k });
    });
    return out;
  }
  function flyStop(day, L) {
    let k = FLY_GAMES[dayIdx(day)];
    if (day.day === 5 || k === 'show') k = day.radio ? 'radio' : 'broadcast';
    if (k === 'rcatch' && S.rOn === false) k = 'fill';
    const pv = L.preview || [];
    const first = k === 'says' ? (pv.length ? { k, v: pv[(S.sessionsDone + 1) % pv.length] } : { k: 'fill' }) : { k };
    const advDay = L.advisor && (ADVISOR_DAYS.includes(dayIdx(day)) || day.day === 6);
    return L.chunks.length >= 5 || advDay ? [first] : [first, { k: 'route' }]; // long-postcard and advisor days skip the route card
  }
  /* The whole session aims for 12-15 cards (mail + map + feed included). The postcard stop gets what is left. */
  const SESSION_MAX = 15;
  function postcardBudget() { return Math.max(4, SESSION_MAX - 3 - wordStop(P.week, P.day, P.L).length - flyStop(P.day, P.L).length); }
  function stopSpecs(id) {
    const stops = (P.res && P.res.stops) || [];
    // Friday's radio show reads the whole postcard, so it always comes after the postcard stop: if she flies on first,
    // the Fly-on stop gets a one-tap game and the radio show moves to the end of the postcard stop.
    const radio = (x) => x.k === 'radio' || x.k === 'broadcast';
    const fly = flyStop(P.day, P.L), radioFirst = fly.some(radio) && !stops.includes('postcard');
    let l;
    if (id === 'words') l = wordStop(P.week, P.day, P.L);
    else if (id === 'fly') { l = radioFirst ? fly.filter((x) => !radio(x)) : fly; if (!l.length) l = [{ k: 'fill' }]; }
    else {
      const later = fly.some(radio) && stops.includes('fly');
      l = postcardStop(P.day, P.L, false, postcardBudget() - (later ? 1 : 0));
      if (later) { let run = 0; for (let q = l.length - 1; q >= 0 && READING_K.includes(l[q].k); q--) run++; if (run >= 2) l.push(quickGame(4, P.day, P.L)); l = l.concat(fly.filter(radio)); }
    }
    return l.map((x) => Object.assign(x, { stop: id }));
  }
  /* Before she picks, the plan shows the default order (words, postcard, fly on); the map card rebuilds the rest. */
  function planAfterMap(first, left) {
    const rest = left.filter((x) => x !== first);
    const out = stopSpecs(first);
    if (rest.length >= 2) out.push({ k: 'map', left: rest });
    else if (rest.length === 1) {
      // where two stops meet (e.g. Friday's radio show right before the postcard), keep "never 3 reading cards in a row"
      const nxt = stopSpecs(rest[0]); const tail = out.slice(-2).filter((x) => READING_K.includes(x.k)).length;
      const lastR = out.length && READING_K.includes(out[out.length - 1].k);
      let lead = 0; while (lead < nxt.length && READING_K.includes(nxt[lead].k)) lead++;
      if (lastR && (tail >= 2 ? lead >= 1 : lead >= 2)) out.push(Object.assign(quickGame(5, P.day, P.L), { stop: rest[0] }));
      out.push(...nxt);
    }
    out.push({ k: 'feed' });
    return out;
  }
  function buildSpecs(week, day, lv, mode) {
    const L = day.levels[lv];
    if (mode === 'boss') return [{ k: 'mail', boss: true }].concat(postcardStop(day, L, true).map((x) => Object.assign(x, { stop: 'postcard' })), [{ k: 'feed' }]);
    if (mode === 'italia') return [{ k: 'italia' }, { k: 'feed' }];
    if (mode === 'bonus') return bonusSpecs(week, day, L);
    if (mode === 'math') { const MW = (window.PIP_MATH || {})[MATH_PICK.mw] || mathWeek(); return mathSpecs(MW, MATH_PICK.md || 0, lv); }
    return [{ k: 'mail', map: ['words', 'postcard', 'fly'] }];
  }
  /* Optional bonus round (never required): a challenge word, a listening game, R practice, extra word practice. */
  function bonusSpecs(week, day, L) {
    const out = [{ k: 'challenge' }, { k: 'sound' }];
    if (S.rOn !== false && (week.rPairs || []).length) out.push({ k: 'rpair' });
    const help = Object.entries(S.words || {}).filter(([w, m]) => m.st === 'help' && (week.vocab || {})[w]).slice(0, 2);
    help.forEach(([w]) => out.push({ k: 'decode', v: Object.assign({ w }, week.vocab[w]), help: true, bonus: true }));
    if (THEN_NOW) out.push({ k: 'thennow' });
    out.push({ k: 'feed' });
    return out;
  }
  /* ---------------- play (feed) ---------------- */
  const PLAN_V = 2; // saved progress from another plan version is not resumed
  const P = { week: null, day: null, lv: null, L: null, specs: [], cards: [], idx: 0, res: {}, fish: 0, started: 0, key: '' };
  let advanceTimer = null, BUILDING = null, idleTimers = [], MATH_PICK = { mw: '', md: 0 };
  function startMath(mdi) { const MW = mathWeek(); if (!MW) return; MATH_PICK = { mw: MW.id, md: mdi }; const week = currentWeek(); startSession(Math.min(mdi, week.days.length - 1), false, 'math'); }
  function sessionKey(week, day, lv) { return `${week.id}-${day.day}-${lv}`; }

  function startSession(dayIdx, resume, mode) {
    const week = currentWeek();
    let day = shownDay(week.days[dayIdx]);
    if (S.progress && S.progress.v !== PLAN_V) S.progress = null; // a save from the old (long) session plan: start fresh
    if (resume && S.progress && S.progress.mode) mode = S.progress.mode;
    if (!resume) S.progress = null;
    if (resume && S.progress && S.progress.alt && day.alt) day = day.alt;
    let lv = mode === 'boss' ? LEVELS[Math.min(LEVELS.indexOf(S.level) + 1, 2)] : (mode === 'italia' ? 'ground' : mode === 'math' ? (LEVELS.includes(S.mathLevel) ? S.mathLevel : 'ground') : S.level);
    let res = {}, idx = 0, fish = 0, started = Date.now(), fishBy = {}, fed = false;
    if (resume && S.progress && S.progress.week === week.id && S.progress.day === day.day) {
      lv = S.progress.lv; res = S.progress.res || {}; idx = S.progress.idx || 0; fish = S.progress.fish || 0; started = S.progress.started || started;
      fishBy = S.progress.fishBy || null; fed = !!S.progress.fed; // v2.7.3: fish per stop (null = a save from before, estimated)
    }
    Object.assign(P, { week, day, lv, L: day.levels[lv], res, fish, fishBy, fed, started, idx: 0, cards: [], key: sessionKey(week, day, lv) + (mode ? '-' + mode : ''), alt: !!(resume && S.progress && S.progress.alt), mode: mode || '', order: 'words', finished: false });
    const resumed = !!(resume && S.progress && S.progress.specs);
    P.specs = resumed ? S.progress.specs : buildSpecs(week, day, lv, mode);
    // Before she picks on the map, the progress bar shows the default order (Word lab, Postcard, Fly on).
    if (!resumed && !mode) P.specs = P.specs.concat(planAfterMap('words', ['words', 'postcard', 'fly']));
    if (resume && S.progress && S.progress.order) P.order = S.progress.order;
    sound('j_start');
    $('feed').replaceChildren();
    showScreen('screenPlay');
    renderDots();
    for (let i = 0; i <= idx; i++) appendCard(i, i < idx);
    requestAnimationFrame(() => { scrollToIndex(idx, false); });
    saveProgress();
    if (!S.hinted) { S.hinted = true; save(); const h = $('swipeHint'); h.hidden = false; setTimeout(() => { h.hidden = true; }, 5000); }
  }
  /* "Skip this postcard": swap in the other animal's postcard at the same level. No penalty: food earned so far
     is kept, and skipped cards are simply not scored. Word workout cards (shared) are kept as they are. */
  const SKIPPABLE = ['chunk', 'qpre', 'question', 'advisor'];
  function swapToAlt() {
    const alt = P.day.alt; if (!alt) return;
    clearTimeout(advanceTimer);
    // Replace the rest of the postcard stop (from this card on) with the other animal's postcard, from its first part.
    const j = P.idx;
    let e = j; while (e < P.specs.length && P.specs[e].stop === 'postcard') e++;
    P.day = alt; P.L = alt.levels[P.lv]; P.alt = true; P.key = sessionKey(P.week, alt, P.lv);
    const fresh = postcardStop(alt, P.L, P.mode === 'boss').map((x) => Object.assign(x, { stop: 'postcard' }));
    P.specs = P.specs.slice(0, j).concat(fresh, P.specs.slice(e));
    for (let i = j; i < P.cards.length; i++) if (P.cards[i]) P.cards[i].el.remove();
    P.cards.length = j;
    Object.keys(P.res).forEach((i) => { if (/^\d+$/.test(i) && +i >= j) delete P.res[i]; });
    renderDots(); appendCard(j, false); scrollToIndex(j, false); saveProgress();
    toast(`Here is a new postcard: ${alt.place} ${alt.flag}`, 2600);
  }
  function saveProgress() {
    if (P.mode === 'italia') return; // the Italian bonus is tiny: no resume needed
    S.progress = { v: PLAN_V, saved: Date.now(), week: P.week.id, day: P.day.day, alt: !!P.alt, lv: P.lv, idx: Math.max(P.idx, P.cards.length - 1), res: P.res, fish: P.fish, fishBy: P.fishBy, fed: !!P.fed, started: P.started, specs: P.specs, mode: P.mode, order: P.order };
    save();
  }
  function appendCard(i, done) {
    if (P.cards[i] || i >= P.specs.length) return;
    const spec = P.specs[i];
    const card = { i, spec, done: !!done, el: null, onShow: null, onLeave: null };
    const sec = el('section', 'card card-' + spec.k);
    sec.setAttribute('aria-roledescription', 'card');
    card.el = sec;
    BUILDING = card;
    try { BUILD[spec.k](card, sec); } catch (e) { console.error(e); sec.appendChild(el('p', 'c-text', 'Oops, this card is missing. Swipe on!')); card.done = true; }
    BUILDING = null;
    const body = sec.querySelector('.c-body');
    if (P.day.alt && SKIPPABLE.includes(spec.k) && !card.done && body) body.insertBefore(btn('skip-btn', '🔀 A different postcard', () => swapToAlt()), body.firstChild);
    // Every card can be skipped, no questions asked (same small button, same place on every card).
    if (!card.done && !NO_SKIP.includes(spec.k)) { const sk = btn('skip-card', 'Skip ⏭', (e) => { e.stopPropagation(); skipCard(card); }); sk.setAttribute('aria-label', 'Skip this card'); sec.appendChild(sk); }
    if (card.done) sec.classList.add('is-done');
    P.cards[i] = card;
    $('feed').appendChild(sec);
    updateNav();
  }
  /* Called by a card when its task is finished. result: {first:boolean, type?} */
  function complete(card, result, opts) {
    if (card.done) return;
    card.done = true;
    card.el.classList.add('is-done');
    if (result) P.res[card.i] = Object.assign({ k: card.spec.k }, result, card.helped ? { helped: true, first: false } : {});
    if (card.pip && !(opts && opts.pose === false)) card.pip.pose((opts && opts.pose) || (stopLast(card.i) ? 'love' : (result ? winPose() : card.pip.dataset.pose)));
    if (card.pip && card.pip.moveTo) card.pip.moveTo(stopFrac(card.i, true), true);
    const fish = opts && opts.fish != null ? opts.fish : 1;
    if (fish) { P.fish += fish; if (P.fishBy) { const sk = card.spec.stop || card.spec.k; P.fishBy[sk] = (P.fishBy[sk] || 0) + fish; } fishPop(card.el, fish); }
    if (result || fish) babyReact(result && result.first === false ? 'soft' : 'yay');
    appendCard(card.i + 1, false);
    saveProgress();
    updateNav();
    clearTimeout(advanceTimer);
    if (!(opts && opts.stay)) {
      const at = card.i;
      advanceTimer = setTimeout(() => whenQuiet(() => { if (P.idx === at && $('screenPlay').classList.contains('active')) { if (window.__advLog) window.__advLog.push({ at, busy: voiceBusy(), t: Date.now() }); goNext(); } }), Math.min((opts && opts.delay) || AUTO_MS, (opts && opts.read) ? 2600 : MAX_DELAY));
    }
  }
  /* v2.7.1: the feed never moves on while the guide is talking or a word is playing. It waits for the voice to finish,
     then a short beat (VOICE_BEAT) so the word is fully heard. advanceTimer is reused, so Skip / Pause / swipes still cancel. */
  const VOICE_BEAT = 500, VOICE_WAIT_MAX = 15000;
  function whenQuiet(fn) {
    const t0 = Date.now(); let waited = false;
    const tick = () => {
      if (voiceBusy() && Date.now() - t0 < VOICE_WAIT_MAX) { waited = true; advanceTimer = setTimeout(tick, 100); return; }
      if (waited) { waited = false; advanceTimer = setTimeout(tick, VOICE_BEAT); return; }
      fn();
    };
    tick();
  }
  /* Skip (the button on each card, or a swipe up / Next on a card that is not finished): no penalty, not scored. */
  const NO_SKIP = ['mail', 'map', 'feed'];
  function skipCard(card) {
    if (!card || card.done) return;
    clearTimeout(advanceTimer);
    if (card.onSkip) card.onSkip();
    card.done = true; card.skipped = true; card.el.classList.add('is-done', 'skipped');
    P.res[card.i] = { k: card.spec.k, skipped: true };
    appendCard(card.i + 1, false); saveProgress(); updateNav();
    if (P.cards[card.i + 1]) scrollToIndex(card.i + 1, true);
  }
  function fishPop(where, n) {
    sound('fish');
    const f = el('div', 'fish-pop', pet().food + ' +' + n);
    where.appendChild(f);
    setTimeout(() => f.remove(), 1400);
    $('fishCount').textContent = pet().food + ' ' + P.fish;
  }
  /* Progress: a bar that fills card by card toward today's sticker, with her baby riding along (and small dots under it). */
  function renderDots() {
    const d = $('dots'); d.replaceChildren();
    const bar = el('div', 'pbar'); bar.append(el('i', 'pbar-fill'), el('span', 'pbar-pet', pet().icon), el('span', 'pbar-goal', '⭐'));
    const row = el('div', 'dot-row'); P.specs.forEach(() => row.appendChild(el('i', 'dot')));
    d.append(bar, row);
    $('fishCount').textContent = pet().food + ' ' + P.fish;
  }
  /* Her baby reacts in the top bar on every win (a hop and a heart). */
  function babyReact(kind) {
    const f = $('fishCount'); if (!f) return;
    f.classList.remove('hop'); void f.offsetWidth; f.classList.add('hop');
    const h = el('span', 'heart-pop', kind === 'soft' ? '💛' : '❤️'); f.appendChild(h); setTimeout(() => h.remove(), 700);
  }
  function updateNav() {
    const dots = $('dots').querySelectorAll('.dot');
    let nDone = 0;
    for (let i = 0; i < dots.length; i++) {
      const dn = !!(P.cards[i] && P.cards[i].done); if (dn) nDone++;
      dots[i].classList.toggle('done', dn);
      dots[i].classList.toggle('here', i === P.idx);
    }
    const pct = dots.length ? Math.round((nDone / dots.length) * 100) : 0;
    const fillEl = $('dots').querySelector('.pbar-fill'), petEl = $('dots').querySelector('.pbar-pet');
    if (fillEl) fillEl.style.width = pct + '%'; if (petEl) petEl.style.left = `calc(${pct}% - ${pct * 0.22}px)`;
    $('dots').setAttribute('aria-label', `Card ${P.idx + 1} of ${dots.length}`);
    { const c = P.cards[P.idx]; $('btnHelp').classList.toggle('hide-here', !!(c && c.spec && c.spec.k === 'wpractice')); }
    $('topTitle').textContent = P.mode === 'math' ? '🦓 Zoo Math' : P.mode === 'italia' ? '🇮🇹 Italia' : P.mode === 'boss' ? `👑 ${P.day ? P.day.name : ''}` : P.mode === 'bonus' ? '⭐ Bonus round' : `${P.day ? P.day.name : ''}`;
    $('btnPrev').disabled = P.idx <= 0;
    const cur = P.cards[P.idx];
    $('btnNext').disabled = !cur || (cur.done && !P.cards[P.idx + 1] && cur.spec.k !== 'feed');
    $('btnNext').classList.toggle('ready', !!(cur && cur.done && P.cards[P.idx + 1]));
    $('btnNext').setAttribute('aria-label', cur && !cur.done ? 'Skip this card' : 'Next card');
  }
  let scrollLock = { target: -1, until: 0 };
  function scrollToIndex(i, smooth) {
    i = Math.max(0, Math.min(i, P.cards.length - 1));
    const c = P.cards[i] && P.cards[i].el;
    if (c) { scrollLock = { target: smooth ? i : -1, until: Date.now() + 900 }; $('feed').scrollTo({ top: c.offsetTop, behavior: smooth ? 'smooth' : 'auto' }); }
    setIndex(i);
  }
  function setIndex(i) {
    if (i === P.idx && P.cards[i] && P.cards[i]._shown) { updateNav(); return; }
    const prev = P.cards[P.idx];
    if (prev && prev !== P.cards[i]) { if (prev.onLeave) prev.onLeave(); stopVoice(); sound('swoosh'); }
    idleTimers.forEach(clearTimeout); idleTimers = [];
    P.idx = i;
    const c = P.cards[i];
    if (c) {
      const first = !c._shown; c._shown = true;
      // The guide says her line out loud (captions are in the bubble). Cards with their own audio set noAutoSay.
      if (c.pip && !c.noAutoSay && first && !c.done) setTimeout(() => { if (P.cards[P.idx] === c) c.pip.speakNow(true); }, 250);
      if (c.pip && c.pip.moveTo) requestAnimationFrame(() => { c.pip.moveTo(stopFrac(i, c.done), false); });
      if (c.onShow) c.onShow();
      // v2.8.1: pause help counts from the moment the voice has finished AND she stopped touching (a card that asks her to
      // read first adds its reading time: c.idleDelay), so the clue never lands while the guide is still talking.
      if (!c.done) { const st = { quiet: Date.now() + (c.idleDelay || 0), fired: false }; (c.idle || []).forEach((x) => afterQuiet(x.ms, () => { x.fn(); if (c.pip && !x.quiet) c.pip.say(x.say || 'Here is a clue! 💡'); }, () => P.cards[P.idx] === c && !c.done, 0, st)); }
    }
    $('swipeHint').hidden = true;
    updateNav();
  }
  function onFeedScroll() {
    const feed = $('feed');
    if (scrollLock.target >= 0) {
      const t = P.cards[scrollLock.target] && P.cards[scrollLock.target].el;
      if (Date.now() > scrollLock.until || !t || Math.abs(feed.scrollTop - t.offsetTop) < 2) scrollLock.target = -1; else return;
    }
    const best = Math.round(feed.scrollTop / (feed.clientHeight || 1));
    if (best !== P.idx && best >= 0 && best < P.cards.length) setIndex(best);
  }
  function goNext() {
    const cur = P.cards[P.idx];
    if (!cur) return;
    if (!cur.done && cur.onNext && cur.onNext()) return; // a card with its own steps (word practice: next word)
    if (!cur.done) { if (NO_SKIP.includes(cur.spec.k)) { cueNext(cur); return; } return skipCard(cur); } // swipe up any time = skip
    if (P.cards[P.idx + 1]) scrollToIndex(P.idx + 1, true);
    else if (cur.spec.k === 'feed') finishSession();
  }
  // On a card she has to answer (the map, feeding the baby), a swipe points at the thing to tap instead.
  function cueNext(card) { const t = card.el.querySelector('.stop-btn, .big-btn:not([disabled])'); if (t) { t.classList.remove('nudge1'); void t.offsetWidth; t.classList.add('nudge1'); } }
  function goPrev() { if (P.idx > 0) scrollToIndex(P.idx - 1, true); }

  /* ---------------- card building blocks ---------------- */
  function frame(sec, o) {
    const vis = el('div', 'c-visual' + (o.visCls ? ' ' + o.visCls : ''));
    const body = el('div', 'c-body');
    if (o.kicker) body.appendChild(el('p', 'c-kicker', o.kicker));
    if (o.title) body.appendChild(el('h2', 'c-title', o.title));
    sec.append(vis, body);
    if (o.tall) sec.classList.add('tall');
    return { vis, body };
  }
  function sceneImg(src, focus, zoom) {
    const d = el('div', 'scene');
    d.style.backgroundImage = `url(${src})`;
    if (focus) d.style.backgroundPosition = focus;
    // Zoom with a transform (not background-size) so the picture always covers the frame, portrait or landscape.
    if (zoom) { d.classList.add('zoom'); d.style.setProperty('--z', parseFloat(zoom) / 100); d.style.transformOrigin = focus || 'center'; }
    return d;
  }
  /* The guide + a speech bubble. The bubble is always the caption of what she says out loud; 🔁 replays it. */
  /* Guide poses (Sue's art). Config: PIP_GUIDES.poses in guide.js. A slot with several files takes turns. */
  const POSE = GUIDES.poses || { art: {}, fallback: {}, byCard: {}, screens: {} };
  const poseTurn = {};
  function poseFiles(kind, slot) {
    const art = (POSE.art || {})[kind] || {};
    const tried = [slot].concat((POSE.fallback || {})[slot] || []);
    for (const s of tried) if (art[s] && art[s].length) return art[s];
    return [];
  }
  function poseSrc(slot, kind, fixed) {
    const k = kind || G().kind, list = poseFiles(k, slot || 'talk');
    if (!list.length) return (GUIDES.kinds[k] || G()).img || 'img/pip_happy.webp';
    const key = k + ':' + slot; const n = fixed ? 0 : (poseTurn[key] = ((poseTurn[key] == null ? -1 : poseTurn[key]) + 1));
    const f = list[n % list.length];
    return 'guides/' + k + '/' + (f.indexOf('.') >= 0 ? f : f + '.webp');
  }
  function allPoseSrcs(kind) { const k = kind || G().kind, out = new Set([(GUIDES.kinds[k] || {}).img]); Object.values((POSE.art || {})[k] || {}).forEach((l) => l.forEach((f) => out.add('guides/' + k + '/' + (f.indexOf('.') >= 0 ? f : f + '.webp')))); return [...out].filter(Boolean); }
  function allGirlSrcs() { const out = new Set(); Object.values(GIRL).concat([Object.values(GIRL_HOME), 'puffin_post']).forEach((v) => (typeof v === 'string' ? [v] : Array.isArray(v) ? v : Object.values(v)).forEach((n) => out.add('img/girl/' + n + '.webp'))); STICKERS.forEach((n) => out.add('img/stickers/' + n + '.webp')); return [...out]; }
  function warmPoses() { if (navigator.onLine === false) return; const pp = S.chick && S.chick.kind ? pet() : null; allPoseSrcs().concat(pp ? stagesOf(pp).map((x) => x.img).concat(pp.pre.map((st) => babyImg(pp.id, st))) : [], allGirlSrcs()).forEach((u) => { const i = new Image(); i.src = u; }); }
  function guideImg(mood) { return poseSrc(mood || 'talk'); }
  let winTurn = 0;
  function winPose() { return (winTurn++ % 3 === 2) ? 'love' : 'cheer'; }
  /* The girl joins some cards (small, bottom-left of the picture): pirate on boss postcards, Italy on the Italian
     bonus, thinking on "your turn to think" cards, writing on spell/type cards, a postcard on the arrival card. */
  // Where the guide is in the current stop (0 = far side, 1 = with the girl). Cards outside a stop: mail 0, feed 1.
  function stopFrac(i, withSelf) {
    const sp = P.specs[i]; if (!sp) return 0;
    if (!sp.stop) return sp.k === 'feed' ? 1 : 0;
    const idx = P.specs.map((x, j) => (x.stop === sp.stop ? j : -1)).filter((j) => j >= 0);
    let n = 0; idx.forEach((j) => { if (j < i || (withSelf && j === i)) n++; });
    return n / idx.length;
  }
  const stopLast = (i) => { const sp = P.specs[i]; return !!(sp && sp.stop && !(P.specs[i + 1] && P.specs[i + 1].stop === sp.stop)); };
  function sidekick(vis, card, base) {
    if (!vis || !vis.classList || !vis.classList.contains('c-visual') || vis.querySelector('.girl-side')) return;
    if (vis.parentElement && vis.parentElement.classList.contains('tall')) return;
    const k = card && card.spec && card.spec.k;
    const slot = P && P.mode === 'boss' ? (k === 'feed' ? 'bossWin' : 'boss') : k === 'italia' ? 'italia' : (k === 'spell' || k === 'type') ? 'spell' : base === 'think' ? 'think' : k === 'mail' ? 'mail' : (k === 'feed' || k === 'feedme' || k === 'hatchmo') ? '' : 'read';
    if (!slot) return;
    const g = girlEl(slot, 'girl-side'); vis.appendChild(g);
    const again = () => requestAnimationFrame(() => { clearGirl(vis); const w = vis.querySelector('.pip-wrap'); if (w && w.fit) w.fit(); });
    g.addEventListener('load', again); again();
    if (window.MutationObserver) new MutationObserver(() => { if (!vis.__cgT) vis.__cgT = requestAnimationFrame(() => { vis.__cgT = 0; clearGirl(vis); }); }).observe(vis, { childList: true, subtree: true, characterData: true });
  }
  /* v2.7.1 (Sue: "her hair covers the m in mail"): the girl owns a column at the left of the picture area. The big
     word, the word-picture stamp and the guide's speech bubble always stay to the right of her (or above her head),
     never under her. Layout boxes (offsets), not screen boxes, so pop/fly animations do not fool it.
     tests/avatar_overlap.py checks every card at phone and iPad sizes. */
  function girlZone(vis) {
    const g = vis && vis.querySelector('.girl-side');
    if (!g || !g.offsetWidth || !g.isConnected || getComputedStyle(g).display === 'none') return null;
    return { right: g.offsetLeft + g.offsetWidth, top: g.offsetTop, width: g.offsetWidth };
  }
  function fitHero(box) {
    const w = box.querySelector('.w'); if (!w) return;
    w.style.fontSize = '';
    const avail = box.clientWidth - 12, have = w.offsetWidth;
    if (avail > 0 && have > avail) w.style.fontSize = Math.max(18, Math.floor(parseFloat(getComputedStyle(w).fontSize) * avail / have)) + 'px';
  }
  function clearGirl(vis) {
    if (!vis || !vis.isConnected) return;
    const z = girlZone(vis);
    vis.classList.toggle('has-girl', !!z);
    if (!z) { vis.style.removeProperty('--girl-x'); return; }
    vis.style.setProperty('--girl-x', Math.ceil(z.right + 10) + 'px');
    vis.querySelectorAll('.model-hero, .sort-word').forEach(fitHero);
    // the word-picture stamp (top-left): first let the girl stand a little smaller under it; only if that would make
    // her much smaller, the stamp moves to the right of her instead
    const g = vis.querySelector('.girl-side');
    vis.querySelectorAll('.stamp').forEach((st) => {
      st.classList.remove('by-girl'); g.style.maxHeight = '';
      const cs = getComputedStyle(st); if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity < 0.05) return;
      const zz = girlZone(vis); if (!zz) return;
      const bottom = st.offsetTop + st.offsetHeight + (st.offsetParent && st.offsetParent !== vis ? st.offsetParent.offsetTop : 0);
      if (st.offsetLeft >= zz.right + 10 || bottom + 10 <= zz.top) return;
      const room = vis.clientHeight - 4 - bottom - 12, h = g.offsetHeight;
      if (h && room >= h * 0.72) g.style.maxHeight = Math.floor(room) + 'px'; else st.classList.add('by-girl');
    });
    const z2 = girlZone(vis); if (z2) vis.style.setProperty('--girl-x', Math.ceil(z2.right + 10) + 'px');
  }
  function pipSay(vis, text, mood, content) {
    const card = BUILDING;
    const base = (card && card.spec && (POSE.byCard || {})[card.spec.k]) || 'talk';
    const w = el('div', 'pip-wrap guide-' + G().kind + (mood === 'oops' ? ' oops' : '') + (content ? ' content' : ''));
    const img = el('img', 'pip'); img.src = guideImg(mood || base); img.alt = `${G().name} the ${G().species}`;
    img.onerror = () => { const m = G().img; if (m && !img.src.endsWith(m)) img.src = m; };
    w.base = base;
    w.pose = (slot) => { const nx = guideImg(slot || w.base); if (!img.src.endsWith(nx)) img.src = nx; w.classList.toggle('oops', slot === 'oops'); w.dataset.pose = slot || w.base; };
    w.dataset.pose = mood || base;
    const b = el('div', 'bubble');
    const cap = el('span', 'cap'); setCap(cap, text || '');
    const rp = btn('replay', '🔁', (e) => { e.stopPropagation(); w.speakNow(); }); rp.setAttribute('aria-label', 'Hear it again'); rp.title = 'Hear it again';
    b.append(cap, rp);
    if (!text) b.hidden = true;
    w.append(b, img); vis.appendChild(w);
    img.addEventListener('click', () => { if (voiceActive()) stopVoice(); else w.speakNow(); });
    b.addEventListener('click', (e) => { if (e.target === rp) return; if (voiceActive()) stopVoice(); });
    sidekick(vis, card, base);
    w.text = text || '';
    w.speakNow = (queue) => { if (w.text) { speakingWrap = w; w.classList.remove('cap-fail'); (queue ? sayAfter : sayList)([{ text: fillName(w.text), word: false }]); } };
    capMode(w);
    w.fit = () => fitBubble(w, b, vis);
    /* Progress meter: in each stop the guide starts at the far side and moves closer to the girl with every answer.
       (CSS translate, so it never fights the flap/hop animations.) Never moves backward. */
    w.frac = 0;
    w.moveTo = (f, anim) => {
      if (!w.isConnected || vis.parentElement && vis.parentElement.classList.contains('tall')) return;
      f = Math.max(w.frac, Math.min(1, f)); w.frac = f;
      const V = vis.getBoundingClientRect(), R = w.getBoundingClientRect(); if (!V.width) return;
      const gz = girlZone(vis); const gw = gz ? gz.right : 0;
      const travel = Math.max(0, V.width - R.width - gw - 12);   // v2.7.1: beside the girl, never on top of her
      w.classList.toggle('no-anim', !anim);
      w.style.setProperty('--gx', Math.round(-f * travel) + 'px');
      if (anim) w.act(f >= 1 ? 'spin' : 'hop');
      w.fit(); if (anim) setTimeout(w.fit, 380);   // v2.7.1: fit for the target spot at once (the bubble never crosses the girl mid-move)
    };
    w.act = (kind) => { img.classList.remove('hop', 'flap', 'spin', 'wobble'); void img.offsetWidth; img.classList.add(kind); setTimeout(() => img.classList.remove(kind), 420); };
    requestAnimationFrame(w.fit);
    w.say = (t, m, quiet) => {
      w.text = t || ''; b.hidden = !t; w.classList.remove('cap-fail'); capMode(w); setCap(cap, t || ''); w.pose(m || w.base); w.classList.remove('pop'); void w.offsetWidth; w.classList.add('pop'); w.fit();
      if (!quiet && t && card && P.cards[P.idx] === card) w.speakNow();
    };
    if (card) card.pip = w;
    return w;
  }
  /* Caption text: names filled in, and a trailing emoji stays on the line with the last word (no lonely emoji line). */
  /* Emoji sit in their own small box so a tall emoji glyph can never poke out of the line (iPhone clipped them). */
  const EMOJI_RE = /((?:\p{Extended_Pictographic}|\p{Regional_Indicator})(?:\uFE0F|\u200D(?:\p{Extended_Pictographic})|\p{Emoji_Modifier}|\p{Regional_Indicator})*)/u;
  function setCap(cap, t) {
    cap.replaceChildren();
    capText(t).split(EMOJI_RE).forEach((x, i) => { if (!x) return; if (i % 2) cap.appendChild(el('span', 'emo', x)); else cap.appendChild(document.createTextNode(x)); });
  }
  function capText(t) { return fillName(t).replace(/ ([^\sA-Za-z0-9]{1,6})$/u, '\u00a0$1'); }
  /* Keep a speech bubble whole and inside the picture: if it would poke out of the top or sides, step the text down. */
  function fitBubble(w, b, vis) {
    if (!w.isConnected) return;
    clearGirl(vis);
    if (b.hidden) return;
    w.classList.remove('squeeze', 'squeeze2'); b.style.maxWidth = '';
    const V = vis.getBoundingClientRect(); if (!V.height) return;
    const out = () => { const r = b.getBoundingClientRect(); return r.top < V.top + 2 || r.left < V.left + 2 || r.right > V.right + 1; };
    if (out()) { w.classList.add('squeeze'); if (out()) w.classList.add('squeeze2'); }
    // v2.7.1: never over the girl. Where the bubble will be once the guide has finished moving (layout + --gx):
    const z = girlZone(vis); if (!z || w.offsetParent !== vis) return;
    const gx = parseFloat(w.style.getPropertyValue('--gx')) || 0;
    const box = () => { const L = w.offsetLeft + gx + b.offsetLeft; return { left: L, right: L + b.offsetWidth, bottom: w.offsetTop + b.offsetTop + b.offsetHeight }; };
    let r = box();
    if (r.left < z.right + 8 && r.bottom > z.top - 2) {
      b.style.maxWidth = Math.max(56, Math.floor(r.right - z.right - 10)) + 'px';
      if (out()) { w.classList.add('squeeze'); if (out()) w.classList.add('squeeze2'); }
      r = box();
      if (r.left < z.right + 8 && r.bottom > z.top - 2 && !w.classList.contains('squeeze2')) { w.classList.add('squeeze', 'squeeze2'); }
    }
  }
  function feedback(body) { const f = el('p', 'fb'); f.setAttribute('role', 'status'); f.setAttribute('aria-live', 'polite'); body.appendChild(f); return f; }
  function setFb(f, text, kind) { f.textContent = fillName(text); f.className = 'fb show ' + (kind || ''); }
  // "Not yet": a gentle wobble and a soft boop. No red, no X, no buzzer.
  function shake(b) { b.classList.remove('shake'); void b.offsetWidth; b.classList.add('shake'); sound('wrong'); const c = P.cards && P.cards[P.idx]; if (c && c.pip && c.pip.act) c.pip.act('wobble'); }
  /* Idle help: if she pauses, a clue appears by itself (before she can get stuck). */
  /* v2.8.1 (Sue: help the moment she hesitates): PAUSE_1 = the clue / the answer glows, PAUSE_2 = the answer is shown. */
  const PAUSE_1 = 5000, PAUSE_2 = 10000;
  let LAST_ACT = 0;
  ['pointerdown', 'keydown', 'input'].forEach((ev) => document.addEventListener(ev, () => { LAST_ACT = Date.now(); }, true));
  // fn() once there has been ms of quiet (no voice playing, no tap or typing), counted from now + delay; stops when alive() is false.
  // Steps that share one clock (st) count from the same quiet moment: the clue the guide says at step 1 does not push step 2 back.
  function afterQuiet(ms, fn, alive, delay, st) {
    st = st || { quiet: Date.now() + (delay || 0), fired: false };
    const tick = () => { if (!alive()) return; const now = Date.now(); if (!st.fired && voiceBusy()) st.quiet = Math.max(st.quiet, now); if (LAST_ACT > st.quiet) { st.quiet = LAST_ACT; st.fired = false; } if (now - st.quiet >= ms) { st.fired = true; fn(); return; } idleTimers.push(setTimeout(tick, 250)); };
    idleTimers.push(setTimeout(tick, 250));
    return st;
  }
  function onIdle(fn, ms, o) { const c = BUILDING; if (c) (c.idle = c.idle || []).push(Object.assign({ fn, ms: ms || PAUSE_1 }, o || {})); }
  function sparkle(b) { b.classList.add('right'); sound('ok'); const s = el('span', 'spark', '✨'); b.appendChild(s); setTimeout(() => s.remove(), 900); }
  /* Multiple choice. opts: correct FIRST (shuffled here). onRight(first), onWrong(btn, tries).
     Never a dead end: after one miss the choices narrow to 2, after a second only the answer is left (glowing).
     If she pauses, one option quietly fades away as a clue. */
  function choices(parent, opts, seed, onRight, onWrong, cls) {
    const row = el('div', 'opts ' + (cls || ''));
    const card = BUILDING;
    let tries = 0, over = false;
    const btns = [];
    const fadeWrong = (keep) => { const wrong = btns.filter((x) => x.i !== 0 && !x.b.classList.contains('gone')); shuffle(wrong, seed + tries).slice(0, Math.max(0, wrong.length - keep)).forEach((x) => { x.b.classList.add('gone'); x.b.disabled = true; }); };
    const rightB = () => btns.find((x) => x.i === 0).b;
    placeAnswer(opts.map((o, i) => ({ o, i })), (x) => x.i === 0, card ? card.spec.k : (((P.cards[P.idx] || {}).spec || {}).k || '?')).forEach(({ o, i }) => {
      const b = btn('opt', null, () => {
        if (over || b.disabled) return;
        if (i === 0) { over = true; sparkle(b); onRight(tries === 0, b); }
        else {
          tries++; shake(b); b.classList.add('gone'); b.disabled = true;
          onWrong && onWrong(b, tries);
          if (tries === 1) { fadeWrong(1); rightB().classList.add('glow'); }
          else { // shown, not failed: the answer lights up and we move on (logged as "helped", no penalty)
            over = true; fadeWrong(0); const r = rightB(); r.classList.add('glow', 'shown');
            if (card) card.helped = true;
            setTimeout(() => { sparkle(r); onRight(false, r, { shown: true }); }, 650);
          }
        }
      });
      if (o instanceof Node) b.appendChild(o); else b.textContent = fillName(o);
      btns.push({ b, i });
      row.appendChild(b);
    });
    // v2.8.1 (Sue: instant help the moment she hesitates): about 5 s after the voice ends the right answer glows (one other
    // choice left); about 10 s: only the answer is left, glowing, for an easy tap. Shown = helped, never a failure.
    onIdle(() => { if (!over) { fadeWrong(1); rightB().classList.add('glow'); } }, PAUSE_1);
    onIdle(() => { if (!over) { fadeWrong(0); rightB().classList.add('glow', 'shown'); if (card) card.helped = true; } }, PAUSE_2, { say: 'Here it is! Tap it! ✨' });
    if (!card) { // choices added after the card was built (e.g. the picture question after typing): same pause help
      const live = () => !over && row.isConnected && !(P.cards[P.idx] || {}).done;
      const st = afterQuiet(PAUSE_1, () => { fadeWrong(1); rightB().classList.add('glow'); }, live);
      afterQuiet(PAUSE_2, () => { fadeWrong(0); rightB().classList.add('glow', 'shown'); }, live, 0, st);
    }
    if (card) card.help = () => { if (!over) { fadeWrong(1); rightB().classList.add('glow'); } };
    parent.appendChild(row);
    return row;
  }
  /* Tappable sentences of the whole postcard (evidence). isRight(idx, sentence) -> 'right' | 'near' | false */
  function sentenceList(parent, L, isRight, onDone, onMiss) {
    /* v2.5.1: proof = 3 sentences from her postcard (the proof, a close one if any, others), shuffled per view, one tap.
       (Before, the whole postcard was listed in text order, so the proof sat in the same spot every time.) */
    const box = el('div', 'evi evi-3');
    let tries = 0, over = false;
    const all = []; let n = 0;
    L.chunks.forEach((c) => c.s.forEach((s) => { const i = n++; all.push({ i, s, r: isRight(i, s) }); }));
    const right = all.filter((x) => x.r === 'right'), near = all.filter((x) => x.r === 'near'), wrong = fyShuffle(all.filter((x) => !x.r));
    const pick = [right[0]].concat(near.slice(0, 1), wrong).filter(Boolean).slice(0, 3);
    const owner = BUILDING; box._card = owner;
    const help = (lvl) => {
      box.querySelectorAll('.evi-s').forEach((x) => { if (!x._right && lvl >= 1) x.closest('.evi-p').classList.add('dim'); });
      if (lvl >= 2) box.querySelectorAll('.evi-s').forEach((x) => { if (x._right) x.classList.add('glow'); });
    };
    onIdle(() => { if (!over) help(1); }, PAUSE_1);
    onIdle(() => { if (!over) help(2); }, PAUSE_2, { say: 'Here it is! Tap it! ✨' });
    if (owner) owner.help = () => { if (!over) help(2); };
    placeAnswer(pick, (x) => x.r === 'right', (owner ? owner.spec.k : '?') + ':evi').forEach(({ i, s, r }) => {
      const p = el('p', 'evi-p');
      const b = btn('evi-s', fillName(s), () => {
        if (over) return;
        if (r === 'right') { over = true; sparkle(b); onDone(tries === 0, i); }
        else if (r === 'near') { b.classList.add('near'); onMiss(b, 'near'); }
        else { tries++; shake(b); b.classList.add('nope'); setTimeout(() => b.classList.remove('nope'), 1200); help(Math.max(1, tries)); onMiss(b, tries);
          if (tries >= 2) { over = true; const rb = [...box.querySelectorAll('.evi-s')].find((x) => x._right); if (owner) owner.helped = true; if (rb) rb.classList.add('glow'); setTimeout(() => { if (rb) sparkle(rb); onDone(false, -1); }, 900); } }
      });
      b._right = r === 'right';
      p.appendChild(b); box.appendChild(p);
    });
    parent.appendChild(box);
    return box;
  }
  const BUILDING_OF = (node) => node && node._card;
  const hasSub = (s, subs) => [].concat(subs || []).some((x) => s.includes(x));
  function hintBtn(parent, label, onHint) { const b = btn('hint-btn', label || '💡 Hint', () => { b.classList.add('used'); onHint(); }); parent.appendChild(b); return b; }
  const wordLevelLabel = () => `${P.day.name} · ${LEVEL_INFO[P.lv].name}`;
  function recordMiss(markup, type) {
    const w = plain(markup);
    const kw = S.words && S.words[w];
    if (kw && kw.st === 'known') { kw.st = 'help'; kw.moved = Date.now(); P.res.moved = (P.res.moved || []).concat(w); save(); }
    if (!P.res.missed) P.res.missed = [];
    if (!P.res.missed.find((m) => m.w === w)) P.res.missed.push({ w, split: markup, type });
  }

  /* ---------------- the cards ---------------- */
  const BUILD = {};
  BUILD.model = (card, sec) => {
    const m = P.L.model;
    const { vis, body } = frame(sec, { kicker: '🧩 Pattern · tap a word to hear it', title: m.title });
    const VW = vowelLesson();
    const big = el('div', 'model-hero'); big.appendChild(wordEl(m.ex[0].w, { big: true, vowels: VW })); vis.appendChild(big);
    pipSay(vis, 'These words follow the pattern. Which one is it?');
    m.lines.slice(0, 1).forEach((t) => body.appendChild(el('p', 'c-text sm', t)));
    const row = el('div', 'ex-row');
    m.ex.slice(0, 3).forEach((x) => {
      const b = btn('ex', null, () => { big.replaceChildren(wordEl(x.w, { big: true, vowels: VW })); big.classList.remove('pulse'); void big.offsetWidth; big.classList.add('pulse'); speak(plain(x.w)); });
      b.append(wordEl(x.w, { vowels: VW }), el('span', 'ex-tag', x.tag)); row.appendChild(b);
    });
    body.appendChild(row);
    // the job: one tap. A pattern word vs the week's sneaky (rule-breaking) word.
    const good = plain(m.ex[m.ex.length - 1].w), bad = P.L.rebel && P.L.rebel.words ? plain(P.L.rebel.words[0]) : null;
    body.appendChild(el('p', 'c-q', 'Which word follows the pattern?'));
    const fb = feedback(body);
    if (!bad || bad === good) { body.insertBefore(btn('big-btn', 'Got it! 👍', () => complete(card, null, { fish: 0, delay: 300 })), fb); return; }
    card.answer = good;
    const r2 = choices(body, [good, bad], good + bad + P.key, (first) => { setFb(fb, 'Yes! It follows the pattern. 🧩', 'good'); complete(card, { first, type: 'model' }); },
      () => setFb(fb, 'Look at the colored part. Does it do what the pattern says?', 'soft'), 'words');
    body.insertBefore(r2, fb);
  };
  /* The picture area of a word card: today's scene (the postcard art) with the word's picture as a postage stamp on it,
     instead of an emoji floating in the sky. stage.setPic(emoji) changes the stamp. */
  const GENERIC_PICS = new Set(['🔁', '🕵️', '💧', '🗺️', '🔤', '👀', '❓', '⚡', '🧺', '👂', '🎯', '🧑‍🏫', '⌨️', '⭐', '🌱', '📝', '✉️', '📖', '🗣️']);
  function picHero(pic, o) {
    o = o || {};
    const stage = el('div', 'pic-stage' + (o.cls ? ' ' + o.cls : ''));
    const src = o.scene === false ? '' : (o.scene || (P.day && P.day.scene));
    if (src) { const sc = sceneImg(src); sc.classList.add('soft'); stage.appendChild(sc); } else stage.classList.add('no-art');
    const st = el('div', 'stamp'); const inner = el('span', 'stamp-pic', pic || '✉️'); st.appendChild(inner);
    if (o.cap) st.appendChild(el('span', 'stamp-cap', o.cap));
    stage.appendChild(st);
    stage.setPic = (e) => { const off = !e || GENERIC_PICS.has(e); st.classList.toggle('stamp-off', off); if (off) return; setPicText(inner, e); st.classList.remove('stamp-in'); void st.offsetWidth; st.classList.add('stamp-in'); clearGirl(stage.closest('.c-visual')); };
    if (!pic || GENERIC_PICS.has(pic)) st.classList.add('stamp-off');
    stage.stamp = st;
    return stage;
  }
  function wordCardVisual(vis, pic, clue, sayText) { vis.appendChild(picHero(pic || '📝')); return pipSay(vis, sayText || clue); }
  function nearMisses(w) {
    const out = new Set(); const swaps = { a: 'e', e: 'i', i: 'e', o: 'u', u: 'o' };
    for (let i = 0; i < w.length && out.size < 6; i++) { const c = w[i]; if (swaps[c]) out.add(w.slice(0, i) + swaps[c] + w.slice(i + 1)); }
    if (w.length > 3) out.add(w.slice(0, -2) + w.slice(-1));
    for (let i = 1; i < w.length - 1; i++) if (!/[aeiou]/.test(w[i])) { out.add(w.slice(0, i) + w[i] + w.slice(i)); break; }
    out.delete(w);
    return shuffle([...out], w).slice(0, 2);
  }
  BUILD.echo = (card, sec) => {
    const r = card.spec.r;
    const { vis, body } = frame(sec, { kicker: '🔁 Echo word · you know this one!', title: 'Which one is right?' });
    wordCardVisual(vis, '🔁', null, 'This word came back to visit! Which spelling is right?');
    const fb = feedback(body);
    body.appendChild(hearBtn(r.w, '🔊 Hear it'));
    choices(body, [r.w, ...nearMisses(r.w)], r.w + P.key, (first) => {
      setFb(fb, first ? 'You remembered it! 🌟' : 'Yes! That is it.', 'good');
      const hit = S.review.find((x) => x.w === r.w);
      if (hit) { if (first) S.review = S.review.filter((x) => x !== hit); else hit.due = S.sessionsDone + 2; save(); }
      complete(card, { first, type: 'echo' });
    }, () => { setFb(fb, 'Not yet! Look closely at each letter.', 'soft'); const s = body.querySelector('.echo-split'); if (!s) { const d = el('div', 'echo-split'); d.appendChild(wordEl(r.split || r.w, { big: true })); body.insertBefore(d, fb); } });
  };
  BUILD.sort = (card, sec) => {
    const k = P.L.sort;
    const { vis, body } = frame(sec, { kicker: '🧺 Word workout · Let\'s do it together', title: 'Sort the word' });
    const pip = pipSay(vis, 'Where does this word go?');
    const stage = el('div', 'sort-word'); vis.appendChild(stage);
    const prog = el('p', 'c-sub', '');
    const fb = feedback(body);
    let n = 0, mistakes = 0, hinted = false;
    const show = () => {
      const [w] = k.items[n];
      stage.replaceChildren(wordEl(hinted ? sortMark(k, w) : w, { big: true, vowels: hinted && vowelLesson() }));
      prog.textContent = `Word ${n + 1} of ${k.items.length}`;
      stage.classList.remove('pop'); void stage.offsetWidth; stage.classList.add('pop');
    };
    const bins = el('div', 'bins');
    [['a', k.a], ['b', k.b]].forEach(([id, label]) => {
      const b = btn('bin', label, () => {
        const [w, ans] = k.items[n];
        if (ans === id) {
          sparkle(b); setTimeout(() => b.classList.remove('right'), 500);
          n++;
          if (n >= k.items.length) { setFb(fb, mistakes ? 'All sorted! 🎉' : 'All sorted, no slips! 🌟', 'good'); complete(card, { first: mistakes === 0, type: 'sort' }); stage.replaceChildren(el('span', 'done-star', '⭐')); }
          else show();
        } else { mistakes++; shake(b); recordMiss((k.split && k.split[w]) || w, 'sort'); setFb(fb, 'Oops! Pip dropped that one in a puddle. 💦 It goes on the other side!', 'soft'); pip.say('Silly me! Look at the colors for a clue!', 'oops'); hinted = true; show(); }
      });
      bins.appendChild(b);
    });
    body.append(prog, bins);
    hintBtn(body, '💡 Hint', () => { hinted = true; show(); setFb(fb, k.hint, 'hint'); });
    onIdle(() => { hinted = true; show(); setFb(fb, k.hint, 'hint'); });
    body.appendChild(fb);
    show();
    voicePreload(k.items.map((x) => x[0]));
    // the guide asks first ("Where does this word go?"), then the word plays after her line (never on top of it)
    card.onShow = () => { if (!card.done) setTimeout(() => { if (P.cards[P.idx] === card && k.items[n]) sayAfter([{ text: k.items[n][0], word: true }]); }, 320); };
  };
  BUILD.build = (card, sec) => {
    const k = P.L.build;
    const parts = k.w.replace(/[\[\]]/g, '').split('|');
    const { vis, body } = frame(sec, { kicker: '🧱 Word workout · Let\'s do it together', title: 'Build the word' });
    wordCardVisual(vis, k.pic, k.clue);
    const slots = el('div', 'slots');
    parts.forEach(() => slots.appendChild(el('span', 'slot')));
    body.appendChild(slots);
    const fb = feedback(body);
    let n = 0, mistakes = 0;
    const tiles = el('div', 'tiles');
    shuffle(k.tiles, k.w + P.key).forEach((t) => {
      const b = btn('tile', t, () => {
        if (b.disabled) return;
        if (t === parts[n]) {
          b.disabled = true; b.classList.add('used');
          const s = slots.children[n]; s.textContent = t; s.className = 'slot filled syl-' + (n % 3);
          sound('ok'); n++;
          tiles.querySelectorAll('.glow').forEach((g) => g.classList.remove('glow'));
          if (n >= parts.length) {
            slots.replaceWith((() => { const d = el('div', 'slots done'); d.appendChild(wordEl(k.w, { big: true, vowels: vowelLesson() })); return d; })());
            setFb(fb, mistakes ? 'You built it! 🧱' : 'Built it on the first try! 🌟', 'good'); speak(plain(k.w));
            complete(card, { first: mistakes === 0, type: 'build' });
          }
        } else { mistakes++; shake(b); recordMiss(k.w, 'build'); [...tiles.children].forEach((x) => { if (!x.disabled && x.textContent === parts[n]) x.classList.add('glow'); }); setFb(fb, 'Wobble wobble! Pip mixed up the pieces. The glowing one comes next!', 'soft'); }
      });
      tiles.appendChild(b);
    });
    body.appendChild(tiles);
    const row = el('div', 'tool-row');
    hintBtn(row, '💡 Hint', () => { [...tiles.children].forEach((b) => { if (!b.disabled && b.textContent === parts[n]) b.classList.add('glow'); }); setFb(fb, 'The glowing piece comes next.', 'hint'); });
    row.appendChild(hearBtn(plain(k.w), '🔊 Hear it'));
    body.append(row, fb);
  };
  function spellPick(card, sec, k, type, audioFirst) {
    const { vis, body } = frame(sec, { kicker: audioFirst ? '👂 Word workout · Your turn' : '🔎 Word workout · Your turn', title: audioFirst ? 'Hear it, or peek, then tap it' : 'Which spelling is right?' });
    const pip = wordCardVisual(vis, k.pic, audioFirst ? 'Tap 🔊 to hear the word, or 👀 for a picture clue!' : k.clue);
    const fb = feedback(body);
    const tools = el('div', 'tool-row');
    const clueBox = el('div', 'clue-box');
    const showClue = () => {
      clueBox.replaceChildren(el('p', 'c-text sm', '🖼️ ' + k.clue));
      const pat = (k.split || k.w).match(/\[([^\]]+)\]/);
      const first = pat ? pat[1] : plain((k.split || k.w).split('|')[0]);
      const g = el('p', 'c-sub'); g.append('It has '); const s = el('span', 'pat-chip', first); g.append(s, ' in it.');
      clueBox.appendChild(g); clueBox.classList.add('show');
    };
    if (audioFirst) {
      tools.appendChild(hearBtn(k.w, '🔊 Hear it'));
      hintBtn(tools, '👀 Picture clue', showClue);
      card.onShow = () => { if (!S.muted) setTimeout(() => { if (P.cards[P.idx] === card && !card.done) sayAfter([{ text: k.w, word: true }]); }, 350); };
    } else {
      tools.appendChild(hearBtn(k.w, '🔊'));
    }
    body.append(tools, clueBox);
    choices(body, k.opts, k.w + type + P.key, (first) => {
      setFb(fb, first ? praise('first') : praise('retry'), 'good');
      clueBox.replaceChildren(wordEl(k.split || k.w, { big: true, vowels: vowelLesson() })); clueBox.classList.add('show');
      complete(card, { first, type });
    }, (b, tries) => {
      recordMiss(k.split || k.w, type);
      pip.say(mishap(), 'oops');
      setFb(fb, 'Not yet! Look at each letter.', 'soft');
      if (tries >= 1) { if (!audioFirst && !body.querySelector('.hint-btn')) hintBtn(tools, '💡 Need a clue?', () => { clueBox.replaceChildren(wordEl(k.split || k.w, { vowels: vowelLesson() })); clueBox.firstChild.classList.add('ghost'); clueBox.classList.add('show'); }); }
    }, 'words');
    body.appendChild(fb);
  }
  BUILD.pick = (card, sec) => spellPick(card, sec, P.L.pick, 'pick', false);
  BUILD.hear = (card, sec) => spellPick(card, sec, P.L.hear, 'hear', true);
  BUILD.rebel = (card, sec) => {
    const k = P.L.rebel;
    const { vis, body } = frame(sec, { kicker: '🕵️ Word workout · Sneaky word hunt', title: 'Find the sneaky word!' });
    const pip = pipSay(vis, 'One word is sneaky: it does NOT follow the pattern. Can you catch it?');
    vis.appendChild(picHero('🕵️'));
    const fb = feedback(body);
    choices(body, k.words, k.words.join() + P.key, (first) => {
      setFb(fb, k.why, 'good'); pip.say('You caught the sneaky word! 🕵️');
      complete(card, { first, type: 'rebel' }, { delay: 1500 });
    }, () => { recordMiss(k.words[0], 'rebel'); pip.say('Oops, that one follows the pattern! I got mixed up. 🙃', 'oops'); setFb(fb, 'Say each word in your head. Which one sounds different?', 'soft'); }, 'words grid2');
    body.appendChild(fb);
  };
  BUILD.wiggle = (card, sec) => {
    const w = P.day.wiggle;
    const { vis, body } = frame(sec, { kicker: '🎉 Wiggle break!', title: w.text });
    vis.appendChild(el('div', 'pic-hero bounce', w.emoji));
    body.appendChild(el('p', 'c-text', w.sub));
    const b = btn('big-btn', 'I did it! ✅', () => complete(card, null, { delay: 400 }));
    b.classList.add('later'); body.appendChild(b);
    card.onShow = () => { setTimeout(() => b.classList.add('now'), 3500); };
  };
  BUILD.preview = (card, sec) => {
    const { vis, body } = frame(sec, { kicker: '🔓 Postcard unlocked!', title: 'New words on the postcard' });
    vis.appendChild(sceneImg(P.day.scene));
    pipSay(vis, 'Here are 3 new words. Tap one to hear it!');
    const list = el('div', 'pv-list');
    P.L.preview.forEach((p) => {
      const b = btn('pv', null, () => speak(p.w + '. ' + p.means));
      b.append(el('span', 'pv-pic', p.pic), (() => { const d = el('span', 'pv-txt'); d.append(el('strong', null, p.w), el('span', null, p.means)); return d; })());
      list.appendChild(b);
    });
    body.append(list, btn('big-btn', 'Open the postcard ✉️', () => complete(card, null, { fish: 0, delay: 300 })));
  };
  BUILD.chunk = (card, sec) => {
    const L = P.L, i = card.spec.i, j = card.spec.j, parts = j != null ? [i, j] : [i];
    const n = L.chunks.length, last = parts[parts.length - 1] === n - 1;
    const q = L.chunks[parts[parts.length - 1]].check ? L.chunks[parts[parts.length - 1]] : L.chunks[i]; // the part the picture check is about
    const { vis, body } = frame(sec, { kicker: `✉️ ${fillName(L.title)} · part ${j != null ? `${i + 1}–${j + 1}` : i + 1} of ${n}` });
    const long = j != null || parts.reduce((a, pi) => a + L.chunks[pi].s.join(' ').length, 0) > 185; // long text: a shorter picture, slightly smaller type
    if (long) sec.classList.add('long');
    vis.appendChild(sceneImg(P.day.scene, q.focus, '160%'));
    vis.appendChild(greetings());
    pipSay(vis, ''); // the guide (quiet here) is the stop's progress meter
    const pc = postcardEl({ cls: 'pc-chunk' + (i === 0 ? ' first' : '') + (long ? ' two' : '') }); const txt = pc.text;
    if (i === 0) txt.appendChild(el('p', 'pc-greet', 'Dear Mission Control,'));
    parts.forEach((pi) => L.chunks[pi].s.forEach((s0) => txt.appendChild(el('p', null, fillName(s0)))));
    if (last) txt.appendChild(el('p', 'pc-sign', `Your pal, ${G().name} ${G().icon || ''}`));
    body.appendChild(pc);
    // The reading has a job: read it, then tap the picture of what just happened (one tap; it moves on by itself).
    body.appendChild(el('p', 'c-q', j != null ? '🤫 Read it, then tap: which picture shows the end?' : '🤫 Read it, then tap: which picture shows it?'));
    const fb = feedback(body);
    card.answer = q.check[0];
    const row = choices(body, q.check, L.title + parts.join('-'), (first) => {
      setFb(fb, first ? 'Yes! You pictured it! 🖼️' : 'Yes! That is it!', 'good');
      complete(card, { first, type: 'check' });
    }, () => { setFb(fb, 'Peek at the words again. 👀', 'soft'); showHear(); }, 'pics');
    body.insertBefore(row, fb);
    // Her own reading comes first: the "hear it" button shows up after a few seconds (or after a miss).
    const hear = btn('hear-btn hear-read', `🔊 Hear ${G().name} read it`, () => sayList(parts.flatMap((pi) => L.chunks[pi].s).map((x) => ({ text: fillName(x), word: false, pause: 150 }))));
    hear.hidden = true; body.insertBefore(hear, fb);
    const showHear = () => { hear.hidden = false; };
    card.onShow = () => { setTimeout(showHear, j != null ? 9000 : 6000); };
    card.idleDelay = j != null ? 9000 : 6000; // v2.8.1: she reads first; the pause help starts when the Hear-it button appears
  };
  /* "Greetings from ___" lettering on the day's scene: the picture side of the postcard (instead of a floating emoji). */
  function greetings() {
    const g = el('div', 'pc-greetings');
    let place = ((P.day && P.day.place) || '').split(',')[0].trim();
    const m = place.match(/^(?:an?|the|my)\b.*?\bin (.+)$/i); if (m) place = m[1]; // "A barn in New Jersey" -> "New Jersey"
    const big = el('span', 'pg-big', place); if (place.length > 14) big.classList.add('pg-long');
    g.append(el('span', 'pg-small', 'Greetings from'), big);
    return g;
  }
  function compareVisual(vis) {
    const other = P.week.days.find((d) => d.day === P.day.compareWith);
    const w = el('div', 'compare');
    [[other, 'then'], [P.day, 'now']].forEach(([d]) => {
      const f = el('figure', 'cmp'); f.appendChild(sceneImg(d.scene)); f.appendChild(el('figcaption', null, `${d.name}: ${d.place}`)); w.appendChild(f);
    });
    vis.appendChild(w);
    return other;
  }
  function peekOther(body, other) {
    const L2 = other.levels[P.lv];
    const b = btn('hint-btn', `👀 Peek at ${other.name}'s postcard`, () => {
      b.remove();
      const d = el('div', 'peek'); d.appendChild(el('p', 'c-kicker', `${other.name}: ${fillName(L2.title)}`));
      sentencesOf(L2).forEach((s) => d.appendChild(el('p', 'peek-s', fillName(s))));
      body.insertBefore(d, body.querySelector('.evi') || null);
    });
    return b;
  }
  BUILD.question = (card, sec) => {
    const L = P.L, q = L.question;
    const pictureQ = q.pre && q.pre.picture;
    const preCard = card.spec.k === 'qpre';
    const { vis, body } = frame(sec, { kicker: preCard ? '🤔 What do you think?' : `❓ Pip's question · ${P.day.qtype}`, tall: !preCard, visCls: preCard && pictureQ ? 'full-pic' : '' });
    let other = null;
    if (P.day.compareWith && !preCard) other = compareVisual(vis); else { const s = sceneImg(P.day.scene); if (pictureQ) s.classList.add('contain'); vis.appendChild(s); }
    const isPre = card.spec.k === 'qpre';
    const pip = pipSay(vis, isPre ? q.pre.q : q.q);
    const fb = feedback(body);
    const evidence = () => {
      body.insertBefore(el('p', 'c-q', fillName(q.q)), fb);
      if (other) body.insertBefore(peekOther(body, other), fb);
      const list = sentenceList(body, L, (i, s) => hasSub(s, q.a) ? 'right' : (q.near && hasSub(s, q.near) ? 'near' : false), (first) => {
        pip.say('You saved me, Mission Control! 🎉'); setFb(fb, first ? 'That is the proof! First try! 🌟' : 'That is the proof! 🎉', 'good');
        complete(card, { first, type: 'question', pre: P.res.preFirst });
      }, (b, t) => {
        if (t === 'near') { setFb(fb, q.nearText || 'Close! Try a sentence that tells it exactly.', 'hint'); return; }
        pip.say(q.mishap, 'oops'); setFb(fb, q.mishap, 'soft');
      });
      body.insertBefore(list, fb);
    };
    if (q.pre && card.spec.k === 'qpre') {
      body.appendChild(el('p', 'c-q', fillName(q.pre.q)));
      const row = choices(body, q.pre.opts, L.title + 'pre', (first) => {
        setFb(fb, 'Yes! 👍', 'good'); P.res.preFirst = first;
        complete(card, { first, type: 'qpre' });
      }, () => { pip.say(q.pre.mishap, 'oops'); setFb(fb, q.pre.mishap, 'soft'); }, 'stack');
      body.appendChild(fb);
    } else { body.appendChild(fb); evidence(); }
  };
  BUILD.qpre = (card, sec) => BUILD.question(card, sec);
  /* Advisor: one question per card. Two-part advisors (odd one out + why, feel + proof, would-you-rather + reason)
     are two cards in a row (spec.step 1 and 2), each answered with one tap. */
  BUILD.advisor = (card, sec) => {
    const L = P.L, a = L.advisor, step = card.spec.step || 1;
    const kick = { mistake: '🧐 Advisor · Pip made a mistake', odd: '🧐 Advisor · Odd one out', feel: '🧐 Advisor · How does Pip feel?', rather: '🧐 Advisor · Would you rather?', predict: '🧐 Advisor · Predict' }[a.type];
    const evid = a.type === 'mistake' || (step === 2 && (a.type === 'feel' || a.type === 'predict'));
    const { vis, body } = frame(sec, { kicker: kick + (step === 2 ? ' · part 2' : ''), tall: evid });
    vis.appendChild(sceneImg(P.day.scene));
    const pip = pipSay(vis, a.type === 'mistake' ? '"' + a.pip + '"' : (step === 2 ? (a.whyQ || a.evQ || 'Why?') : a.q));
    const fb = feedback(body);
    const done = (first, type) => { pip.say(step === 1 && a.type !== 'mistake' ? 'Good thinking! 👍' : 'Great advice! You are the best advisor! 🏅'); setFb(fb, 'Great thinking! 🏅', 'good'); complete(card, { first, type: type || 'advisor' }); };
    const evidence = (prompt, subs) => {
      body.insertBefore(el('p', 'c-q', prompt), fb);
      const list = sentenceList(body, L, (i, s0) => hasSub(s0, subs) ? 'right' : false, (first) => done(first && P.res.advFirst !== false), () => { pip.say(a.mishap, 'oops'); setFb(fb, a.mishap, 'soft'); });
      body.insertBefore(list, fb);
    };
    body.appendChild(fb);
    const ask = (q, opts, seed, onOk, cls) => { body.insertBefore(el('p', 'c-q', q), fb); body.insertBefore(choices(body, opts, L.title + seed, onOk, () => { pip.say('Hmm, look at the postcard for clues!', 'oops'); setFb(fb, a.mishap || 'Look again!', 'soft'); }, cls || 'stack'), fb); };
    if (a.type === 'mistake') { body.insertBefore(el('p', 'c-quote', 'Pip says: "' + a.pip + '"'), fb); evidence(a.q, a.a); return; }
    if (step === 1) {
      if (a.type === 'rather') {
        // an opinion: every choice is right (one tap), the reason comes on the next card
        body.insertBefore(el('p', 'c-q', a.q), fb);
        const row = el('div', 'opts stack');
        a.choices.forEach((c, ci) => row.appendChild(btn('opt', c.label, (e) => { if (card.done) return; sparkle(e.currentTarget); P.res.rather = ci; done(true, 'advpick'); })));
        body.insertBefore(row, fb); return;
      }
      ask(a.q, a.opts, a.type, (first) => { P.res.advFirst = first; done(first, 'advpick'); });
      return;
    }
    if (a.type === 'odd') ask(a.whyQ, a.whys, 'why', (f2) => done(f2 && P.res.advFirst !== false));
    else if (a.type === 'rather') { const c = a.choices[P.res.rather || 0]; ask('Good choice! ' + c.q, c.reasons, 'rather' + (P.res.rather || 0), (f2) => done(f2)); }
    else evidence(a.evQ, a.a);
  };
  BUILD.fill = (card, sec) => {
    const k = P.L.fill;
    const { vis, body } = frame(sec, { kicker: '🧠 Remember it · fill the blank', title: k.kind === 'letters' ? 'Finish the word' : 'Which word fits?' });
    const pip = pipSay(vis, 'A raindrop smudged a word on my postcard! 💧 Can you fix it?');
    vis.appendChild(picHero('💧'));
    const sentence = el('p', 'fill-sent');
    const [before, after] = fillName(k.sent).split('___');
    const blank = el('span', 'blank', k.kind === 'letters' ? `${k.pre}__${k.post}` : '_____');
    sentence.append(before, blank, after);
    body.appendChild(sentence);
    const fb = feedback(body);
    choices(body, k.opts, k.sent, (first) => {
      blank.textContent = k.kind === 'letters' ? k.w : k.opts[0]; blank.classList.add('filled');
      setFb(fb, first ? 'Fixed! You remembered! 🌟' : 'Fixed! 🎉', 'good');
      complete(card, { first, type: 'fill' });
    }, () => {
      recordMiss(k.kind === 'letters' ? k.w : k.opts[0], 'fill');
      pip.say(mishap() + ' Which word makes sense?', 'oops');
      setFb(fb, k.kind === 'letters' ? 'Say the word slowly. Which letters make that sound?' : 'Which word makes sense in the sentence?', 'soft');
    }, k.kind === 'letters' ? 'tiles-row' : 'words');
    body.appendChild(fb);
  };
  BUILD.spell = (card, sec) => {
    const k = P.L.spell;
    const { vis, body } = frame(sec, { kicker: '✏️ Remember it · spell it', title: 'Spell the missing word' });
    const pip = wordCardVisual(vis, k.pic, null, 'Type the missing word. You can hear it or peek!');
    const sentence = el('p', 'fill-sent');
    const [before, after] = fillName(k.sent).split('___');
    const blank = el('span', 'blank', '_____');
    sentence.append(before, blank, after);
    body.appendChild(sentence);
    const form = el('form', 'spell-form');
    const inp = el('input', 'spell-in'); inp.type = 'text'; inp.autocomplete = 'off'; inp.setAttribute('autocapitalize', 'none'); inp.setAttribute('autocorrect', 'off'); inp.spellcheck = false; inp.setAttribute('aria-label', 'Type the word');
    const go = btn('big-btn', 'Check ✓'); go.type = 'submit';
    form.append(inp, go);
    body.appendChild(form);
    const tools = el('div', 'tool-row');
    tools.appendChild(hearBtn(k.w, '🔊 Hear it'));
    const peek = el('div', 'peek-word');
    let helped = false, tries = 0;
    hintBtn(tools, '👀 Peek', () => { helped = true; peek.replaceChildren(wordEl(k.split, { big: true, vowels: vowelLesson() })); peek.classList.add('show'); setTimeout(() => peek.classList.remove('show'), 2600); });
    body.append(tools, peek);
    const fb = feedback(body);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = inp.value.trim().toLowerCase();
      if (!v) return;
      if (v === k.w.toLowerCase()) {
        blank.textContent = k.w; blank.classList.add('filled'); inp.disabled = true; go.disabled = true; sound('ok');
        setFb(fb, tries === 0 && !helped ? 'Perfect spelling! 🌟' : 'You spelled it! 🎉', 'good');
        complete(card, { first: tries === 0 && !helped, type: 'spell' });
      } else {
        tries++; shake(inp); recordMiss(k.split, 'spell');
        pip.say('So close! Try again. 💪', 'oops');
        if (tries >= 2) { peek.replaceChildren(wordEl(k.split, { big: true, vowels: vowelLesson() })); peek.classList.add('show'); setFb(fb, 'Here it is. Copy it letter by letter!', 'hint'); }
        else setFb(fb, 'Almost! Check each sound.', 'soft');
      }
    });
  };
  /* A real little postcard: cream card, a stamp (her guide) in the corner, a round postmark with the place and day,
     a thin divider, optional picture on the left half and the words on the right (or the whole card for long text). */
  function postcardEl(o) {
    o = o || {};
    const pc = el('div', 'postcard' + (o.pic || o.scene ? ' pc-split' : '') + (o.cls ? ' ' + o.cls : ''));
    const stamp = el('div', 'pc-stamp'); const sim = el('img'); sim.src = guideImg('talk'); sim.alt = ''; sim.onerror = () => { stamp.textContent = (P.day && P.day.flag) || '✉️'; };
    stamp.appendChild(sim); pc.appendChild(stamp);
    const pm = el('div', 'pc-postmark'); pm.append(el('span', 'pm-place', ((P.day && P.day.place) || 'Mission Control').split(',')[0].slice(0, 18)), el('span', 'pm-day', (P.day && P.day.name) || '')); pc.appendChild(pm);
    if (o.pic || o.scene) {
      const left = el('div', 'pc-left');
      if (o.scene) { const im = el('div', 'pc-photo'); im.style.backgroundImage = `url(${o.scene})`; left.appendChild(im); }
      else left.appendChild(el('span', 'pc-pic', o.pic));
      pc.appendChild(left); pc.appendChild(el('div', 'pc-divider'));
    }
    const right = el('div', 'pc-right'); pc.appendChild(right);
    pc.text = right;
    return pc;
  }
  /* Picture options for "tap the picture" checks: the right picture first, then clear, different ones from the week. */
  function otherPics(right, n, seed) {
    const W = W_(), pool = [];
    Object.values(W.vocab || {}).forEach((v) => pool.push(v.pic));
    Object.values(W.typeWords || {}).forEach((l) => l.forEach((t) => pool.push(t.pic)));
    (W.warmup || []).forEach((t) => pool.push(t.pic));
    // never a distractor that shares a picture with the answer (e.g. 📦 next to 🧸📦)
    const parts = (p) => (/^img:/.test(p) ? [p] : [...String(p)].filter((c) => /\p{Extended_Pictographic}/u.test(c)));
    const mine = new Set(parts(right || ''));
    const uniq = [...new Set(pool.filter((p) => p && p !== right && (/^img:/.test(p) || [...p].length <= 4) && !parts(p).some((c) => mine.has(c))))];
    return shuffle(uniq, seed).slice(0, n);
  }
  const picOpt = (p) => el('span', 'pic-opt', p);
  function fullPostcard(parent) {
    const pc = postcardEl({ cls: 'pc-full' }); const box = pc.text;
    box.appendChild(el('p', 'pc-greet', 'Dear Mission Control,'));
    P.L.chunks.forEach((c) => box.appendChild(el('p', null, c.s.map(fillName).join(' '))));
    box.appendChild(el('p', 'pc-sign', `Your pal, ${G().name} ${G().icon || ''}`));
    parent.appendChild(pc);
  }
  function takesUI(body, kinds, onAll) {
    const got = {}; const players = el('div', 'takes');
    let doneCalled = false;
    const check = () => { if (!doneCalled && kinds.every((k) => got[k.id])) { doneCalled = true; onAll(got); } };
    kinds.forEach((kind, ki) => {
      const col = el('div', 'take');
      col.appendChild(el('p', 'take-h', kind.label));
      const slot = el('div', 'take-play');
      const r = recorder({ week: P.week.id, day: P.day.day, dayName: P.day.name, level: P.lv, kind: kind.id, title: fillName(P.L.title) }, (rec) => { got[kind.id] = rec; slot.replaceChildren(audioFor(rec)); check(); }, () => { got[kind.id] = 'spoken'; check(); });
      col.append(r, slot);
      players.appendChild(col);
    });
    body.appendChild(players);
    return players;
  }
  BUILD.broadcast = (card, sec) => {
    const { vis, body } = frame(sec, { kicker: '📻 Broadcast · read it out loud', tall: true });
    vis.appendChild(sceneImg('img/fri_radio.webp'));
    pipSay(vis, 'You figured it all out! Now read the whole postcard out loud, like a radio host! 🎙️');
    body.appendChild(el('p', 'c-sub', 'Take 1: read it out loud. Take 2: read it again like a radio star!'));
    const fb = feedback(body);
    let heard = false;
    const hearAfter = () => { if (heard) return; heard = true; body.insertBefore(btn('hear-btn hear-read', `🔊 Hear ${G().name} read it`, () => sayList(P.L.chunks.flatMap((c) => c.s).map((x) => ({ text: fillName(x), word: false, pause: 150 })))), fb); };
    const obs = new MutationObserver(() => { if (body.querySelector('.take-play audio') || body.querySelector('.rec-off')) { hearAfter(); obs.disconnect(); } });
    obs.observe(body, { childList: true, subtree: true });
    const takes = takesUI(body, [{ id: 'first', label: '🎙️ Take 1' }, { id: 'best', label: '🌟 Take 2 (radio star)' }], () => {
      setFb(fb, 'What a broadcast! Listen to Take 1 and Take 2 side by side. 🎧', 'good');
      complete(card, { first: true, type: 'broadcast' }, { fish: 2, stay: true });
    });
    body.appendChild(fb);
    fullPostcard(body);
  };
  BUILD.radio = (card, sec) => {
    const r = P.day.radio;
    const { vis, body } = frame(sec, { kicker: '📻 Friday Radio Show · read it with a grown-up', title: fillName(r.title), tall: true });
    vis.appendChild(sceneImg('img/fri_radio.webp'));
    pipSay(vis, 'Pick your part. Your grown-up reads the other parts. Record the whole show!');
    const parts = r.parts.map(fillName);
    const chooser = el('div', 'part-row');
    const script = el('div', 'script');
    const colors = ['p0', 'p1', 'p2'];
    const render = (mine) => {
      script.replaceChildren();
      r.lines.forEach(([who, line]) => {
        const w = fillName(who); const pi = parts.indexOf(w);
        const p = el('p', 'line ' + (pi >= 0 ? colors[pi] : 'pall') + (w === mine || who === 'ALL' ? ' mine' : ''));
        p.append(el('strong', null, w + ': '), fillName(line)); script.appendChild(p);
      });
    };
    parts.forEach((p) => chooser.appendChild(btn('part', p, (e) => { chooser.querySelectorAll('.part').forEach((b) => b.classList.remove('on')); e.currentTarget.classList.add('on'); render(p); })));
    body.append(chooser, script);
    render(null);
    const fb = feedback(body);
    takesUI(body, [{ id: 'radio', label: '🎙️ Record the show' }], () => {
      setFb(fb, 'That was a hit show! 🎉 Play it back for the family.', 'good');
      complete(card, { first: true, type: 'broadcast' }, { fish: 3, stay: true });
    });
    body.appendChild(fb);
  };
  BUILD.route = (card, sec) => {
    const R = P.day.route;
    const { vis, body } = frame(sec, { kicker: '🗺️ Reply & route', title: 'Where should Pip fly?', tall: true });
    pipSay(vis, R.q);
    vis.appendChild(picHero('🗺️'));
    body.appendChild(el('p', 'c-quote', fillName(P.day.ps)));
    const rep = el('details', 'reply'); rep.appendChild(el('summary', null, '🎙️ Record a reply to Pip (optional)'));
    rep.appendChild(recorder({ week: P.week.id, day: P.day.day, dayName: P.day.name, level: P.lv, kind: 'reply', title: 'Reply to Pip' }, () => {}, () => {}));
    body.appendChild(rep);
    body.appendChild(el('p', 'c-q', R.q));
    const row = el('div', 'route-row');
    R.opts.forEach((o, oi) => {
      const b = btn('route', null, () => {
        row.querySelectorAll('.route').forEach((x) => { x.disabled = true; });
        b.classList.add('right'); sound('ok');
        S.routeEcho = { week: P.week.id, day: P.day.day, text: o.echo }; P.res.route = o.label; save();
        complete(card, null, { delay: 500 });
      });
      b.append(el('span', 'route-pic', o.pic), el('span', 'route-lbl', o.label));
      row.appendChild(b);
    });
    body.appendChild(row);
  };
  const stageFor = (fish) => { let s = 0; STAGE_AT.forEach((at, i) => { if (fish >= at) s = i; }); return s; };
  function chickEl(fish, cls, kind) {
    const pp = kind ? PETS[kind] : pet();
    const st = stagesOf(pp)[stageFor(fish)];
    const w = el('div', 'chick ' + (cls || ''));
    w.style.setProperty('--s', st.scale);
    const img = el('img', 'chick-img'); img.src = st.img; img.alt = kind ? pp.kind : chickName() + ', your ' + pp.kind.toLowerCase();
    w.appendChild(img);
    return w;
  }
  BUILD.feed = (card, sec) => {
    const pp = pet();
    const { vis, body } = frame(sec, { kicker: `${pp.food} Feed & grow`, title: `Feed ${chickName()}!` });
    vis.classList.add('hab-bg', 'pet-' + pet().id);
    const before = S.chick.fish;
    let ch = chickEl(before, 'big');
    vis.appendChild(ch);
    const n = P.fish;
    if (P.fed) { // came back after feeding (v2.7.3): today's food was already given, so no second helping
      body.appendChild(el('p', 'c-text', `${chickName()} already ate today's ${n} ${pp.foodName}! ${pp.food}`));
      body.appendChild(btn('big-btn', 'Finish ✓', () => { finishSession(); }));
      return;
    }
    body.appendChild(el('p', 'c-text', `You earned ${n} ${pp.foodName} today! ${pp.food}`));
    const fishRow = el('div', 'fish-row');
    for (let i = 0; i < Math.min(n, 24); i++) fishRow.appendChild(el('span', 'fishy', pp.food));
    body.appendChild(fishRow);
    const fb = feedback(body);
    const feedB = btn('big-btn', `Feed ${chickName()} ${pp.food}`, () => {
      feedB.disabled = true;
      [...fishRow.children].forEach((f, i) => setTimeout(() => { f.classList.add('eaten'); sound('food'); }, i * 45));
      setTimeout(() => {
        const after = before + n;
        const sb = stageFor(before), sa = stageFor(after);
        S.chick.fish = after; P.fed = true; save(); saveProgress();
        const nc = chickEl(after, 'big grow'); ch.replaceWith(nc); ch = nc;
        const newItems = itemsOf(pp).filter((it) => it.at > before && it.at <= after);
        let msg = sa > sb ? (sa === STAGE_KEYS.length - 1 ? `${chickName()} is all grown up! 🎓🎉` : `${chickName()} grew! Now: ${stagesOf(pp)[sa].name}! 🎉`) : `Yum! ${chickName()} is getting bigger! 😋`;
        sound(sa > sb ? 'j_grow' : 'right');
        if (sa > sb) { const cheer = girlEl(sa === STAGE_KEYS.length - 1 ? 'grown' : 'grow', 'girl-cheer'); vis.appendChild(cheer); }
        if (newItems.length) {
          msg += ` New for the habitat: ${newItems.map((i) => i.name).join(', ')}!`;
          const u = el('div', 'unlock'); newItems.forEach((it) => { if (it.img) { const im = el('img'); im.src = it.img; im.alt = it.name; u.appendChild(im); } else { const e = el('span', 'unlock-emoji', it.emoji); e.setAttribute('aria-label', it.name); u.appendChild(e); } }); body.insertBefore(u, fb);
        }
        setFb(fb, msg, 'good');
        const fin = btn('big-btn', 'Finish ✓', () => { finishSession(); });
        body.appendChild(fin);
        complete(card, null, { fish: 0, stay: true });
        setTimeout(() => { if (P.cards[P.idx] === card && $('screenPlay').classList.contains('active')) finishSession(); }, 2600);
      }, Math.min(n, 24) * 45 + 300);
    });
    body.append(feedB, fb);
  };

  /* ================= new cards: warm-up, order, decoding, sneaky words, typing, sounds, R, bonus ================= */
  const W_ = () => P.week || currentWeek();
  function rMark(w) { return String(w).replace(/r+/gi, (m) => `[${m}]`); }
  function vocabOf(w) { const V = W_().vocab || {}; return V[w] ? Object.assign({ w }, V[w]) : null; }
  function markTry(v, ok) {
    S.tryAgain = S.tryAgain || {};
    const t = S.tryAgain[v.w];
    if (ok) { if (t) { t.right = (t.right || 0) + 1; if (t.right >= 2) delete S.tryAgain[v.w]; } }
    else S.tryAgain[v.w] = { w: v.w, split: v.split, n: ((t && t.n) || 0) + 1, right: 0, last: Date.now(), from: `${P.day.name} (${LEVEL_INFO[P.lv].name})` };
    save();
  }
  /* Colored chunks; Pip taps each one, says it slowly, then the whole word. */
  function chunkItems(v, box, slow) {
    const syls = box ? [...box.querySelectorAll('.syl')] : [];
    const parts = String(v.split || v.w).split('|');
    const says = v.say ? v.say.split('|') : parts.map(plain);
    const on = (i) => () => syls.forEach((s, j) => s.classList.toggle('on', i < 0 ? true : j === i));
    const items = parts.length > 1 ? says.map((c, i) => ({ text: c, word: true, slow: true, onStart: on(i), pause: 260 })) : [{ text: v.w, word: true, slow: true, onStart: on(-1), pause: 300 }];
    items.push({ text: v.w, word: true, slow: !!slow, onStart: on(-1) });
    return items;
  }
  function chunkWord(v) {
    const d = el('div', 'dec-word');
    const w = wordEl(v.split || v.w, { big: true });
    const parts = String(v.split || v.w).split('|'); const says = v.say ? v.say.split('|') : parts.map(plain);
    [...w.querySelectorAll('.syl')].forEach((s, i) => { s.classList.add('tap'); s.addEventListener('click', () => { sayList([{ text: says[i] || plain(parts[i]), word: true, slow: true }]); }); });
    d.appendChild(w); return d;
  }
  /* Optional record-and-compare for one word (saved on this device only). */
  function wordRec(v, kind) {
    const wrap = el('div', 'wrec');
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder)) return wrap;
    const b = btn('mini-btn', '🎙️ Record me', null);
    const out = el('span', 'wrec-out');
    let mr = null;
    b.addEventListener('click', async () => {
      if (mr && mr.state === 'recording') { mr.stop(); return; }
      let stream; try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); } catch (_) { b.remove(); out.textContent = 'Mic is off. That is OK!'; return; }
      const chunks = []; try { mr = new MediaRecorder(stream); } catch (_) { return; }
      mr.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
      mr.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunks, { type: mr.mimeType || 'audio/webm' });
        const rec = { id: 'r' + Date.now() + Math.random().toString(36).slice(2, 6), date: Date.now(), dur: 3, mime: blob.type, blob, kind: kind || 'word', word: v.w, week: P.week.id, day: P.day.day, dayName: P.day.name, level: P.lv, title: v.w };
        try { await recPut(rec); } catch (_) {}
        b.textContent = '🎙️ Again';
        out.replaceChildren(btn('mini-btn', '▶️ Me', () => { const a = audioFor(rec); a.volume = Math.min(1, vol()); a.play().catch(() => {}); }), btn('mini-btn', `🔊 ${G().name}`, () => sayList([{ text: v.w, word: true }])));
      };
      mr.start(); b.textContent = '⏹️ Stop'; setTimeout(() => { if (mr && mr.state === 'recording') mr.stop(); }, 4000);
    });
    wrap.append(b, out); return wrap;
  }
  function selfMark(row, onRight, onAgain) {
    row.replaceChildren(btn('big-btn good', '✅ I said it right', () => onRight()), btn('big-btn soft', '🔁 Try again', () => onAgain()));
  }

  BUILD.mail = (card, sec) => {
    const { vis, body } = frame(sec, { kicker: `📬 Mail call · ${P.day.name}`, title: `${P.day.flag} ${P.day.place}` });
    vis.appendChild(sceneImg(P.day.scene));
    const pip = pipSay(vis, P.day.arrive);
    pip.classList.add('fly-in');
    if (S.routeEcho && S.routeEcho.text) body.appendChild(el('p', 'c-note', '🗺️ ' + S.routeEcho.text));
    if (card.spec.boss) { body.appendChild(btn('big-btn', 'Open the big postcard! 📬', () => { if (!card.done) complete(card, null, { fish: 0, delay: 200 }); })); return; }
    mapPick(card, body, card.spec.map || ['words', 'postcard', 'fly'], 'Where do we go first? You choose!');
  };
  /* The mini map: 2-3 stops; she taps the one she wants next (one tap). Finished stops show a check. */
  function mapPick(card, body, left, q) {
    body.appendChild(el('p', 'c-q', q));
    const row = el('div', 'stops');
    const all = ['words', 'postcard', 'fly'];
    const count = (id) => stopSpecs(id).length;
    // Friday's radio show reads the whole postcard, so Fly on opens after the postcard stop.
    const radioLock = (id) => id === 'fly' && left.includes('postcard') && flyStop(P.day, P.L).some((x) => x.k === 'radio' || x.k === 'broadcast');
    all.forEach((id) => {
      const locked = radioLock(id), open = left.includes(id) && !locked;
      const b = btn('stop-btn' + (open ? '' : ' done'), null, () => {
        if (card.done || !open) return;
        row.querySelectorAll('.stop-btn').forEach((x) => { x.disabled = true; }); b.classList.add('right'); sound('ok');
        P.res.stops = (P.res.stops || []).concat(id);
        P.specs = P.specs.slice(0, card.i + 1).concat(planAfterMap(id, left)); renderDots();
        complete(card, null, { fish: 0, delay: 250 });
      });
      b.disabled = !open;
      if (locked) b.classList.add('locked');
      b.append(el('span', 'stop-ic', locked ? '📻' : open ? STOPS[id][0] : '✅'), el('span', 'stop-lbl', STOPS[id][1]), el('span', 'stop-n', locked ? 'after 📬' : open ? `${count(id)} card${count(id) === 1 ? '' : 's'}` : 'done!'));
      row.appendChild(b);
    });
    body.appendChild(row);
  }
  BUILD.map = (card, sec) => {
    const { vis, body } = frame(sec, { kicker: '🗺️ Next stop', title: 'Stop done! 🎉' });
    vis.appendChild(picHero('🗺️'));
    pipSay(vis, 'Where to next? You choose!');
    mapPick(card, body, card.spec.left || ['postcard', 'fly'], 'Where to next?');
  };
  /* ---- Word check: a quick grid of the week's words. "I know it" (green) or "Help me" (star), one tap per word.
     Or "Quick check": each word flashes big and she taps. Known words are skipped (one quick confirm later, at most);
     only help words get a practice card (read-aloud once, then she reads it and taps its picture). ---- */
  BUILD.wcheck = (card, sec) => {
    const words = card.spec.words || [];
    const { vis, body } = frame(sec, { kicker: '🔤 Word check · super quick!', title: 'Do you know these words?' });
    vis.appendChild(picHero('🔤'));
    pipSay(vis, 'Tap I know it, or Help me. Help words get a practice card!');
    const marks = {};
    const finish = () => {
      if (card.done) return;
      const known = words.filter((v) => marks[v.w] === 'known'), help = words.filter((v) => marks[v.w] === 'help');
      known.forEach((v) => { S.words[v.w] = Object.assign({}, S.words[v.w], { st: 'known', at: Date.now(), week: P.week.id, ok: false }); });
      help.forEach((v) => { S.words[v.w] = Object.assign({}, S.words[v.w], { st: 'help', at: Date.now(), week: P.week.id }); });
      save();
      P.res.wcheck = { known: known.map((v) => v.w), help: help.map((v) => v.w) };
      const add = help.slice(0, 2).map((v) => ({ k: 'decode', v, help: true, stop: card.spec.stop || 'words' }));
      if (add.length) { P.specs.splice(card.i + 1, 0, ...add); renderDots(); }
      complete(card, null, { fish: 1, delay: 450 });
    };
    const mark = (v, st, tile) => {
      marks[v.w] = st;
      if (tile) { tile.classList.toggle('is-known', st === 'known'); tile.classList.toggle('is-help', st === 'help'); }
      sound(st === 'known' ? 'ok' : 'plink');
      if (words.every((x) => marks[x.w])) setTimeout(finish, 300);
    };
    const grid = el('div', 'wgrid' + (words.length > 4 ? ' many' : ''));
    words.forEach((v) => {
      const tile = el('div', 'wtile');
      tile.appendChild(el('span', 'wt-word', v.w));
      const r = el('div', 'wt-row');
      const bk = btn('wk-know', '✅', () => mark(v, 'known', tile)), bh = btn('wk-help', '⭐', () => mark(v, 'help', tile));
      bk.setAttribute('aria-label', 'I know ' + v.w); bh.setAttribute('aria-label', 'Help me with ' + v.w);
      r.append(bk, bh);
      tile.appendChild(r); grid.appendChild(tile);
    });
    const quick = btn('mini-btn wq-btn', '⚡ Quick check (one at a time)', () => {
      grid.remove(); quick.remove(); legend.remove();
      const box = el('div', 'wflash'); body.appendChild(box);
      let n = 0;
      const show = () => {
        const v = words[n]; box.replaceChildren();
        const w = el('div', 'wf-word', v.w); box.appendChild(w);
        box.appendChild(el('p', 'wf-count', `${n + 1} of ${words.length}`));
        const r = el('div', 'wt-row big');
        const go = (st) => { mark(v, st, null); n++; if (n < words.length) show(); };
        r.append(btn('wk-know', '✅ I know it', () => go('known')), btn('wk-help', '⭐ Help me', () => go('help')));
        box.appendChild(r);
      };
      show();
    });
    const legend = el('p', 'wlegend'); legend.append(el('span', 'wk-know lg', '✅ I know it'), el('span', 'wk-help lg', '⭐ Help me'));
    body.append(legend, grid, quick);
    card.onSkip = () => { P.res.wcheck = { known: [], help: [], skipped: true }; };
  };
  /* ---- Word practice (Sue's spec): 1) Watch me: the word big, played once. 2) Your turn: she says it out loud
     (no tapping, no recording, no scoring; a grown-up listens). 3) ONE tap (Next / swipe up) = next word.
     4) Every 3 words an earlier word comes back WITHOUT audio first; she reads it herself (audio after Next or a tap on it).
     5) "Help me" only if she taps it: slow, tricky part lit with its mouth cue, then normal speed. Chunks live only in Help me. ---- */
  /* v2.7.1: vowel teams (ow, ou, aw) are found before w, and a w that is part of ow/aw/ew is never marked as the /w/
     sound (before, "down" lit the w of "ow" with the w lip cue). The marked letters are exactly the sound's letters. */
  const TRICKY_ORDER = ['th', 'ph', 'sh', 'f', 'v', 'r', 'ow', 'ou', 'aw', 'w'];
  function trickyIndex(w, key) {
    for (let i = w.indexOf(key); i >= 0; i = w.indexOf(key, i + 1)) {
      if (key === 'w' && /[aoe]/.test(w[i - 1] || '')) continue; // ow / aw / ew: a vowel team, not the /w/ sound
      if (key === 'f' && w[i - 1] === 'p') continue;              // ph is its own key
      return i;
    }
    return -1;
  }
  function trickyOf(v) {
    if (v.tricky && v.tricky.mark) return { mark: v.tricky.mark, note: v.tricky.note || '', key: null };
    const w = v.w.toLowerCase();
    for (const key of TRICKY_ORDER) { const i = trickyIndex(w, key); if (i >= 0 && MOUTH[key === 'ph' ? 'f' : key]) return { mark: v.w.slice(0, i) + '[' + v.w.slice(i, i + key.length) + ']' + v.w.slice(i + key.length), note: '', key: key === 'ph' ? 'f' : key }; }
    return null;
  }
  BUILD.wpractice = (card, sec) => {
    const news = card.spec.words || [], back = (card.spec.back || []).slice();
    const seq = []; news.forEach((v, i) => { seq.push({ v, review: false }); if ((i + 1) % 3 === 0 && i < news.length - 1) seq.push({ review: true }); });
    if (news.length >= 2) seq.push({ review: true });
    const { vis, body } = frame(sec, { kicker: '🗣️ Word practice', visCls: 'word-vis' });
    const stage = picHero('👀'); vis.appendChild(stage);
    const pip = pipSay(vis, 'Watch me, then you say it!');
    card.noAutoSay = true;
    const count = el('p', 'wp-count'); const step = el('p', 'wp-step');
    const word = btn('wp-word', '', () => playWord()); word.setAttribute('aria-label', 'Hear the word');
    const helpBox = el('div', 'wp-help'); helpBox.hidden = true;
    const row = el('div', 'wp-row');
    const nextB = btn('big-btn wp-next', 'Next ▶', () => next());
    const helpB = btn('mini-btn wp-helpme', '🙋 Help me', () => helpMe());
    row.append(helpB, nextB);
    body.append(count, word, step, row, helpBox);
    const done = [], helpW = new Set(), reviewed = new Set();
    let n = -1, cur = null, played = false, busy = false;
    const playWord = (slow) => { played = true; if (cur.review) stage.setPic(cur.v.pic || '⭐'); return sayList([{ text: cur.v.w, word: true, slow: !!slow }]); };
    voicePreload(news.map((v) => v.w).concat(back.map((v) => v.w)));
    const pickReview = () => {
      const cand = [...helpW].map((w) => done.find((x) => x.w === w)).concat(back, done).filter((x) => x && !reviewed.has(x.w));
      return cand[0] || null;
    };
    const show = () => {
      helpBox.hidden = true; helpBox.replaceChildren(); played = false;
      let item = seq[n];
      if (item.review) { const v = pickReview(); if (!v) { n++; if (n >= seq.length) return finish(); item = seq[n]; if (item.review) return show(); } else item = { v, review: true }; }
      cur = item; if (cur.review) { reviewed.add(cur.v.w); if (back.includes(cur.v)) back.splice(back.indexOf(cur.v), 1); }
      word.replaceChildren(el('span', 'w w-big plain-word', cur.v.w)); word.classList.remove('pop'); void word.offsetWidth; word.classList.add('pop');
      const real = seq.slice(0, n + 1).length;
      count.textContent = `Word ${Math.min(real, seq.length)} of ${seq.length}`;
      if (cur.review) {
        stage.setPic('📖'); step.textContent = '📖 Read it yourself! Then tap Next.';
        pip.say('Can you read this one by yourself?', null, true);
        // v2.8.1 pause help: Help me glows, then the word plays by itself (she says it with the guide, then taps Next)
        const mine = cur; helpB.classList.remove('glow'); const alive = () => cur === mine && !played && P.cards[P.idx] === card && !card.done;
        const st = afterQuiet(PAUSE_1, () => helpB.classList.add('glow'), alive);
        afterQuiet(PAUSE_2, () => { helpB.classList.remove('glow'); step.textContent = '👂 Listen, say it with me, then tap Next.'; playWord(); }, alive, 0, st);
      } else {
        stage.setPic(cur.v.pic || '👀'); step.textContent = '👀 Watch me… then 🗣️ your turn: say it out loud!';
        pip.say('Watch me, then you say it!', null, true);
        const first = !done.length;
        setTimeout(() => { if (P.cards[P.idx] !== card || card.done) return; if (first) { played = true; sayList([{ text: 'Watch me!', word: false, pause: 120 }, { text: cur.v.w, word: true }]); } else playWord(); }, 200);
        if (!done.find((x) => x.w === cur.v.w)) done.push(cur.v);
      }
      const m = S.words[cur.v.w] = Object.assign({ week: P.week.id }, S.words[cur.v.w]); m.practiced = (m.practiced || 0) + 1; m.at = Date.now(); m.week = P.week.id; save();
    };
    const next = () => {
      if (busy || card.done) return true;
      if (cur && cur.review && !played) { // she read it herself: now the word plays (all of it), then a beat, then the next word
        busy = true; const at = n; const go = () => { if (!busy || n !== at) return; busy = false; if (P.cards[P.idx] === card && !card.done) advance(); };
        playWord().then(() => setTimeout(go, 450)); setTimeout(go, 9000); return true;
      }
      advance(); return true;
    };
    const advance = () => { n++; if (n >= seq.length) finish(); else show(); };
    const finish = () => {
      if (card.done) return;
      P.res.practice = { words: done.map((v) => v.w), help: [...helpW], reviewed: [...reviewed] };
      step.textContent = 'Great practice! 🌟'; sound('ok');
      complete(card, null, { fish: 2, delay: 500 });
    };
    const helpMe = () => {
      if (!cur || card.done) return;
      helpB.classList.remove('glow');
      helpW.add(cur.v.w); const m = S.words[cur.v.w]; m.help = (m.help || 0) + 1; save();
      P.res.helpWords = (P.res.helpWords || 0) + 1;
      helpBox.hidden = false; helpBox.replaceChildren();
      const t = trickyOf(cur.v);
      if (String(cur.v.split || '').includes('|') || !t) helpBox.appendChild(chunkWord(cur.v)); // chunks: only here (tapping them is optional)
      let lit = null;
      if (t) {
        const tw = el('div', 'wp-tricky'); lit = wordEl(t.mark, { big: true, gaps: false }); tw.appendChild(lit);
        const mo = t.key && MOUTH[t.key];
        if (mo) { const mc = el('p', 'mouth'); mc.append(el('span', 'mouth-ic', mo[0]), el('span', null, `“${t.key}”: ${mo[1]}.`)); tw.appendChild(mc); }
        else if (t.note) tw.appendChild(el('p', 'dec-note sneaky', '🕵️ ' + t.note));
        helpBox.appendChild(tw);
      }
      played = true; if (cur.review) stage.setPic(cur.v.pic || '⭐');
      // v2.7.1: slow = each chunk on its own with a pause (its chunk lights up), then the whole word slowly, then at normal speed
      const parts = String(cur.v.split || cur.v.w).split('|'), says = cur.v.say ? cur.v.say.split('|') : parts.map(plain);
      const cbox = helpBox.querySelector('.dec-word'), syls = cbox ? [...cbox.querySelectorAll('.syl')] : [];
      const on = (i) => () => syls.forEach((sy, j) => sy.classList.toggle('on', i < 0 || j === i));
      const items = [];
      if (parts.length > 1 && syls.length === parts.length) says.forEach((c, i) => items.push({ text: c, word: true, slow: true, onStart: on(i), pause: 600 }));
      items.push({ text: cur.v.w, word: true, slow: true, pause: 750, onStart: () => { on(-1)(); if (lit) lit.classList.add('pulse'); } });
      items.push({ text: cur.v.w, word: true, pause: 200, onStart: () => { if (lit) lit.classList.remove('pulse'); } });
      sayList(items);
      pip.say('Listen slowly… now say it again with me!', null, true);
    };
    card.help = helpMe; card.onNext = () => next();
    card.onSkip = () => { P.res.practice = { words: done.map((v) => v.w), help: [...helpW], skipped: true }; };
    card.onShow = () => { if (n < 0) advance(); };
  };
  /* Help word: the guide reads it in chunks ONCE (tap 🔁 for more). She reads it out loud, then taps its picture. */
  BUILD.decode = (card, sec) => {
    const v = card.spec.v;
    const { vis, body } = frame(sec, { kicker: card.spec.bonus ? '⭐ Bonus · help word' : (card.spec.again ? '🔁 Practice word' : '⭐ Help word · let\'s read it'), visCls: 'word-vis' });
    const stage = picHero('❓'); vis.appendChild(stage);
    const pip = pipSay(vis, 'I read it in chunks. Now you read it, and tap its picture!');
    card.noAutoSay = true;
    const wbox = chunkWord(v);
    body.appendChild(wbox);
    if (v.tricky) { const note = el('p', 'dec-note sneaky'); note.append('🕵️ Sneaky part: '); note.appendChild(wordEl(v.tricky.mark)); note.append(' ' + v.tricky.note); body.appendChild(note); }
    const play = () => sayList(chunkItems(v, wbox));
    const tools = el('div', 'tool-row'); tools.appendChild(btn('hear-btn', '🔁 Hear it again', play)); body.appendChild(tools);
    body.appendChild(el('p', 'c-q', 'Read it out loud. Which picture is it?'));
    const fb = feedback(body);
    card.answer = v.pic;
    const row = choices(body, [picOpt(v.pic)].concat(otherPics(v.pic, 2, v.w).map(picOpt)), v.w + P.key, (first) => {
      stage.setPic(v.pic); stage.stamp.appendChild(el('span', 'stamp-cap', v.means || ''));
      markTry(v, first);
      const m = S.words[v.w] = Object.assign({ week: P.week.id }, S.words[v.w], { practiced: ((S.words[v.w] || {}).practiced || 0) + 1 }); if (first && m.practiced >= 2) m.st = 'known';
      save();
      setFb(fb, first ? praise('chunks') : 'Yes! That is it! 🌱', 'good');
      complete(card, { first, type: 'decode', w: v.w, help: true });
    }, () => { setFb(fb, 'Look at the chunks again. 👀', 'soft'); }, 'pics');
    body.insertBefore(row, fb);
    card.onShow = () => { if (!card.done) play(); }; // ONE read-aloud pass; she can tap the pictures right away
  };
  /* Known word, one quick confirm (at most once, mixed into the postcard). A miss quietly moves it to her help list. */
  BUILD.confirm = (card, sec) => {
    const w = card.spec.w, v = Object.assign({ w }, (W_().vocab || {})[w] || {});
    const { vis, body } = frame(sec, { kicker: '⚡ Quick check · a word you know', visCls: 'word-vis' });
    vis.appendChild(picHero('⚡'));
    pipSay(vis, 'You know this one! Tap its picture.');
    const d = el('div', 'dec-word'); d.appendChild(el('span', 'w w-big plain-word', w)); body.appendChild(d);
    const fb = feedback(body);
    let missed = false; card.answer = v.pic || '⭐';
    const row = choices(body, [picOpt(v.pic || '⭐')].concat(otherPics(v.pic, 2, w + 'c').map(picOpt)), w + 'confirm', (first) => {
      const m = S.words[w] = Object.assign({}, S.words[w]);
      if (first) { m.ok = true; setFb(fb, 'Yes! You really know it! 🌟', 'good'); }
      else { m.st = 'help'; m.moved = Date.now(); P.res.moved = (P.res.moved || []).concat(w); setFb(fb, 'We will practice this one together soon. 🌱', 'good'); }
      save(); complete(card, { first, type: 'confirm', w });
    }, () => { missed = true; }, 'pics');
    body.insertBefore(row, fb);
  };
  /* Arianna-style phrase card: a line from her postcard with one word lit up; tap what it means (one tap). */
  function phraseFor(w) {
    const re = new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    for (const d of P.week.days) { const L = d.levels[P.lv] || d.levels.ground; for (const c of (L ? L.chunks : [])) for (const s0 of c.s) if (re.test(s0)) return fillName(s0); }
    return null;
  }
  BUILD.phrase = (card, sec) => {
    const V = W_().vocab || {}, pv = (P.L.preview || []).map((x) => x.w);
    const pool = pv.concat(Object.keys(V)).filter((w, i, a) => a.indexOf(w) === i && V[w] && V[w].means && phraseFor(w));
    if (!pool.length) return BUILD.tappic(card, sec);
    const w = pool[(S.sessionsDone + (card.spec.n || 0)) % pool.length], v = V[w];
    const { vis, body } = frame(sec, { kicker: '💬 What does it mean?' });
    vis.appendChild(sceneImg(P.day.scene));
    pipSay(vis, 'Read the line. What does the bright word mean?');
    const line = phraseFor(w), parts = line.split(new RegExp('(\\b' + w + '\\b)', 'i'));
    const p = el('p', 'phrase'); parts.forEach((x) => { if (x.toLowerCase() === w.toLowerCase()) p.appendChild(el('mark', 'hl', x)); else if (x) p.append(x); });
    body.appendChild(p);
    const others = shuffle(Object.keys(V).filter((x) => x !== w && V[x].means && V[x].means !== v.means), w).slice(0, 2).map((x) => V[x].means);
    const fb = feedback(body); card.answer = v.means;
    const row = choices(body, [v.means].concat(others), w + 'phrase', (first) => { setFb(fb, `Yes! “${w}” means ${v.means}. ${picTxt(v.pic)}`, 'good'); complete(card, { first, type: 'phrase', w }); },
      () => { recordMiss(w, 'phrase'); setFb(fb, 'Read the whole line again. 👀', 'soft'); }, 'stack');
    body.insertBefore(row, fb);
  };
  /* Drag (or tap) the missing word into a line from her postcard. */
  BUILD.dragword = (card, sec) => {
    const V = W_().vocab || {}, pv = (P.L.preview || []).map((x) => x.w);
    const cands = [];
    P.L.chunks.forEach((c) => c.s.forEach((s0) => { pv.concat(Object.keys(V)).forEach((w) => { if (new RegExp('\\b' + w + '\\b', 'i').test(s0) && !cands.find((x) => x.w === w)) cands.push({ w, s: fillName(s0) }); }); }));
    if (!cands.length) return BUILD.phrase(card, sec);
    const it = cands[(S.sessionsDone + (card.spec.n || 0)) % cands.length];
    const { vis, body } = frame(sec, { kicker: '🧲 Drag the word · fix the postcard' });
    vis.appendChild(sceneImg(P.day.scene));
    pipSay(vis, 'A word fell off my postcard! Drag it back, or tap it.');
    const [before, after] = it.s.split(new RegExp('\\b' + it.w + '\\b', 'i'));
    const sent = el('p', 'fill-sent'); const blank = el('span', 'blank drop', '_____'); sent.append(before || '', blank, after || '');
    body.appendChild(sent);
    const opts = [it.w].concat(shuffle(Object.keys(V).filter((x) => x !== it.w && Math.abs(x.length - it.w.length) < 4), it.w).slice(0, 1));
    const fb = feedback(body); card.answer = it.w;
    const row = choices(body, opts, it.w + 'drag', (first) => { blank.textContent = it.w; blank.classList.add('filled'); setFb(fb, first ? 'Fixed! 🌟' : 'Fixed! 🎉', 'good'); complete(card, { first, type: 'dragword', w: it.w }); },
      () => { recordMiss(it.w, 'dragword'); setFb(fb, 'Read the line with that word. Does it make sense?', 'soft'); }, 'words drag');
    body.insertBefore(row, fb);
    dragToTap(row, blank);
  };
  /* Pointer drag for option buttons: dropping one on the target counts as tapping it (tapping still works). */
  function dragToTap(row, target) {
    row.querySelectorAll('.opt').forEach((b) => {
      let st = null, ghost = null;
      b.addEventListener('pointerdown', (e) => { if (b.disabled) return; st = { x: e.clientX, y: e.clientY }; });
      b.addEventListener('pointermove', (e) => {
        if (!st) return; const dx = e.clientX - st.x, dy = e.clientY - st.y;
        if (!ghost && Math.hypot(dx, dy) > 12) { ghost = b.cloneNode(true); ghost.classList.add('drag-ghost'); document.body.appendChild(ghost); try { b.setPointerCapture(e.pointerId); } catch (_) {} }
        if (ghost) { ghost.style.left = e.clientX + 'px'; ghost.style.top = e.clientY + 'px'; target.classList.toggle('over', (() => { const r = target.getBoundingClientRect(); return e.clientX > r.left - 20 && e.clientX < r.right + 20 && e.clientY > r.top - 30 && e.clientY < r.bottom + 30; })()); }
      });
      const end = (e) => {
        if (ghost) { ghost.remove(); ghost = null; const over = target.classList.contains('over'); target.classList.remove('over'); b._dragged = true; setTimeout(() => { b._dragged = false; }, 50); if (over) b.click(); }
        st = null;
      };
      b.addEventListener('pointerup', end); b.addEventListener('pointercancel', end);
      b.addEventListener('click', (e) => { if (b._dragged) { e.stopImmediatePropagation(); } }, true);
    });
  }
  /* Feed the baby: read three words, tap the food (one tap). Her baby eats and hops. */
  BUILD.feedme = (card, sec) => {
    const pp = pet();
    const { vis, body } = frame(sec, { kicker: `${pp.food} Quick game · feed ${chickName()}` , title: `Which one can ${chickName()} eat?` });
    vis.classList.add('hab-bg', 'pet-' + pet().id);
    const ch = chickEl(S.chick.fish, 'big'); vis.appendChild(ch);
    const nope = shuffle(['sock', 'rock', 'hat', 'drum', 'bell', 'shoe', 'kite', 'box', 'lamp'], P.key + card.i).slice(0, 2);
    const fb = feedback(body); card.answer = pp.foodName;
    const row = choices(body, [pp.foodName].concat(nope), pp.foodName + P.key + card.i, (first) => {
      ch.classList.remove('hop'); void ch.offsetWidth; ch.classList.add('hop'); sound('food');
      setFb(fb, `Yum! ${chickName()} loves ${pp.foodName}! ${pp.food}`, 'good');
      complete(card, { first, type: 'feedme' });
    }, () => { setFb(fb, `Hmm, ${chickName()} can't eat that! 😄`, 'soft'); }, 'words');
    body.insertBefore(row, fb);
  };
  /* Silly word: one word in a line from her postcard was swapped for a silly one. Tap it and her baby giggles. */
  const SILLY = ['banana', 'pancake', 'noodle', 'pickle', 'teapot', 'cupcake', 'sock', 'jelly'];
  BUILD.hatchmo = (card, sec) => {
    const all = P.L.chunks.flatMap((c) => c.s).map(fillName);
    const sent = all[(S.sessionsDone + card.i) % all.length] || 'I see the sun.';
    const words = sent.split(/\s+/);
    const cand = words.map((w, i) => ({ w, i })).filter((x) => x.i > 0 && /^[a-z]{4,}[.,!?]?$/.test(x.w));
    const pick = cand.length ? cand[(card.i) % cand.length] : { w: words[words.length - 1], i: words.length - 1 };
    const silly = SILLY[(S.sessionsDone + card.i) % SILLY.length];
    const punct = (pick.w.match(/[.,!?]$/) || [''])[0];
    const pp = pet(); card.answer = silly + punct;
    const { vis, body } = frame(sec, { kicker: '🤪 Silly word!', title: 'Tap the word that is silly' });
    vis.classList.add('hab-bg', 'pet-' + pet().id);
    const ch = chickEl(S.chick.fish, 'big'); vis.appendChild(ch);
    const fb = feedback(body);
    const line = el('p', 'silly-line');
    let over = false, tries = 0;
    const btns = [];
    words.forEach((w, i) => {
      const shown = i === pick.i ? silly + punct : w;
      const b = btn('silly-w', shown, () => {
        if (over) return;
        if (i === pick.i) { over = true; sparkle(b); b.classList.add('right'); ch.classList.remove('hop'); void ch.offsetWidth; ch.classList.add('hop'); sound(pp.how === 'born' ? 'snuggle' : 'crack1'); setFb(fb, `Ha! “${silly}” is silly! It should say “${pick.w.replace(/[.,!?]$/, '')}”. 😂`, 'good'); complete(card, { first: tries === 0, type: 'silly' }); }
        else { tries++; shake(b); if (tries >= 1) btns[pick.i].classList.add('glow'); if (tries >= 2) { over = true; card.helped = true; setTimeout(() => btns[pick.i].click(), 10); over = false; } }
      });
      btns.push(b); line.append(b, ' ');
    });
    body.append(line, fb);
  };
  /* Sound sort, one word: which door does it go through? (one tap) */
  BUILD.sortone = (card, sec) => {
    const k = P.L.sort; const [w, ans] = k.items[(S.sessionsDone + (card.spec.n || 0)) % k.items.length];
    const { vis, body } = frame(sec, { kicker: '🧺 Quick game · sort it', title: 'Where does this word go?' });
    vis.appendChild(picHero('🧺'));
    pipSay(vis, 'Read the word. Which side?');
    const d = el('div', 'dec-word'); d.appendChild(wordEl(sortMark(k, w), { big: true, vowels: vowelLesson() })); body.appendChild(d);
    const fb = feedback(body);
    const right = ans === 'a' ? k.a : k.b, wrong = ans === 'a' ? k.b : k.a; card.answer = right;
    const row = choices(body, [right, wrong], w + 'sort1', (first) => { setFb(fb, first ? 'Sorted! 🌟' : 'Sorted! 🎉', 'good'); complete(card, { first, type: 'sort' }); },
      () => { recordMiss((k.split && k.split[w]) || w, 'sort'); setFb(fb, k.hint, 'hint'); }, 'bins2');
    body.insertBefore(row, fb);
  };
  /* R or W, one round: she hears one, taps its picture. */
  BUILD.rquick = (card, sec) => {
    const pairs = W_().rPairs || []; const pr = pairs[(S.sessionsDone + (card.spec.n || 0)) % pairs.length];
    const sayR = seeded(P.key + card.i)() < 0.5, target = sayR ? pr.r : pr.w; card.answer = target;
    const { vis, body } = frame(sec, { kicker: '👂 Quick game · R or W?', title: 'Which one did I say?' });
    vis.appendChild(picHero('👂'));
    pipSay(vis, 'Listen closely! Which one did I say?');
    card.noAutoSay = true;
    const mk = (w, pic) => { const d = el('span', 'pic-word'); d.append(el('span', 'pic-opt', pic), wordEl(rMark(w))); return d; };
    const tools = hearBtn(target, '🔊 Hear it again'); body.appendChild(tools);
    const fb = feedback(body);
    const row = choices(body, sayR ? [mk(pr.r, pr.rp), mk(pr.w, pr.wp)] : [mk(pr.w, pr.wp), mk(pr.r, pr.rp)], target + P.key, (first) => {
      setFb(fb, `Yes! I said “${target}”. ${praise('listen')}`, 'good'); complete(card, { first, type: 'rpair' });
    }, () => { setTimeout(() => sayAfter([{ text: target, word: true, slow: true }]), 400); }, 'pics two');
    body.insertBefore(row, fb);
    card.onShow = () => { if (!card.done) sayList([{ text: target, word: true }]); };
  };
  BUILD.tappic = (card, sec) => BUILD.warm(card, sec);
  BUILD.warm = (card, sec) => {
    const list = W_().warmup || [];
    const it = list[(S.sessionsDone * 2 + card.spec.n) % Math.max(1, list.length)] || { w: 'cat', pic: '🐱', other: '🐶' };
    card.answer = it.pic;
    const { vis, body } = frame(sec, { kicker: '🎯 Quick game · tap the picture', title: 'Read it, then tap its picture' });
    pipSay(vis, 'Read it, then tap its picture!');
    vis.appendChild(picHero('🎯'));
    body.appendChild((() => { const d = el('div', 'dec-word'); d.appendChild(el('span', 'w w-big plain-word', it.w)); return d; })());
    const fb = feedback(body);
    const row = choices(body, [el('span', 'pic-opt', it.pic), el('span', 'pic-opt', it.other)], it.w + P.key, (first) => {
      setFb(fb, praise('first'), 'good'); speak(it.w);
      complete(card, { first, type: 'warm' });
    }, () => { setFb(fb, 'Not yet! Say the word softly, sound by sound.', 'soft'); }, 'pics two');
    body.insertBefore(row, fb);
  };

  BUILD.sneaky = (card, sec) => {
    const L = P.L, W = W_();
    const withTricky = (L.preview || []).filter((v) => v.tricky);
    const pool = (W.sneaky || []).concat(W.trickyExtra || []);
    const it = (S.sessionsDone % 2 === 0 && withTricky.length) ? Object.assign({ w: withTricky[0].w, pic: withTricky[0].pic }, withTricky[0].tricky) : pool[S.sessionsDone % Math.max(1, pool.length)];
    const { vis, body } = frame(sec, { kicker: '🕵️ Sneaky word!', title: 'Tap the sneaky part' });
    vis.appendChild(picHero(it.pic || '🕵️'));
    pipSay(vis, `This word is sneaky! It says “${it.says}”. Which part is sneaky?`);
    const segs = String(it.mark).split(/(\[[^\]]+\])/).filter(Boolean);
    const row = el('div', 'sneak-row');
    const fb = feedback(body);
    let over = false, tries = 0;
    const btns = segs.map((sg) => {
      const sneaky = /^\[/.test(sg), txt = sg.replace(/[\[\]]/g, '');
      const b = btn('sneak-seg', txt, () => {
        if (over) return;
        if (sneaky) { over = true; sparkle(b); b.classList.add('pat-on'); body.insertBefore(el('p', 'dec-note sneaky', '🕵️ ' + it.note), fb); setFb(fb, 'You caught it! 🕵️', 'good'); speak(it.w); complete(card, { first: tries === 0, type: 'sneaky' }, { delay: 1500 }); }
        else { tries++; shake(b); const r = btns.find((x) => x._s); if (r) r.classList.add('glow'); if (tries >= 2 && r) { card.helped = true; setTimeout(() => r.click(), 500); } }
      });
      b._s = sneaky; row.appendChild(b); return b;
    });
    body.appendChild(el('p', 'c-text', `It says: “${it.says}”`));
    body.append(row, hearBtn(it.w, '🔊 Hear it'), fb);
  };
  BUILD.teach = (card, sec) => {
    const v = card.spec.v;
    const oops = v.misread || v.look[0];
    const { vis, body } = frame(sec, { kicker: `🧑‍🏫 You are the teacher!`, title: `Help ${G().name} read this word` });
    const pip = pipSay(vis, `I will read this one! “${oops}!”`);
    card.noAutoSay = true;
    card.onShow = () => { if (!card.done) sayList([{ text: 'I will read this one!', word: false }, { text: oops, word: true }]); };
    vis.appendChild(picHero('🧑‍🏫'));
    const wb = el('div', 'dec-word'); wb.appendChild(el('span', 'w w-big plain-word', v.w)); body.appendChild(wb);
    body.appendChild(el('p', 'c-q', `Did ${G().name} say it right?`));
    const row = el('div', 'dec-row');
    const fb = feedback(body);
    body.insertBefore(row, fb);
    const teachIt = (caught) => {
      row.querySelectorAll('button').forEach((b) => { b.disabled = true; });
      const ch = chunkWord(v); wb.replaceWith(ch);
      setFb(fb, caught ? 'You caught my mistake! That is what great readers do! 🔎' : `Oops, I said it wrong! It is “${v.w}”. 🙃`, 'good');
      sayAfter(chunkItems(v, ch));
      complete(card, { first: caught, type: 'teach' }, { delay: 1500 });
    };
    row.append(btn('big-btn soft', '✅ Yes', () => { pip.say(`Hmm, let me look again... Oh! It is not “${oops}”! Silly me! 😅 Can you read it to me?`, 'oops'); teachIt(false); }),
      btn('big-btn', `🧑‍🏫 Not quite, ${G().name}!`, () => { pip.say('You caught my mistake! Please read it to me the right way.', 'oops'); teachIt(true); }));
  };
  BUILD.says = (card, sec) => {
    const v = card.spec.v; card.answer = v.w;
    const { vis, body } = frame(sec, { kicker: '👂 Which word says it?', title: 'Listen, then tap the word' });
    const pip = pipSay(vis, 'Listen! Which word did I say?');
    card.noAutoSay = true;
    card.onShow = () => { if (!card.done) sayList([{ text: 'Listen! Which word did I say?', word: false, pause: 200 }, { text: v.w, word: true }]); };
    vis.appendChild(picHero('👂'));
    const tools = el('div', 'tool-row'); tools.append(hearBtn(v.w, '🔊 Hear it'), btn('hear-btn', '🐢 Slower', () => sayList([{ text: v.w, word: true, slow: true }])));
    body.appendChild(tools);
    const fb = feedback(body);
    const row = choices(body, [v.w].concat(v.look), v.w + 'says' + P.key, (first) => {
      setFb(fb, first ? praise('listen') : praise('retry'), 'good'); if (!first) markTry(v, false);
      complete(card, { first, type: 'says' });
    }, () => { pip.say(mishap() + ' Listen again!', 'oops'); sayAfter([{ text: v.w, word: true, slow: true }]); }, 'words');
    body.insertBefore(row, fb);
  };

  /* ---- Type the word you hear (spelling is her strength; the sound-alike slips are just "what you heard") ---- */
  const SOUND_SWAPS = [['ow', 'aw', 'ow/aw', 'ow heard as aw'], ['aw', 'ow', 'ow/aw', 'aw heard as ow'], ['ou', 'aw', 'ow/aw', 'ou heard as aw'], ['ou', 'ow', 'ow/aw', 'ou written as ow'],
    ['th', 'd', 'th/d', 'th heard as d'], ['th', 'f', 'th/f', 'th heard as f'], ['th', 't', 'th/t', 'th heard as t'], ['e', 'i', 'e/i', 'short e heard as i'], ['i', 'e', 'e/i', 'short i heard as e'], ['r', 'w', 'r/w', 'r heard as w']];
  const MOUTH = { ow: ['😮➡️😗', 'Mouth opens, then lips make a circle (like "ouch!")'], ou: ['😮➡️😗', 'Mouth opens, then lips make a circle (like "ouch!")'], aw: ['😮', 'Mouth open wide and stays still (like "ahh")'],
    th: ['😛', 'Tongue peeks out between your teeth'], d: ['👅', 'Tongue taps behind your top teeth'], f: ['😬', 'Top teeth rest on your bottom lip'], t: ['👅', 'Tongue taps and lets out a puff'],
    e: ['😬', 'Mouth a little open, like "eh"'], i: ['🙂', 'Small smile, like "ih"'], r: ['🙂', 'Lips loose, tongue pulls back'], w: ['😗', 'Lips make a tight little circle'], v: ['😬🐝', 'Top teeth on your bottom lip, and buzz (your throat hums)'], sh: ['🤫', 'Lips push out, like "shhh"'] };
  MOUTH.f = ['😬💨', 'Top teeth on your bottom lip, just blow air (no buzz)'];
  function soundAlike(target, typed) {
    for (const [a, b, pair, label] of SOUND_SWAPS) {
      let idx = target.indexOf(a);
      while (idx >= 0) { if (target.slice(0, idx) + b + target.slice(idx + a.length) === typed) return { a, b, pair, label, idx }; idx = target.indexOf(a, idx + 1); }
    }
    return null;
  }
  function diffMark(word, other) {
    let p = 0; while (p < word.length && p < other.length && word[p] === other[p]) p++;
    let q = 0; while (q < word.length - p && q < other.length - p && word[word.length - 1 - q] === other[other.length - 1 - q]) q++;
    const mid = word.slice(p, word.length - q);
    return mid ? word.slice(0, p) + '[' + mid + ']' + word.slice(word.length - q) : word;
  }
  BUILD.type = (card, sec) => {
    const list = (W_().typeWords || {})[P.lv] || [];
    const it = list[(S.sessionsDone * 3 + card.spec.n) % Math.max(1, list.length)] || { w: 'jump', pic: '🦘', sent: 'Frogs can jump.' };
    const shown = it.cap || it.w; card.answer = it.w;
    const blankSent = fillName(it.sent).replace(new RegExp('\\b' + shown + '\\b', 'i'), '___');
    const { vis, body } = frame(sec, { kicker: '⌨️ Type the word you hear', title: null });
    const stage = picHero('⌨️'); vis.appendChild(stage);
    const pip = pipSay(vis, `Type the word I say. “${blankSent}”`, null, true);
    card.noAutoSay = true;
    const hear = (slow) => sayList([{ text: 'Type the word', word: false, pause: 150 }, { text: it.w, word: true, slow, pause: 350 }, { text: fillName(it.sent), word: false, rate: slow ? 0.7 : undefined, pause: 300 }, { text: it.w, word: true, slow }]);
    const tools = el('div', 'tool-row');
    tools.append(btn('hear-btn', '🔁 Hear it again', () => hear(false)), btn('hear-btn', '🐢 Say it slower', () => hear(true)));
    const form = el('form', 'spell-form big');
    const inp = el('input', 'spell-in type-in'); inp.type = 'text'; inp.autocomplete = 'off'; inp.setAttribute('autocapitalize', 'none'); inp.setAttribute('autocorrect', 'off'); inp.spellcheck = false; inp.setAttribute('aria-label', 'Type the word you hear'); inp.placeholder = 'type it here';
    const go = btn('big-btn', 'Check ✓'); go.type = 'submit';
    form.append(inp, go);
    const help = el('div', 'type-help');
    const fb = feedback(body);
    body.insertBefore(tools, fb); body.insertBefore(form, fb); body.insertBefore(help, fb);
    card.onShow = () => { if (!card.done) { hear(false); setTimeout(() => { try { inp.focus({ preventScroll: true }); } catch (_) {} }, 300); } };
    let tries = 0, copy = false, won = false;
    // v2.8.1 pause help: the first sound (and the word again, slowly), then the whole word to copy.
    const copyMode = () => { copy = true; help.replaceChildren(el('p', 'c-text', `Here it is! Copy it into the box. ✨`), (() => { const d = el('div', 'dec-word'); d.appendChild(wordEl(it.w, { big: true })); return d; })()); };
    onIdle(() => { if (won || copy || tries) return; help.replaceChildren(el('p', 'c-text', `It starts with “${it.w[0]}”. 👂`)); sayAfter([{ text: it.w, word: true, slow: true }]); }, PAUSE_1, { quiet: true });
    onIdle(() => { if (won || copy) return; copyMode(); pip.say('Here it is! Copy it, letter by letter.'); }, PAUSE_2, { quiet: true });
    inp.addEventListener('input', () => { if (!won && inp.value.trim().toLowerCase() === it.w.toLowerCase()) { won = true; sound('ok'); win(tries === 0 && !copy); } });
    const win = (first) => {
      won = true;
      form.remove(); help.replaceChildren(); tools.remove();
      const mini = postcardEl({ cls: 'mini-pc', scene: P.day.scene });
      const p = el('p', 'mini-s'); const parts = fillName(it.sent).split(new RegExp('(\\b' + shown + '\\b)', 'i'));
      parts.forEach((x) => { if (x.toLowerCase() === shown.toLowerCase()) p.appendChild(el('strong', 'mini-w', x)); else if (x) p.append(x); });
      mini.text.append(el('p', 'mini-h', 'Dear Mission Control,'), p);
      body.insertBefore(mini, fb);
      setFb(fb, first ? praise('listen') : praise('retry'), 'good');
      pip.say('You spelled it! Read your postcard. Which picture is it?');
      stage.setPic('✉️');
      const q = el('p', 'c-q', 'Which picture shows your postcard?'); body.insertBefore(q, fb);
      card.answer2 = it.pic;
      const row = choices(body, [picOpt(it.pic)].concat(otherPics(it.pic, 2, it.w + 't').map(picOpt)), it.w + 'mini' + P.key, (f2) => {
        setFb(fb, 'Yes! You read it! 📬', 'good');
        complete(card, { first, type: 'type', w: it.w, readFirst: f2 }, { fish: 2 });
      }, () => setFb(fb, 'Read your postcard again. 👀', 'soft'), 'pics');
      body.insertBefore(row, fb);
    };
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const typed = inp.value.trim().toLowerCase().replace(/\s+/g, ' ');
      if (!typed) return;
      if (typed === it.w.toLowerCase()) { if (!won) win(tries === 0 && !copy); return; }
      if (copy) { setFb(fb, 'Almost! Look at each letter and copy it. 👀', 'soft'); return; }
      tries++;
      const sa = soundAlike(it.w.toLowerCase(), typed);
      help.replaceChildren();
      if (sa) {
        S.soundLog = (S.soundLog || []).concat([{ pair: sa.pair, label: sa.label, w: it.w, typed, date: Date.now(), week: P.week.id }]); save();
        help.appendChild(el('p', 'c-text', 'You wrote what you heard! 👂'));
        const cmp = el('div', 'cmp-row');
        const mine = el('div', 'cmp-box'); mine.append(el('span', 'cmp-lbl', 'You heard'), wordEl(diffMark(typed, it.w.toLowerCase()), { big: true }));
        const real = el('div', 'cmp-box real'); real.append(el('span', 'cmp-lbl', 'The word'), wordEl(diffMark(it.w.toLowerCase(), typed), { big: true }));
        cmp.append(mine, real); help.appendChild(cmp);
        const m = MOUTH[sa.a];
        if (m) { const mc = el('p', 'mouth'); mc.append(el('span', 'mouth-ic', m[0]), el('span', null, `“${sa.a}” : ${m[1]}.`)); help.appendChild(mc); }
        pip.say(`You wrote what you heard! This word has “${sa.a}”. Type it again!`);
      } else {
        help.appendChild(el('p', 'c-text', 'So close! This part needs a fix:'));
        const d = el('div', 'cmp-box'); d.appendChild(wordEl(diffMark(typed, it.w.toLowerCase()), { big: true })); help.appendChild(d);
        pip.say(mishap() + ' Listen again, then type it!', 'oops');
        sayAfter([{ text: it.w, word: true, slow: true }]);
      }
      if (tries >= 2) {
        copyMode();
        pip.say('Here it is! Copy it, letter by letter.');
      }
      inp.value = ''; try { inp.focus({ preventScroll: true }); } catch (_) {}
    });
  };

  /* ---- Which sound? (optional contrast cards: ow/aw, th/d, short e/i) ---- */
  const SOUND_CARDS = {
    'ow/aw': { a: ['ow', '🐄', 'cow'], b: ['aw', '🐾', 'paw'], words: [['down', '⬇️', 'a'], ['saw', '🪚', 'b'], ['crown', '👑', 'a'], ['straw', '🥤', 'b'], ['how', '🤔', 'a'], ['yawn', '🥱', 'b']] },
    'th/d': { a: ['th', '👍', 'thumb'], b: ['d', '🐶', 'dog'], words: [['that', '👉', 'a'], ['dad', '👨', 'b'], ['this', '👇', 'a'], ['day', '☀️', 'b'], ['then', '➡️', 'a'], ['den', '🦊', 'b']] },
    'e/i': { a: ['e', '🛏️', 'bed'], b: ['i', '🐷', 'pig'], words: [['pen', '🖊️', 'a'], ['pin', '📌', 'b'], ['ten', '🔟', 'a'], ['tin', '🥫', 'b'], ['bell', '🔔', 'a'], ['bill', '💵', 'b']] }
  };
  function optionalGate(body, pip, title, onGo, card) {
    const row = el('div', 'dec-row');
    row.append(btn('big-btn', "Let's try! ⭐", () => { row.remove(); onGo(); }), btn('big-btn soft', 'Skip, no problem', () => { row.remove(); pip.say('No problem! Maybe next time. 😊'); complete(card, null, { fish: 0, delay: 700 }); }));
    body.appendChild(row);
  }
  BUILD.sound = (card, sec) => {
    const log = (S.soundLog || []).filter((x) => SOUND_CARDS[x.pair]);
    const counts = {}; log.forEach((x) => { counts[x.pair] = (counts[x.pair] || 0) + 1; });
    const keys = Object.keys(SOUND_CARDS);
    const pair = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0] || keys[S.sessionsDone % keys.length];
    const C = SOUND_CARDS[pair];
    const { vis, body } = frame(sec, { kicker: '⭐ Bonus (optional) · Which sound?', title: `“${C.a[0]}” or “${C.b[0]}”?` });
    const pip = pipSay(vis, `Listening game! “${C.a[0]}” like ${C.a[2]}, or “${C.b[0]}” like ${C.b[2]}?`);
    const pic = picHero('👂'); vis.appendChild(pic);
    const fb = feedback(body);
    ((go) => go())(() => {
      const words = shuffle(C.words, P.key + pair).slice(0, 3);
      let r = 0, firsts = 0;
      const round = () => {
        const [w, wp, ans] = words[r]; card.answer = (ans === 'a' ? C.a : C.b)[0];
        pic.setPic(wp);
        pip.say('Listen! Which sound is in this word?');
        sayAfter([{ text: w, word: true, slow: true }]);
        const mk = (s) => { const d = el('span', 'snd-opt'); d.append(el('span', 'snd-pic', s[1]), el('strong', null, s[0]), el('span', 'snd-mouth', (MOUTH[s[0]] || ['', ''])[0]), el('span', 'snd-key', 'like ' + s[2])); return d; };
        const right = ans === 'a' ? C.a : C.b, wrong = ans === 'a' ? C.b : C.a;
        const tools = hearBtn(w, '🔊 Hear it again');
        body.insertBefore(tools, fb);
        const row = choices(body, [mk(right), mk(wrong)], w + P.key, (first) => {
          if (first) firsts++;
          setFb(fb, `Yes! “${w}” has “${right[0]}”. ${praise('listen')}`, 'good');
          setTimeout(() => { row.remove(); tools.remove(); fb.className = 'fb'; r++; if (r < words.length) round(); else complete(card, { first: firsts === words.length, type: 'sound' }, { fish: 2, delay: 600 }); }, 900);
        }, () => { pip.say(`${mishap()} Watch my mouth: ${(MOUTH[right[0]] || ['', ''])[1]}.`, 'oops'); }, 'snd two');
        body.insertBefore(row, fb);
      };
      round();
    });
  };

  /* ---- R practice: listening only. Never grades her speech. ---- */
  function rWordList() {
    if (S.rWords && S.rWords.length) return S.rWords;
    return W_().rWords || [];
  }
  function autoOops(w) { return w.replace(/([bcdfgkpt])r/gi, '$1w').replace(/^r/i, 'w').replace(/\sr/gi, ' w').replace(/(er|ir|ur)\b/gi, 'uh').replace(/ar\b/gi, 'ah').replace(/or\b/gi, 'oh').replace(/r/gi, 'w'); }
  BUILD.rpair = (card, sec) => {
    const pairs = W_().rPairs || [];
    const picks = [0, 1, 2].map((i) => pairs[(S.sessionsDone * 3 + i) % pairs.length]).filter(Boolean);
    const { vis, body } = frame(sec, { kicker: '👂 R or W? · listening game', title: 'Which one did I say?' });
    const pip = pipSay(vis, 'Listen closely! Which one did I say?');
    card.noAutoSay = true;
    vis.appendChild(picHero('👂'));
    const fb = feedback(body);
    let r = 0;
    const round = () => {
      const pr = picks[r]; const sayR = seeded(P.key + r)() < 0.5;
      const target = sayR ? pr.r : pr.w; card.answer = target;
      setTimeout(() => sayList(r === 0 ? [{ text: 'Listen closely! Which one did I say?', word: false, pause: 150 }, { text: target, word: true }] : [{ text: target, word: true }]), 150);
      const mk = (w, pic) => { const d = el('span', 'pic-word'); d.append(el('span', 'pic-opt', pic), wordEl(rMark(w))); return d; };
      const opts = sayR ? [mk(pr.r, pr.rp), mk(pr.w, pr.wp)] : [mk(pr.w, pr.wp), mk(pr.r, pr.rp)];
      const tools = hearBtn(target, '🔊 Hear it again'); body.insertBefore(tools, fb);
      const row = choices(body, opts, target + P.key, () => {
        setFb(fb, `Yes! I said “${target}”. ${praise('listen')}`, 'good');
        setTimeout(() => { row.remove(); tools.remove(); fb.className = 'fb'; r++; if (r < picks.length) round(); else complete(card, { first: true, type: 'rpair' }, { delay: 500 }); }, 1000);
      }, () => { pip.say('Hmm, let me say it again!', 'oops'); sayAfter([{ text: target, word: true, slow: true }]); }, 'pics two');
      body.insertBefore(row, fb);
    };
    card.onShow = () => { if (!card._started) { card._started = true; round(); } };
  };
  BUILD.rcatch = (card, sec) => {
    const list = rWordList();
    const n = list.length || 1;
    const items = [0, 1].map((i) => list[(S.sessionsDone * 2 + i) % n]).filter(Boolean);
    const { vis, body } = frame(sec, { kicker: '🕵️ Catch the guide! · R words', title: `Did ${G().name} say it right?` });
    const pip = pipSay(vis, 'I love R words! Let me say one...');
    card.noAutoSay = true;
    const pic = picHero('🕵️'); vis.appendChild(pic);
    const fb = feedback(body);
    let r = 0;
    const done = () => {
      pip.say('You are a great listener! 👂'); complete(card, { first: true, type: 'rcatch' }); return;
      // eslint-disable-next-line no-unreachable
      const words = list.slice(0, 4).map((x) => x.w);
      const det = el('details', 'reply rsave'); det.appendChild(el('summary', null, '🎙️ Say it and save it (optional)'));
      const wl = el('div', 'r-list'); list.slice(0, 4).forEach((x) => { const d = el('span', 'pic-word'); d.append(el('span', 'pic-opt', x.pic || '🔴'), wordEl(rMark(x.w))); wl.appendChild(d); });
      det.append(wl, el('p', 'pa-small', 'Say these words any way you like. Saved only on this device for your grown-up.'), recorder({ week: P.week.id, day: P.day.day, dayName: P.day.name, level: P.lv, kind: 'rwords', title: 'R words: ' + words.join(', ') }, () => {}, () => {}));
      body.insertBefore(det, fb);
      complete(card, { first: true, type: 'rcatch' }, { stay: true });
    };
    const round = () => {
      const it = items[r]; const oops = it.oops || autoOops(it.w); card.answer = it.w;
      const other = list.find((x) => x.w !== it.w && x.pic !== it.pic) || { w: 'sun', pic: '☀️' };
      pic.setPic('🗣️');
      pip.say(`Look! A “${oops}”!`, 'oops', true);
      sayList([{ text: 'Look! A', word: false }, { text: oops, word: true }]);
      const mk = (x) => { const d = el('span', 'pic-word'); d.append(el('span', 'pic-opt', x.pic || '🔴'), wordEl(rMark(x.w))); return d; };
      body.insertBefore(el('p', 'c-q r-q', `Which one did ${G().name} mean?`), fb);
      const fix = btn('big-btn soft', `Oops, say it right, ${G().name}! 🔁`, () => { fix.disabled = true; pip.say(`Oops! I meant “${it.w}”!`, null, true); sayList([{ text: 'Oops! I meant', word: false }, { text: it.w, word: true }]); });
      const row = choices(body, [mk(it), mk(other)], it.w + P.key, () => {
        pip.say(`Yes! I meant “${it.w}”! Thanks for catching me!`, null, true); sayList([{ text: 'Yes! I meant', word: false }, { text: it.w, word: true }]);
        setTimeout(() => { body.querySelectorAll('.r-q').forEach((q) => q.remove()); row.remove(); fix.remove(); r++; if (r < items.length) round(); else done(); }, 1200);
      }, () => { pip.say('Hmm, listen again!', 'oops'); }, 'pics two');
      body.insertBefore(row, fb); body.insertBefore(fix, fb);
    };
    card.onShow = () => { if (!card._started) { card._started = true; round(); } };
  };
  BUILD.challenge = (card, sec) => {
    const W = W_(); const plan = (W.vocabByDay || {})[P.day.day] || W.vocabByDay[P.alt ? 'koala' : 6] || {};
    const nextLv = LEVELS[Math.min(LEVELS.indexOf(P.lv) + 1, 2)];
    const pool = (plan[nextLv] || []).concat(P.lv === 'space' ? Object.keys(W.vocab || {}) : []).filter((w) => !(P.L.preview || []).find((v) => v.w === w));
    const w = pool.sort((a, b) => b.length - a.length)[0];
    const v = vocabOf(w) || { w: 'opportunity', split: 'op|por|tu|ni|ty', pic: '🚪✨', means: 'a good chance' };
    const { vis, body } = frame(sec, { kicker: '⭐ Challenge word (optional)', title: 'Want to try a big word?' });
    const pip = pipSay(vis, `A big challenge word, for bonus ${pet().foodName}!`);
    vis.appendChild(picHero('⭐'));
    const fb = feedback(body);
    const d0 = el('div', 'dec-word'); d0.appendChild(el('span', 'w w-big plain-word', v.w)); body.insertBefore(d0, fb);
    const hb = btn('mini-btn wp-helpme', '🙋 Help me', () => { hb.remove(); const ch = chunkWord(v); d0.replaceWith(ch); sayList(chunkItems(v, ch)); }); // chunks only if she asks
    body.insertBefore(hb, fb);
    body.insertBefore(el('p', 'c-q', 'Read it out loud. Which picture is it?'), fb);
    card.answer = v.pic;
    body.insertBefore(choices(body, [picOpt(v.pic)].concat(otherPics(v.pic, 2, v.w + 'ch').map(picOpt)), v.w + 'chal', (first) => { setFb(fb, praise('brave'), 'good'); complete(card, { first: true, type: 'challenge', w: v.w }, { fish: 3 }); }, () => setFb(fb, 'Try the chunks one by one. 🧩', 'soft'), 'pics'), fb);
    body.insertBefore(wordRec(v), fb);
  };
  let THEN_NOW = null;
  async function refreshThenNow() {
    THEN_NOW = null;
    let recs = []; try { recs = await recAll(); } catch (_) { return; }
    const day = (r) => new Date(r.date).toDateString();
    const byWord = {};
    recs.filter((r) => r.kind === 'word' && r.word).forEach((r) => { (byWord[r.word] = byWord[r.word] || []).push(r); });
    for (const [w, l] of Object.entries(byWord)) { l.sort((a, b) => a.date - b.date); if (day(l[0]) !== day(l[l.length - 1])) { THEN_NOW = { label: `the word “${w}”`, first: l[0], last: l[l.length - 1] }; return; } }
    const bc = recs.filter((r) => r.kind === 'first' || r.kind === 'best').sort((a, b) => a.date - b.date);
    if (bc.length > 1 && day(bc[0]) !== day(bc[bc.length - 1])) THEN_NOW = { label: 'your postcard broadcast', first: bc[0], last: bc[bc.length - 1] };
  }
  BUILD.thennow = (card, sec) => {
    const T = THEN_NOW;
    const { vis, body } = frame(sec, { kicker: '🌱 Then vs Now', title: 'Listen to you grow!' });
    pipSay(vis, 'Listen to how you read before, and how you read now! 🌱');
    vis.appendChild(picHero('🌱'));
    if (!T) { body.appendChild(el('p', 'c-text', 'Keep recording, and soon you can hear yourself grow!')); complete(card, null, { fish: 0, stay: true }); return; }
    body.appendChild(el('p', 'c-sub', T.label));
    const row = el('div', 'takes');
    [['Then', T.first], ['Now', T.last]].forEach(([lbl, r]) => { const c = el('div', 'take'); c.append(el('p', 'take-h', `${lbl} · ${fmtDate(r.date)}`), audioFor(r)); row.appendChild(c); });
    body.appendChild(row);
    card.onShow = () => complete(card, null, { fish: 0, stay: true });
  };
  BUILD.italia = (card, sec) => {
    const I = W_().italia;
    sec.classList.add('italia');
    const { vis, body } = frame(sec, { kicker: '🇮🇹 Bonus Postcard from Italia!', title: `${I.place}` });
    vis.appendChild(picHero(I.scene, { scene: false }));
    const pip = pipSay(vis, I.pip || `Ciao! I am at the beach near Naples. Can you teach me 3 Italian words?`);
    body.appendChild(el('p', 'it-flag', '🇮🇹 ' + I.region));
    const pc = el('div', 'pc-full it-pc'); I.postcard.forEach((t) => pc.appendChild(el('p', null, t))); body.appendChild(pc);
    const fb = feedback(body);
    const skip = btn('link-btn', 'Skip, no problem', () => { goHome(); });
    body.appendChild(skip);
    const go = btn('big-btn', 'Teach me! 🇮🇹', () => {
      go.remove();
      let r = 0;
      const round = () => {
        const wd = I.words[r]; card.answer = wd.pic;
        const big = el('div', 'it-word'); big.append(el('span', null, wd.it), hearBtn(wd.it, '🔊'));
        big.querySelector('.hear-btn').onclick = (e) => { e.stopPropagation(); sayList([{ text: wd.it, word: true, lang: 'it' }]); };
        body.insertBefore(big, fb);
        pip.say(`What does “${wd.it}” mean? Tap the picture!`);
        setTimeout(() => sayList([{ text: wd.it, word: true, lang: 'it' }]), 300);
        const row = choices(body, [el('span', 'pic-opt', wd.pic)].concat(wd.others.map((o) => el('span', 'pic-opt', o))), wd.it + P.key, () => {
          pip.say(`Grazie! Now I know “${wd.it}”! 🇮🇹`);
          setTimeout(() => { big.remove(); row.remove(); fb.className = 'fb'; r++; if (r < I.words.length) round(); else { skip.remove(); S.italiaDone = Object.assign({}, S.italiaDone, { [P.week.id]: Date.now() }); save(); setFb(fb, 'Bravissima! You taught me 3 words! 🇮🇹', 'good'); complete(card, null, { fish: 3, delay: 1200 }); } }, 900);
        }, () => { pip.say(mishap(), 'oops'); }, 'pics');
        body.insertBefore(row, fb);
      };
      round();
    });
    body.insertBefore(go, skip);
    card.onShow = () => { if (!card._go) { card._go = true; go.click(); } };
  };

  /* ================= Zoo Math (v2.8) =================
     Data: math/zoo-math-<monday>.js (window.PIP_MATH, generated by content-draft/math/tools/gen_math.py; every answer is computed).
     Session: 3 warm-up wins (Topic 1 facts) + 6 cards at her math level (S.mathLevel, separate from reading) + feed.
     One tap: pick an answer. 1st miss = a hint (the picture shows the strategy); 2nd miss = the answer is shown and we move on.
     Optional "type it" bonus (+1) after a first-try right answer; it never blocks (the feed moves on by itself). No timers. */
  const MATH_SPEAK = (t) => String(t).replace(/×/g, ' times ').replace(/[−–]/g, ' minus ').replace(/ - /g, ' minus ').replace(/\+/g, ' plus ').replace(/=/g, ' is ').replace(/_+/g, ' blank ').replace(/\s+/g, ' ').trim();
  function mondayOf(ymdS) { const d = new Date(ymdS + 'T12:00:00'); const wd = d.getDay(); d.setDate(d.getDate() - ((wd + 6) % 7)); return ymd(d); }
  function mathWeek() {
    const M = window.PIP_MATH || {}; const keys = Object.keys(M).sort(); if (!keys.length) return null;
    const t = todayYmd(), mon = mondayOf(t);
    if (M[mon]) return M[mon];
    const past = keys.filter((k) => k <= t); return M[past.length ? past[past.length - 1] : keys[0]];
  }
  // Today's math day: the weekday (Mon-Fri); on a weekend (or before the first math week) the first day she has not done yet.
  function mathDayIdx(MW) {
    const t = todayYmd(), wd = new Date(t + 'T12:00:00').getDay();
    if (mondayOf(t) === MW.id && wd >= 1 && wd <= 5) return Math.min(wd - 1, MW.days.length - 1);
    const done = mathDone(MW); const i = MW.days.findIndex((d, j) => !done[j]); return i < 0 ? 0 : i;
  }
  function mathDone(MW) { const out = {}; (S.sessions || []).forEach((s) => { if (s.track === 'math' && s.mathWeek === MW.id) out[s.mathDay] = s; }); return out; }
  function mathSpecs(MW, mdi, lv) {
    const d = MW.days[mdi]; const base = { k: 'math', stop: 'math', mw: MW.id, md: mdi };
    const warm = (d.warmups || []).slice(0, 3).map((c) => Object.assign({ c, part: 'warm' }, base));
    let main = (d[lv] || []).slice();
    if (main.length < 6) main = (d.ground || []).filter((c) => c.k !== 'story').slice(0, 6 - main.length).concat(main); // Sky/Space have 4: 2 class-topic cards first
    main = main.slice(0, 6);
    main = main.filter((c) => c.k !== 'story').concat(main.filter((c) => c.k === 'story')); // the word problem is last
    return warm.concat(main.map((c) => Object.assign({ c, part: 'main' }, base)), [{ k: 'feed' }]);
  }
  const MATH_KICK = { warm: '⚡ Quick win', evenodd: '🤝 Even or odd?', doubles: '👯 Two equal teams', skip: '🦘 Skip-count', array: '🟦 Rows', groups: '🧺 Equal groups', hundred: '💯 Hundred chart', openline: '📏 Number line', breakapart: '✂️ Break apart', comp: '🎁 Make it friendly', partial: '🧱 Tens and ones', multi: '➕ Add them all', story: '📖 Word problem' };
  const numTxt = (n) => String(n);
  // The big question line: an equation where there is one ("27 + 14 = ?"), else a short question.
  function mathQ(c) {
    if (c.k === 'story') return c.q;
    if (c.k === 'evenodd') return `${c.n} ${c.emoji}  Even or odd?`;
    if (c.k === 'doubles') return `${c.n} = ? + ?`;
    if (c.k === 'skip') return `Count by ${c.by}s`;
    if (c.k === 'array') return `${c.rows} rows of ${c.cols}`;
    if (c.k === 'groups') return `${c.groups} × ${c.each} ${c.item}`.replace(' × ', c.level === 'space' ? ' × ' : ' groups of ');
    if (c.k === 'hundred') return `${c.start} ${c.plus < 0 ? '−' : '+'} ${Math.abs(c.plus)} = ?`;
    if (c.k === 'openline') return `${c.start} ${c.dir < 0 ? '−' : '+'} ${c.jumps.reduce((a, b) => a + b, 0)} = ?`;
    if (c.k === 'multi') return c.nums.join(' + ') + ' = ?';
    const m = String(c.prompt).match(/^[^?]*?\d[\d\s+−×=-]*\?/); return m ? m[0] : c.prompt;
  }
  function tenFrames(a, b, op) {
    const box = el('div', 'mv-tf'); const tot = op === '+' ? a + b : a; const frames = Math.max(1, Math.ceil(Math.max(tot, 1) / 10));
    for (let f = 0; f < Math.min(frames, 2); f++) {
      const fr = el('div', 'tf');
      for (let i = 0; i < 10; i++) { const n = f * 10 + i; const cell = el('i', 'tf-c'); if (n < a) cell.classList.add('ca'); else if (op === '+' && n < a + b) cell.classList.add('cb'); if (op === '-' && n < a && n >= a - b) cell.classList.add('out'); fr.appendChild(cell); }
      box.appendChild(fr);
    }
    return box;
  }
  function mathViz(c) {
    const box = el('div', 'mviz mv-' + c.k); let hint = () => {};
    const emo = (e, n, cls) => { const r = []; for (let i = 0; i < n; i++) r.push(el('span', 'me ' + (cls || ''), e)); return r; };
    if (c.k === 'warm') {
      const m = String(c.prompt).match(/(\d+)\s*([+−-])\s*(\d+)/);
      if (m && c.tenFrame && (+m[1] + (m[2] === '+' ? +m[3] : 0)) <= 20) box.appendChild(tenFrames(+m[1], +m[3], m[2] === '+' ? '+' : '-'));
      else box.appendChild(el('div', 'mv-big', c.prompt));
      hint = (lv) => { if (lv >= 1) box.classList.add('lit'); };
    } else if (c.k === 'evenodd' || c.k === 'doubles') {
      const g = el('div', 'mv-pairs'); const items = emo(c.emoji, c.n, 'tap'); items.forEach((x) => g.appendChild(x)); box.appendChild(g);
      let sel = null, pairs = 0;
      const pairUp = (x, y) => { pairs++; x.classList.add('paired', 'p' + (pairs % 4)); y.classList.add('paired', 'p' + (pairs % 4)); g.appendChild(x); g.appendChild(y); sound('tap'); };
      if (c.k === 'evenodd') items.forEach((x) => x.addEventListener('click', () => { if (x.classList.contains('paired')) return; if (!sel) { sel = x; x.classList.add('sel'); return; } if (sel === x) { x.classList.remove('sel'); sel = null; return; } sel.classList.remove('sel'); const s0 = sel; sel = null; pairUp(s0, x); const free = items.filter((y) => !y.classList.contains('paired')); if (free.length === 1) free[0].classList.add('alone'); }));
      hint = (lv) => {
        if (c.k === 'doubles') { if (box.classList.contains('split')) return; box.classList.add('split'); g.replaceChildren(); const t1 = el('div', 'team'), t2 = el('div', 'team t2'); items.forEach((x, i) => (i % 2 ? t2 : t1).appendChild(x)); g.append(t1, t2); if (lv >= 2) { t1.appendChild(el('b', 'team-n', String(t1.children.length))); t2.appendChild(el('b', 'team-n', String(t2.children.length))); } return; }
        const free = items.filter((y) => !y.classList.contains('paired')); if (sel) { sel.classList.remove('sel'); sel = null; }
        for (let i = 0; i + 1 < free.length; i += 2) pairUp(free[i], free[i + 1]);
        const left = items.filter((y) => !y.classList.contains('paired')); left.forEach((y) => { y.classList.add('alone'); g.appendChild(y); });
      };
    } else if (c.k === 'skip') {
      const row = el('div', 'mv-skip');
      c.seq.forEach((v, i) => { const t = el('div', 'sk' + (v == null ? ' gap' : '')); if (c.by <= 5) { const gg = el('span', 'sk-g'); emo(c.emoji, c.by).forEach((x) => gg.appendChild(x)); t.appendChild(gg); } else t.appendChild(el('span', 'sk-g', c.emoji + '×' + c.by)); t.appendChild(el('b', 'sk-n', v == null ? '?' : numTxt(v))); row.appendChild(t); if (i < c.seq.length - 1) row.appendChild(el('span', 'sk-ar', '+' + c.by)); });
      box.appendChild(row); hint = (lv) => { box.classList.add('lit'); if (lv >= 2) { const g = row.querySelector('.gap .sk-n'); if (g) g.textContent = numTxt(c.a); } };
    } else if (c.k === 'array') {
      const grid = el('div', 'mv-array'); grid.style.setProperty('--cols', c.cols); const sum = el('p', 'mv-sum', 'Tap a row to count it');
      let n = 0; const done = new Set();
      for (let r = 0; r < c.rows; r++) { const row = el('div', 'arr-row'); emo(c.emoji, c.cols).forEach((x) => row.appendChild(x)); row.addEventListener('click', () => { if (done.has(r)) return; done.add(r); n += c.cols; row.classList.add('on'); row.appendChild(el('b', 'arr-n', String(n))); sum.textContent = [...Array(done.size)].map(() => c.cols).join(' + ') + ' = ' + n; sound('tap'); }); grid.appendChild(row); }
      box.append(grid, sum);
      hint = (lv) => { [...grid.children].forEach((row, r) => { if (lv >= 2 || r === 0) setTimeout(() => row.click(), r * 180); }); if (lv >= 2 && c.eq) setTimeout(() => { sum.textContent = c.eq; }, c.rows * 180 + 50); };
    } else if (c.k === 'groups') {
      const gs = el('div', 'mv-groups'); for (let i = 0; i < c.groups; i++) { const g = el('div', 'grp'); g.appendChild(el('span', 'grp-a', c.emoji)); const it = el('span', 'grp-i'); emo(c.item, c.each).forEach((x) => it.appendChild(x)); g.appendChild(it); gs.appendChild(g); }
      const sum = el('p', 'mv-sum', ''); box.append(gs, sum);
      hint = (lv) => { const g = [...gs.children]; g.forEach((x, i) => { if (lv >= 2 || i === 0) { x.classList.add('on'); if (!x.querySelector('.grp-n')) x.appendChild(el('b', 'grp-n', String(c.each))); } }); if (lv >= 2 && c.eq) sum.textContent = c.eq; else sum.textContent = `Each ${c.emoji} gets ${c.each}.`; };
    } else if (c.k === 'hundred') {
      const cells = [c.start].concat(c.path); const lo = Math.floor((Math.min(...cells) - 1) / 10), hi = Math.floor((Math.max(...cells) - 1) / 10);
      const ch = el('div', 'mv-hundred'); const at = {};
      for (let r = lo; r <= hi; r++) for (let k = 1; k <= 10; k++) { const v = r * 10 + k; const cc = el('span', 'hc' + (v === c.start ? ' start' : ''), String(v)); at[v] = cc; ch.appendChild(cc); }
      box.appendChild(ch);
      hint = (lv) => { const path = lv >= 2 ? c.path : c.path.slice(0, Math.max(1, c.path.length - 1)); path.forEach((v, i) => setTimeout(() => { if (at[v]) at[v].classList.add(lv >= 2 && i === c.path.length - 1 ? 'end' : 'hop'); }, i * 260)); };
    } else if (c.k === 'openline') {
      const line = el('div', 'mv-line'); let v = c.start; const pts = [v]; c.jumps.forEach((j) => { v += c.dir * j; pts.push(v); });
      const tot = c.jumps.reduce((a, b) => a + b, 0) || 1;
      const lab = (x, cls) => el('span', 'nl-l ' + (cls || ''), x);
      line.appendChild(lab(String(c.start), 'first'));
      c.jumps.forEach((j, i) => { const seg = el('div', 'nl-seg'); seg.style.flex = String(Math.max(0.6, j / tot * 4)); seg.appendChild(el('span', 'nl-arc', (c.dir < 0 ? '−' : '+') + j)); line.appendChild(seg); line.appendChild(lab(i === c.jumps.length - 1 ? '?' : '·', i === c.jumps.length - 1 ? 'last' : 'mid')); });
      if (c.dir < 0) line.classList.add('back');
      box.appendChild(line);
      hint = (lv) => { const ls = line.querySelectorAll('.nl-l'); pts.forEach((p, i) => { if (i > 0 && (i < pts.length - 1 || lv >= 2)) { ls[i].textContent = String(p); ls[i].classList.add('shown'); } }); };
    } else if (c.k === 'partial' || c.k === 'breakapart' || c.k === 'comp') {
      const blocks = (n) => { const b = el('div', 'b10'); const h = Math.floor(n / 100), t = Math.floor((n % 100) / 10), o = n % 10; for (let i = 0; i < h; i++) b.appendChild(el('i', 'b-h')); for (let i = 0; i < t; i++) b.appendChild(el('i', 'b-t')); const os = el('span', 'b-os'); for (let i = 0; i < o; i++) os.appendChild(el('i', 'b-o')); b.appendChild(os); b.appendChild(el('b', 'b-n', String(n))); return b; };
      const row = el('div', 'mv-b10'); row.append(blocks(c.a1), el('span', 'b-plus', '+'), blocks(c.a2)); box.appendChild(row);
      const steps = el('p', 'mv-sum', ''); box.appendChild(steps);
      hint = (lv) => {
        if (c.k === 'partial') steps.textContent = c.a1 >= 100 ? `${c.a1 - (c.a1 % 10)} + ${c.a2 - (c.a2 % 10)} = ${c.tens}.  ${c.a1 % 10} + ${c.a2 % 10} = ${c.ones}.` : `Tens: ${c.tens}.  Ones: ${c.ones}.` + (lv >= 2 ? `  ${c.tens} + ${c.ones} = ${c.a}` : '');
        else if (c.k === 'breakapart') steps.textContent = `${c.a2} = ${c.split[0]} + ${c.split[1]}.  ` + (lv >= 2 ? c.steps.join('.  ') : c.steps[0]);
        else steps.textContent = `${c.a1} + ${c.a2} = ${c.nice[0]} + ${c.nice[1]}` + (lv >= 2 ? ` = ${c.a}` : '');
        box.classList.add('lit');
      };
    } else if (c.k === 'multi') {
      const row = el('div', 'mv-multi'); c.nums.forEach((n) => row.appendChild(el('span', 'mm', String(n)))); box.appendChild(row);
      const steps = el('p', 'mv-sum', ''); box.appendChild(steps);
      const tens = c.nums.reduce((a, n) => a + n - (n % 10), 0), ones = c.nums.reduce((a, n) => a + (n % 10), 0);
      hint = (lv) => { steps.textContent = `Tens: ${tens}.  Ones: ${ones}.` + (lv >= 2 ? `  ${tens} + ${ones} = ${c.a}` : ''); };
    } else if (c.k === 'story') {
      const st = el('div', 'mv-story'); st.appendChild(el('span', 'st-pic', c.emoji || '🦓'));
      const tx = el('div', 'st-text'); (c.text || []).forEach((t) => tx.appendChild(el('p', null, t))); st.appendChild(tx); box.appendChild(st);
      const eq = el('p', 'mv-sum', ''); box.appendChild(eq);
      hint = (lv) => { if (!c.eq) return; eq.textContent = lv >= 2 ? c.eq : String(c.eq).replace(/(=\s*)[\d]+$|^(\d+)(?= is)/, (m, a, b) => (a ? a + '?' : '?')); };
    }
    return { el: box, hint };
  }
  function mathPad(body, ans, fb, onDone) {
    const want = String(ans); let typed = '', miss = 0, over = false;
    const box = el('div', 'mpad'); const disp = el('div', 'mpad-disp'); const keys = el('div', 'mpad-keys');
    const show = () => { disp.textContent = typed || '·'.repeat(want.length); };
    const press = (d) => {
      if (over) return; sound('key');
      if (d === '⌫') { typed = typed.slice(0, -1); return show(); }
      typed += d; show();
      if (typed.length < want.length) return;
      if (typed === want) { over = true; disp.classList.add('ok'); onDone(true); }
      else { miss++; disp.classList.remove('shake'); void disp.offsetWidth; disp.classList.add('shake'); typed = ''; setTimeout(show, 450);
        if (miss >= 2) { over = true; setTimeout(() => { disp.textContent = want; disp.classList.add('ok'); onDone(false); }, 500); } else setFb(fb, `It has ${want.length} digit${want.length > 1 ? 's' : ''}. Look at your answer! 👀`, 'soft'); }
    };
    '1234567890'.split('').concat('⌫').forEach((d) => keys.appendChild(btn('mk' + (d === '⌫' ? ' del' : ''), d, () => press(d))));
    box.append(el('p', 'mpad-t', `Bonus: type it for +1 ${pet().food}`), disp, keys); show();
    body.appendChild(box);
    box.touched = () => typed.length > 0 || miss > 0;
    return box;
  }
  BUILD.math = (card, sec) => {
    const c = card.spec.c; sec.classList.add('math-card');
    const { vis, body } = frame(sec, { kicker: `🦓 Zoo Math · ${MATH_KICK[c.k] || ''}${c.boss ? ' · 👑 boss' : ''}` });
    vis.classList.add('hab-bg', 'pet-' + (S.chick.kind || 'penguin'), 'math-vis');
    vis.appendChild(el('span', 'math-badge', c.k === 'story' ? (c.emoji || '🦓') : (c.emoji || '🦓')));
    const isStory = c.k === 'story';
    const pip = pipSay(vis, isStory ? c.q : c.say);
    body.appendChild(el('h2', 'c-title math-q', mathQ(c)));
    const V = mathViz(c); body.appendChild(V.el);
    const tools = el('div', 'math-tools');
    const hearAll = () => { speakingWrap = pip; sayList([{ text: c.say, word: false }]); };
    const hb = btn('hear-btn wide', '🔊 Hear it', (e) => { e.stopPropagation(); P.res.hearTaps = (P.res.hearTaps || 0) + 1; hearAll(); }); tools.appendChild(hb);
    body.appendChild(tools);
    if (isStory) { card.noAutoSay = true; card.onShow = () => { if (!card._heard && !card.done) { card._heard = true; setTimeout(() => { if (P.cards[P.idx] === card) hearAll(); }, 250); } }; }
    const fb = feedback(body);
    const disp = (o) => (o === 'even' ? 'Even' : o === 'odd' ? 'Odd' : numTxt(o));
    card.answer = disp(c.a);
    const opts = c.opts.map(disp);
    let misses = 0;
    const rightLine = () => (c.feedback && c.feedback.right) || (c.eq ? `Yes! ${c.eq} 🎉` : (c.part === 'warm' || card.spec.part === 'warm') ? 'Quick win! 🎉' : praise('first'));
    const row = choices(body, opts, c.id + P.key, (first, b, info) => {
      V.hint(2);
      const line = rightLine();
      setFb(fb, line, 'good'); pip.say(MATH_SPEAK(line), undefined, false);
      const fish = c.fish || 1;
      if (first && c.input === 'pickThenType' && typeof c.a === 'number') {
        complete(card, { first: true, type: 'math:' + c.k }, { fish, stay: true });
        row.classList.add('done-row');
        const pad = mathPad(body, c.a, fb, (ok) => {
          if (ok) { P.fish += 1; fishPop(card.el, 1); setFb(fb, `You typed it! +1 ${pet().food}`, 'good'); P.res.typed = (P.res.typed || 0) + 1; }
          clearTimeout(advanceTimer); advanceTimer = setTimeout(() => { if (P.cards[P.idx] === card) goNext(); }, 1100); saveProgress();
        });
        body.insertBefore(pad, fb);
        // Never blocks: if she does not start typing, the feed moves on by itself.
        clearTimeout(advanceTimer); advanceTimer = setTimeout(function wait() { if (P.cards[P.idx] !== card) return; if (pad.touched()) return; goNext(); }, 5000);
        return;
      }
      complete(card, { first, type: 'math:' + c.k }, { fish, delay: info && info.shown ? 2400 : 1500 });
    }, () => {
      misses++;
      V.hint(misses);
      const h = misses === 1 ? ((c.feedback && c.feedback.wrong) || c.hint || 'Look at the picture. It can help!') : `The answer is ${card.answer}.`;
      setFb(fb, h + (misses === 1 ? ' 💡' : ''), 'soft'); pip.say(misses === 1 ? h : `Here it is! ${card.answer}.`, 'oops');
    }, typeof c.a === 'string' ? 'words two' : 'nums');
    body.insertBefore(row, fb);
    card.help = ((h) => () => { h && h(); V.hint(1); })(card.help);
    onIdle(() => V.hint(1), PAUSE_1, { quiet: true });
    // v2.8: even or odd = one tap. The buddy pairs make themselves (no "tap two at a time" step); a lone one stands out.
    if (c.k === 'evenodd') { const before = card.onShow; card.onShow = () => { if (before) before(); if (!card._paired) { card._paired = true; setTimeout(() => { if (P.cards[P.idx] === card) V.hint(1); }, 900); } }; }
  };

  /* ---------------- end of session + level rules ----------------
     Level up: 3 "good" sessions at a level. Good = Pip's question (evidence) right on the first try
     AND at least 6 of the 7 word cards right on the first try (one slip allowed, like 7/8).
     Drop back (quietly) after 2 "rough" sessions in a row. Rough = 4 or fewer of 7 word cards first try,
     OR the evidence question missed AND 5 or fewer word cards. A parent can override / lock the level. */
  function scoreSession(res) {
    const vals = Object.values(res).filter((r) => r && r.type);
    const words = vals.filter((r) => WORD_TYPES.includes(r.type));
    const wordFirst = words.filter((r) => r.first).length;
    const q = vals.find((r) => r.type === 'question');
    const adv = vals.find((r) => r.type === 'advisor');
    const checks = vals.filter((r) => r.type === 'check');
    const byType = {};
    vals.forEach((r) => { byType[r.type] = byType[r.type] || [0, 0]; byType[r.type][1]++; if (r.first) byType[r.type][0]++; });
    return { wordFirst, wordTotal: words.length, evidence: !!(q && q.first), advisor: !!(adv && adv.first), checksFirst: checks.filter((c) => c.first).length, checksTotal: checks.length, byType };
  }
  function applyLevelRules(sc, lv) {
    const need = Math.max(1, sc.wordTotal - 1);
    const good = sc.evidence && sc.wordFirst >= need;
    const rough = sc.wordFirst <= sc.wordTotal - 3 || (!sc.evidence && sc.wordFirst <= sc.wordTotal - 2);
    let change = null;
    if (lv !== S.level) return { good, rough, change };
    if (good) { S.good++; S.roughStreak = 0; } else if (rough) { S.roughStreak++; } else { S.roughStreak = 0; }
    if (!S.levelLock) {
      const i = LEVELS.indexOf(S.level);
      if (S.good >= 3 && i < LEVELS.length - 1) { change = { from: S.level, to: LEVELS[i + 1], why: '3 strong sessions' }; }
      else if (S.roughStreak >= 2 && i > 0) { change = { from: S.level, to: LEVELS[i - 1], why: '2 tricky sessions in a row' }; }
      if (change) { S.level = change.to; S.good = 0; S.roughStreak = 0; S.levelLog.push(Object.assign({ date: Date.now() }, change)); }
    }
    return { good, rough, change };
  }
  function finishSession() {
    if (P.finished) return; P.finished = true;
    const sc = scoreSession(P.res);
    const wlog = { practiced: (P.res.practice || {}).words || [], help: (P.res.practice || {}).help || [], known: [], moved: [] };
    if (P.mode === 'math') return finishMath(sc);
    if (P.mode) {  // Boss postcard / Italian bonus: bonus only, never changes the level
      if (P.mode === 'bonus') S.chick.fish += 0;
      if (P.mode === 'boss') { S.chick.fish += 5; S.bossDone = Object.assign({}, S.bossDone, { [P.key]: Date.now() }); }
      S.sessions.push({ id: 's' + Date.now(), week: P.week.id, day: P.mode, dayName: P.mode === 'boss' ? `Boss postcard (${P.day.name})` : P.mode === 'bonus' ? `Bonus round (${P.day.name})` : 'Bonus Postcard from Italia', level: P.lv, date: Date.now(), mins: Math.round((Date.now() - P.started) / 60000), fish: P.fish, bonus: P.mode,
        wordFirst: sc.wordFirst, wordTotal: sc.wordTotal, evidence: sc.evidence, advisor: sc.advisor, checksFirst: sc.checksFirst, checksTotal: sc.checksTotal, byType: sc.byType });
      S.progress = null; save(); refreshThenNow();
      return showEnd(sc, { change: null }, P.mode === 'boss' ? '👑 Boss postcard done! +5 bonus!' : P.mode === 'bonus' ? '⭐ Bonus round done!' : '🇮🇹 Bravissima! Bonus done!');
    }
    const rule = applyLevelRules(sc, P.lv);
    S.sessionsDone++;
    (P.res.missed || []).forEach((m) => { if (!S.review.find((r) => r.w === m.w)) S.review.push({ w: m.w, split: m.split, due: S.sessionsDone + 2, from: `${P.day.name} (${LEVEL_INFO[P.lv].name})` }); });
    S.sessions.push({ id: 's' + Date.now(), week: P.week.id, day: P.day.day, dayName: P.day.name, level: P.lv, date: Date.now(), mins: Math.round((Date.now() - P.started) / 60000), fish: P.fish,
      wordFirst: sc.wordFirst, wordTotal: sc.wordTotal, evidence: sc.evidence, advisor: sc.advisor, checksFirst: sc.checksFirst, checksTotal: sc.checksTotal, byType: sc.byType,
      alt: !!P.alt, missed: (P.res.missed || []).map((m) => m.w), route: P.res.route || '', good: rule.good, rough: rule.rough,
      practiced: wlog.practiced, known: wlog.known, help: wlog.help, moved: wlog.moved, helped: Object.values(P.res).filter((r) => r && r.helped).length, skipped: Object.values(P.res).filter((r) => r && r.skipped).length, cards: P.specs.length });
    S.progress = null;
    save();
    refreshThenNow();
    showEnd(sc, rule);
  }
  /* Zoo Math level (separate from reading): 3 strong sessions (at most 1 main card missed on the first try) -> up;
     2 tricky sessions in a row (3 or more missed) -> back. A grown-up can set or lock it. */
  function finishMath(sc) {
    const sp = P.specs.find((x) => x.k === 'math') || {};
    const main = P.specs.map((x, i) => [x, P.res[i]]).filter(([x]) => x.k === 'math' && x.part === 'main');
    const mf = main.filter(([, r]) => r && r.first).length, mt = main.length;
    const good = mf >= mt - 1, rough = mf <= mt - 3; let change = null;
    if (P.lv === S.mathLevel || (!S.mathLevel && P.lv === 'ground')) {
      if (good) { S.mathGood = (S.mathGood || 0) + 1; S.mathRough = 0; } else if (rough) S.mathRough = (S.mathRough || 0) + 1; else S.mathRough = 0;
      const i = LEVELS.indexOf(P.lv);
      if (!S.mathLock) {
        if (S.mathGood >= 3 && i < 2) change = { from: P.lv, to: LEVELS[i + 1], why: '3 strong math sessions' };
        else if (S.mathRough >= 2 && i > 0) change = { from: P.lv, to: LEVELS[i - 1], why: '2 tricky math sessions in a row' };
        if (change) { S.mathLevel = change.to; S.mathGood = 0; S.mathRough = 0; S.levelLog.push(Object.assign({ date: Date.now(), math: true }, change)); }
      }
    }
    const MW = (window.PIP_MATH || {})[sp.mw]; const md = MW && MW.days[sp.md];
    S.sessions.push({ id: 's' + Date.now(), track: 'math', week: P.week.id, mathWeek: sp.mw, mathDay: sp.md, day: 'math', dayName: `Zoo Math (${md ? md.name : ''})`, level: P.lv, date: Date.now(), mins: Math.round((Date.now() - P.started) / 60000), fish: P.fish,
      bonus: 'math', mainFirst: mf, mainTotal: mt, warmFirst: P.specs.filter((x, i) => x.part === 'warm' && P.res[i] && P.res[i].first).length, byType: sc.byType, hearTaps: P.res.hearTaps || 0, typed: P.res.typed || 0,
      helped: Object.values(P.res).filter((r) => r && r.helped).length, skipped: Object.values(P.res).filter((r) => r && r.skipped).length, wordFirst: 0, wordTotal: 0, good, rough });
    S.progress = null; save();
    showEnd(sc, { change: null }, change && LEVELS.indexOf(change.to) > LEVELS.indexOf(change.from) ? `🦓 Zoo Math done! Next time: ${LEVEL_INFO[change.to].icon} ${LEVEL_INFO[change.to].name} math!` : `🦓 Zoo Math done! ${mf} of ${mt} on the first try.`);
  }
  function showEnd(sc, rule, extra) {
    const box = $('endBox'); box.replaceChildren();
    box.appendChild(chickEl(S.chick.fish, 'big'));
    box.appendChild(el('h2', 'end-h', `Mission complete! 🎉`));
    box.appendChild(el('p', 'c-text', `${chickName()} ate ${P.fish} ${pet().foodName}. Pip is safe and ready for the next stop!`));
    if (extra) box.appendChild(el('p', 'end-up', extra));
    const tried = Object.values(P.res).filter((r) => r && r.type).length;
    if (tried) box.appendChild(el('p', 'c-sub', `You worked through ${tried} challenges today. Every one makes your ${P.mode === 'math' ? 'math' : 'reading'} stronger! 💪`));
    if (rule.change && LEVELS.indexOf(rule.change.to) > LEVELS.indexOf(rule.change.from)) box.appendChild(el('p', 'end-up', `🚀 Pip can fly higher now! Next time: ${levelLabel(rule.change.to)}`));
    const bye = el('div', 'end-guide'); const bim = el('img', 'end-guide-img'); bim.src = poseSrc((POSE.screens || {}).end || 'sleep'); bim.alt = `${G().name} the ${G().species}`;
    bye.append(girlEl(P && P.mode === 'boss' ? 'bossWin' : 'end', 'girl-end'), bim, el('span', 'bubble end-bubble', 'See you tomorrow! 💤')); box.appendChild(bye);
    const nStk = (S.sessions || []).length;
    if (nStk >= 1 && nStk <= STICKERS.length) { // she just earned a sticker for the zoo shelf
      const sk = el('p', 'end-sticker'); const im = el('img'); im.src = `img/stickers/${STICKERS[nStk - 1]}.webp`; im.alt = ''; sk.append(im, el('span', null, 'New sticker for your zoo!'));
      box.insertBefore(sk, bye);
      sound('plink', 2300);
    }
    box.appendChild(btn('big-btn', `Back to ${chickName()} ${pet().icon}`, () => goHome()));
    if (!P.mode && P.week) { const di = P.week.days.findIndex((d) => d.day === P.day.day || (d.alt && d.alt.day === P.day.day)); if (di >= 0) box.insertBefore(btn('big-btn soft bonus-btn', '⭐ Bonus round (optional)', () => startSession(di, false, 'bonus')), box.lastChild); }
    showScreen('screenEnd');
    const up = rule.change && LEVELS.indexOf(rule.change.to) > LEVELS.indexOf(rule.change.from);
    sound(up ? 'j_level' : 'j_day');
  }

  /* ---------------- home + habitat ---------------- */
  function habitat(parent) {
    const h = el('div', 'habitat');
    itemsOf(pet()).forEach((it) => {
      if (S.chick.fish < it.at) return;
      const im = it.img ? el('img', 'hab-item') : el('span', 'hab-item hab-emoji', it.emoji);
      if (it.img) { im.src = it.img; im.alt = it.name; } else { im.setAttribute('role', 'img'); im.setAttribute('aria-label', it.name); im.style.setProperty('--w', it.pos[2]); }
      im.style.left = it.pos[0] + '%'; im.style.bottom = it.pos[1] + '%'; im.style.width = it.pos[2] + '%';
      h.appendChild(im);
    });
    (S.family || []).slice(-3).forEach((f, i) => { const c = chickEl(STAGE_AT[4], 'friend', f.kind); c.style.left = (14 + i * 12) + '%'; c.title = f.name; h.appendChild(c); });
    h.appendChild(chickEl(S.chick.fish, 'at-home'));
    parent.appendChild(h);
    return h;
  }
  function dayStatus(week) {
    const st = {};
    S.sessions.filter((s) => s.week === week.id).forEach((s) => { st[s.day] = s; });
    return st;
  }
  let grownBtn = null;
  function renderHome() {
    const week = currentWeek();
    const box = $('homeBox'); box.replaceChildren();
    const top = el('div', 'home-top');
    habitat(top);
    const pp = pet();
    top.classList.add('hab-bg', 'pet-' + pet().id);
    const st = stagesOf(pp)[stageFor(S.chick.fish)];
    const next = itemsOf(pp).find((it) => it.at > S.chick.fish);
    const info = el('p', 'home-chick', `${chickName()} · ${st.name} · ${pp.food} ${S.chick.fish}` + (next ? `  ·  next: ${next.name} at ${next.at}` : ''));
    top.appendChild(info);
    box.appendChild(top);
    const bot = el('div', 'home-bottom');
    const hh = el('div', 'home-head'); hh.appendChild(girlEl('home', 'girl-home'));
    const htx = el('div', 'home-htx');
    htx.appendChild(el('h1', 'home-h', `${G().name}'s Postcards`));
    htx.appendChild(el('p', 'home-sub', (kidName() ? `Hi, ${kidName()}! ` : '') + `${week.title}`));
    hh.appendChild(htx); bot.appendChild(hh);
    const days = el('div', 'days' + (week.days.length > 5 ? ' six' : ''));
    const ds = dayStatus(week);
    const firstOpen = week.days.find((d) => !ds[d.day]);
    week.days.forEach((d0, di) => {
      const d = shownDay(d0);
      const s = ds[d.day];
      const b = btn('day' + (s ? ' done' : '') + (firstOpen === d ? ' next' : ''), null, () => begin(di));
      b.append(el('span', 'day-n', d.short || d.name.slice(0, 3)), el('span', 'day-i', s ? '✅' : d.flag));
      b.setAttribute('aria-label', `${d.name}: ${d.place}${s ? ', done' : ''}`);
      days.appendChild(b);
    });
    bot.appendChild(days);
    const resume = !!(S.progress && S.progress.v === PLAN_V && S.progress.week === week.id && week.days.some((d) => d.day === S.progress.day));
    const target = resume ? week.days.findIndex((d) => d.day === S.progress.day) : week.days.indexOf(firstOpen || week.days[0]);
    const label = resume ? (S.progress.mode === 'math' ? 'Keep going: 🦓 Zoo Math ▶' : `Keep going: ${week.days[target].name} ▶`) : (firstOpen ? `Start ${firstOpen.name} ▶` : 'Play again ▶');
    bot.appendChild(btn('big-btn', label, () => begin(target, resume)));
    { // Zoo Math: today's math day (weekend: pick any day of the week)
      const MW = mathWeek();
      if (MW) {
        const mdone = mathDone(MW), today = mathDayIdx(MW);
        const zm = el('div', 'zm-home');
        zm.appendChild(btn('big-btn zm-btn', `🦓 Zoo Math: ${MW.days[today].name} ▶`, () => startMath(today)));
        const chips = el('div', 'zm-days');
        MW.days.forEach((d, i) => { const b = btn('zm-day' + (mdone[i] ? ' done' : '') + (i === today ? ' today' : ''), (mdone[i] ? '✅ ' : '') + d.name.slice(0, 3), () => startMath(i)); b.setAttribute('aria-label', `Zoo Math ${d.name}: ${d.focus}${mdone[i] ? ', done' : ''}`); b.title = d.focus; chips.appendChild(b); });
        zm.append(chips, el('p', 'zm-sub', `${MW.days[today].focus} · ${LEVEL_INFO[LEVELS.includes(S.mathLevel) ? S.mathLevel : 'ground'].icon} ${LEVEL_INFO[LEVELS.includes(S.mathLevel) ? S.mathLevel : 'ground'].name} math`));
        bot.appendChild(zm);
      }
    }
    // Optional extras: never required, skipping costs nothing.
    const extras = el('div', 'extras');
    const lastDone = [...week.days].reverse().find((d) => ds[d.day]);
    if (lastDone && S.level !== 'space' && !resume) {
      const di = week.days.indexOf(lastDone);
      const bkey = sessionKey(week, shownDay(lastDone), LEVELS[LEVELS.indexOf(S.level) + 1]) + '-boss';
      if (!(S.bossDone || {})[bkey]) extras.appendChild(btn('extra-btn', `👑 Boss postcard (optional): ${shownDay(lastDone).place}`, () => startSession(di, false, 'boss')));
    }
    if (lastDone && !resume) extras.appendChild(btn('extra-btn', '⭐ Bonus round (optional)', () => startSession(week.days.indexOf(lastDone), false, 'bonus')));
    const fri = week.days.find((d) => d.day === 5);
    if (week.italia && S.italiaOn !== false && fri && ds[5] && !resume) extras.appendChild(btn('extra-btn italia-btn', (S.italiaDone || {})[week.id] ? '🇮🇹 Bonus Postcard from Italia! (again)' : '🇮🇹 Bonus Postcard from Italia!', () => startSession(week.days.indexOf(fri), false, 'italia')));
    if (extras.children.length) bot.appendChild(extras);
    if (S.chick.fish >= ITEM_AT[ITEM_AT.length - 1]) {
      bot.appendChild(el('p', 'home-soft', `🎉 ${chickName()} is all grown up and will live safely in your zoo forever!`));
      bot.appendChild(btn('big-btn soft', '🪺 A new nest appeared! Pick your next baby', () => { S.choosing = true; save(); renderName(); showScreen('screenName'); }));
    }
    bot.appendChild(zooEl());
    bot.appendChild(el('p', 'home-soft', firstOpen ? `${shownDay(firstOpen).flag} Today Pip is in: ${shownDay(firstOpen).place}` : 'You finished this week! 🎉 Replay any day.'));
    grownBtn = grownBtn || $('btnGrown'); if (grownBtn) bot.appendChild(grownBtn); // at the end of the scrolling list, so it never covers the zoo
    box.appendChild(bot);
  }
  /* Her little zoo: the girl, every grown-up baby (and the one she is raising), and the stickers she has earned
     (one per finished postcard day). The sign uses her name if a grown-up or she typed one. */
  function zooEl() {
    const z = el('section', 'zoo');
    const head = el('div', 'zoo-head');
    const zooKinds = (S.family || []).map((f) => f.kind).concat(S.chick.kind ? [S.chick.kind] : []);
    head.appendChild(girlEl((S.family || []).length && zooKinds.includes('penguin') ? 'zooTop' : 'img/girl/' + GIRL.zoo[pet().id] + '.webp', 'girl-zoo'));
    const sign = el('div', 'zoo-sign');
    sign.appendChild(el('h2', 'zoo-h', kidName() ? `${kidName()}'s Little Zoo` : 'My Little Zoo'));
    const n = (S.family || []).length;
    sign.appendChild(el('p', 'zoo-sub', n ? `${n} grown-up friend${n > 1 ? 's' : ''} live here safe and sound 💛` : `When ${chickName()} is all grown up, ${S.chick.name ? 'they' : 'your baby'} will live here forever 💛`));
    head.appendChild(sign); z.appendChild(head);
    const pals = el('div', 'zoo-pals');
    (S.family || []).forEach((f) => { const pp = PETS[f.kind] || PETS.penguin; const c = el('span', 'zoo-pal'); const im = el('img'); im.src = babyImg(pp.id, 'adult'); im.alt = ''; c.append(im, el('span', 'zoo-name', f.name)); c.setAttribute('aria-label', `${f.name} the ${oneName(pp)}`); pals.appendChild(c); });
    if (S.chick.kind) { const pp = pet(); const st = stagesOf(pp)[stageFor(S.chick.fish)]; const c = el('span', 'zoo-pal now'); const im = el('img'); im.src = st.img; im.alt = ''; c.append(im, el('span', 'zoo-name', `${chickName()} (${st.name.toLowerCase()})`)); pals.appendChild(c); }
    z.appendChild(pals);
    const got = Math.min(STICKERS.length, (S.sessions || []).length);
    const shelf = el('div', 'stickers'); shelf.setAttribute('aria-label', `${got} stickers`);
    STICKERS.forEach((nm, i) => { if (i < got) { const im = el('img', 'zoo-sticker'); im.src = `img/stickers/${nm}.webp`; im.alt = ''; shelf.appendChild(im); } });
    if (got < STICKERS.length) shelf.appendChild(el('span', 'zoo-sticker next', got ? '＋' : '⭐'));
    z.appendChild(el('p', 'zoo-sub small', got ? `Stickers: ${got}. Finish a postcard day to earn the next one!` : 'Finish a postcard day to earn your first sticker!'));
    z.appendChild(shelf);
    if (n) z.appendChild(girlEl('zooEnd', 'girl-zoo-end'));
    return z;
  }
  function begin(di, resume) {
    const week = currentWeek();
    const isResume = resume || !!(S.progress && S.progress.v === PLAN_V && !S.progress.mode && S.progress.week === week.id && S.progress.day === week.days[di].day);
    startSession(di, isResume);
  }
  function goHome() {
    clearTimeout(advanceTimer);
    try { speechSynthesis.cancel(); } catch (_) {}
    document.querySelectorAll('.rec').forEach((r) => r.stop && r.stop());
    renderHome(); showScreen('screenHome');
  }
  let nameBack = null; // set by the first-launch steps that have a step before them
  function curScreen() { return ['screenHome', 'screenPlay', 'screenEnd', 'screenParent', 'screenName'].find((x) => $(x).classList.contains('active')); }
  function goBack() {
    const sc = curScreen();
    if (sc === 'screenPlay') { if (P.idx > 0) goPrev(); else pauseOpen(); return; }
    if (sc === 'screenName' && nameBack) { const f = nameBack; nameBack = null; f(); return; }
    goHome();
  }
  function pauseOpen() { clearTimeout(advanceTimer); stopVoice(); saveProgress(); $('pauseBox').hidden = false; }
  function pauseClose() { $('pauseBox').hidden = true; }
  /* 🙋 Help (same place on every card): the card's clue now (a wrong choice fades, the answer glows) + the guide says it again. */
  function helpNow() {
    const c = P.cards[P.idx]; if (!c || c.done) return;
    S.helpTaps = (S.helpTaps || 0) + 1; P.res.helpTaps = (P.res.helpTaps || 0) + 1; save();
    const busy0 = voiceBusy() ? sayToken : -1;
    if (c.help) c.help();
    (c.idle || []).forEach((x) => x.fn());
    const helpSpoke = voiceBusy() && sayToken !== busy0; // the clue started its own audio: keep it, show the line as a caption
    if (c.pip) { c.pip.say(c.pip.text || 'Here is a clue! 💡', null, helpSpoke); }
  }
  function showScreen(id) {
    ['screenHome', 'screenPlay', 'screenEnd', 'screenParent', 'screenName'].forEach((s) => { const e = $(s); const on = s === id; e.hidden = !on; e.classList.toggle('active', on); });
    $('dots').hidden = id !== 'screenPlay'; $('fishCount').hidden = id !== 'screenPlay';
    // One Back button, same place and look on every screen (top left). Play also has Pause (save and quit).
    $('btnHome').hidden = true;
    $('btnBack').hidden = id === 'screenHome' || (id === 'screenName' && !nameBack);
    $('btnPause').hidden = id !== 'screenPlay';
    $('btnHelp').hidden = id !== 'screenPlay';
    $('pauseBox').hidden = true;
    if (id !== 'screenPlay') $('topTitle').textContent = id === 'screenParent' ? 'Grown-ups' : (S.guide ? `${G().name}'s Postcards` : 'Postcards');
    document.title = S.guide ? `${G().name}'s Postcards` : "Pip's Postcards";
  }

  /* ---------------- first launch: pick a baby from 4 nests, then name it ---------------- */
  /* Very first screen: "What's your name?" (first name only, optional, stays on this device). */
  function renderKid(box) {
    box.classList.add('kid-step');
    const hd = el('div', 'kid-head'); hd.appendChild(girlEl('hello', 'girl-hello', true)); box.appendChild(hd);
    box.appendChild(el('h1', 'home-h', `Hi! What's your name?`));
    box.appendChild(el('p', 'c-text', 'Type your first name. Your zoo will have your name on it!'));
    const f = el('form', 'name-form kid-name');
    const inp = el('input', 'spell-in name-big'); inp.maxLength = 16; inp.placeholder = 'Your first name'; inp.setAttribute('aria-label', 'Your first name'); inp.autocomplete = 'off'; inp.setAttribute('autocapitalize', 'words'); inp.spellcheck = false;
    const go = btn('big-btn', "That's me! ✨"); go.type = 'submit';
    f.append(inp, go);
    const finish = (v) => { S.kid = v; S.kidAsked = true; save(); box.classList.remove('kid-step'); box.replaceChildren(); renderName(); };
    f.addEventListener('submit', (e) => { e.preventDefault(); const v = inp.value.trim().replace(/\s+/g, ' ').slice(0, 16); if (!v) { inp.focus(); return; } finish(v.charAt(0).toUpperCase() + v.slice(1)); });
    box.appendChild(f);
    box.appendChild(btn('link-btn', 'Skip for now', () => finish('')));
    setTimeout(() => { try { inp.focus(); } catch (_) {} }, 100);
    sayList([{ text: "Hi! What's your name? Type your first name.", word: false }]);
    showScreen('screenName');
  }
  /* First screen: she picks her guide (6 big picture cards, each said out loud) and types its name. */
  function renderGuide(box) {
    box.classList.add('choosing');
    const st = renderGuide.st = renderGuide.st || { kind: '' };
    if (!st.kind) {
      box.appendChild(el('h1', 'home-h', 'Pick your mail carrier friend!'));
      box.appendChild(el('p', 'c-text', 'She will bring you postcards from all over the world. Tap one!'));
      const grid = el('div', 'nests guides');
      GUIDES.order.forEach((k) => {
        const g = GUIDES.kinds[k];
        const b = btn('nest-btn guide-btn', null, () => {
          if (grid.classList.contains('picked')) return;
          grid.classList.add('picked'); b.classList.add('chosen'); sound('right');
          sayList([{ text: g.label, word: false }]);
          st.kind = k; setTimeout(() => { box.replaceChildren(); renderGuide(box); }, 800);
        });
        const im = el('img', 'guide-img'); im.src = g.img; im.alt = '';
        b.append(el('span', 'nest-art'), el('span', 'nest-lbl', g.label), el('span', 'nest-sub', g.travel));
        b.firstChild.appendChild(im);
        b.addEventListener('pointerenter', () => {});
        b.setAttribute('aria-label', g.label);
        grid.appendChild(b);
      });
      box.appendChild(grid);
      if (guideSwitch && guideSwitch.from) box.appendChild(btn('link-btn', `Keep ${guideSwitch.from.name}, go back`, () => { if (nameBack) { const f = nameBack; nameBack = null; f(); } }));
      setTimeout(() => sayList([{ text: 'Pick your mail carrier friend! Pigeon, puffin, penguin explorer, sea otter, fox mail carrier, or sea turtle.', word: false }]), 400);
      return;
    }
    const g = GUIDES.kinds[st.kind];
    if (!st.name) {
      const im = el('img', 'guide-hero'); im.src = g.img; im.alt = g.label; box.appendChild(im);
      box.appendChild(el('h1', 'home-h', `What is her name?`));
      box.appendChild(el('p', 'c-text', `Your ${g.label.toLowerCase()} is a girl. Type any name you like!`));
      const f = el('form', 'name-form guide-name');
      const inp = el('input', 'spell-in name-big'); inp.maxLength = 16; inp.placeholder = 'Type her name'; inp.setAttribute('aria-label', 'Type her name'); inp.autocomplete = 'off'; inp.setAttribute('autocapitalize', 'words'); inp.spellcheck = false;
      const go = btn('big-btn', 'That is her name! ✨'); go.type = 'submit';
      const sug = el('div', 'sugs small');
      sug.appendChild(el('span', 'sug-h', 'Ideas:'));
      GUIDES.names.forEach((n) => sug.appendChild(btn('sug', n, () => { inp.value = n; sayList([{ text: n, word: true }]); inp.focus(); })));
      f.append(inp, go, sug);
      f.addEventListener('submit', (e) => { e.preventDefault(); const v = inp.value.trim().replace(/\s+/g, ' ').slice(0, 16); if (!v) { inp.focus(); return; } st.name = v.charAt(0).toUpperCase() + v.slice(1); box.replaceChildren(); renderGuide(box); });
      box.appendChild(f);
      box.appendChild(btn('link-btn', '← Pick a different friend', () => { st.kind = ''; box.replaceChildren(); renderGuide(box); }));
      setTimeout(() => { try { inp.focus(); } catch (_) {} }, 100);
      sayList([{ text: 'What is her name? Type any name you like!', word: false }]);
      return;
    }
    // Intro: "Hi, I'm <name>!"
    S.guide = { kind: st.kind, name: st.name }; save(); warmPoses();
    const vis = el('div', 'guide-intro');
    const im = el('img', 'guide-hero'); im.src = poseSrc((POSE.screens || {}).intro || 'hello', st.kind, true); im.alt = g.label;
    const line = `Hi! I'm your ${guideSwitch ? 'new ' : ''}guide, ${st.name}! I'm a ${g.species}. I ${g.me || g.travel}. ` + (guideSwitch ? `Let's keep going!` : `Let's find a baby animal for you to take care of!`); // her typed name is dropped from the spoken line (caption only)
    const bub = el('div', 'bubble intro-bubble'); const cap = el('span', 'cap', line); const rp = btn('replay', '🔁', () => { speakingWrap = vis; sayList([{ text: line, word: false }]); }); rp.setAttribute('aria-label', 'Hear it again');
    bub.append(cap, rp); vis.append(bub, im); box.appendChild(vis);
    capMode(vis); speakingWrap = vis;
    sayList([{ text: line, word: false }]);
    if (guideSwitch) { // switched from the grown-up area: straight back home, everything else as it was
      const done = () => { guideSwitch = null; renderGuide.st = null; stopVoice(); box.classList.remove('choosing'); goHome(); };
      nameBack = done;
      box.appendChild(btn('big-btn', `Hi, ${st.name}! 👋`, done));
      showScreen('screenName');
      return;
    }
    box.appendChild(btn('big-btn', `Hi, ${st.name}! 👋`, () => { renderGuide.st = null; stopVoice(); renderName(); }));
    showScreen('screenName');
  }
  function renderName() {
    const box = $('nameBox'); box.replaceChildren();
    box.classList.remove('choosing');
    // Back (top left) steps back through the first-launch steps.
    const firstTime = !(S.chick && S.chick.name) && !S.choosing;
    nameBack = !S.kidAsked ? null
      : !S.guide ? () => { S.kidAsked = false; save(); renderName(); }
      : (!S.chick.kind || S.choosing) ? (S.choosing ? () => { S.choosing = false; save(); goHome(); } : (firstTime ? () => { S.guide = null; save(); renderName(); } : null))
      : (!S.chick.name ? () => { S.chick.kind = ''; save(); renderName(); } : null);
    if ($('btnBack')) $('btnBack').hidden = !nameBack;
    if (!S.kidAsked) return renderKid(box);
    if (!S.guide) return renderGuide(box);
    const choosing = !S.chick.kind || S.choosing;
    box.classList.toggle('choosing', choosing);
    if (choosing) return renderChooser(box);
    const pp = pet();
    const h1 = el('h1', 'home-h', `Your baby is here!`);
    const intro = el('p', 'c-text', `Your ${oneName(pp)} ${bornWord(pp)}! ${pp.found} Will you take care of it? Give it a name!`);
    const f = el('form', 'name-form');
    const after = [h1, intro, f];
    after.forEach((x) => { x.hidden = true; });
    const rv = revealEl(pp, () => {
      after.forEach((x) => { x.hidden = false; });
      sayList([{ text: `Your baby is here! Your ${oneName(pp)} ${bornWord(pp)}!`, word: false }]);
      setTimeout(() => { try { inp.focus({ preventScroll: true }); } catch (_) {} }, 150);
    });
    box.append(rv, h1, intro);
    const inp = el('input', 'spell-in'); inp.maxLength = 16; inp.placeholder = 'Name'; inp.setAttribute('aria-label', 'Baby animal name'); inp.autocomplete = 'off';
    const sug = el('div', 'sugs');
    pp.sugs.forEach((n) => sug.appendChild(btn('sug', n, () => { inp.value = gtext(n); })));
    const go = btn('big-btn', `That is the name! ${pp.icon}`); go.type = 'submit';
    f.append(inp, sug, go);
    f.addEventListener('submit', (e) => { e.preventDefault(); const v = inp.value.trim().slice(0, 16); if (!v) { inp.focus(); return; } S.chick.name = v; save(); goHome(); });
    box.appendChild(f);
    const back = btn('link-btn', '← Pick a different baby', () => { S.chick.kind = ''; save(); renderName(); }); back.hidden = true; after.push(back); box.appendChild(back);
  }
  /* The hatch / birth reveal: her drawings of the hidden stages play in order (egg, crack, peek, almost out;
     or snuggled up, waking up), then the "Hatched!" / "Born!" card pops in with the girl meeting the baby. Tap = skip. */
  function revealEl(pp, onDone) {
    const born = pp.how === 'born';
    const wrap = el('div', 'reveal ' + (born ? 'born' : 'egg'));
    const hid = el('div', 'reveal-hidden');
    const pic = el('img', 'reveal-img'); pic.src = babyImg(pp.id, pp.pre[0]); pic.alt = ''; hid.appendChild(pic);
    const cap = el('p', 'reveal-cap', born ? 'Shh... someone small is waking up! 💤' : 'Something is wiggling... 🥚');
    wrap.append(hid, cap);
    let done = false; const timers = [];
    const open = () => {
      if (done) return; done = true; timers.forEach(clearTimeout);
      hid.classList.add('out'); cap.classList.add('out'); sound(born ? 'snuggle' : 'hatch');
      setTimeout(() => {
        hid.remove(); cap.remove();
        const card = el('div', 'scene-card');
        const im = el('img', 'scene-img'); im.src = revealOf(pp); im.alt = `Your ${oneName(pp)}`; card.appendChild(im);
        card.appendChild(el('span', 'reveal-badge', born ? 'Born! 💛' : 'Hatched! 🐣'));
        ['✨', '💛', '✨'].forEach((t, i) => { const sp = el('span', 'reveal-spark s' + i, t); card.appendChild(sp); });
        wrap.appendChild(card);
        wrap.appendChild(girlEl('img/girl/' + GIRL.found[pp.id] + '.webp', 'girl-found'));
        wrap.classList.add('open');
        onDone && onDone();
      }, 420);
    };
    pp.pre.slice(1).forEach((st, i) => timers.push(setTimeout(() => { pic.src = babyImg(pp.id, st); cap.textContent = PRE_NAMES[st] + (born ? ' 💤' : ' 🥚'); pic.classList.remove('bump'); void pic.offsetWidth; pic.classList.add('bump'); sound(PRE_SFX[st] || (born ? 'rustle' : 'crack1')); }, 900 * (i + 1))));
    timers.push(setTimeout(open, 900 * pp.pre.length + 300));
    pp.pre.forEach((st) => { const i = new Image(); i.src = babyImg(pp.id, st); });
    const pre2 = new Image(); pre2.src = revealOf(pp);
    wrap.addEventListener('click', open);
    return wrap;
  }
  /* Which babies she can pick right now. Always several choices (repeats allowed once she has raised them all). */
  function nestOptions() {
    const zoo = (S.family || []).concat(S.choosing && S.chick.kind ? [{ kind: S.chick.kind }] : []);
    if (!zoo.length) return { open: BASE_KINDS.slice(), soon: [] };
    const raised = new Set(zoo.map((f) => f.kind));
    let base = BASE_KINDS.filter((k) => !raised.has(k));
    if (base.length < 3) base = base.concat(BASE_KINDS.filter((k) => !base.includes(k))).slice(0, 3); // repeats are fine: a second penguin!
    return { open: base, soon: [] };
  }
  function renderChooser(box) {
    const again = (S.family || []).length > 0 || !!S.choosing;
    const { open, soon } = nestOptions();
    const hd = el('div', 'pick-head'); hd.appendChild(girlEl(again ? 'img/girl/otter_point.webp' : 'img/girl/zoo_explorer_map.webp', 'girl-pick'));
    const ht = el('div', 'pick-txt');
    ht.appendChild(el('h1', 'home-h', again ? 'A new nest! Pick your next baby' : `Pip found ${open.length} baby animals!`));
    ht.appendChild(el('p', 'c-text', (kidName() ? kidName() + ', which' : 'Which') + ' baby animal will you take care of? Tap one!'));
    hd.appendChild(ht); box.appendChild(hd);
    const grid = el('div', 'nests');
    const card = (k, locked) => {
      const pp = PETS[k];
      const b = btn('nest-btn' + (locked ? ' locked' : ''), null, () => {
        if (locked) { toast('This one opens when your first baby is all grown up 🌟'); return; }
        if (grid.classList.contains('picked')) return;
        grid.classList.add('picked'); b.classList.add('chosen'); sound('right');
        if (S.choosing && S.chick.kind && S.chick.name) S.family = (S.family || []).concat([{ name: S.chick.name, kind: S.chick.kind, fish: S.chick.fish, date: Date.now() }]);
        S.choosing = false;
        S.chick = { name: '', kind: k, fish: 0 }; save();
        setTimeout(() => renderName(), 900);
      });
      const art = el('span', 'nest-art');
      const sc = el('img', 'nest-scene' + (pp.scene ? '' : ' cut')); sc.src = sceneOf(pp) || (pp.reveal ? revealOf(pp) : babyImg(k, 'newborn')); sc.alt = ''; art.appendChild(sc);
      b.dataset.kind = k;
      b.append(art, el('span', 'nest-lbl', pp.kind), el('span', 'nest-sub', locked ? '🔒 Coming later' : pp.nest));
      b.setAttribute('aria-label', pp.kind + (locked ? ', coming later' : ''));
      grid.appendChild(b);
    };
    open.forEach((k) => card(k, false));
    soon.forEach((k) => card(k, true));
    box.appendChild(grid);
    if (S.choosing) box.appendChild(btn('link-btn', 'Not now, go back', () => { S.choosing = false; save(); goHome(); }));
  }

  /* ---------------- Start over (grown-ups, v2.7.3) ----------------
     Sue: "One for the whole game, one to switch mail carrier, and one just to reset the section."
     The data model: a week has days (one postcard day = one session). A day has three stops she picks on the map:
     Word lab, Postcard, Fly on. A day in progress lives in S.progress (cards, results, fish, the card she is on);
     a finished day is an entry in S.sessions (its ✅, a sticker, its fish, already fed to her baby).
     "Redo this section" = the stop she is in (or just finished) on the day in progress. "Redo today" = that whole day.
     These take the state as an argument so the tests can check them on a copy. */
  const soFedToCurrent = (st, sess) => !(st.family || []).some((f) => f.date > sess.date); // fish went to a baby now in the zoo? then keep it off the new one
  function soStopPlan(st) {
    const pr = st.progress;
    if (!pr || pr.v !== PLAN_V || !Array.isArray(pr.specs) || !pr.specs.length || (pr.mode && pr.mode !== 'boss')) return null; // Zoo Math / bonus / Italia: not a postcard stop
    const idx = Math.max(0, Math.min(pr.idx || 0, pr.specs.length - 1));
    let j = idx; while (j >= 0 && !(pr.specs[j] && pr.specs[j].stop)) j--; // on the map / feed card: the stop she just finished
    if (j < 0) return null; // still on the first postcard (nothing played yet)
    const id = pr.specs[j].stop;
    let at = j; while (at > 0 && pr.specs[at - 1] && pr.specs[at - 1].stop === id) at--;
    let end = j; while (end < pr.specs.length && pr.specs[end].stop === id) end++;
    const res = pr.res || {};
    let lost;
    if (pr.fishBy) lost = pr.fishBy[id] || 0;
    else { lost = 0; for (let i = at; i < Math.min(end, idx + 1); i++) if (res[i] && !res[i].skipped) lost++; } // a save from before v2.7.3: one per card
    lost = Math.max(0, Math.min(lost, pr.fish || 0));
    return { id, at, end, idx, lost, week: pr.week, day: pr.day, mode: pr.mode || '', fed: !!pr.fed };
  }
  function soRedoStop(st) {
    const plan = soStopPlan(st); if (!plan) return null;
    const pr = st.progress, res = pr.res || (pr.res = {});
    Object.keys(res).forEach((k) => { if (/^\d+$/.test(k) && +k >= plan.at) delete res[k]; }); // nothing after this stop has been played yet
    if (plan.id === 'words') delete res.wcheck;
    // Word-check help cards are added again when she redoes the check, so drop the old ones.
    pr.specs = pr.specs.filter((x, i) => !(i >= plan.at && i < plan.end && x.k === 'decode' && x.help && !x.bonus));
    if (pr.fed) { st.chick.fish = Math.max(0, (st.chick.fish || 0) - (pr.fish || 0)); pr.fed = false; } // already fed: take that helping back, she feeds again at the end
    pr.fish = Math.max(0, (pr.fish || 0) - plan.lost);
    if (pr.fishBy) pr.fishBy[plan.id] = 0;
    pr.idx = plan.at; pr.saved = Date.now();
    return plan;
  }
  function soDayPlan(st, week) {
    const pr = st.progress;
    const live = pr && pr.v === PLAN_V && pr.week === week.id && !pr.mode && week.days.some((d) => d.day === pr.day) ? pr : null; // a Zoo Math / boss / bonus in progress is not "today"
    const normal = (x) => x.week === week.id && typeof x.day === 'number' && !x.bonus;
    let dayId = live ? live.day : null;
    if (dayId == null) { const last = (st.sessions || []).filter(normal).sort((a, b) => b.date - a.date)[0]; if (last) dayId = last.day; }
    if (dayId == null) return null;
    const day = week.days.find((d) => d.day === dayId);
    const sess = (st.sessions || []).filter((x) => normal(x) && x.day === dayId);
    const fedFish = sess.filter((x) => soFedToCurrent(st, x)).reduce((a, x) => a + (x.fish || 0), 0) + (live && live.fed ? (live.fish || 0) : 0);
    const shown = sess.reduce((a, x) => a + (x.fish || 0), 0) + (live ? (live.fish || 0) : 0);
    return { day: dayId, name: day ? day.name : 'Today', live: !!live, done: sess.length, fedFish, fish: shown };
  }
  function soRedoDay(st, week) {
    const plan = soDayPlan(st, week); if (!plan) return null;
    st.chick.fish = Math.max(0, (st.chick.fish || 0) - plan.fedFish);
    st.sessions = (st.sessions || []).filter((x) => !(x.week === week.id && x.day === plan.day && !x.bonus));
    if (plan.live) st.progress = null;
    return plan;
  }
  window.__pipsStartOver = { soStopPlan, soRedoStop, soDayPlan, soRedoDay }; // test hook (pure: works on the state passed in)
  /* "Switch mail carrier": the same picture cards as the first screen (names said out loud), then she names her.
     Progress, the baby and recordings are untouched; afterwards she is back on the home screen (Keep going = same card). */
  let guideSwitch = null;
  function switchGuide() {
    stopVoice();
    guideSwitch = { from: S.guide ? Object.assign({}, S.guide) : null };
    renderGuide.st = { kind: '' };
    const box = $('nameBox'); box.replaceChildren(); box.classList.remove('kid-step');
    nameBack = () => { guideSwitch = null; renderGuide.st = null; stopVoice(); goHome(); };
    renderGuide(box);
    showScreen('screenName');
  }

  /* ---------------- grown-up gate: hold 3 seconds, then a multiplication ---------------- */
  function setupGate() {
    const b = $('btnGrown');
    let t = null;
    const startHold = (e) => { e.preventDefault(); b.classList.add('holding'); t = setTimeout(() => { b.classList.remove('holding'); askMath(); }, 3000); };
    const endHold = () => { clearTimeout(t); b.classList.remove('holding'); };
    b.addEventListener('pointerdown', startHold);
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => b.addEventListener(ev, endHold));
    b.addEventListener('click', (e) => { e.preventDefault(); toast('Grown-ups: press and hold for 3 seconds'); });
    b.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); askMath(); } });
  }
  function askMath() {
    const a = 6 + Math.floor(Math.random() * 4), c = 3 + Math.floor(Math.random() * 7);
    const dlg = $('gate');
    $('gateQ').textContent = `${a} × ${c} = ?`;
    const inp = $('gateIn'); inp.value = '';
    dlg.hidden = false; setTimeout(() => inp.focus(), 50);
    $('gateForm').onsubmit = (e) => { e.preventDefault(); if (parseInt(inp.value, 10) === a * c) { dlg.hidden = true; openParent(); } else { inp.value = ''; $('gateQ').textContent = `Not quite. ${a} × ${c} = ?`; } };
    $('gateCancel').onclick = () => { dlg.hidden = true; };
  }

  /* ---------------- parent area ---------------- */
  async function openParent() {
    const box = $('parentBox'); box.replaceChildren();
    const week = currentWeek();
    const sec = (title) => { const s = el('section', 'pa-sec'); s.appendChild(el('h2', null, title)); box.appendChild(s); return s; };
    box.appendChild(el('p', 'pa-note', '🔒 Everything here stays on this device. No accounts. Nothing is sent anywhere.'));

    const lv = sec('Reading level ("altitude")');
    lv.appendChild(el('p', null, `Current: ${levelLabel(S.level)}${S.levelLock ? ' (locked)' : ''}`));
    lv.appendChild(el('p', 'pa-small', `Ground = this week's district words (${week.school.phonics}). Sky = next week's district words (${week.school.nextPhonics}). Space = 3rd-grade stretch (prefixes, suffixes, long words, figurative language, why/cause-and-effect).`));
    lv.appendChild(el('p', 'pa-small', `Moves up after 3 strong sessions (evidence right on the first try + at least 6 of 7 word cards). Moves down quietly after 2 tricky sessions in a row. Strong sessions at this level so far: ${S.good} of 3. Tricky in a row: ${S.roughStreak}.`));
    const row = el('div', 'pa-row');
    const selL = el('select'); selL.setAttribute('aria-label', 'Set level');
    LEVELS.forEach((l) => { const o = el('option', null, levelLabel(l)); o.value = l; if (l === S.level) o.selected = true; selL.appendChild(o); });
    const lock = el('label', 'pa-check'); const cb = el('input'); cb.type = 'checkbox'; cb.checked = !!S.levelLock; lock.append(cb, ' Lock this level');
    row.append(selL, lock, btn('pa-btn', 'Save level', () => {
      if (selL.value !== S.level) { S.levelLog.push({ date: Date.now(), from: S.level, to: selL.value, why: 'grown-up override' }); S.level = selL.value; S.good = 0; S.roughStreak = 0; }
      S.levelLock = cb.checked; save(); toast('Level saved ✓'); openParent();
    }));
    lv.appendChild(row);
    if (S.levelLog.length) { const ul = el('ul', 'pa-small'); S.levelLog.slice(-6).forEach((l) => ul.appendChild(el('li', null, `${fmtDate(l.date)}: ${LEVEL_INFO[l.from].name} → ${LEVEL_INFO[l.to].name} (${l.why})`))); lv.appendChild(ul); }

    { const ml = sec('Zoo Math level (separate from reading)');
      const cur = LEVELS.includes(S.mathLevel) ? S.mathLevel : 'ground';
      ml.appendChild(el('p', null, `Current: ${LEVEL_INFO[cur].icon} ${LEVEL_INFO[cur].name}${S.mathLock ? ' (locked)' : ''}`));
      ml.appendChild(el('p', 'pa-small', 'Ground = the class topic this week (Topic 2 equal groups, then Topics 3–4 adding within 100). Sky = the next topic. Space = 3rd-grade stretch (× facts, 3-digit adding). Every session starts with 3 easy Topic 1 facts. Moves up after 3 strong sessions (at most 1 of 6 missed on the first try); back after 2 tricky sessions in a row. No timers. Topic dates are estimates.'));
      const mS = S.sessions.filter((x) => x.track === 'math');
      ml.appendChild(el('p', 'pa-small', mS.length ? `Math sessions: ${mS.length}. Last: ${mS[mS.length - 1].dayName} · ${mS[mS.length - 1].mainFirst}/${mS[mS.length - 1].mainTotal} first try · 🔊 Hear-it taps ${mS[mS.length - 1].hearTaps || 0} · typed ${mS[mS.length - 1].typed || 0}.` : 'No math sessions yet.'));
      const r2 = el('div', 'pa-row'); const sm = el('select'); sm.setAttribute('aria-label', 'Set math level');
      LEVELS.forEach((l) => { const o = el('option', null, levelLabel(l)); o.value = l; if (l === cur) o.selected = true; sm.appendChild(o); });
      const lk = el('label', 'pa-check'); const cb2 = el('input'); cb2.type = 'checkbox'; cb2.checked = !!S.mathLock; lk.append(cb2, ' Lock');
      r2.append(sm, lk, btn('pa-btn', 'Save math level', () => { if (sm.value !== cur) { S.levelLog.push({ date: Date.now(), from: cur, to: sm.value, why: 'grown-up override (math)', math: true }); S.mathLevel = sm.value; S.mathGood = 0; S.mathRough = 0; } S.mathLock = cb2.checked; save(); toast('Math level saved ✓'); openParent(); }));
      ml.appendChild(r2);
    }
    const wk = sec(`This week: ${week.title}`);
    wk.appendChild(el('p', 'pa-small', `Spelling: ${week.school.spelling.join(', ')}`));
    wk.appendChild(el('p', 'pa-small', `Heart (high-frequency) words: ${week.school.hf.join(', ')}`));
    wk.appendChild(el('p', 'pa-small', `Next week (Sky preview): ${week.school.nextSpelling.join(', ')}`));
    const tbl = el('table', 'pa-tbl');
    tbl.innerHTML = '<thead><tr><th>Day</th><th>Place</th><th>Level</th><th>Words 1st try</th><th>Evidence</th><th>Advisor</th><th>Pictures</th><th>Help / skipped</th><th>When</th></tr></thead>';
    const tb = el('tbody');
    const ds = dayStatus(week);
    week.days.forEach((d0) => {
      const s = ds[d0.day]; const tr = el('tr');
      const d = (s && s.alt && d0.alt) ? d0.alt : shownDay(d0);
      const cells = s ? [d.name, d.place, LEVEL_INFO[s.level].icon + ' ' + LEVEL_INFO[s.level].name, `${s.wordFirst}/${s.wordTotal}`, s.evidence ? '✅ 1st try' : '🔁 retry', s.advisor ? '✅' : '🔁', `${s.checksFirst}/${s.checksTotal}`, `${s.helped || 0} / ${s.skipped || 0}`, `${fmtDate(s.date)} · ${s.mins} min${s.cards ? ' · ' + s.cards + ' cards' : ''}`]
        : [d.name, d.place, '·', '·', '·', '·', '·', '·', 'not yet'];
      cells.forEach((c) => tr.appendChild(el('td', null, c)));
      tb.appendChild(tr);
    });
    tbl.appendChild(tb); wk.appendChild(tbl);

    const ft = sec('First-try results by card type (all sessions)');
    const agg = {};
    S.sessions.forEach((s) => Object.entries(s.byType || {}).forEach(([t, [a, b]]) => { agg[t] = agg[t] || [0, 0]; agg[t][0] += a; agg[t][1] += b; }));
    if (!Object.keys(agg).length) ft.appendChild(el('p', 'pa-small', 'No sessions yet.'));
    const ul = el('ul', 'pa-bars');
    Object.keys(TYPE_NAMES).forEach((t) => {
      if (!agg[t]) return; const [a, b] = agg[t]; const pct = Math.round((a / b) * 100);
      const li = el('li'); li.append(el('span', 'pa-bl', TYPE_NAMES[t]), (() => { const bar = el('span', 'pa-bar'); const f = el('i'); f.style.width = pct + '%'; bar.appendChild(f); return bar; })(), el('span', 'pa-bn', `${a}/${b}`));
      ul.appendChild(li);
    });
    ft.appendChild(ul);

    const mw = sec('Missed words (they come back 2 sessions later)');
    if (!S.review.length) mw.appendChild(el('p', 'pa-small', 'None waiting. 🎉'));
    S.review.forEach((r) => { const p = el('p', 'pa-word'); p.append(wordEl(r.split || r.w), el('span', 'pa-small', `  from ${r.from || ''} · ${r.due <= S.sessionsDone ? 'comes back next session' : 'comes back in ' + (r.due - S.sessionsDone) + ' session(s)'}`)); mw.appendChild(p); });
    const allMissed = [...new Set(S.sessions.flatMap((s) => s.missed || []))];
    if (allMissed.length) mw.appendChild(el('p', 'pa-small', 'All words missed at least once: ' + allMissed.join(', ')));

    const wc = sec('Word practice (this week)');
    wc.appendChild(el('p', 'pa-small', 'Watch me → Your turn: the guide shows each word big and says it once; she says it out loud (you listen; nothing is recorded or scored). One tap (Next or swipe up) moves on. Every 3 words an earlier word comes back without audio so she reads it herself. "Help me" (only if she taps it) says it slowly, lights the tricky part with a mouth cue, and says it again. Words she asked for help with come back next session.'));
    const wmap = Object.entries(S.words || {}).filter(([, m]) => m.week === week.id && m.practiced);
    wc.appendChild(el('p', null, '🗣️ Practiced: ' + (wmap.map(([w, m]) => `${w} ×${m.practiced}`).join(', ') || '—')));
    const hw = wmap.filter(([, m]) => m.help).sort((a, b) => b[1].help - a[1].help);
    wc.appendChild(el('p', null, '🙋 Asked for help: ' + (hw.map(([w, m]) => `${w} (${m.help}×)`).join(', ') || '—')));
    const wkS = S.sessions.filter((x) => x.week === week.id);
    wc.appendChild(el('p', 'pa-small', `🙋 Help button taps (all time): ${S.helpTaps || 0} · answers shown by the guide after 2 misses this week: ${wkS.reduce((a, x) => a + (x.helped || 0), 0)} · cards skipped this week: ${wkS.reduce((a, x) => a + (x.skipped || 0), 0)}.`));
    const ta = sec('Reading practice: words to practice again');
    ta.appendChild(el('p', 'pa-small', 'Help words she has not read on the first try yet come back in later sessions until she gets them right twice. Her word recordings (if she taps 🎙️) are in Recordings below.'));
    const tw = Object.values(S.tryAgain || {}).sort((a, b) => b.n - a.n);
    if (!tw.length) ta.appendChild(el('p', 'pa-small', 'None right now. 🎉'));
    tw.forEach((t) => { const p = el('p', 'pa-word'); p.append(wordEl(t.split || t.w), el('span', 'pa-small', `  missed ${t.n}× · from ${t.from || ''} · last ${fmtDate(t.last)}`)); ta.appendChild(p); });

    const sl = sec('Spelling: sounds she hears differently');
    sl.appendChild(el('p', 'pa-small', 'When a typed word matches a sound swap (like "dat" for "that"), she sees "You wrote what you heard!" with a mouth cue. Counts:'));
    const logs = S.soundLog || []; const weekAgo = Date.now() - 7 * 864e5;
    if (!logs.length) sl.appendChild(el('p', 'pa-small', 'None logged yet.'));
    const byL = {}; logs.forEach((x) => { (byL[x.label] = byL[x.label] || []).push(x); });
    Object.entries(byL).sort((a, b) => b[1].length - a[1].length).forEach(([lab, l]) => {
      const wk = l.filter((x) => x.date >= weekAgo).length;
      sl.appendChild(el('p', 'pa-small', `• ${lab}: ${wk} time${wk === 1 ? '' : 's'} this week (${l.length} total). Examples: ${l.slice(-4).map((x) => `${x.w} → "${x.typed}"`).join(', ')}`));
    });

    const rp = sec('R practice (listening only)');
    rp.appendChild(el('p', 'pa-small', 'The app never scores or judges how she says R. She listens (R vs W pictures) and catches the guide\'s silly R mistakes. The optional "Say it and save it" recordings are in Recordings below, to share with her speech therapist if you like.'));
    const rrow = el('label', 'pa-row pa-check'); const rc0 = el('input'); rc0.type = 'checkbox'; rc0.checked = S.rOn !== false;
    rc0.addEventListener('change', () => { S.rOn = rc0.checked; save(); toast(rc0.checked ? 'R cards on ✓' : 'R cards off ✓'); });
    rrow.append(rc0, document.createTextNode(' Show R cards (about 2 per session)')); rp.appendChild(rrow);
    rp.appendChild(el('p', 'pa-small', 'R practice words (one per line: word, then an optional emoji picture, e.g. "rabbit 🐰"). Paste the therapist\'s target words here: initial R, vocalic R (-er, -ar, -or), R blends. Leave empty to use the built-in list.'));
    const rta = el('textarea', 'pa-ta'); rta.rows = 6; rta.value = (S.rWords || []).map((x) => x.w + (x.pic ? ' ' + x.pic : '')).join('\n'); rta.placeholder = rWordList().map((x) => x.w + ' ' + (x.pic || '')).join('\n');
    rp.append(rta, btn('pa-btn', 'Save R words', () => {
      const lines = rta.value.split(/\n+/).map((l) => l.trim()).filter(Boolean);
      S.rWords = lines.map((l) => { const m = l.match(/^([A-Za-z' -]+?)\s*([^A-Za-z' -].*)?$/); return m ? { w: m[1].trim().toLowerCase(), pic: (m[2] || '').trim() || '🔴' } : null; }).filter((x) => x && /r/i.test(x.w));
      if (!S.rWords.length) S.rWords = null; save(); toast('R words saved ✓'); openParent();
    }));

    const rc = sec('Recordings (saved only on this device)');
    let recs = [];
    try { recs = await recAll(); } catch (_) { rc.appendChild(el('p', 'pa-small', 'Recordings are not available in this browser.')); }
    if (!recs.length) rc.appendChild(el('p', 'pa-small', 'No recordings yet.'));
    const byDay = {};
    recs.sort((a, b) => b.date - a.date).forEach((r) => { const k = new Date(r.date).toDateString(); (byDay[k] = byDay[k] || []).push(r); });
    const KIND = { first: 'Take 1 (first read)', best: 'Take 2 (best read)', reply: 'Reply to the guide', radio: 'Radio show', word: 'Word practice', rwords: 'R words (say it and save it)' };
    Object.entries(byDay).forEach(([k, list]) => {
      rc.appendChild(el('h3', null, fmtDate(list[0].date)));
      list.forEach((r) => {
        const d = el('div', 'pa-rec');
        d.append(el('span', 'pa-small', `${fmtTime(r.date)} · ${r.dayName || ''} ${r.level ? LEVEL_INFO[r.level].name : ''} · ${KIND[r.kind] || r.kind}${r.word ? ': ' + r.word : ''}${r.kind === 'rwords' ? ' (' + (r.title || '') + ')' : ''} · ${r.dur || '?'}s`), audioFor(r),
          btn('pa-btn ghost', '🗑️', async () => { if (confirm('Delete this recording?')) { await recDel(r.id); openParent(); } }));
        rc.appendChild(d);
      });
    });

    const st = sec('Settings');
    const grow = el('div', 'pa-row'); const gsel = el('select'); gsel.setAttribute('aria-label', 'Guide animal');
    GUIDES.order.forEach((k) => { const o = el('option', null, GUIDES.kinds[k].label); o.value = k; if (S.guide && S.guide.kind === k) o.selected = true; gsel.appendChild(o); });
    const gname = el('input'); gname.value = (S.guide && S.guide.name) || ''; gname.maxLength = 16; gname.setAttribute('aria-label', 'Guide name');
    const gth = el('img', 'pa-guide-thumb'); gth.src = (GUIDES.kinds[(S.guide && S.guide.kind) || 'pigeon'] || {}).img || ''; gth.alt = '';
    gsel.addEventListener('change', () => { gth.src = (GUIDES.kinds[gsel.value] || {}).img || ''; });
    grow.append(gth, el('span', 'pa-small', 'Guide (she/her):'), gsel, gname, btn('pa-btn', 'Save guide', () => { const n = gname.value.trim(); if (!n) return; S.guide = { kind: gsel.value, name: n }; save(); toast('Guide saved ✓'); openParent(); }));
    st.appendChild(grow);
    const irow = el('label', 'pa-row pa-check'); const ic = el('input'); ic.type = 'checkbox'; ic.checked = S.italiaOn !== false;
    ic.addEventListener('change', () => { S.italiaOn = ic.checked; save(); toast(ic.checked ? 'Italian bonus on ✓' : 'Italian bonus off ✓'); });
    irow.append(ic, document.createTextNode(' Italian bonus postcard (one per week, unlocks after Friday, optional)')); st.appendChild(irow);
    const xrow = el('label', 'pa-row pa-check'); const xc = el('input'); xc.type = 'checkbox'; xc.checked = S.sfxOn !== false; xc.id = 'paSfx';
    xc.addEventListener('change', () => { S.sfxOn = xc.checked; save(); toast(xc.checked ? 'Sound effects on ✓' : 'Sound effects off ✓'); if (xc.checked) sound('plink'); });
    xrow.append(xc, document.createTextNode(' Sound effects (soft taps, egg cracks, chimes; the 🔊 button and mute still apply)')); st.appendChild(xrow);
    const crow = el('label', 'pa-row pa-check'); const cc = el('input'); cc.type = 'checkbox'; cc.checked = !!S.capsAlways; cc.id = 'paCaps';
    cc.addEventListener('change', () => { S.capsAlways = cc.checked; save(); capsRefresh(); toast(cc.checked ? 'Guide captions always on ✓' : 'Guide captions only when the sound is off ✓'); });
    crow.append(cc, document.createTextNode(" Always show what the guide says (captions in her speech bubble even when the sound is on). Postcards, words, questions and answers are always written.")); st.appendChild(crow);
    const nrow = el('div', 'pa-row'); const nin = el('input'); nin.value = S.chick.name; nin.maxLength = 16; nin.setAttribute('aria-label', 'Baby animal name');
    nrow.append(nin, btn('pa-btn', 'Rename', () => { if (nin.value.trim()) { S.chick.name = nin.value.trim(); save(); toast('Saved ✓'); } }));
    st.appendChild(nrow);
    const kprow = el('div', 'pa-row'); const kin = el('input'); kin.value = S.kid || ''; kin.maxLength = 16; kin.setAttribute('aria-label', "Child's first name"); kin.placeholder = 'First name (optional)';
    kprow.append(el('span', 'pa-small', 'Her name (zoo sign):'), kin, btn('pa-btn', 'Save', () => { S.kid = kin.value.trim().slice(0, 16); save(); toast('Saved ✓'); }));
    st.appendChild(kprow);
    const krow = el('div', 'pa-row'); const ks = el('select'); ks.setAttribute('aria-label', 'Baby animal');
    PET_KINDS.forEach((k) => { const o = el('option', null, PETS[k].icon + ' ' + PETS[k].kind); o.value = k; if (k === pet().id) o.selected = true; ks.appendChild(o); });
    krow.append(ks, btn('pa-btn', 'Switch animal (keeps growth)', () => { S.chick.kind = ks.value; save(); toast('Switched ✓'); }));
    st.appendChild(krow);
    if ((S.family || []).length) st.appendChild(el('p', 'pa-note', 'In the zoo (safe forever): ' + S.family.map((f) => `${PETS[f.kind] ? PETS[f.kind].icon : ''} ${f.name}`).join(', ')));
    if (weekList().length > 1) {
      const wrow = el('div', 'pa-row'); const ws = el('select');
      { const o = el('option', null, '📅 Auto (follows the school calendar)'); o.value = ''; if (!S.weekId) o.selected = true; ws.appendChild(o); }
      weekList().forEach((id) => { const W0 = window.PIP_WEEKS[id]; const o = el('option', null, `${W0.title}${W0.dates ? ' · from ' + W0.dates.start.slice(5).replace('-', '/') : ''}`); o.value = id; if (S.weekId && id === week.id) o.selected = true; ws.appendChild(o); });
      wrow.append(ws, btn('pa-btn', 'Use this week', () => { S.weekId = ws.value || null; S.progress = null; save(); toast(S.weekId ? 'Week changed ✓' : 'Week follows the calendar ✓'); openParent(); }));
      st.appendChild(wrow);
    }
    st.appendChild(el('p', 'pa-small', 'To let her pick a new mail carrier herself (picture cards), use Start over below.'));

    /* v2.7.3 Start over: switch mail carrier / redo this section (a stop) or today / reset the whole game. */
    const so = sec('Start over'); so.id = 'paStartOver'; so.classList.add('so-sec');
    const pp = pet(), food = pp.food, foodName = pp.foodName;
    const item = (label, cls, fn, note, off) => { const d = el('div', 'so-item'); const b = btn('pa-btn so-btn ' + cls, label, fn); b.disabled = !!off; d.append(b, el('p', 'pa-small so-note', note)); so.appendChild(d); return b; };
    item('🔄 Switch mail carrier', 'so-guide', () => switchGuide(),
      `She picks a new mail carrier friend on the picture cards (names are said out loud) and names her. Now: ${G().name}. Keeps: all progress, ${chickName()}, recordings. Then back to the home screen, where she left off.`);
    const stp = soStopPlan(S), stpDay = stp ? (week.days.find((d) => d.day === stp.day) || {}).name || '' : '';
    const stpOk = !!(stp && stp.week === week.id);
    const stopName = stpOk ? (stp.mode === 'boss' ? 'Boss postcard' : STOPS[stp.id][1]) : '';
    item(stpOk ? `↩️ Redo this section: ${STOPS[stp.id][0]} ${stopName} (${stpDay})` : '↩️ Redo this section', 'so-stop', () => {
      if (!confirm(`Redo ${stopName} on ${stpDay}? The cards she did in it and the ${stp.lost} ${foodName} she earned there are cleared, and she starts it again from its first card.`)) return;
      soRedoStop(S); save(); toast(`${stopName} starts fresh ✓`); goHome();
    }, stpOk ? `A section is one stop of a day (Word lab, Postcard, Fly on). Erases: this stop's cards and answers, the ${stp.lost} ${food} she earned in it, and her place in it (she restarts at its first card). Keeps: her other stops today, other days, ${chickName()}'s growth, the week, recordings.`
      : `A section is one stop of a day (Word lab, Postcard, Fly on). Nothing is in progress right now, so there is no section to redo. To replay a finished day, use Redo today.`, !stpOk);
    const dp = soDayPlan(S, week);
    item(dp ? `📅 Redo today: ${dp.name}` : '📅 Redo today', 'so-day', () => {
      if (!confirm(`Redo ${dp.name}? All of ${dp.name} is cleared (${dp.done ? 'its ✅ and sticker, ' : ''}the ${dp.fish} ${foodName} earned in it), and she plays it again from the start.`)) return;
      soRedoDay(S, week); save(); toast(`${dp.name} starts fresh ✓`); goHome();
    }, dp ? `Erases: all of ${dp.name}${dp.live ? ' so far (in progress)' : ''}: ${[dp.live ? 'every stop she has done' : 'its stops', dp.done ? `its ✅ and sticker${dp.done > 1 ? ` (${dp.done} plays)` : ''}` : '', `the ${dp.fish} ${food} earned in it`].filter(Boolean).join(', ')}. Keeps: other days, ${chickName()}'s growth from other days, the week, the reading level, recordings, the boss postcard.`
      : 'Nothing played this week yet.', !dp);
    item('⚠️ Reset the whole game', 'danger so-all', async () => {
      if (!confirm('Erase all progress, the baby animal, and all recordings on this device?')) return;
      if (!confirm('Are you sure? This cannot be undone.')) return;
      try { await recClear(); } catch (_) {}
      S = fresh(); save(); renderName(); showScreen('screenName');
    }, `Erases everything on this device: progress, ${chickName()} and the zoo, the mail carrier, her name, settings and all recordings. Starts at the very first screen. Asks twice.`);
    showScreen('screenParent');
    $('screenParent').scrollTop = 0;
  }

  /* Screen: Light (default) / Dim (warm, softer contrast) / Dark (dark background, light text). Art is only dimmed a little. */
  function applyTheme() {
    const t = ['dim', 'dark'].includes(S.theme) ? S.theme : 'light', r = document.documentElement;
    ['light', 'dim', 'dark'].forEach((x) => r.classList.toggle('theme-' + x, x === t));
    const m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute('content', { light: '#fbeed6', dim: '#e3d5b8', dark: '#171b26' }[t]);
  }
  applyTheme();
  /* ---------------- start up ---------------- */
  function init() {
    $('feed').addEventListener('scroll', onFeedScroll, { passive: true });
    // Sound effects: unlock audio on the first touch (iPad Safari), a soft tap on every button, quiet key ticks.
    ['pointerdown', 'touchend', 'keydown'].forEach((ev) => document.addEventListener(ev, sfxUnlock, { capture: true, passive: true }));
    document.addEventListener('click', (e) => { const b = e.target && e.target.closest && e.target.closest('button, summary'); if (b && !b.disabled && b.id !== 'btnGrown') sound('tap'); }, true);
    document.addEventListener('input', (e) => { const t = e.target; if (t && t.tagName === 'INPUT' && (t.type === 'text' || !t.type) && e.inputType !== 'deleteContentBackward') sound('key'); }, true);
    sfxFetch();
    $('btnNext').addEventListener('click', goNext);
    $('btnPrev').addEventListener('click', goPrev);
    $('btnHome').addEventListener('click', goHome);
    $('btnBack').addEventListener('click', goBack);
    $('btnPause').addEventListener('click', pauseOpen);
    $('pauseGo').addEventListener('click', pauseClose);
    $('pauseQuit').addEventListener('click', () => { saveProgress(); pauseClose(); goHome(); });
    $('btnHelp').addEventListener('click', helpNow);
    // ⏹ Stop: shows only while the voice is talking; same button on every screen.
    $('btnStop').addEventListener('click', () => { stopVoice(); $('btnStop').hidden = true; });
    setInterval(() => { const on = voiceActive(); if ($('btnStop').hidden === on) $('btnStop').hidden = !on; sfxDuck(); }, 250);
    // Quick settings (the 🔊 button, easy for her to reach): volume Off / Soft / Normal / Loud and screen Light / Dim / Dark.
    const volIcon = () => { const l = volLevel(); $('muteIcon').textContent = { off: '🔇', soft: '🔈', normal: '🔉', loud: '🔊' }[l]; $('btnMute').setAttribute('aria-pressed', String(!!S.muted)); $('btnMute').setAttribute('aria-label', `Sound and screen settings. Sound is ${l}.`); };
    const qs = el('div', 'quick'); qs.id = 'quick'; qs.hidden = true; qs.setAttribute('role', 'dialog'); qs.setAttribute('aria-label', 'Sound and screen');
    const qb = el('div', 'quick-box'); qs.appendChild(qb);
    const seg = (title, items, cur, onPick) => {
      qb.appendChild(el('p', 'quick-h', title)); const row = el('div', 'seg');
      items.forEach(([id, ic, lbl]) => { const b = btn('seg-btn' + (id === cur() ? ' on' : ''), null, () => { onPick(id); row.querySelectorAll('.seg-btn').forEach((x) => x.classList.toggle('on', x.dataset.id === cur())); }); b.dataset.id = id; b.append(el('span', 'seg-ic', ic), el('span', 'seg-lbl', lbl)); b.setAttribute('aria-label', lbl); row.appendChild(b); });
      qb.appendChild(row);
    };
    seg('Sound', [['off', '🔇', 'Off'], ['soft', '🔈', 'Soft'], ['normal', '🔉', 'Normal'], ['loud', '🔊', 'Loud']], volLevel, (id) => {
      if (id === 'off') { S.muted = true; stopVoice(); } else { S.muted = false; S.vol = VOL_LEVELS[id]; }
      save(); volIcon(); capsRefresh(); if (id !== 'off') { sfxUnlock(); sound('plink'); }
    });
    seg('Screen', [['light', '☀️', 'Light'], ['dim', '🌤️', 'Dim'], ['dark', '🌙', 'Dark']], () => S.theme || 'light', (id) => { S.theme = id; save(); applyTheme(); });
    qb.appendChild(btn('big-btn quick-done', 'Done ✓', () => { qs.hidden = true; }));
    qs.addEventListener('click', (e) => { if (e.target === qs) qs.hidden = true; });
    $('app').appendChild(qs);
    $('btnMute').addEventListener('click', () => { qs.hidden = !qs.hidden; });
    volIcon();
    document.addEventListener('keydown', (e) => {
      if (!$('screenPlay').classList.contains('active')) return;
      const tag = (e.target && e.target.tagName) || '';
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (['ArrowDown', 'ArrowRight', 'PageDown'].includes(e.key)) { e.preventDefault(); goNext(); }
      else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); goPrev(); }
    });
    // Sideways swipes also work (handy in landscape on an iPad): swipe left = next, swipe right = back.
    let t0 = null;
    $('feed').addEventListener('touchstart', (e) => { const t = e.touches[0]; t0 = e.touches.length === 1 ? { x: t.clientX, y: t.clientY, at: Date.now() } : null; }, { passive: true });
    $('feed').addEventListener('touchend', (e) => {
      if (!t0) return; const t = e.changedTouches[0]; const dx = t.clientX - t0.x, dy = t.clientY - t0.y; const quick = Date.now() - t0.at < 700; t0 = null;
      if (quick && Math.abs(dx) > 60 && Math.abs(dx) > 1.6 * Math.abs(dy)) { if (dx < 0) goNext(); else goPrev(); }
      else if (quick && dy < -60 && Math.abs(dy) > 1.4 * Math.abs(dx) && !P.cards[P.idx + 1]) goNext(); // swipe up on the newest card: move on (skips if not done)
    }, { passive: true });
    let wheelT = 0;
    $('feed').addEventListener('wheel', (e) => { if (e.deltaY > 40 && !P.cards[P.idx + 1] && Date.now() - wheelT > 900) { wheelT = Date.now(); goNext(); } }, { passive: true });
    const wideQ = window.matchMedia('(orientation: landscape) and (min-width: 700px)');
    const hintText = () => { $('swipeHint').textContent = wideQ.matches ? 'swipe ↑ or ←  ·  arrow keys work too' : 'swipe up ↑'; };
    hintText(); if (wideQ.addEventListener) wideQ.addEventListener('change', hintText);
    let resizeT = null;
    window.addEventListener('resize', () => { clearTimeout(resizeT); resizeT = setTimeout(() => { if ($('screenPlay').classList.contains('active')) scrollToIndex(P.idx, false); document.querySelectorAll('.pip-wrap').forEach((w) => w.fit && w.fit()); }, 150); });
    setupGate();
    if (!S.guide || !S.chick.name) { renderName(); showScreen('screenName'); } else goHome();
    refreshThenNow();
    if (S.guide) setTimeout(warmPoses, 4000);
    // Warm the offline cache with the word audio (small files) once per version, a few at a time.
    setTimeout(async () => {
      const wid = (() => { try { return ':' + currentWeek().id; } catch (_) { return ''; } })();
      if (!navigator.onLine || localStorage.getItem('pipsAudioWarm') === 'v2.8.1' + wid) return;
      // v2.8: five weeks of clips (~21 MB) would be a lot to fetch at once, so warm this week's words (+ names and other
      // words no week uses); another week's clips are fetched when it starts (and cached as they play).
      let list;
      try {
        const txt = (w) => JSON.stringify(w || {}).toLowerCase(), cur = txt(currentWeek()), all = Object.values(window.PIP_WEEKS || {}).map(txt);
        list = [...new Set(Object.keys(AUD).filter((k) => { const b = k.replace(/^slow:/, ''); return cur.includes(b) || !all.some((t) => t.includes(b)); }).map((k) => AUD[k]))];
      } catch (_) { list = [...new Set(Object.values(AUD))]; }
      for (let i = 0; i < list.length; i += 6) { try { await Promise.all(list.slice(i, i + 6).map((u) => fetch(u).catch(() => {}))); } catch (_) {} }
      try { localStorage.setItem('pipsAudioWarm', 'v2.8.1' + wid); } catch (_) {}   // per version AND week: a new week warms its own clips
    }, 8000);
    if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});
  }
  // Small hook for automated tests (no effect on the child's experience).
  /* test hook (tests/audiofix_webkit.py): show one card spec in the running session, e.g. { k: 'sortone', n: 1 } */
  function testCard(spec) { clearTimeout(advanceTimer); stopVoice(); P.specs = [spec, { k: 'feed' }]; P.cards = []; P.res = {}; $('feed').replaceChildren(); renderDots(); appendCard(0, false); P.idx = -1; scrollToIndex(0, false); }
  window.PipApp = { currentWeek, startMath, mathWeek, testCard, sayItems: (items) => sayList(items), sayAfter, voiceBusy, voicePath, stopVoice, skipCard: () => skipCard(P.cards[P.idx]), goNext, helpNow, pauseOpen, goBack, startSession, get words() { return S.words; }, soundAlike, linePlan, sound, sfx, fillName, capsRefresh, applyTheme, volLevel, say: (t) => sayList([t]), get state() { return S; }, scoreSession, applyLevelRules, save, reload: () => { load(); }, goHome, openParent, get P() { return P; }, get posLog() { return POS_LOG; },
    /* test hooks: build a card off-screen (answer-position test) */
    _stop: (id) => stopSpecs(id), _plan: (first, left) => planAfterMap(first, left),
    _specs: () => { const V = W_().vocab || {}, w = Object.keys(V)[0]; return [].concat(stopSpecs('words'), stopSpecs('postcard'), stopSpecs('fly'), bonusSpecs(P.week, P.day, P.L), QUICK_GAMES.map((k, n) => ({ k, n })), [0, 1, 2].map((n) => ({ k: 'type', n })), W_().italia ? [{ k: 'italia' }] : [], w ? [{ k: 'decode', v: Object.assign({ w }, V[w]) }, { k: 'confirm', w }] : []).filter((x) => BUILD[x.k]); },
    _probe: (spec, show) => { const card = { i: P.idx, spec, done: false, el: null }; const sec = el('section', 'card card-' + spec.k); card.el = sec; const prev = BUILDING; BUILDING = card; try { BUILD[spec.k](card, sec); } finally { BUILDING = prev; } BUILDING = card; try { if (show && card.onShow) card.onShow(); if (spec.k === 'type') { const inp = sec.querySelector('.type-in'); inp.value = card.answer; inp.dispatchEvent(new Event('input')); } } catch (_) {} finally { BUILDING = prev; } return { k: spec.k, opts: sec.querySelectorAll('.opt, .evi-s').length, card }; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
