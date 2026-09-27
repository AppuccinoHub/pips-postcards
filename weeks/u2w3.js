/* Pip's Postcards · Unit 2 Week 3 · Characters Facing Challenges  (STAGED DRAFT, not live)
   School week: Mon Oct 26 – Fri Oct 30, 2026 (v2.8.2: schedule moved back one week). Halloween is Sat Oct 31 (school parties often land on Fri).
   Schema = site/weeks/u1w2.js. Correct answer FIRST in every option list. "|" = syllables, [ ] = pattern letters.
   District source: 1-Grade2-ELA.txt, Unit 2, LEARNING ACTIVITIES Week 3 (long i; review long e; multisyllable
   long i; central message; character responses; poetry & figurative language; shades of meaning). District texts:
   "Great Girls' Contest", "Since Hanna Moved Away", "Firefly Tricks Spider". Pip's postcards are ORIGINAL stories
   about practice, teams and contests. Baby Zoo animals: bat (Mon), pigeon (Tue), penguin (Wed); Friday brings them
   back together. Thursday's postcard is a POEM. Sky previews Unit 3 Week 1 (long u). */
(window.PIP_WEEKS = window.PIP_WEEKS || {})['u2w3'] = {
  id: 'u2w3',
  unit: 2, week: 3,
  title: 'Challenges · Week 3',
  unitTitle: 'Characters Facing Challenges',
  dates: { start: '2026-10-26', end: '2026-10-30', estimated: true },
  school: {
    /* SWAP IN THE TEACHER'S LIST: replace `spelling` (and W.typeWords.ground) with her weekly sheet. */
    spelling: ['pie', 'tie', 'child', 'kind', 'sky', 'dry', 'high', 'lime', 'light', 'bright'],
    hf: ['good', 'many', 'near', 'off', 'people', 'right', 'that', 'two', 'under', 'very'],
    phonics: 'Long i (igh, y, ie, i_e; i by itself in child and kind); review long e; long i in longer words',
    /* Unit 3 Week 1. The district file prints the first HF word as "gain": almost surely "again" (PDF clipping). */
    nextSpelling: ['music', 'menu', 'January', 'few', 'rescue', 'cue', 'use', 'cute', 'huge', 'cube'],
    nextHf: ['again', 'below', 'carry', 'does', 'eight', 'find', 'house', 'laugh', 'mother', 'school'],
    nextPhonics: 'Long u (u_e, ew, ue; u by itself in music and menu)',
    comprehension: 'Central message · character responses · poetry and figurative language · shades of meaning in verbs'
  },
  levels: {
    ground: { focus: 'This week: long i (igh, y, ie, i_e, -ild/-ind)' },
    sky: { focus: 'Next week: long u (u_e, ew, ue, u)' },
    space: { focus: '3rd-grade stretch: -ind/-ild families, character traits and change, antonyms, figurative language, reflexive pronouns' }
  },
  days: [
  /* ======================= MONDAY ======================= */
  {
    day: 1, name: 'Monday', place: 'Austin, Texas', flag: '🇺🇸', scene: 'img/u2w3_mon_bats.webp',
    sceneBrief: 'Sunset over a river and a long concrete city bridge in Austin, a dark ribbon of bats streaming out from under it into an orange-purple sky; people on blankets on the grassy bank. One tiny bat pup (Bitsy) wobbles next to an older bat (Grandma) with a coach whistle. Pip on a lamppost.',
    qtype: 'What did she do?', atype: 'How did the character feel?',
    arrive: 'Pip flew to a big bat bridge in Texas!',
    wiggle: { emoji: '🦇', text: 'Practice flaps!', sub: 'Flap slowly 5 times, then fast 5 times, then glide with your arms out. Practice makes progress!' },
    route: {
      q: 'Tomorrow I visit a pigeon race in Belgium. How should I get there?',
      opts: [
        { pic: '🕊️', label: 'Fly with a pigeon team', echo: 'I flew with a pigeon team, like you said. They were speedy! 🕊️' },
        { pic: '🚢', label: 'Sail on a ship', echo: 'I sailed on a big ship, like you said. The waves were bumpy! 🚢' }
      ]
    },
    ps: 'P.S. What is something you practiced until you got better at it?',
    levels: {
      ground: {
        title: 'Bitsy Learns to Fly',
        targets: ['night', 'fly', 'high', 'try', 'tried', 'sky', 'lights', 'bright', 'glide', 'under'],
        model: {
          title: 'Long i: igh',
          lines: ['i, g, and h team up to say /ī/. The g and h are quiet!', 'high, night, light, bright'],
          ex: [{ w: 'h[igh]', tag: 'igh' }, { w: 'n[igh]t', tag: 'igh' }, { w: 'l[igh]ts', tag: 'igh' }, { w: 'br[igh]t', tag: 'igh' }]
        },
        sort: { a: 'igh 🌙', b: 'y 🌤️', items: [['night', 'a'], ['sky', 'b'], ['bright', 'a'], ['fly', 'b']], hint: 'Do you see i-g-h, or a y at the end?', split: { night: 'n[igh]t', sky: 'sk[y]', bright: 'br[igh]t', fly: 'fl[y]' } },
        build: { w: 'ba|by', tiles: ['ba', 'by', 'bee'], pic: '👶', clue: 'A very young child or animal.' },
        pick: { w: 'night', opts: ['night', 'nite', 'nigt'], pic: '🌙', clue: 'When it is dark outside.', split: 'n[igh]t' },
        hear: { w: 'high', opts: ['high', 'higt', 'hih'], pic: '⬆️', clue: 'Far up.', split: 'h[igh]' },
        rebel: { words: ['weigh', 'high', 'night', 'light'], why: '"weigh" has igh, but it says /ā/! The others say /ī/.' },
        chunks: [
          { s: ['Today I am in Texas, by a big bridge in the city.', 'At night, lots of bats fly out from under it!'], pic: '🌉', focus: '50% 50%', check: ['🦇🦇🌉', '🐟🌉', '🚗🏔️'] },
          { s: ['A baby bat named Bitsy wanted to fly, but she was clumsy.', 'She flapped and flapped, but she fell.'], pic: '🙃', focus: '40% 60%', check: ['🦇⬇️', '🦇🏆', '🦇🍕'] },
          { s: ['Her grandma was her coach.', '"Try again," Grandma said.', '"Flap high, then glide."'], pic: '👵', focus: '55% 55%', check: ['🦇👵💬', '🦇🎸', '🦇⚽'] },
          { s: ['Bitsy tried every night.', 'She got a little better each time.'], pic: '💪', focus: '40% 60%', check: ['🦇🔁💪', '🦇🛏️', '🦇🎮'] },
          { s: ['Then one night, she flew up high in the sky with the other bats!', 'The lights of the city were bright below her.', 'The lesson: if you practice, you will get better.'], pic: '🌃', focus: '50% 30%', check: ['🦇🌃🌟', '🦇🏖️', '🦇🎂'] }
        ],
        question: { pre: { q: 'What problem did Bitsy have?', opts: ['🙃 She was clumsy and fell', '🌧️ It was raining', '🍕 She was hungry'], mishap: 'Hmm, what happened when Bitsy tried to fly?' },
          q: 'Tap the sentence that tells her problem.', a: 'she was clumsy', mishap: 'Oops! I tried to hang upside down to help and fell on my beak. 🙃 Try again!' },
        advisor: { type: 'feel', q: 'How do you think Bitsy felt when she flew with the other bats?', opts: ['🤩 Proud and happy', '😢 Sad', '😠 Angry'], evQ: 'What clue helped you? Tap the sentence.', a: ['flew up high in the sky with the other bats'], mishap: 'Look for the moment Bitsy finally flew.' },
        fill: { kind: 'word', sent: 'She got a little better each ___.', opts: ['time', 'tie', 'tame'] },
        spell: { w: 'night', sent: 'Bitsy tried every ___.', split: 'n[igh]t', pic: '🌙' }
      },
      sky: {
        title: 'The Clumsy Bat Pup',
        targets: ['huge', 'use', 'cute', 'few', 'flew', 'grew', 'music'],
        model: {
          title: 'Magic e: u_e says /ū/',
          lines: ['Magic e makes the u say its name: cub → cube, cut → cute.', 'huge, use, cute, cube'],
          ex: [{ w: 'h[u]g[e]', tag: 'u_e' }, { w: '[u]s[e]', tag: 'u_e' }, { w: 'c[u]t[e]', tag: 'u_e' }, { w: 'c[u]b[e]', tag: 'u_e' }]
        },
        sort: { a: 'u_e 🪄', b: 'Short u ☂️', items: [['cute', 'a'], ['cut', 'b'], ['cube', 'a'], ['cub', 'b']], hint: 'Is there a magic e at the end?', split: { cute: 'c[u]t[e]', cut: 'c[u]t', cube: 'c[u]b[e]', cub: 'c[u]b' } },
        build: { w: 'mu|sic', tiles: ['mu', 'sic', 'sick'], pic: '🎵', clue: 'Songs and sounds you listen to.' },
        pick: { w: 'huge', opts: ['huge', 'hudge', 'hewge'], pic: '🐘', clue: 'Very, very big.', split: 'h[u]g[e]' },
        hear: { w: 'cute', opts: ['cute', 'cuet', 'kute'], pic: '🐣', clue: 'Sweet and adorable.', split: 'c[u]t[e]' },
        rebel: { words: ['rule', 'huge', 'cute', 'cube'], why: '"rule" has u_e, but it says /oo/, not /yoo/! Listen closely.' },
        chunks: [
          { s: ['Greetings from Austin, Texas, where a huge bridge crosses a river in the middle of the city.', 'About a million bats live under it, and they use the cracks as their home.'], pic: '🌉', focus: '50% 50%', check: ['🦇🦇🌉', '🐟🌉', '🚗🏔️'] },
          { s: ['Every summer evening, the bats pour out in a long, dark ribbon across the sky.', 'People sit on blankets to watch, and some even play music!'], pic: '🎵', focus: '50% 30%', check: ['🦇🦇🌇', '🦇☀️🏖️', '🦇❄️'] },
          { s: ['I met a cute little bat pup named Bitsy who had a big problem.', 'She was so clumsy that she bumped into the bridge every time she tried to fly.'], pic: '🙃', focus: '40% 60%', check: ['🦇💥🌉', '🦇🏆', '🦇🍕'] },
          { s: ['Her grandmother, a wise elder, became her coach.', '"Do not rush," Grandma said.', '"Listen for the echoes, and use your wings to glide."'], pic: '👵', focus: '55% 55%', check: ['🦇👵💬', '🦇🎸', '🦇⚽'] },
          { s: ['Bitsy practiced every night for a few weeks.', 'Her flying grew smoother and smoother, and soon she flew past the other bats.'], pic: '💪', focus: '40% 60%', check: ['🦇🔁💪', '🦇🛏️', '🦇🎮'] },
          { s: ['On the last night of summer, Bitsy flew out with the whole colony, graceful and proud.', 'The lesson: with practice and a good coach, clumsy can become graceful!'], pic: '🌃', focus: '50% 30%', check: ['🦇🌃🌟', '🦇🏖️', '🦇🎂'] }
        ],
        question: { pre: { q: 'Who helped Bitsy?', opts: ['👵 Her grandmother, a wise elder', '🐦 Pip', '🦉 An owl'], mishap: 'Look for the word "coach."' },
          q: 'Tap the sentence that tells who her coach was.', a: 'became her coach', mishap: 'Oops! I tried to be a bat coach, but I cannot hear echoes! 👂 Try again!' },
        advisor: { type: 'feel', q: 'How did Bitsy feel on the last night of summer?', opts: ['😊 Graceful and proud', '😢 Sad', '😨 Scared'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['graceful and proud'], mishap: 'Look for feeling words near the end.' },
        fill: { kind: 'word', sent: 'Bitsy practiced every night for a ___ weeks.', opts: ['few', 'flew', 'fun'] },
        spell: { w: 'huge', sent: 'A ___ bridge crosses the river.', split: 'h[u]g[e]', pic: '🌉' }
      },
      space: {
        title: 'Practice Makes Progress',
        targets: ['behind', 'kind', 'mind', 'wild', 'reminds', 'persistent', 'humiliated', 'mentor', 'gradually', 'confident', 'colony'],
        model: {
          title: 'Long i families: -ind and -ild',
          lines: ['In -ind and -ild, the i says its name: kind, mind, behind · wild, child.', 'These families help you read big words like reminder and wildlife.'],
          ex: [{ w: 'k[i]nd', tag: '-ind' }, { w: 'be|h[i]nd', tag: '-ind' }, { w: 're|m[i]nd', tag: '-ind' }, { w: 'w[i]ld', tag: '-ild' }]
        },
        sort: { a: '-ind 🧠', b: '-ild 🌿', items: [['behind', 'a'], ['wild', 'b'], ['mind', 'a'], ['child', 'b']], hint: 'Look at the last three letters.', split: { behind: 'beh[ind]', wild: 'w[ild]', mind: 'm[ind]', child: 'ch[ild]' } },
        build: { w: 'per|sis|tent', tiles: ['per', 'sis', 'tent', 'tant'], pic: '🧗', clue: 'Keeps trying and does not give up.' },
        pick: { w: 'humiliated', opts: ['humiliated', 'humilated', 'humiliatted'], pic: '😳', clue: 'Very embarrassed.', split: 'hu|mil|i|at|ed' },
        hear: { w: 'gradually', opts: ['gradually', 'gradualy', 'gradjually'], pic: '📈', clue: 'Slowly, a little at a time.', split: 'grad|u|al|ly' },
        rebel: { words: ['wind', 'kind', 'mind', 'behind'], why: '"wind" (the air that blows) has -ind, but its i is short!' },
        chunks: [
          { s: ['Greetings from Austin, Texas, home of the largest city bat colony in North America.', 'Up to one and a half million Mexican free-tailed bats roost beneath the Congress Avenue Bridge from spring through fall.'], pic: '🌉', focus: '50% 50%', check: ['🦇🦇🌉', '🐟🌉', '🚗🏔️'] },
          { s: ['At dusk, they emerge in a swirling column that looks like smoke, and people can see them from miles away.', 'Each night, the colony gobbles thousands of pounds of insects, which is a kind service to local farmers.'], pic: '🦟', focus: '50% 30%', check: ['🦇🦟🌾', '🦇☀️🏖️', '🦇❄️'] },
          { s: ['I befriended a young pup named Bitsy, whose flying was so clumsy that she kept crashing into the concrete.', 'The other pups flew off and left her behind, and Bitsy felt humiliated.'], pic: '😳', focus: '40% 60%', check: ['🦇💥😳', '🦇🏆', '🦇🍕'] },
          { s: ['Fortunately, her grandmother was a patient, kind-hearted mentor.', '"Mind your echoes, not your mistakes," she advised, reminding Bitsy that bats use sound to locate obstacles in the dark.'], pic: '👂', focus: '55% 55%', check: ['🦇👵👂', '🦇🎸', '🦇⚽'] },
          { s: ['Bitsy was persistent: she practiced every evening, even when the wind was wild and her wings ached.', 'Gradually, her awkward flapping became smooth, confident flight.'], pic: '💪', focus: '40% 60%', check: ['🦇🔁💪', '🦇🛏️', '🦇🎮'] },
          { s: ['By the end of the season, the pup who had been left behind was leading a group of younger bats.', 'Her story reminds me that talent is not only something you are born with; it is something you build.'], pic: '🌃', focus: '50% 30%', check: ['🦇🦇🦇➡️', '🦇🏖️', '🦇🎂'] }
        ],
        question: { pre: { q: 'Which word best describes Bitsy?', opts: ['💪 Persistent', '😴 Lazy', '😠 Mean'], mishap: 'Think about what Bitsy did every evening.' },
          q: 'Tap the sentence that proves it.', a: 'Bitsy was persistent', mishap: 'Oops! I tried to practice flying at night and bumped into a lamppost. 💡 Try again!' },
        advisor: { type: 'mistake', pip: 'Talent is only something you are born with.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'it is something you build', mishap: 'That sentence does not talk about talent. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Fortunately, her grandmother was a patient, kind-hearted ___.', opts: ['mentor', 'meteor', 'monitor'] },
        spell: { w: 'confident', sent: 'Her flapping became smooth, ___ flight.', split: 'con|fi|dent', pic: '😎' }
      }
    }
  },
  /* ======================= TUESDAY ======================= */
  {
    day: 2, name: 'Tuesday', place: 'Flanders, Belgium', flag: '🇧🇪', scene: 'img/u2w3_tue_pigeons.webp',
    sceneBrief: 'A small Belgian village with brick houses and a church tower under stormy gray clouds. A wooden pigeon loft on a rooftop. Two racing pigeons fly side by side through wind and rain: a sleek fast one (Zip) and a smaller one with a white spot (Dot). Pip holding a tiny umbrella.',
    qtype: 'What are they like?', atype: 'Odd one out, and why',
    arrive: 'Pip flew to a pigeon racing town in Belgium!',
    wiggle: { emoji: '🕊️', text: 'Fly in formation!', sub: 'Stand side by side with your grown-up. Flap your wings together, turn together, and land together!' },
    route: {
      q: 'Tomorrow I visit tiny penguins on a hot island. How should I get there?',
      opts: [
        { pic: '🐢', label: 'Ride a giant tortoise', echo: 'I rode a giant tortoise, like you said. Sooo slow! 🐢' },
        { pic: '🛥️', label: 'Take a speedboat', echo: 'I took a speedboat, like you said. Splash! 🛥️' }
      ]
    },
    ps: 'P.S. What makes someone a good teammate?',
    levels: {
      ground: {
        title: 'The Pigeon Team',
        targets: ['sky', 'fly', 'by', 'why', 'my', 'dry', 'side', 'find', 'very'],
        model: {
          title: 'y at the end says /ī/',
          lines: ['In short words, y at the end says /ī/.', 'sky, fly, dry, why, my, by'],
          ex: [{ w: 'sk[y]', tag: 'y = /ī/' }, { w: 'fl[y]', tag: 'y = /ī/' }, { w: 'dr[y]', tag: 'y = /ī/' }, { w: 'wh[y]', tag: 'y = /ī/' }]
        },
        sort: { a: 'y says /ī/ 🌤️', b: 'y says /ē/ 😄', items: [['sky', 'a'], ['happy', 'b'], ['why', 'a'], ['funny', 'b']], hint: 'Say it out loud. Does y sound like "eye" or "ee"?', split: { sky: 'sk[y]', happy: 'happ[y]', why: 'wh[y]', funny: 'funn[y]' } },
        build: { w: 'pi|geon', tiles: ['pi', 'geon', 'jun'], pic: '🕊️', clue: 'A city bird that coos.' },
        pick: { w: 'why', opts: ['why', 'wy', 'whie'], pic: '❓', clue: 'A question word that asks for a reason.', split: 'wh[y]' },
        hear: { w: 'fly', opts: ['fly', 'flie', 'fligh'], pic: '🦅', clue: 'Move through the air.', split: 'fl[y]' },
        rebel: { words: ['key', 'sky', 'fly', 'why'], why: '"key" ends in y, but it says /ē/! The others say /ī/.' },
        chunks: [
          { s: ['Today I am in a little town in Belgium.', 'Pigeons here fly in races, and they can find their way home from very far away!'], pic: '🕊️', focus: '50% 40%', check: ['🕊️🏁🏠', '🕊️🍕', '🕊️🌋'] },
          { s: ['Two pigeons, Zip and Dot, were on the same team.', 'Zip wanted to win by himself.'], pic: '🏆', focus: '40% 50%', check: ['🕊️🏆', '🕊️🛏️', '🕊️🎸'] },
          { s: ['On race day, the sky was gray, and the wind was strong.', 'Dot said, "Let\'s fly side by side, so we can help each other."'], pic: '🌬️', focus: '50% 30%', check: ['🕊️🕊️🌬️', '🕊️☀️🏖️', '🕊️❄️'] },
          { s: ['"Why?" said Zip.', '"I am the best!"', 'He flew off alone, and the wind pushed him the wrong way.'], pic: '💨', focus: '70% 30%', check: ['🕊️💨↩️', '🕊️🍦', '🕊️🎂'] },
          { s: ['Dot flew back to find him.', 'Together, they flew home to their dry, warm loft.', 'Zip said, "My team is the best part!"'], pic: '🏠', focus: '60% 60%', check: ['🕊️🕊️🏠', '🕊️😡', '🕊️😴'] }
        ],
        question: { pre: { q: 'What did Dot want to do?', opts: ['🤝 Fly side by side as a team', '🏆 Win by herself', '😴 Stay home'], mishap: 'Hmm, read what Dot said on race day.' },
          q: 'Tap the sentence that tells Dot\'s plan.', a: 'side by side, so we can help each other', mishap: 'Oops! I tried to fly side by side with a kite. It pulled me away! 🪁 Try again!' },
        advisor: { type: 'odd', q: 'Which one does NOT match Zip at the start?', opts: ['🤝 He wanted to help his team', '🏆 He wanted to win by himself', '💨 He flew off alone', '😎 He said he was the best'],
          whyQ: 'Why not? Pick the reason from the postcard.', whys: ['At the start, Zip wanted to win by himself.', 'Zip did not like gray skies.'], mishap: 'Look back at the postcard. What did Zip want at first?' },
        fill: { kind: 'word', sent: 'On race day, the sky was gray, and the wind was ___.', opts: ['strong', 'string', 'stung'] },
        spell: { w: 'sky', sent: 'The ___ was gray.', split: 'sk[y]', pic: '🌥️' }
      },
      sky: {
        title: 'Teammates in the Wind',
        targets: ['few', 'new', 'flew', 'grew', 'blew', 'knew', 'rescue'],
        model: {
          title: 'ew says /ū/ or /oo/',
          lines: ['e and w team up: few, new, flew, grew.', 'Sometimes you hear /yoo/ (few), and sometimes /oo/ (flew).'],
          ex: [{ w: 'f[ew]', tag: '/yoo/' }, { w: 'n[ew]', tag: '/oo/ or /yoo/' }, { w: 'fl[ew]', tag: '/oo/' }, { w: 'gr[ew]', tag: '/oo/' }]
        },
        sort: { a: 'ew 🌬️', b: 'u_e 🪄', items: [['few', 'a'], ['cute', 'b'], ['grew', 'a'], ['huge', 'b']], hint: 'Look for the team e + w, or a magic e.', split: { few: 'f[ew]', cute: 'c[u]t[e]', grew: 'gr[ew]', huge: 'h[u]g[e]' } },
        build: { w: 'res|cue', tiles: ['res', 'cue', 'kew'], pic: '🛟', clue: 'Save someone from danger.' },
        pick: { w: 'grew', opts: ['grew', 'grue', 'groo'], pic: '🌱', clue: 'Got bigger.', split: 'gr[ew]' },
        hear: { w: 'few', opts: ['few', 'fue', 'fewe'], pic: '🖍️🖍️', clue: 'Not many.', split: 'f[ew]' },
        rebel: { words: ['sew', 'few', 'new', 'grew'], why: '"sew" has ew, but it says /ō/! (You sew with a needle.)' },
        chunks: [
          { s: ['Greetings from a small town in Belgium, where racing pigeons are as famous as soccer stars!', 'These birds can find their way home from hundreds of miles away, and nobody knows exactly how they do it.'], pic: '🕊️', focus: '50% 40%', check: ['🕊️🏁🏠', '🕊️🍕', '🕊️🌋'] },
          { s: ['This week, a new team of young pigeons was training for their first big race.', 'Zip was the fastest, but he was also selfish, and he never waited for anyone.'], pic: '🏎️', focus: '40% 50%', check: ['🕊️💨', '🕊️🛏️', '🕊️🎸'] },
          { s: ['Dot was a few feathers smaller, but she was generous and kind.', 'She always shared her seeds and waited for the slower birds.'], pic: '🌾', focus: '55% 60%', check: ['🕊️🌾🕊️', '🕊️😠', '🕊️🧊'] },
          { s: ['On race day, a storm blew in, and the wind grew stronger and stronger.', 'Zip flew ahead alone, and the wind knocked him far off course.'], pic: '🌬️', focus: '70% 30%', check: ['🕊️🌬️↩️', '🕊️🍦', '🕊️🎂'] },
          { s: ['Dot noticed he was missing, so she turned around to rescue him and found him on a rooftop, wet and scared.', '"Follow me," she said, "and we will fly home together."'], pic: '🏠', focus: '60% 60%', check: ['🕊️🕊️🏠', '🕊️🏖️', '🕊️🎈'] },
          { s: ['They reached the loft last, but Zip did not care about losing anymore.', 'He knew that a good teammate is worth more than a trophy.'], pic: '🏆', focus: '50% 50%', check: ['🕊️🤝🕊️', '🕊️😡', '🕊️😴'] }
        ],
        question: { pre: { q: 'How were Zip and Dot DIFFERENT?', opts: ['⚖️ Zip was selfish, and Dot was generous', '🏃 Zip was slow, and Dot was fast', '🌧️ Zip liked rain, and Dot did not'], mishap: 'Look for the words that tell what they were like.' },
          q: 'Tap the sentence that tells what Dot was like.', a: 'she was generous and kind', mishap: 'Oops! I shared my seeds and a pigeon took ALL of them. 🌾 Try again!' },
        advisor: { type: 'odd', q: 'Which one did Dot NOT do?', opts: ['🏆 Win the race', '🌾 Share her seeds', '⏳ Wait for slower birds', '🔍 Look for Zip'],
          whyQ: 'Why not? Pick the reason from the postcard.', whys: ['They reached the loft last, so Dot did not win.', 'Dot did not like trophies.'], mishap: 'Look back at the postcard. Who got to the loft last?' },
        fill: { kind: 'word', sent: 'On race day, a storm blew in, and the wind ___ stronger and stronger.', opts: ['grew', 'grow', 'glue'] },
        spell: { w: 'few', sent: 'Dot was a ___ feathers smaller.', split: 'f[ew]', pic: '🪶' }
      },
      space: {
        title: 'The Show-Off and the Guide',
        targets: ['selfish', 'show-offish', 'reliable', 'generous', 'thoughtful', 'stragglers', 'ferocious', 'abandoned', 'transformed', 'stubbornness'],
        model: {
          title: 'The ending -ish',
          lines: ['-ish can mean "like" or "kind of": child → childish, self → selfish.', 'Some words tell what someone is like inside.'],
          ex: [{ w: 'self|[ish]', tag: 'only thinks of self' }, { w: 'child|[ish]', tag: 'acting like a small child' }, { w: 're|li|[able]', tag: 'can be counted on' }, { w: 'thought|[ful]', tag: 'thinks of others' }]
        },
        sort: { a: 'Zip at first 🏎️', b: 'Dot 🧭', items: [['selfish', 'a'], ['generous', 'b'], ['stubborn', 'a'], ['reliable', 'b']], hint: 'Think about what each pigeon DID.' },
        build: { w: 'trans|formed', tiles: ['trans', 'formed', 'fromed'], pic: '🦋', clue: 'Changed completely.' },
        pick: { w: 'ferocious', opts: ['ferocious', 'ferocius', 'ferosious'], pic: '⛈️', clue: 'Very fierce and wild.', split: 'fe|ro|[cious]' },
        hear: { w: 'reliable', opts: ['reliable', 'relyable', 'reliabel'], pic: '🤝👍', clue: 'You can count on it.', split: 're|li|[able]' },
        rebel: { words: ['fish', 'selfish', 'childish', 'foolish'], why: '"fish" ends in -ish, but take it off and only "f" is left!' },
        chunks: [
          { s: ['Greetings from Flanders, Belgium, a region where pigeon racing has been a beloved tradition for about two hundred years.', 'Racing pigeons are homing pigeons, which means they have a remarkable instinct for returning to their loft.'], pic: '🕊️', focus: '50% 40%', check: ['🕊️🏁🏠', '🕊️🍕', '🕊️🌋'] },
          { s: ['Scientists believe they navigate using several clues, including the sun, Earth\'s magnetic field, and familiar landmarks.', 'Some can fly five hundred miles in a single day!'], pic: '🧭', focus: '50% 30%', check: ['🕊️🧭☀️', '🕊️🛏️', '🕊️🎸'] },
          { s: ['I observed a team of young pigeons preparing for a competition.', 'Zip was the speediest, but his selfish, show-offish attitude annoyed his teammates, because he refused to fly in formation.'], pic: '😎', focus: '40% 50%', check: ['🕊️😎', '🕊️😢', '🕊️😴'] },
          { s: ['Dot was smaller and far less flashy, yet she was reliable, generous, and thoughtful.', 'During training, she always circled back for stragglers, which are birds that fall behind.'], pic: '🔄', focus: '55% 60%', check: ['🕊️🔄🕊️', '🕊️😠', '🕊️🧊'] },
          { s: ['On race day, a ferocious storm scattered the flock, and Zip, flying alone, was blown miles off course.', 'Dot abandoned her own chance of winning to locate him, then guided him home through the wind and rain.'], pic: '⛈️', focus: '70% 30%', check: ['🕊️⛈️🕊️', '🕊️🍦', '🕊️🎂'] },
          { s: ['Although they finished last, Zip was transformed.', 'He admitted that his stubbornness had nearly cost him everything, and he promised to be a teammate who waits for others.'], pic: '🤝', focus: '50% 50%', check: ['🕊️🤝🕊️', '🕊️😡', '🕊️😴'] }
        ],
        question: { pre: { q: 'Character change: How did Zip change?', opts: ['🔄 From selfish to a caring teammate', '😴 From awake to sleepy', '🐢 From fast to slow'], mishap: 'Compare Zip at the start and at the end.' },
          q: 'Tap the sentence that shows his change.', a: 'promised to be a teammate who waits for others', mishap: 'Oops! I tried to fly in formation alone. That is just flying! 🤪 Try again!' },
        advisor: { type: 'mistake', pip: 'Dot won the race because she was the fastest.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'Although they finished last', mishap: 'That sentence does not tell who finished where. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Dot was smaller and far less flashy, yet she was ___, generous, and thoughtful.', opts: ['reliable', 'ridiculous', 'regular'] },
        spell: { w: 'thoughtful', sent: 'Dot was generous and ___.', split: 'thought|[ful]', pic: '💭' }
      }
    }
  },
  /* ======================= WEDNESDAY ======================= */
  {
    day: 3, name: 'Wednesday', place: 'Galápagos Islands, Ecuador', flag: '🇪🇨', scene: 'img/u2w3_wed_galapagos.webp',
    sceneBrief: 'Black volcanic rocks and bright blue water on a sunny Galápagos shore, a sea lion lounging. Small penguins wobble on the rocks; underwater (split view) one penguin (Pico) zooms gracefully and helps a smaller penguin out of a tangle of seaweed. Pip in swim goggles.',
    qtype: 'Two sides', atype: 'How did the character feel?',
    arrive: 'Pip flew to the Galápagos Islands near the middle of the Earth!',
    wiggle: { emoji: '🐧', text: 'Clumsy, then graceful!', sub: 'Wobble like a penguin on rocks... now "swim" smoothly with your arms like a penguin underwater!' },
    route: {
      q: 'Tomorrow I visit a bay that glows in the dark! How should I get there?',
      opts: [
        { pic: '🛶', label: 'Paddle a kayak', echo: 'I paddled a kayak, like you said. The water sparkled! 🛶' },
        { pic: '🌠', label: 'Ride a shooting star', echo: 'I rode a shooting star, like you said. Whoosh! 🌠' }
      ]
    },
    ps: 'P.S. What is something you are clumsy at, and something you are great at?',
    levels: {
      ground: {
        title: 'The Penguin Swim Contest',
        targets: ['slide', 'dive', 'glide', 'five', 'smile', 'time'],
        model: {
          title: 'Magic e: i_e says /ī/',
          lines: ['Magic e is quiet, but it makes the i say its name.', 'slid → slide, dim → dime'],
          ex: [{ w: 'sl[i]d[e]', tag: 'i_e' }, { w: 'd[i]v[e]', tag: 'i_e' }, { w: 'gl[i]d[e]', tag: 'i_e' }, { w: 'f[i]v[e]', tag: 'i_e' }]
        },
        sort: { a: 'i_e 🪄', b: 'Short i 🐟', items: [['dive', 'a'], ['dig', 'b'], ['slide', 'a'], ['slip', 'b']], hint: 'Is there a magic e at the end?', split: { dive: 'd[i]v[e]', dig: 'd[i]g', slide: 'sl[i]d[e]', slip: 'sl[i]p' } },
        build: { w: 'in|side', tiles: ['in', 'side', 'sid'], pic: '📦', clue: 'In the middle of something.' },
        pick: { w: 'glide', opts: ['glide', 'glied', 'glyde'], pic: '🪁', clue: 'Move smoothly and easily.', split: 'gl[i]d[e]' },
        hear: { w: 'dive', opts: ['dive', 'dieve', 'div'], pic: '🤿', clue: 'Jump into water head first.', split: 'd[i]v[e]' },
        rebel: { words: ['live', 'dive', 'five', 'slide'], why: '"live" (I live here) has a magic e, but the i is short!' },
        chunks: [
          { s: ['Today I am on an island near the middle of the Earth.', 'It is hot, but little penguins live here!'], pic: '🏝️', focus: '50% 40%', check: ['🐧🏝️☀️', '🐧🧊', '🐧🏙️'] },
          { s: ['On the rocks, the penguins are clumsy.', 'They hop and slip and slide.'], pic: '🪨', focus: '40% 60%', check: ['🐧🪨💥', '🐧🏆', '🐧🍕'] },
          { s: ['It was time for a swim contest.', 'A penguin named Pico said, "I trip on land, so I will not win."'], pic: '🏁', focus: '55% 55%', check: ['🐧😟🏁', '🐧🎸', '🐧⚽'] },
          { s: ['But when Pico jumped in the water, he did not trip at all.', 'He could dive and glide so fast!'], pic: '🌊', focus: '60% 80%', check: ['🐧💨🌊', '🐧🛏️', '🐧🎮'] },
          { s: ['Pico came in first out of five penguins, and he had a big smile.', 'The lesson: you may be clumsy at one thing but great at another.'], pic: '🥇', focus: '50% 50%', check: ['🐧🥇😄', '🐧😢', '🐧😴'] }
        ],
        question: { pre: { q: 'Where is Pico clumsy?', opts: ['🪨 On land', '🌊 In the water', '☁️ In the sky'], mishap: 'Hmm, where do the penguins hop and slip?' },
          q: 'Tap the sentence that tells where.', a: 'On the rocks, the penguins are clumsy', mishap: 'Oops! I tried to hop on the rocks too and slipped into a tide pool. 💦 Try again!' },
        advisor: { type: 'feel', q: 'How did Pico feel at the end?', opts: ['😄 Happy and proud', '😢 Sad', '😠 Mad'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['he had a big smile'], mishap: 'Look for what Pico\'s face did at the end.' },
        fill: { kind: 'word', sent: 'He could dive and ___ so fast!', opts: ['glide', 'glad', 'gold'] },
        spell: { w: 'slide', sent: 'They hop and slip and ___.', split: 'sl[i]d[e]', pic: '🛝' }
      },
      sky: {
        title: 'Clumsy on Land, Graceful at Sea',
        targets: ['blue', 'true', 'clue', 'cue', 'glue', 'rescue'],
        model: {
          title: 'ue says /oo/ or /ū/',
          lines: ['u and e team up at the end: blue, true, glue, clue.', 'In cue and rescue, you hear /yoo/.'],
          ex: [{ w: 'bl[ue]', tag: '/oo/' }, { w: 'tr[ue]', tag: '/oo/' }, { w: 'c[ue]', tag: '/yoo/' }, { w: 'res|c[ue]', tag: '/yoo/' }]
        },
        sort: { a: 'ue 💙', b: 'ew 🌬️', items: [['blue', 'a'], ['flew', 'b'], ['true', 'a'], ['grew', 'b']], hint: 'Look at the last two letters.', split: { blue: 'bl[ue]', flew: 'fl[ew]', true: 'tr[ue]', grew: 'gr[ew]' } },
        build: { w: 'Jan|u|ar|y', tiles: ['Jan', 'u', 'ar', 'y', 'ee'], pic: '❄️📅', clue: 'The first month of the year.' },
        pick: { w: 'clue', opts: ['clue', 'cloo', 'clew'], pic: '🔍', clue: 'A hint that helps you solve something.', split: 'cl[ue]' },
        hear: { w: 'true', opts: ['true', 'troo', 'trew'], pic: '✅', clue: 'Not false. Real.', split: 'tr[ue]' },
        rebel: { words: ['guess', 'blue', 'true', 'clue'], why: '"guess" has ue, but the u is quiet, and it does not say /oo/!' },
        chunks: [
          { s: ['Greetings from the Galápagos Islands, where the ocean is bright blue and the sun is hot.', 'It is true: penguins live here, right near the equator!'], pic: '🏝️', focus: '50% 40%', check: ['🐧🏝️☀️', '🐧🧊', '🐧🏙️'] },
          { s: ['Galápagos penguins are tiny, and on land they are very clumsy.', 'They hop from rock to rock, and sometimes they tumble right into the water with a splash.'], pic: '🪨', focus: '40% 60%', check: ['🐧🪨💦', '🐧🏆', '🐧🍕'] },
          { s: ['Today the young penguins held a swimming contest.', 'Pico was nervous, because he trips over his own feet on land, and he did not have a clue how he would do.'], pic: '😟', focus: '55% 55%', check: ['🐧😟🏁', '🐧🎸', '🐧⚽'] },
          { s: ['When a sea lion barked the starting cue, Pico dove in.', 'Underwater, he was as graceful as a dancer, and he stuck to his lane like glue.'], pic: '🩰', focus: '60% 80%', check: ['🐧🩰🌊', '🐧🛏️', '🐧🎮'] },
          { s: ['Halfway through, a younger penguin got tangled in seaweed.', 'Pico stopped to rescue her, and then he still finished second!'], pic: '🌿', focus: '40% 80%', check: ['🐧🌿🐧', '🐧😠', '🐧🧊'] },
          { s: ['His coach said, "You were brave and kind, and that is true success."', 'The lesson: everyone is clumsy at something and graceful at something else.'], pic: '🥈', focus: '50% 50%', check: ['🐧🥈😄', '🐧😢', '🐧😴'] }
        ],
        question: { pre: { q: 'Why was Pico nervous?', opts: ['🦶 He trips over his feet on land', '🦈 He saw a shark', '🌧️ It was raining'], mishap: 'Look for the word "because."' },
          q: 'Tap the sentence that tells why.', a: 'he trips over his own feet', mishap: 'Oops! I tripped over my own feet just reading that! 🦶 Try again!' },
        advisor: { type: 'feel', q: 'How would you describe Pico in the water?', opts: ['🩰 Graceful', '🙃 Clumsy', '😴 Sleepy'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['as graceful as a dancer'], mishap: 'Look at the part where Pico is underwater.' },
        fill: { kind: 'word', sent: 'Pico stopped to ___ her, and then he still finished second!', opts: ['rescue', 'rescued', 'rest'] },
        spell: { w: 'blue', sent: 'The ocean is bright ___.', split: 'bl[ue]', pic: '🌊' }
      },
      space: {
        title: 'Awkward and Elegant',
        targets: ['awkward', 'ungainly', 'agile', 'elegant', 'clumsiness', 'competitor', 'equator', 'withdrew', 'astonishing', 'define'],
        model: {
          title: 'Opposites and "like" words',
          lines: ['Some words are opposites: awkward ↔ elegant, clumsy ↔ graceful.', 'Some words compare with like or as: "like silver arrows."'],
          ex: [{ w: 'awk|ward', tag: 'clumsy' }, { w: 'el|e|gant', tag: 'graceful' }, { w: 'ag|ile', tag: 'moves quickly and easily' }, { w: 'un|gain|ly', tag: 'clumsy-looking' }]
        },
        sort: { a: 'On land 🪨', b: 'In water 🌊', items: [['awkward', 'a'], ['agile', 'b'], ['ungainly', 'a'], ['elegant', 'b']], hint: 'Is it a clumsy word or a graceful word?' },
        build: { w: 'e|qua|tor', tiles: ['e', 'qua', 'tor', 'ter'], pic: '🌍', clue: 'An imaginary line around the middle of Earth.' },
        pick: { w: 'astonishing', opts: ['astonishing', 'astonishin', 'astonnishing'], pic: '😲', clue: 'Very surprising.', split: 'as|ton|ish|ing' },
        hear: { w: 'competitor', opts: ['competitor', 'competiter', 'compeditor'], pic: '🏊', clue: 'Someone in a contest.', split: 'com|pet|i|tor' },
        rebel: { words: ['elegant', 'awkward', 'clumsy', 'ungainly'], why: '"elegant" is the only word that means graceful. The others mean clumsy!' },
        chunks: [
          { s: ['Greetings from the Galápagos Islands, a volcanic archipelago about six hundred miles off the coast of Ecuador.', 'Charles Darwin studied the wildlife here, and it helped him develop his ideas about how living things change over time.'], pic: '🏝️', focus: '50% 40%', check: ['🐧🏝️🌋', '🐧🧊', '🐧🏙️'] },
          { s: ['Galápagos penguins are the only penguins that live near the equator, where they survive thanks to cold ocean currents that flow up from deep water.', 'They are also among the smallest penguins, standing only about as tall as a bowling pin.'], pic: '🎳', focus: '45% 55%', check: ['🐧🎳', '🐧🦒', '🐧🚗'] },
          { s: ['On land, they are awkward and ungainly, hopping from rock to rock like wind-up toys.', 'In water, they are agile and elegant, darting after fish like silver arrows.'], pic: '🏹', focus: '60% 80%', check: ['🐧🪨➡️🌊', '🐧🛏️', '🐧🎮'] },
          { s: ['Today, the young penguins competed in a swimming contest.', 'Pico, who is famously clumsy on shore, assumed he had no chance, and he almost withdrew.'], pic: '😟', focus: '55% 55%', check: ['🐧😟🏁', '🐧🎸', '🐧⚽'] },
          { s: ['But the moment he plunged into the waves, his clumsiness vanished.', 'He swam with astonishing speed, and he even paused to untangle a younger competitor from seaweed before racing on to finish second.'], pic: '🌿', focus: '40% 80%', check: ['🐧🌿🐧', '🐧😠', '🐧🧊'] },
          { s: ['Pico\'s story shows that one thing about you does not define who you are.', 'The same penguin can be clumsy and graceful, nervous and brave, all in one afternoon.'], pic: '⚖️', focus: '50% 50%', check: ['🐧⚖️', '🐧😢', '🐧😴'] }
        ],
        question: { pre: { q: 'What does "like silver arrows" help you picture?', opts: ['🏹 Penguins zooming fast and straight', '🎯 Penguins playing darts', '🥈 Penguins wearing medals'], mishap: 'The penguins are compared to arrows. How do arrows move?' },
          q: 'Tap the sentence with that comparison.', a: 'like silver arrows', mishap: 'Oops! I tried to swim like an arrow and went in a circle. 🌀 Try again!' },
        advisor: { type: 'mistake', pip: 'Galápagos penguins are the biggest penguins in the world.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'among the smallest penguins', mishap: 'That sentence does not tell their size. Try another, advisor!' },
        fill: { kind: 'word', sent: 'On land, they are awkward and ___, hopping from rock to rock like wind-up toys.', opts: ['ungainly', 'unkind', 'untrue'] },
        spell: { w: 'elegant', sent: 'In water, they are agile and ___.', split: 'el|e|gant', pic: '🩰' }
      }
    }
  },
  /* ======================= THURSDAY (a POEM postcard) ======================= */
  {
    day: 4, name: 'Thursday', place: 'Vieques, Puerto Rico', flag: '🇵🇷', scene: 'img/u2w3_thu_glowbay.webp',
    sceneBrief: 'A calm dark bay at night surrounded by mangrove trees, a starry sky. Where a kayak paddle and a child\'s hand touch the water, it glows bright blue-green; little fish leave glowing trails. Pip in a kayak, one wing trailing glowing sparkles.',
    qtype: 'Rhymes and pictures', atype: 'Would you rather? (with a reason)',
    arrive: 'Pip paddled into a glowing bay in Puerto Rico!',
    wiggle: { emoji: '🌟', text: 'Sparkle splash!', sub: 'Pretend to splash glowing water: wiggle your fingers high, low, and all around. Sparkle, sparkle!' },
    route: {
      q: 'Tomorrow I fly home for a fall festival! How should I get there?',
      opts: [
        { pic: '🎃', label: 'Ride in a pumpkin coach', echo: 'I rode in a pumpkin coach, like you said. Very fancy! 🎃' },
        { pic: '🍂', label: 'Float on a big leaf', echo: 'I floated on a big fall leaf, like you said. Whee! 🍂' }
      ]
    },
    ps: 'P.S. Can you make up a rhyme? What rhymes with "night"?',
    levels: {
      ground: {
        title: 'The Glowing Bay',
        targets: ['night', 'bright', 'light', 'child', 'high', 'sky', 'shines', 'tiny', 'two'],
        model: {
          title: 'Rhymes with long i',
          lines: ['Rhyming words end with the same sound.', 'night, light, bright · sky, high, I'],
          ex: [{ w: 'n[igh]t', tag: 'rhymes with light' }, { w: 'br[igh]t', tag: 'rhymes with night' }, { w: 'sk[y]', tag: 'rhymes with high' }, { w: 'h[igh]', tag: 'rhymes with sky' }]
        },
        sort: { a: 'Rhymes with night 🌙', b: 'Rhymes with sky 🌤️', items: [['light', 'a'], ['high', 'b'], ['bright', 'a'], ['fly', 'b']], hint: 'Say the word, then say "night" or "sky." Which ending matches?', split: { light: 'l[ight]', high: 'h[igh]', bright: 'br[ight]', fly: 'fl[y]' } },
        build: { w: 'spar|kles', tiles: ['spar', 'kles', 'kels'], pic: '🌟', clue: 'Shines with tiny flashes.' },
        pick: { w: 'child', opts: ['child', 'chiled', 'chyld'], pic: '🧒', clue: 'A young kid.', split: 'ch[i]ld' },
        hear: { w: 'light', opts: ['light', 'lite', 'liht'], pic: '💡', clue: 'It helps you see.', split: 'l[igh]t' },
        rebel: { words: ['children', 'child', 'wild', 'mild'], why: '"children" has child in it, but the i is short! Say it: CHIL-dren.' },
        chunks: [
          { s: ['I wrote you a poem from Puerto Rico!', 'Late at night, the bay is dark, but splash it, and you make a spark!'], pic: '🌙', focus: '50% 40%', check: ['🌙🌊🌟', '☀️🏖️', '❄️⛷️'] },
          { s: ['The water glows a bright blue light.', 'It shines like stars on a summer night.'], pic: '💙', focus: '50% 70%', check: ['🌊💙🌟', '🌊🔥', '🌊🍕'] },
          { s: ['Tiny living things make the glow.', 'They are too small to see, but they shine when you row.'], pic: '🔬', focus: '45% 75%', check: ['🔬🌟', '🔬🐘', '🔬🚗'] },
          { s: ['A child can wave a hand in the sea.', 'The water sparkles, one, two, three!'], pic: '🖐️', focus: '35% 70%', check: ['🧒🖐️🌟', '🧒⚽', '🧒🛏️'] },
          { s: ['The stars are high up in the sky.', 'The bay glows back, and so do I!'], pic: '⭐', focus: '50% 20%', check: ['⭐🌊🌟', '⭐🍦', '⭐🚀'] }
        ],
        question: { pre: { q: 'In a poem, rhyming words sound the same at the end. Which word rhymes with "sky"?', opts: ['⬆️ high', '🌙 night', '🌊 sea'], mishap: 'Say "sky," then say the word. Do they end the same?' },
          q: 'Tap the line that rhymes with "sky."', a: 'glows back, and so do I', near: ['high up in the sky'], nearText: 'Close! That line ends with "sky." Find the line that RHYMES with it.', mishap: 'Oops! I tried to rhyme "sky" with "pickle." Nope! 🥒 Try again!' },
        advisor: { type: 'rather', q: 'Would you rather splash in the glowing bay or look at the stars?', choices: [
          { label: '💧 Splash in the bay', q: 'Pick a reason from the poem:', reasons: ['I could make the water sparkle.', 'I could build a snowman.'] },
          { label: '⭐ Look at the stars', q: 'Pick a reason from the poem:', reasons: ['I could see them high up in the sky.', 'I could eat them like candy.'] }
        ], mishap: 'That is fun, but the poem does not say it! Pick a reason from the poem.' },
        fill: { kind: 'word', sent: 'The water glows a bright blue ___.', opts: ['light', 'night', 'lime'] },
        spell: { w: 'bright', sent: 'The water glows a ___ blue light.', split: 'br[igh]t', pic: '💙' }
      },
      sky: {
        title: 'Night Music at the Bay',
        targets: ['few', 'huge', 'music', 'cute', 'true', 'blue', 'used'],
        model: {
          title: 'u by itself says /ū/',
          lines: ['When u ends a word part, it can say its name: mu|sic, men|u, Jan|u|ar|y.', 'Also: u_e (cute, huge), ew (few), ue (true).'],
          ex: [{ w: 'm[u]|sic', tag: 'u = /ū/' }, { w: 'men|[u]', tag: 'u = /ū/' }, { w: 'Jan|[u]|ar|y', tag: 'u = /ū/' }, { w: '[u]|ni|form', tag: 'u = /ū/' }]
        },
        sort: { a: 'u says /ū/ 🎵', b: 'Short u ☂️', items: [['music', 'a'], ['bus', 'b'], ['menu', 'a'], ['cup', 'b']], hint: 'Does the u say its name?', split: { music: 'm[u]sic', bus: 'b[u]s', menu: 'men[u]', cup: 'c[u]p' } },
        build: { w: 'men|u', tiles: ['men', 'u', 'you'], pic: '📋', clue: 'A list of food you can order.' },
        pick: { w: 'music', opts: ['music', 'musik', 'mewsic'], pic: '🎵', clue: 'Songs and sounds.', split: 'm[u]|sic' },
        hear: { w: 'used', opts: ['used', 'yoused', 'usd'], pic: '✋', clue: 'Put something to work.', split: '[u]sed' },
        rebel: { words: ['bus', 'music', 'menu', 'unicorn'], why: '"bus" has u, but it says short /u/! The others say /ū/.' },
        chunks: [
          { s: ['Here is a poem from a glowing bay in Puerto Rico!', 'On a dark night, calm and cool, the bay is like a sparkling pool.'], pic: '🌙', focus: '50% 40%', check: ['🌙🌊🌟', '☀️🏖️', '❄️⛷️'] },
          { s: ['Dip your paddle, stir it slow.', 'Watch the water start to glow!'], pic: '🛶', focus: '50% 70%', check: ['🛶💙🌟', '🛶🔥', '🛶🍕'] },
          { s: ['A few tiny creatures, far too small to see, make a huge blue light for you and me.'], pic: '🔬', focus: '45% 75%', check: ['🔬💙', '🔬🐘', '🔬🚗'] },
          { s: ['Each splash is like a burst of music, a cute little song made of light.', 'Is it magic? No, it is true: nature glows in green and blue!'], pic: '🎵', focus: '35% 70%', check: ['🎵🌟', '🎵🍦', '🎵🛏️'] },
          { s: ['Fish zip by in trails of light, like shooting stars that swim at night.', 'I used my wing to write your name, but it sparkled and swam away!'], pic: '🐟', focus: '60% 75%', check: ['🐟🌟🌠', '🐟🍕', '🐟🚗'] },
          { s: ['When morning comes, the glow will hide, but I will keep the memory inside.', 'Tomorrow I fly home to a fall festival with a talent contest!'], pic: '🎃', focus: '50% 50%', check: ['🐦🎃🎤', '🐦🧊', '🐦🌋'] }
        ],
        question: { pre: { q: 'Figurative language: What does "like shooting stars that swim" help you picture?', opts: ['🌟 Fish leaving glowing trails', '⭐ Real stars falling into the sea', '🐟 Fish flying in the sky'], mishap: 'It is a comparison. The stars are not real!' },
          q: 'Tap the line with that comparison.', a: 'like shooting stars that swim at night', mishap: 'Oops! I tried to catch a shooting star with my beak. 🌠 Try again!' },
        advisor: { type: 'rather', q: 'Would you rather paddle in the glowing bay or watch the fish?', choices: [
          { label: '🛶 Paddle', q: 'Pick a reason from the poem:', reasons: ['I could watch the water start to glow.', 'I could paddle to the moon.'] },
          { label: '🐟 Watch the fish', q: 'Pick a reason from the poem:', reasons: ['I could see them zip by in trails of light.', 'I could teach them to sing.'] }
        ], mishap: 'That is fun, but the poem does not say it! Pick a reason from the poem.' },
        fill: { kind: 'word', sent: 'Dip your paddle, stir it ___.', opts: ['slow', 'snow', 'slip'] },
        spell: { w: 'music', sent: 'Each splash is like a burst of ___.', split: 'm[u]|sic', pic: '🎵' }
      },
      space: {
        title: 'Ode to the Glowing Bay', minWords: 140,
        targets: ['bioluminescent', 'microscopic', 'organisms', 'whispers', 'celebrating', 'predators', 'composed', 'comets'],
        model: {
          title: 'Poems that pretend',
          lines: ['Poets can make a thing act like a person: the water whispers.', 'Poets can say one thing IS another: the bay is a sleeping giant.'],
          ex: [{ w: 'whis|pers', tag: 'talks very softly' }, { w: 'com|ets', tag: 'bright space rocks with tails' }, { w: 'cel|e|brat|ing', tag: 'having a party' }]
        },
        sort: { a: 'Acts like a person 🗣️', b: 'Says it IS something 🟣', items: [['the water whispers', 'a'], ['the bay is a sleeping giant', 'b'], ['the bay opens its eyes', 'a'], ['fish become comets', 'b']], hint: 'Is a thing doing something only people do?' },
        build: { w: 'bi|o|lu|mi|nes|cent', tiles: ['bi', 'o', 'lu', 'mi', 'nes', 'cent', 'sent'], pic: '🌟', clue: 'Able to make its own light.' },
        pick: { w: 'microscopic', opts: ['microscopic', 'microskopic', 'micrescopic'], pic: '🔬', clue: 'So tiny you need a microscope.', split: 'mi|cro|scop|ic' },
        hear: { w: 'organisms', opts: ['organisms', 'organizms', 'organisims'], pic: '🦠', clue: 'Living things.', split: 'or|gan|isms' },
        rebel: { words: ['glows', 'whispers', 'celebrates', 'sleeps'], why: '"glows" is something water can really do here. Whispering, celebrating, and sleeping are human actions!' },
        chunks: [
          { s: ['I composed a free-verse poem in Mosquito Bay on the island of Vieques, Puerto Rico, one of the brightest bioluminescent bays in the world.', 'Bioluminescent means able to make its own light, and here the light comes from microscopic organisms called dinoflagellates.'], pic: '🔬', focus: '50% 40%', check: ['🔬🌟🌊', '☀️🏖️', '❄️⛷️'] },
          { s: ['Part one: The bay is a sleeping giant, dark and still beneath the moon, until my wingtip wakes it.', 'Then it opens a thousand sparkling eyes.'], pic: '👀', focus: '50% 70%', check: ['🌊👀🌟', '🌊🔥', '🌊🍕'] },
          { s: ['Part two: The water whispers in blue-green light, painting every ripple with glitter.', 'Fish become comets, and each paddle stroke leaves a trail of stars behind it.'], pic: '☄️', focus: '60% 75%', check: ['🐟☄️', '🐟🍦', '🐟🛏️'] },
          { s: ['Part three: Scientists explain that the glow is a defense, a sudden flash that may startle predators.', 'But to me, it looks like the ocean is celebrating.'], pic: '🎉', focus: '45% 75%', check: ['🌊🎉', '🌊😴', '🌊🚗'] },
          { s: ['Tomorrow I am flying home to a fall festival in New Jersey, where there is going to be a talent contest.', 'I wonder who will be brave enough to perform!'], pic: '🎤', focus: '50% 50%', check: ['🐦🎤🎃', '🐦🧊', '🐦🌋'] }
        ],
        question: { pre: { q: 'WHY might the tiny organisms glow?', opts: ['⚡ To startle predators', '🎉 To have a party', '💡 To light up houses'], mishap: 'Look for what scientists explain in part three.' },
          q: 'Tap the sentence that tells the reason.', a: 'may startle predators', mishap: 'Oops! I tried to startle a fish by glowing. I cannot glow! 🐦 Try again!' },
        advisor: { type: 'predict', q: 'What will Pip see tomorrow?', opts: ['🎤 A talent contest at a fall festival', '🐧 Penguins on ice', '🌋 A volcano'], evQ: 'Tap the clue in the postcard.', a: ['talent contest'], mishap: 'Look for a clue about tomorrow!' },
        fill: { kind: 'word', sent: 'Part two: The water ___ in blue-green light, painting every ripple with glitter.', opts: ['whispers', 'whistles', 'wishes'] },
        spell: { w: 'comets', sent: 'Fish become ___.', split: 'com|ets', pic: '☄️' }
      }
    }
  },
  /* ======================= FRIDAY ======================= */
  {
    day: 5, name: 'Friday', place: 'A fall festival in New Jersey', flag: '🏠', scene: 'img/u2w3_fri_festival.webp',
    sceneBrief: 'A cozy New Jersey fall festival at dusk: hay bales, pumpkins, string lights, a small wooden stage. On stage: a bat pup doing a loop, a penguin sliding on its belly, two pigeons flying side by side. Pip with a microphone and a host bow tie.',
    qtype: 'Two postcards', atype: 'Pip made a mistake',
    arrive: 'Pip flew home to a fall festival in New Jersey!',
    compareWith: 1,
    wiggle: { emoji: '🎤', text: 'Talent show!', sub: 'Show your grown-up one silly talent: a spin, a funny face, or a bat flap. Take a bow!' },
    route: {
      q: 'Next week I start a brand-new adventure! How should I get there?',
      opts: [
        { pic: '🗺️', label: 'Follow a treasure map', echo: 'I followed a treasure map, like you said. X marks the spot! 🗺️' },
        { pic: '🧭', label: 'Follow my compass', echo: 'I followed my compass, like you said. North it is! 🧭' }
      ]
    },
    ps: 'P.S. If you were in the talent show, what would you do?',
    radio: {
      title: 'Pip\'s Radio Hour: The Great Talent Show',
      parts: ['Pip', 'Bitsy the Bat', 'Pico the Penguin'],
      lines: [
        ['Pip', 'Beep beep! This is Pip, live from a fall festival in New Jersey!'],
        ['Pico the Penguin', 'Hi, it is Pico! I came all the way from the Galápagos!'],
        ['Bitsy the Bat', 'And I am Bitsy, from the big bat bridge in Texas!'],
        ['Pip', 'Welcome to the talent show! Bitsy, you are first.'],
        ['Bitsy the Bat', 'On Monday I was clumsy. I kept bumping into the bridge.'],
        ['Pip', 'What did you do?'],
        ['Bitsy the Bat', 'I practiced every night. Now watch this! Loop, loop, flip!'],
        ['Pico the Penguin', 'Wow! That was bright and high! My turn!'],
        ['Pico the Penguin', 'On land I am clumsy too. So I made that my talent. Belly slide!'],
        ['Pip', 'Ha ha! Pico slid right off the stage and into a pile of leaves!'],
        ['Pico the Penguin', 'I meant to do that!'],
        ['Bitsy the Bat', 'Pip, who wins the prize?'],
        ['Pip', 'Everyone gets a ribbon! You both practiced, and you both tried your best.'],
        ['Pico the Penguin', 'And we cheered for each other. That is the best part.'],
        ['Bitsy the Bat', 'Practice and kindness make a great team!'],
        ['ALL', 'This is Pip\'s Radio Hour, signing off! Over and out!']
      ]
    },
    levels: {
      ground: {
        title: 'The Talent Contest',
        targets: ['pies', 'tonight', 'night', 'time', 'lights', 'high', 'sky', 'slide', 'side', 'try', 'good'],
        model: {
          title: 'Long i review',
          lines: ['igh, y, ie, i_e, and i by itself can all say /ī/.', 'night, sky, pie, time, child'],
          ex: [{ w: 'n[igh]t', tag: 'igh' }, { w: 'sk[y]', tag: 'y' }, { w: 'p[ie]s', tag: 'ie' }, { w: 't[i]m[e]', tag: 'i_e' }]
        },
        sort: { a: 'Long i 🌙', b: 'Short i 🐟', items: [['pie', 'a'], ['pig', 'b'], ['slide', 'a'], ['slip', 'b']], hint: 'Does the i say its name?', split: { pie: 'p[ie]', pig: 'p[i]g', slide: 'sl[i]d[e]', slip: 'sl[i]p' } },
        build: { w: 'pump|kins', tiles: ['pump', 'kins', 'kens'], pic: '🎃', clue: 'Big orange fall squash.' },
        pick: { w: 'lights', opts: ['lights', 'lites', 'lihts'], pic: '💡', clue: 'They help you see in the dark.', split: 'l[igh]ts' },
        hear: { w: 'pies', opts: ['pies', 'pyes', 'pighs'], pic: '🥧', clue: 'More than one pie.', split: 'p[ie]s' },
        rebel: { words: ['gift', 'kind', 'child', 'find'], why: '"gift" has i, but it is short! In kind, child, and find, the i says its name.' },
        chunks: [
          { s: ['Today I am home in New Jersey at a fall festival.', 'There are pumpkins, pies, and a talent contest tonight!'], pic: '🎃', focus: '50% 60%', check: ['🎃🥧🎤', '🏖️🍦', '❄️⛄'] },
          { s: ['My friend Bitsy the bat came to the contest.', 'On Monday, she was clumsy, but she practiced every night.'], pic: '🦇', focus: '40% 40%', check: ['🦇🔁', '🦇🍕', '🦇🚗'] },
          { s: ['When it was her time, the lights went down.', 'Bitsy flew high, did a flip, and made a heart in the sky!'], pic: '💜', focus: '50% 25%', check: ['🦇💜🌟', '🦇😴', '🦇🎸'] },
          { s: ['Pico the penguin did a funny slide on his tummy.', 'Dot and Zip flew side by side, like a team.'], pic: '🐧', focus: '60% 70%', check: ['🐧🛝🕊️🕊️', '🐧🏔️', '🐧🍦'] },
          { s: ['Nobody cared who won the prize.', 'We all had a good time, and I was so proud of my friends.', 'The lesson: be kind, and try your best!'], pic: '🎀', focus: '50% 50%', check: ['🐦🎀💛', '🐦😡', '🐦😴'] }
        ],
        question: { pre: { q: 'Think about Bitsy on Monday and Bitsy today. What changed?', opts: ['🦇 She practiced, and now she can fly well', '🍕 She ate a pizza', '😴 She fell asleep'], mishap: 'Hmm, what did Bitsy do every night?' },
          q: 'Tap the sentence in today\'s postcard that tells about her practice.', a: 'she practiced every night', mishap: 'Oops! I tried a flip like Bitsy and landed in the pies. 🥧 Try again!' },
        advisor: { type: 'mistake', pip: 'Everyone at the contest only cared about winning.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'Nobody cared who won the prize', mishap: 'That sentence does not tell about the prize. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Pico the penguin did a funny ___ on his tummy.', opts: ['slide', 'side', 'sled'] },
        spell: { w: 'tonight', sent: 'There is a talent contest ___!', split: 'to|n[igh]t', pic: '🌙' }
      },
      sky: {
        title: 'Pip\'s Festival Report',
        targets: ['huge', 'cute', 'used', 'music', 'few', 'true', 'flew'],
        model: {
          title: 'Long u review',
          lines: ['u_e, ew, ue, and u by itself can all say /ū/ or /oo/.', 'cute, few, true, music'],
          ex: [{ w: 'c[u]t[e]', tag: 'u_e' }, { w: 'f[ew]', tag: 'ew' }, { w: 'tr[ue]', tag: 'ue' }, { w: 'm[u]|sic', tag: 'u by itself' }]
        },
        sort: { a: 'u_e 🪄', b: 'ew or ue 🌬️', items: [['cute', 'a'], ['few', 'b'], ['huge', 'a'], ['true', 'b']], hint: 'Is there a magic e, or a team (ew, ue)?', split: { cute: 'c[u]t[e]', few: 'f[ew]', huge: 'h[u]g[e]', true: 'tr[ue]' } },
        build: { w: 'rib|bons', tiles: ['rib', 'bons', 'buns'], pic: '🎀', clue: 'Prizes made of pretty cloth strips.' },
        pick: { w: 'huge', opts: ['huge', 'hudge', 'hewge'], pic: '🎃', clue: 'Very, very big.', split: 'h[u]g[e]' },
        hear: { w: 'true', opts: ['true', 'troo', 'trew'], pic: '✅', clue: 'Real. Not false.', split: 'tr[ue]' },
        rebel: { words: ['full', 'cute', 'huge', 'use'], why: '"full" has u, but it says /oo/ like in book! The others say /yoo/.' },
        chunks: [
          { s: ['Greetings from a fall festival in New Jersey, where there are huge pumpkins, apple cider, and a hayride!', 'Tonight was the big talent contest, and I was the host.'], pic: '🎃', focus: '50% 60%', check: ['🎃🎤', '🏖️🍦', '❄️⛄'] },
          { s: ['First, Bitsy the bat flew in and made a cute heart shape in the air.', 'On Monday she was clumsy, but she used her practice time well, and now she is graceful.'], pic: '💜', focus: '50% 25%', check: ['🦇💜🌟', '🦇😴', '🦇🎸'] },
          { s: ['Next, Pico the penguin did a belly slide across the stage to funny music.', 'Everyone clapped and cheered.'], pic: '🎵', focus: '60% 70%', check: ['🐧🛝🎵', '🐧🏔️', '🐧🍦'] },
          { s: ['Then Zip and Dot, the pigeon teammates, flew in perfect loops, side by side.', 'Zip told the crowd, "I used to fly alone, but my team makes me better!"'], pic: '🕊️', focus: '70% 30%', check: ['🕊️🕊️🔄', '🕊️😡', '🕊️🛏️'] },
          { s: ['At the end, the judges could not choose just one winner, so they gave a few ribbons to everyone.', 'It is true: the best part of a contest is cheering for your friends.'], pic: '🎀', focus: '50% 50%', check: ['🎀🎀🎀', '🎀😢', '🎀🚀'] },
          { s: ['This week reminded me that practice and kindness make a great team.', 'Next week, I will write to you from a brand-new place!'], pic: '💛', focus: '50% 50%', check: ['🐦💛', '🐦😡', '🐦😴'] }
        ],
        question: { pre: { q: 'Think about Zip on Tuesday and Zip today. How did he change?', opts: ['🤝 He learned his team makes him better', '🏆 He won every race', '😴 He stopped flying'], mishap: 'Look at what Zip told the crowd.' },
          q: 'Tap the sentence that shows how Zip changed.', a: 'my team makes me better', mishap: 'Oops! I tried to fly in loops and got dizzy. 😵 Try again!' },
        advisor: { type: 'feel', q: 'How did the crowd feel about Pico\'s act?', opts: ['😄 Happy and cheering', '😠 Angry', '😴 Bored'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['Everyone clapped and cheered'], mishap: 'Look for what the crowd did after Pico\'s slide.' },
        fill: { kind: 'word', sent: 'At the end, the judges could not choose just one winner, so they gave a ___ ribbons to everyone.', opts: ['few', 'flew', 'fun'] },
        spell: { w: 'cute', sent: 'Bitsy made a ___ heart shape.', split: 'c[u]t[e]', pic: '💜' }
      },
      space: {
        title: 'Talent, Practice, and Teamwork',
        targets: ['himself', 'myself', 'themselves', 'synchronized', 'persistence', 'performance', 'aerial', 'hilarious', 'overcame', 'reflexive'],
        model: {
          title: 'Reflexive pronouns',
          lines: ['A reflexive pronoun points back to the subject: I did it myself.', 'myself, yourself, himself, herself, itself, ourselves, themselves'],
          ex: [{ w: 'my|[self]', tag: 'I → myself' }, { w: 'him|[self]', tag: 'he → himself' }, { w: 'her|[self]', tag: 'she → herself' }, { w: 'them|[selves]', tag: 'they → themselves' }]
        },
        sort: { a: 'One person 🧍', b: 'More than one 👥', items: [['himself', 'a'], ['themselves', 'b'], ['myself', 'a'], ['ourselves', 'b']], hint: 'Does it end in -self (one) or -selves (more than one)?' },
        build: { w: 'syn|chro|nized', tiles: ['syn', 'chro', 'nized', 'nised'], pic: '🕊️🕊️', clue: 'Moving at exactly the same time.' },
        pick: { w: 'hilarious', opts: ['hilarious', 'hilarius', 'hillarious'], pic: '🤣', clue: 'Super funny.', split: 'hi|lar|i|ous' },
        hear: { w: 'persistence', opts: ['persistence', 'persistance', 'persistents'], pic: '🧗', clue: 'Not giving up.', split: 'per|sis|tence' },
        rebel: { words: ['shelf', 'myself', 'himself', 'herself'], why: '"shelf" ends in -elf, but it is not a pronoun!' },
        chunks: [
          { s: ['Greetings from a fall festival in New Jersey, where the air smells like cinnamon and the fields are dotted with enormous pumpkins.', 'Tonight, I hosted a talent contest, and several friends from my travels performed.'], pic: '🎃', focus: '50% 60%', check: ['🎃🎤', '🏖️🍦', '❄️⛄'] },
          { s: ['Bitsy the bat opened the show with an aerial routine of loops and spirals.', 'On Monday, she could barely fly without crashing, so her performance proved that persistence pays off.'], pic: '🌀', focus: '50% 25%', check: ['🦇🌀🌟', '🦇😴', '🦇🎸'] },
          { s: ['Pico the penguin followed with a hilarious belly slide, and he laughed at himself when he wobbled getting up.', 'He has learned to accept that he is clumsy on land and graceful in water.'], pic: '🐧', focus: '60% 70%', check: ['🐧🛝😂', '🐧🏔️', '🐧🍦'] },
          { s: ['Finally, Zip and Dot performed a synchronized flight, mirroring each other\'s every move.', 'Zip told the audience, "I used to only think about myself, but now I think about my team."'], pic: '🕊️', focus: '70% 30%', check: ['🕊️🕊️🪞', '🕊️😡', '🕊️🛏️'] },
          { s: ['I noticed that each character overcame a different challenge: Bitsy overcame clumsiness, Pico overcame self-doubt, and Zip overcame selfishness.', 'Yet they all improved by practicing, trusting others, or being honest with themselves.'], pic: '🏅', focus: '50% 50%', check: ['🦇🐧🕊️🏅', '🎀😢', '🎀🚀'] },
          { s: ['The words himself, myself, and themselves are reflexive pronouns, which point back to the subject of a sentence.', 'I am proud of my friends, and I am a little proud of myself for hosting such a wonderful show!'], pic: '💛', focus: '50% 50%', check: ['🐦💛🎤', '🐦😡', '🐦😴'] }
        ],
        question: { pre: { q: 'Compare: What challenge did Pico overcome?', opts: ['🙈 Self-doubt', '🦇 Crashing while flying', '🏎️ Selfishness'], mishap: 'Look for the sentence that lists each challenge.' },
          q: 'Tap the sentence that tells each challenge.', a: 'Pico overcame self-doubt', mishap: 'Oops! I tried to overcome my fear of stages and tripped on the curtain. 🎭 Try again!' },
        advisor: { type: 'mistake', pip: 'Bitsy could always fly perfectly.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'she could barely fly without crashing', mishap: 'That sentence does not tell about Bitsy\'s flying. Try another, advisor!' },
        fill: { kind: 'word', sent: 'He has learned to accept that he is clumsy on land and ___ in water.', opts: ['graceful', 'grateful', 'grouchy'] },
        spell: { w: 'myself', sent: 'I am a little proud of ___.', split: 'my|[self]', pic: '🐦' }
      }
    }
  }
  ]
};

/* ======================= VOCABULARY WORDS (focus: READING them) =======================
   Ground = district Unit 2 Week 3 key words (1-Grade2-ELA.txt, Unit 2 KEY WORDS/VOCABULARY, Week 3; the file
   shows "ournament": read as "tournament"). Sky = Unit 3 Week 1 words (preview; KEY WORDS at line ~1777).
   Space = long words from this week's postcards. SWAP IN THE TEACHER'S LIST if she sends vocabulary. */
(function () {
  const W = window.PIP_WEEKS['u2w3'];
  W.vocab = {
    // Ground (district U2W3)
    practiced: { misread: 'prac-tiked', split: 'pr[a]c|t[i]c[ed]', say: 'prac|tist', look: ['practice', 'protected'], pic: '🔁', means: 'did it again and again',
      tricky: { mark: 'practi[ced]', says: 'PRAC-tist', note: '"ced" says st.' } },
    clumsy: { misread: 'clum-sigh', split: 'cl[u]m|s[y]', say: 'clum|zee', look: ['clumps', 'crumbs'], pic: '🙃💥', means: 'bumps and trips a lot' },
    coach: { misread: 'cotch', split: 'c[oa]ch', look: ['couch', 'coat'], pic: '📣🧢', means: 'a person who trains a team' },
    teams: { misread: 'tems', split: 't[ea]ms', look: ['teens', 'tames'], pic: '🔴🔵', means: 'groups that play together' },
    teammate: { misread: 'tee-mat', split: 't[ea]m|m[a]t[e]', say: 'team|mate', look: ['teamwork', 'tomato'], pic: '🤝⚽', means: 'someone on your team' },
    selfish: { misread: 'self-fish', split: 's[e]lf|[i]sh', say: 'self|ish', look: ['shellfish', 'elfish'], pic: '🙅🍪', means: 'only cares about yourself' },
    contest: { misread: 'con-test (like quiz)', split: 'c[o]n|t[e]st', say: 'con|test', look: ['context', 'content'], pic: '🏅', means: 'a game to see who wins' },
    graceful: { misread: 'grass-ful', split: 'gr[a]c[e]|f[u]l', say: 'grace|ful', look: ['grateful', 'gracious'], pic: '🩰🦢', means: 'moves smoothly and beautifully' },
    players: { misread: 'play-ress', split: 'pl[ay]|[er]s', say: 'play|erz', look: ['prayers', 'plates'], pic: '⚽🏃', means: 'people who play a game' },
    flat: { misread: 'float', split: 'fl[a]t', look: ['float', 'flap'], pic: '📄', means: 'smooth, with no bumps' },
    elder: { misread: 'el-dur (like elf)', split: '[e]l|d[er]', say: 'el|der', look: ['older', 'eider'], pic: '👵🦉', means: 'an older, wise person' },
    accurate: { misread: 'ac-cure-ate', split: '[a]c|c[u]|r[a]t[e]', say: 'ak|yur|it', look: ['accused', 'accident'], pic: '🎯', means: 'exactly right' },
    tournament: { misread: 'tour-na-ment', split: 't[our]|n[a]|m[e]nt', say: 'ter|nuh|ment', look: ['tornado', 'ornament'], pic: '🏆🏆', means: 'a big contest with many games',
      tricky: { mark: 't[our]nament', says: 'TER-nuh-ment', note: '"our" says er here.' } },
    uniforms: { misread: 'un-i-forms', split: '[u]|n[i]|f[or]ms', say: 'you|nih|forms', look: ['unicorns', 'informs'], pic: '👕👕', means: 'matching clothes for a team' },
    generous: { misread: 'gen-er-ose', split: 'g[e]n|[er]|[ou]s', say: 'jen|er|us', look: ['general', 'gorgeous'], pic: '🤲🎁', means: 'happy to give and share',
      tricky: { mark: '[g]enerous', says: 'JEN-er-us', note: 'g before e says j.' } },
    // Sky (Unit 3 Week 1 preview)
    trained: { misread: 'train-ed', split: 'tr[ai]n[ed]', look: ['strained', 'drained'], pic: '🏋️', means: 'practiced to get ready',
      tricky: { mark: 'train[ed]', says: 'traynd', note: '"ed" just says d.' } },
    strength: { misread: 'strenth', split: 'str[e]ngth', look: ['stretch', 'length'], pic: '💪', means: 'how strong you are' },
    team: { misread: 'tem', split: 't[ea]m', look: ['tame', 'teem'], pic: '🤝', means: 'a group working together' },
    spotted: { misread: 'spot-ed (one t)', split: 'sp[o]t|t[ed]', say: 'spot|id', look: ['spotty', 'sported'], pic: '👀🔍', means: 'saw or noticed' },
    steered: { misread: 'steer-ed', split: 'st[eer]ed', look: ['stared', 'sneered'], pic: '🛶↪️', means: 'made it go the right way' },
    gear: { misread: 'jeer', split: 'g[ear]', look: ['year', 'gerbil'], pic: '🎒⛑️', means: 'tools and clothes for a job' },
    equipment: { misread: 'e-quip-ment', split: '[e]|q[ui]p|m[e]nt', say: 'ih|kwip|ment', look: ['equipped', 'argument'], pic: '🧯🪓', means: 'tools you need for a job' },
    padded: { misread: 'pad-ed', split: 'p[a]d|d[ed]', say: 'pad|id', look: ['paddled', 'patted'], pic: '🧤', means: 'filled with soft stuff' },
    fireproof: { misread: 'fire-prof', split: 'f[ire]|pr[oo]f', say: 'fire|proof', look: ['fireplace', 'waterproof'], pic: '🔥🛡️', means: 'will not burn' },
    sketch: { misread: 'skech', split: 'sk[e]tch', look: ['stretch', 'sketchy'], pic: '✏️🖼️', means: 'a quick drawing',
      tricky: { mark: 'ske[tch]', says: 'skech', note: '"tch" says ch.' } },
    fabric: { misread: 'fab-rick', split: 'f[a]b|r[i]c', say: 'fab|rik', look: ['fabled', 'factory'], pic: '🧵', means: 'cloth' },
    symbol: { misread: 'sim-bowl', split: 's[y]m|b[o]l', say: 'sim|bul', look: ['cymbal', 'simple'], pic: '🗽⭐', means: 'a picture that stands for something',
      tricky: { mark: 's[y]mbol', says: 'SIM-bul', note: 'Here y says short i.' } },
    amazed: { misread: 'a-maze-ed', split: '[a]|m[a]z[ed]', say: 'uh|mayzd', look: ['amused', 'glazed'], pic: '🤩', means: 'very surprised' },
    proudly: { misread: 'prod-ly', split: 'pr[ou]d|l[y]', say: 'proud|lee', look: ['loudly', 'properly'], pic: '😊🏅', means: 'feeling proud' },
    parachute: { misread: 'para-chute (ch like chair)', split: 'p[a]r|[a]|ch[u]t[e]', say: 'pair|uh|shoot', look: ['parade', 'paragraph'], pic: '🪂', means: 'cloth that helps you fall slowly',
      tricky: { mark: 'para[ch]ute', says: 'PAIR-uh-shoot', note: '"ch" says sh here.' } },
    // Space
    persistent: { misread: 'per-sis-tant', split: 'p[er]|s[i]s|t[e]nt', say: 'per|sis|tent', look: ['persisted', 'consistent'], pic: '🧗', means: 'keeps trying, does not give up' },
    humiliated: { misread: 'hum-il-ated', split: 'h[u]|m[i]l|[i]|[a]t|[ed]', say: 'hyoo|mil|ee|ay|tid', look: ['humidity', 'humbled'], pic: '😳', means: 'very embarrassed' },
    mentor: { misread: 'men-tore', split: 'm[e]n|t[or]', say: 'men|tor', look: ['mention', 'meteor'], pic: '👵🧑‍🏫', means: 'a wise helper and teacher' },
    reliable: { misread: 'rel-ee-able', split: 'r[e]|l[i]|[a]|bl[e]', say: 'rih|ly|uh|bul', look: ['relatable', 'reliant'], pic: '🤝👍', means: 'can be counted on' },
    ferocious: { misread: 'fer-oh-kee-us', split: 'f[e]|r[o]|c[iou]s', say: 'fuh|ro|shus', look: ['precious', 'ferris'], pic: '⛈️🦁', means: 'very fierce and wild',
      tricky: { mark: 'fero[cious]', says: 'fuh-RO-shus', note: '"cious" says shus.' } },
    stubbornness: { misread: 'stub-born-ess', split: 'st[u]b|b[or]n|n[e]ss', say: 'stub|urn|ness', look: ['stubborn', 'sturdiness'], pic: '😤🧱', means: 'refusing to change your mind' },
    equator: { misread: 'eck-wa-tor', split: '[e]|qu[a]|t[or]', say: 'ih|kway|ter', look: ['equal', 'elevator'], pic: '🌍〰️', means: 'imaginary line around Earth\'s middle' },
    agile: { misread: 'a-guy-l', split: '[a]g|[i]l[e]', say: 'aj|ul', look: ['angle', 'fragile'], pic: '🤸', means: 'moves quickly and easily',
      tricky: { mark: 'a[g]ile', says: 'AJ-ul', note: 'g before i says j.' } },
    competitor: { misread: 'com-pete-it-or', split: 'c[o]m|p[e]t|[i]|t[or]', say: 'kum|pet|ih|ter', look: ['competition', 'computer'], pic: '🏊', means: 'someone in a contest' },
    bioluminescent: { misread: 'bio-loo-min-es-ent', split: 'b[i]|[o]|l[u]|m[i]|n[e]s|c[e]nt', say: 'by|o|loo|mih|ness|ent', look: ['luminous', 'biology'], pic: '🌟🌊', means: 'able to make its own light' },
    microscopic: { misread: 'micro-scope-ic', split: 'm[i]|cr[o]|sc[o]p|[i]c', say: 'my|kruh|skop|ik', look: ['microscope', 'microphone'], pic: '🔬', means: 'too tiny to see without a microscope' },
    predators: { misread: 'pred-a-tors', split: 'pr[e]d|[a]|t[or]s', say: 'pred|uh|terz', look: ['predict', 'editors'], pic: '🦈🐟', means: 'animals that hunt other animals' },
    personification: { misread: 'person-if-i-kay-shun', split: 'p[er]|s[o]n|[i]|f[i]|c[a]|t[io]n', say: 'per|son|ih|fih|kay|shun', look: ['personality', 'personalization'], pic: '🗣️🌊', means: 'giving human actions to things' },
    synchronized: { misread: 'sin-chron-ized', split: 's[y]n|chr[o]|n[i]z[ed]', say: 'sin|kruh|nized', look: ['synthesized', 'sympathized'], pic: '🕊️🕊️', means: 'moving at exactly the same time',
      tricky: { mark: 'syn[ch]ronized', says: 'SIN-kruh-nized', note: '"ch" says k.' } },
    persistence: { misread: 'per-sis-tants', split: 'p[er]|s[i]s|t[e]nc[e]', say: 'per|sis|tunss', look: ['persistent', 'resistance'], pic: '🧗', means: 'not giving up' },
    reflexive: { misread: 're-flex-eve', split: 'r[e]|fl[e]x|[i]v[e]', say: 'rih|flex|iv', look: ['reflective', 'reflection'], pic: '🪞', means: 'pointing back to itself' }
  };
  /* Warm-up (easy wins first): last week's words. SWAP IN THE TEACHER'S LIST: her Unit 2 Week 2 sheet.
     District U2W2 list shown here. */
  W.warmup = [
    { w: 'clean', pic: '🧼', other: '🐸' }, { w: 'happy', pic: '😄', other: '🪨' }, { w: 'key', pic: '🔑', other: '🍌' },
    { w: 'queen', pic: '👑', other: '🚲' }, { w: 'leaf', pic: '🍃', other: '🚗' }, { w: 'funny', pic: '😂', other: '🧊' },
    { w: 'piece', pic: '🍕', other: '🌙' }, { w: 'thief', pic: '🦹', other: '🌸' }, { w: 'need', pic: '🙏', other: '🐟' }, { w: 'give', pic: '🎁', other: '🛏️' }
  ];
  // "Type the word you hear". SWAP IN THE TEACHER'S LIST (ground = her spelling list + sight words).
  W.typeWords = {
    ground: [
      { w: 'pie', pic: '🥧', sent: 'We ate apple pie.' }, { w: 'tie', pic: '👔', sent: 'Dad wore a tie.' }, { w: 'child', pic: '🧒', sent: 'The child is five.' },
      { w: 'kind', pic: '💛', sent: 'Be kind to others.' }, { w: 'sky', pic: '🌤️', sent: 'The sky is blue.' }, { w: 'dry', pic: '🏜️', sent: 'The desert is dry.' },
      { w: 'high', pic: '⬆️', sent: 'The kite flew high.' }, { w: 'lime', pic: 'img:lime', sent: 'A lime is green.' }, { w: 'light', pic: '💡', sent: 'Turn on the light.' },
      { w: 'bright', pic: '☀️', sent: 'The sun is bright.' }, { w: 'people', pic: '👥', sent: 'Many people came.' }, { w: 'very', pic: '💯', sent: 'I am very happy.' },
      { w: 'two', pic: '2️⃣', sent: 'I have two hands.' }, { w: 'under', pic: '⬇️', sent: 'The cat is under the bed.' }, { w: 'right', pic: '✅', sent: 'That is right!' }
    ],
    sky: [
      { w: 'music', pic: '🎵', sent: 'I love music.' }, { w: 'menu', pic: '📋', sent: 'Look at the menu.' }, { w: 'January', pic: '❄️', sent: 'It snows in January.', cap: 'January' },
      { w: 'few', pic: '🖍️🖍️', sent: 'I have a few crayons.' }, { w: 'rescue', pic: '🛟', sent: 'The dog will rescue the cat.' }, { w: 'cue', pic: '🎬', sent: 'Wait for your cue.' },
      { w: 'use', pic: '✂️', sent: 'Use the scissors.' }, { w: 'cute', pic: '🐣', sent: 'The chick is cute.' }, { w: 'huge', pic: '🐘', sent: 'The elephant is huge.' },
      { w: 'cube', pic: '🧊', sent: 'Put an ice cube in my cup.' }, { w: 'school', pic: '🏫', sent: 'We go to school.' }, { w: 'laugh', pic: '😂', sent: 'Jokes make me laugh.' }
    ],
    space: [
      { w: 'behind', pic: '🌳🐕', sent: 'The dog hid behind the tree.' }, { w: 'remind', pic: '🔔', sent: 'Please remind me later.' }, { w: 'wildlife', pic: '🦌', sent: 'We saw wildlife in the park.' },
      { w: 'mild', pic: '🌡️🙂', sent: 'The weather is mild today.' }, { w: 'selfish', pic: '🙅', sent: 'Do not be selfish.' }, { w: 'reliable', pic: '🤝👍', sent: 'My old bike is reliable.' },
      { w: 'myself', pic: '🙋', sent: 'I made it myself.' }, { w: 'themselves', pic: '👥', sent: 'They cleaned up by themselves.' }, { w: 'herself', pic: '👧', sent: 'She tied her shoes herself.' },
      { w: 'elegant', pic: '🦢', sent: 'The swan is elegant.' }, { w: 'awkward', pic: '😬', sent: 'The new shoes felt awkward.' }, { w: 'confident', pic: '😎', sent: 'I feel confident today.' }
    ]
  };
  // R practice (listening only; never grades her speech).
  W.rPairs = [
    { r: 'right', rp: '➡️', w: 'white', wp: '🤍' }, { r: 'ride', rp: '🚲', w: 'wide', wp: '↔️' }, { r: 'ripe', rp: '🍌', w: 'wipe', wp: '🧻' },
    { r: 'rise', rp: '🌅', w: 'wise', wp: '🦉' }, { r: 'rag', rp: '🧽', w: 'wag', wp: '🐕' }
  ];
  W.rWords = [
    { w: 'bright', pic: '☀️', oops: 'bwight' }, { w: 'dry', pic: '🏜️', oops: 'dwy' }, { w: 'right', pic: '✅', oops: 'wight' },
    { w: 'practiced', pic: '🔁', oops: 'pwacticed' }, { w: 'graceful', pic: '🩰', oops: 'gwaceful' }, { w: 'accurate', pic: '🎯', oops: 'accuwate' },
    { w: 'grouchy', pic: '😠', oops: 'gwouchy' }, { w: 'trained', pic: '🏋️', oops: 'twained' }, { w: 'strength', pic: '💪', oops: 'stwength' },
    { w: 'rescue', pic: '🛟', oops: 'wescue' }, { w: 'race', pic: '🏁', oops: 'wace' }, { w: 'frog', pic: '🐸', oops: 'fwog' }
  ];
  W.sneaky = [
    { w: 'two', mark: 't[wo]', says: 'too', note: 'Sneaky! The w is quiet.', pic: '2️⃣' },
    { w: 'people', mark: 'p[eo]ple', says: 'PEE-pul', note: 'Sneaky! "eo" says ee.', pic: '👥' },
    { w: 'many', mark: 'm[a]ny', says: 'MEN-ee', note: 'Sneaky! "a" says short e.', pic: '🐟🐟🐟🐟🐟' },
    { w: 'very', mark: 'v[e]r[y]', says: 'VAIR-ee', note: 'Sneaky! The y at the end says ee.', pic: '💯' },
    { w: 'off', mark: '[o]ff', says: 'awf', note: 'Sneaky! Two f\'s, and the o says aw.', pic: '📴' },
    { w: 'child', mark: 'ch[i]ld', says: 'chyld', note: 'Sneaky! The i says its name with no magic e.', pic: '🧒' }
  ];
  W.italia = {
    place: 'Sorrento at night', region: 'Campania, Italy', scene: '🌙⭐',
    pip: 'I am in Sorrento at night, above the sea! Can you learn 3 Italian words with me?',
    postcard: ['Ciao from Sorrento!', 'The town sits high on a cliff over the sea.', 'Tonight the moon is bright, the stars are out, and I am eating lemon gelato!', 'Can you teach me some Italian words?'],
    words: [
      { it: 'luna', pic: '🌙', en: 'moon', others: ['☀️', '🌈'] },
      { it: 'stella', pic: '⭐', en: 'star', others: ['🍎', '🐟'] },
      { it: 'gelato', pic: '🍨', en: 'ice cream', others: ['🍕', '🥕'] }
    ]
  };
  W.trickyExtra = [
    { w: 'Galápagos', mark: 'Gal[á]pagos', says: 'guh-LAH-puh-gohs', note: 'The á is the loud part: LAH.', pic: '🏝️' },
    { w: 'Belgium', mark: 'Bel[g]ium', says: 'BEL-jum', note: 'g before i says j.', pic: '🇧🇪' }
  ];
  W.vocabByDay = {
    1: { ground: ['practiced', 'clumsy', 'coach'], sky: ['trained', 'strength', 'team'], space: ['persistent', 'humiliated', 'mentor'] },
    2: { ground: ['teams', 'teammate', 'selfish'], sky: ['spotted', 'steered', 'gear'], space: ['reliable', 'ferocious', 'stubbornness'] },
    3: { ground: ['contest', 'graceful', 'players'], sky: ['equipment', 'padded', 'fireproof'], space: ['equator', 'agile', 'competitor'] },
    4: { ground: ['flat', 'elder', 'accurate'], sky: ['sketch', 'fabric', 'symbol'], space: ['bioluminescent', 'microscopic', 'predators'] },
    5: { ground: ['tournament', 'uniforms', 'generous'], sky: ['amazed', 'proudly', 'parachute'], space: ['synchronized', 'persistence', 'reflexive'] }
  };
  const apply = (day, plan) => ['ground', 'sky', 'space'].forEach((lv) => {
    day.levels[lv].preview = plan[lv].map((w) => Object.assign({ w }, W.vocab[w]));
  });
  W.days.forEach((d) => { if (W.vocabByDay[d.day]) apply(d, W.vocabByDay[d.day]); });
})();
