const easyWord = [
  { word: "clasp", clue: "A device for holding things together" },
  { word: "dwarf", clue: "A person of unusually small stature" },
  { word: "eager", clue: "Having or showing keen interest or enthusiasm" },
  {
    word: "fable",
    clue: "A short story, typically with animals as characters, conveying a moral",
  },
  {
    word: "grape",
    clue: "A fruit, or the vine bearing it, that grows in clusters",
  },
  {
    word: "hinge",
    clue: "A movable joint or mechanism on which a door, gate, or lid swings as it opens and closes",
  },
  {
    word: "icicle",
    clue: "A long, pointed, tapering piece of ice formed by the freezing of dripping water",
  },
  { word: "jolly", clue: "Full of good humor and high spirits" },
  { word: "kneel", clue: "To rest on the knees" },
  { word: "lunar", clue: "Relating to the moon" },
  {
    word: "motto",
    clue: "A short statement or slogan expressing the guiding principle of a person, group, or organization",
  },
  {
    word: "nymph",
    clue: "A mythological spirit of nature imagined as a beautiful maiden inhabiting rivers, woods, or other locations",
  },
  { word: "oasis", clue: "A fertile spot in a desert where water is found" },
  {
    word: "piano",
    clue: "A large keyboard musical instrument with a wooden case enclosing a soundboard and metal strings",
  },
  {
    word: "quack",
    clue: "A person who dishonestly claims to have special knowledge and skill in some field, typically medicine",
  },
  {
    word: "risky",
    clue: "Full of the possibility of danger, failure, or loss",
  },
  {
    word: "sable",
    clue: "A type of marten valued for its fur, or the fur itself",
  },
  {
    word: "tulip",
    clue: "A bulbous spring-flowering plant of the lily family, with boldly colored cup-shaped flowers",
  },
  {
    word: "udder",
    clue: "The mammary gland of a cow or other mammal, typically hanging down between the hind legs and serving as the source of milk",
  },
  {
    word: "vapor",
    clue: "A substance diffused or suspended in the air, especially one normally liquid or solid",
  },
  { word: "wreck", clue: "The destruction of a ship at sea" },
  {
    word: "xenon",
    clue: "A chemical element of the noble gas group, used in some kinds of electric lights",
  },
  { word: "yield", clue: "To give way to arguments, demands, or pressure" },
  {
    word: "zebra",
    clue: "An African wild horse with black-and-white stripes and an erect mane",
  },
  { word: "blaze", clue: "A large and fiercely burning fire" },
  { word: "crave", clue: "To have a strong desire for something" },
  {
    word: "dodge",
    clue: "To avoid being hit by something by moving quickly to one side",
  },
  {
    word: "erase",
    clue: "To remove something completely by rubbing or wiping it out",
  },
  {
    word: "flute",
    clue: "A musical instrument with a tube of narrow cylindrical bore and a series of fingerholes or keys",
  },
  { word: "glaze", clue: "To coat with a thin layer of a glossy substance" },
  { word: "haste", clue: "Excessive speed or urgency of movement or action" },
  {
    word: "index",
    clue: "An alphabetical list of names, subjects, etc., with references to the places where they occur, typically found at the end of a book",
  },
  {
    word: "joker",
    clue: "A person who is fond of joking or jesting, often to make others laugh",
  },
  {
    word: "knack",
    clue: "A particular talent or skill, especially one that is difficult to teach",
  },
  {
    word: "laser",
    clue: "A device that produces a narrow, intense beam of light",
  },
  {
    word: "mango",
    clue: "A fleshy, oval fruit with a single large seed, usually yellow or red when ripe",
  },
  {
    word: "noble",
    clue: "Having or showing fine personal qualities or high moral principles and ideals",
  },
  {
    word: "orbit",
    clue: "The path described by a celestial body in its revolution around another",
  },
  { word: "punch", clue: "To strike with the fist" },
  {
    word: "quake",
    clue: "To shake or tremble, especially as a result of a shock or an earthquake",
  },
  {
    word: "rebel",
    clue: "A person who rises in opposition or armed resistance against an established government or ruler",
  },
  {
    word: "siren",
    clue: "A device for making a loud, wailing sound, especially as a warning signal",
  },
  {
    word: "trick",
    clue: "A cunning or skillful act or scheme intended to deceive or outwit someone",
  },
  { word: "unzip", clue: "To open or undo the fastening of a zipper" },
  { word: "vocal", clue: "Of or relating to the voice or speaking" },
  { word: "whisk", clue: "To move quickly or nimbly" },
  {
    word: "xerox",
    clue: "To make a copy of a document using a photocopying machine",
  },
  { word: "yield", clue: "To give way to arguments, demands, or pressure" },
  {
    word: "zealot",
    clue: "A person who is fanatical and uncompromising in pursuit of their religious, political, or other ideals",
  },
  { word: "acorn", clue: "The nut of an oak tree" },
  { word: "bloom", clue: "To produce flowers; a period of flowering" },
  { word: "chirp", clue: "To make a high-pitched, sharp sound, like a bird" },
  {
    word: "dwarf",
    clue: "A person or creature much smaller than average; to make something appear smaller",
  },
  {
    word: "echo",
    clue: "A sound that is reflected off a surface and heard again; to repeat or imitate someone else's words",
  },
  {
    word: "fable",
    clue: "A short story that teaches a moral lesson; an untrue story",
  },
  {
    word: "gloom",
    clue: "Partial or total darkness; a state of melancholy or depression",
  },
  { word: "hatch", clue: "To emerge from an egg; to devise a plan" },
  {
    word: "image",
    clue: "A representation of a person or thing, especially in art or photography; an idea or concept",
  },
  { word: "jolly", clue: "Merry; cheerful; lively" },
  {
    word: "knead",
    clue: "To work dough or clay by pressing and folding it; to massage or rub",
  },
  {
    word: "lodge",
    clue: "A small house or cottage; to stay temporarily in a place",
  },
  {
    word: "moral",
    clue: "Concerned with the principles of right and wrong behavior; a lesson taught by a story or experience",
  },
  {
    word: "nymph",
    clue: "A beautiful, young female spirit in Greek mythology; a type of insect",
  },
  {
    word: "otter",
    clue: "A furry, aquatic mammal that likes to play and eat shellfish",
  },
  {
    word: "peach",
    clue: "A juicy, sweet fruit with a fuzzy skin; to inform on someone",
  },
  {
    word: "quilt",
    clue: "A bedspread made of stitched-together pieces of fabric; to stitch or sew",
  },
  { word: "rival", clue: "A competitor or opponent; to compete with someone" },
  {
    word: "silly",
    clue: "Lacking in seriousness or good sense; amusing or ridiculous",
  },
  {
    word: "tulip",
    clue: "A colorful, cup-shaped flower that blooms in the spring; a type of bulb",
  },
  {
    word: "union",
    clue: "A group of people or organizations joined together for a common purpose; the state of being united",
  },
  {
    word: "virus",
    clue: "A microscopic organism that can cause disease; a piece of malicious software that can harm computer systems",
  },
  {
    word: "wedge",
    clue: "A piece of material with one thick end and one tapering end, used to tighten, secure or split something; to force something into a narrow space",
  },
  {
    word: "xenon",
    clue: "A colorless, odorless gas that is used in lighting and laser technology",
  },
  {
    word: "yacht",
    clue: "A large, luxurious boat used for pleasure cruising or racing",
  },
  {
    word: "zebra",
    clue: "A black-and-white striped African animal related to the horse",
  },
];
