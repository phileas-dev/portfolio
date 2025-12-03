## Still heavily WIP !!

I will gradually list here all of the features or details i would like to dig into / implement.


The flag assets were borrowed from the [osu-resources](https://github.com/ppy/osu-resources/tree/master/osu.Game.Resources/Textures/Flags) repo, more information about how they were generated can be found there.

Icons were imported from [Phosphor Icons](https://github.com/phosphor-icons/web)


### Here's how the language system works:

Language strings are kept in [/lang](/lang/), with one json file per language and key-value pairs. The key names are directly referenced in html attributes to populate text fields.
The language files can be merged into [`lang.json`](/lang.json) with the [builder python script](/tools/merge_lang.py).
This makes adding, removing or editing languages a trivial process.
Further information on how to format these json files can be found [here](./doc/LANG_FORMATTING.md).