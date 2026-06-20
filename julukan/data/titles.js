/**
 * data/titles.js
 * -----------------------------------------------------------------------
 * Database "title" (kata gelar di awal julukan), mis. "Sultan", "Penjaga".
 *
 * CARA MENAMBAH DATA:
 * Cukup tambahkan objek baru ke dalam array TITLES di bawah ini, dengan
 * format { text: "...", themes: ["tema1", "tema2", ...] }.
 * Tidak perlu mengubah file JS lain — generator akan otomatis membaca
 * entri baru ini. Tema yang tersedia: epik, lucu, absurd, mistis,
 * legendaris, kosmik, kerajaan, konyol.
 * -----------------------------------------------------------------------
 */
window.JulukanDB = window.JulukanDB || {};

window.JulukanDB.titles = [
  { text: "Sultan", themes: ["kerajaan", "epik", "legendaris"] },
  { text: "Maharaja", themes: ["kerajaan", "legendaris"] },
  { text: "Ratu", themes: ["kerajaan", "epik"] },
  { text: "Permaisuri", themes: ["kerajaan", "legendaris"] },
  { text: "Panglima", themes: ["epik", "legendaris"] },
  { text: "Ksatria", themes: ["epik", "legendaris"] },
  { text: "Pendekar", themes: ["epik", "legendaris", "mistis"] },
  { text: "Pahlawan", themes: ["epik", "legendaris"] },
  { text: "Penakluk", themes: ["epik", "legendaris", "kosmik"] },
  { text: "Penguasa", themes: ["epik", "kerajaan", "kosmik", "mistis"] },
  { text: "Penjaga", themes: ["epik", "mistis", "legendaris"] },
  { text: "Begawan", themes: ["mistis", "legendaris"] },
  { text: "Empu", themes: ["mistis", "legendaris"] },
  { text: "Dewa", themes: ["mistis", "kosmik", "legendaris"] },
  { text: "Dewi", themes: ["mistis", "kosmik", "legendaris"] },
  { text: "Arwah", themes: ["mistis", "absurd"] },
  { text: "Siluman", themes: ["mistis", "absurd", "konyol"] },
  { text: "Peramal", themes: ["mistis"] },
  { text: "Penyihir", themes: ["mistis", "absurd"] },
  { text: "Dukun", themes: ["mistis", "lucu", "konyol"] },
  { text: "Sang Pencerah", themes: ["mistis", "legendaris"] },
  { text: "Sang Penentu", themes: ["epik", "kosmik"] },
  { text: "Komandan", themes: ["epik", "kosmik"] },
  { text: "Kapten", themes: ["epik", "kosmik", "lucu"] },
  { text: "Jenderal", themes: ["epik", "kerajaan"] },
  { text: "Penjelajah", themes: ["kosmik", "epik"] },
  { text: "Penakluk Galaksi", themes: ["kosmik"] },
  { text: "Arsitek Semesta", themes: ["kosmik", "legendaris"] },
  { text: "Master", themes: ["lucu", "konyol", "absurd"] },
  { text: "Bos", themes: ["lucu", "konyol"] },
  { text: "Juragan", themes: ["lucu", "konyol", "kerajaan"] },
  { text: "Sultan Receh", themes: ["lucu", "konyol", "absurd"] },
  { text: "Mahaguru", themes: ["lucu", "legendaris", "mistis"] },
  { text: "Pawang", themes: ["lucu", "mistis", "konyol"] },
  { text: "Menteri", themes: ["kerajaan", "lucu", "konyol"] },
  { text: "Camat", themes: ["lucu", "konyol", "absurd"] },
  { text: "Ketua RT", themes: ["lucu", "konyol", "absurd"] },
  { text: "Kurir", themes: ["lucu", "konyol", "absurd"] },
  { text: "Legenda Hidup", themes: ["legendaris", "epik"] },
  { text: "Ikon", themes: ["legendaris", "lucu"] },
  { text: "Maestro", themes: ["legendaris", "lucu"] },
  { text: "Otak Jenius", themes: ["lucu", "konyol", "absurd"] },
  { text: "Biang Kerok", themes: ["absurd", "konyol", "lucu"] },
  { text: "Raja", themes: ["kerajaan", "epik", "legendaris"] },
  { text: "Pangeran", themes: ["kerajaan", "epik"] },
  { text: "Penguasa Kegelapan", themes: ["mistis", "epik"] },
  { text: "Pemilik Sah", themes: ["lucu", "konyol", "kerajaan"] },
  { text: "Wali", themes: ["mistis", "legendaris"] },
  { text: "Penunggu", themes: ["mistis", "absurd"] }
];
