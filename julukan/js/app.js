/**
 * js/app.js
 * -----------------------------------------------------------------------
 * Inisialisasi aplikasi & event handler. File ini "merekatkan" database.js,
 * generator.js, dan render.js — tidak ada logika generate atau render di
 * sini, murni orkestrasi UI.
 * -----------------------------------------------------------------------
 */
(function () {
  "use strict";

  const nameInput = document.getElementById("nameInput");
  const btnGenerate = document.getElementById("btnGenerate");
  const btnGift = document.getElementById("btnGift");
  const btnClear = document.getElementById("btnClear");

  let clearConfirmTimeout = null;

  function readName() {
    return nameInput.value.trim();
  }

  function flashInputError() {
    nameInput.classList.remove("input--shake");
    // force reflow supaya animasi bisa diulang walau dipicu beruntun
    void nameInput.offsetWidth;
    nameInput.classList.add("input--shake");
    nameInput.focus();
  }

  function handleGenerate(mode) {
    const name = readName();
    if (!name) {
      flashInputError();
      return;
    }
    if (!window.JulukanDatabase.isReady()) {
      console.error("Database julukan belum termuat sepenuhnya.");
      return;
    }

    const result =
      mode === "gift"
        ? window.JulukanGenerator.generateGift(name)
        : window.JulukanGenerator.generateNormal(name);

    window.JulukanRender.appendCard(result);
  }

  function handleClearClick() {
    if (btnClear.classList.contains("btn-clear--confirm")) {
      window.JulukanRender.clearAll();
      resetClearButton();
      return;
    }

    btnClear.classList.add("btn-clear--confirm");
    btnClear.textContent = "Yakin? Klik lagi";
    clearConfirmTimeout = setTimeout(resetClearButton, 2500);
  }

  function resetClearButton() {
    clearTimeout(clearConfirmTimeout);
    btnClear.classList.remove("btn-clear--confirm");
    btnClear.textContent = "🗑️ Hapus Semua";
  }

  btnGenerate.addEventListener("click", () => handleGenerate("normal"));
  btnGift.addEventListener("click", () => handleGenerate("gift"));
  btnClear.addEventListener("click", handleClearClick);

  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleGenerate("normal");
  });

  nameInput.addEventListener("animationend", () => {
    nameInput.classList.remove("input--shake");
  });

  // Status awal: pastikan empty state sesuai (feed selalu kosong saat load).
  window.JulukanRender.updateEmptyState();
})();
