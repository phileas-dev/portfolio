import convert_flag, merge_lang, populate_html

LANG_PATH = "./lang"
OUTPUT_LANG_FILE = "./lang.json"
ASSET_PATH = "./assets/flags"
FLAG_PATH = "./assets/flags_webp"
DEFAULT_LANG = "en"
HTML_FILE = "index.html"

merge_lang.merge_lang_files(input_path=LANG_PATH, output_file=OUTPUT_LANG_FILE)   
convert_flag.generate_webp_flags(lang_path=LANG_PATH, asset_path=ASSET_PATH, output_path=FLAG_PATH)
populate_html.populate_html(lang_path=LANG_PATH, default_lang=DEFAULT_LANG, file=HTML_FILE)