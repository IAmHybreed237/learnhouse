import re
content = open(r'C:\Users\CSA\Projects\learnhouse\home-reference.html', encoding='utf-8', errors='ignore').read()
idx = content.find("How Netology helps you achieve your goals")
next_idx = content.find("Get inspired by the stories of our graduates")
chunk = content[idx:next_idx] if next_idx != -1 else content[idx:]

# Find all root/card divs and their content
roots = re.findall(r'styles_root__\w+.*?(?=styles_root__|styles_carts__|$)', chunk, re.DOTALL)
for i, r in enumerate(roots[:6]):
    r = re.sub(r'data:image/[^;]+;base64,[A-Za-z0-9+/=]+', 'data:...', r)
    r = re.sub(r'<svg[^>]*>.*?</svg>', '<svg/>', r, flags=re.DOTALL)
    r = re.sub(r'd="[^"]*"', 'd="..."', r)
    print(f"\n=== ROOT {i+1} ===")
    print(r[:2000])
