export type Axolotl = {
  id: string;
  name: string;
  age: string;
  morph: string;
  match: number;
  online: boolean;
  verified: boolean;
  dist: string;
  bio: string;
  ints: string[];
  body: string;
  belly: string;
  gills: string;
  eye: string;
  line: string;
  speckle?: string;
};

export const axolotls: Axolotl[] = [
  {
    id: "xochitl",
    name: "Xóchitl",
    age: "3 años",
    morph: "Leucística",
    match: 96,
    online: true,
    verified: true,
    dist: "a 2 chinampas · Xochimilco",
    bio: "Reina de las chinampas. Regenero hasta la autoestima. Si me invitas un elote, soy toda tuya.",
    ints: ["Nado nocturno", "Neoténica", "Team morado"],
    body: "#FBCFE8",
    belly: "#F9A8D4",
    gills: "#F472B6",
    eye: "#1F1147",
    line: "#BE185D",
  },
  {
    id: "axolfredo",
    name: "Axolfredo",
    age: "5 años",
    morph: "Tipo salvaje",
    match: 88,
    online: false,
    verified: true,
    dist: "a 4 chinampas · Cuemanco",
    bio: "Café como mi humor antes del primer cafecito. Busco neta, no puro ajetreo de canal.",
    ints: ["Lodo gourmet", "Cumbia", "Anti-extinción"],
    body: "#5E6B4A",
    belly: "#717C58",
    gills: "#8B6F4E",
    eye: "#140E04",
    line: "#2E2410",
    speckle: "#D8C07A",
  },
  {
    id: "chela",
    name: "Doña Chela",
    age: "11 años",
    morph: "Melánica",
    match: 74,
    online: true,
    verified: false,
    dist: "a 1 chinampa · Tláhuac",
    bio: "Negra, elegante y sin filtros. Tengo 11 años y los presumo. Aguanto chela y conversación.",
    ints: ["Chisme", "Danzón", "Sabiduría"],
    body: "#2C2536",
    belly: "#3A3047",
    gills: "#5A2E42",
    eye: "#0A0710",
    line: "#7A4A5E",
  },
  {
    id: "goldo",
    name: "Goldo",
    age: "2 años",
    morph: "Albino dorado",
    match: 91,
    online: true,
    verified: true,
    dist: "a 3 chinampas · Apatlaco",
    bio: "Brillo más que el Mundial 2026. Albino, dorado y modesto. Te enseño a flotar sin estrés.",
    ints: ["Tomar el sol", "Brillar", "Selfies"],
    body: "#FBD24E",
    belly: "#FCDC7A",
    gills: "#FB923C",
    eye: "#DC2626",
    line: "#B45309",
  },
  {
    id: "frida",
    name: "Frida Kahlolote",
    age: "4 años",
    morph: "Cobriza",
    match: 84,
    online: false,
    verified: true,
    dist: "a 5 chinampas · Coyoacán",
    bio: "Arte, pecas y cejas de carácter. Pinto murales de ajolotes morados por toda la ciudad.",
    ints: ["Muralismo", "Pecas", "Resiliencia"],
    body: "#E3AC82",
    belly: "#EFC4A0",
    gills: "#DD8A66",
    eye: "#5A2E12",
    line: "#7A3A1A",
    speckle: "#A85C3A",
  },
  {
    id: "glowberto",
    name: "Glowberto",
    age: "1 año",
    morph: "GFP fluorescente",
    match: 79,
    online: true,
    verified: false,
    dist: "a 6 chinampas · laboratorio UNAM",
    bio: "Brillo en la oscuridad, literal. Genéticamente intenso. Solo prendo con quien valga la pena.",
    ints: ["Bioluminiscencia", "Ciencia", "Antros"],
    body: "#A7F3D0",
    belly: "#C9F7E2",
    gills: "#34D399",
    eye: "#064E3B",
    line: "#047857",
  },
];

export const you = {
  body: "#C4B5FD",
  belly: "#DDD6FE",
  gills: "#A855F7",
  eye: "#2A1248",
  line: "#6D28D9",
};
