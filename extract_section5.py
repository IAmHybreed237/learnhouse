import re
content = open(r'C:\Users\CSA\Projects\learnhouse\home-reference.html', encoding='utf-8', errors='ignore').read()
idx = content.find("How Netology helps you achieve your goals")
next_idx = content.find("Get inspired by the stories of our graduates")
chunk = content[idx:next_idx] if next_idx != -1 else content[idx:]

# Remove base64 data and SVGs for readability
clean = re.sub(r'data:image/[^;]+;base64,[A-Za-z0-9+/=]+', 'DATA', chunk)
clean = re.sub(r'<svg[^>]*>.*?</svg>', '<SVG/>', clean, flags=re.DOTALL)
clean = re.sub(r'd="[^"]*"', 'd="..."', clean)

# Write to file for easier reading
with open(r'C:\Users\CSA\Projects\learnhouse\goals_section.html', 'w', encoding='utf-8') as f:
    f.write(clean)
print(f'Written {len(clean)} chars to goals_section.html')
