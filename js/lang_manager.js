const lang_data = {};
const langs = ['en', 'fr', 'es'];

// load all language files
Promise.all(
    langs.map(l =>
        fetch(`./lang/${l}.json`)
            .then(res => res.json())
            .then(data => {
                lang_data[l] = data;
            })
    )
).then(() => {
    console.log("All languages loaded:", lang_data);
    // get lang setting or default to en
    var savedLang = localStorage.getItem("lang") || "en"
    updateLang(savedLang)   
});

function updateLang(lang) {
    var string_count = 0;
    localStorage.setItem("lang", lang);
    document.querySelector("html").setAttribute("lang", localStorage.getItem("lang"));
    document.querySelectorAll("[lang-key]").forEach(el => {
        key = el.getAttribute("lang-key");
        el.textContent = (lang_data[lang][key]);
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


