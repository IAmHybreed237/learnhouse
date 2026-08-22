# Hybreed Academy — LearnHouse Project State

## Project Overview
Hybreed Academy is an online learning platform built on the LearnHouse open-source LMS.
The platform is deployed locally for development on this PC.

## Organization / Database
- **Org slug**: `default` (NOT "hybreed")
- **Org UUID**: `org_267d0aa7-5bf0-46b7-ac02-efd88bd8a4b6`
- **Database**: PostgreSQL 17, database name `learnhouse`, user `postgres`, password `postgres`, host `localhost:5432`
- **Connection string**: `postgresql://learnhouse:learnhouse@localhost:5432/learnhouse`
- **25 courses** in the database (see full list below)

## How to Start the Dev Environment

### Prerequisites (should already be running)
1. **PostgreSQL 17** — runs as a Windows service, auto-starts on boot
   - Verify: `& "C:\Program Files\PostgreSQL\17\bin\pg_isready.exe" -h localhost -p 5432`
   - Should say "accepting connections"
2. **Happ (VPN)** — needed for external access, do NOT kill

### Start the API server (port 8800)
```powershell
cd C:\Users\CSA\Projects\learnhouse\apps\api
.venv\Scripts\python.exe -m uvicorn app:app --host 0.0.0.0 --port 8800
```
- **IMPORTANT**: Use `app:app` NOT `src.main:app` — the entrypoint is `app.py` in the api root
- The config.yaml says port 1338, but we override with `--port 8800` on the command line
- The `.env.local` for the web app points to `http://localhost:8800` (NOT 1338)
- Expected warning: `pgvector extension not available` — this is fine, RAG features are just disabled
- Verify: `Invoke-WebRequest -Uri "http://localhost:8800/" -UseBasicParsing` should return 200

### Start the Web server (port 3000)
```powershell
cd C:\Users\CSA\Projects\learnhouse\apps\web
npx next dev --port 3000
```
- Uses Turbopack (Next.js 16.2.9)
- Verify: `Invoke-WebRequest -Uri "http://localhost:3000" -UseBasicParsing` should return 200
- If port 3000 is in use, find and kill the process:
  ```powershell
  Get-NetTCPConnection -LocalPort 3000 -State Listen | Select-Object OwningProcess
  Stop-Process -Id <PID> -Force
  ```

### Key config files
- `apps/web/.env.local` — contains `NEXT_PUBLIC_LEARNHOUSE_BACKEND_URL=http://localhost:8800`
- `apps/api/config/config.yaml` — API config (default port is 1338 but we override to 8800)
- `apps/api/app.py` — FastAPI entrypoint

### If "You appear to be offline" error on web
This means the API server is down. Restart it (see above).

## Key File Locations

### Homepage components (Hybreed custom)
All in `apps/web/components/Landings/Hybreed/`:
- `HomeHero.tsx` — Hero section with 4-slide auto-rotating carousel (slide1-4.webp), quick cards, categories grid
- `HomeFooter.tsx` — Footer with 3 link columns (Information, Education, Projects) + social/QR/contacts
- `HomeCategories.tsx` — Categories section
- `HomeCourseSelections.tsx` — Course selections
- `HomeGoals.tsx` — Goals section
- `HomeGraduateStories.tsx` — Graduate/student stories
- `HomeHomeworkVideo.tsx` — Homework video section
- `HomePopularPrograms.tsx` — Popular programs
- `HomeStartHere.tsx` — Start here section
- `HybreedHeader.tsx` — Site header/navigation
- `HybreedPromoBanner.tsx` — Promo banner at top

### About Us page
- Route: `/about` (in `apps/web/app/orgs/[orgslug]/(withmenu)/about/`)
- Has 6 sections: Hero+Levels, Directions, Features (feature-1-4.svg), Student Stories, Companies, Roles

### Contact page
- Route: `/contact` (in `apps/web/app/orgs/[orgslug]/(withmenu)/contact/`)

### Course About pages
- Route: `/course/[courseuuid]/about`
- Directory: `apps/web/app/orgs/[orgslug]/(withmenu)/course/[courseuuid]/about/`
- Files:
  - `page.tsx` — Next.js route entry
  - `CourseAboutClient.tsx` — Generic template used by all courses (Hero, Features, Salary, Skills, Diploma, Growth, Description, Curriculum, Pricing, FAQ)
  - `DigitalMarketingLanding.tsx` — Custom landing page ONLY for Digital Marketing course (UUID: `1df3527b-ed86-449a-9f45-e4de0bb306a1`)
    - Has custom sections: Hero, CareerOutcomes, Salary, SkillsTools, Diploma, Practice, Program, Pricing, FAQ, Footer, Approach
- Custom pages are registered in `CourseAboutClient.tsx` via `CUSTOM_COURSE_PAGES` map (line ~16)

### Images
- All homepage images: `apps/web/public/images/home/`
- Hero slides: `slide1.webp` through `slide4.webp`
- Feature SVGs: `feature-1.svg` through `feature-4.svg`
- Company logos: `company-1.png` through `company-9.png`
- Student stories: `story-1.webp` through `story-6.webp`, `student-1.jpg`
- Role images: `role-1.jpg` through `role-4.jpg`

## All 24 Courses in Database

