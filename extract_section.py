import re
content = open(r'C:\Users\CSA\Projects\learnhouse\home-reference.html', encoding='utf-8', errors='ignore').read()
idx = content.find("How Netology helps you achieve your goals")
next_idx = content.find("Get inspired by the stories of our graduates")
chunk = content[idx:next_idx] if next_idx != -1 else content[idx:]

# Get full section HTML (cleaned)
clean = re.sub(r'd="[^"]*"', 'd="..."', chunk[:20000])
clean = re.sub(r'data:image/[^;]+;base64,[A-Za-z0-9+/=]+', 'data:...', clean)
clean = re.sub(r'<svg[^>]*>.*?</svg>', '<svg/>', clean, flags=re.DOTALL)
# Print all of it
print(clean)
