import re
content = open(r'C:\Users\CSA\Projects\learnhouse\home-reference.html', encoding='utf-8', errors='ignore').read()

for cls in ['root__LOk4G', 'columns__qLeXv', 'column__jNo3R', 'header__KDBha', 'links__7AsJP', 'link__HtQKA',
            'social__QzAkv', 'logo__tbK1Y', 'additional__LOcZo', 'license__3NUZG', 'licenseImg__63zP6',
            'licenseDesc__0lX2R', 'skolkovo__dBmfw', 'impaired__EJgJs', 'gift__gRx9h']:
    base = cls.split("__")[0]
    pattern = r'\.footer_' + re.escape(base) + r'__\w+\{([^}]+)\}'
    m = re.findall(pattern, content)
    if m:
        print(f'footer_{base}: {m[0]}')

# Also check social icons
for cls in ['icon__ovxaK', 'vk__jF8UY', 'youtube__KDJaY', 'tg__Y4xcp']:
    base = cls.split("__")[0]
    pattern = r'\.social_' + re.escape(base) + r'__\w+\{([^}]+)\}'
    m = re.findall(pattern, content)
    if m:
        print(f'social_{base}: {m[0]}')

# Check for footer background and text colors
pattern = r'\.footer_[^{]+__\w+\{([^}]+)\}'
all_rules = re.findall(pattern, content)
for r in all_rules:
    if 'background' in r or 'color' in r or 'font' in r:
        print(f'  -> {r[:200]}')
