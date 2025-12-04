import json
from bs4 import BeautifulSoup as bs

def populate_html(lang_path: str, default_lang: str, file: str):
    # open chosen language file
    with open(f"{lang_path}/{default_lang}.json", "r") as f:
        translations = json.load(f)

    # open html page
    with open(file, "r+") as fp:
        html = fp.read()
        soup = bs(html, "html5lib")

        # find all translatable elements and replace the contents
        string_count = 0
        for el in soup.find_all(attrs={"lang-key": True}):
            key = el.get("lang-key")
            if key in translations:
                el.string = translations[key]
                string_count += 1

        fp.seek(0)
        fp.truncate()
        fp.write(str(soup))

        print(f"Replaced {string_count} string(s) in {file} (language : {default_lang}).")