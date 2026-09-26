/* Pip's Postcards · Unit 1 Week 3 · Plants and Animals in Their Habitats  (live from v2.8)
   School week: Mon Sep 28 – Fri Oct 2, 2026 (confirmed by Sue, 2026-09-26).
   Schema = site/weeks/u1w2.js.
   Authoring rules (same as u1w2.js):
   - In EVERY option list, write the correct answer FIRST. The app shuffles them.
   - Evidence answers ("a") are a short piece of text that appears in exactly ONE sentence of the postcard.
   - Word markup: "|" splits syllables (nap|kin), [ ] highlights the pattern letters (m[ai]l).
   - Only these baby Zoo animals appear this week: puffin (Mon), sea otter (Tue), fennec fox (Wed),
     pigeon (Thu), sea turtle (Fri). Thursday's postcard is a POEM (the district "introduces poetry" this week).
   - "scene" images do not exist yet: each day has a sceneBrief for the artist (see integration-notes.md).
   District source: 1-Grade2-ELA.txt, Unit 1 "Plants and Animals in Their Habitats", LEARNING ACTIVITIES Week 3
   and KEY WORDS/VOCABULARY Week 3 column. Sky previews Unit 2 Week 1. All passages are original. */
(window.PIP_WEEKS = window.PIP_WEEKS || {})['u1w3'] = {
  id: 'u1w3',
  unit: 1, week: 3,
  title: 'Habitats · Week 3',
  unitTitle: 'Plants and Animals in Their Habitats',
  dates: { start: '2026-09-28', end: '2026-10-02' },
  school: {
    /* SWAP IN THE TEACHER'S LIST: she sends her own (easier) weekly list. Replace `spelling` (and the matching
       W.typeWords.ground words below) with her sheet when it comes home. District list shown here. */
    spelling: ['April', 'play', 'blame', 'stay', 'cake', 'mail', 'chain', 'paint', 'break', 'great'],
    hf: ['he', 'like', 'little', 'no', 'of', 'saw', 'this', 'to', 'we', 'with'],
    phonics: 'Long a (ai, ay, a_e; sneaky ea in break and great)',
    nextSpelling: ['float', 'toe', 'roast', 'broke', 'globe', 'going', 'both', 'grow', 'bowl', 'throw'],
    nextHf: ['here', 'look', 'me', 'play', 'said', 'see', 'she', 'try', 'about', 'because'],
    nextPhonics: 'Long o (oa, oe, o_e, ow; o in both and going)',
    comprehension: 'Create mental images · context clues for words and phrases · recount stories · story structure · poetry (introduced)'
  },
  levels: {
    ground: { focus: 'This week: long a (ai, ay, a_e, break/great)' },
    sky: { focus: 'Next week: long o (oa, oe, o_e, ow) mixed with this week' },
    space: { focus: '3rd-grade stretch: long words, endings -ment, -able, -tion ("endings that change the word"), words that compare, why things happen. No grammar terms on her cards (v2.8.1).' }
  },
  days: [
  /* ======================= MONDAY ======================= */
  {
    day: 1, name: 'Monday', place: 'Gulf of Maine', flag: '🇺🇸', scene: 'img/u1w3_mon_puffins.webp',
    sceneBrief: 'Gray-blue open ocean off Maine in fall. A few Atlantic puffins bob on the waves, bills duller orange (winter look). A small rocky island far behind, empty. Pip flying above with a mail bag.',
    qtype: 'Key details & main topic', atype: 'Pip made a mistake',
    arrive: 'Pip flew far out over the sea near Maine!',
    wiggle: { emoji: '🐦', text: 'Flap like a puffin, super fast! 10 flaps!', sub: 'Puffins flap their wings about 400 times a minute. Go, go, go!' },
    route: {
      q: 'Help me pick! Tomorrow I visit sea otters in a kelp forest. How should I get there?',
      opts: [
        { pic: '🚤', label: 'Ride on a boat', echo: 'I rode on a boat, like you said. A seal waved at me! 🦭' },
        { pic: '🌬️', label: 'Ride the sea wind', echo: 'I rode the sea wind, like you said. Whoosh, all the way to California! 🌬️' }
      ]
    },
    ps: 'P.S. Would you rather nap on the waves like a puffin or in a cozy bed? Why?',
    levels: {
      ground: {
        title: 'Where Did the Puffins Go?',
        targets: ['today', 'came', 'gray', 'waves', 'stay', 'take', 'chase', 'paint', 'gate', 'saw', 'little', 'like'],
        model: {
          title: 'Long a: three ways',
          lines: ['ai in the middle (rain), ay at the end (play), a_e with magic e (cake).', 'They all say /ā/, the name of the letter a!'],
          ex: [{ w: 'm[ai]l', tag: 'ai' }, { w: 'pl[ay]', tag: 'ay' }, { w: 'c[a]k[e]', tag: 'a_e' }, { w: 'w[a]v[e]s', tag: 'a_e' }]
        },
        sort: { a: 'ai or ay 🟡', b: 'a_e 🪄', items: [['mail', 'a'], ['cake', 'b'], ['stay', 'a'], ['blame', 'b']], hint: 'Is there a magic e at the very end? Then it is a_e.', split: { mail: 'm[ai]l', cake: 'c[a]k[e]', stay: 'st[ay]', blame: 'bl[a]m[e]' } },
        build: { w: 'A|pril', tiles: ['A', 'pril', 'pail'], pic: '🌷', clue: 'The month after March.' },
        pick: { w: 'paint', opts: ['paint', 'pante', 'paynt'], pic: '🎨', clue: 'You use it to color a gate.', split: 'p[ai]nt' },
        hear: { w: 'stay', opts: ['stay', 'stai', 'stae'], pic: '🏠', clue: 'Remain in one place.', split: 'st[ay]' },
        rebel: { words: ['of', 'cake', 'gate', 'wave'], why: '"of" breaks the rule! It sounds like "uv." Cake, gate and wave all have a magic e.' },
        chunks: [
          { s: ['Today I flew far out over the sea near Maine.', 'I came to see puffins, but their rocky island was empty!'], pic: '🏝️', focus: '70% 40%', check: ['🐦🌊🏝️', '🐦🏜️🌵', '🐦🎂🎉'] },
          { s: ['Then I saw a little gray and white bird on the waves.', 'It was a puffin!', 'In the fall, puffins stay out at sea.'], pic: '🌊', focus: '40% 70%', check: ['🐦🌊', '🐦🌳', '🐦🏠'] },
          { s: ['They take naps on the water and bob like little boats.', 'A puffin can dive down and chase fish with its wings.'], pic: '🐟', focus: '50% 85%', check: ['🐦⬇️🐟', '🐦🍕', '🐦🚗'] },
          { s: ['In the fall, its big bill is not as bright.', 'It fades, like old paint on a gate.', 'In spring, the bill gets bright again, and the puffins fly home to the island.'], pic: '🎨', focus: '55% 55%', check: ['🎨➡️🌫️', '🐦👑', '🐦🧦'] }
        ],
        question: { q: 'Where do puffins stay in the fall? Tap the sentence that tells me.', a: 'puffins stay out at sea', mishap: 'Oops! I looked for puffins in their burrows. Nobody home! 🕳️ Try again!' },
        advisor: { type: 'mistake', pip: 'A puffin\'s bill stays bright all year.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'not as bright', mishap: 'Hmm, that sentence does not tell about the bill. Try another, advisor!' },
        fill: { kind: 'word', sent: 'It fades, like old ___ on a gate.', opts: ['paint', 'pain', 'plate'] },
        spell: { w: 'stay', sent: 'In the fall, puffins ___ out at sea.', split: 'st[ay]', pic: '🌊' }
      },
      sky: {
        title: 'Puffins Float Out at Sea',
        targets: ['float', 'going', 'both', 'grow', 'boat', 'below', 'home', 'alone', 'slow', 'rows', 'gray', 'waves'],
        model: {
          title: 'Long o: oa and ow',
          lines: ['oa is often in the middle (boat). ow is often at the end (grow).', 'Both teams say /ō/, the name of the letter o!'],
          ex: [{ w: 'fl[oa]t', tag: 'oa' }, { w: 'b[oa]t', tag: 'oa' }, { w: 'gr[ow]', tag: 'ow' }, { w: 'sl[ow]', tag: 'ow' }]
        },
        sort: { a: 'oa 🚤', b: 'ow 🌱', items: [['float', 'a'], ['grow', 'b'], ['roast', 'a'], ['bowl', 'b']], hint: 'Look for the team: o + a, or o + w?', split: { float: 'fl[oa]t', grow: 'gr[ow]', roast: 'r[oa]st', bowl: 'b[ow]l' } },
        build: { w: 'a|lone', tiles: ['a', 'lone', 'loan'], pic: '🧍', clue: 'By yourself, with no one else.' },
        pick: { w: 'float', opts: ['float', 'flote', 'flowt'], pic: '🛟', clue: 'Stay on top of the water.', split: 'fl[oa]t' },
        hear: { w: 'below', opts: ['below', 'belo', 'beloe'], pic: '⬇️', clue: 'Under something.', split: 'be|l[ow]' },
        rebel: { words: ['cow', 'grow', 'bowl', 'throw'], why: '"cow" has ow, but it says /ow/ like "ouch," not /ō/! Say them out loud and listen.' },
        chunks: [
          { s: ['Today I flew over the cold, gray ocean near Maine to find puffins.', 'Their rocky island was empty, and I felt puzzled.'], pic: '❓', focus: '70% 40%', check: ['🐦🏝️❓', '🐦🍰', '🐦🌋'] },
          { s: ['Then I spotted a little bird afloat on the waves.', 'It was a puffin, and it was not going home at all!', 'Puffins spend the fall and winter wandering out at sea.'], pic: '🌊', focus: '40% 70%', check: ['🐦🌊', '🐦🌳', '🐦🏠'] },
          { s: ['They float and sleep on the water, and they can dive below the waves to catch fish.', 'A puffin rows with its wings like a boat with oars.'], pic: '🚣', focus: '50% 85%', check: ['🐦⬇️🐟', '🐦🍕', '🐦🚗'] },
          { s: ['In summer, both parents raised a puffling in a burrow under the rocks.', 'They brought home beaks full of fish so it could grow.'], pic: '🕳️', focus: '75% 40%', check: ['🐦🐟🕳️', '🐦🍦', '🐦⚽'] },
          { s: ['One night, the puffling hopped out of its burrow and flew alone to the sea.', 'It was brave, so I tried to be brave too, and I made a slow dive.', 'I came up with a mouth full of salt water!'], pic: '💦', focus: '50% 60%', check: ['🐦💦😝', '🐦🏆', '🐦🎂'] }
        ],
        question: { pre: { q: 'What is this postcard MOSTLY about?', opts: ['🌊 Where puffins go and how they live', '💦 Pip gets salt water in the mouth', '🏝️ An empty rock'], mishap: 'That is just one small part. What is MOST of the postcard about?' },
          q: 'Key detail: How does a puffin swim under the water? Tap the sentence that tells me.', a: 'rows with its wings', mishap: 'Oops! I tried to swim with my feet only. I went in circles! 🌀 Try again!' },
        advisor: { type: 'feel', q: 'How did Pip feel when the island was empty?', opts: ['🤔 Puzzled', '😂 Silly', '😴 Sleepy'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['felt puzzled'], mishap: 'Look for a feeling word in the postcard!' },
        fill: { kind: 'word', sent: 'Puffins spend the fall and winter wandering out at ___.', opts: ['sea', 'see', 'seat'] },
        spell: { w: 'float', sent: 'They ___ and sleep on the water.', split: 'fl[oa]t', pic: '🛟' }
      },
      space: {
        title: 'The Case of the Missing Puffins',
        targets: ['excitement', 'astonishment', 'disappointment', 'moment', 'discovery', 'dependable', 'adaptable', 'unbelievable', 'completely', 'decided'],
        model: {
          title: 'Endings that change the word: -ment and -able',
          lines: ['-ment turns an action into a thing: excite → excitement.', '-able means "can be" or "able to": depend → dependable.'],
          ex: [{ w: 'ex|cite|[ment]', tag: 'a feeling' }, { w: 'as|ton|ish|[ment]', tag: 'a big surprise' }, { w: 'de|pend|[able]', tag: 'can be depended on' }, { w: 'a|dapt|[able]', tag: 'able to adapt' }]
        },
        sort: { a: '-ment = a thing 📦', b: '-able = can be ✅', items: [['excitement', 'a'], ['dependable', 'b'], ['payment', 'a'], ['adaptable', 'b']], hint: 'Look at the very end of the word.', split: { excitement: 'excite[ment]', dependable: 'depend[able]', payment: 'pay[ment]', adaptable: 'adapt[able]' } },
        build: { w: 'dis|ap|point|ment', tiles: ['dis', 'ap', 'point', 'ment', 'mint'], pic: '😞', clue: 'The feeling when things are not what you hoped.' },
        pick: { w: 'adaptable', opts: ['adaptable', 'adaptible', 'adabtable'], pic: '🦎', clue: 'Able to change to fit in.', split: 'a|dapt|[able]' },
        hear: { w: 'astonishment', opts: ['astonishment', 'astonishmint', 'astonishement'], pic: '😲', clue: 'A feeling of great surprise.', split: 'as|ton|ish|[ment]' },
        rebel: { words: ['table', 'dependable', 'adaptable', 'washable'], why: '"table" just ends in -able. Take it off and only "t" is left, so it does not mean "can be"!' },
        chunks: [
          { s: ['Greetings from the Gulf of Maine, where I arrived with great excitement to photograph Atlantic puffins.', 'To my astonishment, their rocky island was completely deserted!'], pic: '🏝️', focus: '70% 40%', check: ['🐦🏝️😲', '🐦🎉🐦🐦', '🐦🌋'] },
          { s: ['After a moment of disappointment, I flew out over the open ocean and made a remarkable discovery.', 'Hundreds of puffins were bobbing on the waves like a scattered handful of corks.'], pic: '🌊', focus: '40% 70%', check: ['🐦🐦🐦🌊', '🐦🏝️', '🐦🌳'] },
          { s: ['Puffins spend the fall and winter far from land, sleeping on the water and diving for fish.', 'Their wings work like paddles, so they can "fly" underwater, much deeper than a swimming pool.'], pic: '🐟', focus: '50% 85%', check: ['🐦⬇️🐟', '🐦☁️', '🐦🏠'] },
          { s: ['Their famous rainbow-colored bills are not dependable decorations.', 'After the nesting season, the bright outer plates of the bill fall off, so a winter puffin looks surprisingly plain.'], pic: '🎨', focus: '55% 55%', check: ['🌈➡️🌫️', '🐦👑', '🐦🧦'] },
          { s: ['In summer, both parents took turns carrying beakfuls of fish to their puffling, which waited in a dark burrow.', 'When it was ready, the puffling left the burrow at night and fluttered to the sea on its own.'], pic: '🌙', focus: '75% 40%', check: ['🐣🌙🌊', '🐣🏫', '🐣🎈'] },
          { s: ['That journey sounded unbelievable to me, because I would be nervous in the dark.', 'I decided that puffins are the most adaptable birds I have ever met!'], pic: '🏅', focus: '50% 50%', check: ['🐦😊🏅', '🐦😡', '🐦😴'] }
        ],
        question: { q: 'WHY does a winter puffin look plain? Tap the sentence that tells why.', a: 'outer plates of the bill fall off', mishap: 'Oops! I tried to paint a puffin\'s bill with markers. It swam away! 🖍️ Look for the word "so"!' },
        advisor: { type: 'mistake', pip: 'A puffling stays with its parents until it is all grown up.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'on its own', mishap: 'That sentence does not tell how the puffling leaves. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Their famous rainbow-colored bills are not ___ decorations.', opts: ['dependable', 'adorable', 'breakable'] },
        spell: { w: 'excitement', sent: 'I arrived with great ___.', split: 'ex|cite|[ment]', pic: '🤩' }
      }
    }
  },
  /* ======================= TUESDAY ======================= */
  {
    day: 2, name: 'Tuesday', place: 'Monterey Bay, California', flag: '🇺🇸', scene: 'img/u1w3_tue_otters.webp',
    sceneBrief: 'A kelp forest from the surface: tall brown kelp swaying in green water. A mother sea otter floats on her back with a fluffy pup on her chest; a second otter cracks a clam on a flat stone on her belly. Pip on a kelp float.',
    qtype: 'Word meaning from context', atype: 'Odd one out, and why',
    arrive: 'Pip splashed down in a kelp forest in California!',
    wiggle: { emoji: '🦦', text: 'Float like a sea otter!', sub: 'Lie on your back, hold your paws on your tummy, and count to 10.' },
    route: {
      q: 'Where should I fly next? I want to see a hot, sandy desert!',
      opts: [
        { pic: '🐪', label: 'Follow a camel', echo: 'I followed a camel, like you said. It was sloooow! 🐪' },
        { pic: '☀️', label: 'Fly toward the sun', echo: 'I flew toward the sun, like you said. It got hotter and hotter! ☀️' }
      ]
    },
    ps: 'P.S. Would you want to float on your back all day like a sea otter? Tell me why!',
    levels: {
      ground: {
        title: 'A Pup on a Furry Raft',
        targets: ['today', 'came', 'sways', 'lay', 'stay', 'break', 'great', 'away', 'little', 'with'],
        model: {
          title: 'ay says /ā/ at the end',
          lines: ['Hear /ā/ at the very END of a word? Use ay.', 'play, stay, sway, away'],
          ex: [{ w: 'pl[ay]', tag: 'ay = /ā/' }, { w: 'st[ay]', tag: 'ay = /ā/' }, { w: 'l[ay]', tag: 'ay = /ā/' }, { w: 'a|w[ay]', tag: 'ay = /ā/' }]
        },
        sort: { a: 'ay (end) 🔵', b: 'ai (middle) 🟡', items: [['play', 'a'], ['mail', 'b'], ['stay', 'a'], ['chain', 'b']], hint: 'Where is the /ā/ sound? At the very end = ay. In the middle = ai.', split: { play: 'pl[ay]', mail: 'm[ai]l', stay: 'st[ay]', chain: 'ch[ai]n' } },
        build: { w: 'a|way', tiles: ['a', 'way', 'wai'], pic: '👋', clue: 'Not here. Gone off.' },
        pick: { w: 'great', opts: ['great', 'grayt', 'graet'], pic: '👍', clue: 'Really, really good!', split: 'gr[ea]t' },
        hear: { w: 'break', opts: ['break', 'brayk', 'braek'], pic: '🍪', clue: 'Crack into pieces.', split: 'br[ea]k' },
        rebel: { words: ['great', 'play', 'stay', 'day'], why: '"great" says /ā/, but it uses ea! That is sneaky. The others use ay.' },
        chunks: [
          { s: ['Today I came to a kelp forest in the sea near California.', 'Kelp is a tall brown plant that sways in the waves.'], pic: '🌿', focus: '30% 50%', check: ['🌿🌊', '🌵🏜️', '🌲❄️'] },
          { s: ['A sea otter lay on her back with her pup on her tummy.', 'The pup looked like a little furry raft!'], pic: '🦦', focus: '55% 45%', check: ['🦦👶🌊', '🦦🚗', '🦦🎂'] },
          { s: ['Sea otters do not have blubber like whales, so they must stay warm with thick fur.', 'Mom licks and fluffs the pup\'s fur, and that keeps it warm and dry.'], pic: '🧥', focus: '55% 45%', check: ['🦦👅🧥', '🦦🔥', '🦦🧊'] },
          { s: ['When Mom dives to get food, she wraps the pup in kelp so it will not float away.', 'She came back up with a clam to break open on a rock.', 'She was feasting on a great lunch!'], pic: '🐚', focus: '70% 55%', check: ['🦦🪨🐚', '🦦🍕', '🦦🍦'] }
        ],
        question: { pre: { q: 'Pip does not know the word "kelp." What is kelp?', opts: ['🌿 A tall sea plant', '🦀 A crab', '🪨 A rock'], mishap: 'Hmm, read the postcard again. What does it say kelp is?' },
          q: 'Word detective: Tap the sentence that tells what kelp is.', a: 'tall brown plant', near: ['wraps the pup in kelp'], nearText: 'Good thinking! That sentence uses "kelp," but find the one that tells what kelp IS.', mishap: 'Oops! I tried to eat the kelp like spaghetti. Blech! 🍝 Try again!' },
        advisor: { type: 'odd', q: 'Which one does NOT match sea otters?', opts: ['🐋 Stay warm with blubber', '🧥 Have thick fur', '🪨 Crack food on rocks', '🌿 Wrap pups in kelp'],
          whyQ: 'Why not? Pick the reason from the postcard.', whys: ['Sea otters do not have blubber, so they need thick fur.', 'Sea otters are too small to be warm.'], mishap: 'Look back at the postcard. What does it say about blubber?' },
        fill: { kind: 'word', sent: 'Sea otters do not have blubber like whales, so they must ___ warm with thick fur.', opts: ['stay', 'stair', 'steam'] },
        spell: { w: 'great', sent: 'She was feasting on a ___ lunch!', split: 'gr[ea]t', pic: '🍽️' }
      },
      sky: {
        title: 'A Floating Otter Nursery',
        targets: ['grows', 'floated', 'boat', 'coat', 'rolls', 'blows', 'alone', 'stone', 'broke', 'toe', 'open'],
        model: {
          title: 'Long o: o_e with magic e',
          lines: ['The magic e jumps over one letter and makes the o say its name.', 'hop → hope, rob → robe'],
          ex: [{ w: 'st[o]n[e]', tag: 'o_e = /ō/' }, { w: 'br[o]k[e]', tag: 'o_e = /ō/' }, { w: 'a|l[o]n[e]', tag: 'o_e = /ō/' }, { w: 'gl[o]b[e]', tag: 'o_e = /ō/' }]
        },
        sort: { a: 'o_e 🪄', b: 'oa 🚤', items: [['stone', 'a'], ['coat', 'b'], ['broke', 'a'], ['float', 'b']], hint: 'Is there an e at the very end? Then it is o_e.', split: { stone: 'st[o]n[e]', coat: 'c[oa]t', broke: 'br[o]k[e]', float: 'fl[oa]t' } },
        build: { w: 'o|pen', tiles: ['o', 'pen', 'pin'], pic: '📖', clue: 'Not shut.' },
        pick: { w: 'broke', opts: ['broke', 'broak', 'brok'], pic: '💔', clue: 'Cracked it into pieces.', split: 'br[o]k[e]' },
        hear: { w: 'toe', opts: ['toe', 'toa', 'tou'], pic: '🦶', clue: 'One of the five on your foot.', split: 't[oe]' },
        rebel: { words: ['some', 'stone', 'broke', 'alone'], why: '"some" has o and a magic e, but it says /u/, not /ō/! Heart word ❤️.' },
        chunks: [
          { s: ['Today I flew along the coast of California to a kelp forest.', 'Tall brown kelp grows up from the ocean floor and sways like a jungle in the waves.'], pic: '🌿', focus: '30% 50%', check: ['🌿🌊', '🌵🏜️', '🌲❄️'] },
          { s: ['A mother sea otter floated on her back with her pup on her chest.', 'The fluffy pup looked like a little furry boat.'], pic: '🦦', focus: '55% 45%', check: ['🦦👶🌊', '🦦🚗', '🦦🎂'] },
          { s: ['Sea otters have no blubber, so their thick fur is their coat.', 'Mom rolls, licks, and blows air into the pup\'s fur so it stays warm and dry.'], pic: '🧥', focus: '55% 45%', check: ['🦦💨🧥', '🦦🔥', '🦦🧊'] },
          { s: ['When Mom dives for food, she wraps her pup in kelp so it will not drift off alone.', 'She came back with a clam and a stone.'], pic: '🪨', focus: '70% 55%', check: ['🦦🐚🪨', '🦦🍕', '🦦⚽'] },
          { s: ['She balanced the stone on her tummy and broke the clam open, knock, knock, knock!', 'Sea otters are one of the few animals that use tools.', 'I tried it with a snail shell, but I just bonked my toe.'], pic: '🔨', focus: '70% 55%', check: ['🐦🐚🦶😖', '🐦🏆', '🐦🎸'] }
        ],
        question: { pre: { q: 'Pip does not know the word "drift." What does it mean?', opts: ['🌊 Float slowly away', '🏊 Swim very fast', '😴 Fall asleep'], mishap: 'Hmm, think about a pup floating on the water with no one holding it.' },
          q: 'Tap the sentence that tells WHY Mom wraps the pup in kelp.', a: 'will not drift off alone', mishap: 'Oops! I wrapped MYSELF in kelp and got stuck like a burrito. 🌯 Try again!' },
        advisor: { type: 'odd', q: 'Which one is NOT a way Mom cares for her pup?', opts: ['🎣 Takes it fishing on a boat', '🧥 Fluffs its fur', '🌿 Wraps it in kelp', '🛌 Carries it on her chest'],
          whyQ: 'Why not? Pick the reason from the postcard.', whys: ['The postcard never says that. It says Mom fluffs, wraps, and carries the pup.', 'Pups do not like boats.'], mishap: 'Look back at the postcard. What does Mom really do?' },
        fill: { kind: 'word', sent: 'The fluffy pup looked like a little furry ___.', opts: ['boat', 'bat', 'beat'] },
        spell: { w: 'stone', sent: 'She came back with a clam and a ___.', split: 'st[o]n[e]', pic: '🪨' }
      },
      space: {
        title: 'Guardians of the Kelp Forest',
        targets: ['insulation', 'admiration', 'information', 'observed', 'returned', 'prevent', 'destroy', 'entire', 'enormous', 'important'],
        model: {
          title: 'The ending -tion',
          lines: ['-tion says "shun." It often turns an action into a thing.', 'inform → information, admire → admiration'],
          ex: [{ w: 'in|for|ma|[tion]', tag: 'facts you learn' }, { w: 'ad|mi|ra|[tion]', tag: 'great respect' }, { w: 'in|su|la|[tion]', tag: 'holds heat in' }]
        },
        sort: { a: '-tion = a thing 📦', b: '-ful = full of 🫙', items: [['insulation', 'a'], ['careful', 'b'], ['information', 'a'], ['helpful', 'b']], hint: 'Look at the very end of the word.', split: { insulation: 'insula[tion]', careful: 'care[ful]', information: 'informa[tion]', helpful: 'help[ful]' } },
        build: { w: 'in|su|la|tion', tiles: ['in', 'su', 'la', 'tion', 'shun'], pic: '🧥', clue: 'A layer that holds heat in.' },
        pick: { w: 'information', opts: ['information', 'informashun', 'infermation'], pic: 'ℹ️', clue: 'Facts that tell you about something.', split: 'in|for|ma|[tion]' },
        hear: { w: 'admiration', opts: ['admiration', 'admirashon', 'admeration'], pic: '🤩', clue: 'A feeling of great respect.', split: 'ad|mi|ra|[tion]' },
        rebel: { words: ['nation', 'information', 'insulation', 'admiration'], why: '"nation" ends in -tion, but take it off and "na" is not a word!' },
        chunks: [
          { s: ['Greetings from Monterey Bay in California, where an underwater forest of giant kelp stretches toward the surface like a tangle of green ribbons.', 'Giant kelp can grow about two feet in a single day!'], pic: '🌿', focus: '30% 50%', check: ['🌿🌊', '🌵🏜️', '🌲❄️'] },
          { s: ['Floating among the swaying kelp, I observed a mother sea otter cradling her pup on her chest.', 'Unlike whales and seals, sea otters have no blubber for insulation, which means a layer that holds in heat.'], pic: '🦦', focus: '55% 45%', check: ['🦦👶🌊', '🦦🚗', '🦦🎂'] },
          { s: ['Instead, they depend on the thickest fur of any animal, with up to a million hairs in a patch the size of a postage stamp.', 'The mother spends hours grooming her pup\'s fur so that it traps tiny air bubbles and stays waterproof.'], pic: '🫧', focus: '55% 45%', check: ['🦦🫧🧥', '🦦🔥', '🦦🧊'] },
          { s: ['Before diving for food, she wraps the pup in kelp, which works like an anchor to prevent it from drifting away.', 'She returned with a clam and a flat rock, placed the rock on her belly, and hammered the shell open.'], pic: '⚓', focus: '70% 55%', check: ['🦦🪨🐚', '🦦🍕', '🦦⚽'] },
          { s: ['Sea otters also protect the entire kelp forest.', 'They eat enormous numbers of sea urchins, which would otherwise chew through the kelp and destroy it.'], pic: '🟣', focus: '40% 80%', check: ['🦦🟣🌿', '🦦🍩', '🦦🏠'] },
          { s: ['Because of this important job, scientists call sea otters a keystone species.', 'I felt tremendous admiration for these furry guardians, and I promised to share this information with you.'], pic: '🏅', focus: '50% 50%', check: ['🐦🦦🏅', '🐦😡', '🐦😴'] }
        ],
        question: { pre: { q: 'What does "insulation" mean in this postcard?', opts: ['🧥 A layer that holds in heat', '🌊 A big wave', '🐚 A kind of shell'], mishap: 'Look for the clue words "which means"!' },
          q: 'Word detective: Tap the sentence with the clue.', a: 'which means a layer', mishap: 'Oops! I tried to use seaweed as a blanket. Still chilly! 🥶 Look for "which means"!' },
        advisor: { type: 'mistake', pip: 'Sea urchins help the kelp forest grow tall.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'destroy it', mishap: 'That sentence does not tell what urchins do. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Sea otters also protect the ___ kelp forest.', opts: ['entire', 'entrance', 'empty'] },
        spell: { w: 'prevent', sent: 'The kelp works like an anchor to ___ drifting.', split: '[pre]|vent', pic: '⚓' }
      }
    }
  },
  /* ======================= WEDNESDAY ======================= */
  {
    day: 3, name: 'Wednesday', place: 'Sahara Desert, Morocco', flag: '🇲🇦', scene: 'img/u1w3_wed_fennec.webp',
    sceneBrief: 'Golden sand dunes at sunset, sky orange and pink. A tiny cream-colored fennec fox with HUGE ears peeks out of a burrow at the bottom of a dune. Pip standing on one foot on the hot sand.',
    qtype: 'Picture it (mental images)', atype: 'Pip made a mistake',
    arrive: 'Pip landed on a hot sand dune in the Sahara!',
    wiggle: { emoji: '🦊', text: 'Fennec fox ears!', sub: 'Cup your hands behind your ears. Can you hear a tiny sound? Now dig like a fox for 5 seconds!' },
    route: {
      q: 'Tomorrow I visit a big, busy city. How should I get there?',
      opts: [
        { pic: '✈️', label: 'Ride in a plane', echo: 'I rode in a plane, like you said. I got peanuts! ✈️' },
        { pic: '🚂', label: 'Hop on a train', echo: 'I hopped on a train, like you said. Choo choo! 🚂' }
      ]
    },
    ps: 'P.S. Close your eyes. Picture the fox\'s giant ears. What else would you give giant ears to?',
    levels: {
      ground: {
        title: 'A Fox with Big Ears',
        targets: ['came', 'place', 'plates', 'shade', 'wake', 'day', 'play', 'paint', 'little', 'saw', 'like'],
        model: {
          title: 'Magic e: a_e says /ā/',
          lines: ['Magic e is quiet, but it jumps back and makes the a say its name.', 'plan → plane, cap → cape'],
          ex: [{ w: 'pl[a]c[e]', tag: 'a_e' }, { w: 'sh[a]d[e]', tag: 'a_e' }, { w: 'w[a]k[e]', tag: 'a_e' }, { w: 'bl[a]m[e]', tag: 'a_e' }]
        },
        sort: { a: 'Long a 🅰️', b: 'Short a 🍎', items: [['shade', 'a'], ['sand', 'b'], ['plates', 'a'], ['fast', 'b']], hint: 'Does the a say its name? Look for a magic e.', split: { shade: 'sh[a]d[e]', sand: 's[a]nd', plates: 'pl[a]t[e]s', fast: 'f[a]st' } },
        build: { w: 'plates', tiles: ['plates', 'plats', 'pates'], pic: '🍽️', clue: 'You eat food on them.' },
        pick: { w: 'shade', opts: ['shade', 'shaid', 'shad'], pic: '⛱️', clue: 'A cool spot out of the sun.', split: 'sh[a]d[e]' },
        hear: { w: 'wake', opts: ['wake', 'waik', 'wak'], pic: '⏰', clue: 'Stop sleeping.', split: 'w[a]k[e]' },
        rebel: { words: ['have', 'make', 'shade', 'place'], why: '"have" has a magic e, but the a does not say its name! Heart word ❤️.' },
        chunks: [
          { s: ['Today I came to a very hot place called the Sahara.', 'It has sand as far as I can see.'], pic: '🏜️', focus: '50% 40%', check: ['🏜️☀️', '🌲❄️', '🌊🐠'] },
          { s: ['I saw a little fox with ears as big as plates!', 'It is called a fennec fox.', 'Its big ears help it hear bugs under the sand.'], pic: '👂', focus: '45% 55%', check: ['🦊👂', '🦊🎩', '🦊🚗'] },
          { s: ['Big ears also let heat go out, so the fox stays cool.', 'In the day, it naps in a burrow to stay in the shade.'], pic: '🕳️', focus: '40% 75%', check: ['🦊😴🕳️', '🦊🏊', '🦊🍦'] },
          { s: ['At night, the fox will wake up to hunt and play.', 'Its fur is the color of sand, like someone used sand paint on it!', 'I would like ears like that.'], pic: '🌙', focus: '60% 30%', check: ['🦊🌙', '🦊☀️🏖️', '🦊🎂'] }
        ],
        question: { pre: { q: 'Close your eyes and picture the fox. What do its ears look like?', opts: ['🍽️ As big as plates', '🐭 Tiny like a mouse', '🐰 Long and floppy'], mishap: 'Hmm, read the postcard again. What does Pip say the ears are as big as?' },
          q: 'Tap the words that helped you picture the ears.', a: 'as big as plates', mishap: 'Oops! I tried to eat dinner off a fox\'s ear. It ran away! 🍽️ Try again!' },
        advisor: { type: 'mistake', pip: 'The fennec fox hunts in the hot sun at lunchtime.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'At night, the fox will wake up', mishap: 'That sentence does not tell WHEN the fox hunts. Try another, advisor!' },
        fill: { kind: 'word', sent: 'In the day, it naps in a burrow to stay in the ___.', opts: ['shade', 'shape', 'shake'] },
        spell: { w: 'paint', sent: 'It looks like someone used sand ___ on it!', split: 'p[ai]nt', pic: '🎨' }
      },
      sky: {
        title: 'Golden Dunes and a Tiny Fox',
        targets: ['glowed', 'below', 'slowly', 'knows', 'low', 'home', 'toes', 'going', 'show', 'yellow'],
        model: {
          title: 'ow can say /ō/ or /ow/',
          lines: ['Sometimes ow says /ō/ like in snow. Sometimes it says /ow/ like in cow!', 'Try /ō/ first. If it is not a real word, try /ow/.'],
          ex: [{ w: 'sn[ow]', tag: '/ō/ like go' }, { w: 'gl[ow]ed', tag: '/ō/ like go' }, { w: 'c[ow]', tag: '/ow/ like ouch' }, { w: 'd[ow]n', tag: '/ow/ like ouch' }]
        },
        sort: { a: 'ow says /ō/ ❄️', b: 'ow says /ow/ 🐮', items: [['snow', 'a'], ['cow', 'b'], ['below', 'a'], ['down', 'b']], hint: 'Say it both ways. Which one is a real word?', split: { snow: 'sn[ow]', cow: 'c[ow]', below: 'bel[ow]', down: 'd[ow]n' } },
        build: { w: 'yel|low', tiles: ['yel', 'low', 'lo'], pic: '💛', clue: 'The color of a banana.' },
        pick: { w: 'glowed', opts: ['glowed', 'gloed', 'glode'], pic: '🌟', clue: 'Shined softly.', split: 'gl[ow]ed' },
        hear: { w: 'slowly', opts: ['slowly', 'sloly', 'slowey'], pic: '🐢', clue: 'Not fast.', split: 'sl[ow]|ly' },
        rebel: { words: ['how', 'snow', 'grow', 'show'], why: '"how" has ow, but it says /ow/ like "ouch." The others say /ō/!' },
        chunks: [
          { s: ['Today I landed on a golden sand dune in the Sahara Desert.', 'The sun was going down, and the dunes glowed orange and yellow.'], pic: '🌅', focus: '50% 30%', check: ['🏜️🌅', '🌲❄️', '🌊🐠'] },
          { s: ['A tiny fennec fox poked its head out of a burrow below me.', 'Its ears were so huge that they looked like two pink sails on a boat.'], pic: '👂', focus: '45% 55%', check: ['🦊👂⛵', '🦊🎩', '🦊🚗'] },
          { s: ['Those ears help the fox hear beetles crawling under the sand.', 'They also let extra heat escape from its body, so the fox stays cool.'], pic: '🪲', focus: '40% 75%', check: ['🦊👂🪲', '🦊🍕', '🦊🧊'] },
          { s: ['Thick fur grows on the bottoms of its paws.', 'That fur keeps its toes from burning on the hot sand, and it helps the fox walk without sinking.'], pic: '🐾', focus: '55% 80%', check: ['🦊🐾🔥', '🦊👟', '🦊🧤'] },
          { s: ['The fox slowly crept out and trotted off to hunt, because it knows night is cooler.', 'I wedged myself in a low spot to watch, but the sand was as hot as a stove.', 'I hopped all the way home to show you my toes!'], pic: '🔥', focus: '60% 70%', check: ['🐦🔥🦶', '🐦❄️', '🐦😴'] }
        ],
        question: { pre: { q: 'Picture it! What did the fox\'s ears look like to Pip?', opts: ['⛵ Two pink sails', '🥞 Two pancakes', '🍃 Two tiny leaves'], mishap: 'Read the postcard again. Pip compares the ears to something on a boat.' },
          q: 'Tap the words that helped you picture the ears.', a: 'two pink sails', mishap: 'Oops! I tried to sail on a fox. It sneezed! 🤧 Try again!' },
        advisor: { type: 'mistake', pip: 'The fox\'s paws have no fur at all.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'Thick fur grows on the bottoms', mishap: 'That sentence does not tell about the paws. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Thick fur grows on the bottoms of its ___.', opts: ['paws', 'pause', 'pals'] },
        spell: { w: 'below', sent: 'A fox poked its head out of a burrow ___ me.', split: 'be|l[ow]', pic: '⬇️' }
      },
      space: {
        title: 'The Desert Fox (Not the Dessert Fox!)',
        targets: ['remarkable', 'comfortable', 'noticeable', 'adaptations', 'sensitive', 'surface', 'temperatures', 'protect', 'disappeared', 'desert'],
        model: {
          title: 'The ending -able',
          lines: ['-able means "can be." comfort → comfortable.', 'Some words keep their e: notice → noticeable.'],
          ex: [{ w: 're|mark|[able]', tag: 'worth noticing' }, { w: 'com|fort|[able]', tag: 'cozy' }, { w: 'no|tice|[able]', tag: 'easy to see' }]
        },
        sort: { a: 'A real word + -able ✅', b: 'Just ends in -able 🚫', items: [['comfortable', 'a'], ['table', 'b'], ['remarkable', 'a'], ['cable', 'b']], hint: 'Take off -able. Is a real word left?', split: { comfortable: 'comfort[able]', remarkable: 'remark[able]', table: 't[able]', cable: 'c[able]' } },
        build: { w: 'ad|ap|ta|tions', tiles: ['ad', 'ap', 'ta', 'tions', 'shuns'], pic: '🦎', clue: 'Body parts or habits that help an animal survive.' },
        pick: { w: 'sensitive', opts: ['sensitive', 'sensative', 'sensitiv'], pic: '👂', clue: 'Able to notice tiny things.', split: 'sen|si|tive' },
        hear: { w: 'temperature', opts: ['temperature', 'temprature', 'temperchure'], pic: '🌡️', clue: 'How hot or cold something is.', split: 'tem|per|a|ture' },
        rebel: { words: ['dessert', 'desert', 'surface', 'protect'], why: '"dessert" is a sweet treat with TWO s\'s. The others are all in the postcard about the fox!' },
        chunks: [
          { s: ['Greetings from the Sahara, the largest hot desert on Earth, where daytime temperatures can soar above 100 degrees.', 'Please note: a desert is a dry place, while a dessert is a treat, so do not mix them up like I did!'], pic: '🍰', focus: '50% 40%', check: ['🏜️☀️', '🌲❄️', '🌊🐠'] },
          { s: ['At dusk, I spotted a fennec fox, the smallest fox in the world.', 'It is about the size of a kitten, but its ears are enormous and very noticeable, nearly as long as my whole body.'], pic: '👂', focus: '45% 55%', check: ['🦊👂', '🦊🎩', '🦊🚗'] },
          { s: ['Those ears are remarkable adaptations.', 'They are so sensitive that the fox can hear insects moving beneath the surface of the sand.', 'They also work like radiators, releasing extra body heat into the air.'], pic: '🪲', focus: '40% 75%', check: ['🦊👂🪲', '🦊🍕', '🦊🧊'] },
          { s: ['Its paws are covered with thick fur, like built-in slippers, which protect them from the scorching sand.', 'Its sandy coat is excellent camouflage, and at night, when the desert turns cold, the same coat keeps it warm.'], pic: '🐾', focus: '55% 80%', check: ['🦊🐾🥿', '🦊👟', '🦊🧤'] },
          { s: ['During the blazing day, the fox rests in a cool, comfortable burrow that it digs in the sand.', 'After dark, it hunts, and it can go a long time without drinking because it gets water from its food.'], pic: '🕳️', focus: '40% 75%', check: ['🦊😴🕳️', '🦊🏊', '🦊🍦'] },
          { s: ['When the fox noticed me, it disappeared down its burrow in a flash.', 'I think it was shy, or perhaps it thought I was a hungry hawk!'], pic: '💨', focus: '60% 60%', check: ['🦊💨🕳️', '🦊🤝🐦', '🦊🎤'] }
        ],
        question: { pre: { q: 'Pip says the paws are "like built-in slippers." What does that help you picture?', opts: ['🥿 Soft fur covering the paws', '👟 The fox wearing sneakers', '🧦 Socks with holes'], mishap: 'Pip compares the paws to slippers. The fox does not really wear slippers!' },
          q: 'Tap the sentence that compares the paws to slippers.', a: 'like built-in slippers', mishap: 'Oops! I bought the fox some real slippers. It chewed them! 🥿 Try again!' },
        advisor: { type: 'mistake', pip: 'The fennec fox must drink from a pond every day.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'gets water from its food', mishap: 'That sentence does not tell about water. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Those ears are remarkable ___.', opts: ['adaptations', 'admirations', 'addresses'] },
        spell: { w: 'protect', sent: 'Thick fur helps ___ the paws from the hot sand.', split: 'pro|tect', pic: '🛡️' }
      }
    }
  },
  /* ======================= THURSDAY (a POEM postcard) ======================= */
  {
    day: 4, name: 'Thursday', place: 'New York City', flag: '🇺🇸', scene: 'img/u1w3_thu_pigeons.webp',
    sceneBrief: 'A busy New York City sidewalk in fall: tall buildings, a yellow taxi, a subway entrance, a bench. Gray pigeons with shiny green-purple necks peck crumbs; two sit on a window ledge high up. Pip holding a poem on a scroll.',
    qtype: 'Poetry: rhymes and pictures', atype: 'Would you rather? (with a reason)',
    arrive: 'Pip flew to the tall buildings of New York City!',
    wiggle: { emoji: '🕊️', text: 'Pigeon strut!', sub: 'Walk across the room bobbing your head like a pigeon. Coo, coo!' },
    route: {
      q: 'Tomorrow I go to a beach with baby turtles! How should I get there?',
      opts: [
        { pic: '🛶', label: 'Paddle a canoe', echo: 'I paddled a canoe, like you said. My wings are sore! 🛶' },
        { pic: '🐢', label: 'Ride on a turtle', echo: 'I rode on a big turtle, like you said. Slow but fun! 🐢' }
      ]
    },
    ps: 'P.S. Can you make up a rhyme? What rhymes with "day"?',
    levels: {
      ground: {
        title: 'City Pigeons',
        targets: ['day', 'away', 'train', 'rain', 'gray', 'wait', 'cake', 'stay', 'great', 'with'],
        model: {
          title: 'Rhymes with long a',
          lines: ['Rhyming words end with the same sound.', 'day, away, play, stay, gray all rhyme!'],
          ex: [{ w: 'd[ay]', tag: 'rhymes with play' }, { w: 'tr[ai]n', tag: 'rhymes with rain' }, { w: 'c[a]k[e]', tag: 'rhymes with lake' }, { w: 'gr[ea]t', tag: 'rhymes with wait' }]
        },
        sort: { a: 'Rhymes with day 🌞', b: 'Rhymes with rain 🌧️', items: [['stay', 'a'], ['train', 'b'], ['gray', 'a'], ['chain', 'b']], hint: 'Say the word, then say "day" or "rain." Which one sounds the same at the end?', split: { stay: 'st[ay]', train: 'tr[ain]', gray: 'gr[ay]', chain: 'ch[ain]' } },
        build: { w: 'a|way', tiles: ['a', 'way', 'wait'], pic: '👋', clue: 'Off to another place.' },
        pick: { w: 'train', opts: ['train', 'trane', 'trayn'], pic: '🚆', clue: 'It rides on tracks.', split: 'tr[ai]n' },
        hear: { w: 'gray', opts: ['gray', 'grai', 'grae'], pic: '🐘', clue: 'The color of a cloudy sky.', split: 'gr[ay]' },
        rebel: { words: ['said', 'rain', 'train', 'wait'], why: '"said" has ai, but it says /e/! The others say /ā/. Heart word ❤️.' },
        chunks: [
          { s: ['Here is a poem I made for you today!', 'Hello, pigeons, gray and blue, in the big city, cooing "coo."'], pic: '🏙️', focus: '50% 40%', check: ['🕊️🏙️', '🕊️🏝️', '🕊️🌲'] },
          { s: ['You walk with me by the train.', 'You nap on a ledge in the rain.'], pic: '🚆', focus: '30% 70%', check: ['🕊️🚆🌧️', '🕊️🚗☀️', '🕊️🏊'] },
          { s: ['You peck a bit of lost cake.', 'You bob your head with each step you take.'], pic: '🍰', focus: '55% 80%', check: ['🕊️🍰', '🕊️🥕', '🕊️🧸'] },
          { s: ['You fly up high, then flap away.', 'You come back home at the end of the day.', 'City pigeons, you are great, and I will stay with you and wait!'], pic: '🏠', focus: '70% 30%', check: ['🕊️🏠', '🕊️🌋', '🕊️🚀'] }
        ],
        question: { pre: { q: 'In a poem, rhyming words sound the same at the end. Which word rhymes with "away"?', opts: ['☀️ day', '🚆 train', '🍰 cake'], mishap: 'Say "away," then say the word. Do they sound the same at the end?' },
          q: 'Tap the line that ends with a word that rhymes with "train."', a: 'nap on a ledge in the rain', near: ['walk with me by the train'], nearText: 'Close! That line ends with "train." Find the line that RHYMES with it.', mishap: 'Oops! I tried to rhyme "train" with "banana." Nope! 🍌 Try again!' },
        advisor: { type: 'rather', q: 'Would you rather nap on a ledge or ride by the train?', choices: [
          { label: '🏢 Nap on a ledge', q: 'Pick a reason from the poem:', reasons: ['I could nap high up, even in the rain.', 'I could eat pizza on the moon.'] },
          { label: '🚆 Walk by the train', q: 'Pick a reason from the poem:', reasons: ['I could walk with Pip by the train.', 'I could swim with sharks.'] }
        ], mishap: 'That is fun, but the poem does not say it! Pick a reason from the poem.' },
        fill: { kind: 'word', sent: 'You come back home at the end of the ___.', opts: ['day', 'dog', 'dry'] },
        spell: { w: 'rain', sent: 'You nap on a ledge in the ___.', split: 'r[ai]n', pic: '🌧️' }
      },
      sky: {
        title: 'Hello, Pigeon!',
        targets: ['alone', 'stone', 'go', 'dough', 'road', 'toast', 'snow', 'show', 'home', 'globe', 'bowl', 'window'],
        model: {
          title: 'Long o rhymes',
          lines: ['Long o words can rhyme even when they are spelled different ways!', 'stone and alone, road and toad, go and dough'],
          ex: [{ w: 'st[o]n[e]', tag: 'rhymes with alone' }, { w: 'r[oa]d', tag: 'rhymes with toad' }, { w: 'sn[ow]', tag: 'rhymes with show' }, { w: 'd[ough]', tag: 'rhymes with go!' }]
        },
        sort: { a: 'Rhymes with stone 🪨', b: 'Rhymes with road 🛣️', items: [['alone', 'a'], ['toad', 'b'], ['phone', 'a'], ['load', 'b']], hint: 'Say the word, then say "stone" or "road." Which ending matches?', split: { alone: 'al[one]', toad: 't[oad]', phone: 'ph[one]', load: 'l[oad]' } },
        build: { w: 'win|dow', tiles: ['win', 'dow', 'doe'], pic: '🪟', clue: 'You look out of it.' },
        pick: { w: 'toast', opts: ['toast', 'tost', 'towst'], pic: '🍞', clue: 'Bread that is warm and crispy.', split: 't[oa]st' },
        hear: { w: 'globe', opts: ['globe', 'gloab', 'glob'], pic: '🌎', clue: 'A round map of Earth.', split: 'gl[o]b[e]' },
        rebel: { words: ['dough', 'go', 'so', 'no'], why: '"dough" rhymes with go, but it is spelled o-u-g-h! What a sneaky word.' },
        chunks: [
          { s: ['I wrote you a poem from New York City!', 'Hello, pigeon on the stone, strutting down the street alone.'], pic: '🏙️', focus: '50% 40%', check: ['🕊️🏙️', '🕊️🏝️', '🕊️🌲'] },
          { s: ['You find a crust of pizza dough.', 'You grab it, gobble, and off you go!'], pic: '🍕', focus: '55% 80%', check: ['🕊️🍕', '🕊️🥕', '🕊️🧸'] },
          { s: ['You wait for crumbs beside the road.', 'You bob your head and eat your load of bagel, muffin, bits of toast.', 'Of all the birds, you like crumbs the most!'], pic: '🥯', focus: '30% 70%', check: ['🕊️🥯🍞', '🕊️🐟', '🕊️🏊'] },
          { s: ['In rain or sun or winter snow, you have a shiny neck to show, purple and green like a glowing globe.', 'You find a ledge, a window, a home.'], pic: '🪟', focus: '70% 30%', check: ['🕊️🪟🏠', '🕊️🌋', '🕊️🚀'] },
          { s: ['Tomorrow I will fly away, but here is one thing I must say.', 'People toss you crumbs from a bowl, but I think you have a big, brave soul!'], pic: '💜', focus: '50% 50%', check: ['🐦💜🕊️', '🐦😡', '🐦😴'] }
        ],
        question: { pre: { q: 'Which pair of words rhymes in the poem?', opts: ['🪨 stone and alone', '🍕 dough and road', '🍞 toast and snow'], mishap: 'Say both words. Do they sound the same at the end?' },
          q: 'Tap the line where "go" rhymes with "dough."', a: 'off you go', near: ['crust of pizza dough'], nearText: 'Close! That line ends with "dough." Find the line that rhymes with it.', mishap: 'Oops! I tried to rhyme "go" with "pickle." Nope! 🥒 Try again!' },
        advisor: { type: 'rather', q: 'Would you rather eat pizza dough or have a shiny neck?', choices: [
          { label: '🍕 Eat pizza dough', q: 'Pick a reason from the poem:', reasons: ['I could grab it, gobble, and go!', 'I could fly to the moon.'] },
          { label: '💜 Have a shiny neck', q: 'Pick a reason from the poem:', reasons: ['It would be purple and green like a glowing globe.', 'It would glow in the dark like a lamp.'] }
        ], mishap: 'That is fun, but the poem does not say it! Pick a reason from the poem.' },
        fill: { kind: 'word', sent: 'You find a crust of pizza ___.', opts: ['dough', 'door', 'dog'] },
        spell: { w: 'alone', sent: 'A pigeon struts down the street ___.', split: 'a|l[o]n[e]', pic: '🧍' }
      },
      space: {
        title: 'A Poem for a City Pigeon',
        targets: ['ancestors', 'navigator', 'presence', 'determined', 'magnificent', 'ordinary', 'enjoyable'],
        model: {
          title: 'Words that compare',
          lines: ['Some words compare two things with "like" or "as": fast as a rocket.', 'Some say one thing IS another: the city is a jungle.'],
          ex: [{ w: 'like', tag: 'like a compass' }, { w: 'as', tag: 'as gray as rain' }, { w: 'is', tag: 'the sidewalk is a stage' }]
        },
        sort: { a: 'Uses like or as 🟢', b: 'Says it IS something 🟣', items: [['as gray as rain', 'a'], ['a shadow in a coat', 'b'], ['like a compass', 'a'], ['the sidewalk is your stage', 'b']], hint: 'Look for "like" or "as."' },
        build: { w: 'nav|i|ga|tor', tiles: ['nav', 'i', 'ga', 'tor', 'ter'], pic: '🧭', clue: 'Someone who finds the way.' },
        pick: { w: 'magnificent', opts: ['magnificent', 'magnifisent', 'magnificant'], pic: '👑', clue: 'Grand and amazing.', split: 'mag|nif|i|cent' },
        hear: { w: 'ancestors', opts: ['ancestors', 'ansestors', 'ancesters'], pic: '👵', clue: 'Family members who lived long ago.', split: 'an|ces|tors' },
        rebel: { words: ['table', 'enjoyable', 'breakable', 'washable'], why: '"table" just ends in -able: take it off and only "t" is left! The others are a real word + -able.' },
        chunks: [
          { s: ['I wrote a poem in four parts about the pigeons of New York City.', 'Here is part one: O pigeon, as gray as rain on stone, you strut the busy streets alone.'], pic: '📜', focus: '50% 40%', check: ['📜🕊️', '📜🦈', '📜🎈'] },
          { s: ['Part two: Your neck is a rainbow in disguise, flashing purple before our eyes.', 'The sidewalk is your stage and floor, you bow and coo, and bow some more.'], pic: '🌈', focus: '55% 60%', check: ['🕊️🌈', '🕊️⬛', '🕊️🍩'] },
          { s: ['Part three: Your ancestors lived on rocky cliffs by the sea, so a ledge on a skyscraper suits you perfectly.', 'People think you are ordinary, but your presence here is extraordinary.'], pic: '🏢', focus: '70% 30%', check: ['🕊️🪨🏢', '🕊️🌳', '🕊️🏊'] },
          { s: ['Part four: Your brain works like a compass, so you are a navigator who always finds home.', 'Determined and magnificent, you are the true king of this concrete jungle!'], pic: '🧭', focus: '60% 50%', check: ['🕊️🧭🏠', '🕊️❓', '🕊️😴'] },
          { s: ['Writing this poem was so enjoyable that I nearly missed my train.', 'Tomorrow I am visiting some ancient reptiles who were swimming in the ocean when dinosaurs were alive!'], pic: '🦖', focus: '50% 50%', check: ['🐦🦖🌊', '🐦🍕', '🐦⛷️'] }
        ],
        question: { pre: { q: 'WHY do pigeons like ledges on tall buildings?', opts: ['🪨 Their ancestors lived on rocky cliffs', '🍕 Ledges have pizza', '🌧️ Ledges are always dry'], mishap: 'Look for the word "so" in part three.' },
          q: 'Tap the line that tells why.', a: 'ancestors lived on rocky cliffs', mishap: 'Oops! I looked for a cliff in the subway. Wrong way! 🚇 Try again!' },
        advisor: { type: 'predict', q: 'Who will Pip visit tomorrow?', opts: ['🐢 Sea turtles', '🐧 Penguins on ice', '🦒 Giraffes'], evQ: 'Tap the clue in the postcard.', a: ['ancient reptiles'], mishap: 'Look for a clue about tomorrow! Which animals are reptiles that swim in the ocean?' },
        fill: { kind: 'word', sent: 'Writing this poem was so ___ that I nearly missed my train.', opts: ['enjoyable', 'enormous', 'enjoying'] },
        spell: { w: 'determined', sent: '___ and magnificent, you are the king of this jungle!', split: 'de|ter|mined', pic: '💪' }
      }
    }
  },
  /* ======================= FRIDAY ======================= */
  {
    day: 5, name: 'Friday', place: 'A beach in Florida', flag: '🇺🇸', scene: 'img/u1w3_fri_hatchlings.webp',
    sceneBrief: 'A dark sandy beach at night under a bright full moon. Tiny loggerhead sea turtle hatchlings scramble from a nest toward moonlit waves. Far behind, dark houses with lights turned off. Pip wearing a little red headlamp that is switched OFF.',
    qtype: 'Compare two postcards', atype: 'Pip made a mistake',
    arrive: 'Pip flew to a moonlit beach in Florida!',
    compareWith: 1,
    wiggle: { emoji: '🐢', text: 'Hatchling dash!', sub: 'Crawl like a baby turtle across the floor to the "ocean" (a pillow). Go, go, go!' },
    route: {
      q: 'Next week I visit animals in stories with a lesson! How should I get there?',
      opts: [
        { pic: '📚', label: 'Jump into a book', echo: 'I jumped into a storybook, like you said. The pages tickled! 📚' },
        { pic: '🪁', label: 'Fly on a kite', echo: 'I flew on a kite, like you said. The wind was wild! 🪁' }
      ]
    },
    ps: 'P.S. The puffling and the hatchling were both brave. When were YOU brave?',
    radio: {
      title: 'Pip\'s Radio Hour: Two Brave Babies',
      parts: ['Pip', 'Puffy the Puffling', 'Shelly the Sea Turtle'],
      lines: [
        ['Pip', 'Beep beep! This is Pip, live from a moonlit beach in Florida!'],
        ['Puffy the Puffling', 'And this is Puffy, calling in from the cold sea near Maine!'],
        ['Pip', 'Our special guest just hatched. Say hi, Shelly!'],
        ['Shelly the Sea Turtle', 'Hi! Sorry, I am out of breath. I just dug out of my nest!'],
        ['Puffy the Puffling', 'Out of a nest? I lived in a burrow under the rocks.'],
        ['Pip', 'Puffy, how did you get to the sea?'],
        ['Puffy the Puffling', 'One night I hopped out of my burrow and flew there all by myself.'],
        ['Shelly the Sea Turtle', 'Me too! Well, I did not fly. I ran on my flippers, and I went at night.'],
        ['Pip', 'So you both went to the sea alone, at night. That is the same!'],
        ['Shelly the Sea Turtle', 'The moon on the waves shows me the way.'],
        ['Puffy the Puffling', 'Sometimes bright lights on land can trick us and pull us the wrong way.'],
        ['Shelly the Sea Turtle', 'That is why people on the beach turn their lights off at night.'],
        ['Pip', 'I turned off my headlamp! What is different about you two?'],
        ['Puffy the Puffling', 'I have feathers, and my parents fed me fish.'],
        ['Shelly the Sea Turtle', 'I have a shell, and I never met my mom. She laid my egg and swam away.'],
        ['Pip', 'You are two brave babies! Good luck in the big ocean!'],
        ['ALL', 'This is Pip\'s Radio Hour, signing off! Over and out!']
      ]
    },
    levels: {
      ground: {
        title: 'The Great Turtle Race',
        targets: ['came', 'lay', 'made', 'late', 'wave', 'waves', 'way', 'great', 'little', 'saw', 'no'],
        model: {
          title: 'Long a review',
          lines: ['ai in the middle, ay at the end, a_e with magic e.', 'And sneaky ea in great and break!'],
          ex: [{ w: 'w[ai]t', tag: 'ai' }, { w: 'w[ay]', tag: 'ay' }, { w: 'w[a]v[e]', tag: 'a_e' }, { w: 'gr[ea]t', tag: 'sneaky ea' }]
        },
        sort: { a: 'Long a 🅰️', b: 'Short a 🍎', items: [['wave', 'a'], ['sand', 'b'], ['great', 'a'], ['crab', 'b']], hint: 'Does the a say its name?', split: { wave: 'w[a]v[e]', sand: 's[a]nd', great: 'gr[ea]t', crab: 'cr[a]b' } },
        build: { w: 'A|pril', tiles: ['A', 'pril', 'pail'], pic: '🌷', clue: 'Sea turtles start to lay eggs around this month.' },
        pick: { w: 'late', opts: ['late', 'lait', 'layt'], pic: '🌙', clue: 'Not early. At night, it is ___.', split: 'l[a]t[e]' },
        hear: { w: 'waves', opts: ['waves', 'waivs', 'wavs'], pic: '🌊', clue: 'Water that rolls up on the beach.', split: 'w[a]v[e]s' },
        rebel: { words: ['said', 'late', 'made', 'wave'], why: '"said" has an a, but it does not say /ā/! Heart word ❤️.' },
        chunks: [
          { s: ['Today I came to a beach in Florida.', 'Back in the spring, a mom sea turtle came up on the sand.', 'She dug a nest, and she lay eggs in it.'], pic: '🥚', focus: '40% 70%', check: ['🐢🥚🏖️', '🐢🌳', '🐢🏠'] },
          { s: ['Then she made her way back to the sea.', 'She did not stay with her eggs!'], pic: '🌊', focus: '60% 40%', check: ['🐢➡️🌊', '🐢🥚🛏️', '🐢🚗'] },
          { s: ['Last night was late, and the moon was out.', 'I saw the little eggs hatch!', 'Out came baby turtles as small as cookies.'], pic: '🐣', focus: '40% 70%', check: ['🐢🐢🌙', '🐢☀️', '🐢🍕'] },
          { s: ['They ran fast to the waves and did not wait.', 'The moon on the water shows them the way to go.', 'On Monday, the puffling went to the sea at night too, with no mom or dad.'], pic: '🌙', focus: '60% 40%', check: ['🐢🌙🌊', '🐢🚗', '🐢🎂'] },
          { s: ['I gave a wave and said, "Good luck, great little swimmers!"'], pic: '👋', focus: '60% 40%', check: ['🐦👋🐢', '🐦😡', '🐦😴'] }
        ],
        question: { pre: { q: 'Think about Monday\'s puffling and today\'s baby turtles. What is the SAME?', opts: ['🌙 They both go to the sea at night', '🪶 They both have feathers', '🥚 They both live in a burrow'], mishap: 'Hmm, is that true for BOTH? Turtles do not have feathers!' },
          q: 'Tap the sentence in today\'s postcard that tells how the puffling is the same.', a: 'the puffling went to the sea at night too', mishap: 'Oops! I tried to race the turtles and fell in the sand. 🏖️ Try again!' },
        advisor: { type: 'mistake', pip: 'Mom sea turtle stays to take care of her babies.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'She did not stay with her eggs', mishap: 'That sentence does not tell about Mom. Try another, advisor!' },
        fill: { kind: 'word', sent: 'They ran fast to the waves and did not ___.', opts: ['wait', 'want', 'white'] },
        spell: { w: 'great', sent: 'Good luck, ___ little swimmers!', split: 'gr[ea]t', pic: '🐢' }
      },
      sky: {
        title: 'Two Brave Babies',
        targets: ['glowed', 'below', 'both', 'alone', 'going', 'hole', 'home', 'toe', 'float', 'road', 'close', 'know'],
        model: {
          title: 'Long o review',
          lines: ['oa, oe, o_e and ow can all say /ō/.', 'And sometimes o says /ō/ all by itself: go, both, going!'],
          ex: [{ w: 'fl[oa]t', tag: 'oa' }, { w: 't[oe]', tag: 'oe' }, { w: 'h[o]l[e]', tag: 'o_e' }, { w: 'b[o]th', tag: 'o by itself' }]
        },
        sort: { a: 'Long o 🅾️', b: 'Short o 🧦', items: [['both', 'a'], ['rock', 'b'], ['going', 'a'], ['pond', 'b']], hint: 'Does the o say its name?', split: { both: 'b[o]th', rock: 'r[o]ck', going: 'g[o]ing', pond: 'p[o]nd' } },
        build: { w: 'go|ing', tiles: ['go', 'ing', 'in'], pic: '🏃', clue: 'Heading somewhere.' },
        pick: { w: 'both', opts: ['both', 'boath', 'bothe'], pic: '2️⃣', clue: 'The two of them.', split: 'b[o]th' },
        hear: { w: 'float', opts: ['float', 'flote', 'flowt'], pic: '🛟', clue: 'Stay on top of the water.', split: 'fl[oa]t' },
        rebel: { words: ['move', 'home', 'hole', 'close'], why: '"move" has o and a magic e, but it says /oo/! The others say /ō/.' },
        chunks: [
          { s: ['Tonight the moon glowed over a beach in Florida.', 'Under the sand below me was a nest of sea turtle eggs.'], pic: '🌕', focus: '50% 25%', check: ['🌕🏖️', '☀️🏔️', '🌧️🏙️'] },
          { s: ['A mother turtle dug the hole and laid dozens of eggs in the summer.', 'Then she crawled back into the sea and swam home.'], pic: '🥚', focus: '40% 70%', check: ['🐢🥚🕳️', '🐢🌳', '🐢🏠'] },
          { s: ['All at once, the sand wiggled, and tiny turtles popped out!', 'Each one was no bigger than my toe.', 'They scrambled down to the water and started to float and swim.'], pic: '🐣', focus: '40% 70%', check: ['🐢🐢🌊', '🐢☀️', '🐢🍕'] },
          { s: ['Hatchlings follow the bright moon on the waves.', 'Lights from houses close to the beach can trick them into going toward the road, so people turn their lights off.'], pic: '💡', focus: '75% 30%', check: ['🐢💡❌', '🐢🎸', '🐢🍦'] },
          { s: ['This made me think of the puffling on Monday.', 'Both babies left their nests at night and went to the sea alone.', 'Next week I will visit animals in stories that teach a lesson, and you know I love a good story!'], pic: '📚', focus: '50% 50%', check: ['🐦📚', '🐦🏈', '🐦🧊'] }
        ],
        question: { pre: { q: 'Think about Monday\'s puffling and today\'s hatchlings. What is the SAME?', opts: ['🌙 Both went to the sea alone at night', '🪶 Both have feathers', '🐟 Both parents fed them fish'], mishap: 'Is that true for BOTH? Only the puffling has feathers and was fed fish.' },
          q: 'Tap the sentence in today\'s postcard that tells what is the same.', a: 'Both babies left their nests', mishap: 'Oops! I tried to dig a nest and got sand in my beak. 🏖️ Try again!' },
        advisor: { type: 'mistake', pip: 'Hatchlings follow the lights from houses.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'follow the bright moon', mishap: 'That sentence does not tell what hatchlings follow. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Each one was no bigger than my ___.', opts: ['toe', 'tow', 'top'] },
        spell: { w: 'alone', sent: 'Both babies went to the sea ___.', split: 'a|l[o]n[e]', pic: '🧍' }
      },
      space: {
        title: 'A Moonlit Journey',
        targets: ['extraordinary', 'championship', 'disqualification', 'movement', 'instinct', 'reflection', 'direction', 'dependable', 'determined', 'compared'],
        model: {
          title: 'Endings review: -ment, -able, -tion',
          lines: ['-ment and -tion make a thing: move → movement, direct → direction.', '-able means "can be": depend → dependable.'],
          ex: [{ w: 'move|[ment]', tag: 'a thing' }, { w: 'di|rec|[tion]', tag: 'a thing' }, { w: 're|flec|[tion]', tag: 'a thing' }, { w: 'de|pend|[able]', tag: 'can be' }]
        },
        sort: { a: '-ment / -tion 📦', b: '-able ✅', items: [['movement', 'a'], ['dependable', 'b'], ['direction', 'a'], ['comfortable', 'b']], hint: 'Look at the very end of the word.', split: { movement: 'move[ment]', dependable: 'depend[able]', direction: 'direc[tion]', comfortable: 'comfort[able]' } },
        build: { w: 'ex|tra|or|di|nar|y', tiles: ['ex', 'tra', 'or', 'di', 'nar', 'y', 'ner'], pic: '🌟', clue: 'Much more than ordinary. Amazing!' },
        pick: { w: 'reflection', opts: ['reflection', 'reflecshun', 'refection'], pic: '🪞', clue: 'An image you see in water or a mirror.', split: 're|flec|[tion]' },
        hear: { w: 'instinct', opts: ['instinct', 'instink', 'instint'], pic: '🧠', clue: 'Something you know how to do without learning.', split: 'in|stinct' },
        rebel: { words: ['station', 'movement', 'reflection', 'direction'], why: '"station" ends in -tion, but take it off and "sta" is not a word!' },
        chunks: [
          { s: ['Greetings from a moonlit beach in Florida, where I witnessed something extraordinary.', 'Two months ago, a loggerhead sea turtle crawled ashore, dug a deep nest, and laid about one hundred eggs.'], pic: '🥚', focus: '40% 70%', check: ['🐢🥚🏖️', '🐢🌳', '🐢🏠'] },
          { s: ['She covered them with sand and returned to the ocean, leaving the warm sand to do the rest.', 'Amazingly, the temperature of the sand helps decide whether the babies become males or females.'], pic: '🌡️', focus: '50% 60%', check: ['🐢🌡️🏖️', '🐢❄️', '🐢🍕'] },
          { s: ['Tonight, the sand began to ripple with movement, and dozens of hatchlings burst out at once.', 'Instantly, they raced toward the waves as if they were competing in a championship, with no disqualification for a false start.'], pic: '🏁', focus: '40% 70%', check: ['🐢🐢🏁', '🐢😴', '🐢🎈'] },
          { s: ['No one teaches them the way; they follow an instinct to crawl toward the brightest direction, which is usually the reflection of the moon on the sea.', 'That is why bright lights on land are dangerous, since they can lead hatchlings the wrong way.'], pic: '💡', focus: '75% 30%', check: ['🐢🌕🌊', '🐢💡🏠', '🐢🎸'] },
          { s: ['Many beach towns ask people to switch off their lights during nesting season, so I turned off my headlamp, too.', 'I compared these determined hatchlings to Monday\'s puffling, and the likeness astonished me.'], pic: '🔦', focus: '60% 40%', check: ['🐦🔦❌', '🐦🎂', '🐦🚀'] },
          { s: ['Both leave their nests at night, both travel alone, and both rely on a dependable sense of direction instead of parents.', 'They are small, but they are some of the bravest travelers on Earth.'], pic: '🌍', focus: '50% 50%', check: ['🐣🐢🌊', '🐣🏫', '🐣🎈'] }
        ],
        question: { pre: { q: 'Compare the puffling and the hatchlings. Which is TRUE for both?', opts: ['🌙 They leave at night and travel alone', '🥚 They hatch from eggs in the sand', '🐟 Parents bring them fish'], mishap: 'Check Monday\'s postcard! Puffins hatch in a burrow, and only puffin parents bring fish.' },
          q: 'Tap the sentence in today\'s postcard that shows how they are alike.', a: 'both travel alone', mishap: 'Oops! I tried to follow the moon and flew into a palm tree. 🌴 Try again!' },
        advisor: { type: 'mistake', pip: 'A mother turtle teaches her hatchlings the way to the sea.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'No one teaches them the way', mishap: 'That sentence does not tell how they find the way. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Tonight, the sand began to ripple with ___, and dozens of hatchlings burst out at once.', opts: ['movement', 'moment', 'mountain'] },
        spell: { w: 'direction', sent: 'They crawl toward the brightest ___.', split: 'di|rec|[tion]', pic: '🧭' }
      }
    }
  }
  ]
};

/* ======================= VOCABULARY WORDS (focus: READING them) =======================
   Same fields as u1w2.js (split, say, look, tricky, pic, means). Ground = district Week 3 key words
   (1-Grade2-ELA.txt, Unit 1 KEY WORDS/VOCABULARY, Week 3 column). Sky = Unit 2 Week 1 words (preview).
   Space = long district words + 3rd-grade suffix words. SWAP IN THE TEACHER'S LIST if she sends vocab. */
(function () {
  const W = window.PIP_WEEKS['u1w3'];
  W.vocab = {
    // Ground (district Week 3)
    feasting: { misread: 'fess-ting', split: 'f[ea]st|[i]ng', say: 'feest|ing', look: ['fasting', 'feeling'], pic: '🍽️😋', means: 'eating a big, happy meal' },
    traveled: { misread: 'tra-veld', split: 'tr[a]v|[e]l[ed]', say: 'trav|eld', look: ['travels', 'tunneled'], pic: '🧳✈️', means: 'went on a trip',
      tricky: { mark: 'travel[ed]', says: 'TRAV-eld', note: '"ed" says d here.' } },
    valley: { misread: 'val-eye', split: 'v[a]l|l[ey]', say: 'val|lee', look: ['volley', 'alley'], pic: '🏞️', means: 'low land between hills',
      tricky: { mark: 'vall[ey]', says: 'VAL-ee', note: '"ey" at the end says ee.' } },
    cave: { misread: 'cav', split: 'c[a]v[e]', look: ['carve', 'have'], pic: '⛰️🕳️', means: 'a hole in a rocky hill' },
    stream: { misread: 'strim', split: 'str[ea]m', look: ['steam', 'scream'], pic: 'img:stream', means: 'a small river' },
    swayed: { misread: 'sway-ed', split: 'sw[ay]ed', look: ['stayed', 'sprayed'], pic: '🌴↔️', means: 'moved side to side',
      tricky: { mark: 'sway[ed]', says: 'swayd', note: '"ed" just says d.' } },
    saddle: { misread: 'sad-lee', split: 's[a]d|dl[e]', say: 'sad|dul', look: ['paddle', 'sadly'], pic: '🐴🪑', means: 'a seat on a horse\'s back',
      tricky: { mark: 'sadd[le]', says: 'SAD-ul', note: '"le" at the end says ul.' } },
    clinic: { misread: 'cly-nick', split: 'cl[i]n|[i]c', say: 'clin|ick', look: ['click', 'cynic'], pic: '🏥🩺', means: 'a place to see a doctor' },
    cage: { misread: 'cag', split: 'c[a]g[e]', look: ['cake', 'cape'], pic: 'img:cage', means: 'a box made of bars',
      tricky: { mark: 'ca[g]e', says: 'kayj', note: 'g before e says j.' } },
    attic: { misread: 'at-ike', split: '[a]t|t[i]c', say: 'at|tick', look: ['attack', 'antic'], pic: '🏠⬆️', means: 'room under the roof' },
    palms: { misread: 'pal-ems', split: 'p[al]ms', look: ['plums', 'palace'], pic: '🌴', means: 'tall trees, big leaves',
      tricky: { mark: 'pa[l]ms', says: 'pahmz', note: 'The l is quiet.' } },
    escaped: { misread: 'es-cap-ed', split: '[e]s|c[a]p[ed]', say: 'es|capt', look: ['escape', 'scraped'], pic: '🚪🏃', means: 'got out',
      tricky: { mark: 'escap[ed]', says: 'es-KAYPT', note: '"ed" says t here.' } },
    pulse: { misread: 'pools', split: 'p[u]ls[e]', look: ['pulls', 'purse'], pic: '💓', means: 'the beat of your heart' },
    aging: { misread: 'ag-ing', split: '[a]|g[i]ng', say: 'ay|jing', look: ['asking', 'raging'], pic: '👴⏳', means: 'getting older',
      tricky: { mark: 'a[g]ing', says: 'AY-jing', note: 'g before i says j here.' } },
    amiss: { misread: 'a-mice', split: '[a]|m[i]ss', say: 'uh|miss', look: ['amass', 'miss'], pic: '❓😕', means: 'wrong, not right' },
    // Sky (Unit 2 Week 1 preview)
    market: { misread: 'mar-kee', split: 'm[ar]|k[e]t', say: 'mar|kit', look: ['marker', 'basket'], pic: '🧺🍎', means: 'a place to buy and sell' },
    fresh: { misread: 'fesh', split: 'fr[e]sh', look: ['flesh', 'french'], pic: '🥬🌟', means: 'new and just picked' },
    dozens: { misread: 'doe-zens', split: 'd[o]z|[e]ns', say: 'duz|enz', look: ['dozes', 'doesn\'t'], pic: '🥚🥚🥚', means: 'many groups of twelve',
      tricky: { mark: 'd[o]zens', says: 'DUZ-enz', note: 'The o says u.' } },
    puzzled: { misread: 'puz-zeld', split: 'p[u]z|zl[ed]', say: 'puz|zuld', look: ['puzzle', 'puddled'], pic: '🤔❓', means: 'confused, not sure' },
    wandering: { misread: 'wan-der-ring', split: 'w[a]n|d[er]|[i]ng', say: 'won|der|ing', look: ['wondering', 'wandered'], pic: '🚶🌀', means: 'moving around with no plan',
      tricky: { mark: 'w[a]ndering', says: 'WON-der-ing', note: 'After w, a says o.' } },
    dash: { misread: 'dish', split: 'd[a]sh', look: ['dish', 'cash'], pic: '💨🏃', means: 'run very fast' },
    balanced: { misread: 'bal-ance-ed', split: 'b[a]l|[a]nc[ed]', say: 'bal|unst', look: ['balance', 'bouncing'], pic: '⚖️🤸', means: 'kept steady, did not fall',
      tricky: { mark: 'balanc[ed]', says: 'BAL-unst', note: '"ed" says t here.' } },
    wedged: { misread: 'wed-ged', split: 'w[e]dg[ed]', look: ['wedding', 'hedged'], pic: '👉📦👈', means: 'squeezed tight into a space',
      tricky: { mark: 'we[dge]d', says: 'wejd', note: '"dge" says j.' } },
    sprang: { misread: 'spring', split: 'spr[a]ng', look: ['spring', 'sprung'], pic: '🦘⬆️', means: 'jumped up fast' },
    milkmaid: { misread: 'milk-mad', split: 'm[i]lk|m[ai]d', say: 'milk|made', look: ['mermaid', 'milkman'], pic: '👩‍🌾🥛', means: 'a girl who milks cows' },
    trophy: { misread: 'trop-hee', split: 'tr[o]|ph[y]', say: 'tro|fee', look: ['trophies', 'tropic'], pic: '🏆', means: 'a cup prize for winning',
      tricky: { mark: 'tro[ph]y', says: 'TRO-fee', note: '"ph" says f.' } },
    finest: { misread: 'fin-est', split: 'f[i]|n[e]st', say: 'fy|nest', look: ['finish', 'fittest'], pic: '⭐👑', means: 'the very best' },
    jealous: { misread: 'jeel-us', split: 'j[ea]l|[ou]s', say: 'jel|us', look: ['zealous', 'joyous'], pic: '😒💚', means: 'wanting what someone else has',
      tricky: { mark: 'j[ea]lous', says: 'JEL-us', note: '"ea" says short e.' } },
    foolish: { misread: 'fool-ish', split: 'f[oo]l|[i]sh', say: 'fool|ish', look: ['fooling', 'polish'], pic: '🤪', means: 'silly, not wise' },
    announced: { misread: 'an-noun-ked', split: '[a]n|n[ou]nc[ed]', say: 'uh|nounst', look: ['announcer', 'bounced'], pic: '📣', means: 'told everyone out loud',
      tricky: { mark: 'announc[ed]', says: 'uh-NOUNST', note: '"ced" says st.' } },
    // Space (long words + suffixes)
    advantage: { misread: 'ad-van-tag', split: '[a]d|v[a]n|t[age]', say: 'ad|van|tidge', look: ['adventure', 'advertise'], pic: '💪⬆️', means: 'something that helps you',
      tricky: { mark: 'advant[age]', says: 'ad-VAN-tij', note: '"age" at the end says ij.' } },
    astonishment: { misread: 'a-stone-ish-ment', split: '[a]s|t[o]n|[i]sh|m[e]nt', say: 'uh|ston|ish|ment', look: ['astonishing', 'establishment'], pic: '😲', means: 'great surprise' },
    disappointment: { misread: 'dis-a-point', split: 'd[i]s|[a]p|p[oi]nt|m[e]nt', say: 'dis|uh|point|ment', look: ['disappointed', 'appointment'], pic: '😞', means: 'sad because hopes did not happen' },
    opportunity: { misread: 'op-por-tune-it', split: '[o]p|p[or]|t[u]|n[i]|t[y]', say: 'op|er|tune|ih|tee', look: ['opportunities', 'importantly'], pic: '🚪🌟', means: 'a good chance' },
    insulation: { misread: 'in-sul-ay-tee-on', split: '[i]n|s[u]|l[a]|t[io]n', say: 'in|suh|lay|shun', look: ['installation', 'insulting'], pic: '🧥🔥', means: 'a layer that holds in heat',
      tricky: { mark: 'insula[tion]', says: 'in-suh-LAY-shun', note: '"tion" says shun.' } },
    admiration: { misread: 'ad-mire-a-tee-on', split: '[a]d|m[i]|r[a]|t[io]n', say: 'ad|mih|ray|shun', look: ['admission', 'animation'], pic: '🤩', means: 'great respect' },
    domestic: { misread: 'dome-stick', split: 'd[o]|m[e]s|t[i]c', say: 'duh|mess|tick', look: ['dramatic', 'domino'], pic: '🐄🏡', means: 'tame, lives with people' },
    adaptations: { misread: 'a-dap-tay-tee-ons', split: '[a]d|[a]p|t[a]|t[io]ns', say: 'ad|ap|tay|shunz', look: ['adaptable', 'additions'], pic: '🦎🎨', means: 'body parts or habits that help survival' },
    sensitive: { misread: 'sen-sit-ive', split: 's[e]n|s[i]|t[i]ve', say: 'sen|sih|tiv', look: ['sensible', 'senseless'], pic: '👂🌟', means: 'quick to notice small things',
      tricky: { mark: 'sensit[ive]', says: 'SEN-sih-tiv', note: '"ive" says iv.' } },
    presence: { misread: 'pre-sence', split: 'pr[e]s|[e]n[ce]', say: 'prez|ence', look: ['present', 'prince'], pic: '🙋', means: 'being there',
      tricky: { mark: 'pre[s]en[ce]', says: 'PREZ-ens', note: 's says z, and ce says s.' } },
    ancestors: { misread: 'an-kes-tors', split: '[a]n|c[e]s|t[or]s', say: 'an|sess|terz', look: ['anchors', 'assessors'], pic: '👵👴', means: 'family who lived long ago',
      tricky: { mark: 'an[c]estors', says: 'AN-ses-terz', note: 'c before e says s.' } },
    navigator: { misread: 'nav-ee-gat-or', split: 'n[a]v|[i]|g[a]|t[or]', say: 'nav|ih|gay|ter', look: ['navigation', 'alligator'], pic: '🧭', means: 'someone who finds the way' },
    championship: { misread: 'champ-ion-ship', split: 'ch[a]m|p[i]|[o]n|sh[i]p', say: 'cham|pee|un|ship', look: ['champion', 'companionship'], pic: '🏆🥇', means: 'the big final contest' },
    disqualification: { misread: 'dis-qual-if-ik', split: 'd[i]s|qu[a]l|[i]|f[i]|c[a]|t[io]n', say: 'dis|kwol|ih|fih|kay|shun', look: ['qualification', 'dissatisfaction'], pic: '🚫🏁', means: 'being put out of a race' },
    extraordinary: { misread: 'extra-ordinary', split: '[e]x|tra[or]|d[i]|n[a]r|[y]', say: 'ex|stror|dih|nair|ee', look: ['ordinary', 'extracurricular'], pic: '🦄', means: 'amazing, far from ordinary',
      tricky: { mark: 'extr[aor]dinary', says: 'ex-STROR-dih-nair-ee', note: '"extra" and "or" blend: ex-STROR.' } }
  };
  /* Warm-up (easy wins first): last week's words she already knows. SWAP IN THE TEACHER'S LIST: replace with
     her Week 2 sheet when it comes home. District Week 2 (U1W2) list shown here. */
  W.warmup = [
    { w: 'open', pic: '📖', other: '🐟' }, { w: 'napkin', pic: 'img:napkin', other: '🚲' }, { w: 'problem', pic: '🧩', other: '🌸' },
    { w: 'silent', pic: '🤫', other: '🥁' }, { w: 'dentist', pic: '🦷', other: '🌳' }, { w: 'jump', pic: '🦘', other: '🛏️' },
    { w: 'she', pic: '👧', other: '🚗' }, { w: 'one', pic: '1️⃣', other: '🍌' }, { w: 'den', pic: '🦊🕳️', other: '☁️' }, { w: 'with', pic: '🤝', other: '🪨' }
  ];
  // "Type the word you hear". SWAP IN THE TEACHER'S LIST (ground = her spelling list + sight words).
  W.typeWords = {
    ground: [
      { w: 'play', pic: '⚽', sent: "Let's play outside." }, { w: 'that', pic: '👉', sent: 'I like that one.' }, { w: 'paint', pic: '🎨', sent: 'I paint a sun.' },
      { w: 'great', pic: '👍', sent: 'You did a great job!' }, { w: 'mail', pic: '✉️', sent: 'Pip brings the mail.' }, { w: 'how', pic: '🤔', sent: 'How old are you?' },
      { w: 'break', pic: '🍪', sent: 'Break the cookie in half.' }, { w: 'cake', pic: '🎂', sent: 'We ate cake.' }, { w: 'then', pic: '➡️', sent: 'First we eat, then we play.' },
      { w: 'down', pic: '⬇️', sent: 'Sit down, please.' }, { w: 'chain', pic: '⛓️', sent: 'The bike has a chain.' }, { w: 'stay', pic: '🏠', sent: 'Stay with me.' },
      { w: 'blame', pic: '🐶', sent: 'Do not blame the dog.' }, { w: 'with', pic: '🤝', sent: 'Come with me.' }, { w: 'april', pic: '🌷', sent: 'Flowers bloom in April.', cap: 'April' },
      { w: 'little', pic: '🐭', sent: 'A mouse is little.' }, { w: 'of', pic: '🥛', sent: 'I want a cup of milk.' }, { w: 'saw', pic: '👀', sent: 'I saw a fox.' }
    ],
    sky: [
      { w: 'float', pic: '🛟', sent: 'Boats float on water.' }, { w: 'toe', pic: '🦶', sent: 'I hurt my toe.' }, { w: 'roast', pic: '🔥', sent: 'We roast marshmallows.' },
      { w: 'broke', pic: '💔', sent: 'The glass broke.' }, { w: 'globe', pic: '🌎', sent: 'Spin the globe.' }, { w: 'going', pic: '🏃', sent: 'We are going home.' },
      { w: 'both', pic: '2️⃣', sent: 'I like both of them.' }, { w: 'grow', pic: '🌱', sent: 'Plants grow in the sun.' }, { w: 'bowl', pic: '🥣', sent: 'Soup is in the bowl.' },
      { w: 'throw', pic: '⚾', sent: 'Throw the ball to me.' }, { w: 'because', pic: '💡', sent: 'I smiled because I won.' }, { w: 'look', pic: '👀', sent: 'Look at the moon.' }
    ],
    space: [
      { w: 'excitement', pic: '🤩', sent: 'We jumped with excitement.' }, { w: 'movement', pic: '🏃', sent: 'I saw a movement in the grass.' }, { w: 'payment', pic: '💵', sent: 'The payment was ten dollars.' },
      { w: 'comfortable', pic: '🛋️', sent: 'This couch is comfortable.' }, { w: 'breakable', pic: '🫙', sent: 'The glass is breakable.' }, { w: 'enjoyable', pic: '🎡', sent: 'The fair was enjoyable.' },
      { w: 'direction', pic: '🧭', sent: 'Which direction is north?' }, { w: 'information', pic: 'ℹ️', sent: 'The sign gives information.' }, { w: 'protect', pic: '🛡️', sent: 'A helmet will protect your head.' },
      { w: 'discovery', pic: '🔍', sent: 'She made a great discovery.' }, { w: 'remarkable', pic: '🌟', sent: 'That trick was remarkable.' }, { w: 'reflection', pic: '🪞', sent: 'I see my reflection in the pond.' }
    ]
  };
  // R practice (listening only; never grades her speech).
  W.rPairs = [
    { r: 'ray', rp: '☀️', w: 'way', wp: '➡️' }, { r: 'rail', rp: '🛤️', w: 'whale', wp: '🐋' }, { r: 'rag', rp: '🧽', w: 'wag', wp: '🐕' },
    { r: 'reed', rp: '🌾', w: 'weed', wp: '🌱' }, { r: 'ride', rp: '🚲', w: 'wide', wp: '↔️' }, { r: 'rest', rp: '😴', w: 'west', wp: '🧭' }
  ];
  W.rWords = [
    { w: 'April', pic: '🌷', oops: 'Apwil' }, { w: 'break', pic: '🍪', oops: 'bweak' }, { w: 'great', pic: '👍', oops: 'gweat' },
    { w: 'train', pic: '🚆', oops: 'twain' }, { w: 'gray', pic: '🐘', oops: 'gway' }, { w: 'stream', pic: 'img:stream', oops: 'stweam' },
    { w: 'traveled', pic: '🧳', oops: 'twaveled' }, { w: 'market', pic: '🧺', oops: 'mahket' }, { w: 'fresh', pic: '🥬', oops: 'fwesh' },
    { w: 'roast', pic: '🔥', oops: 'woast' }, { w: 'throw', pic: '⚾', oops: 'thwow' }, { w: 'grow', pic: '🌱', oops: 'gwow' }
  ];
  // Sneaky words: the WORD is sneaky, not her. [..] = the sneaky part.
  W.sneaky = [
    { w: 'said', mark: 's[ai]d', says: 'sed', note: 'Sneaky! "ai" says e here.', pic: '💬' },
    { w: 'of', mark: '[of]', says: 'uv', note: 'Sneaky! It sounds like "uv."', pic: '🥛' },
    { w: 'to', mark: 't[o]', says: 'too', note: 'Sneaky! "o" says oo here.', pic: '➡️' },
    { w: 'great', mark: 'gr[ea]t', says: 'grayt', note: 'Sneaky! "ea" says ay here.', pic: '👍' },
    { w: 'break', mark: 'br[ea]k', says: 'brayk', note: 'Sneaky! "ea" says ay here.', pic: '🍪' },
    { w: 'are', mark: '[are]', says: 'ar', note: 'Sneaky! The e is quiet and a does not say its name.', pic: '👥' },
    { w: 'little', mark: 'litt[le]', says: 'LIT-ul', note: 'Sneaky! "le" at the end says ul.', pic: '🐭' }
  ];
  /* ONE optional Italian bonus postcard (unlocks after Friday). NOTE: the live app hard-codes Pip's line
     ("I am at the beach near Naples..."); `pip` is a NEW field. See integration-notes.md. */
  W.italia = {
    place: 'Amalfi, a town on the cliffs by the sea', region: 'Campania, Italy', scene: '🍋⛵',
    pip: 'I am in Amalfi, a town on the cliffs! Can you learn 3 Italian words with me?',
    postcard: ['Ciao from Amalfi!', 'Colorful houses sit on the cliffs above the sea.', 'Giant lemons grow here, as big as my head!', 'Can you teach me some Italian words?'],
    words: [
      { it: 'limone', pic: '🍋', en: 'lemon', others: ['🍎', '🥕'] },
      { it: 'sole', pic: '☀️', en: 'sun', others: ['🌙', '⛄'] },
      { it: 'barca', pic: '⛵', en: 'boat', others: ['🚗', '🚂'] }
    ]
  };
  W.trickyExtra = [
    { w: 'island', mark: 'i[s]land', says: 'EYE-land', note: 'The s is quiet!', pic: '🏝️' },
    { w: 'pigeon', mark: 'pi[geo]n', says: 'PIJ-un', note: '"geo" says j-u.', pic: '🕊️' }
  ];
  W.vocabByDay = {
    1: { ground: ['feasting', 'traveled', 'valley'], sky: ['market', 'fresh', 'dozens'], space: ['advantage', 'astonishment', 'disappointment'] },
    2: { ground: ['cave', 'stream', 'swayed'], sky: ['puzzled', 'wandering', 'dash'], space: ['opportunity', 'insulation', 'admiration'] },
    3: { ground: ['saddle', 'clinic', 'cage'], sky: ['balanced', 'wedged', 'sprang'], space: ['domestic', 'adaptations', 'sensitive'] },
    4: { ground: ['attic', 'palms', 'escaped'], sky: ['milkmaid', 'trophy', 'finest'], space: ['presence', 'ancestors', 'navigator'] },
    5: { ground: ['pulse', 'aging', 'amiss'], sky: ['jealous', 'foolish', 'announced'], space: ['championship', 'disqualification', 'extraordinary'] }
  };
  const apply = (day, plan) => ['ground', 'sky', 'space'].forEach((lv) => {
    day.levels[lv].preview = plan[lv].map((w) => Object.assign({ w }, W.vocab[w]));
  });
  W.days.forEach((d) => { if (W.vocabByDay[d.day]) apply(d, W.vocabByDay[d.day]); });
})();
