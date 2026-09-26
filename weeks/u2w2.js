/* Pip's Postcards · Unit 2 Week 2 · Characters Facing Challenges  (STAGED DRAFT, not live)
   School week: Mon Oct 12 – Fri Oct 16, 2026 (ESTIMATE; Oct 12 may be a holiday). Schema = site/weeks/u1w2.js.
   Correct answer FIRST in every option list. "|" = syllables, [ ] = pattern letters.
   District source: 1-Grade2-ELA.txt, Unit 2, LEARNING ACTIVITIES Week 2 (long e + plural endings; inferences;
   central message / moral; character responses; shades of meaning). District texts: "Yeh-Shen", "Bee and Daisy",
   reader's theater "Why the Sky is Far Away". Pip's postcards are ORIGINAL kindness stories on the same theme
   (they do not retell the district texts). Baby Zoo animals: penguin (Mon), bat (Tue), fox (Thu); also a red
   panda (Wed) and monarch butterflies (Fri). Sky previews Unit 2 Week 3 (long i). */
(window.PIP_WEEKS = window.PIP_WEEKS || {})['u2w2'] = {
  id: 'u2w2',
  unit: 2, week: 2,
  title: 'Challenges · Week 2',
  unitTitle: 'Characters Facing Challenges',
  dates: { start: '2026-10-12', end: '2026-10-16', estimated: true, note: 'Oct 12 may be a school holiday (Columbus Day / Indigenous Peoples\' Day).' },
  school: {
    /* SWAP IN THE TEACHER'S LIST: replace `spelling` (and W.typeWords.ground) with her weekly sheet. */
    spelling: ['these', 'clean', 'happy', 'key', 'queen', 'leaf', 'funny', 'piece', 'thief', 'need'],
    hf: ['after', 'before', 'call', 'do', 'earth', 'father', 'give', 'her', 'know', 'large'],
    phonics: 'Long e (ee, ea, e_e, y, ey, ie) and plural endings (-s, -es, f → ves)',
    nextSpelling: ['pie', 'tie', 'child', 'kind', 'sky', 'dry', 'high', 'lime', 'light', 'bright'],
    nextHf: ['good', 'many', 'near', 'off', 'people', 'right', 'that', 'two', 'under', 'very'],
    nextPhonics: 'Long i (igh, y, ie, i_e; i by itself in child and kind)',
    comprehension: 'Draw inferences · central message / moral · character responses · illustrations · shades of meaning in verbs'
  },
  levels: {
    ground: { focus: 'This week: long e (ee, ea, e_e, y, ey, ie) and plurals' },
    sky: { focus: 'Next week: long i (igh, y, ie, i_e, -ild/-ind)' },
    space: { focus: '3rd-grade stretch: suffixes -ness/-ful/-less, prefixes un-/dis-/re-, character traits, theme across stories' }
  },
  days: [
  /* ======================= MONDAY ======================= */
  {
    day: 1, name: 'Monday', place: 'Boulders Beach, South Africa', flag: '🇿🇦', scene: 'img/u2w2_mon_penguins.webp',
    sceneBrief: 'Sunny white-sand beach with huge round granite boulders and turquoise water. African penguins (black and white, pink patch above the eye). One young penguin (Kiki) with a crooked flipper peeks from behind a boulder; another (Dee) waddles toward her smiling. Pip on a boulder.',
    qtype: 'Character response & feelings', atype: 'How did the character feel?',
    arrive: 'Pip flew all the way to a penguin beach in South Africa!',
    wiggle: { emoji: '🐧', text: 'Penguin waddle!', sub: 'Keep your arms at your sides and waddle across the room. Now wave one flipper to a friend!' },
    route: {
      q: 'Tomorrow I visit a desert full of giant cactus plants. How should I get there?',
      opts: [
        { pic: '🦅', label: 'Glide with an eagle', echo: 'I glided with an eagle, like you said. So high! 🦅' },
        { pic: '🚌', label: 'Ride a big bus', echo: 'I rode a big bus, like you said. Beep beep! 🚌' }
      ]
    },
    ps: 'P.S. Have you ever been a good friend like Dee? What did you do?',
    levels: {
      ground: {
        title: 'Kiki Finds a Friend',
        targets: ['need', 'sea', 'see', 'funny', 'happy', 'teased', 'deep', 'eat', 'be', 'she', 'her'],
        model: {
          title: 'Long e: ee and ea',
          lines: ['ee and ea both say /ē/, the name of the letter e.', 'see, deep · sea, eat'],
          ex: [{ w: 's[ee]', tag: 'ee' }, { w: 'd[ee]p', tag: 'ee' }, { w: 's[ea]', tag: 'ea' }, { w: 't[ea]sed', tag: 'ea' }]
        },
        sort: { a: 'ee 👀', b: 'ea 🌊', items: [['need', 'a'], ['sea', 'b'], ['deep', 'a'], ['eat', 'b']], hint: 'Look for the team: e + e, or e + a?', split: { need: 'n[ee]d', sea: 's[ea]', deep: 'd[ee]p', eat: '[ea]t' } },
        build: { w: 'pen|guin', tiles: ['pen', 'guin', 'gwin'], pic: '🐧', clue: 'A bird that swims but cannot fly.' },
        pick: { w: 'deep', opts: ['deep', 'deap', 'dep'], pic: '🌊', clue: 'Far down in the water.', split: 'd[ee]p' },
        hear: { w: 'need', opts: ['need', 'nead', 'ned'], pic: '🙏', clue: 'You must have it.', split: 'n[ee]d' },
        rebel: { words: ['been', 'see', 'need', 'deep'], why: '"been" has ee, but it says /i/ like "bin"! Heart word ❤️.' },
        chunks: [
          { s: ['Today I am at a beach in South Africa.', 'Penguins live here, and they need the sea to eat.'], pic: '🐧', focus: '50% 60%', check: ['🐧🏖️', '🐧🌲', '🐧🏙️'] },
          { s: ['A little penguin named Kiki had one funny wing.', 'It stuck out to the side when she walked.'], pic: '🐧', focus: '40% 55%', check: ['🐧↗️', '🐧🎩', '🐧🚲'] },
          { s: ['Some penguins teased her.', '"Look at Kiki!" they said, and she felt sad.'], pic: '😢', focus: '35% 50%', check: ['🐧😢', '🐧😂', '🐧😴'] },
          { s: ['Then a penguin named Dee came to see her.', '"I like your wing," Dee said.', '"Let\'s swim in the deep sea!"'], pic: '🤝', focus: '55% 55%', check: ['🐧🤝🐧', '🐧🍕', '🐧⚽'] },
          { s: ['Kiki was so happy.', 'In the sea, her funny wing helped her zoom!', 'The lesson: be kind to everyone, and you may find a friend.'], pic: '💛', focus: '70% 70%', check: ['🐧💨🌊', '🐧🛏️', '🐧🎂'] }
        ],
        question: { pre: { q: 'Why did Kiki feel sad?', opts: ['😢 Some penguins teased her', '🌧️ It rained', '🐟 She had no fish'], mishap: 'Hmm, what did the other penguins do?' },
          q: 'Tap the sentence that tells why.', a: 'Some penguins teased her', mishap: 'Oops! I tried to cheer her up with a joke about fish. Nobody laughed! 🐟 Try again!' },
        advisor: { type: 'feel', q: 'How did Kiki feel when Dee came?', opts: ['😄 Happy', '😠 Mad', '😴 Sleepy'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['Kiki was so happy'], mishap: 'Look for a feeling word after Dee came.' },
        fill: { kind: 'word', sent: 'Penguins live here, and they ___ the sea to eat.', opts: ['need', 'neat', 'nod'] },
        spell: { w: 'funny', sent: 'Kiki had one ___ wing.', split: 'fun|n[y]', pic: '🐧↗️' }
      },
      sky: {
        title: 'The Penguin with the Crooked Wing',
        targets: ['right', 'bright', 'high', 'tighter', 'night', 'moonlight', 'light', 'side', 'smile', 'hide', 'kind', 'cry'],
        model: {
          title: 'Long i: igh',
          lines: ['i, g, and h team up to say /ī/. The g and h are quiet!', 'high, night, light, bright'],
          ex: [{ w: 'h[igh]', tag: 'igh' }, { w: 'n[igh]t', tag: 'igh' }, { w: 'l[igh]t', tag: 'igh' }, { w: 'br[igh]t', tag: 'igh' }]
        },
        sort: { a: 'igh 🌙', b: 'i_e 😊', items: [['night', 'a'], ['smile', 'b'], ['bright', 'a'], ['side', 'b']], hint: 'Do you see i-g-h, or a magic e?', split: { night: 'n[igh]t', smile: 'sm[i]l[e]', bright: 'br[igh]t', side: 's[i]d[e]' } },
        build: { w: 'moon|light', tiles: ['moon', 'light', 'lite'], pic: '🌕', clue: 'The glow from the moon.' },
        pick: { w: 'bright', opts: ['bright', 'brite', 'briht'], pic: '☀️', clue: 'Full of light.', split: 'br[igh]t' },
        hear: { w: 'high', opts: ['high', 'higt', 'hih'], pic: '⬆️', clue: 'Far up.', split: 'h[igh]' },
        rebel: { words: ['eight', 'night', 'light', 'bright'], why: '"eight" has igh, but it says /ā/! The others say /ī/.' },
        chunks: [
          { s: ['Greetings from Boulders Beach in South Africa, where penguins waddle right past the houses!', 'The sand is bright white, and the rocks are as high as a bus.'], pic: '🐧', focus: '50% 60%', check: ['🐧🏖️🪨', '🐧🌲', '🐧🏙️'] },
          { s: ['I met a young penguin named Kiki, whose left wing stuck out at a funny angle.', 'When she walked, she tipped to one side like a wobbly top.'], pic: '🐧', focus: '40% 55%', check: ['🐧↗️', '🐧🎩', '🐧🚲'] },
          { s: ['Some older penguins laughed at her and called her "Tippy."', 'Kiki tried to hide behind a rock, and I could see she was trying not to cry.'], pic: '😢', focus: '35% 50%', check: ['🐧😢🪨', '🐧😂', '🐧😴'] },
          { s: ['Then a kind penguin named Dee waddled over.', '"Would you like to swim with me?" she asked with a smile.'], pic: '🤝', focus: '55% 55%', check: ['🐧🤝🐧', '🐧🍕', '🐧⚽'] },
          { s: ['In the water, Kiki\'s crooked wing was not a problem at all.', 'She could turn tighter than anyone, and she caught more fish than the penguins who had laughed!'], pic: '🐟', focus: '70% 70%', check: ['🐧💨🐟', '🐧🛏️', '🐧🎂'] },
          { s: ['That night, Kiki and Dee slept side by side in the moonlight.', 'The lesson: one kind friend can light up your whole life.'], pic: '🌕', focus: '50% 30%', check: ['🐧🐧🌕', '🐧☀️🏖️', '🐧🎈'] }
        ],
        question: { pre: { q: 'What is the central message?', opts: ['💛 One kind friend can make a big difference', '🏊 Swimming is fun', '🪨 Rocks are big'], mishap: 'Look at the end. Pip tells the lesson!' },
          q: 'Tap the sentence with the lesson.', a: 'one kind friend can light up', mishap: 'Oops! I tried to light up the beach with a flashlight. The penguins squinted! 🔦 Try again!' },
        advisor: { type: 'feel', q: 'How did Kiki feel when the older penguins laughed?', opts: ['😢 Hurt and sad', '😂 Silly', '😎 Proud'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['trying not to cry'], mishap: 'Look for what Kiki did after they laughed.' },
        fill: { kind: 'word', sent: 'That night, Kiki and Dee slept side by side in the ___.', opts: ['moonlight', 'midnight', 'moonlit'] },
        spell: { w: 'bright', sent: 'The sand is ___ white.', split: 'br[igh]t', pic: '☀️' }
      },
      space: {
        title: 'The Strength of Kindness',
        targets: ['kindness', 'unkindness', 'sadness', 'gentleness', 'clumsiness', 'endangered', 'hesitantly', 'unexpected', 'advantage', 'protected'],
        model: {
          title: 'Suffix: -ness',
          lines: ['-ness turns a describing word into a thing: kind → kindness.', 'If the word ends in y, change y to i first: clumsy → clumsiness.'],
          ex: [{ w: 'kind|[ness]', tag: 'being kind' }, { w: 'sad|[ness]', tag: 'being sad' }, { w: 'gen|tle|[ness]', tag: 'being gentle' }, { w: 'clum|si|[ness]', tag: 'y → i + ness' }]
        },
        sort: { a: '-ness = a thing 📦', b: '-ly = how 🏃', items: [['kindness', 'a'], ['gently', 'b'], ['sadness', 'a'], ['hesitantly', 'b']], hint: 'Look at the ending: -ness or -ly?', split: { kindness: 'kind[ness]', gently: 'gent[ly]', sadness: 'sad[ness]', hesitantly: 'hesitant[ly]' } },
        build: { w: 'un|kind|ness', tiles: ['un', 'kind', 'ness', 'nes'], pic: '💔', clue: 'Being mean instead of kind.' },
        pick: { w: 'gentleness', opts: ['gentleness', 'gentelness', 'gentlness'], pic: '🪶', clue: 'Being soft and careful.', split: 'gen|tle|[ness]' },
        hear: { w: 'endangered', opts: ['endangered', 'endangerd', 'indangered'], pic: '⚠️', clue: 'In danger of disappearing forever.', split: 'en|dan|gered' },
        rebel: { words: ['harness', 'kindness', 'sadness', 'gentleness'], why: '"harness" ends in -ness, but "har" is not a word. It is not a suffix here!' },
        chunks: [
          { s: ['Greetings from Boulders Beach near Cape Town, South Africa, one of the only places on Earth where you can stroll along the sand beside wild African penguins.', 'Sadly, these penguins are endangered, so the beach is carefully protected.'], pic: '🐧', focus: '50% 60%', check: ['🐧🏖️🪨', '🐧🌲', '🐧🏙️'] },
          { s: ['Here I met Kiki, a young penguin born with a crooked flipper that made her waddle unevenly.', 'A group of older penguins mocked her clumsiness, and their unkindness made her retreat behind a boulder.'], pic: '🪨', focus: '35% 50%', check: ['🐧😢🪨', '🐧😂', '🐧😴'] },
          { s: ['I noticed that Kiki\'s sadness showed in everything she did: her head drooped, and she refused to eat.', 'It reminded me that words can hurt as much as a bump or a scrape.'], pic: '😢', focus: '40% 55%', check: ['🐧😔', '🐧🎉', '🐧🏆'] },
          { s: ['Then a penguin named Dee approached Kiki with surprising gentleness.', 'Instead of staring at the flipper, she invited Kiki to go fishing, and Kiki hesitantly agreed.'], pic: '🤝', focus: '55% 55%', check: ['🐧🤝🐧', '🐧🍕', '🐧⚽'] },
          { s: ['Underwater, Kiki\'s flipper turned out to be an unexpected advantage, because it helped her make lightning-fast turns.', 'She returned with more fish than anyone, but she shared them with Dee first.'], pic: '🐟', focus: '70% 70%', check: ['🐧💨🐟', '🐧🛏️', '🐧🎂'] },
          { s: ['Kiki\'s story shows that kindness is a kind of strength.', 'Dee did not know the flipper would be useful; she was simply being a good friend, and that made all the difference.'], pic: '💛', focus: '50% 50%', check: ['🐧💛🐧', '🐧🥇', '🐧🍕'] }
        ],
        question: { pre: { q: 'Cause and effect: What caused Kiki to hide?', opts: ['😞 The older penguins\' unkindness', '🌊 A big wave', '🦈 A shark'], mishap: 'Look for the word "made" in the postcard.' },
          q: 'Tap the sentence that tells the cause.', a: 'their unkindness made her retreat', mishap: 'Oops! I hid behind a boulder too, and a penguin sat on me! 🐧 Try again!' },
        advisor: { type: 'mistake', pip: 'Dee was kind because she knew the flipper would help Kiki catch fish.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'Dee did not know the flipper would be useful', mishap: 'That sentence does not tell what Dee knew. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Then a penguin named Dee approached Kiki with surprising ___.', opts: ['gentleness', 'sadness', 'clumsiness'] },
        spell: { w: 'kindness', sent: 'Her ___ made all the difference.', split: 'kind|[ness]', pic: '💛' }
      }
    }
  },
  /* ======================= TUESDAY ======================= */
  {
    day: 2, name: 'Tuesday', place: 'Sonoran Desert, Mexico', flag: '🇲🇽', scene: 'img/u2w2_tue_bat.webp',
    sceneBrief: 'Desert at night under a bright moon, tall saguaro cactuses with big white flowers on top. A small brown long-nosed bat (Benny) hovers with its nose in a flower, yellow pollen on its face. Pip perched on a cactus arm (careful of spines!).',
    qtype: 'Key details: how characters help', atype: 'Odd one out, and why',
    arrive: 'Pip flew to a desert full of giant cactus plants in Mexico!',
    wiggle: { emoji: '🦇', text: 'Bat flutter!', sub: 'Flutter your arms like bat wings, then hang your head down low and count to 5 (upside-down bat style!).' },
    route: {
      q: 'Tomorrow I visit misty mountains in China. How should I get there?',
      opts: [
        { pic: '🐉', label: 'Ride a paper dragon kite', echo: 'I rode a paper dragon kite, like you said. It wiggled! 🐉' },
        { pic: '🚄', label: 'Take a fast train', echo: 'I took a super fast train, like you said. Zoom! 🚄' }
      ]
    },
    ps: 'P.S. How do you and a friend help each other?',
    levels: {
      ground: {
        title: 'Bat and Cactus Help Each Other',
        targets: ['happy', 'hungry', 'furry', 'yummy', 'sweet', 'seeds', 'each', 'trees', 'we', 'he', 'Benny'],
        model: {
          title: 'y at the end says /ē/',
          lines: ['At the end of a longer word, y can say /ē/.', 'happy, hungry, furry, yummy'],
          ex: [{ w: 'hap|p[y]', tag: 'y = /ē/' }, { w: 'hun|gr[y]', tag: 'y = /ē/' }, { w: 'fur|r[y]', tag: 'y = /ē/' }, { w: 'yum|m[y]', tag: 'y = /ē/' }]
        },
        sort: { a: 'y says /ē/ 😄', b: 'y says /ī/ 🌤️', items: [['funny', 'a'], ['my', 'b'], ['furry', 'a'], ['fly', 'b']], hint: 'Say it out loud. Does y sound like "ee" or like "eye"?', split: { funny: 'funn[y]', my: 'm[y]', furry: 'furr[y]', fly: 'fl[y]' } },
        build: { w: 'cac|tus', tiles: ['cac', 'tus', 'tis'], pic: '🌵', clue: 'A desert plant with spines.' },
        pick: { w: 'hungry', opts: ['hungry', 'hungree', 'hungrie'], pic: '😋', clue: 'You want food.', split: 'hun|gr[y]' },
        hear: { w: 'furry', opts: ['furry', 'furee', 'furrey'], pic: '🐻', clue: 'Covered in soft hair.', split: 'fur|r[y]' },
        rebel: { words: ['why', 'happy', 'furry', 'yummy'], why: '"why" ends in y, but it says /ī/! The others say /ē/.' },
        chunks: [
          { s: ['Today I am in a hot desert in Mexico.', 'Big cactus plants grow here, as tall as trees.'], pic: '🌵', focus: '50% 50%', check: ['🌵🏜️', '🌲❄️', '🌊🐠'] },
          { s: ['At night, a bat named Benny was hungry.', 'He saw a big white flower on the top of a cactus.'], pic: '🌼', focus: '50% 20%', check: ['🦇🌼🌵', '🦇🍕', '🦇🚗'] },
          { s: ['Benny put his long nose in the flower and drank sweet nectar.', 'Yummy!', 'Yellow dust got stuck on his furry face.'], pic: '👃', focus: '50% 25%', check: ['🦇👃🌼', '🦇🧊', '🦇🎸'] },
          { s: ['Then he flew to the next cactus flower.', 'The dust fell in, and that helps the cactus make seeds and fruit.'], pic: '🍒', focus: '60% 30%', check: ['🌵🌼➡️🍒', '🌵🍦', '🌵🚀'] },
          { s: ['So Benny helped the cactus, and the cactus fed Benny.', 'The lesson: when we help each other, we are both happy.'], pic: '🤝', focus: '50% 50%', check: ['🦇🤝🌵', '🦇😡', '🦇😴'] }
        ],
        question: { pre: { q: 'How did Benny help the cactus?', opts: ['🌼 He took yellow dust to the next flower', '💧 He gave it water', '✂️ He cut it'], mishap: 'Hmm, what happened to the yellow dust?' },
          q: 'Tap the sentence that tells how.', a: 'helps the cactus make seeds and fruit', mishap: 'Oops! I tried to drink nectar and got a cactus spine in my beak. Ouch! 🌵 Try again!' },
        advisor: { type: 'odd', q: 'Which one does NOT match Benny?', opts: ['☀️ He eats in the daytime', '🌙 He comes out at night', '👃 He has a long nose', '🌼 He drinks nectar'],
          whyQ: 'Why not? Pick the reason from the postcard.', whys: ['The postcard says Benny was hungry at night, not in the day.', 'Bats do not like the color yellow.'], mishap: 'Look back at the postcard. When was Benny hungry?' },
        fill: { kind: 'word', sent: 'So Benny helped the cactus, and the cactus fed ___.', opts: ['Benny', 'bunny', 'berry'] },
        spell: { w: 'happy', sent: 'When we help each other, we are both ___.', split: 'hap|p[y]', pic: '😄' }
      },
      sky: {
        title: 'Night Flight in the Desert',
        targets: ['dry', 'sky', 'my', 'fly', 'by', 'why', 'reply', 'high', 'wide', 'inside', 'white', 'like'],
        model: {
          title: 'y at the end says /ī/',
          lines: ['In short words, y at the end says /ī/: my, by, sky, dry.', 'In longer words like happy, y says /ē/.'],
          ex: [{ w: 'm[y]', tag: 'y = /ī/' }, { w: 'sk[y]', tag: 'y = /ī/' }, { w: 'dr[y]', tag: 'y = /ī/' }, { w: 're|pl[y]', tag: 'y = /ī/' }]
        },
        sort: { a: 'y says /ī/ 🌤️', b: 'y says /ē/ 😄', items: [['sky', 'a'], ['happy', 'b'], ['dry', 'a'], ['hungry', 'b']], hint: 'Say it out loud. Does y sound like "eye" or "ee"?', split: { sky: 'sk[y]', happy: 'happ[y]', dry: 'dr[y]', hungry: 'hungr[y]' } },
        build: { w: 're|ply', tiles: ['re', 'ply', 'plee'], pic: '💬', clue: 'Answer back.' },
        pick: { w: 'dry', opts: ['dry', 'drie', 'drigh'], pic: '🏜️', clue: 'Not wet.', split: 'dr[y]' },
        hear: { w: 'sky', opts: ['sky', 'skie', 'skigh'], pic: '🌤️', clue: 'It is above you, where clouds float.', split: 'sk[y]' },
        rebel: { words: ['day', 'sky', 'dry', 'fly'], why: '"day" ends in y, but it is part of the team ay and says /ā/!' },
        chunks: [
          { s: ['Greetings from the Sonoran Desert in Mexico, where the air is dry and giant cactus plants reach toward the sky.', 'Some of them are older than my great-great-great-grandparents!'], pic: '🌵', focus: '50% 50%', check: ['🌵🏜️', '🌲❄️', '🌊🐠'] },
          { s: ['After sunset, I watched a bat named Benny fly by.', 'He was hungry, and he was searching for something sweet.'], pic: '🦇', focus: '40% 30%', check: ['🦇🌙', '🦇☀️🏖️', '🦇🎂'] },
          { s: ['High on a cactus, a white flower opened wide in the moonlight.', 'Benny poked his long nose inside and sipped the sweet nectar, and yellow pollen dusted his face.'], pic: '🌼', focus: '50% 20%', check: ['🦇👃🌼', '🦇🧊', '🦇🎸'] },
          { s: ['When he flew to the next flower, some pollen fell off.', 'That pollen helps the cactus make seeds and juicy red fruit.'], pic: '🍒', focus: '60% 30%', check: ['🌵🌼➡️🍒', '🌵🍦', '🌵🚀'] },
          { s: ['"Why do you help me?" the cactus seemed to ask.', 'Benny could reply, "Because you feed me, and I help you grow!"'], pic: '💬', focus: '50% 40%', check: ['🦇💬🌵', '🦇🏈', '🦇🛁'] },
          { s: ['I think the desert is a little like a team, where each living thing gives and gets.', 'The lesson: kindness goes both ways, like my postcards to you.'], pic: '🤝', focus: '50% 50%', check: ['🦇🤝🌵', '🦇😡', '🦇😴'] }
        ],
        question: { pre: { q: 'How do Benny and the cactus help each other?', opts: ['🤝 The cactus feeds Benny, and Benny helps it make seeds', '🏠 Benny builds the cactus a house', '💧 The cactus gives Benny a bath'], mishap: 'Look for what each one gives the other.' },
          q: 'Tap the sentence that tells how Benny helps.', a: 'pollen helps the cactus make seeds', mishap: 'Oops! I tried to carry pollen and sneezed it all away. Achoo! 🤧 Try again!' },
        advisor: { type: 'odd', q: 'Which one is NOT true about the cactus flower?', opts: ['☀️ It opens in the hot sun', '🌙 It opens in the moonlight', '⬆️ It is high on a cactus', '🤍 It is white'],
          whyQ: 'Why not? Pick the reason from the postcard.', whys: ['The postcard says it opened wide in the moonlight.', 'Cactus flowers are scared of the sun.'], mishap: 'Look back at the postcard. When did the flower open?' },
        fill: { kind: 'word', sent: 'When he flew to the next flower, some ___ fell off.', opts: ['pollen', 'pillow', 'polish'] },
        spell: { w: 'dry', sent: 'The air in the desert is ___.', split: 'dr[y]', pic: '🏜️' }
      },
      space: {
        title: 'Partners in the Moonlight',
        targets: ['helpful', 'useless', 'helpless', 'thankful', 'grateful', 'mutualism', 'partnership', 'transfers', 'benefit', 'migrates'],
        model: {
          title: 'Suffixes: -ful and -less',
          lines: ['-ful means "full of": help → helpful.', '-less means "without": help → helpless.'],
          ex: [{ w: 'help|[ful]', tag: 'full of help' }, { w: 'help|[less]', tag: 'without help' }, { w: 'thank|[ful]', tag: 'full of thanks' }, { w: 'use|[less]', tag: 'without use' }]
        },
        sort: { a: '-ful = full of 🫙', b: '-less = without 🚫', items: [['helpful', 'a'], ['useless', 'b'], ['thankful', 'a'], ['helpless', 'b']], hint: 'Look at the ending: -ful or -less?', split: { helpful: 'help[ful]', useless: 'use[less]', thankful: 'thank[ful]', helpless: 'help[less]' } },
        build: { w: 'mu|tu|al|ism', tiles: ['mu', 'tu', 'al', 'ism', 'izm'], pic: '🤝', clue: 'When two living things both help each other.' },
        pick: { w: 'partnership', opts: ['partnership', 'partnershipp', 'partnurship'], pic: '🤝', clue: 'Working together as partners.', split: 'part|ner|[ship]' },
        hear: { w: 'benefit', opts: ['benefit', 'benifit', 'benafit'], pic: '👍🎁', clue: 'Something good you get.', split: 'ben|e|fit' },
        rebel: { words: ['bless', 'helpless', 'useless', 'careless'], why: '"bless" ends in -less, but "b" is not a base word!' },
        chunks: [
          { s: ['Greetings from the Sonoran Desert, where saguaro cactuses can grow taller than a four-story building and live for more than one hundred fifty years.', 'Tonight, I observed a remarkable partnership between a plant and an animal.'], pic: '🌵', focus: '50% 50%', check: ['🌵🏜️', '🌲❄️', '🌊🐠'] },
          { s: ['The lesser long-nosed bat is a nectar-drinking bat that migrates north from Mexico each spring, following a trail of blooming flowers.', 'Its long snout and brushy tongue are perfectly shaped for reaching deep inside a blossom.'], pic: '🦇', focus: '40% 30%', check: ['🦇👅🌼', '🦇☀️🏖️', '🦇🎂'] },
          { s: ['Saguaro flowers are unusual, because they open at night and close by the next afternoon.', 'As the bat feeds, its furry face becomes coated with pollen, a powdery dust that flowers need to make seeds.'], pic: '🌼', focus: '50% 20%', check: ['🦇🌼🟡', '🦇🧊', '🦇🎸'] },
          { s: ['When the bat visits the next flower, it transfers the pollen, and the cactus can then produce juicy fruit.', 'Scientists call this kind of relationship mutualism, which means both partners benefit.'], pic: '🍒', focus: '60% 30%', check: ['🌵🌼➡️🍒', '🌵🍦', '🌵🚀'] },
          { s: ['Without the bat, many flowers would be useless for making seeds, and without the flowers, the bat would be helpless and hungry.', 'Each partner is thankful for the other, even if they do not know it!'], pic: '🙏', focus: '50% 40%', check: ['🦇🙏🌵', '🦇🏈', '🦇🛁'] },
          { s: ['Watching them made me think about my friends, because the best friendships are also helpful in both directions.', 'I am grateful for yours!'], pic: '💛', focus: '50% 50%', check: ['🐦💛', '🐦😡', '🐦😴'] }
        ],
        question: { pre: { q: 'What does "mutualism" mean?', opts: ['🤝 Both partners benefit', '🏆 One partner wins', '😴 Both partners sleep'], mishap: 'Look for the clue words "which means."' },
          q: 'Word detective: Tap the sentence with the clue.', a: 'which means both partners benefit', mishap: 'Oops! I thought mutualism was a kind of mushroom. 🍄 Try again!' },
        advisor: { type: 'mistake', pip: 'Saguaro flowers stay open all day long.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'close by the next afternoon', mishap: 'That sentence does not tell when the flowers close. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Each partner is ___ for the other, even if they do not know it!', opts: ['thankful', 'thoughtless', 'tasteful'] },
        spell: { w: 'helpful', sent: 'The best friendships are ___ in both directions.', split: 'help|[ful]', pic: '🤝' }
      }
    }
  },
  /* ======================= WEDNESDAY ======================= */
  {
    day: 3, name: 'Wednesday', place: 'Sichuan, China', flag: '🇨🇳', scene: 'img/u2w2_wed_redpanda.webp',
    sceneBrief: 'Misty green bamboo forest on a mountain at night, a big round full moon, paper lanterns hanging from branches. A red panda cub (Mei) on a wide branch hands a round mooncake to a young monkey; an old red panda sits beside them. Pip holding a tiny lantern.',
    qtype: 'Character response & change', atype: 'How did the character feel?',
    arrive: 'Pip flew to the misty mountains of China!',
    wiggle: { emoji: '🥮', text: 'Share the moon!', sub: 'Pretend to break a big mooncake into pieces. Hand one piece to everyone in the room (even a stuffed animal)!' },
    route: {
      q: 'Tomorrow I visit icy islands near the North Pole! How should I get there?',
      opts: [
        { pic: '🛷', label: 'Ride a dog sled', echo: 'I rode a dog sled, like you said. The dogs were so fast! 🛷' },
        { pic: '🧊', label: 'Float on an iceberg', echo: 'I floated on an iceberg, like you said. Brrr! 🧊' }
      ]
    },
    ps: 'P.S. What is something you shared that made someone smile?',
    levels: {
      ground: {
        title: 'Mei Shares Her Mooncake',
        targets: ['piece', 'thief', 'key', 'field', 'monkey', 'peeked', 'need', 'sweet', 'treat', 'happy', 'green'],
        model: {
          title: 'ie and ey can say /ē/',
          lines: ['Sometimes i + e say /ē/: piece, field, thief.', 'At the end, e + y can say /ē/: key, monkey.'],
          ex: [{ w: 'p[ie]c[e]', tag: 'ie' }, { w: 'th[ie]f', tag: 'ie' }, { w: 'k[ey]', tag: 'ey' }, { w: 'mon|k[ey]', tag: 'ey' }]
        },
        sort: { a: 'ie 🥧', b: 'ey 🔑', items: [['piece', 'a'], ['key', 'b'], ['field', 'a'], ['monkey', 'b']], hint: 'Look for the team: i + e, or e + y?', split: { piece: 'p[ie]ce', key: 'k[ey]', field: 'f[ie]ld', monkey: 'monk[ey]' } },
        build: { w: 'mon|key', tiles: ['mon', 'key', 'kee'], pic: '🐒', clue: 'An animal that swings in trees.' },
        pick: { w: 'thief', opts: ['thief', 'theif', 'theef'], pic: '🦹', clue: 'Someone who takes things.', split: 'th[ie]f' },
        hear: { w: 'field', opts: ['field', 'feild', 'feeld'], pic: '🌾', clue: 'Flat, open land with grass.', split: 'f[ie]ld' },
        rebel: { words: ['tie', 'piece', 'field', 'thief'], why: '"tie" has ie, but it says /ī/! The others say /ē/.' },
        chunks: [
          { s: ['Today I am in the green hills of China.', 'I met a red panda named Mei in a bamboo field.'], pic: '🎋', focus: '50% 50%', check: ['🎋⛰️', '🌵🏜️', '🌊🐠'] },
          { s: ['Tonight is a festival for the big, round moon.', 'Mei had a sweet treat, a piece of mooncake.'], pic: '🥮', focus: '50% 40%', check: ['🌕🥮', '🌧️🍕', '☀️🍦'] },
          { s: ['A little monkey peeked at her treat.', '"Are you a thief?" Mei asked.', '"No," he said.'], pic: '🐒', focus: '65% 45%', check: ['🐒👀🥮', '🐒⚽', '🐒🚗'] },
          { s: ['"I am just hungry, and I have no treat."', 'Mei did not need the whole cake.', 'So she broke off a big piece and gave it to the monkey.'], pic: '🤲', focus: '55% 50%', check: ['🐼🤲🐒', '🐼😠', '🐼😴'] },
          { s: ['They sat under the moon and ate their treats.', 'The key to a happy festival is sharing!'], pic: '🌕', focus: '50% 20%', check: ['🐼🐒🌕', '🐼🏖️', '🐼🎸'] }
        ],
        question: { pre: { q: 'Why did Mei share her mooncake?', opts: ['🙂 She did not need it all, and the monkey was hungry', '😠 The monkey took it', '🎁 It was his birthday'], mishap: 'Hmm, read what Mei thought about the cake.' },
          q: 'Tap the sentence that shows Mei did not need it all.', a: 'did not need the whole cake', mishap: 'Oops! I tried to eat a whole mooncake. My tummy is so full! 🥮 Try again!' },
        advisor: { type: 'mistake', pip: 'The monkey was a thief who took Mei\'s cake.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'I am just hungry', mishap: 'That sentence does not tell what the monkey said. Try another, advisor!' },
        fill: { kind: 'word', sent: 'The ___ to a happy festival is sharing!', opts: ['key', 'kite', 'keep'] },
        spell: { w: 'piece', sent: 'Mei had a ___ of mooncake.', split: 'p[ie]ce', pic: '🥮' }
      },
      sky: {
        title: 'Mei\'s Moon Festival',
        targets: ['time', 'pile', 'five', 'bite', 'smile', 'shine', 'like', 'tiny', 'night', 'by'],
        model: {
          title: 'Magic e: i_e says /ī/',
          lines: ['Magic e is quiet, but it makes the i say its name.', 'pin → pine, bit → bite'],
          ex: [{ w: 't[i]m[e]', tag: 'i_e' }, { w: 'p[i]l[e]', tag: 'i_e' }, { w: 'sm[i]l[e]', tag: 'i_e' }, { w: 'sh[i]n[e]', tag: 'i_e' }]
        },
        sort: { a: 'i_e 🪄', b: 'Short i 🐟', items: [['smile', 'a'], ['fish', 'b'], ['time', 'a'], ['sit', 'b']], hint: 'Is there a magic e at the end?', split: { smile: 'sm[i]l[e]', fish: 'f[i]sh', time: 't[i]m[e]', sit: 's[i]t' } },
        build: { w: 'moon|cakes', tiles: ['moon', 'cakes', 'kakes'], pic: '🥮', clue: 'Round treats for the moon festival.' },
        pick: { w: 'smile', opts: ['smile', 'smiel', 'smyle'], pic: '😊', clue: 'A happy face.', split: 'sm[i]l[e]' },
        hear: { w: 'bite', opts: ['bite', 'biet', 'bitt'], pic: '🦷', clue: 'Chomp with your teeth.', split: 'b[i]t[e]' },
        rebel: { words: ['give', 'time', 'pile', 'smile'], why: '"give" has i and a magic e, but the i is short! Heart word ❤️.' },
        chunks: [
          { s: ['Greetings from the misty mountains of Sichuan, China, where I spent the night in a bamboo forest.', 'It was time for the Mid-Autumn Festival, when families gather to admire the full moon.'], pic: '🎋', focus: '50% 50%', check: ['🎋🌕', '🌵🏜️', '🌊🐠'] },
          { s: ['A red panda cub named Mei had a pile of five mooncakes, round and golden like tiny moons.', 'She planned to eat every bite by herself.'], pic: '🥮', focus: '50% 40%', check: ['🐼🥮🥮🥮', '🐼🍕', '🐼🍦'] },
          { s: ['Then she noticed an old panda sitting alone on a branch, and a young monkey with nothing to eat.', 'Mei looked at her pile, and she looked at their faces.'], pic: '🐒', focus: '65% 45%', check: ['🐼👀🐒', '🐼⚽', '🐼🚗'] },
          { s: ['Slowly, a smile spread across her face.', 'She gave a mooncake to the old panda, a mooncake to the monkey, and one to me!'], pic: '🤲', focus: '55% 50%', check: ['🐼🤲🐒', '🐼😠', '🐼😴'] },
          { s: ['We all sat together under the full moon, sharing stories and nibbling our cakes.', 'Mei had fewer cakes, but she felt much richer than before.'], pic: '🌕', focus: '50% 20%', check: ['🐼🐒🌕', '🐼🏖️', '🐼🎸'] },
          { s: ['The lesson: sharing makes a festival shine.', 'I will save some of my seeds to share with you!'], pic: '💛', focus: '50% 50%', check: ['🐦💛', '🐦😡', '🐦😴'] }
        ],
        question: { pre: { q: 'What was Mei\'s plan at first?', opts: ['🥮 Eat every bite by herself', '🎁 Give all her cakes away', '🏃 Run a race'], mishap: 'Look for the word "planned."' },
          q: 'Tap the sentence that tells her first plan.', a: 'eat every bite by herself', mishap: 'Oops! I planned to eat five mooncakes. I only ate one and fell asleep! 😴 Try again!' },
        advisor: { type: 'feel', q: 'How did Mei feel after sharing?', opts: ['😊 Richer and happier', '😢 Sad and hungry', '😠 Angry'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['felt much richer'], mishap: 'Look for a feeling word near the end.' },
        fill: { kind: 'word', sent: 'Slowly, a ___ spread across her face.', opts: ['smile', 'smell', 'smoke'] },
        spell: { w: 'five', sent: 'Mei had a pile of ___ mooncakes.', split: 'f[i]v[e]', pic: '5️⃣' }
      },
      space: {
        title: 'The Unselfish Red Panda',
        targets: ['unselfish', 'unkindly', 'uncomfortable', 'discouraged', 'dislike', 'reconsidered', 'rethink', 'renewed', 'selfishness', 'responsible'],
        model: {
          title: 'Prefixes: un-, dis-, re-',
          lines: ['un- and dis- mean "not": unkind, dislike.', 're- means "again": rethink, renew.'],
          ex: [{ w: '[un]|self|ish', tag: 'not selfish' }, { w: '[dis]|like', tag: 'not like' }, { w: '[re]|think', tag: 'think again' }, { w: '[re]|new|ed', tag: 'made new again' }]
        },
        sort: { a: 'not (un-, dis-) 🚫', b: 'again (re-) 🔁', items: [['unselfish', 'a'], ['rethink', 'b'], ['dislike', 'a'], ['renewed', 'b']], hint: 'Cover the base word. Which prefix is left?', split: { unselfish: '[un]selfish', rethink: '[re]think', dislike: '[dis]like', renewed: '[re]newed' } },
        build: { w: 'un|com|fort|a|ble', tiles: ['un', 'com', 'fort', 'a', 'ble', 'bul'], pic: '😣', clue: 'Not cozy. Not feeling right.' },
        pick: { w: 'discouraged', opts: ['discouraged', 'discuraged', 'discouradged'], pic: '😞', clue: 'Feeling like giving up.', split: '[dis]|cour|aged' },
        hear: { w: 'reconsidered', opts: ['reconsidered', 'reconsiderd', 'recunsidered'], pic: '🤔', clue: 'Thought about it again.', split: '[re]|con|sid|ered' },
        rebel: { words: ['uncle', 'unkind', 'unselfish', 'unhappy'], why: '"uncle" starts with un, but "cle" is not a word. It is not a prefix here!' },
        chunks: [
          { s: ['Greetings from the misty bamboo forests of Sichuan Province, China, home of the red panda, a shy, tree-climbing mammal with a fluffy, ringed tail.', 'Despite its name, the red panda is not a close relative of the giant panda.'], pic: '🎋', focus: '50% 50%', check: ['🎋🌕', '🌵🏜️', '🌊🐠'] },
          { s: ['I arrived during the Mid-Autumn Festival, a celebration of the harvest moon, when families share round pastries called mooncakes.', 'A red panda cub named Mei had collected a stack of them, and she was determined not to share a single crumb.'], pic: '🥮', focus: '50% 40%', check: ['🐼🥮🥮🥮', '🐼🍕', '🐼🍦'] },
          { s: ['"These are mine, and I am not responsible for anyone else," she declared, somewhat unkindly.', 'But as the moon rose, she noticed an elderly panda shivering alone and a monkey who seemed discouraged and hungry.'], pic: '🐒', focus: '65% 45%', check: ['🐼👀🐒', '🐼⚽', '🐼🚗'] },
          { s: ['Mei felt an uncomfortable twinge in her chest; she was beginning to dislike her own selfishness.', 'She reconsidered her plan, divided her mooncakes, and invited everyone to join her on a wide branch.'], pic: '🤲', focus: '55% 50%', check: ['🐼🤲🐒', '🐼😠', '🐼😴'] },
          { s: ['By the end of the night, the lonely panda was laughing and the monkey was licking crumbs off his fingers.', 'Mei discovered that being unselfish felt far better than having the biggest pile.'], pic: '🌕', focus: '50% 20%', check: ['🐼🐒🌕', '🐼🏖️', '🐼🎸'] },
          { s: ['Prefixes helped me understand her change: un- and dis- mean "not," and re- means "again."', 'Mei did not just rethink her plan; she renewed her whole heart.'], pic: '💛', focus: '50% 50%', check: ['🐦💛', '🐦😡', '🐦😴'] }
        ],
        question: { pre: { q: 'Character change: What made Mei change her mind?', opts: ['👀 She noticed others who were cold, lonely, and hungry', '🌧️ It started raining', '🍰 She was too full'], mishap: 'Look for what Mei noticed as the moon rose.' },
          q: 'Tap the sentence that tells what she noticed.', a: 'noticed an elderly panda shivering alone', mishap: 'Oops! I noticed a lantern and thought it was the moon. 🏮 Try again!' },
        advisor: { type: 'mistake', pip: 'Red pandas are close cousins of giant pandas.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'not a close relative of the giant panda', mishap: 'That sentence does not compare the pandas. Try another, advisor!' },
        fill: { kind: 'word', sent: 'Mei discovered that being ___ felt far better than having the biggest pile.', opts: ['unselfish', 'unhappy', 'unlucky'] },
        spell: { w: 'dislike', sent: 'She began to ___ her own selfishness.', split: '[dis]|like', pic: '👎' }
      }
    }
  },
  /* ======================= THURSDAY ======================= */
  {
    day: 4, name: 'Thursday', place: 'Svalbard, Norway', flag: '🇳🇴', scene: 'img/u2w2_thu_arcticfox.webp',
    sceneBrief: 'Snowy shoreline in the Arctic at twilight, pink-purple sky, icebergs in dark water. A white arctic fox (Frost) buries a fish in the snow; a big round gull, too full to fly, sits on a rock with fish tails sticking out of its beak. Pip in three scarves.',
    qtype: 'Central message (lesson)', atype: 'Would you rather? (with a reason)',
    arrive: 'Pip flew to icy islands near the North Pole!',
    wiggle: { emoji: '🦊', text: 'Arctic fox pounce!', sub: 'Listen... listen... then POUNCE into the snow (a pillow)! Do it 3 times.' },
    route: {
      q: 'Tomorrow I fly home to New Jersey to see orange butterflies! How should I get there?',
      opts: [
        { pic: '🦋', label: 'Follow a butterfly', echo: 'I followed a butterfly, like you said. It led me home! 🦋' },
        { pic: '🎈', label: 'Float in a balloon', echo: 'I floated in a hot air balloon, like you said. What a view! 🎈' }
      ]
    },
    ps: 'P.S. When have you taken just what you needed so others could have some too?',
    levels: {
      ground: {
        title: 'Take Only What You Need',
        targets: ['these', 'sea', 'feed', 'week', 'three', 'need', 'foxes', 'birds', 'bears', 'she'],
        model: {
          title: 'Plurals: -s and -es',
          lines: ['Add -s to most words: bird → birds.', 'Add -es after s, x, sh, or ch: fox → foxes.'],
          ex: [{ w: 'bird|[s]', tag: '+ s' }, { w: 'bear|[s]', tag: '+ s' }, { w: 'fox|[es]', tag: '+ es' }, { w: 'dish|[es]', tag: '+ es' }]
        },
        sort: { a: '+ s 🟢', b: '+ es 🟣', items: [['bird', 'a'], ['fox', 'b'], ['bear', 'a'], ['dish', 'b']], hint: 'Does it end in s, x, sh, or ch? Then add -es.', split: { fox: 'fo[x]', dish: 'di[sh]' } },
        build: { w: 'fox|es', tiles: ['fox', 'es', 'is'], pic: '🦊🦊', clue: 'More than one fox.' },
        pick: { w: 'these', opts: ['these', 'theez', 'thees'], pic: '👇', clue: 'Not those, but ___.', split: 'th[e]s[e]' },
        hear: { w: 'week', opts: ['week', 'weke', 'wek'], pic: '📅', clue: 'Seven days.', split: 'w[ee]k' },
        rebel: { words: ['there', 'these', 'here', 'eve'], why: '"there" has e and a magic e, but it does not say /ē/! It says /air/.' },
        chunks: [
          { s: ['Today I am far up north, on an icy island called Svalbard.', 'It is very cold here.'], pic: '❄️', focus: '50% 40%', check: ['❄️🏝️', '☀️🏖️', '🌵🏜️'] },
          { s: ['A white fox named Frost found a big pile of fish by the sea.', '"These fish can feed my family for a week," she said.'], pic: '🐟', focus: '45% 70%', check: ['🦊🐟🐟', '🦊🍕', '🦊🚗'] },
          { s: ['A gull flew down and grabbed three fish.', 'Then it grabbed six more, and it ate and ate until it was sick!'], pic: '🤢', focus: '70% 50%', check: ['🐦🐟🤢', '🐦😴', '🐦🎸'] },
          { s: ['Frost took only the fish she needed, and she hid some in the snow for later.', 'She left the rest for the bears, the birds, and the other foxes.'], pic: '🐻‍❄️', focus: '40% 75%', check: ['🦊❄️🐟', '🦊🏠', '🦊🍦'] },
          { s: ['Later, the hungry gull came back, and Frost gave it a fish.', 'The lesson: take only what you need, and there will be enough for all.'], pic: '💛', focus: '50% 50%', check: ['🦊🐟🐦', '🦊😡', '🦊😴'] }
        ],
        question: { pre: { q: 'What did the gull do?', opts: ['🐟 Ate too much and got sick', '🎁 Shared its fish', '😴 Took a nap'], mishap: 'Hmm, read the part about the gull again.' },
          q: 'Tap the sentence that tells what the gull did.', a: 'ate and ate until it was sick', mishap: 'Oops! I tried to eat nine fish too. Now I feel wobbly! 🤢 Try again!' },
        advisor: { type: 'rather', q: 'Would you rather be Frost or the gull?', choices: [
          { label: '🦊 Frost', q: 'Pick a reason from the postcard:', reasons: ['I could hide fish in the snow for later.', 'I could fly to the moon.'] },
          { label: '🐦 The gull', q: 'Pick a reason from the postcard:', reasons: ['I could fly down and grab fish.', 'I could swim with whales.'] }
        ], mishap: 'That is fun, but the postcard does not say it! Pick a reason from the postcard.' },
        fill: { kind: 'word', sent: 'She left the rest for the bears, the birds, and the other ___.', opts: ['foxes', 'boxes', 'fishes'] },
        spell: { w: 'these', sent: '___ fish can feed my family.', split: 'th[e]s[e]', pic: '🐟' }
      },
      sky: {
        title: 'Frost and the Greedy Gull',
        targets: ['tried', 'pie', 'cried', 'tired', 'fly', 'five', 'hides', 'pile', 'decide'],
        model: {
          title: 'ie says /ī/, and y → i',
          lines: ['ie can say /ī/: pie, tie, lie.', 'Change y to i and add -ed: cry → cried, try → tried.'],
          ex: [{ w: 'p[ie]', tag: 'ie = /ī/' }, { w: 't[ie]', tag: 'ie = /ī/' }, { w: 'cr[ie]d', tag: 'cry → cried' }, { w: 'tr[ie]d', tag: 'try → tried' }]
        },
        sort: { a: 'ie says /ī/ 🥧', b: 'ie says /ē/ 🔑', items: [['pie', 'a'], ['piece', 'b'], ['cried', 'a'], ['thief', 'b']], hint: 'Say it out loud. Does ie sound like "eye" or "ee"?', split: { pie: 'p[ie]', piece: 'p[ie]ce', cried: 'cr[ie]d', thief: 'th[ie]f' } },
        build: { w: 'de|cide', tiles: ['de', 'cide', 'side'], pic: '🤔', clue: 'Make up your mind.' },
        pick: { w: 'cried', opts: ['cried', 'cryed', 'cride'], pic: '😭', clue: 'Shouted or wept.', split: 'cr[ie]d' },
        hear: { w: 'tie', opts: ['tie', 'tye', 'tigh'], pic: '👔', clue: 'You wear it with a nice shirt.', split: 't[ie]' },
        rebel: { words: ['field', 'pie', 'tie', 'cried'], why: '"field" has ie, but it says /ē/! The others say /ī/.' },
        chunks: [
          { s: ['Greetings from Svalbard, a group of icy islands near the North Pole, where the sun hides for months in winter.', 'I am wearing three scarves, and my beak is still cold!'], pic: '❄️', focus: '50% 40%', check: ['❄️🧣🐦', '☀️🏖️', '🌵🏜️'] },
          { s: ['An arctic fox named Frost found a pile of fish that had washed up on the shore.', 'She tried to decide how many she needed, and she chose five.'], pic: '🐟', focus: '45% 70%', check: ['🦊🐟🐟', '🦊🍕', '🦊🚗'] },
          { s: ['Then a greedy gull swooped down.', 'It stuffed its belly with fish until it was as round as a pie, and it could hardly fly.'], pic: '🥧', focus: '70% 50%', check: ['🐦🐟🥧', '🐦😴', '🐦🎸'] },
          { s: ['"Leave some for the others!" cried Frost.', 'But the gull flapped away with a fish in each foot.'], pic: '💬', focus: '55% 45%', check: ['🦊💬🐦', '🦊🎂', '🦊⚽'] },
          { s: ['Frost buried two of her fish in the snow and left the rest for the bears and birds.', 'Weeks later, when the gull came back tired and hungry, Frost dug up a fish and shared it.'], pic: '🐟', focus: '40% 75%', check: ['🦊🐟🐦', '🦊🏠', '🦊🍦'] },
          { s: ['"I did not take more than I needed, so I had enough to give," she said.', 'The lesson: take only what you need, and there will be enough for everyone.'], pic: '💛', focus: '50% 50%', check: ['🦊💛🐦', '🦊😡', '🦊😴'] }
        ],
        question: { pre: { q: 'What is the central message?', opts: ['🐟 Take only what you need, so there is enough for everyone', '🏃 Always run fast', '❄️ Snow is cold'], mishap: 'Look near the end. Pip tells the lesson!' },
          q: 'Tap the sentence with the lesson.', a: 'take only what you need', mishap: 'Oops! I took ALL the scarves. Now I cannot see! 🧣 Try again!' },
        advisor: { type: 'rather', q: 'Would you rather be Frost or the gull?', choices: [
          { label: '🦊 Frost', q: 'Pick a reason from the postcard:', reasons: ['I could bury fish in the snow for later.', 'I could ride a sled.'] },
          { label: '🐦 The gull', q: 'Pick a reason from the postcard:', reasons: ['I could swoop down from the sky.', 'I could live in a castle.'] }
        ], mishap: 'That is fun, but the postcard does not say it! Pick a reason from the postcard.' },
        fill: { kind: 'word', sent: 'She tried to decide how many she needed, and she chose ___.', opts: ['five', 'fire', 'fine'] },
        spell: { w: 'cried', sent: '"Leave some for the others!" ___ Frost.', split: 'cr[ie]d', pic: '💬' }
      },
      space: {
        title: 'Enough for Everyone',
        targets: ['archipelago', 'resourceful', 'plentiful', 'deliberately', 'generous', 'sensible', 'exhausted', 'calculated', 'required', 'greed'],
        model: {
          title: 'Character traits',
          lines: ['A trait describes what a character is like inside.', 'Look at actions: What does the character DO, and why?'],
          ex: [{ w: 're|source|ful', tag: 'finds clever ways' }, { w: 'gen|er|ous', tag: 'likes to share' }, { w: 'sen|si|ble', tag: 'makes wise choices' }, { w: 'greed|y', tag: 'wants too much' }]
        },
        sort: { a: 'Frost 🦊', b: 'The gull 🐦', items: [['generous', 'a'], ['greedy', 'b'], ['sensible', 'a'], ['wasteful', 'b']], hint: 'Think about what each character DID.' },
        build: { w: 'ar|chi|pel|a|go', tiles: ['ar', 'chi', 'pel', 'a', 'go', 'ki'], pic: '🏝️🏝️', clue: 'A group of islands.' },
        pick: { w: 'resourceful', opts: ['resourceful', 'resorceful', 'resourcefull'], pic: '🧠', clue: 'Good at finding clever ways to solve problems.', split: 're|source|[ful]' },
        hear: { w: 'deliberately', opts: ['deliberately', 'deliberatly', 'delibrately'], pic: '🧠👉', clue: 'On purpose.', split: 'de|lib|er|ate|ly' },
        rebel: { words: ['greedy', 'generous', 'sensible', 'resourceful'], why: '"greedy" is the only trait that does NOT describe Frost!' },
        chunks: [
          { s: ['Greetings from Svalbard, an Arctic archipelago, or group of islands, located about halfway between Norway and the North Pole.', 'During the polar night, the sun does not rise at all for about three months.'], pic: '❄️', focus: '50% 40%', check: ['❄️🌑🏝️', '☀️🏖️', '🌵🏜️'] },
          { s: ['Arctic foxes survive here by being resourceful.', 'In summer, when food is plentiful, they bury extra eggs and fish in the frozen ground, creating secret pantries for winter.'], pic: '🥚', focus: '40% 75%', check: ['🦊🥚❄️', '🦊🏠', '🦊🍦'] },
          { s: ['I watched a fox named Frost discover a heap of fish on the shore.', 'She calculated what her family required, took five, and deliberately left the rest for other hungry animals.'], pic: '🐟', focus: '45% 70%', check: ['🦊🐟🐟', '🦊🍕', '🦊🚗'] },
          { s: ['Moments later, a glaucous gull, one of the largest gulls in the Arctic, gobbled so many fish that it could barely take off.', 'Its greed seemed impressive at first, but by midwinter, the gull was exhausted and starving.'], pic: '🐦', focus: '70% 50%', check: ['🐦🐟🐟😵', '🐦😴', '🐦🎸'] },
          { s: ['When the gull staggered back, Frost could have ignored it.', 'Instead, she dug up one of her hidden fish and offered it, proving that she was both sensible and generous.'], pic: '🤲', focus: '50% 50%', check: ['🦊🐟🐦', '🦊😡', '🦊😴'] },
          { s: ['From the gull\'s point of view, Frost must have seemed like a hero.', 'The message is clear: when everyone takes only what they need, there is enough to go around.', 'Tomorrow I fly home to Cape May to watch thousands of orange butterflies.'], pic: '🦋', focus: '50% 50%', check: ['🐦🦋', '🐦🧊', '🐦🍕'] }
        ],
        question: { pre: { q: 'Which trait describes Frost?', opts: ['🤲 Generous', '🤑 Greedy', '😴 Lazy'], mishap: 'Think about what Frost did for the gull.' },
          q: 'Tap the sentence that proves it.', a: 'both sensible and generous', mishap: 'Oops! I tried to bury my seeds in the snow and forgot where! ❄️ Try again!' },
        advisor: { type: 'predict', q: 'Where will Pip go tomorrow?', opts: ['🦋 To see butterflies in Cape May', '🐧 To see penguins', '🌋 To a volcano'], evQ: 'Tap the clue in the postcard.', a: ['orange butterflies'], mishap: 'Look for a clue about tomorrow!' },
        fill: { kind: 'word', sent: 'Arctic foxes survive here by being ___.', opts: ['resourceful', 'restful', 'respectful'] },
        spell: { w: 'generous', sent: 'Frost was sensible and ___.', split: 'gen|er|ous', pic: '🤲' }
      }
    }
  },
  /* ======================= FRIDAY ======================= */
  {
    day: 5, name: 'Friday', place: 'Cape May, New Jersey', flag: '🏠', scene: 'img/u2w2_fri_monarchs.webp',
    sceneBrief: 'Sunny fall dunes at Cape May, NJ, the lighthouse behind. Bright yellow seaside goldenrod covered with orange-and-black monarch butterflies; one monarch (Queenie) waves a wing to tired butterflies on a pine branch. Pip at a radio microphone in the dune grass.',
    qtype: 'Compare two stories', atype: 'Pip made a mistake',
    arrive: 'Pip flew home to Cape May, New Jersey!',
    compareWith: 1,
    wiggle: { emoji: '🦋', text: 'Butterfly flutter!', sub: 'Hook your thumbs together and flutter your fingers like wings. Fly your butterfly all around the room!' },
    route: {
      q: 'Next week I visit animals who practice and play on teams! How should I get there?',
      opts: [
        { pic: '⚽', label: 'Bounce on a ball', echo: 'I bounced on a giant ball, like you said. Boing! ⚽' },
        { pic: '🛼', label: 'Roll on skates', echo: 'I rolled on tiny skates, like you said. Wheee! 🛼' }
      ]
    },
    ps: 'P.S. Dee, Benny, Mei, Frost, and Queenie were all kind. Who was your favorite? Why?',
    radio: {
      title: 'Pip\'s Radio Hour: The Queen\'s Feast',
      parts: ['Pip', 'Queenie the Monarch', 'Kiki the Penguin'],
      lines: [
        ['Pip', 'Beep beep! This is Pip, live from Cape May, New Jersey!'],
        ['Kiki the Penguin', 'And this is Kiki, calling in from my sunny beach in South Africa!'],
        ['Pip', 'Our guest today is a monarch butterfly. Say hi, Queenie!'],
        ['Queenie the Monarch', 'Hello! Sorry, my mouth is full. I am sipping nectar from these yellow flowers.'],
        ['Kiki the Penguin', 'Why do you eat so much?'],
        ['Queenie the Monarch', 'I need energy! Tonight I start a long, long trip to Mexico.'],
        ['Pip', 'Queenie, I heard you did something kind today.'],
        ['Queenie the Monarch', 'Well, at first I wanted all the flowers for me. Then I saw some tired butterflies.'],
        ['Kiki the Penguin', 'What did you do?'],
        ['Queenie the Monarch', 'I called them over to my feast. There was plenty for everyone!'],
        ['Kiki the Penguin', 'That is like my friend Dee. When other penguins teased me, she asked me to swim.'],
        ['Pip', 'So Queenie shared food, and Dee shared friendship. What is the same?'],
        ['Queenie the Monarch', 'We both saw someone who needed help, and we helped.'],
        ['Kiki the Penguin', 'Being kind is the best feast of all!'],
        ['Pip', 'Good luck on your trip, Queenie!'],
        ['ALL', 'This is Pip\'s Radio Hour, signing off! Over and out!']
      ]
    },
    levels: {
      ground: {
        title: 'The Queen\'s Feast',
        targets: ['see', 'eat', 'feast', 'leaves', 'she', 'me', 'being', 'Queenie', 'Dee', 'need'],
        model: {
          title: 'Plurals: f → ves',
          lines: ['Some words that end in f change f to v and add -es.', 'leaf → leaves, wolf → wolves, half → halves'],
          ex: [{ w: 'lea[ves]', tag: 'leaf → leaves' }, { w: 'wol[ves]', tag: 'wolf → wolves' }, { w: 'hal[ves]', tag: 'half → halves' }, { w: 'el[ves]', tag: 'elf → elves' }]
        },
        sort: { a: 'f → ves 🍂', b: '+ s 🟢', items: [['leaf', 'a'], ['bird', 'b'], ['wolf', 'a'], ['cat', 'b']], hint: 'Does the word end in f?', split: { leaf: 'lea[f]', wolf: 'wol[f]' } },
        build: { w: 'but|ter|fly', tiles: ['but', 'ter', 'fly', 'flee'], pic: '🦋', clue: 'An insect with bright wings.' },
        pick: { w: 'leaves', opts: ['leaves', 'leafs', 'leevs'], pic: '🍂', clue: 'More than one leaf.', split: 'lea[ves]' },
        hear: { w: 'feast', opts: ['feast', 'feest', 'fest'], pic: '🍽️', clue: 'A big, big meal.', split: 'f[ea]st' },
        rebel: { words: ['roofs', 'leaves', 'wolves', 'halves'], why: '"roof" ends in f, but it just adds -s: roofs!' },
        chunks: [
          { s: ['Today I am home in New Jersey, at Cape May.', 'I see lots of orange butterflies called monarchs!'], pic: '🦋', focus: '50% 40%', check: ['🦋🦋🌼', '🐝🍯', '🐞🍃'] },
          { s: ['They stop here in the fall to eat before a long trip south.', 'One monarch named Queenie found a big patch of yellow flowers.'], pic: '🌼', focus: '45% 70%', check: ['🦋🌼🌼', '🦋🍕', '🦋🚗'] },
          { s: ['"This is my feast!" she said at first.', 'Then she saw tired butterflies on the leaves.'], pic: '🍃', focus: '75% 40%', check: ['🦋😴🍃', '🦋⚽', '🦋🎸'] },
          { s: ['"Come eat with me," Queenie called.', '"There is enough for all of us!"', 'The monarchs sipped and sipped until they were full.'], pic: '🤝', focus: '50% 60%', check: ['🦋🦋🦋🌼', '🦋😠', '🦋🧊'] },
          { s: ['On Monday, Dee was kind to Kiki the penguin.', 'Today, Queenie was kind to the butterflies.', 'Being kind is the best feast of all, and we all need it!'], pic: '💛', focus: '50% 50%', check: ['🐧🦋💛', '🐧🏔️', '🐧🍦'] }
        ],
        question: { pre: { q: 'Think about Monday\'s penguins and today\'s butterflies. What is the SAME?', opts: ['💛 Someone was kind to others', '🧊 They both live on ice', '🌸 They both drink from flowers'], mishap: 'Is that true for BOTH stories? Penguins do not drink from flowers!' },
          q: 'Tap the sentence in today\'s postcard that tells who was kind today.', a: 'Queenie was kind to the butterflies', mishap: 'Oops! I tried to sip nectar and got a flower stuck on my beak. 🌼 Try again!' },
        advisor: { type: 'mistake', pip: 'Queenie kept all the flowers for herself.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'Come eat with me', mishap: 'That sentence does not tell what Queenie did. Try another, advisor!' },
        fill: { kind: 'word', sent: 'The monarchs sipped and sipped until they were ___.', opts: ['full', 'fall', 'fill'] },
        spell: { w: 'leaves', sent: 'The butterflies rested on the ___.', split: 'lea[ves]', pic: '🍂' }
      },
      sky: {
        title: 'The Monarchs\' Feast',
        targets: ['mild', 'bright', 'flight', 'wild', 'find', 'smile', 'pine', 'dine', 'sunlight', 'kind', 'fly', 'tonight'],
        model: {
          title: 'i by itself: -ild and -ind',
          lines: ['In -ild and -ind, the i says its name: wild, mild, kind, find.', 'No magic e needed!'],
          ex: [{ w: 'w[i]ld', tag: '-ild' }, { w: 'm[i]ld', tag: '-ild' }, { w: 'k[i]nd', tag: '-ind' }, { w: 'f[i]nd', tag: '-ind' }]
        },
        sort: { a: 'Long i 🌙', b: 'Short i 🐟', items: [['wild', 'a'], ['will', 'b'], ['kind', 'a'], ['kid', 'b']], hint: 'Does the i say its name?', split: { wild: 'w[i]ld', will: 'w[i]ll', kind: 'k[i]nd', kid: 'k[i]d' } },
        build: { w: 'sun|light', tiles: ['sun', 'light', 'lite'], pic: '🌞', clue: 'Light from the sun.' },
        pick: { w: 'flight', opts: ['flight', 'flite', 'fligt'], pic: '✈️', clue: 'A trip through the air.', split: 'fl[igh]t' },
        hear: { w: 'wild', opts: ['wild', 'wyld', 'wiled'], pic: '🌿', clue: 'Not tame. Living in nature.', split: 'w[i]ld' },
        rebel: { words: ['build', 'wild', 'mild', 'child'], why: '"build" has -ild, but its i is short! Say it: bild.' },
        chunks: [
          { s: ['Greetings from Cape May, New Jersey, where the ocean breeze is mild and the sky is bright.', 'Every fall, thousands of monarch butterflies stop here on their long flight to Mexico.'], pic: '🦋', focus: '50% 40%', check: ['🦋🦋🌼', '🐝🍯', '🐞🍃'] },
          { s: ['They need energy for the trip, so they sip nectar from wild yellow flowers called goldenrod.', 'This morning, I met a monarch named Queenie who found a huge patch all by herself.'], pic: '🌼', focus: '45% 70%', check: ['🦋🌼🌼', '🦋🍕', '🦋🚗'] },
          { s: ['"This whole feast is mine!" she said with a proud smile.', 'Then she spotted a tired group of butterflies resting on a pine tree, too weak to find food.'], pic: '🌲', focus: '75% 40%', check: ['🦋😴🌲', '🦋⚽', '🦋🎸'] },
          { s: ['Queenie thought about it for a minute.', '"Come and dine with me," she called, "because there is plenty for everyone!"'], pic: '💬', focus: '50% 60%', check: ['🦋💬🦋', '🦋😠', '🦋🧊'] },
          { s: ['Soon the goldenrod was covered with orange wings, like a quilt in the sunlight.', 'This reminded me of Monday, when Dee was kind to Kiki the penguin.'], pic: '🌞', focus: '50% 60%', check: ['🦋🦋🦋🌞', '🦋🌧️', '🦋🎈'] },
          { s: ['Both stories have the same lesson: a kind heart is the best kind of treasure.', 'Tonight the monarchs will fly south, and I will wave goodbye!'], pic: '💛', focus: '50% 50%', check: ['🐧🦋💛', '🐧🏔️', '🐧🍦'] }
        ],
        question: { pre: { q: 'What lesson do Monday\'s and today\'s stories share?', opts: ['💛 A kind heart is the best treasure', '🏃 Be the fastest', '🌸 Flowers are yellow'], mishap: 'Look for the word "Both" near the end.' },
          q: 'Tap the sentence that tells the shared lesson.', a: 'a kind heart is the best kind of treasure', mishap: 'Oops! I looked for treasure under the sand and found a crab. 🦀 Try again!' },
        advisor: { type: 'feel', q: 'How did Queenie feel at first?', opts: ['😎 Proud and selfish', '😢 Lonely', '😨 Scared'], evQ: 'How do you know? Tap the sentence that shows it.', a: ['with a proud smile'], mishap: 'Look at what Queenie said first, and how she said it.' },
        fill: { kind: 'word', sent: 'Soon the goldenrod was covered with orange wings, like a quilt in the ___.', opts: ['sunlight', 'sunset', 'sunflower'] },
        spell: { w: 'flight', sent: 'They stop here on their long ___.', split: 'fl[igh]t', pic: '✈️' }
      },
      space: {
        title: 'A Feast for Travelers',
        targets: ['peninsula', 'migrating', 'generosity', 'immediately', 'exhausted', 'resembled', 'befriended', 'multiplies', 'situation', 'expression'],
        model: {
          title: 'Theme across stories',
          lines: ['A theme is a big lesson that can show up in many stories.', 'Different characters + different problems + the same lesson = a shared theme.'],
          ex: [{ w: 'theme', tag: 'the big lesson' }, { w: 'gen|er|os|i|ty', tag: 'being giving' }, { w: 'be|friend|ed', tag: 'became a friend to' }, { w: 'mul|ti|plies', tag: 'grows more and more' }]
        },
        sort: { a: 'Simile (like/as) 🟢', b: 'Not a simile 🔵', items: [['like a guard at a castle gate', 'a'], ['she announced', 'b'], ['like a funnel', 'a'], ['a pine branch', 'b']], hint: 'Does it compare two things using "like" or "as"?' },
        build: { w: 'pe|nin|su|la', tiles: ['pe', 'nin', 'su', 'la', 'lah'], pic: '🗺️', clue: 'Land with water on three sides.' },
        pick: { w: 'immediately', opts: ['immediately', 'immediatly', 'imediately'], pic: '⚡', clue: 'Right away.', split: 'im|me|di|ate|ly' },
        hear: { w: 'resembled', opts: ['resembled', 'resembeld', 'rezembled'], pic: '👯', clue: 'Looked like.', split: 're|sem|bled' },
        rebel: { words: ['monkeys', 'multiplies', 'cries', 'butterflies'], why: '"monkeys" just adds -s, because a vowel comes before the y. The others change y to i and add -es.' },
        chunks: [
          { s: ['Greetings from Cape May, New Jersey, a peninsula that works like a funnel for migrating animals.', 'Every autumn, monarch butterflies traveling south gather here before they cross Delaware Bay.'], pic: '🦋', focus: '50% 40%', check: ['🦋🦋🗺️', '🐝🍯', '🐞🍃'] },
          { s: ['Some of these monarchs will fly nearly three thousand miles to the mountains of central Mexico, a journey none of them has made before.', 'To survive, they must fuel up on nectar from seaside goldenrod, a bright yellow wildflower that blooms along the dunes.'], pic: '🌼', focus: '45% 70%', check: ['🦋🌼🌼', '🦋🍕', '🦋🚗'] },
          { s: ['This morning, a monarch I nicknamed Queenie discovered an enormous patch of goldenrod and immediately claimed it.', '"Finders keepers!" she announced, spreading her wings like a guard at a castle gate.'], pic: '🏰', focus: '50% 60%', check: ['🦋🏰', '🦋😠', '🦋🧊'] },
          { s: ['But when she noticed a cluster of exhausted butterflies clinging to a pine branch, her expression softened.', 'She fluttered over and guided them to the flowers, and soon the goldenrod resembled a quilt of orange and black.'], pic: '🌲', focus: '75% 40%', check: ['🦋😴🌲', '🦋⚽', '🦋🎸'] },
          { s: ['This week I met several characters who chose generosity: Dee befriended Kiki, Benny and the cactus helped each other, Mei shared her mooncakes, Frost fed the gull, and Queenie shared her feast.', 'Each character faced a different situation, yet each one discovered the same truth.'], pic: '📚', focus: '50% 50%', check: ['🐧🦇🐼🦊🦋', '🐧🏔️', '🐧🍦'] },
          { s: ['Kindness is not like a mooncake that disappears when you share it; instead, it multiplies.', 'That might be the most important lesson my travels have taught me so far.'], pic: '💛', focus: '50% 50%', check: ['🐦💛', '🐦😡', '🐦😴'] }
        ],
        question: { pre: { q: 'Compare: What did ALL the characters this week have in common?', opts: ['🤲 They chose to be generous', '🏊 They could all swim', '🌙 They all lived in the desert'], mishap: 'Look for the sentence that lists all the characters.' },
          q: 'Tap the sentence that tells what they chose.', a: 'several characters who chose generosity', mishap: 'Oops! I tried to list every character and ran out of feathers to count on. 🪶 Try again!' },
        advisor: { type: 'mistake', pip: 'When you share kindness, you have less of it.', q: 'Pip made a mistake! Tap the sentence that proves Pip is wrong.', a: 'instead, it multiplies', mishap: 'That sentence does not tell what happens to kindness. Try another, advisor!' },
        fill: { kind: 'word', sent: 'She fluttered over and guided them to the flowers, and soon the goldenrod ___ a quilt of orange and black.', opts: ['resembled', 'reminded', 'returned'] },
        spell: { w: 'exhausted', sent: 'The ___ butterflies clung to a branch.', split: 'ex|haust|ed', pic: '😩' }
      }
    }
  }
  ]
};

/* ======================= VOCABULARY WORDS (focus: READING them) =======================
   Ground = district Unit 2 Week 2 key words (1-Grade2-ELA.txt, Unit 2 KEY WORDS/VOCABULARY, Week 2; the file
   shows "(f)estival" with a clipped first letter: read as "festival"). Sky = Unit 2 Week 3 words (preview).
   Space = long words from this week's postcards. SWAP IN THE TEACHER'S LIST if she sends vocabulary. */
(function () {
  const W = window.PIP_WEEKS['u2w2'];
  W.vocab = {
    // Ground (district U2W2)
    noticed: { misread: 'no-tiked', split: 'n[o]|t[i]c[ed]', say: 'no|tist', look: ['notice', 'nodded'], pic: '👀❗', means: 'saw or spotted',
      tricky: { mark: 'noti[ced]', says: 'NO-tist', note: '"ced" says st.' } },
    crept: { misread: 'creep-t', split: 'cr[e]pt', look: ['crest', 'creep'], pic: '🐾🤫', means: 'moved slowly and quietly' },
    unusual: { misread: 'un-us-al', split: '[u]n|[u]|s[u]|[a]l', say: 'un|you|zhoo|ul', look: ['usual', 'unequal'], pic: '🦓🌈', means: 'not normal, surprising' },
    hardworking: { misread: 'hard-wor-king', split: 'h[ar]d|w[or]k|[i]ng', say: 'hard|werk|ing', look: ['hardware', 'working'], pic: '💪🧹', means: 'works a lot and tries hard',
      tricky: { mark: 'hardw[or]king', says: 'hard-WERK-ing', note: 'After w, "or" says er.' } },
    supper: { misread: 'super', split: 's[u]p|p[er]', say: 'sup|per', look: ['super', 'upper'], pic: '🍽️🌙', means: 'an evening meal' },
    grant: { misread: 'grand', split: 'gr[a]nt', look: ['grand', 'giant'], pic: '🧞🌟', means: 'give or allow' },
    festival: { misread: 'fes-tee-val', split: 'f[e]s|t[i]|v[a]l', say: 'fes|tih|vul', look: ['festive', 'factual'], pic: '🎪🎉', means: 'a big happy celebration' },
    king: { misread: 'kin', split: 'k[i]ng', look: ['kind', 'wing'], pic: '👑', means: 'a man who rules a land' },
    palace: { misread: 'pa-lace', split: 'p[a]l|[a]c[e]', say: 'pal|iss', look: ['place', 'palette'], pic: '🏰', means: 'a king or queen\'s huge home' },
    proposed: { misread: 'pro-pose-ed', split: 'pr[o]|p[o]s[ed]', say: 'pruh|pozd', look: ['propped', 'purposed'], pic: '💡🗣️', means: 'offered an idea or plan' },
    mistreated: { misread: 'mist-reated', split: 'm[i]s|tr[ea]t|[ed]', say: 'mis|treet|id', look: ['mistaken', 'retreated'], pic: '😢👎', means: 'treated in a mean way' },
    'good-hearted': { misread: 'good-heard-ed', split: 'g[oo]d-|h[ear]t|[ed]', say: 'good|hart|id', look: ['good-natured', 'hard-headed'], pic: '💛🤝', means: 'kind and caring',
      tricky: { mark: 'good-h[ear]ted', says: 'good-HAR-tid', note: '"ear" says ar here.' } },
    mourning: { misread: 'morning', split: 'm[our]n|[i]ng', say: 'morn|ing', look: ['morning', 'mounting'], pic: '😢🖤', means: 'feeling sad after a loss',
      tricky: { mark: 'm[our]ning', says: 'MORN-ing', note: 'Sounds like "morning," but it means sad.' } },
    // Sky (U2W3 preview)
    selfish: { misread: 'self-fish', split: 's[e]lf|[i]sh', say: 'self|ish', look: ['shellfish', 'elfish'], pic: '🙅🍪', means: 'only cares about yourself' },
    generous: { misread: 'gen-er-ose', split: 'g[e]n|[er]|[ou]s', say: 'jen|er|us', look: ['general', 'gorgeous'], pic: '🤲🎁', means: 'happy to give and share',
      tricky: { mark: '[g]enerous', says: 'JEN-er-us', note: 'g before e says j.' } },
    grouchy: { misread: 'grow-chee', split: 'gr[ou]|ch[y]', say: 'grow|chee', look: ['crouchy', 'grouping'], pic: '😠☁️', means: 'grumpy and cranky' },
    teammate: { misread: 'tee-mat', split: 't[ea]m|m[a]t[e]', say: 'team|mate', look: ['teamwork', 'tomato'], pic: '🤝⚽', means: 'someone on your team' },
    teams: { misread: 'tems', split: 't[ea]ms', look: ['teens', 'tames'], pic: '🔴🔵', means: 'groups that play together' },
    players: { misread: 'play-ress', split: 'pl[ay]|[er]s', say: 'play|erz', look: ['prayers', 'plates'], pic: '⚽🏃', means: 'people who play a game' },
    spoiled: { misread: 'spoil-ed', split: 'sp[oi]l[ed]', look: ['spilled', 'soiled'], pic: '👑😤', means: 'always gets their way',
      tricky: { mark: 'spoil[ed]', says: 'spoyld', note: '"ed" just says d.' } },
    elder: { misread: 'el-dur (like elf)', split: '[e]l|d[er]', say: 'el|der', look: ['older', 'eider'], pic: '👵🦉', means: 'an older, wise person' },
    handsome: { misread: 'hand-some', split: 'h[a]nd|s[o]m[e]', say: 'han|sum', look: ['hands', 'handle'], pic: '🤵🌟', means: 'good-looking',
      tricky: { mark: 'han[d]some', says: 'HAN-sum', note: 'The d is quiet!' } },
    accurate: { misread: 'ac-cure-ate', split: '[a]c|c[u]|r[a]t[e]', say: 'ak|yur|it', look: ['accused', 'accident'], pic: '🎯', means: 'exactly right' },
    interrupted: { misread: 'in-ter-up-ted', split: '[i]n|t[er]|r[u]pt|[ed]', say: 'in|ter|rupt|id', look: ['interested', 'erupted'], pic: '🗣️✋', means: 'cut in while someone talked' },
    coach: { misread: 'cotch', split: 'c[oa]ch', look: ['couch', 'coat'], pic: '📣🧢', means: 'a person who trains a team' },
    clumsy: { misread: 'clum-sigh', split: 'cl[u]m|s[y]', say: 'clum|zee', look: ['clumps', 'crumbs'], pic: '🙃💥', means: 'bumps and trips a lot' },
    graceful: { misread: 'grass-ful', split: 'gr[a]c[e]|f[u]l', say: 'grace|ful', look: ['grateful', 'gracious'], pic: '🩰🦢', means: 'moves smoothly and beautifully' },
    contest: { misread: 'con-test (like quiz)', split: 'c[o]n|t[e]st', say: 'con|test', look: ['context', 'content'], pic: '🏅', means: 'a game to see who wins' },
    // Space
    endangered: { misread: 'en-dan-ger-ed', split: '[e]n|d[a]n|g[er]ed', say: 'en|dane|jerd', look: ['dangerous', 'endeared'], pic: '⚠️🐧', means: 'in danger of disappearing forever',
      tricky: { mark: 'endan[g]ered', says: 'en-DANE-jerd', note: 'g before e says j.' } },
    gentleness: { misread: 'gent-el-ness', split: 'g[e]n|tl[e]|n[e]ss', say: 'jen|tul|ness', look: ['gentlemen', 'greatness'], pic: '🪶', means: 'being soft and careful' },
    hesitantly: { misread: 'he-sit-antly', split: 'h[e]s|[i]|t[a]nt|l[y]', say: 'hez|ih|tunt|lee', look: ['hesitate', 'instantly'], pic: '🤔👣', means: 'slowly, not quite sure' },
    mutualism: { misread: 'mut-u-al-ism', split: 'm[u]|t[u]|[a]l|[i]sm', say: 'myoo|choo|ul|izm', look: ['mutual', 'musicals'], pic: '🦇🤝🌵', means: 'two living things helping each other' },
    partnership: { misread: 'part-ner-ship', split: 'p[ar]t|n[er]|sh[i]p', say: 'part|ner|ship', look: ['partnering', 'membership'], pic: '🤝', means: 'working together as partners' },
    benefit: { misread: 'bee-nee-fit', split: 'b[e]n|[e]|f[i]t', say: 'ben|ih|fit', look: ['benefits', 'bonfire'], pic: '👍🎁', means: 'something good you get' },
    responsible: { misread: 'res-pon-sibble', split: 'r[e]|sp[o]n|s[i]|bl[e]', say: 'rih|spon|sih|bul', look: ['response', 'possible'], pic: '✅🐶', means: 'in charge of, can be trusted' },
    reconsidered: { misread: 'rec-on-sid-er-ed', split: 'r[e]|c[o]n|s[i]d|[er]ed', say: 'ree|kun|sid|erd', look: ['considered', 'recovered'], pic: '🤔🔁', means: 'thought about it again' },
    discouraged: { misread: 'dis-cour-aged (like our)', split: 'd[i]s|c[our]|[a]g[ed]', say: 'dis|kur|ijd', look: ['encouraged', 'discovered'], pic: '😞', means: 'feeling like giving up' },
    archipelago: { misread: 'arch-ee-pel-a-go', split: '[ar]|ch[i]|p[e]l|[a]|g[o]', say: 'ar|kih|pel|uh|go', look: ['architect', 'arcade'], pic: '🏝️🏝️🏝️', means: 'a group of islands',
      tricky: { mark: 'ar[ch]ipelago', says: 'ar-kih-PEL-uh-go', note: '"ch" says k here.' } },
    resourceful: { misread: 're-source-full', split: 'r[e]|s[our]c[e]|f[u]l', say: 'rih|sorss|ful', look: ['resources', 'respectful'], pic: '🧠🔧', means: 'finds clever ways to solve problems' },
    deliberately: { misread: 'de-lib-er-ate-lee', split: 'd[e]|l[i]b|[er]|[a]t[e]|l[y]', say: 'dih|lib|er|it|lee', look: ['delicately', 'desperately'], pic: '🧠👉', means: 'on purpose' },
    peninsula: { misread: 'pen-in-sool-a', split: 'p[e]|n[i]n|s[u]|l[a]', say: 'puh|nin|suh|luh', look: ['penicillin', 'insulate'], pic: '🗺️🌊', means: 'land with water on three sides' },
    migrating: { misread: 'mig-rat-ing', split: 'm[i]|gr[a]t|[i]ng', say: 'my|grayt|ing', look: ['migraine', 'mirroring'], pic: '🦋➡️', means: 'moving to a new place each season' },
    multiplies: { misread: 'mul-tip-lies', split: 'm[u]l|t[i]|pl[ie]s', say: 'mul|tih|plize', look: ['multiple', 'multitudes'], pic: '✖️📈', means: 'grows more and more' }
  };
  /* Warm-up (easy wins first): last week's words. SWAP IN THE TEACHER'S LIST: her Unit 2 Week 1 sheet.
     District U2W1 list shown here. */
  W.warmup = [
    { w: 'float', pic: '🛟', other: '🔥' }, { w: 'toe', pic: '🦶', other: '☁️' }, { w: 'roast', pic: '🍗', other: '🚲' },
    { w: 'globe', pic: '🌎', other: '🐸' }, { w: 'grow', pic: '🌱', other: '🚗' }, { w: 'bowl', pic: '🥣', other: '🌙' },
    { w: 'throw', pic: '⚾', other: '🛏️' }, { w: 'both', pic: '2️⃣', other: '🍎' }, { w: 'look', pic: '👀', other: '🎸' }, { w: 'play', pic: '⚽', other: '🧊' }
  ];
  // "Type the word you hear". SWAP IN THE TEACHER'S LIST (ground = her spelling list + sight words).
  W.typeWords = {
    ground: [
      { w: 'these', pic: '👇', sent: 'I like these shoes.' }, { w: 'clean', pic: '🧼', sent: 'My hands are clean.' }, { w: 'happy', pic: '😄', sent: 'I am happy today.' },
      { w: 'key', pic: '🔑', sent: 'The key opens the door.' }, { w: 'queen', pic: '👑', sent: 'The queen has a crown.' }, { w: 'leaf', pic: '🍃', sent: 'A leaf fell down.' },
      { w: 'funny', pic: '😂', sent: 'The joke was funny.' }, { w: 'piece', pic: '🍕', sent: 'Can I have a piece of pizza?' }, { w: 'thief', pic: '🦹', sent: 'The thief ran away.' },
      { w: 'need', pic: '🙏', sent: 'I need a nap.' }, { w: 'before', pic: '⏪', sent: 'Wash your hands before lunch.' }, { w: 'after', pic: '⏩', sent: 'We play after school.' },
      { w: 'give', pic: '🎁', sent: 'I give my mom a hug.' }, { w: 'know', pic: '💡', sent: 'I know the answer.' }, { w: 'large', pic: '🐘', sent: 'An elephant is large.' }
    ],
    sky: [
      { w: 'pie', pic: '🥧', sent: 'We ate apple pie.' }, { w: 'tie', pic: '👔', sent: 'Dad wore a tie.' }, { w: 'child', pic: '🧒', sent: 'The child is five.' },
      { w: 'kind', pic: '💛', sent: 'Be kind to others.' }, { w: 'sky', pic: '🌤️', sent: 'The sky is blue.' }, { w: 'dry', pic: '🏜️', sent: 'The desert is dry.' },
      { w: 'high', pic: '⬆️', sent: 'The kite flew high.' }, { w: 'lime', pic: 'img:lime', sent: 'A lime is green.' }, { w: 'light', pic: '💡', sent: 'Turn on the light.' },
      { w: 'bright', pic: '☀️', sent: 'The sun is bright.' }, { w: 'people', pic: '👥', sent: 'Many people came.' }, { w: 'very', pic: '💯', sent: 'I am very happy.' }
    ],
    space: [
      { w: 'kindness', pic: '💛', sent: 'Thank you for your kindness.' }, { w: 'sadness', pic: '😢', sent: 'Her sadness went away.' }, { w: 'helpful', pic: '🤝', sent: 'You are so helpful.' },
      { w: 'helpless', pic: '🐣', sent: 'A new chick is helpless.' }, { w: 'useless', pic: '🔧❌', sent: 'A broken tool is useless.' }, { w: 'thankful', pic: '🙏', sent: 'I am thankful for you.' },
      { w: 'unselfish', pic: '🤲', sent: 'It was unselfish to share.' }, { w: 'dislike', pic: '👎', sent: 'I dislike cold soup.' }, { w: 'rethink', pic: '🤔', sent: 'Let us rethink our plan.' },
      { w: 'generous', pic: '🤲', sent: 'Grandma is generous.' }, { w: 'sensible', pic: '🧠', sent: 'That was a sensible choice.' }, { w: 'gentleness', pic: '🪶', sent: 'Hold the kitten with gentleness.' }
    ]
  };
  // R practice (listening only; never grades her speech).
  W.rPairs = [
    { r: 'rake', rp: '🍂', w: 'wake', wp: '⏰' }, { r: 'rink', rp: '⛸️', w: 'wink', wp: '😉' }, { r: 'ring', rp: '💍', w: 'wing', wp: '🪽' },
    { r: 'rise', rp: '🌅', w: 'wise', wp: '🦉' }, { r: 'rest', rp: '😴', w: 'west', wp: '🧭' }
  ];
  W.rWords = [
    { w: 'three', pic: '3️⃣', oops: 'thwee' }, { w: 'tree', pic: '🌳', oops: 'twee' }, { w: 'treat', pic: '🍪', oops: 'tweat' },
    { w: 'crept', pic: '🐾', oops: 'cwept' }, { w: 'grant', pic: '🧞', oops: 'gwant' }, { w: 'friend', pic: '🤝', oops: 'fwiend' },
    { w: 'red panda', pic: 'img:redpanda', oops: 'wed panda' }, { w: 'Frost', pic: '🦊', oops: 'Fwost' }, { w: 'bright', pic: '☀️', oops: 'bwight' },
    { w: 'dry', pic: '🏜️', oops: 'dwy' }, { w: 'proposed', pic: '💡', oops: 'pwoposed' }, { w: 'mistreated', pic: '😢', oops: 'mistweated' }
  ];
  W.sneaky = [
    { w: 'give', mark: 'g[i]v[e]', says: 'giv', note: 'Sneaky! The i is short even with a magic e.', pic: '🎁' },
    { w: 'do', mark: 'd[o]', says: 'doo', note: 'Sneaky! "o" says oo here.', pic: '✅' },
    { w: 'earth', mark: '[ear]th', says: 'urth', note: 'Sneaky! "ear" says ur here.', pic: '🌎' },
    { w: 'father', mark: 'f[a]ther', says: 'FAH-ther', note: 'Sneaky! "a" says ah.', pic: '👨' },
    { w: 'large', mark: 'lar[ge]', says: 'larj', note: 'Sneaky! "ge" says j.', pic: '🐘' },
    { w: 'know', mark: '[k]now', says: 'no', note: 'Sneaky! The k is quiet.', pic: '💡' }
  ];
  W.italia = {
    place: 'Pompeii, near Naples', region: 'Campania, Italy', scene: '🏛️🌋',
    pip: 'I am in Pompeii, a very old town near a volcano! Can you learn 3 Italian words with me?',
    postcard: ['Ciao from Pompeii!', 'Long ago, a volcano covered this town with ash.', 'Now people walk on the old stone streets. I even saw a stone picture of a dog!', 'Can you teach me some Italian words?'],
    words: [
      { it: 'cane', pic: '🐕', en: 'dog', others: ['🐈', '🐟'] },
      { it: 'casa', pic: '🏠', en: 'house', others: ['🚗', '🌳'] },
      { it: 'montagna', pic: '⛰️', en: 'mountain', others: ['🌊', '🏖️'] }
    ]
  };
  W.trickyExtra = [
    { w: 'penguin', mark: 'pen[gu]in', says: 'PEN-gwin', note: '"gu" says gw.', pic: '🐧' },
    { w: 'butterfly', mark: 'butterfl[y]', says: 'BUT-er-fly', note: 'Here the y at the end says /ī/.', pic: '🦋' }
  ];
  W.vocabByDay = {
    1: { ground: ['noticed', 'crept', 'unusual'], sky: ['selfish', 'generous', 'grouchy'], space: ['endangered', 'gentleness', 'hesitantly'] },
    2: { ground: ['hardworking', 'supper', 'grant'], sky: ['teammate', 'teams', 'players'], space: ['mutualism', 'partnership', 'benefit'] },
    3: { ground: ['festival', 'king', 'palace'], sky: ['spoiled', 'elder', 'handsome'], space: ['responsible', 'reconsidered', 'discouraged'] },
    4: { ground: ['proposed', 'mistreated', 'good-hearted'], sky: ['accurate', 'interrupted', 'coach'], space: ['archipelago', 'resourceful', 'deliberately'] },
    5: { ground: ['mourning', 'festival', 'noticed'], sky: ['clumsy', 'graceful', 'contest'], space: ['peninsula', 'migrating', 'multiplies'] }
  };
  const apply = (day, plan) => ['ground', 'sky', 'space'].forEach((lv) => {
    day.levels[lv].preview = plan[lv].map((w) => Object.assign({ w }, W.vocab[w]));
  });
  W.days.forEach((d) => { if (W.vocabByDay[d.day]) apply(d, W.vocabByDay[d.day]); });
})();
