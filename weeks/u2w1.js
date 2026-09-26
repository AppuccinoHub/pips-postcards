/* Pip's Postcards · Unit 2 Week 1 · Characters Facing Challenges  (STAGED DRAFT, not live)
   School week: Mon Oct 5 – Fri Oct 9, 2026 (ESTIMATE; u1w3 = Sep 28 per Sue). Earlier estimate (Oct 12 week, Columbus Day):
   many NJ districts close. If school is closed, Monday's postcard still works as a home day, or the grown-up
   can let it roll into Tuesday. Check the district calendar.
   Schema = site/weeks/u1w2.js. Correct answer FIRST in every option list. "|" = syllables, [ ] = pattern.
   District source: 1-Grade2-ELA.txt, Unit 2 "Characters Facing Challenges", LEARNING ACTIVITIES Week 1
   (long o; fables; central message; shades of meaning in verbs; character responses). District texts this week:
   "The Foolish Milkmaid", "The Daydreaming Sprinter", "King Midas". Pip's postcards are ORIGINAL animal fables
   that echo those lessons (they do not retell the district texts). Baby Zoo animals: sea otter (Mon), sea turtle
   (Tue), fennec fox (Wed), puffin (Thu), fox + sea turtle (Fri radio). Sky previews Unit 2 Week 2 (long e). */