| # | Course Name | UUID | Custom About Page? |
|---|-------------|------|-------------------|
| 1 | Arduino & Practical Electronics | course_52c650f2-6d4f-4bf7-8c6e-a834e775ba15 | No (generic) |
| 2 | Data Analysis for Economics & Business | course_2d7e7e16-ff60-4e55-9b9f-7900592595a5 | No (generic) |
| 3 | Digital Accounting Skills | course_bdddef17-d095-4e5c-bf70-4b0fbc3ac795 | No (generic) |
| 4 | Digital Administration & Office Management | course_9b45d0fe-b593-419a-bf64-e8946b077656 | No (generic) |
| 5 | Digital Business Administration | course_4c5e1739-da43-4a22-856c-cadc476874b9 | No (generic) |
| 6 | Digital Finance Skills | course_9840cfbf-6208-4586-93e7-1e2dc159267c | No (generic) |
| 7 | Digital HR Management | course_efde5827-642b-4db7-a1f4-18ea2ae20f0d | No (generic) |
| 8 | Digital Literacy Redefined | course_af04c27e-5526-4e63-b182-bc74db342506 | No (generic) |
| 9 | Digital Marketing | course_1df3527b-ed86-449a-9f45-e4de0bb306a1 | **YES (custom)** |
| 10 | Digital Marketing (duplicate) | course_653b1fb0-632b-479a-8dae-90708171fcb6 | No (generic) |
| 11 | Digital Marketing for Marketing Graduates | course_2aa3fc72-7e2f-4613-b8a5-34efd3dacec5 | No (generic) |
| 12 | Digital Media & Content Creation | course_04414052-de12-48fd-a831-4768fddde825 | No (generic) |
| 13 | Digital Tools for Teachers & Educators | course_68c2e3ad-1a06-40c1-855a-627ac1364cea | No (generic) |
| 14 | Digital Workplace Skills for Graduates | course_c548f66b-147c-447d-972e-d316c19d5a5a | No (generic) |
| 15 | Engineering Computing & Digital Tools | course_9e6a63d8-0156-4b1b-829d-0634a4ab0f61 | No (generic) |
| 16 | Graphic Design & Visual Content | course_a540081c-c335-4f4d-aef2-769765e48197 | No (generic) |
| 17 | JavaScript Development | course_9dcb692b-17b1-421f-a536-f6c0606ff4d1 | No (generic) |
| 18 | Microsoft Office Mastery | course_21ef95f0-07be-4d18-9d5a-08293f7d2ca7 | No (generic) |
| 19 | Modern Website Development | course_db0a295b-afa8-466b-944c-b0073fcfa6a4 | No (generic) |
| 20 | React.js Development | course_a668d5af-5300-4eb7-8009-21156ea34df6 | No (generic) |
| 21 | Search Engine Optimization (SEO) | course_5d7da0af-e09a-4fc3-93f4-6db3e8512e2d | **YES (custom)** |
| 22 | UI/UX Design with Figma | course_0bfd0c2c-8719-4ebb-898e-613513a18886 | No (generic) |
| 23 | Website Scripts & Template Development | course_bd3d638d-336d-4f98-a017-7a37389aded3 | No (generic) |
| 24 | WordPress Website Mastery | course_60b5a432-ebf2-4de6-9d9a-eccf9636f536 | No (generic) |

**Note**: There are TWO "Digital Marketing" courses (#9 and #10). Only #9 has a custom page. Consider deleting the duplicate #10.

## Pages That Need to Be Built (referenced in footer but don't exist)

### High priority
- `/legal` — Terms of service & privacy policy
- `/reviews` — Student testimonials page
- `/partnership` — B2B/corporate page (hire talent)

### Medium priority
- `/experts` — For instructors (recruit experts/teachers)
- `/students` — Career Support Center
- `/sertificate` — Gift a course

### Low priority
- `/team` or `/job` — Join our team / Career opportunities (not hiring yet)
- `/tests` — Skill tests
- `/glossariy` — Learning glossary
- `/learn-to-help` — Training for nonprofits
- `/official-info` — About our platform

## Footer Cleanup (agreed but not yet done)
The footer (`HomeFooter.tsx`) has many links to non-existent pages. Agreed plan:
- **Remove**: Partner program (duplicate), For instructors, Join our team, Career opportunities, Legal info, About our platform, Hybreed reviews, ~17 of 23 Education links, Career Support Center, For business, Schools, Gift a course, Learning glossary, Training for nonprofits, QR code + app download, Operating license, Ministry links, Accessibility mode
- **Keep**: About Hybreed Academy, Refer a friend, Contact us (fix URL to `/contact`), Free courses, Course catalog, Popular courses, Digital Marketing, Programming, Design and UX, Hybreed Blog, Hybreed Community, Social icons, phone numbers, email, copyright

## Current Task (in progress)
Building custom landing pages for all courses. Currently working on SEO course landing page (`SEOLanding.tsx`) — sections 1-5 done, more sections needed.
See `CYBER_SETUP.md` for detailed setup guide and remaining sections list.

## Git
- Repo: `C:\Users\CSA\Projects\learnhouse`
- Branch: `dev`
- Remote: `origin` (GitHub)
- Author: Hybreed X (no AI references in commits)
- Last commit: cleanup of temp files + push to origin/dev

## Important Notes
- Do NOT kill: Happ (VPN), Chrome, Edge processes
- The pgvector warning on API startup is normal and can be ignored
- Redis is configured but not required for basic dev
- The web app uses pnpm (pnpm-lock.yaml present) but `npx next dev` works fine
