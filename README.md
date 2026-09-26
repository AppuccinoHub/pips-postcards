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

The guide speaks every line out loud, with a 🔁 replay button on every line. **Guide captions (v2.5):** while the sound is on, her chatter (jokes, mishaps, praise, instructions) is heard, not written: the speech bubble shrinks to just the 🔁 button. The words appear in the bubble when the sound is off, when a line could not play (e.g. the browser blocked audio), or when a grown-up ticks **Always show what the guide says** (grown-up area → Settings, default off). Reading content always stays written: postcards, word cards, questions, answer options, and the type-the-word sentence. All of it is pre-made audio in one voice, free offline Kokoro TTS voice **af_heart** at normal speed:
* words, syllable chunks, the guide's misreadings and the suggested names: `audio/w/` + `audio/index.js` (`art/make_audio.py`; Italian words use if_sara);
* every fixed guide line, praise, hint, clue, card instruction and postcard sentence: `audio/l/` + `audio/lines.js` (`art/make_lines.py`), matched on the exact text.

Names she types are never read by the robot voice when it can be avoided: a suggested name plays its pre-made file; a name used like "Great job, Mia!" or "I'm your guide, Zuzu!" stays in the caption only; a name in the middle of a sentence is said as "the puffin" (guide), "your baby" or "friend". Numbers play pre-made files (0–100). Only a line that has no pre-made audio falls back to the device's best natural female en-US voice (pitch 1.0, rate 0.95). The voice is ONE setting, `GUIDE_VOICE` (and `GUIDE_SPEED`) at the top of `art/make_audio.py`; after changing it or any text, run `art/make_lines.py plan tests-capture.json…`, `gen 0 1`, `index` (see the script header), then `tests/voice_cover.py` to list any line that would still use the device voice. The guide never reads a postcard aloud until she has read it herself.

## Quick settings (the 🔊 button, top right)

One tap opens big buttons she can reach herself, saved on this device:

* **Sound:** 🔇 Off · 🔈 Soft (40%) · 🔉 Normal (the files at full level, the old default) · 🔊 Loud (the voice is boosted past full through Web Audio with a gentle limiter, so it does not distort; sound effects scale along and stay below the voice). On iPad Safari, where page audio ignores the volume setting, the levels go through Web Audio too.
* **Screen:** ☀️ Light · 🌤️ Dim (warm paper, softer contrast) · 🌙 Dark (dark background, light text). Pictures are dimmed only slightly. `tests/themes.py` checks text contrast (WCAG 4.5:1, 3:1 for big text) on home, cards, the grown-up area and this panel at phone, iPad and TV sizes.

## Sound effects (v2.5)

Short, soft sounds, all **synthesized from scratch** by `art/make_sfx.py` (numpy sine tones and filtered noise; no samples, no third-party audio). They are released as **CC0 / public domain**. Files: `sfx/*.mp3` (mono 32 kHz, 15 files, about 60 KB in all), pre-loaded and decoded once into Web Audio buffers, so fast taps never lag; a small pool of `<audio>` elements is the fallback. On iPad Safari the audio is unlocked on her first tap.

| Sound | When |
|---|---|
| `crack1`, `crack2`, `crack3` | egg babies: Crack!, Peek-a-boo, Almost out (the turtle has no Crack! drawing, so it gets the last two) |
| `hatch` | the "Hatched!" card: rising bell sparkle |
| `rustle`, `snuggle` | born babies (bat, fox, otter), never egg sounds: soft blanket rustle while waking up, then a warm hum on "Born!" |
| `tap` | every button and answer tap (very soft wood tick) |
| `key` | typing, very quiet |
| `swoosh` | moving between cards |
| `right` | a right answer: bubble pop + ding |
| `notyet` | "Not yet": one soft, round, low "bloop" (neutral, never a buzzer) |
| `food` | food earned / eaten |
| `grow` | the baby grows a stage: chime |
| `fanfare` | a day (session) finished, including level-up |
| `plink` | a new zoo sticker |

Rules: nothing plays when the sound is off; Soft/Normal/Loud scale them; each level was set by measuring the file against the voice files so every effect sits well below the voice; while the guide talks, effects duck (a sound that starts during speech is 60% quieter, one already playing dips). A separate **Sound effects** switch in the grown-up area (default on) turns only the effects off. Change a sound: edit `art/make_sfx.py`, run `python3 art/make_sfx.py`, bump `SFX_VER` in `app.js` and the `sfx/…?v=` entries in `sw.js`.

## The guide

Everything about the guides (names, art, species words, travel style, mishap jokes, landing jokes, voice preferences) is in `guide.js`. "Pip" in any text becomes her guide's name. Change or rename the guide in the grown-up area.

### Guide art and poses (Sue's artwork)

The art is Sue's own drawings, only cropped and cut out from the white background (`art/sue/cut.py`, then `art/sue/export.py`, in the project folder next to `site/`, not published; the original sheets are there too). Files:

* `guides/<kind>/main.webp`: the picker / naming portrait (kinds: pigeon, puffin, penguin, otter, fox, turtle).
* `guides/<kind>/<slot>-<n>.webp`: poses, e.g. `guides/puffin/cheer-1.webp`, `guides/puffin/oops-2.webp`.

