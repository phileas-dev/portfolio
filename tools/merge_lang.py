import os
import json
DEFAULT_PATH = "./lang"
OUTPUT_FILE = "./lang.json"


files = {}
for file in os.listdir(path=DEFAULT_PATH):
    with open(f"{DEFAULT_PATH}/{file}", "r") as f:
        files[file.split('.')[0]] = f.read()


merge = {"meta": {"langs": list(files.keys())}}
strings_count = 0
for lang, data in files.items():
    data_dict = json.loads(data)
    for k, v in data_dict.items():
        if k not in merge: merge[k] = {}
        merge[k][lang] = v
        strings_count += 1


with open(OUTPUT_FILE, "w") as f:
    f.write(json.dumps(merge, indent=4, ensure_ascii=False))

print(f"Merged {strings_count} strings in {len(files.keys())} languages.")