/**
 * js/generator.js
 * -----------------------------------------------------------------------
 * Logika murni untuk merangkai julukan. Tidak menyentuh DOM sama sekali —
 * hanya menerima nama, mengembalikan objek hasil. render.js yang nanti
 * bertugas menampilkannya ke layar.
 * -----------------------------------------------------------------------
 */
(function () {
  "use strict";

  const DB = window.JulukanDatabase;

  /** Mengisi pola "{title} {object} ..." dengan kata-kata yang dipilih. */
  function fillPattern(patternText, theme) {
    const slotNames = (patternText.match(/\{(\w+)\}/g) || []).map((s) => s.slice(1, -1));
    let result = patternText;
    slotNames.forEach((slot) => {
      const category = slot + "s"; // title -> titles, object -> objects, dst.
      let pool = DB.wordsForTheme(category, theme);
      if (!pool.length) pool = DB.wordsForTheme(category, "random");
      const word = DB.pickRandom(pool);
      result = result.replace("{" + slot + "}", word.text);
    });
    return result;
  }

  /** Menghasilkan satu julukan mode "Bangkitkan Julukan" (epik/lucu/dst). */
  function generateNormal(name) {
    const themeKeys = DB.allThemeKeys();
    const theme = DB.pickRandom(themeKeys);
    const pattern = DB.pickRandom(DB.patternsForTheme(theme));
    const line = fillPattern(pattern.text, theme);
    const meta = DB.themeMeta(theme);

    return {
      name: name,
      line: line,
      emoji: DB.pickRandom(meta.emoji),
      themeKey: theme,
      themeLabel: meta.label,
      color: meta.color,
      isGift: false
    };
  }

  /** Menghasilkan satu julukan mode "Gift" — elegan & positif. */
  function generateGift(name) {
    const title = DB.pickRandom(DB.giftTitles());
    const object = DB.pickRandom(DB.giftObjects());
    const pattern = DB.pickRandom(DB.giftPatterns());
    const line = pattern.replace("{title}", title).replace("{object}", object);

    return {
      name: name,
      line: line,
      emoji: DB.pickRandom(DB.giftEmoji()),
      themeKey: "gift",
      themeLabel: "Gift",
      color: "#B8674D",
      isGift: true
    };
  }

  window.JulukanGenerator = {
    generateNormal: generateNormal,
    generateGift: generateGift
  };
})();
