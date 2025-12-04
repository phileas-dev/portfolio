### Resources used:

The flag assets were borrowed from the [osu-resources](https://github.com/ppy/osu-resources/tree/master/osu.Game.Resources/Textures/Flags) repo, more information about how they were generated can be found there.

Icons were imported from [Phosphor Icons](https://github.com/phosphor-icons/web).

Fonts used: [Google Sans Code](https://fonts.google.com/specimen/Google+Sans+Code)

### Here's how the language system works:

Language strings are kept in [/lang](/lang/), with one json file per language and key-value pairs. The key names are directly referenced in html attributes to populate text fields.
The language files can be merged into [`lang.json`](/lang.json) with the [builder python script](/tools/merge_lang.py) and the language selector in the header is dynamically constructed using [lang_manager.js](/js/lang_manager.js) aswell as [flag_convert.py](/tools/flag_convert.py).
This makes adding, removing or editing languages a trivial process.
Further information on how to format these json files can be found [here](./doc/LANG_FORMATTING.md).

### Helper tools:

Under [/tools](/tools/), you will find a handful of Python scripts:
- [main.py](/tools/main.py) runs every other script and should be configured and used to update the website after changing anything with the language files.
- [merge_lang.py](/tools/merge_lang.py) creates [lang.json](/lang.json) from every file in [/lang](/lang/). The file is then used by [lang_manager.js](/js/lang_manager.js) (explained previously).
- [flag_convert.py](/tools/flag_convert.py) checks which languages exist, then loops through [flag assets](/assets/flags/) and picks the proper flags, then converts them to webp to be used from [/assets/flags_webp](/assets/flags_webp/) to display the language selector.
- [populate_html.py](/tools/populate_html.py) is used to update every translatable string from a chosen default language (`en` in this case). This is mainly here for browser visibility as the index.html page should be populated with text content.

To use these tools, you can run the following commands (Windows):

```sh
# provided you're already in the repo root folder:
python -m venv .venv
venv\Scripts\activate
pip install -r requirements.txt

# then:
python .\tools\main.py
```
### To-do:

I will gradually list here all of the features or details i would like to dig into / implement.
- Responsive CSS (mobile support)