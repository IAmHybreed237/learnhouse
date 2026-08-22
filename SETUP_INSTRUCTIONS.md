# Project Setup Instructions - Read This First

## Project
LearnHouse LMS — custom Hybreed branding, modern course landing pages.

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
python -m venv .venv
.venv\Scripts\activate
pip install -e .
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
```powershell
cd apps/api
.venv\Scripts\python.exe -m uvicorn app:app --host 0.0.0.0 --port 8800
```
**IMPORTANT**: Use `app:app` NOT `src.main:app` — the entrypoint is `app.py` in the api root.

### Start frontend (Next.js)
```powershell
cd apps/web
npx next dev --port 3000
```

The frontend runs on `http://localhost:3000`.

## Step 6: Verify
Open these pages in the browser:
- Homepage: `http://localhost:3000/`
- Courses catalog: `http://localhost:3000/courses`
- Free courses page: `http://localhost:3000/free`
- SEO course about page: `http://localhost:3000/course/5d7da0af-e09a-4fc3-93f4-6db3e8512e2d/about`
- Digital Marketing course: `http://localhost:3000/course/1df3527b-ed86-449a-9f45-e4de0bb306a1/about`

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
Built with modern design with these sections:
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
- Complete remaining SEO course landing page sections (see CYBER_SETUP.md for details)
- Wire up pricing cards on course about page with actual enrollment/checkout flow
- Connect consultation form to backend
- Make free course cards actually filter by direction
- Polish mobile responsiveness across all pages
- Build remaining course landing pages for all 25+ courses

## Notes
- Git is NOT in PATH on cyber computers. Use full path: `& "C:\Program Files\Git\bin\git.exe"`
- Backend must be running for the frontend to fetch course data
- Backend port: 8800, Frontend port: 3000
- Org slug for testing: `default`
- SEO course UUID: `5d7da0af-e09a-4fc3-93f4-6db3e8512e2d`
- Digital Marketing course UUID: `1df3527b-ed86-449a-9f45-e4de0bb306a1`
- See `CYBER_SETUP.md` for detailed setup guide for cyber cafe computers
- See `AGENTS.md` for full project state and architecture
