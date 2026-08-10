# Project Setup Instructions - Read This First

## Project
LearnHouse LMS — custom Hybreed branding, replicating Netology-style course pages.

## GitHub Repo
- URL: https://github.com/IAmHybreed237/learnhouse.git
- Branch: `dev`
- Git user: Ayuketang Agbornog <ayuketangagbornoh@gmail.com>
- Git path: `C:\Program Files\Git\bin\git.exe` (not in PATH on cyber computers)

## Step 1: Clone the repo
```bash
git clone https://github.com/IAmHybreed237/learnhouse.git
cd learnhouse
git checkout dev
```

## Step 2: Environment Setup
The project uses:
- **Frontend**: Next.js (apps/web)
- **Backend**: FastAPI Python (apps/api)
- **Database**: PostgreSQL
- **Package Manager**: npm (frontend), uv/pip (backend)

### Install frontend dependencies
```bash
cd apps/web
npm install
```

### Install backend dependencies
```bash
cd apps/api
pip install -r requirements.txt
# or
uv sync
```

## Step 3: Environment Variables
Check these files exist and are configured:
- `apps/api/.env` — backend config (DB URL, secrets, etc.)
- `apps/web/.env` or `.env.local` — frontend config (API URL, etc.)

If missing, ask the user for the values.

## Step 4: Database
Make sure PostgreSQL is running. The backend will need it.

## Step 5: Start the servers

### Start backend (FastAPI)
```bash
cd apps/api
python -m uvicorn src.main:app --reload --port 8700
```

### Start frontend (Next.js)
```bash
cd apps/web
npm run dev
```

The frontend runs on `http://127.0.0.1:53128` (or check terminal output for the port).

## Step 6: Verify
Open these pages in the browser:
- Homepage: `http://127.0.0.1:53128/`
- Courses catalog: `http://127.0.0.1:53128/courses`
- Free courses page: `http://127.0.0.1:53128/free`
- Course about page: `http://127.0.0.1:53128/course/6f3c82f8-be2a-4244-ba46-dc16ddb1d68b/about`

## What Was Done So Far

### 1. Homepage (Hybreed Landing)
- Hero section with dark background
- "Start Here" section
- Popular programs grid
- Course selections
- Goals section
- Graduate stories
- Footer
- Custom HybreedHeader + HybreedPromoBanner components

### 2. Course About Page (`/course/[uuid]/about`)
Built to match Netology-style design with these sections:
- **Hero**: Dark bg, 3D graphic (`graphic_hero_fe.webp`), course title, badges, consultation form, stats cards
- **Most Visible Profession**: White card with text + `graphic_fe_1.webp` image
- **Median Salaries**: Light gray bg, white card with price, progress bar graph (Beginner/Experienced/Lead)
- **We Teach What Works**: Gray card with skills columns + technology tags with real SVG icons (HTML5, CSS3, JS, React, GitHub, API, WebSockets, JSX, React Router, VirtualDOM)
- **Diploma Section**: White card with diploma image, "Example document" button
- **Growth Section**: 3 white cards with background images (`graphic_utp.webp`, `graphic_ocamid_goal_b_8.webp`), titles and descriptions
- **Description Section**: Course description from backend

### 3. Free Courses Page (`/free`)
- Hero with "Free" in blue, direction filter buttons (All directions, Marketing, etc.)
- Decorative gray circle behind hero
- Popular programs grid (free course cards with bg image, badges, buttons)
- Free courses benefits section (4 benefit cards)
- All free courses grid with search bar
- Newsletter subscription section (dark bg)

### 4. Courses Catalog (`/courses`)
- Updated to link course cards to `/course/[uuid]/about` pages

## Key Files
- `apps/web/app/orgs/[orgslug]/(withmenu)/course/[courseuuid]/about/CourseAboutClient.tsx` — Main course about page
- `apps/web/app/orgs/[orgslug]/(withmenu)/course/[courseuuid]/about/page.tsx` — About page server component
- `apps/web/app/orgs/[orgslug]/(withmenu)/free/free.tsx` — Free courses page client
- `apps/web/app/orgs/[orgslug]/(withmenu)/free/page.tsx` — Free courses page server component
- `apps/web/components/Landings/Hybreed/HybreedHeader.tsx` — Custom header
- `apps/web/components/Landings/Hybreed/HybreedPromoBanner.tsx` — Promo banner
- `apps/web/app/orgs/[orgslug]/(withmenu)/home-client.tsx` — Homepage
- `apps/web/public/images/course/` — All course page images
- `apps/web/public/images/home/` — All homepage images

## What's Next (TODO)
- Wire up pricing cards on course about page with actual enrollment/checkout flow
- Connect consultation form to backend
- Make free course cards actually filter by direction
- Polish mobile responsiveness across all pages
- Potentially more sections on the course about page

## Notes
- Git is NOT in PATH on cyber computers. Use full path: `& "C:\Program Files\Git\bin\git.exe"`
- The dev server port may change. Check terminal output after `npm run dev`
- Backend must be running for the frontend to fetch course data
- Course UUID for testing: `6f3c82f8-be2a-4244-ba46-dc16ddb1d68b`
- Org slug for testing: check the URL when browsing the site
