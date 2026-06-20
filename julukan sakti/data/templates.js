/**
 * data/templates.js
 * -----------------------------------------------------------------------
 * Dua hal didefinisikan di sini:
 *
 * 1) THEMES — metadata tiap tema (label tampilan, daftar emoji, warna aksen).
 *    "random" adalah tema spesial: saat terpilih, generator mengabaikan
 *    label tema pada kata (title/adjective/object/location) sehingga kata
 *    dari tema manapun bisa tercampur bebas — hasil paling liar & tak terduga.
 *
 * 2) PATTERNS — pola kalimat julukan. Setiap pola punya daftar "slots"
 *    (urutan kata yang perlu diisi) dan daftar "themes" yang cocok
 *    memakai pola tersebut. Untuk menambah variasi kalimat baru, cukup
 *    tambah objek baru ke array PATTERNS — tidak perlu sentuh generator.js.
 * -----------------------------------------------------------------------
 */
window.JulukanDB = window.JulukanDB || {};

window.JulukanDB.themes = {
  epik: { label: "Epik", emoji: ["⚔️", "🛡️", "🔥", "🐉"], color: "#5B4B8A" },
  lucu: { label: "Lucu", emoji: ["😂", "🤪", "🍟", "🎈"], color: "#E0973A" },
  absurd: { label: "Absurd", emoji: ["🌀", "🦄", "🛸", "🫠"], color: "#D6486B" },
  mistis: { label: "Mistis", emoji: ["🌙", "🔮", "🕯️", "👁️"], color: "#2F6F6B" },
  legendaris: { label: "Legendaris", emoji: ["🏆", "📜", "🥇", "✨"], color: "#C9A24B" },
  kosmik: { label: "Kosmik", emoji: ["🌌", "🪐", "⭐", "🛰️"], color: "#46469E" },
  kerajaan: { label: "Kerajaan", emoji: ["👑", "🏰", "⚜️", "💍"], color: "#8A2D3B" },
  konyol: { label: "Konyol", emoji: ["🤡", "🍌", "🐸", "🤣"], color: "#E0563B" },
  random: { label: "Random", emoji: ["🎲", "🌈", "🔀", "🍀"], color: "#56636E" }
};

window.JulukanDB.patterns = [
  { id: "p1", slots: ["title", "object"], text: "{title} {object}", themes: ["epik", "lucu", "absurd", "mistis", "legendaris", "kosmik", "kerajaan", "konyol"] },
  { id: "p2", slots: ["title", "object", "location"], text: "{title} {object} {location}", themes: ["epik", "mistis", "legendaris", "kosmik", "kerajaan"] },
  { id: "p3", slots: ["title", "adjective", "object"], text: "{title} {adjective} {object}", themes: ["epik", "mistis", "legendaris", "kosmik", "kerajaan", "lucu", "konyol"] },
  { id: "p4", slots: ["title", "location"], text: "{title} dari {location}", themes: ["epik", "mistis", "legendaris", "kosmik", "kerajaan", "absurd"] },
  { id: "p5", slots: ["title", "adjective", "location"], text: "{title} {adjective} dari {location}", themes: ["epik", "mistis", "legendaris", "kosmik"] },
  { id: "p6", slots: ["title", "object"], text: "Sang {title} {object}", themes: ["epik", "legendaris", "kerajaan", "mistis"] },
  { id: "p7", slots: ["title", "object", "adjective"], text: "{title} {object} yang {adjective}", themes: ["lucu", "konyol", "absurd", "epik", "legendaris"] },
  { id: "p8", slots: ["adjective", "title", "object"], text: "Si {adjective} {title} {object}", themes: ["lucu", "konyol", "absurd"] },
  { id: "p9", slots: ["title", "location"], text: "{title} {location}", themes: ["epik", "mistis", "legendaris", "kosmik", "kerajaan", "lucu", "konyol", "absurd"] },
  { id: "p10", slots: ["adjective", "title", "object"], text: "{adjective} {title} dari {object}", themes: ["lucu", "konyol", "absurd"] }
];
