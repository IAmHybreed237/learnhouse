with open(r'C:\Users\CSA\Projects\learnhouse\footer_section.html', 'r', encoding='utf-8') as f:
    c = f.read()
# Print in chunks
for i in range(0, min(len(c), 16000), 2000):
    print(f"=== CHARS {i}-{i+2000} ===")
    print(c[i:i+2000])
