import re
content = open(r'C:\Users\CSA\Projects\learnhouse\home-reference.html', encoding='utf-8', errors='ignore').read()

# Get all CSS rules for styles classes used in this section
for cls_name in ['root__VWRQs', 'carts__T2q8V', 'image__SJCIm', 'open__k_Dbk', 'titleWrap__knBTM', 'title__b_434', 'text__rj8Ct']:
    # Try exact match
    pattern = r'\.styles_' + re.escape(cls_name) + r'\{([^}]+)\}'
    m = re.findall(pattern, content)
    if m:
        print(f'{cls_name}: {m[0]}')
    # Try with any hash suffix
    base = cls_name.split("__")[0]
    pattern2 = r'\.styles_' + re.escape(base) + r'__\w+\{([^}]+)\}'
    m2 = re.findall(pattern2, content)
    if m2 and not m:
        print(f'{base} (any hash): {m2[0]}')
    elif m2 and m:
        for match in m2:
            if match != m[0]:
                print(f'{base} (variant): {match}')
