import re
content = open(r'C:\Users\CSA\Projects\learnhouse\home-reference.html', encoding='utf-8', errors='ignore').read()

# Search for the section
search_terms = ["Thousands of learners", "already built new skills", "new skills with"]
for term in search_terms:
    idx = content.find(term)
    if idx != -1:
        print(f'Found "{term}" at index {idx}')
        # Get surrounding context
        chunk = content[max(0, idx-2000):idx+5000]
        clean = re.sub(r'data:image/[^;]+;base64,[A-Za-z0-9+/=]+', 'DATA', chunk)
        clean = re.sub(r'<svg[^>]*>.*?</svg>', '<SVG/>', clean, flags=re.DOTALL)
        clean = re.sub(r'd="[^"]*"', 'd="..."', clean)
        with open(r'C:\Users\CSA\Projects\learnhouse\skills_section.html', 'w', encoding='utf-8') as f:
            f.write(clean)
        print(f'Written to skills_section.html')
        break
else:
    print('Not found. Searching for similar phrases...')
    # Try partial matches
    for term in ['built new skills', 'new skills', 'Thousands of']:
        idx = content.find(term)
        if idx != -1:
            print(f'Found "{term}" at {idx}')
            print(content[max(0,idx-100):idx+200])
            print('---')
