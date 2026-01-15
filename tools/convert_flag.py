from PIL import Image
import os
import json

def generate_webp_flags(lang_path: str, asset_path: str, output_path: str):
    # figure out which flags to convert based on filenames in lang path
    used_flags = [json.load(open(os.path.join(lang_path, fn)))["flag"]
            for fn in os.listdir(lang_path) if fn.endswith(".json")]
    used_flags.append("__")

    os.makedirs(output_path, exist_ok=True)

    # loop through static png flag assets and convert relevant files
    for fn in os.listdir(asset_path):
        if fn.split(".")[0] not in used_flags:
            continue    # skip unused languages
        if fn.lower().endswith(".png"):
            input_path = os.path.join(asset_path, fn)
            output_name = os.path.splitext(fn)[0] + ".webp"
            output_file = os.path.join(output_path, output_name)

            img = Image.open(input_path).convert("RGBA")
            img.save(output_file, format="WEBP", lossless=True)
            print(f"Created {output_name}.")