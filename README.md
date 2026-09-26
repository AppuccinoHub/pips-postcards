# Pip's Postcards

A reading and spelling game for a 2nd grader. Her guide (she picks one on the first screen: pigeon, puffin, penguin explorer, sea otter, fox mail carrier or sea turtle, always a girl, and types its name) mails a postcard from a new animal habitat every day. She cracks a word code (the week's phonics and spelling), reads the postcard silently in small bites (each bite gets a picture check), answers Pip's question by tapping the sentence that proves it, gives Pip advice, reads the postcard out loud like a radio host, and feeds the baby animal she is raising.

* Static site, no build step, no accounts, no tracking. Progress and recordings stay in the browser on the device (localStorage + IndexedDB).
* Phone portrait: TikTok-style vertical cards, one per screen, swipe up.
* iPad landscape / TV over AirPlay: picture on the left, words and buttons on the right, bigger text. Swipe up/down or left/right, or use the arrow keys.
* Works offline after the first visit (service worker `sw.js`). "Add to Home Screen" works on iPad/iPhone.

## How a session feels (designed for a child who gives up when something feels hard)

* Easy wins first: 2 warm-up cards with words she already knows (`W.warmup`), then she chooses: postcard first or word games first.
* Never failing: no red, no X, no buzzer. A miss is "Not yet!" or the guide's silly mishap. After one miss the choices narrow to 2; after a second only the answer is left (glowing). If she pauses, a clue appears by itself.
* She is the teacher: the guide misreads a word (e.g. "shay-low" for shallow) and she corrects her. The guide keeps trying on the mail card (3 landing tries) and makes it.
* Praise is for effort and strategy ("You split it into chunks, that's what great readers do!"), never "smart".
* Hard things are opt-in: a Challenge word or "Which sound?" card each session (skip = no cost), a Boss postcard (next level, optional, +5) on the home screen, and one Bonus Postcard from Italia each week (after Friday, its own green-white-red style, pick-the-picture only, can be turned off).
* Levels are never announced as going down. Moving up is celebrated.
* Proof of growth: the zoo, and a "Then vs Now" card that plays her first recording of a word (or broadcast) next to her latest.

## Decoding (reading the printed word) is the focus

* New words (`W.vocab`, 3 a day per level in `W.vocabByDay`): I do (the guide taps each colored chunk and says it slowly, then the whole word), We do (she reads it aloud first, then checks and marks herself), You do (whole word, no chunks). Meaning is one picture + a tiny caption. Words she marks "Try again" come back until she gets them twice (listed in the grown-up area). Optional 🎙️ record-and-compare.
* "Which word says ___?" (hear it, pick among look-alikes), "Sneaky word" cards (`W.sneaky`: said, one, what, put, want, great, break; the WORD is sneaky, not her), pattern words framed like Italian (letters tell you the sounds).
* Type the word you hear (`W.typeWords`, 3 per session): the guide says the word and a sentence; the caption shows the sentence with a blank plus a picture. A sound-alike spelling ("dat" for that, "haw" for how) is "You wrote what you heard!" with her spelling next to the real one, the differing part highlighted and a mouth cue; 2 tries, then she copies it (still a win). Slips are logged by sound pair in the grown-up area.
* R practice (listening only, never grades her speech): R-or-W picture pairs and "Catch the guide" (she says "wabbit"). Optional "Say it and save it" recordings for the speech therapist. Grown-ups can paste the therapist's word list and turn R cards off.

## Voice

The guide speaks every line out loud (device voice: best natural female en-US voice, e.g. Samantha on iPad, pitch ~1.2, rate ~0.85), always with the words shown in her speech bubble, with a 🔁 replay button on every line. Words, syllable chunks, the guide's misreadings and the suggested names use pre-made audio (`audio/`, free offline Kokoro TTS voice af_heart, made by `art/make_audio.py`; Italian words use if_sara). The guide never reads a postcard aloud until she has read it herself. 🔊 in the top bar cycles loud → soft → off.

## The guide

Everything about the guides (names, art, species words, travel style, mishap jokes, landing jokes, voice preferences) is in `guide.js`. "Pip" in any text becomes her guide's name. Change or rename the guide in the grown-up area.

## Hosting

GitHub Pages from the `main` branch, root folder. Publishing a change:

1. Bump `VERSION` in `sw.js` (for example `pips-v2.1`) and the `?v=` numbers in `index.html` and `CORE`.
   If you add words, run `art/make_audio.py` to make their audio.
2. `git add -A && git commit -m "..." && git push`
3. Pages redeploys in about a minute.

## Adding a new week

1. Copy `weeks/u1w2.js` to `weeks/u1w3.js` (the id is unit+week). Change the id inside (`'u1w3'`, `id: 'u1w3'`) and write the new content. The rules are at the top of the file: the correct option always goes FIRST (the app shuffles), `|` splits syllables, `[ ]` marks the pattern letters, and evidence answers must match exactly one sentence.
2. Add the id to `weeks/index.js`: `window.PIP_WEEK_LIST = ['u1w2', 'u1w3'];` (the last one is the default).
3. Add `<script src="weeks/u1w3.js?v=1.1"></script>` to `index.html` after `u1w2.js`, and add `'weeks/u1w3.js?v=1.1'` to `CORE` in `sw.js`.
4. Check it: `node ../tests/validate.js u1w3` (word counts, target words, evidence sentences, answer lists).
5. Publish (see above). The parent area gets a week picker as soon as there is more than one week.

## Levels

Ground = this week's words, Sky = next week's words, Space = 3rd grade stretch. She moves up after 3 strong sessions (Pip's question right on the first try AND at least 6 of 7 word cards right on the first try) and quietly moves back after 2 rough sessions in a row. A grown-up can set or lock the level in the parent area (press and hold "Grown-ups" for 3 seconds, then answer a times-table question).

## Babies and the zoo

On the first launch she picks one of 4 babies: penguin chick, bat pup, fennec fox kit, or sea turtle hatchling. She names it herself. When a baby is fully grown it lives safely in her zoo forever, and a new nest offers several new babies to choose from. The African grey and Senegal parrot chicks are optional extra choices (never the only option, and never on the first pick). The bonus parrot postcard always has "Skip this postcard", which swaps in a koala postcard at the same level with no penalty. "Show parrots" in the parent area (on by default) hides parrot babies and parrot postcards completely.

Art: original SVG drawings plus cut-outs from the mockups. Passages are original and not copied from the school curriculum.
