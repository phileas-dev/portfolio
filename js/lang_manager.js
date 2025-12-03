const lang_data = {};
const flag_path = "./assets/flags_webp/";
defaultLang = "gb"

// load merged languages file
fetch('./lang.json')
    .then(res => res.json())
    .then(data => {
        Object.assign(lang_data, data);
        
        const savedLang = localStorage.getItem("lang") || "gb";
        updateLang(savedLang);
        populateLangSelector();
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

function populateLangSelector() {
    const langDiv = document.getElementById("lang-buttons");

    lang_data.meta.langs.forEach(lang => {
        const button = document.createElement("button");
        button.setAttribute("aria-label", lang_data.name[lang]);
        button.onclick = () => updateLang(lang);
        button.lang = lang;

        const img = document.createElement("img");
        img.alt = lang_data.name[lang];
        img.classList.add("lang-icon");
        img.src = `${flag_path}${lang_data.flag[lang]}.webp`;
        img.draggable = false;
        img.onerror = () => {
            img.onerror = null;
            img.src = `${flag_path}__.webp`;
        };

        button.appendChild(img);
        langDiv.appendChild(button);

    })
};