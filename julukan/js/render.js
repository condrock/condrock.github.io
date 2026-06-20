/**
 * js/render.js
 * -----------------------------------------------------------------------
 * Semua hal yang berkaitan dengan DOM (membuat & menampilkan card hasil)
 * hidup di sini. generator.js tidak tahu apa-apa soal HTML; app.js hanya
 * memanggil fungsi-fungsi berikut.
 * -----------------------------------------------------------------------
 */
(function () {
  "use strict";

  const feedEl = document.getElementById("feed");
  const emptyStateEl = document.getElementById("emptyState");

  /** Membuat satu elemen <article class="card"> dari objek hasil generator. */
  function createCardElement(result) {
    const card = document.createElement("article");
    card.className = "card" + (result.isGift ? " card--gift" : "");
    card.style.setProperty("--accent", result.color);

    const head = document.createElement("div");
    head.className = "card__head";

    const badge = document.createElement("span");
    badge.className = "card__badge";
    badge.setAttribute("aria-hidden", "true");
    badge.textContent = result.emoji;

    const name = document.createElement("span");
    name.className = "card__name";
    name.textContent = result.name;

    const tag = document.createElement("span");
    tag.className = "card__tag";
    tag.textContent = result.themeLabel;

    head.appendChild(badge);
    head.appendChild(name);
    head.appendChild(tag);

    const line = document.createElement("p");
    line.className = "card__line";
    line.textContent = result.line;

    card.appendChild(head);
    card.appendChild(line);

    return card;
  }

  /** Menambahkan hasil baru ke PALING ATAS feed, dengan animasi masuk halus. */
  function appendCard(result) {
    const card = createCardElement(result);
    card.classList.add("card--entering");
    feedEl.insertBefore(card, feedEl.firstChild);

    // Trigger transisi di frame berikutnya, lalu bersihkan kelasnya.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.classList.remove("card--entering");
      });
    });

    updateEmptyState();
  }

  /** Mengosongkan seluruh feed (dipanggil oleh tombol Hapus Semua). */
  function clearAll() {
    feedEl.innerHTML = "";
    updateEmptyState();
  }

  function updateEmptyState() {
    const hasCards = feedEl.children.length > 0;
    emptyStateEl.hidden = hasCards;
  }

  window.JulukanRender = {
    appendCard: appendCard,
    clearAll: clearAll,
    updateEmptyState: updateEmptyState
  };
})();
