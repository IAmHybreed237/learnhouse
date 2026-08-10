import re
content = open(r'C:\Users\CSA\Projects\learnhouse\home-reference.html', encoding='utf-8', errors='ignore').read()

# Search for rating/support section
search_terms = ["4.88", "out of 5", "support team", "based on a survey", "starts for our"]
for term in search_terms:
    idx = content.find(term)
    if idx != -1:
        print(f'Found "{term}" at index {idx}')
        chunk = content[max(0, idx-3000):idx+5000]
        clean = re.sub(r'data:image/[^;]+;base64,[A-Za-z0-9+/=]+', 'DATA', chunk)
        clean = re.sub(r'<svg[^>]*>.*?</svg>', '<SVG/>', clean, flags=re.DOTALL)
        clean = re.sub(r'd="[^"]*"', 'd="..."', clean)
        with open(r'C:\Users\CSA\Projects\learnhouse\rating_section.html', 'w', encoding='utf-8') as f:
            f.write(clean)
        print(f'Written to rating_section.html')
        # Also print text content
        visible = re.findall(r'<font[^>]*>([^<]+)</font>', chunk)
        print('\n=== Text content ===')
        for v in visible:
            v = v.strip()
            if v:
                print(v)
        break
else:
    print('Not found any of the search terms')
    # Try broader search
    for term in ['rating', 'stars', 'survey', 'support']:
        indices = [m.start() for m in re.finditer(re.escape(term), content, re.IGNORECASE)]
        if indices:
            print(f'Found "{term}" at indices: {indices[:5]}')
            for i in indices[:2]:
                print(f'  Context: ...{content[max(0,i-50):i+100]}...')
