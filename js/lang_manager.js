const lang_data = {};
const langs = ['en', 'fr', 'es'];

// load merged languages file
fetch('./lang.json')
    .then(res => res.json())
    .then(data => {
        Object.assign(lang_data, data);
        console.log("Languages loaded:", lang_data);

        const savedLang = localStorage.getItem("lang") || "en";
        updateLang(savedLang);

        document.documentElement.classList.remove("js-loading");
});


function updateLang(lang) {
    let string_count = 0;
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[lang-key]").forEach(el => {
        const key = el.getAttribute("lang-key");
        el.textContent = (lang_data[key][lang]);
        string_count++;
    });
    console.log(`Switched language to ${lang} (${string_count} strings updated)`);
};

// language button functionality
document.querySelectorAll("#lang-buttons [data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
        var newLang = btn.getAttribute("data-lang");
        updateLang(newLang);
    });
});
