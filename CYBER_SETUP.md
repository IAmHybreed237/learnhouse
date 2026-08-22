# Cyber Cafe Setup Guide — Read This First

> **For the AI assistant at the cyber cafe**: This file contains everything you need to know to set up the dev environment and continue working on the Hybreed Academy project. Follow these steps exactly.

## Project Overview
Hybreed Academy is an online learning platform built on the LearnHouse open-source LMS.
- **Developer**: Hybreed X
- **GitHub**: https://github.com/IAmHybreed237/learnhouse
- **Branch**: `dev`

## What We're Building
Custom course landing pages for 25+ courses on the Hybreed Academy platform. Each course has a custom-designed landing page with hero sections, course info, salary data, skills, curriculum, pricing, and FAQ sections.

## Step 1: Install Prerequisites

### 1.1 Install Git
Download from https://git-scm.com/download/win and install. Verify:
```powershell
git --version
```

### 1.2 Install Node.js (v18+)
Download from https://nodejs.org/ and install LTS version. Verify:
```powershell
node --version
npm --version
```

### 1.3 Install Python (3.11+)
Download from https://www.python.org/downloads/ and install. **Check "Add Python to PATH"** during installation. Verify:
```powershell
python --version
```

### 1.4 Install PostgreSQL 17
Download from https://www.postgresql.org/download/windows/ and install with:
- **Password for postgres user**: `postgres`
- **Port**: `5432` (default)
- **Accept default locale**

After installation, verify:
```powershell
& "C:\Program Files\PostgreSQL\17\bin\pg_isready.exe" -h localhost -p 5432
```
Should say "accepting connections".

## Step 2: Clone the Repo
```powershell
cd C:\Users\Public\Projects
git clone https://github.com/IAmHybreed237/learnhouse.git
cd learnhouse
git checkout dev
```

If `git` is not in PATH on cyber computers, use the full path:
```powershell
& "C:\Program Files\Git\bin\git.exe" clone https://github.com/IAmHybreed237/learnhouse.git
```

## Step 3: Database Setup

### 3.1 Create the database
Open pgAdmin or use psql:
```powershell
& "C:\Program Files\PostgreSQL\17\bin\psql.exe" -U postgres -h localhost
```
Password: `postgres`

Run these SQL commands:
```sql
CREATE DATABASE learnhouse;
CREATE USER learnhouse WITH PASSWORD 'learnhouse';
GRANT ALL PRIVILEGES ON DATABASE learnhouse TO learnhouse;
\c learnhouse
GRANT ALL ON SCHEMA public TO learnhouse;
\q
```

### 3.2 Import the database dump
The database dump is NOT included in the git repo (too large). You need to get it from:
1. The previous PC — ask the user to export the database
2. OR re-create the courses manually via the API

**If you have a database dump file** (e.g., `learnhouse_dump.sql`):
```powershell
& "C:\Program Files\PostgreSQL\17\bin\psql.exe" -U learnhouse -h localhost -d learnhouse -f "path\to\learnhouse_dump.sql"
```

**If starting fresh**, the API server will create the tables automatically on first run. You'll need to create courses through the admin panel or API.

## Step 4: Backend Setup (FastAPI)

### 4.1 Create virtual environment and install dependencies
```powershell
cd C:\Users\Public\Projects\learnhouse\apps\api
python -m venv .venv
.venv\Scripts\activate
pip install -e .
```
Alternatively, if you have `uv` installed:
```powershell
uv sync
```

### 4.2 Configure backend
Create `apps/api/.env` with these exact contents:
```
LEARNHOUSE_DEVELOPMENT_MODE=true
LEARNHOUSE_AUTH_JWT_SECRET_KEY=ztUBM7vx8QbLJV7eAvCt09hZaKdxs0D6-RdGr0y-yNE
LEARNHOUSE_SQL_CONNECTION_STRING=postgresql://learnhouse:learnhouse@localhost:5432/learnhouse
LEARNHOUSE_REDIS_CONNECTION_STRING=redis://localhost:6379/learnhouse
LEARNHOUSE_ENV=dev
LEARNHOUSE_INITIAL_ADMIN_PASSWORD=admin123456
```

Check `apps/api/config/config.yaml` for other settings. The default port is 1338 but we override to 8800.

### 4.3 Start the backend
```powershell
cd C:\Users\Public\Projects\learnhouse\apps\api
.venv\Scripts\python.exe -m uvicorn app:app --host 0.0.0.0 --port 8800
```

**IMPORTANT**: Use `app:app` NOT `src.main:app` — the entrypoint is `app.py` in the api root.

- Expected warning: `pgvector extension not available` — this is fine, RAG features are just disabled
- Verify: Open http://localhost:8800/ in browser, should return a JSON response

## Step 5: Frontend Setup (Next.js)

### 5.1 Install dependencies
```powershell
cd C:\Users\Public\Projects\learnhouse\apps\web
npm install
```

### 5.2 Configure frontend
Create `apps/web/.env.local` with these exact contents:
```
NEXT_PUBLIC_LEARNHOUSE_BACKEND_URL=http://localhost:8800
NEXT_PUBLIC_LEARNHOUSE_DOMAIN=localhost:3000
```

