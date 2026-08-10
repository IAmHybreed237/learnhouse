import re, base64, os
content = open(r'C:\Users\CSA\Projects\learnhouse\home-reference.html', encoding='utf-8', errors='ignore').read()
idx = content.find("How Netology helps you achieve your goals")
next_idx = content.find("Get inspired by the stories of our graduates")
chunk = content[idx:next_idx] if next_idx != -1 else content[idx:]

# Extract ALL base64 images in order
imgs = re.findall(r'src=["\']?data:image/webp;base64,([A-Za-z0-9+/=]+)', chunk)
print(f'Found {len(imgs)} images')
out_dir = r'C:\Users\CSA\Projects\learnhouse\apps\web\public\images\home'
for i, b64 in enumerate(imgs):
    fname = f'sf-goals-{i+1}.webp'
    fpath = os.path.join(out_dir, fname)
    data = base64.b64decode(b64)
    with open(fpath, 'wb') as f:
        f.write(data)
    print(f'Saved {fname} ({len(data)} bytes)')
