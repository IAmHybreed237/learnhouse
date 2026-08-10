import re
content = open(r'C:\Users\CSA\Projects\learnhouse\home-reference.html', encoding='utf-8', errors='ignore').read()
for cls in ['root__VWRQs', 'open', 'titleWrap', 'title__b_434', 'text__rj8Ct', 'carts__T2q8V', 'image__SJCIm']:
    pattern = r'\.styles_' + re.escape(cls) + r'\{([^}]+)\}'
    matches = re.findall(pattern, content)
    if matches:
        print(f'{cls}: {matches[0]}')
    else:
        # Try with wildcard
        pattern2 = r'\.styles_' + re.escape(cls.split("__")[0]) + r'__\w+\{([^}]+)\}'
        matches2 = re.findall(pattern2, content)
        if matches2:
            print(f'{cls} (wildcard): {matches2[0][:200]}')
