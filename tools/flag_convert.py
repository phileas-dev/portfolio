from PIL import Image
import os
import json

ASSET_PATH = "./assets/flags"
OUTPUT_FOLDER = "./assets/flags_webp"
LANG_PATH = "./lang"

used_flags = [json.load(open(os.path.join(LANG_PATH, fn)))["flag"]
         for fn in os.listdir(LANG_PATH) if fn.endswith(".json")]
used_flags.append("__")

os.makedirs(OUTPUT_FOLDER, exist_ok=True)

for fn in os.listdir(ASSET_PATH):
    if fn.split(".")[0] not in used_flags:
        continue    # skip unused languages
    if fn.lower().endswith(".png"):
        input_path = os.path.join(ASSET_PATH, fn)
        output_name = os.path.splitext(fn)[0] + ".webp"
        output_path = os.path.join(OUTPUT_FOLDER, output_name)

        img = Image.open(input_path).convert("RGBA")
        img.save(output_path, format="WEBP", lossless=True)