### 5.3 Start the frontend
```powershell
cd C:\Users\Public\Projects\learnhouse\apps\web
npx next dev --port 3000
```

- Uses Turbopack (Next.js 16+)
- First compile takes 2-5 minutes on slow machines — be patient
- Verify: Open http://localhost:3000 in browser

### 5.4 If port 3000 is in use
```powershell
Get-NetTCPConnection -LocalPort 3000 -State Listen | Select-Object OwningProcess
Stop-Process -Id <PID> -Force
```

## Step 6: Verify Everything Works

1. **Backend**: http://localhost:8800/ should return JSON
2. **Frontend**: http://localhost:3000 should show the Hybreed Academy homepage
3. **Course page**: http://localhost:3000/course/5d7da0af-e09a-4fc3-93f4-6db3e8512e2d/about should show the SEO course landing page
4. **Digital Marketing course**: http://localhost:3000/course/1df3527b-ed86-449a-9f45-e4de0bb306a1/about

## Key Information

### Organization
- **Org slug**: `default` (NOT "hybreed")
- **Org UUID**: `org_267d0aa7-5bf0-46b7-ac02-efd88bd8a4b6`

### Database
- **Database name**: `learnhouse`
- **User**: `learnhouse` (password: `learnhouse`)
- **Also accessible via**: `postgres` user (password: `postgres`)
- **Host**: `localhost:5432`

### All 25 Courses

| # | Course Name | UUID | Custom Landing Page |
|---|-------------|------|-------------------|
| 1 | Arduino & Practical Electronics | 52c650f2-6d4f-4bf7-8c6e-a834e775ba15 | YES (ArduinoElectronicsLanding) |
| 2 | Data Analysis for Economics & Business | 2d7e7e16-ff60-4e55-9b9f-7900592595a5 | YES (DataAnalysisLanding) |
| 3 | Digital Accounting Skills | bdddef17-d095-4e5c-bf70-4b0fbc3ac795 | YES (DigitalAccountingLanding) |
| 4 | Digital Administration & Office Management | 9b45d0fe-b593-419a-bf64-e8946b077656 | YES (DigitalAdminLanding) |
| 5 | Digital Business Administration | 4c5e1739-da43-4a22-856c-cadc476874b9 | YES (DigitalBusinessAdminLanding) |
| 6 | Digital Finance Skills | 9840cfbf-6208-4586-93e7-1e2dc159267c | YES (DigitalFinanceLanding) |
| 7 | Digital HR Management | efde5827-642b-4db7-a1f4-18ea2ae20f0d | YES (DigitalHRLanding) |
| 8 | Digital Literacy Redefined | af04c27e-5526-4e63-b182-bc74db342506 | YES (DigitalLiteracyLanding) |
| 9 | Digital Marketing | 1df3527b-ed86-449a-9f45-e4de0bb306a1 | YES (DigitalMarketingLanding) |
| 10 | Digital Marketing (duplicate) | 653b1fb0-632b-479a-8dae-90708171fcb6 | YES (DigitalMarketingDupLanding) |
| 11 | Digital Marketing for Graduates | 2aa3fc72-7e2f-4613-b8a5-34efd3dacec5 | YES (DigitalMarketingGradLanding) |
| 12 | Digital Media & Content Creation | 04414052-de12-48fd-a831-4768fddde825 | YES (DigitalMediaLanding) |
| 13 | Digital Tools for Teachers | 68c2e3ad-1a06-40c1-855a-627ac1364cea | YES (DigitalTeachersLanding) |
| 14 | Digital Workplace Skills for Graduates | c548f66b-147c-447d-972e-d316c19d5a5a | YES (DigitalWorkplaceLanding) |
| 15 | Engineering Computing & Digital Tools | 9e6a63d8-0156-4b1b-829d-0634a4ab0f61 | YES (EngineeringComputingLanding) |
| 16 | Graphic Design & Visual Content | a540081c-c335-4f4d-aef2-769765e48197 | YES (GraphicDesignLanding) |
| 17 | JavaScript Development | 9dcb692b-17b1-421f-a536-f6c0606ff4d1 | YES (JavaScriptLanding) |
| 18 | Microsoft Office Mastery | 21ef95f0-07be-4d18-9d5a-08293f7d2ca7 | YES (MicrosoftOfficeLanding) |
| 19 | Modern Website Development | db0a295b-afa8-466b-944c-b0073fcfa6a4 | YES (ModernWebDevLanding) |
| 20 | React.js Development | a668d5af-5300-4eb7-8009-21156ea34df6 | YES (ReactJSLanding) |
| 21 | Search Engine Optimization (SEO) | 5d7da0af-e09a-4fc3-93f4-6db3e8512e2d | YES (SEOLanding) |
| 22 | UI/UX Design with Figma | 0bfd0c2c-8719-4ebb-898e-613513a18886 | YES (UIUXDesignLanding) |
| 23 | Website Scripts & Template Development | bd3d638d-336d-4f98-a017-7a37389aded3 | YES (PythonScriptsLanding) |
| 24 | WordPress Website Mastery | 60b5a432-ebf2-4de6-9d9a-eccf9636f536 | YES (WordPressLanding) |
| 25 | AI Essentials | (see CourseAboutClient.tsx) | YES (AIEssentialsLanding) |
| 26 | AI Prompt Engineering | (see CourseAboutClient.tsx) | YES (AIPromptEngineeringLanding) |

