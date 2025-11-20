const langs = ["en", "fr", "es"];
const translations = {};

// Preload all translations
Promise.all(
  langs.map(l =>
    fetch(`./lang/${l}.json`)
      .then(r => r.json())
      .then(data => (translations[l] = data))
  )
).then(() => {
  const storedLang = localStorage.getItem("lang");
  const currentLang = storedLang || window.currentLang || "en";

  // Apply current language initially
  applyLanguage(currentLang);
  highlightButton(currentLang);

  // Set up language buttons
  document.querySelectorAll("#lang-buttons [data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      const newLang = btn.getAttribute("data-lang");
      localStorage.setItem("lang", newLang);
      document.cookie = `lang=${newLang}; path=/; max-age=${30 * 24 * 60 * 60}`;
      applyLanguage(newLang);
      highlightButton(newLang);
    });
  });
});

function applyLanguage(lang) {
  const data = translations[lang];
  if (!data) return;

  document.body.classList.add("updating");
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = data[key] || translations["en"][key] || key;
  });
  document.documentElement.lang = lang;
  document.body.classList.remove("updating");
}

function highlightButton(lang) {
  document.querySelectorAll("#lang-buttons [data-lang]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
}

