import os
import json

def merge_lang_files(input_path: str, output_file: str):
    # import and parse existing language files
    files = {}
    for file in os.listdir(path=input_path):
        with open(f"{input_path}/{file}", "r") as f:
            files[file.split('.')[0]] = f.read()

    # merge files into one by changing key values to be a group of keyvalue pairs for each language
    # ex: "title": {"fr": "Bonjour", "en": "Hello", "es": "Hola"}
    merge = {"meta": {"langs": list(files.keys())}}
    strings_count = 0
    for lang, data in files.items():
        data_dict = json.loads(data)
        for k, v in data_dict.items():
            if k not in merge: merge[k] = {}
            merge[k][lang] = v
            strings_count += 1

    # write file at a given path + name
    with open(output_file, "w") as f:
        f.write(json.dumps(merge, indent=4, ensure_ascii=False))

    print(f"Merged {strings_count} string(s) from {len(files.keys())} language file(s).")
    print(f"Successfully modified {output_file}.")