### Key File Locations

#### Course Landing Pages
All in `apps/web/app/orgs/[orgslug]/(withmenu)/course/[courseuuid]/about/`:
- `page.tsx` — Next.js route entry
- `CourseAboutClient.tsx` — Main router that maps course UUIDs to custom landing pages
- `SEOLanding.tsx` — SEO course custom landing (IN PROGRESS — sections 1-5 done, more needed)
- `DigitalMarketingLanding.tsx` — Digital Marketing course custom landing (COMPLETE)
- `CourseLandingTemplate.tsx` — Generic template for courses without custom pages
- All other `*Landing.tsx` files — Custom landing pages for each course

#### Homepage Components
All in `apps/web/components/Landings/Hybreed/`:
- `HomeHero.tsx`, `HomeFooter.tsx`, `HomeCategories.tsx`, `HomeCourseSelections.tsx`
- `HomeGoals.tsx`, `HomeGraduateStories.tsx`, `HomePopularPrograms.tsx`, `HomeStartHere.tsx`
- `HybreedHeader.tsx`, `HybreedPromoBanner.tsx`

#### Images
- Homepage images: `apps/web/public/images/home/`
- Course images: `apps/web/public/images/course/`

### Current Work In Progress

#### SEO Course Landing Page (`SEOLanding.tsx`)
The SEO course landing page is being built section by section, replicating a reference design. Completed sections:
1. **HeroSection** — Dark background, title, bullet points, registration form, stats cards
2. **ApproachSection** — 3 cards with background images ("Our approach to your growth")
3. **CareerOutcomesSection** — White card with image left, text right ("Bring your projects to the top")
4. **SalarySection** — White card with salary slider ("Good SEO is a big step towards business success")
5. **TargetAudienceSection** — 3 cards with background images ("We hear you and help you achieve results")

**Remaining sections to implement** (from the reference design):
- `resume_17748738224680` — Resume/portfolio section
- `certificateNew_17748740263710` — Certificate section
- `cardsWithBackgroundImage_17751371131240` — Cards section
- `process_1750331919224` — Process/timeline section
- `columnsWithBigImages_1750332818872` — Columns with images
- `expertsBlock_17509336651080` — Experts/instructors section
- `mediaAboutUs_16898650195380` — Media about us
- `programWithTabs_1750334505415` — Program with tabs (curriculum)
- `plansNew_1750340338831` — Pricing plans
- `expertsBlock_17503329161770` — More experts
- `education_17748743867960` — Education section
- `whatYouLearn_17748743867961` — What you'll learn
- `faq_1623323688817` — FAQ section
- `courseMatch_17606000167260` — Course matching quiz

The reference HTML file is at: `c:\Users\CSA\Downloads\SEO-специалист： обучение SEO-продвижению сайтов ｜ Нетология (8_21_2026 5：22：16 PM).html`
(This file is on the original PC, not in the repo. If needed, ask the user to provide it.)

### Git Configuration
```powershell
git config user.name "Hybreed X"
git config user.email "ayuketangagbornoh@gmail.com"
```

### Commit Message Guidelines
- **NEVER** mention "Netology", "Devin", "AI", or any other AI assistant names
- **ALWAYS** use "Hybreed X" as the author
- Use descriptive commit messages like: "Hybreed Academy: SEO course landing page sections 1-5"

## Troubleshooting

### "You appear to be offline" error
The backend API server is down. Restart it:
```powershell
cd C:\Users\Public\Projects\learnhouse\apps\api
.venv\Scripts\python.exe -m uvicorn app:app --host 0.0.0.0 --port 8800
```

### "404 - Page not found" on course page
1. Check the backend is running: http://localhost:8800/
2. Check the course UUID exists in the database
3. Check `CourseAboutClient.tsx` has the correct UUID mapping

### Port already in use
```powershell
# Find and kill process on port 8800
Get-NetTCPConnection -LocalPort 8800 -State Listen | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }

# Find and kill process on port 3000
Get-NetTCPConnection -LocalPort 3000 -State Listen | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
```

### pgvector warning
This is normal and can be ignored. It just means the AI chatbot feature is disabled.

### Slow page loads
The first page load after starting the dev server takes 2-5 minutes (Turbopack compilation). Subsequent loads are faster. On slow PCs, be patient.

## Quick Start Summary
```powershell
# 1. Start backend
cd C:\Users\Public\Projects\learnhouse\apps\api
.venv\Scripts\python.exe -m uvicorn app:app --host 0.0.0.0 --port 8800

# 2. Start frontend (new terminal)
cd C:\Users\Public\Projects\learnhouse\apps\web
npx next dev --port 3000

# 3. Open browser
# http://localhost:3000
```