(window.PIP_WEEKS = window.PIP_WEEKS || {})['u2w1'] = {
  id: 'u2w1',
  unit: 2, week: 1,
  title: 'Challenges · Week 1',
  unitTitle: 'Characters Facing Challenges',
  dates: { start: '2026-10-05', end: '2026-10-09', estimated: true },
  school: {
    /* SWAP IN THE TEACHER'S LIST: replace `spelling` (and W.typeWords.ground) with her weekly sheet. */
    spelling: ['float', 'toe', 'roast', 'broke', 'globe', 'going', 'both', 'grow', 'bowl', 'throw'],
    hf: ['here', 'look', 'me', 'play', 'said', 'see', 'she', 'try', 'about', 'because'],
    phonics: 'Long o (oa, oe, o_e, ow; o by itself in go, both, going)',
    nextSpelling: ['these', 'clean', 'happy', 'key', 'queen', 'leaf', 'funny', 'piece', 'thief', 'need'],
    nextHf: ['after', 'before', 'call', 'do', 'earth', 'father', 'give', 'her', 'know', 'large'],
    nextPhonics: 'Long e (ee, ea, e_e, y, ey, ie) and plural endings',
    comprehension: 'Draw inferences · recount fables · central message · character responses · shades of meaning in verbs · use illustrations'
  },
  levels: {
    ground: { focus: 'This week: long o (oa, oe, o_e, ow, o)' },
    sky: { focus: 'Next week: long e (ee, ea, y, ie, ey) and plurals' },
    space: { focus: '3rd-grade stretch: -old/-ost families, shades of meaning, idioms, character motivation, compare morals' }
  },
  days: [
  /* ======================= MONDAY ======================= */
  {
    day: 1, name: 'Monday', place: 'Kachemak Bay, Alaska', flag: '🇺🇸', scene: 'img/u2w1_mon_otter.webp',
    sceneBrief: 'Cold blue bay in Alaska with snowy mountains behind. A young sea otter floats on her back, a wooden bowl of clams balanced on her tummy, with a daydream bubble above her head showing a boat, a coat and a globe. Pip on a floating log, listening.',
    qtype: 'Recount a fable', atype: 'How did the character feel?',
    arrive: 'Pip flew north to a cold bay in Alaska!',
    wiggle: { emoji: '🦦', text: 'Otter spin!', sub: 'Spin around slowly 3 times like an otter rolling in the water. Then freeze!' },
    route: {
      q: 'Tomorrow I visit a beach where baby turtles hatch! How should I get there?',
      opts: [
        { pic: '🐋', label: 'Ride with a whale', echo: 'I rode with a whale, like you said. It sprayed me! 🐋' },
        { pic: '🛩️', label: 'Take a little plane', echo: 'I took a little plane, like you said. Bumpy but fun! 🛩️' }
      ]
    },
    ps: 'P.S. Have you ever planned something before it happened? What happened?',
    levels: {
      ground: {
        title: 'Ollie and the Bowl of Clams',
        targets: ['float', 'bowl', 'boat', 'coat', 'globe', 'broke', 'told', 'so', 'no', 'said', 'try'],
        model: {
          title: 'Long o: oa in the middle',
          lines: ['o and a team up and say /ō/, the name of the letter o.', 'The a is quiet. boat, coat, float, roast'],
          ex: [{ w: 'fl[oa]t', tag: 'oa' }, { w: 'b[oa]t', tag: 'oa' }, { w: 'c[oa]t', tag: 'oa' }, { w: 'r[oa]st', tag: 'oa' }]
        },
        sort: { a: 'oa 🚤', b: 'ow 🌱', items: [['float', 'a'], ['bowl', 'b'], ['coat', 'a'], ['grow', 'b']], hint: 'Look for the team: o + a, or o + w?', split: { float: 'fl[oa]t', bowl: 'b[ow]l', coat: 'c[oa]t', grow: 'gr[ow]' } },
        build: { w: 'mar|ket', tiles: ['mar', 'ket', 'kit'], pic: '🧺', clue: 'A place to buy and sell food.' },
        pick: { w: 'coat', opts: ['coat', 'cote', 'cowt'], pic: '🧥', clue: 'You wear it when it is cold.', split: 'c[oa]t' },
        hear: { w: 'bowl', opts: ['bowl', 'bole', 'boal'], pic: '🥣', clue: 'You eat soup from it.', split: 'b[ow]l' },
        rebel: { words: ['brown', 'bowl', 'grow', 'throw'], why: '"brown" has ow, but it says /ow/ like "ouch"! The others say /ō/.' },
        chunks: [
          { s: ['Today I am in Alaska, by the cold sea.', 'A sea otter told me a fable, a story with a lesson.'], pic: '📖', focus: '50% 40%', check: ['🦦📖', '🦦🍕', '🦦🚗'] },
          { s: ['Once, a young otter named Ollie had a bowl of clams.', 'She liked to float on her back with the bowl on her tummy.'], pic: '🥣', focus: '50% 55%', check: ['🦦🥣🌊', '🦦🚲', '🦦🎂'] },
          { s: ['"I will sell my clams at the market," she said.', '"Then I will get a boat, a coat, and a big globe!"'], pic: '💭', focus: '60% 25%', check: ['💭🚤🧥🌎', '💭🍕', '💭🐶'] },
          { s: ['Ollie was so happy that she did a flip.', 'Oh no!', 'The bowl broke, and the clams sank.'], pic: '💦', focus: '50% 60%', check: ['🦦🔄💦', '🦦😴', '🦦🎸'] },
          { s: ['She had no clams, no boat, and no coat.', 'The lesson is: do not count your clams before you have them.', 'I will try to remember that!'], pic: '🐚', focus: '50% 50%', check: ['🦦😢🐚', '🦦🏆', '🦦🎉'] }
        ],
        question: { pre: { q: 'What did Ollie plan to do with her clams?', opts: ['🧺 Sell them at the market', '🍽️ Eat them all', '🎁 Give them to Pip'], mishap: 'Hmm, read what Ollie said. Where did she want to take the clams?' },
          q: 'Tap the sentence that tells what Ollie planned.', a: 'sell my clams at the market', mishap: 'Oops! I tried to sell a clam to a seal. It just barked! 🦭 Try again!' },
        advisor: { type: 'feel', q: 'How did Ollie feel at the end?', opts: ['😢 Sad', '🤩 Excited', '😴 Sleepy'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['no clams, no boat'], mishap: 'Think about what Ollie had left at the end.' },
        fill: { kind: 'word', sent: 'The bowl ___, and the clams sank.', opts: ['broke', 'brook', 'bake'] },
        spell: { w: 'float', sent: 'She liked to ___ on her back.', split: 'fl[oa]t', pic: '🛟' }
      },
      sky: {
        title: 'Ollie Counts Her Clams',
        targets: ['sea', 'clean', 'three', 'these', 'treat', 'sweet', 'feed', 'leap', 'happy', 'deep', 'need', 'dream'],
        model: {
          title: 'Long e: ee and ea',
          lines: ['e and e team up to say /ē/: three, sweet.', 'e and a team up too: clean, leap.'],
          ex: [{ w: 'thr[ee]', tag: 'ee' }, { w: 'sw[ee]t', tag: 'ee' }, { w: 'cl[ea]n', tag: 'ea' }, { w: 'l[ea]p', tag: 'ea' }]
        },
        sort: { a: 'ee 👀', b: 'ea 🌊', items: [['three', 'a'], ['clean', 'b'], ['feed', 'a'], ['leap', 'b']], hint: 'Look for the team: e + e, or e + a?', split: { three: 'thr[ee]', clean: 'cl[ea]n', feed: 'f[ee]d', leap: 'l[ea]p' } },
        build: { w: 'hap|py', tiles: ['hap', 'py', 'pie'], pic: '😄', clue: 'Glad.' },
        pick: { w: 'these', opts: ['these', 'theez', 'thees'], pic: '👇', clue: 'Not those, but ___.', split: 'th[e]s[e]' },
        hear: { w: 'deep', opts: ['deep', 'deap', 'dep'], pic: '🌊', clue: 'Far down.', split: 'd[ee]p' },
        rebel: { words: ['bread', 'clean', 'leap', 'treat'], why: '"bread" has ea, but it says short e! The others say /ē/.' },
        chunks: [
          { s: ['Greetings from Alaska, where the sea is cold and clean.', 'A sea otter told me this fable, and I promised to share it with you.'], pic: '📖', focus: '50% 40%', check: ['🦦📖', '🦦🍕', '🦦🚗'] },
          { s: ['Once, an otter named Ollie noticed three fat clams on the sea floor.', 'She scooped them up and floated on her back with the clams on her chest.'], pic: '🐚', focus: '50% 55%', check: ['🦦🐚🐚🐚', '🦦🚲', '🦦🎂'] },
          { s: ['"I will trade these clams at the market for a sweet treat," she said.', '"Then I will feed my friends a huge supper, and everyone will think I am the best otter in the sea!"'], pic: '💭', focus: '60% 25%', check: ['💭🍰🦦🦦', '💭🚗', '💭🐶'] },
          { s: ['Ollie felt so happy that she began to leap and spin in the waves.', 'Splash!', 'The clams slipped off her chest and sank deep into the dark water.'], pic: '💦', focus: '50% 60%', check: ['🦦🔄💦', '🦦😴', '🦦🎸'] },
          { s: ['Ollie crept back to her kelp bed with nothing to eat.', 'The lesson of this fable is: do not count your clams before they are cracked.', 'I need to remember that, because I dream about snacks all day!'], pic: '🐚', focus: '50% 50%', check: ['🦦😢🌿', '🦦🏆', '🦦🎉'] }
        ],
        question: { pre: { q: 'What is the lesson of this fable?', opts: ['🐚 Do not plan too much before you have something', '🏊 Always swim fast', '🍰 Always eat dessert first'], mishap: 'Hmm, look near the end. Pip tells the lesson!' },
          q: 'Central message: Tap the sentence that tells the lesson.', a: 'do not count your clams', mishap: 'Oops! I counted my clams and got to eleventy-twelve. 🤪 Try again!' },
        advisor: { type: 'feel', q: 'How did Ollie feel when she began to leap and spin?', opts: ['😄 Happy and proud', '😢 Sad', '😠 Angry'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['felt so happy'], mishap: 'Look for a feeling word in the postcard!' },
        fill: { kind: 'word', sent: 'Ollie crept back to her kelp bed with nothing to ___.', opts: ['eat', 'each', 'east'] },
        spell: { w: 'clean', sent: 'The sea is cold and ___.', split: 'cl[ea]n', pic: '💧' }
      },
      space: {
        title: 'Counting Clams Before They Are Cracked',
        targets: ['almost', 'host', 'told', 'most', 'boldly', 'golden', 'hold', 'cold', 'consequences', 'impatient', 'official', 'idiom'],
        model: {
          title: 'Long o families: -old and -ost',
          lines: ['In -old and -ost, the o says its name, even with no magic e!', 'gold, told, hold · most, host, almost'],
          ex: [{ w: 'g[o]ld', tag: '-old' }, { w: 't[o]ld', tag: '-old' }, { w: 'm[o]st', tag: '-ost' }, { w: 'h[o]st', tag: '-ost' }]
        },
        sort: { a: '-old 🥇', b: '-ost 🏠', items: [['told', 'a'], ['most', 'b'], ['hold', 'a'], ['host', 'b']], hint: 'Look at the last three letters.', split: { told: 't[old]', most: 'm[ost]', hold: 'h[old]', host: 'h[ost]' } },
        build: { w: 'con|se|quen|ces', tiles: ['con', 'se', 'quen', 'ces', 'kwen'], pic: '⚖️', clue: 'What happens because of what you do.' },
        pick: { w: 'impatient', opts: ['impatient', 'impashent', 'impatiant'], pic: '⏰', clue: 'Not able to wait calmly.', split: 'im|pa|[tient]' },
        hear: { w: 'official', opts: ['official', 'offishal', 'oficial'], pic: '📜', clue: 'Real and approved, like a rule.', split: 'of|fi|[cial]' },
        rebel: { words: ['lost', 'most', 'host', 'almost'], why: '"lost" ends in -ost, but its o is short! In most, host and almost, the o says its name.' },
        chunks: [
          { s: ['Greetings from Kachemak Bay, Alaska, where the water is so cold that I almost froze my tail feathers.', 'An elderly sea otter, the unofficial host of the bay, told me a fable I will never forget.'], pic: '📖', focus: '50% 40%', check: ['🦦📖❄️', '🦦🍕', '🦦🚗'] },
          { s: ['Long ago, a young otter named Ollie was the most impatient creature in the bay.', 'One morning, she discovered three enormous clams, and she boldly declared that she would become rich.'], pic: '🐚', focus: '50% 55%', check: ['🦦🐚🐚🐚', '🦦🚲', '🦦🎂'] },
          { s: ['"I will trade these clams for a golden shell, then trade the shell for a warm den, and everyone will call me the official queen of the bay!" she announced.', 'While she was busy daydreaming, she forgot to hold on to her clams.'], pic: '💭', focus: '60% 25%', check: ['💭👑🦦', '💭🚗', '💭🐶'] },
          { s: ['They slid off her belly and tumbled into the deep, cold water, far below where she could reach.', 'Ollie learned about consequences the hard way: she lost everything because she was thinking about the future instead of the present.'], pic: '💦', focus: '50% 60%', check: ['🐚⬇️🌊', '🦦😴', '🦦🎸'] },
          { s: ['The old otter explained that this fable is like the saying, "Don\'t count your chickens before they hatch."', 'That saying is an idiom, a phrase that means something different from its exact words.'], pic: '🐣', focus: '50% 50%', check: ['🐣💬', '🐣🏈', '🐣🎸'] },
          { s: ['It means that you should not depend on something good until it actually happens.', 'I admit that I sometimes count my snacks before I have them, so this fable was a golden lesson for me.'], pic: '🍪', focus: '50% 50%', check: ['🐦🍪🤔', '🐦😡', '🐦🏊'] }
        ],
        question: { pre: { q: 'Character motivation: WHY did Ollie drop her clams?', opts: ['💭 She was busy daydreaming', '🦈 A shark scared her', '😴 She fell asleep'], mishap: 'Look for what Ollie was doing when she forgot to hold on.' },
          q: 'Tap the sentence that tells why.', a: 'busy daydreaming', mishap: 'Oops! I tried to hold three clams and a pencil. Everything fell! ✏️ Try again!' },
        advisor: { type: 'mistake', pip: 'An idiom means exactly what its words say.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'means something different', mishap: 'That sentence does not explain idioms. Try another, advisor!' },
        fill: { kind: 'word', sent: 'While she was busy daydreaming, she forgot to ___ on to her clams.', opts: ['hold', 'hole', 'hood'] },
        spell: { w: 'almost', sent: 'The water was so cold that I ___ froze.', split: 'al|m[o]st', pic: '🥶' }
      }
    }
  },
  /* ======================= TUESDAY ======================= */
  {
    day: 2, name: 'Tuesday', place: 'Tortuguero, Costa Rica', flag: '🇨🇷', scene: 'img/u2w1_tue_hatchlings.webp',
    sceneBrief: 'A dark volcanic-sand beach in Costa Rica at night, jungle behind. Two tiny green sea turtle hatchlings: one (Tess) racing toward the waves, one (Toby) stopped, staring up at the moon and a crab. A frigatebird shadow high in the sky. Pip cheering from a driftwood log.',
    qtype: 'Shades of meaning in verbs', atype: 'Odd one out, and why',
    arrive: 'Pip landed on a turtle beach in Costa Rica!',
    wiggle: { emoji: '🐢', text: 'Stroll, jog, dash!', sub: 'Stroll in place slowly... now jog... now DASH super fast! Then freeze like a turtle in its shell.' },
    route: {
      q: 'Tomorrow I visit a hot desert in Morocco. How should I get there?',
      opts: [
        { pic: '🧞', label: 'Ride a magic carpet', echo: 'I rode a magic carpet, like you said. Whee! 🧞' },
        { pic: '🐪', label: 'Ride a camel', echo: 'I rode a camel, like you said. It had a bumpy hump! 🐪' }
      ]
    },
    ps: 'P.S. What do YOU do when you need to keep your mind on your job?',
    levels: {
      ground: {
        title: 'The Slow Hatchling',
        targets: ['go', 'going', 'slow', 'toe', 'home', 'both', 'grow', 'so', 'look', 'try', 'said', 'here'],
        model: {
          title: 'Long o: oe and ow at the end',
          lines: ['At the end of a word, /ō/ can be spelled oe or ow.', 'toe, doe · slow, grow'],
          ex: [{ w: 't[oe]', tag: 'oe' }, { w: 'd[oe]', tag: 'oe' }, { w: 'sl[ow]', tag: 'ow' }, { w: 'gr[ow]', tag: 'ow' }]
        },
        sort: { a: 'oe 🦶', b: 'ow 🐌', items: [['toe', 'a'], ['slow', 'b'], ['doe', 'a'], ['grow', 'b']], hint: 'Look at the last two letters.', split: { toe: 't[oe]', slow: 'sl[ow]', doe: 'd[oe]', grow: 'gr[ow]' } },
        build: { w: 'go|ing', tiles: ['go', 'ing', 'in'], pic: '🏃', clue: 'Moving to a place.' },
        pick: { w: 'slow', opts: ['slow', 'sloa', 'slo'], pic: '🐌', clue: 'Not fast.', split: 'sl[ow]' },
        hear: { w: 'home', opts: ['home', 'hom', 'hoam'], pic: '🏠', clue: 'Where you live.', split: 'h[o]m[e]' },
        rebel: { words: ['down', 'slow', 'grow', 'throw'], why: '"down" has ow, but it says /ow/ like "ouch." The others say /ō/!' },
        chunks: [
          { s: ['Today I am on a beach in Costa Rica.', 'Here, baby sea turtles hatch at night and go to the sea.'], pic: '🏖️', focus: '50% 60%', check: ['🐢🌙🏖️', '🐢❄️', '🐢🏙️'] },
          { s: ['Two hatchlings named Toby and Tess had a race to the waves.', 'Tess was fast, but Toby was slow.'], pic: '🏁', focus: '40% 70%', check: ['🐢🐢🏁', '🐢🛏️', '🐢🍕'] },
          { s: ['Toby did not look where he was going.', 'He looked up at the moon, and he bumped his toe on a shell.'], pic: '🌙', focus: '60% 30%', check: ['🐢🌙🐚', '🐢🚗', '🐢🎂'] },
          { s: ['"Try to dash!" said Tess.', '"The sea is our home!"'], pic: '🌊', focus: '70% 50%', check: ['🐢💬🌊', '🐢😴', '🐢🎸'] },
          { s: ['So Toby ran as fast as he could go.', 'Both turtles got to the sea, and they will grow up big and strong.', 'The lesson: keep your mind on your job.'], pic: '💪', focus: '70% 50%', check: ['🐢🐢🌊', '🐢🏔️', '🐢🍦'] }
        ],
        question: { pre: { q: 'Why did Toby bump his toe?', opts: ['🌙 He was looking at the moon', '🦀 A crab pinched him', '🏃 He ran too fast'], mishap: 'Hmm, what was Toby looking at?' },
          q: 'Tap the sentence that tells why.', a: 'did not look where he was going', near: ['looked up at the moon'], nearText: 'Good thinking! That sentence tells what he looked at. Find the one that says he did not watch where he was going.', mishap: 'Oops! I looked at the moon too and walked into a palm tree. 🌴 Try again!' },
        advisor: { type: 'odd', q: 'Which one does NOT match Toby?', opts: ['🏆 He was the fastest', '🌙 He looked at the moon', '🦶 He bumped his toe', '🌊 He got to the sea'],
          whyQ: 'Why not? Pick the reason from the postcard.', whys: ['Tess was fast, but Toby was slow.', 'Toby did not like races.'], mishap: 'Look back at the postcard. Who was fast?' },
        fill: { kind: 'word', sent: 'Both turtles got to the sea, and they will ___ up big and strong.', opts: ['grow', 'glow', 'grew'] },
        spell: { w: 'toe', sent: 'He bumped his ___ on a shell.', split: 't[oe]', pic: '🦶' }
      },
      sky: {
        title: 'The Daydreaming Hatchling',
        targets: ['sea', 'speedy', 'dreamy', 'see', 'leaf', 'happy', 'funny', 'hungry', 'shiny', 'reached', 'keep'],
        model: {
          title: 'y at the end says /ē/',
          lines: ['When y comes at the end of a longer word, it often says /ē/.', 'happy, funny, speedy, shiny'],
          ex: [{ w: 'hap|p[y]', tag: 'y = /ē/' }, { w: 'fun|n[y]', tag: 'y = /ē/' }, { w: 'sp[ee]|d[y]', tag: 'y = /ē/' }, { w: 'sh[i]|n[y]', tag: 'y = /ē/' }]
        },
        sort: { a: 'y says /ē/ 😄', b: 'y says /ī/ 🌤️', items: [['happy', 'a'], ['sky', 'b'], ['funny', 'a'], ['fly', 'b']], hint: 'Say it out loud. Does the y sound like "ee" or like "eye"?', split: { happy: 'happ[y]', sky: 'sk[y]', funny: 'funn[y]', fly: 'fl[y]' } },
        build: { w: 'fun|ny', tiles: ['fun', 'ny', 'nee'], pic: '😂', clue: 'It makes you laugh.' },
        pick: { w: 'shiny', opts: ['shiny', 'shiney', 'shinee'], pic: '🌟', clue: 'Bright and sparkly.', split: 'sh[i]|n[y]' },
        hear: { w: 'hungry', opts: ['hungry', 'hungree', 'hungrey'], pic: '😋', clue: 'You want to eat.', split: 'hun|gr[y]' },
        rebel: { words: ['my', 'happy', 'funny', 'dreamy'], why: '"my" ends in y, but it says /ī/! In very short words, y often says /ī/.' },
        chunks: [
          { s: ['Greetings from Costa Rica, where baby sea turtles hatch on a sandy beach at night.', 'Last night I watched a race between two hatchlings, and it was as funny as a fable.'], pic: '🏖️', focus: '50% 60%', check: ['🐢🌙🏖️', '🐢❄️', '🐢🏙️'] },
          { s: ['Tess was speedy and ready to go.', 'She did not stroll or walk; she began to sprint toward the sea.'], pic: '💨', focus: '70% 60%', check: ['🐢💨🌊', '🐢🛏️', '🐢🍕'] },
          { s: ['Toby was a dreamy little turtle.', 'He stopped to see the shiny moon, to sniff a leaf, and to wave at a crab.'], pic: '🌙', focus: '40% 40%', check: ['🐢🌙🦀', '🐢🚗', '🐢🎂'] },
          { s: ['"Hurry!" called Tess.', '"The sea is our home, and a hungry bird might be flying by!"'], pic: '🐦', focus: '60% 20%', check: ['🐢💬🐦', '🐢😴', '🐢🎸'] },
          { s: ['Toby finally noticed the bird in the sky, and he began to dash as fast as his flippers could carry him.', 'He reached the sea just in time, happy and safe.'], pic: '🌊', focus: '70% 50%', check: ['🐢💨🌊', '🐢🏔️', '🐢🍦'] },
          { s: ['The lesson: when you have an important job, keep your eyes on it.', 'I am a little dreamy too, so I will try to remember that!'], pic: '👀', focus: '50% 50%', check: ['🐦👀💡', '🐦🎂', '🐦🚀'] }
        ],
        question: { pre: { q: 'Which word means the FASTEST way to move?', opts: ['🏃 sprint', '🚶 stroll', '🐢 crawl'], mishap: 'Stroll is a slow, easy walk. Which word is the fastest?' },
          q: 'Shades of meaning: Tap the sentence that shows Tess moving super fast.', a: 'began to sprint toward the sea', mishap: 'Oops! I tried to sprint and tripped over my own feet. 🦶 Try again!' },
        advisor: { type: 'odd', q: 'Which one did Toby NOT stop to do?', opts: ['🍕 Eat a snack', '🌙 See the moon', '🍃 Sniff a leaf', '🦀 Wave at a crab'],
          whyQ: 'Why not? Pick the reason from the postcard.', whys: ['The postcard says he stopped to see, sniff, and wave, but not to eat.', 'Turtles do not like snacks.'], mishap: 'Look back at the postcard. What did Toby stop to do?' },
        fill: { kind: 'word', sent: 'He reached the sea just in time, ___ and safe.', opts: ['happy', 'hippo', 'hopping'] },
        spell: { w: 'speedy', sent: 'Tess was ___ and ready to go.', split: 'sp[ee]|d[y]', pic: '💨' }
      },
      space: {
        title: 'The Sprinter Who Stopped to Stare',
        targets: ['amble', 'stroll', 'bolted', 'meandered', 'sprinted', 'tremendous', 'determination', 'championship', 'curious', 'emerged'],
        model: {
          title: 'Shades of meaning: verbs',
          lines: ['Some verbs mean almost the same thing, but show a different speed or feeling.', 'amble → stroll → jog → dash → sprint → bolt'],
          ex: [{ w: 'am|ble', tag: 'slow and relaxed' }, { w: 'me|an|der', tag: 'wander in curves' }, { w: 'sprint', tag: 'run very fast' }, { w: 'bolt', tag: 'rush off suddenly' }]
        },
        sort: { a: 'Slow 🐌', b: 'Fast 💨', items: [['amble', 'a'], ['sprint', 'b'], ['stroll', 'a'], ['bolt', 'b']], hint: 'Picture someone doing it. Are they relaxed or rushing?' },
        build: { w: 'de|ter|mi|na|tion', tiles: ['de', 'ter', 'mi', 'na', 'tion', 'shun'], pic: '💪', clue: 'Not giving up.' },
        pick: { w: 'meandered', opts: ['meandered', 'meandred', 'meanderd'], pic: '🌀', clue: 'Wandered slowly in curvy paths.', split: 'me|an|der[ed]' },
        hear: { w: 'tremendous', opts: ['tremendous', 'tremendus', 'tremendious'], pic: '💥', clue: 'Very, very big.', split: 'tre|men|dous' },
        rebel: { words: ['strolled', 'sprinted', 'bolted', 'dashed'], why: '"strolled" is slow and relaxed. The other three all mean moving FAST!' },
        chunks: [
          { s: ['Greetings from Tortuguero, Costa Rica, whose name means "region of turtles," because thousands of sea turtles nest along its beaches.', 'Last night, I witnessed a hatchling race that reminded me of a famous fable about staying focused.'], pic: '🏖️', focus: '50% 60%', check: ['🐢🌙🏖️', '🐢❄️', '🐢🏙️'] },
          { s: ['Two hatchlings emerged from the sand at the same moment.', 'Tess did not amble or stroll; she bolted toward the surf with tremendous determination.'], pic: '💨', focus: '70% 60%', check: ['🐢💨🌊', '🐢🛏️', '🐢🍕'] },
          { s: ['Her brother Toby, however, was a daydreamer.', 'He meandered across the sand, pausing to admire the moonlight, examine a seashell, and chat with a curious crab.'], pic: '🦀', focus: '40% 40%', check: ['🐢🌙🦀', '🐢🚗', '🐢🎂'] },
          { s: ['High above, a frigatebird was scanning the beach for an easy meal.', 'When its shadow crossed the moon, Toby finally understood the danger, and he sprinted to the water faster than he had ever moved.'], pic: '🦅', focus: '60% 20%', check: ['🐢💨🦅', '🐢😴', '🐢🎸'] },
          { s: ['He slipped beneath a wave just in time, gasping but safe.', 'Toby\'s mistake reminded me of anyone who loses focus in a big race, whether it is a turtle on a beach or a runner in a championship.'], pic: '🌊', focus: '70% 50%', check: ['🐢🌊😮‍💨', '🐢🏔️', '🐢🍦'] },
          { s: ['Authors choose verbs carefully, because "stroll" feels relaxed while "bolt" feels urgent.', 'Can you find the other verbs that show how the turtles moved?'], pic: '✏️', focus: '50% 50%', check: ['✏️🔍', '✏️🍕', '✏️🚗'] }
        ],
        question: { pre: { q: 'Shades of meaning: Which verb shows Toby moving slowly and wandering?', opts: ['🌀 meandered', '💨 bolted', '🏃 sprinted'], mishap: 'Bolted and sprinted are fast. Which verb means wandering slowly?' },
          q: 'Tap the sentence with that verb.', a: 'meandered across the sand', mishap: 'Oops! I meandered so much that I got lost. 🗺️ Try again!' },
        advisor: { type: 'mistake', pip: 'Toby raced to the sea as soon as he hatched.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'was a daydreamer', mishap: 'That sentence does not tell what Toby did at first. Try another, advisor!' },
        fill: { kind: 'word', sent: 'He slipped beneath a wave just in time, gasping but ___.', opts: ['safe', 'soft', 'sad'] },
        spell: { w: 'curious', sent: 'Toby chatted with a ___ crab.', split: 'cu|ri|ous', pic: '🦀' }
      }
    }
  },
  /* ======================= WEDNESDAY ======================= */
  {
    day: 3, name: 'Wednesday', place: 'Sahara Desert, Morocco', flag: '🇲🇦', scene: 'img/u2w1_wed_goldfox.webp',
    sceneBrief: 'A burrow at the foot of a sand dune under a starry sky. A young fennec fox (Fenna) stares in dismay at a golden bowl of water, golden beetles and a golden bone around her. Her little brother peeks from the burrow. Pip on a rock, wings over beak.',
    qtype: 'Central message (lesson)', atype: 'How did the character feel?',
    arrive: 'Pip flew back to the desert in Morocco!',
    wiggle: { emoji: '🌟', text: 'Golden statue freeze!', sub: 'Dance! When your grown-up says "gold," freeze like a golden statue. Do it 3 times.' },
    route: {
      q: 'Tomorrow I visit an island full of puffins in Wales. How should I get there?',
      opts: [
        { pic: '⛴️', label: 'Take a ferry boat', echo: 'I took a ferry boat, like you said. Puffins waved at me! ⛴️' },
        { pic: '🪂', label: 'Glide with a parachute', echo: 'I glided down with a parachute, like you said. Soft landing! 🪂' }
      ]
    },
    ps: 'P.S. What is something worth more than gold to you?',
    levels: {
      ground: {
        title: 'Fenna and the Gold Wish',
        targets: ['told', 'gold', 'stone', 'bone', 'bowl', 'alone', 'home', 'knows', 'so', 'said'],
        model: {
          title: 'Magic e: o_e says /ō/',
          lines: ['Magic e is quiet, but it makes the o say its name.', 'not → note, hop → hope'],
          ex: [{ w: 'st[o]n[e]', tag: 'o_e' }, { w: 'b[o]n[e]', tag: 'o_e' }, { w: 'h[o]m[e]', tag: 'o_e' }, { w: 'a|l[o]n[e]', tag: 'o_e' }]
        },
        sort: { a: 'o_e 🪄', b: 'Short o 🧦', items: [['stone', 'a'], ['hot', 'b'], ['bone', 'a'], ['fox', 'b']], hint: 'Is there a magic e at the end?', split: { stone: 'st[o]n[e]', hot: 'h[o]t', bone: 'b[o]n[e]', fox: 'f[o]x' } },
        build: { w: 'a|lone', tiles: ['a', 'lone', 'lon'], pic: '🧍', clue: 'By yourself.' },
        pick: { w: 'bone', opts: ['bone', 'boan', 'bon'], pic: '🦴', clue: 'A dog likes to chew it.', split: 'b[o]n[e]' },
        hear: { w: 'stone', opts: ['stone', 'stoan', 'ston'], pic: '🪨', clue: 'A small rock.', split: 'st[o]n[e]' },
        rebel: { words: ['done', 'bone', 'stone', 'home'], why: '"done" has o and a magic e, but it says /u/! Heart word ❤️.' },
        chunks: [
          { s: ['Today I am back in the desert in Morocco.', 'A fennec fox told me a fable about a fox named Fenna.'], pic: '📖', focus: '50% 40%', check: ['🦊📖', '🦊🍕', '🦊🚗'] },
          { s: ['Fenna liked gold more than anything.', '"I wish all I touch will turn to gold," she said.', 'Poof, it came true!'], pic: '🌟', focus: '50% 50%', check: ['🦊🌟🥇', '🦊🌧️', '🦊⚽'] },
          { s: ['She touched a stone, and it turned to gold.', 'She touched her bone, and it turned to gold too.'], pic: '🦴', focus: '40% 70%', check: ['🪨🦴🥇', '🪨🍦', '🪨🎈'] },
          { s: ['Then she wanted a drink, but the water in her bowl turned to gold!', 'She was so thirsty, and she felt all alone.'], pic: '🥣', focus: '55% 70%', check: ['🦊🥣😢', '🦊🎉', '🦊😴'] },
          { s: ['Fenna made one more wish to take it all back.', '"I do not want gold," she said.', '"I want my home and my friends!"'], pic: '🏠', focus: '40% 80%', check: ['🦊🏠🦊', '🦊🥇🥇', '🦊🚀'] },
          { s: ['Now Fenna knows that friends are worth more than gold.'], pic: '💛', focus: '50% 50%', check: ['🦊💛🦊', '🦊🥇', '🦊🍕'] }
        ],
        question: { pre: { q: 'What did Fenna learn?', opts: ['💛 Friends are worth more than gold', '🥇 Gold is the best thing', '🦴 Bones are yummy'], mishap: 'Look at the very end of the postcard.' },
          q: 'Central message: Tap the sentence that tells the lesson.', a: 'worth more than gold', mishap: 'Oops! I tried to eat a gold coin. Crunch! Ouch! 🪙 Try again!' },
        advisor: { type: 'feel', q: 'How did Fenna feel when her water turned to gold?', opts: ['😢 Thirsty and alone', '🤩 Happy', '😴 Sleepy'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['she felt all alone'], mishap: 'Look for a feeling word near the water part.' },
        fill: { kind: 'word', sent: 'She touched a ___, and it turned to gold.', opts: ['stone', 'stove', 'stamp'] },
        spell: { w: 'home', sent: 'I want my ___ and my friends!', split: 'h[o]m[e]', pic: '🏠' }
      },
      sky: {
        title: 'The Fox Who Wished for Gold',
        targets: ['need', 'beneath', 'greedy', 'dreamed', 'thief', 'piece', 'leaf', 'seed', 'teeth', 'eat', 'please', 'each'],
        model: {
          title: 'ie can say /ē/',
          lines: ['Sometimes i and e team up to say /ē/.', 'piece, thief, field, chief'],
          ex: [{ w: 'p[ie]c[e]', tag: 'ie = /ē/' }, { w: 'th[ie]f', tag: 'ie = /ē/' }, { w: 'f[ie]ld', tag: 'ie = /ē/' }, { w: 'ch[ie]f', tag: 'ie = /ē/' }]
        },
        sort: { a: 'ie says /ē/ 🥧', b: 'ie says /ī/ 👔', items: [['piece', 'a'], ['tie', 'b'], ['thief', 'a'], ['pie', 'b']], hint: 'Say it both ways. Does it sound like "ee" or "eye"?', split: { piece: 'p[ie]ce', tie: 't[ie]', thief: 'th[ie]f', pie: 'p[ie]' } },
        build: { w: 'gree|dy', tiles: ['gree', 'dy', 'die'], pic: '🤑', clue: 'Wanting too much for yourself.' },
        pick: { w: 'thief', opts: ['thief', 'theif', 'theef'], pic: '🦹', clue: 'Someone who takes things.', split: 'th[ie]f' },
        hear: { w: 'teeth', opts: ['teeth', 'teath', 'teth'], pic: '🦷', clue: 'You bite with them.', split: 't[ee]th' },
        rebel: { words: ['friend', 'piece', 'thief', 'field'], why: '"friend" has ie, but it says short e! The others say /ē/.' },
        chunks: [
          { s: ['Greetings from the Sahara in Morocco!', 'Tonight a fennec fox told me a fable under the stars, and I need to share it.'], pic: '📖', focus: '50% 40%', check: ['🦊📖🌟', '🦊🍕', '🦊🚗'] },
          { s: ['Long ago, a greedy fox named Fenna lived in a burrow beneath the dunes.', 'She dreamed of gold every night, and she hid shiny things like a little thief.'], pic: '💰', focus: '40% 70%', check: ['🦊💰🕳️', '🦊🌧️', '🦊⚽'] },
          { s: ['One evening, a desert spirit agreed to grant her one wish.', '"Let everything I touch turn to gold, so I can live like a king in a palace!" Fenna said.'], pic: '👑', focus: '50% 30%', check: ['🦊👑🌟', '🦊🧊', '🦊🎈'] },
          { s: ['At first she was delighted.', 'Each piece of fruit, each leaf, and each seed she touched turned shiny and yellow.'], pic: '🍃', focus: '40% 70%', check: ['🍃🌰🥇', '🍃🍦', '🍃🎸'] },
          { s: ['But when she tried to eat supper, her beetles turned to gold, and her teeth could not bite them.', 'When her little brother ran to hug her, she jumped back just in time.'], pic: '🪲', focus: '55% 70%', check: ['🦊🪲🥇😟', '🦊🎉', '🦊😴'] },
          { s: ['"Please take back my wish!" she begged, and the spirit did.', 'Fenna learned that the things she needed most were food, family, and friends, not gold.'], pic: '💛', focus: '50% 50%', check: ['🦊💛🦊', '🦊🥇', '🦊🍕'] }
        ],
        question: { pre: { q: 'What did Fenna wish for?', opts: ['🥇 Everything she touched would turn to gold', '🍕 A giant pizza', '🏠 A new burrow'], mishap: 'Read what Fenna said to the spirit.' },
          q: 'Tap the sentence with her wish.', a: 'Let everything I touch turn to gold', mishap: 'Oops! I wished for a gold beak. Now I cannot open it! 🤐 Try again!' },
        advisor: { type: 'feel', q: 'How did Fenna feel at FIRST?', opts: ['😃 Delighted', '😢 Sad', '😴 Sleepy'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['At first she was delighted'], mishap: 'Look for the words "At first."' },
        fill: { kind: 'word', sent: 'She dreamed of gold every night, and she hid shiny things like a little ___.', opts: ['thief', 'thumb', 'three'] },
        spell: { w: 'piece', sent: 'Each ___ of fruit turned to gold.', split: 'p[ie]ce', pic: '🍉' }
      },
      space: {
        title: 'Worth Its Weight in Gold',
        targets: ['boldly', 'most', 'told', 'golden', 'generosity', 'precious', 'desperate', 'hoarded', 'idioms', 'overjoyed'],
        model: {
          title: 'Idioms',
          lines: ['An idiom is a saying that means something different from its words.', '"Heart of gold" means very kind. "Worth its weight in gold" means very valuable.'],
          ex: [{ w: 'id|i|om', tag: 'a special saying' }, { w: 'gold|en', tag: '-old family' }, { w: 'bold|ly', tag: '-old family' }, { w: 'most', tag: '-ost family' }]
        },
        sort: { a: 'Idiom 💬', b: 'Means what it says 📏', items: [['heart of gold', 'a'], ['a gold coin', 'b'], ['worth its weight in gold', 'a'], ['a heavy rock', 'b']], hint: 'Could it happen for real, word for word? Then it means what it says.' },
        build: { w: 'gen|er|os|i|ty', tiles: ['gen', 'er', 'os', 'i', 'ty', 'tee'], pic: '🤲', clue: 'Being happy to give and share.' },
        pick: { w: 'precious', opts: ['precious', 'preshus', 'precius'], pic: '💎', clue: 'Very special and valuable.', split: 'pre|[cious]' },
        hear: { w: 'desperate', opts: ['desperate', 'desprate', 'desperit'], pic: '😰', clue: 'Needing help very badly.', split: 'des|per|ate' },
        rebel: { words: ['cost', 'most', 'almost', 'host'], why: '"cost" ends in -ost, but the o is short. In most, almost and host, the o says its name.' },
        chunks: [
          { s: ['Greetings from the Sahara in Morocco, where the dunes glow like melted gold at sunset.', 'A fennec fox with a heart of gold told me a fable that reminded me of the myth of King Midas.'], pic: '🌅', focus: '50% 30%', check: ['🦊🌅📖', '🦊🍕', '🦊🚗'] },
          { s: ['Long ago, a fox named Fenna was so greedy that she hoarded every shiny object she found.', 'When a desert spirit offered her a single wish, she boldly demanded that everything she touched would turn to gold.'], pic: '💰', focus: '40% 70%', check: ['🦊💰🌟', '🦊🌧️', '🦊⚽'] },
          { s: ['At first, Fenna was overjoyed, because her burrow soon glittered like a treasure chest.', 'However, when she tried to eat, her beetles became golden lumps, and her water turned to glittering dust.'], pic: '🪲', focus: '55% 70%', check: ['🪲🥇💧', '🪲🍦', '🪲🎸'] },
          { s: ['The most painful moment came when her younger brother bounded toward her for a hug.', 'Fenna leaped away, realizing that her precious wish could turn him into a cold statue.'], pic: '🦊', focus: '45% 65%', check: ['🦊🦊😨', '🦊🎉', '🦊😴'] },
          { s: ['Desperate, she begged the spirit to reverse the wish, and she promised to share what she had.', 'From then on, she was known for her generosity instead of her greed.'], pic: '🤲', focus: '50% 50%', check: ['🦊🤲🦊', '🦊🥇🥇', '🦊🚀'] },
          { s: ['Fenna\'s story contains two idioms, or sayings that do not mean exactly what they say.', 'Water in the desert is "worth its weight in gold," and a kind friend has a "heart of gold," but neither one is actually made of metal!'], pic: '💬', focus: '50% 50%', check: ['💬💛', '💬🍕', '💬🚗'] }
        ],
        question: { pre: { q: 'Character change: How did Fenna change?', opts: ['🤲 From greedy to generous', '😴 From awake to sleepy', '🏃 From slow to fast'], mishap: 'Compare how Fenna acts at the start and at the end.' },
          q: 'Tap the sentence that shows how she ended up.', a: 'known for her generosity', mishap: 'Oops! I tried to share my gold, but I only had a gold crayon. 🖍️ Try again!' },
        advisor: { type: 'mistake', pip: 'A friend with a heart of gold has a heart made of metal.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'neither one is actually made of metal', mishap: 'That sentence does not explain "heart of gold." Try another, advisor!' },
        fill: { kind: 'word', sent: 'At first, Fenna was ___, because her burrow soon glittered like a treasure chest.', opts: ['overjoyed', 'overslept', 'overdue'] },
        spell: { w: 'boldly', sent: 'She ___ demanded a golden wish.', split: 'b[o]ld|ly', pic: '🦁' }
      }
    }
  },
  /* ======================= THURSDAY ======================= */
  {
    day: 4, name: 'Thursday', place: 'Skomer Island, Wales', flag: '🇬🇧', scene: 'img/u2w1_thu_puffling.webp',
    sceneBrief: 'A green grassy clifftop on Skomer Island at dusk, burrow holes everywhere, sea far below. A fluffy gray puffling (Poppy) peeks nervously from a burrow; an adult puffin with a bright bill stands beside her flapping to show how. Pip giving a wing thumbs-up.',
    qtype: 'Character response to a challenge', atype: 'Would you rather? (with a reason)',
    arrive: 'Pip flew to a puffin island in Wales!',
    wiggle: { emoji: '🐣', text: 'Try, try again!', sub: 'Stand on one foot and count to 5. Wobble? Try again! Now the other foot.' },
    route: {
      q: 'Tomorrow I fly home to New Jersey to host my radio show! How should I get there?',
      opts: [
        { pic: '🚀', label: 'Blast off in a rocket', echo: 'I blasted off in a rocket, like you said. Zoom! 🚀' },
        { pic: '🦢', label: 'Fly with the geese', echo: 'I flew with a flock of geese, like you said. Honk honk! 🦢' }
      ]
    },
    ps: 'P.S. What is something hard that you kept trying until you could do it?',
    levels: {
      ground: {
        title: 'Poppy Tries Again',
        targets: ['go', 'going', 'low', 'grow', 'show', 'both', 'holes', 'over', 'look', 'said', 'little'],
        model: {
          title: 'o all by itself can say /ō/',
          lines: ['When o is at the end of a word part, it can say its name.', 'go, no, go|ing, o|ver. And sneaky both!'],
          ex: [{ w: 'g[o]', tag: 'o = /ō/' }, { w: 'g[o]|ing', tag: 'o = /ō/' }, { w: '[o]|ver', tag: 'o = /ō/' }, { w: 'b[o]th', tag: 'sneaky /ō/' }]
        },
        sort: { a: 'Long o 🅾️', b: 'Short o 🧦', items: [['go', 'a'], ['top', 'b'], ['both', 'a'], ['not', 'b']], hint: 'Does the o say its name?', split: { go: 'g[o]', top: 't[o]p', both: 'b[o]th', not: 'n[o]t' } },
        build: { w: 'o|ver', tiles: ['o', 'ver', 'var'], pic: '🌈', clue: 'Above something.' },
        pick: { w: 'both', opts: ['both', 'boath', 'bothe'], pic: '2️⃣', clue: 'The two of them.', split: 'b[o]th' },
        hear: { w: 'grow', opts: ['grow', 'groe', 'gro'], pic: '🌱', clue: 'Get bigger.', split: 'gr[ow]' },
        rebel: { words: ['to', 'go', 'no', 'so'], why: '"to" ends in o, but it says /oo/! Heart word ❤️.' },
        chunks: [
          { s: ['Today I am on an island in Wales.', 'Puffins make their nests in holes here.'], pic: '🕳️', focus: '50% 60%', check: ['🐦🕳️🏝️', '🐦🌳', '🐦🏙️'] },
          { s: ['A little puffin named Poppy was scared to fly.', '"I will fall!" she said.'], pic: '😨', focus: '40% 55%', check: ['🐣😨', '🐣😂', '🐣😴'] },
          { s: ['Her mom said, "Look at me, flap your wings, and go!"', 'Poppy tried, but she fell low in the grass.'], pic: '🌿', focus: '50% 75%', check: ['🐣⬇️🌿', '🐣🏆', '🐣🍕'] },
          { s: ['She did not give up.', 'She tried again and again, and she got better each time.', 'Her wings started to grow strong.'], pic: '💪', focus: '50% 50%', check: ['🐣🔁💪', '🐣🛏️', '🐣🎮'] },
          { s: ['Then one night, Poppy ran and flew over the sea!', 'Now she can show both of her friends how to fly.', 'The lesson: keep going, even when it is hard.'], pic: '🌊', focus: '70% 40%', check: ['🐣✈️🌊', '🐣🚗', '🐣🎂'] }
        ],
        question: { pre: { q: 'What problem did Poppy have?', opts: ['😨 She was scared to fly', '🍕 She was hungry', '🌧️ It was raining'], mishap: 'Hmm, read the part about Poppy. What was she scared of?' },
          q: 'Tap the sentence that tells her problem.', a: 'scared to fly', mishap: 'Oops! I tried to fly backward to show her. I bumped a rock! 🪨 Try again!' },
        advisor: { type: 'rather', q: 'Would you rather be Poppy or Poppy\'s mom?', choices: [
          { label: '🐣 Poppy', q: 'Pick a reason from the postcard:', reasons: ['I could fly over the sea at last!', 'I could drive a car.'] },
          { label: '🐦 Poppy\'s mom', q: 'Pick a reason from the postcard:', reasons: ['I could help my baby learn to flap.', 'I could eat ice cream all day.'] }
        ], mishap: 'That is fun, but the postcard does not say it! Pick a reason from the postcard.' },
        fill: { kind: 'word', sent: 'Her wings started to ___ strong.', opts: ['grow', 'glow', 'grab'] },
        spell: { w: 'show', sent: 'Now she can ___ her friends how to fly.', split: 'sh[ow]', pic: '👉' }
      },
      sky: {
        title: 'Poppy Keeps Trying',
        targets: ['green', 'key', 'piece', 'keep', 'queen', 'breeze', 'need', 'feel', 'happy', 'each', 'sea'],
        model: {
          title: 'ey and ee say /ē/',
          lines: ['ey at the end can say /ē/: key, monkey.', 'ee is a strong team: queen, green, keep.'],
          ex: [{ w: 'k[ey]', tag: 'ey' }, { w: 'mon|k[ey]', tag: 'ey' }, { w: 'qu[ee]n', tag: 'ee' }, { w: 'br[ee]ze', tag: 'ee' }]
        },
        sort: { a: 'ey 🔑', b: 'ee 👑', items: [['key', 'a'], ['queen', 'b'], ['monkey', 'a'], ['green', 'b']], hint: 'Look for the team: e + y, or e + e?', split: { key: 'k[ey]', queen: 'qu[ee]n', monkey: 'monk[ey]', green: 'gr[ee]n' } },
        build: { w: 'prac|tic|ing', tiles: ['prac', 'tic', 'ing', 'tick'], pic: '🎯', clue: 'Doing it again and again to get better.' },
        pick: { w: 'breeze', opts: ['breeze', 'breez', 'breaze'], pic: '🍃', clue: 'A soft wind.', split: 'br[ee]ze' },
        hear: { w: 'key', opts: ['key', 'kee', 'kea'], pic: '🔑', clue: 'It opens a lock.', split: 'k[ey]' },
        rebel: { words: ['they', 'key', 'monkey', 'donkey'], why: '"they" has ey, but it says /ā/! The others say /ē/.' },
        chunks: [
          { s: ['Greetings from Skomer, a green island near the coast of Wales.', 'Every summer, thousands of puffins dig burrows here, and I met a puffling named Poppy.'], pic: '🕳️', focus: '50% 60%', check: ['🐦🕳️🏝️', '🐦🌳', '🐦🏙️'] },
          { s: ['Poppy had a big problem: she was afraid to leave her cozy burrow and fly to the sea.', '"What if I fall?" she squeaked.'], pic: '😨', focus: '40% 55%', check: ['🐣😨', '🐣😂', '🐣😴'] },
          { s: ['Her mom gave her a key piece of advice.', '"Nobody flies on the first try, so keep practicing, and you will get stronger."'], pic: '🔑', focus: '50% 50%', check: ['🐦💬🐣', '🐦🎸', '🐦⚽'] },
          { s: ['Each night, Poppy crept to the edge of the cliff and flapped her wings.', 'She tumbled into the grass again and again, but she did not quit.'], pic: '🌿', focus: '50% 75%', check: ['🐣⬇️🌿', '🐣🏆', '🐣🍕'] },
          { s: ['On the fifth night, a breeze lifted her up, and she zoomed over the waves like a queen of the sky!', 'She landed with a happy splash.'], pic: '🌊', focus: '70% 40%', check: ['🐣✈️🌊', '🐣🚗', '🐣🎂'] },
          { s: ['Poppy taught me a lesson I need too: mistakes help you learn.', 'I will think of her the next time I feel like giving up.'], pic: '💡', focus: '50% 50%', check: ['🐦💡', '🐦😡', '🐦🍕'] }
        ],
        question: { pre: { q: 'What is the central message?', opts: ['💪 Keep trying, because mistakes help you learn', '😴 Stay in bed', '🌊 The sea is cold'], mishap: 'Look near the end. Pip tells what Poppy taught.' },
          q: 'Tap the sentence that tells the lesson.', a: 'mistakes help you learn', mishap: 'Oops! I tried to learn to swim like a puffin. Glub glub! 💦 Try again!' },
        advisor: { type: 'rather', q: 'Would you rather tumble in the grass like Poppy or zoom over the waves?', choices: [
          { label: '🌿 Tumble in the grass', q: 'Pick a reason from the postcard:', reasons: ['I could practice again and again.', 'I could eat the grass for lunch.'] },
          { label: '🌊 Zoom over the waves', q: 'Pick a reason from the postcard:', reasons: ['I could fly like a queen of the sky!', 'I could ride a bike on the water.'] }
        ], mishap: 'That is fun, but the postcard does not say it! Pick a reason from the postcard.' },
        fill: { kind: 'word', sent: 'She landed with a ___ splash.', opts: ['happy', 'hippo', 'heavy'] },
        spell: { w: 'queen', sent: 'She zoomed like a ___ of the sky!', split: 'qu[ee]n', pic: '👑' }
      },
      space: {
        title: 'The Puffling Who Refused to Quit',
        targets: ['courage', 'motivation', 'determination', 'encouragement', 'bolder', 'most', 'cold', 'terrified', 'attempt', 'clumsily'],
        model: {
          title: 'Character motivation',
          lines: ['Motivation is the reason a character does something.', 'Ask: What does the character want? What is stopping them?'],
          ex: [{ w: 'mo|ti|va|tion', tag: 'the reason why' }, { w: 'cour|age', tag: 'being brave when scared' }, { w: 'bold|er', tag: '-old family' }, { w: 'most', tag: '-ost family' }]
        },
        sort: { a: 'Feeling inside 💭', b: 'Action 🏃', items: [['terrified', 'a'], ['practiced', 'b'], ['nervous', 'a'], ['soared', 'b']], hint: 'Is it something you feel, or something you do?' },
        build: { w: 'en|cour|age|ment', tiles: ['en', 'cour', 'age', 'ment', 'mint'], pic: '📣', clue: 'Words that help someone keep going.' },
        pick: { w: 'terrified', opts: ['terrified', 'terified', 'terrafied'], pic: '😱', clue: 'Very, very scared.', split: 'ter|ri|fied' },
        hear: { w: 'courage', opts: ['courage', 'curage', 'couradge'], pic: '🦁', clue: 'Being brave even when you are scared.', split: 'cour|[age]' },
        rebel: { words: ['clumsily', 'bravely', 'slowly', 'quickly'], why: '"clumsily" changes y to i before -ly: clumsy → clumsily. The others just add -ly.' },
        chunks: [
          { s: ['Greetings from Skomer Island, Wales, a windswept island that is home to one of the largest puffin colonies in Britain.', 'This summer, I became friends with a puffling named Poppy, who taught me the true meaning of courage.'], pic: '🕳️', focus: '50% 60%', check: ['🐦🕳️🏝️', '🐦🌳', '🐦🏙️'] },
          { s: ['Most pufflings leave their burrows after about six weeks, but Poppy was terrified of the edge of the cliff.', 'The wind howled, the waves crashed far below, and the drop looked enormous.'], pic: '😨', focus: '40% 55%', check: ['🐣😨🌊', '🐣😂', '🐣😴'] },
          { s: ['"What if I fail?" she whispered, trembling in the cold.', 'Her father replied, "Every puffin who ever flew was a beginner once."'], pic: '💬', focus: '50% 50%', check: ['🐦💬🐣', '🐦🎸', '🐦⚽'] },
          { s: ['Poppy\'s motivation was simple: she was hungry, and the fish were in the sea, not in the burrow.', 'So night after night, she practiced flapping, and night after night, she tumbled clumsily into the grass.'], pic: '🐟', focus: '50% 75%', check: ['🐣🐟🌿', '🐣🏆', '🐣🍕'] },
          { s: ['Instead of giving up, she noticed that each attempt carried her a little farther.', 'With determination, she grew bolder, and on the tenth night, she soared over the cliff and glided down to the water.'], pic: '🌊', focus: '70% 40%', check: ['🐣✈️🌊', '🐣🚗', '🐣🎂'] },
          { s: ['Her encouragement to me was, "Mistakes are not the opposite of success; they are part of it."', 'Tomorrow I fly home to New Jersey, where I will host a radio show about a very slow race.'], pic: '📻', focus: '50% 50%', check: ['🐦📻', '🐦😡', '🐦🍕'] }
        ],
        question: { pre: { q: 'Character motivation: WHY did Poppy keep practicing?', opts: ['🐟 She was hungry, and the fish were in the sea', '🏆 She wanted a trophy', '🌧️ It was raining'], mishap: 'Look for the word "motivation" in the postcard.' },
          q: 'Tap the sentence that tells her motivation.', a: 'she was hungry', mishap: 'Oops! I offered Poppy a cookie. Puffins want fish! 🍪 Try again!' },
        advisor: { type: 'predict', q: 'What will Pip do tomorrow?', opts: ['📻 Host a radio show about a slow race', '🏔️ Climb a mountain', '🐧 Visit penguins'], evQ: 'Tap the clue in the postcard.', a: ['host a radio show'], mishap: 'Look for a clue about tomorrow!' },
        fill: { kind: 'word', sent: 'The wind howled, the waves crashed far below, and the drop looked ___.', opts: ['enormous', 'nervous', 'famous'] },
        spell: { w: 'attempt', sent: 'Each ___ carried her a little farther.', split: 'at|tempt', pic: '🎯' }
      }
    }
  },
  /* ======================= FRIDAY ======================= */
  {
    day: 5, name: 'Friday', place: 'The Jersey Shore, New Jersey', flag: '🏠', scene: 'img/u2w1_fri_slowrace.webp',
    sceneBrief: 'A quiet New Jersey beach in fall with dunes and beach grass, a lighthouse far away. Storybook style: a fennec fox snoozing under beach grass while a sea turtle plods past toward a big stone finish line. Pip at a little radio microphone on a beach chair.',
    qtype: 'Compare two fables', atype: 'Pip made a mistake',
    arrive: 'Pip flew home to the Jersey Shore!',
    compareWith: 1,
    wiggle: { emoji: '🐢', text: 'Slow and steady!', sub: 'Walk across the room in super slow motion. Then zoom back like a fox!' },
    route: {
      q: 'Next week I visit animals with kind hearts! How should I get there?',
      opts: [
        { pic: '💝', label: 'Follow a trail of hearts', echo: 'I followed a trail of hearts, like you said. So sweet! 💝' },
        { pic: '🌈', label: 'Slide down a rainbow', echo: 'I slid down a rainbow, like you said. Wheee! 🌈' }
      ]
    },
    ps: 'P.S. Which lesson do you like better: Ollie\'s or Shelly\'s? Why?',
    radio: {
      title: 'Pip\'s Radio Hour: The Great Slow Race',
      parts: ['Pip', 'Fen the Fox', 'Shelly the Sea Turtle'],
      lines: [
        ['Pip', 'Beep beep! This is Pip, live from the Jersey Shore! Today we have a race!'],
        ['Fen the Fox', 'A race? Ha! I am the fastest fox in the whole wide world.'],
        ['Shelly the Sea Turtle', 'Hello, everyone. I am Shelly. I am slow, but I do not quit.'],
        ['Pip', 'The finish line is the big stone. On your mark... get set... go!'],
        ['Fen the Fox', 'Zoom! Look how fast I go! Bye-bye, slowpoke!'],
        ['Shelly the Sea Turtle', 'Step. Step. Step. I will keep going.'],
        ['Fen the Fox', 'I am so far ahead. I will eat a snack. Then I will take a little nap.'],
        ['Pip', 'Oh no! Fen is snoring! Shelly is still going, slow and steady!'],
        ['Shelly the Sea Turtle', 'Step. Step. Step. I can see the stone!'],
        ['Fen the Fox', 'Huh? What? Who is that on the stone?'],
        ['Shelly the Sea Turtle', 'It is me! I won the race!'],
        ['Pip', 'Fen, what did you learn today?'],
        ['Fen the Fox', 'Being fast is not enough. I was too proud, and I stopped trying.'],
        ['Shelly the Sea Turtle', 'And I learned that slow and steady wins the race.'],
        ['Pip', 'It is like Ollie the otter on Monday. She stopped paying attention, too!'],
        ['ALL', 'This is Pip\'s Radio Hour, signing off! Over and out!']
      ]
    },
    levels: {
      ground: {
        title: 'The Great Slow Race',
        targets: ['home', 'boast', 'so', 'slow', 'stone', 'going', 'no', 'said', 'because', 'told'],
        model: {
          title: 'Long o review',
          lines: ['oa, oe, o_e, ow, and o by itself can all say /ō/.', 'boast, toe, stone, slow, going'],
          ex: [{ w: 'b[oa]st', tag: 'oa' }, { w: 't[oe]', tag: 'oe' }, { w: 'st[o]n[e]', tag: 'o_e' }, { w: 'sl[ow]', tag: 'ow' }]
        },
        sort: { a: 'Long o 🅾️', b: 'Short o 🧦', items: [['slow', 'a'], ['fox', 'b'], ['stone', 'a'], ['pond', 'b']], hint: 'Does the o say its name?', split: { slow: 'sl[ow]', fox: 'f[o]x', stone: 'st[o]n[e]', pond: 'p[o]nd' } },
        build: { w: 'fol|low', tiles: ['fol', 'low', 'loe'], pic: '👣', clue: 'Go after someone.' },
        pick: { w: 'boast', opts: ['boast', 'bost', 'bowst'], pic: '🗣️😎', clue: 'Brag about yourself.', split: 'b[oa]st' },
        hear: { w: 'throw', opts: ['throw', 'thro', 'throe'], pic: '⚾', clue: 'Toss a ball.', split: 'thr[ow]' },
        rebel: { words: ['how', 'bowl', 'slow', 'throw'], why: '"how" has ow, but it says /ow/ like "ouch." The others say /ō/!' },
        chunks: [
          { s: ['Today I am home at the Jersey Shore.', 'I told my friends a fable about a fox and a turtle.'], pic: '📖', focus: '50% 40%', check: ['🦊🐢📖', '🦊🍕', '🦊🚗'] },
          { s: ['Fen the fox liked to boast.', '"I am so fast, and you are so slow!" he said to Shelly the turtle.'], pic: '😎', focus: '40% 60%', check: ['🦊😎🐢', '🦊😢', '🦊😴'] },
          { s: ['"Let\'s race to the big stone," said Shelly.', 'Fen ran fast, but then he lay down for a nap.'], pic: '😴', focus: '40% 70%', check: ['🦊😴', '🦊🏊', '🦊🎸'] },
          { s: ['Shelly did not stop.', 'She kept going, slow and steady, past the sleeping fox.', 'She got to the stone first!'], pic: '🪨', focus: '70% 60%', check: ['🐢🪨🏆', '🐢😴', '🐢🍦'] },
          { s: ['On Monday, Ollie lost her clams because she did not pay attention.', 'Fen lost the race because he was too proud.', 'The lesson: slow and steady wins the race, so no boasting!'], pic: '🐢', focus: '50% 50%', check: ['🐢🏆🦊', '🐢🎂', '🐢🚀'] }
        ],
        question: { pre: { q: 'Think about Monday\'s fable and today\'s fable. What is the SAME?', opts: ['🙈 A character lost because of a mistake', '🥇 Both are about gold', '🐧 Both have penguins'], mishap: 'Hmm, is that true for BOTH fables?' },
          q: 'Tap the sentence in today\'s postcard that tells why Fen lost.', a: 'he was too proud', mishap: 'Oops! I tried to race a turtle and took a nap too. 😴 Try again!' },
        advisor: { type: 'mistake', pip: 'Fen the fox won the race.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'She got to the stone first', mishap: 'That sentence does not tell who won. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Fen ran fast, but then he lay down for a ___.', opts: ['nap', 'nail', 'net'] },
        spell: { w: 'slow', sent: 'You are so ___!', split: 'sl[ow]', pic: '🐢' }
      },
      sky: {
        title: 'Slow and Steady at the Shore',
        targets: ['beach', 'sea', 'breeze', 'speedy', 'tease', 'seen', 'eat', 'treat', 'creature', 'being'],
        model: {
          title: 'Plural endings: -s and -es',
          lines: ['Add -s to most words: dune → dunes, treat → treats.', 'Add -es after s, x, sh, or ch: beach → beaches, fox → foxes.'],
          ex: [{ w: 'dune|[s]', tag: '+ s' }, { w: 'treat|[s]', tag: '+ s' }, { w: 'beach|[es]', tag: '+ es' }, { w: 'fox|[es]', tag: '+ es' }]
        },
        sort: { a: '+ s 🟢', b: '+ es 🟣', items: [['dune', 'a'], ['beach', 'b'], ['treat', 'a'], ['fox', 'b']], hint: 'Does it end in s, x, sh, or ch? Then add -es.', split: { beach: 'bea[ch]', fox: 'fo[x]' } },
        build: { w: 'crea|ture', tiles: ['crea', 'ture', 'cher'], pic: '🐾', clue: 'Any living animal.' },
        pick: { w: 'beach', opts: ['beach', 'beache', 'bech'], pic: '🏖️', clue: 'Sand next to the sea.', split: 'b[ea]ch' },
        hear: { w: 'speedy', opts: ['speedy', 'speedey', 'speady'], pic: '💨', clue: 'Very fast.', split: 'sp[ee]|d[y]' },
        rebel: { words: ['head', 'beach', 'tease', 'treat'], why: '"head" has ea, but it says short e! The others say /ē/.' },
        chunks: [
          { s: ['Greetings from the Jersey Shore, where the beach is quiet and the sea breeze is cool.', 'I am home, and I have one more fable to share this week.'], pic: '🏖️', focus: '50% 60%', check: ['🐦🏖️🍃', '🐦❄️', '🐦🌋'] },
          { s: ['Fen the fox was speedy, and he loved to tease Shelly the sea turtle.', '"You are the slowest creature I have ever seen!" he said.'], pic: '😎', focus: '40% 60%', check: ['🦊😎🐢', '🦊😢', '🦊😴'] },
          { s: ['Shelly smiled and said, "Let\'s have a race to the big dune."', 'Fen was so sure he would win that he stopped to eat a treat and take a nap.'], pic: '😴', focus: '40% 70%', check: ['🦊🍪😴', '🦊🏊', '🦊🎸'] },
          { s: ['Meanwhile, Shelly kept going, one step, then another, and another.', 'When Fen woke up, she was already sitting on top of the dune!'], pic: '🏆', focus: '70% 40%', check: ['🐢⛰️🏆', '🐢😴', '🐢🍦'] },
          { s: ['This fable reminds me of Ollie the otter from Monday.', 'Ollie and Fen were so busy dreaming or boasting that they did not pay attention.', 'The lesson: slow and steady wins the race, and being proud is not the same as being ready.'], pic: '🐢', focus: '50% 50%', check: ['🐢🏆🦊', '🐢🎂', '🐢🚀'] }
        ],
        question: { pre: { q: 'How are Ollie and Fen the SAME?', opts: ['🙈 They did not pay attention', '🏆 They both won', '🐢 They are both turtles'], mishap: 'Is that true for BOTH of them? Think about what went wrong.' },
          q: 'Tap the sentence that tells how they are the same.', a: 'did not pay attention', mishap: 'Oops! I was not paying attention and flew into a beach umbrella. ⛱️ Try again!' },
        advisor: { type: 'feel', q: 'How did Fen feel before the race?', opts: ['😎 Too sure of himself', '😨 Scared', '😢 Sad'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['so sure he would win'], mishap: 'Look for what Fen thought about winning.' },
        fill: { kind: 'word', sent: 'Fen was so sure he would win that he stopped to eat a ___ and take a nap.', opts: ['treat', 'tree', 'trust'] },
        spell: { w: 'tease', sent: 'He loved to ___ Shelly.', split: 't[ea]se', pic: '😜' }
      },
      space: {
        title: 'Two Fables, Two Morals',
        targets: ['boastful', 'overconfident', 'patient', 'plodded', 'motivations', 'compare', 'celebrated', 'impatient', 'admired', 'narrated'],
        model: {
          title: 'Compare and contrast',
          lines: ['Compare = how things are alike. Contrast = how they are different.', 'Clue words: both, same, however, while, different.'],
          ex: [{ w: 'com|pare', tag: 'find what is alike' }, { w: 'con|trast', tag: 'find what is different' }, { w: 'how|ev|er', tag: 'a contrast clue' }, { w: 'boast|ful', tag: 'full of bragging' }]
        },
        sort: { a: 'Alike clue 🤝', b: 'Different clue ↔️', items: [['both', 'a'], ['however', 'b'], ['same', 'a'], ['while', 'b']], hint: 'Does the word show things are alike or different?' },
        build: { w: 'o|ver|con|fi|dent', tiles: ['o', 'ver', 'con', 'fi', 'dent', 'dant'], pic: '😎', clue: 'Too sure you will win.' },
        pick: { w: 'patient', opts: ['patient', 'pashent', 'patiant'], pic: '⏳', clue: 'Able to wait calmly.', split: 'pa|[tient]' },
        hear: { w: 'narrated', opts: ['narrated', 'narated', 'narrateded'], pic: '🎙️', clue: 'Told a story out loud.', split: 'nar|rat|[ed]' },
        rebel: { words: ['patient', 'impatient', 'impossible', 'imperfect'], why: '"patient" has no prefix. In the others, im- means "not."' },
        chunks: [
          { s: ['Greetings from Island Beach State Park on the Jersey Shore, where the ocean breeze is growing chilly as autumn arrives.', 'I have finally flown home, and I want to compare two fables from my travels.'], pic: '🏖️', focus: '50% 60%', check: ['🐦🏖️🍂', '🐦❄️', '🐦🌋'] },
          { s: ['This afternoon, I narrated a fable about Fen, a boastful fennec fox, and Shelly, a patient sea turtle.', 'Fen bragged that he was the fastest animal in the world, so Shelly calmly challenged him to a race.'], pic: '🎙️', focus: '40% 60%', check: ['🦊🐢🎙️', '🦊😢', '🦊😴'] },
          { s: ['Fen was so overconfident that he paused for a snack and then a nap, certain that he could never lose.', 'Meanwhile, Shelly plodded along without stopping, and she crossed the finish line while Fen was still snoring.'], pic: '🏁', focus: '70% 40%', check: ['🐢🏁🦊😴', '🐢🏊', '🐢🎸'] },
          { s: ['On Monday, Ollie the otter lost her clams because she was dreaming about the future.', 'Both characters made the same basic mistake: they celebrated before the job was done.'], pic: '🎉', focus: '50% 50%', check: ['🦦🦊🎉', '🦦🏔️', '🦦🍦'] },
          { s: ['However, their motivations were different.', 'Ollie was impatient and wanted to be admired, while Fen was proud and wanted to show off.'], pic: '↔️', focus: '50% 50%', check: ['🦦↔️🦊', '🦦🎂', '🦦🚀'] },
          { s: ['Ollie\'s fable teaches, "Don\'t count your chickens before they hatch," and Shelly\'s fable teaches, "Slow and steady wins the race."', 'Which moral would you choose to remember?'], pic: '🤔', focus: '50% 50%', check: ['🐦🤔📖', '🐦😡', '🐦🏊'] }
        ],
        question: { pre: { q: 'Compare: What mistake did BOTH Ollie and Fen make?', opts: ['🎉 They celebrated before the job was done', '🏊 They could not swim', '📚 They forgot to read'], mishap: 'Look for the word "Both" in the postcard.' },
          q: 'Tap the sentence that tells their shared mistake.', a: 'celebrated before the job was done', mishap: 'Oops! I celebrated before I finished my postcard. Now it is blank! 📭 Try again!' },
        advisor: { type: 'mistake', pip: 'Ollie and Fen had the same motivation.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'their motivations were different', mishap: 'That sentence does not compare their reasons. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Fen was so ___ that he paused for a snack and then a nap, certain that he could never lose.', opts: ['overconfident', 'overcooked', 'overcast'] },
        spell: { w: 'compare', sent: 'I want to ___ two fables.', split: 'com|pare', pic: '⚖️' }
      }
    }
  }
  ]
};

/* ======================= VOCABULARY WORDS (focus: READING them) =======================
   Ground = district Unit 2 Week 1 key words (1-Grade2-ELA.txt, Unit 2 KEY WORDS/VOCABULARY, Week 1).
   Sky = Unit 2 Week 2 words (preview). Space = long words tied to fables and character traits.
   SWAP IN THE TEACHER'S LIST if she sends her own vocabulary. */
(function () {
  const W = window.PIP_WEEKS['u2w1'];
  W.vocab = {
    // Ground (district U2W1)
    market: { misread: 'mar-kee', split: 'm[ar]|k[e]t', say: 'mar|kit', look: ['marker', 'basket'], pic: '🧺🍎', means: 'a place to buy and sell' },
    sell: { misread: 'sale', split: 's[e]ll', look: ['shell', 'smell'], pic: '💵🍎', means: 'give something for money' },
    fresh: { misread: 'fesh', split: 'fr[e]sh', look: ['flesh', 'french'], pic: '🥬🌟', means: 'new and just picked' },
    race: { misread: 'rack', split: 'r[a]c[e]', look: ['rice', 'rake'], pic: '🏁', means: 'a contest to see who is fastest',
      tricky: { mark: 'ra[c]e', says: 'rayss', note: 'c before e says s.' } },
    dash: { misread: 'dish', split: 'd[a]sh', look: ['dish', 'cash'], pic: '💨🏃', means: 'run very fast' },
    hatch: { misread: 'hat', split: 'h[a]tch', look: ['hitch', 'catch'], pic: '🐣', means: 'come out of an egg',
      tricky: { mark: 'ha[tch]', says: 'hach', note: '"tch" says ch.' } },
    wonder: { misread: 'won-der (like won)', split: 'w[o]n|d[er]', say: 'wun|der', look: ['wander', 'winter'], pic: '🤔🌟', means: 'think about and ask why',
      tricky: { mark: 'w[o]nder', says: 'WUN-der', note: 'The o says u.' } },
    finest: { misread: 'fin-est', split: 'f[i]|n[e]st', say: 'fy|nest', look: ['finish', 'fittest'], pic: '⭐👑', means: 'the very best' },
    jealous: { misread: 'jeel-us', split: 'j[ea]l|[ou]s', say: 'jel|us', look: ['zealous', 'joyous'], pic: '😒💚', means: 'wanting what someone else has',
      tricky: { mark: 'j[ea]lous', says: 'JEL-us', note: '"ea" says short e.' } },
    puzzled: { misread: 'puz-zeld', split: 'p[u]z|zl[ed]', say: 'puz|zuld', look: ['puzzle', 'puddled'], pic: '🤔❓', means: 'confused, not sure' },
    sprang: { misread: 'spring', split: 'spr[a]ng', look: ['spring', 'sprung'], pic: '🦘⬆️', means: 'jumped up fast' },
    wedged: { misread: 'wed-ged', split: 'w[e]dg[ed]', look: ['wedding', 'hedged'], pic: '👉📦👈', means: 'squeezed tight into a space',
      tricky: { mark: 'we[dge]d', says: 'wejd', note: '"dge" says j.' } },
    trophy: { misread: 'trop-hee', split: 'tr[o]|ph[y]', say: 'tro|fee', look: ['trophies', 'tropic'], pic: '🏆', means: 'a cup prize for winning',
      tricky: { mark: 'tro[ph]y', says: 'TRO-fee', note: '"ph" says f.' } },
    yards: { misread: 'yeards', split: 'y[ar]ds', look: ['yarns', 'cards'], pic: '📏🏈', means: 'a way to measure distance' },
    foolish: { misread: 'fool-ish', split: 'f[oo]l|[i]sh', say: 'fool|ish', look: ['fooling', 'polish'], pic: '🤪', means: 'silly, not wise' },
    // Sky (U2W2 preview)
    noticed: { misread: 'no-tiked', split: 'n[o]|t[i]c[ed]', say: 'no|tist', look: ['notice', 'nodded'], pic: '👀❗', means: 'saw or spotted',
      tricky: { mark: 'noti[ced]', says: 'NO-tist', note: '"ced" says st.' } },
    supper: { misread: 'super', split: 's[u]p|p[er]', say: 'sup|per', look: ['super', 'upper'], pic: '🍽️🌙', means: 'an evening meal' },
    crept: { misread: 'creep-t', split: 'cr[e]pt', look: ['crest', 'creep'], pic: '🐾🤫', means: 'moved slowly and quietly' },
    hardworking: { misread: 'hard-wor-king', split: 'h[ar]d|w[or]k|[i]ng', say: 'hard|werk|ing', look: ['hardware', 'working'], pic: '💪🧹', means: 'works a lot and tries hard',
      tricky: { mark: 'hardw[or]king', says: 'hard-WERK-ing', note: 'After w, "or" says er.' } },
    unusual: { misread: 'un-us-al', split: '[u]n|[u]|s[u]|[a]l', say: 'un|you|zhoo|ul', look: ['usual', 'unequal'], pic: '🦓🌈', means: 'not normal, surprising' },
    proposed: { misread: 'pro-pose-ed', split: 'pr[o]|p[o]s[ed]', say: 'pruh|pozd', look: ['propped', 'purposed'], pic: '💡🗣️', means: 'offered an idea or plan' },
    king: { misread: 'kin', split: 'k[i]ng', look: ['kind', 'wing'], pic: '👑', means: 'a man who rules a land' },
    palace: { misread: 'pa-lace', split: 'p[a]l|[a]c[e]', say: 'pal|iss', look: ['place', 'palette'], pic: '🏰', means: 'a king or queen\'s huge home' },
    grant: { misread: 'grand', split: 'gr[a]nt', look: ['grand', 'giant'], pic: '🧞🌟', means: 'give or allow' },
    mistreated: { misread: 'mist-reated', split: 'm[i]s|tr[ea]t|[ed]', say: 'mis|treet|id', look: ['mistaken', 'retreated'], pic: '😢👎', means: 'treated in a mean way' },
    'good-hearted': { misread: 'good-heard-ed', split: 'g[oo]d-|h[ear]t|[ed]', say: 'good|hart|id', look: ['good-natured', 'hard-headed'], pic: '💛🤝', means: 'kind and caring',
      tricky: { mark: 'good-h[ear]ted', says: 'good-HAR-tid', note: '"ear" says ar here.' } },
    festival: { misread: 'fes-tee-val', split: 'f[e]s|t[i]|v[a]l', say: 'fes|tih|vul', look: ['festive', 'factual'], pic: '🎪🎉', means: 'a big happy celebration' },
    mourning: { misread: 'morning', split: 'm[our]n|[i]ng', say: 'morn|ing', look: ['morning', 'mounting'], pic: '😢🖤', means: 'feeling sad after a loss',
      tricky: { mark: 'm[our]ning', says: 'MORN-ing', note: 'Sounds like "morning," but it means sad.' } },
    // Space
    consequences: { misread: 'con-seek-wences', split: 'c[o]n|s[e]|q[ue]n|c[es]', say: 'con|sih|kwen|siz', look: ['conferences', 'sequences'], pic: '🥛➡️💦', means: 'what happens because of what you do' },
    impatient: { misread: 'im-pat-ee-ent', split: '[i]m|p[a]|t[ie]nt', say: 'im|pay|shunt', look: ['important', 'patient'], pic: '⏰😤', means: 'not able to wait calmly',
      tricky: { mark: 'impa[tient]', says: 'im-PAY-shunt', note: '"tient" says shunt.' } },
    official: { misread: 'off-ick-al', split: '[o]f|f[i]|c[ia]l', say: 'uh|fish|ul', look: ['office', 'officer'], pic: '📜✅', means: 'real and approved',
      tricky: { mark: 'offi[cial]', says: 'uh-FISH-ul', note: '"cial" says shul.' } },
    championship: { misread: 'champ-ion-ship', split: 'ch[a]m|p[i]|[o]n|sh[i]p', say: 'cham|pee|un|ship', look: ['champion', 'companionship'], pic: '🏆🥇', means: 'the big final contest' },
    disqualification: { misread: 'dis-qual-if-ik', split: 'd[i]s|qu[a]l|[i]|f[i]|c[a]|t[io]n', say: 'dis|kwol|ih|fih|kay|shun', look: ['qualification', 'dissatisfaction'], pic: '🚫🏁', means: 'being put out of a race' },
    overconfident: { misread: 'over-con-fid-ent', split: '[o]|v[er]|c[o]n|f[i]|d[e]nt', say: 'o|ver|con|fih|dent', look: ['confident', 'overcoming'], pic: '😎💤', means: 'too sure you will win' },
    precious: { misread: 'pree-see-us', split: 'pr[e]|c[iou]s', say: 'presh|us', look: ['previous', 'precise'], pic: '💎', means: 'very special and valuable',
      tricky: { mark: 'pre[cious]', says: 'PRESH-us', note: '"cious" says shus.' } },
    desperate: { misread: 'des-per-ate (like late)', split: 'd[e]s|p[er]|[a]t[e]', say: 'des|per|it', look: ['separate', 'desperado'], pic: '😰', means: 'needing help very badly' },
    generosity: { misread: 'gen-er-ose-ity', split: 'g[e]n|[er]|[o]s|[i]|t[y]', say: 'jen|er|os|ih|tee', look: ['generous', 'curiosity'], pic: '🤲🎁', means: 'being happy to share',
      tricky: { mark: '[g]enerosity', says: 'jen-er-OS-ih-tee', note: 'g before e says j.' } },
    determination: { misread: 'de-ter-mine-ation', split: 'd[e]|t[er]|m[i]|n[a]|t[io]n', say: 'dih|ter|mih|nay|shun', look: ['determined', 'termination'], pic: '💪', means: 'not giving up' },
    courageous: { misread: 'cour-age-ous', split: 'c[ou]r|[a]|g[eou]s', say: 'kuh|ray|jus', look: ['contagious', 'curious'], pic: '🦁', means: 'very brave',
      tricky: { mark: 'coura[geous]', says: 'kuh-RAY-jus', note: '"geous" says jus.' } },
    encouragement: { misread: 'en-cour-age-ment (like our)', split: '[e]n|c[our]|[a]g[e]|m[e]nt', say: 'en|ker|ij|ment', look: ['encourage', 'engagement'], pic: '📣💛', means: 'words that help someone keep going' },
    perseverance: { misread: 'per-sev-er-ance', split: 'p[er]|s[e]|v[er]|[a]nc[e]', say: 'per|suh|veer|unss', look: ['persevere', 'performance'], pic: '🧗', means: 'keeping on even when it is hard' },
    comparison: { misread: 'com-pare-ison', split: 'c[o]m|p[a]r|[i]|s[o]n', say: 'cum|pair|ih|sun', look: ['companion', 'compassion'], pic: '⚖️🔍', means: 'looking at how things are alike' }
  };
  /* Warm-up (easy wins first): last week's words. SWAP IN THE TEACHER'S LIST: her Unit 1 Week 3 sheet.
     District U1W3 list shown here. */
  W.warmup = [
    { w: 'play', pic: '⚽', other: '🛏️' }, { w: 'cake', pic: '🎂', other: '🪨' }, { w: 'mail', pic: '✉️', other: '🐸' },
    { w: 'chain', pic: '⛓️', other: '🌸' }, { w: 'paint', pic: '🎨', other: '🐟' }, { w: 'stay', pic: '🏠', other: '🚀' },
    { w: 'break', pic: '🍪', other: '🚲' }, { w: 'great', pic: '👍', other: '🌧️' }, { w: 'April', pic: '🌷', other: '⛄' }, { w: 'like', pic: '❤️', other: '🔨' }
  ];
  // "Type the word you hear". SWAP IN THE TEACHER'S LIST (ground = her spelling list + sight words).
  W.typeWords = {
    ground: [
      { w: 'float', pic: '🛟', sent: 'Boats float on water.' }, { w: 'toe', pic: '🦶', sent: 'I hurt my toe.' }, { w: 'roast', pic: '🔥', sent: 'We roast marshmallows.' },
      { w: 'broke', pic: '💔', sent: 'The glass broke.' }, { w: 'globe', pic: '🌎', sent: 'Spin the globe.' }, { w: 'going', pic: '🏃', sent: 'We are going home.' },
      { w: 'both', pic: '2️⃣', sent: 'I like both of them.' }, { w: 'grow', pic: '🌱', sent: 'Plants grow in the sun.' }, { w: 'bowl', pic: '🥣', sent: 'Soup is in the bowl.' },
      { w: 'throw', pic: '⚾', sent: 'Throw the ball to me.' }, { w: 'because', pic: '💡', sent: 'I smiled because I won.' }, { w: 'look', pic: '👀', sent: 'Look at the moon.' },
      { w: 'said', pic: '💬', sent: 'Mom said yes.' }, { w: 'about', pic: '📖', sent: 'This book is about a fox.' }, { w: 'here', pic: '📍', sent: 'Come here, please.' }
    ],
    sky: [
      { w: 'these', pic: '👇', sent: 'I like these shoes.' }, { w: 'clean', pic: '🧼', sent: 'My hands are clean.' }, { w: 'happy', pic: '😄', sent: 'I am happy today.' },
      { w: 'key', pic: '🔑', sent: 'The key opens the door.' }, { w: 'queen', pic: '👑', sent: 'The queen has a crown.' }, { w: 'leaf', pic: '🍃', sent: 'A leaf fell down.' },
      { w: 'funny', pic: '😂', sent: 'The joke was funny.' }, { w: 'piece', pic: '🍕', sent: 'Can I have a piece of pizza?' }, { w: 'thief', pic: '🦹', sent: 'The thief ran away.' },
      { w: 'need', pic: '🙏', sent: 'I need a nap.' }, { w: 'before', pic: '⏪', sent: 'Wash your hands before lunch.' }, { w: 'after', pic: '⏩', sent: 'We play after school.' }
    ],
    space: [
      { w: 'golden', pic: '🥇', sent: 'The sun set in a golden sky.' }, { w: 'almost', pic: '🏃🏁', sent: 'I am almost done.' }, { w: 'mostly', pic: '📊', sent: 'The sky was mostly blue.' },
      { w: 'unfold', pic: '🗺️', sent: 'Unfold the map.' }, { w: 'host', pic: '🎤', sent: 'Pip is the host of the show.' }, { w: 'scold', pic: '😠', sent: 'Please do not scold the puppy.' },
      { w: 'boldly', pic: '🦁', sent: 'The lion walked boldly.' }, { w: 'coldest', pic: '🥶', sent: 'Today is the coldest day.' }, { w: 'postcard', pic: '📮', sent: 'I got a postcard from Pip.' },
      { w: 'impatient', pic: '⏰', sent: 'I get impatient in long lines.' }, { w: 'patient', pic: '⏳', sent: 'Be patient while you wait.' }, { w: 'compare', pic: '⚖️', sent: 'Compare the two fables.' }
    ]
  };
  // R practice (listening only; never grades her speech).
  W.rPairs = [
    { r: 'run', rp: '🏃', w: 'won', wp: '🏆' }, { r: 'rich', rp: '💰', w: 'witch', wp: '🧙' }, { r: 'rink', rp: '⛸️', w: 'wink', wp: '😉' },
    { r: 'ripe', rp: '🍌', w: 'wipe', wp: '🧻' }, { r: 'rise', rp: '🌅', w: 'wise', wp: '🦉' }
  ];
  W.rWords = [
    { w: 'roast', pic: '🔥', oops: 'woast' }, { w: 'throw', pic: '⚾', oops: 'thwow' }, { w: 'grow', pic: '🌱', oops: 'gwow' },
    { w: 'broke', pic: '💔', oops: 'bwoke' }, { w: 'market', pic: '🧺', oops: 'mahket' }, { w: 'fresh', pic: '🥬', oops: 'fwesh' },
    { w: 'race', pic: '🏁', oops: 'wace' }, { w: 'trophy', pic: '🏆', oops: 'twophy' }, { w: 'sprang', pic: '🦘', oops: 'spwang' },
    { w: 'yards', pic: '📏', oops: 'yahds' }, { w: 'turtle', pic: '🐢', oops: 'tuhtle' }, { w: 'friend', pic: '🤝', oops: 'fwiend' }
  ];
  W.sneaky = [
    { w: 'said', mark: 's[ai]d', says: 'sed', note: 'Sneaky! "ai" says e here.', pic: '💬' },
    { w: 'because', mark: 'bec[au]s[e]', says: 'bee-KUZ', note: 'Sneaky! "au" says u, and s says z.', pic: '💡' },
    { w: 'both', mark: 'b[o]th', says: 'bohth', note: 'Sneaky! The o says its name with no magic e.', pic: '2️⃣' },
    { w: 'do', mark: 'd[o]', says: 'doo', note: 'Sneaky! "o" says oo here.', pic: '✅' },
    { w: 'of', mark: '[of]', says: 'uv', note: 'Sneaky! It sounds like "uv."', pic: '🥛' },
    { w: 'are', mark: '[are]', says: 'ar', note: 'Sneaky! The e is quiet and a does not say its name.', pic: '👥' }
  ];
  W.italia = {
    place: 'A pizzeria in Naples', region: 'Campania, Italy', scene: '🍕🔥',
    pip: 'I am in Naples, where pizza was born! Can you learn 3 Italian words with me?',
    postcard: ['Ciao from Naples!', 'I am at a pizza shop with a big, hot oven.', 'The chef tossed the dough high in the air!', 'Can you teach me some Italian words?'],
    words: [
      { it: 'pizza', pic: '🍕', en: 'pizza', others: ['🍦', '🥕'] },
      { it: 'acqua', pic: '💧', en: 'water', others: ['🔥', '🪨'] },
      { it: 'buono', pic: '😋', en: 'yummy / good', others: ['😢', '😴'] }
    ]
  };
  W.trickyExtra = [
    { w: 'fable', mark: 'fab[le]', says: 'FAY-bul', note: '"le" at the end says ul.', pic: '📖' },
    { w: 'answer', mark: 'ans[w]er', says: 'AN-ser', note: 'The w is quiet!', pic: '💬' }
  ];
  W.vocabByDay = {
    1: { ground: ['market', 'sell', 'fresh'], sky: ['noticed', 'supper', 'crept'], space: ['consequences', 'impatient', 'official'] },
    2: { ground: ['race', 'dash', 'hatch'], sky: ['hardworking', 'unusual', 'proposed'], space: ['championship', 'disqualification', 'overconfident'] },
    3: { ground: ['wonder', 'finest', 'jealous'], sky: ['king', 'palace', 'grant'], space: ['precious', 'desperate', 'generosity'] },
    4: { ground: ['puzzled', 'sprang', 'wedged'], sky: ['mistreated', 'good-hearted', 'noticed'], space: ['determination', 'courageous', 'encouragement'] },
    5: { ground: ['trophy', 'yards', 'foolish'], sky: ['festival', 'mourning', 'unusual'], space: ['perseverance', 'comparison', 'overconfident'] }
  };
  const apply = (day, plan) => ['ground', 'sky', 'space'].forEach((lv) => {
    day.levels[lv].preview = plan[lv].map((w) => Object.assign({ w }, W.vocab[w]));
  });
  W.days.forEach((d) => { if (W.vocabByDay[d.day]) apply(d, W.vocabByDay[d.day]); });
})();
