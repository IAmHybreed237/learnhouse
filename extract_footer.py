import re, base64, os
content = open(r'C:\Users\CSA\Projects\learnhouse\home-reference.html', encoding='utf-8', errors='ignore').read()

# Find footer section
idx = content.find('<footer')
if idx == -1:
    # Try to find by common footer patterns
    idx = content.find('styles_footer')
if idx == -1:
    # Find the last big section - search for common footer text
    idx = content.find('О компании')
    if idx != -1:
        # Go back to find the section start
        idx = max(0, idx - 5000)

print(f'Footer found at index: {idx}')

# Get a large chunk
chunk = content[idx:idx+30000]

# Clean it
clean = re.sub(r'data:image/[^;]+;base64,[A-Za-z0-9+/=]+', 'DATA', chunk)
clean = re.sub(r'<svg[^>]*>.*?</svg>', '<SVG/>', clean, flags=re.DOTALL)
clean = re.sub(r'd="[^"]*"', 'd="..."', clean)

# Write to file
with open(r'C:\Users\CSA\Projects\learnhouse\footer_section.html', 'w', encoding='utf-8') as f:
    f.write(clean)
print(f'Written {len(clean)} chars')

# Also extract text content
visible = re.findall(r'<font[^>]*>([^<]+)</font>', chunk)
print('\n=== Text content ===')
for v in visible:
    v = v.strip()
    if v:
        print(v)

# Extract CSS classes
classes = set(re.findall(r'class=styles_(\w+)__', chunk))
print('\n=== CSS classes found ===')
for c in sorted(classes):
    pattern = r'\.styles_' + re.escape(c) + r'__\w+\{([^}]+)\}'
    matches = re.findall(pattern, content)
    if matches:
        print(f'  {c}: {matches[0][:200]}')

# Extract images
imgs = re.findall(r'src=["\']?data:image/webp;base64,([A-Za-z0-9+/=]+)', chunk)
print(f'\nFound {len(imgs)} webp images')
out_dir = r'C:\Users\CSA\Projects\learnhouse\apps\web\public\images\home'
for i, b64 in enumerate(imgs):
    fname = f'sf-footer-{i+1}.webp'
    fpath = os.path.join(out_dir, fname)
    data = base64.b64decode(b64)
    with open(fpath, 'wb') as f:
        f.write(data)
    print(f'Saved {fname} ({len(data)} bytes)')

# Also check for PNG
pngs = re.findall(r'src=["\']?data:image/png;base64,([A-Za-z0-9+/=]+)', chunk)
print(f'Found {len(pngs)} png images')
for i, b64 in enumerate(pngs):
    fname = f'sf-footer-{i+1}.png'
    fpath = os.path.join(out_dir, fname)
    data = base64.b64decode(b64)
    with open(fpath, 'wb') as f:
        f.write(data)
    print(f'Saved {fname} ({len(data)} bytes)')
