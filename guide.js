/* The guide: the child's mail-carrier friend. She picks one and types its name on the first screen.
   Everything about each guide lives here so a swap or a new guide is quick. Every guide is a girl
   (she/her) and uses the same friendly voice. "Pip" in any text is replaced with the guide's name,
   and {species} {part} {nose} {go} fill in species words. No parrots among guides (on purpose). */
window.PIP_GUIDES = {
  names: ['Pip', 'Penny', 'Coco', 'Luna', 'Bea', 'Skipper'],   // optional name ideas under the type box
  pronouns: { she: 'she', her: 'her', hers: 'hers' },
  // Pip's speaking voice: the device's best natural female en-US voice. Same for every guide.
  voice: { prefer: ['Samantha', 'Google US English', 'Ava', 'Allison', 'Aria', 'Jenny', 'Zira', 'Karen', 'Female'], pitch: 1.2, rate: 0.85 },
  // Fallback lines that work for any guide.
  generic: {
    mishaps: ['Oops, I read that one upside down! 🙃', 'Silly me, I was looking at a cloud! ☁️', 'Whoops, I sneezed and mixed them up! 🤧', 'Hmm, I think my glasses are foggy! 👓'],
    landing: ['Whoa, a big gust of wind! Let me try again. 🌬️', 'Oops, a little bump! I will try again. 💫', 'I did it! I kept trying, and I made it! 🎉'],
    landBtn: ['Help Pip arrive! 🛬', 'Try again, Pip! 💪', 'One more try! 🌟']
  },
  kinds: {
    pigeon: { label: 'Pigeon', species: 'pigeon', img: 'img/guide_pigeon.webp', oops: 'img/pip_oops.webp', icon: '🐦', part: 'wing', nose: 'beak', go: 'fly', travel: 'flies the mail across the sky',
      mishaps: ['Oops, a feather got in my eye! 🪶', 'Coo! I was counting my toes instead! 🐾', 'Silly me, I was chasing a crumb! 🍞'],
      landing: ['Whoa! A big gust blew me back up! 🌬️', 'Oops! I slid on my tail feathers! 🪶', 'I did it! I kept trying, and I landed! 🎉'] },
    puffin: { label: 'Puffin', species: 'puffin', img: 'img/guide_puffin.webp', icon: '🐧', part: 'wing', nose: 'beak', go: 'fly', travel: 'flaps fast over the sea (and crash-lands a lot!)',
      mishaps: ['Oops, I was looking at a fish! 🐟', 'Whoops, my beak bumped the page! 🧡', 'Silly me, sea spray on my eyes! 🌊'],
      landing: ['Flap flap... BOING! I bounced off a rock! 🪨', 'Flap flap... SPLASH! I landed in a puddle! 💦', 'Flap flap... I did it! Crash-landers never give up! 🎉'] },
    penguin: { label: 'Penguin explorer', species: 'penguin', img: 'img/guide_penguin.webp', icon: '🐧', part: 'flipper', nose: 'beak', go: 'travel', travel: 'can\'t fly, so she rides icebergs, boats and sleds',
      mishaps: ['Oops, my explorer hat slid over my eyes! 🎩', 'Whoops, I slipped on the ice! 🧊', 'Silly me, I was counting snowflakes! ❄️'],
      landing: ['Wheee! My sled went too fast and I zoomed past! 🛷', 'Oops! My iceberg boat bumped the shore! 🧊', 'I did it! I kept trying, and I made it here! 🎉'] },
    otter: { label: 'Sea otter', species: 'sea otter', img: 'img/guide_otter.webp', icon: '🦦', part: 'paw', nose: 'whiskers', go: 'float', travel: 'floats on her back with a backpack full of mail',
      mishaps: ['Oops, I was cracking a shell! 🐚', 'Whoops, my whiskers tickled my nose! 😆', 'Silly me, I floated the wrong way! 🌊'],
      landing: ['Oops! A wave rolled me the wrong way! 🌊', 'Whoops! I floated in a circle! 🔄', 'I did it! I kept paddling, and I made it! 🎉'] },
    fox: { label: 'Fox mail carrier', species: 'fox', img: 'img/guide_fox.webp', icon: '🦊', part: 'paw', nose: 'nose', go: 'ride', travel: 'rides her bike with a big mailbag',
      mishaps: ['Oops, my big ears flopped over my eyes! 👂', 'Whoops, I rang my bike bell by mistake! 🔔', 'Silly me, I was sniffing a flower! 🌼'],
      landing: ['Oops! My bike hit a bump! 🚲', 'Whoops! My mailbag tipped over! ✉️', 'I did it! I kept pedaling, and I made it! 🎉'] },
    turtle: { label: 'Sea turtle', species: 'sea turtle', img: 'img/guide_turtle.webp', icon: '🐢', part: 'flipper', nose: 'nose', go: 'swim', travel: 'swims slowly and never gives up',
      mishaps: ['Oops, I got sleepy for a second! 😴', 'Whoops, a little fish tickled me! 🐠', 'Silly me, I was hiding in my shell! 🐢'],
      landing: ['Paddle, paddle... a wave pushed me back! 🌊', 'Paddle, paddle... still going! Slow is OK! 🐢', 'I did it! Slow and steady, and I never gave up! 🎉'] }
  },
  order: ['pigeon', 'puffin', 'penguin', 'otter', 'fox', 'turtle']
};
