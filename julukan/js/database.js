/**
 * js/database.js
 * -----------------------------------------------------------------------
 * Lapisan akses data. Modul lain (generator.js) TIDAK PERNAH menyentuh
 * window.JulukanDB secara langsung — semua lewat fungsi di sini. Ini
 * membuat sumber data mudah diganti/diperbesar di masa depan tanpa
 * mengubah logika generator atau render.
 * -----------------------------------------------------------------------
 */
(function () {
  "use strict";

  const DB = window.JulukanDB || {};

  /** Mengembalikan true jika seluruh file data/*.js berhasil dimuat. */
  function isReady() {
    return !!(
      DB.titles && DB.titles.length &&
      DB.adjectives && DB.adjectives.length &&
      DB.objects && DB.objects.length &&
      DB.locations && DB.locations.length &&
      DB.patterns && DB.patterns.length &&
      DB.themes &&
      DB.giftTitles && DB.giftTitles.length &&
      DB.giftObjects && DB.giftObjects.length &&
      DB.giftPatterns && DB.giftPatterns.length &&
      DB.giftEmoji && DB.giftEmoji.length
    );
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /** Semua kata (title/adjective/object/location) yang cocok dengan tema tertentu. */
  function wordsForTheme(category, theme) {
    const all = DB[category] || [];
    if (theme === "random") return all;
    return all.filter((entry) => entry.themes.indexOf(theme) !== -1);
  }

  /** Semua pola kalimat yang cocok dengan tema tertentu. */
  function patternsForTheme(theme) {
    const all = DB.patterns || [];
    if (theme === "random") return all;
    const matching = all.filter((p) => p.themes.indexOf(theme) !== -1);
    return matching.length ? matching : all;
  }

  function allThemeKeys() {
    return Object.keys(DB.themes || {});
  }

  function themeMeta(theme) {
    return (DB.themes && DB.themes[theme]) || { label: theme, emoji: ["✨"], color: "#888888" };
  }

  window.JulukanDatabase = {
    isReady,
    pickRandom,
    wordsForTheme,
    patternsForTheme,
    allThemeKeys,
    themeMeta,
    giftTitles: () => DB.giftTitles || [],
    giftObjects: () => DB.giftObjects || [],
    giftPatterns: () => DB.giftPatterns || [],
    giftEmoji: () => DB.giftEmoji || []
  };
})();
