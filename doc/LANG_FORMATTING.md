# JSON formatting for /lang

## Do note that the language file names should match proper language subtags.
A [list](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) is available on Wikipedia.

##  The `flag` values should match those of the corresponding flag assets.
This is because the language selector is dynamically constructed by [lang_manager.js](/js/lang_manager.js). A default flag will be displayed otherwise. For reference, an [ISO-3166-2 Decoding Table](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Decoding_table) can be found here.


**Each file must be a valid JSON object with the following keys:**

- `"name"`: string, e.g., "Français" (Should be written in the target language)
- `"flag"`: string, e.g., "FR" (See above)
- `"title"`: string, the html header page title, e.g., `"Philéas SIBIEN - Portfolio"`
- `"s_<string>"`: string, these serve the proper visible readable text on the page, e.g., `"s_main": "Bienvenue sur mon portfolio!",`

**Example:**
```json
{
    "name": "Français",
    "flag": "FR",
    "title": "Philéas SIBIEN - Portfolio",
    "s_main": "Bienvenue sur mon portfolio tout ça",
    "s_footer_message": "Philéas SIBIEN 2025 - Tous droits réservés"
}
```
