with open(r'C:\Users\CSA\Projects\learnhouse\rating_section.html', 'r', encoding='utf-8') as f:
    c = f.read()
for i in range(0, min(len(c), 10000), 1500):
    print(f"=== CHARS {i}-{i+1500} ===")
    print(c[i:i+1500])
