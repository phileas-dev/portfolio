## Still heavily WIP !!

I will gradually list here all of the features or details i would like to dig into / implement.


The flag assets were borrowed from the [osu-resources](https://github.com/ppy/osu-resources/tree/master/osu.Game.Resources/Textures/Flags) repo, more information about how they were generated can be found there.


### Here's how the language system works:

Language strings are kept in [/lang](/lang/), with one json file per language and key-value pairs. The key names are directly referenced in html attributes to populate text fields.
The language files can be merged into [`lang.json`](/lang.json) with the builder python script at [merge_lang.py](/tools/merge_lang.py)
This makes adding, removing or editing languages a trivial process.

**Do note that the language file names should match proper language subtags.** A [list](https://en.wikipedia.org/wiki/IETF_language_tag#List_of_common_primary_language_subtags) is available on Wikipedia.

**The language `flag` values should match those of the corresponding flag assets.** This is because the language selector is dynamically constructed by [lang_manager.js](/js/lang_manager.js). A default flag will be displayed otherwise.