Pose slots: **hello** (waving), **talk** (default, explaining / holding a letter), **cheer** (a win), **oops** (her mishap), **think** (listening while the child reads), **stretch** (movement break; uses cheer for now), **love** (praise), **carry** (delivering the postcard), **sleep** (end of session, "See you tomorrow!"), **ride** (travel moments).

The mapping lives in one spot: `poses` at the bottom of `guide.js`:

* `art`: which files fill each slot for each guide. Several files in a slot take turns.
* `fallback`: what a slot uses when a guide has no art for it (e.g. stretch → cheer, sleep → think → talk). The last resort is `main.webp`.
* `byCard`: the pose each card starts in (e.g. wiggle = stretch, reading cards = think, the arrival card = ride). While a card is on screen, a miss switches to oops, a win to cheer or love (they take turns), "your turn to read" to think, and the landing to carry.

**To add a new pose drawing:** save it as `site/guides/<kind>/<slot>-<n>.png` (or `.webp`), for example `guides/fox/oops-1.png`. PNG with a transparent background, about 400 px tall is plenty. Then add its name to that guide's list in `guide.js` → `poses.art` (for example `fox: { ..., oops: ['oops-1.png'] }`; ".webp" is assumed when there is no extension). Then bump the version (see Hosting). If you're starting from a drawing on a white background, `python3 art/sue/cut.py drawing.png outdir` cuts it out.

Art still missing (these use their fallback for now): pigeon oops, think, love · puffin think, sleep, ride · penguin love · otter oops · fox hello, oops · turtle hello, oops.

## Hosting

GitHub Pages from the `main` branch, root folder. Publishing a change:

1. Bump `VERSION` in `sw.js` (for example `pips-v2.1`) and the `?v=` numbers in `index.html` and `CORE`.
   If you add words or lines, run `art/make_audio.py` and `art/make_lines.py` (plan, gen, index) to make their audio.
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

## First launch, babies and the zoo

**Her name.** The very first screen asks "What's your name?" (first name only, optional, "Skip for now"). It is stored on this device only (`kid` in localStorage) and shows on the home screen and the zoo sign ("Mia's Little Zoo"). A grown-up can change it in the parent area.

**Babies.** She picks one of 7 babies: penguin chick, sea turtle hatchling, fennec fox kit, sea otter pup, puffin chick (puffling), pigeon chick (squab), or bat pup. There are no parrots anywhere (removed in v2.3: an old saved parrot baby becomes a pigeon chick with the same name and growth; the parrot bonus postcard is now the koala postcard). She names her baby herself. When a baby is fully grown it lives safely in her zoo forever, and a new nest offers new babies.

**Hatching and birth.** Egg animals (penguin, turtle, puffin, pigeon) *hatch*; the otter, fox and bat are *born* (no egg words). Right after she picks, Sue's drawings of the hidden stages play in order (Egg, Crack!, Peek-a-boo, Almost out; or Snuggled up, Waking up for born babies; the turtle has no cracked-egg drawing so it skips that step), then the "Hatched!" / "Born!" card pops in with the girl meeting the baby, and she names it. Tapping speeds it up.

**Growth.** Five stages, by food eaten: Brand new (0), Little baby (1: the very first feed, so she always sees a change in session 1), Growing (20), Big kid (42), All grown up (70). Files: `babies/<kind>/<stage>.webp` with stages `egg cracked peeking halfout` (egg animals) or `snug waking` (born animals), then `newborn baby growing juvenile adult`, plus `scene.webp` (painted nest-picker card: penguin, puffin, pigeon, turtle) and `reveal.webp` (the "Hatched!/Born!" card; the bat uses its newborn). When she grows, the girl pops up cheering (graduation cap when all grown up).

**The girl (Sue's art, `img/girl/`).** Mapping lives in `GIRL` in `app.js`: name step (hello), home (explorer poses, take turns), nest picker (map), each baby's reveal (girl with that baby), zoo (girl hugging each kind, group hug header, walking-away footer), level-up (peace / roller / hurray), boss postcards (pirate), Italian bonus (ciao / Italia hat / pizza), think cards (question / dream / planning), spell and type cards (writing with books), the arrival card (postcard), end of session (pajamas), parent area (bigger dreams). Only full-body drawings are shown bare; the few drawn only to the waist (hello, hurray, question, dream, ciao, group hug) are exported inside a rounded portrait frame so she never looks legless.

**Zoo.** On the home screen: the girl, every grown-up baby, the baby she is raising (with its stage), and a sticker shelf (one of Sue's stickers per finished postcard day, 17 in all).

**Guides.** Poses per guide in `guides/<kind>/<slot>-<n>.webp`, mapped in `guide.js` (`poses.art`), with the naming pattern documented there.

**Re-cutting the art.** Scripts are in `../art/sue2/`: `cut2.py` (sheets where figures don't touch), `segcut.py` + `cfg/*.json` (seeded watershed for touching/overlapping figures), `manifest.py` (every crop, where it goes, and what was left out and why), `export2.py` (WebP export into `site/`), `sheet.py` (labeled contact sheets).

Art: guides, babies, the girl and the stickers are Sue's artwork (see above); the remaining pictures are original SVG drawings plus cut-outs from the mockups. Passages are original and not copied from the school curriculum.
