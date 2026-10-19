# Ejaztech LMS

A modern, responsive Learning Management System (LMS) built for the **AI From Zero To Hero** cohort program.

Ejaztech LMS provides students with a structured learning environment to access learning materials, complete quizzes and assignments, track progress, earn certificates, and compete on the leaderboard. The platform also includes a dedicated mentor dashboard for mentee management, submission grading, task assignment, live session scheduling, and announcements.

## 🔗 Project Links

| Platform | GitHub Repository | Live Demo |
|---|---|---|
| 🎓 Student Dashboard | [View Repository](https://github.com/Msaneeh/ejaztechlmsuser) | [Open Student LMS](https://ejaztechlmsuser.vercel.app/) |
| 🧑‍🏫 Mentor Dashboard | [View Repository](https://github.com/Msaneeh/ejaztechlmsmentor) | [Open Mentor LMS](https://ejaztechlmsmentor.vercel.app/) |

## 📖 About the Project

Ejaztech LMS is designed to support an interactive, structured learning experience for students enrolled in the **AI From Zero To Hero** program.

The project is organized into two separate frontend applications:

- **Student Dashboard:** Enables students to access learning phases, submit assignments, take quizzes, monitor progress, view rankings, manage notifications, and access certificates.
- **Mentor Dashboard:** Enables mentors to manage assigned mentees, review and grade submissions, assign tasks, schedule sessions, monitor performance, and publish announcements.

Both applications share a consistent design philosophy focused on simplicity, accessibility, responsiveness, and usability.

## ✨ Key Features

### 🎓 Student Dashboard

- **Authentication:** Protected routes and authentication state management.
- **Dashboard Overview:** Personalized greeting, learning progress, streaks, XP, and leaderboard position.
- **Learning Phases:** Structured learning phases containing modules, lessons, learning materials, and evaluations.
- **Quizzes:** Multiple-choice assessments, automatic scoring, instant results, and answer breakdowns.
- **Assignments:** Submit GitHub repository links, live demos, and additional task information.
- **Leaderboard:** Student rankings, XP, top performers, and personal ranking.
- **Certificates:** View, download, and share certificates for eligible completed phases.
- **Notifications:** Track important updates with read and unread filters.
- **Settings:** Manage profile, learning preferences, notifications, privacy, and appearance.
- **Dark Mode:** Light, dark, and system theme support.

### 🧑‍🏫 Mentor Dashboard

- **Dashboard Overview:** Monitor mentee counts, pending reviews, upcoming sessions, and completion statistics.
- **Mentee Management:** View assigned mentees, inspect profiles, and monitor individual progress.
- **Submission Grading:** Review student submissions, open project links, assign scores, and provide feedback.
- **Task Assignment:** Create tasks for individual mentees or entire cohorts.
- **Sessions Calendar:** View upcoming evaluation sessions and office hours.
- **Leaderboard:** Track student performance using XP and streaks.
- **Announcements:** Publish updates with priority levels and audience targeting.
- **Settings:** Manage account preferences and appearance.
- **Dark Mode:** Light, dark, and system theme support.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Frontend UI development |
| Vite | Development server and build tool |
| React Router v6 | Client-side routing |
| Tailwind CSS v4 | Styling and responsive layouts |
| shadcn/ui | Accessible, reusable UI components |
| Lucide React | Icon library |
| React Context API | Authentication and theme state |
| LocalStorage | Theme preferences and client-side persistence |
| Vercel | Deployment and hosting |

## 🎨 Design System

Ejaztech LMS uses a clean, minimalist, monochrome design system with glassmorphism-inspired elements.

Design principles include:

- Minimalist user interfaces
- Consistent spacing and typography
- Responsive layouts for desktop, tablet, and mobile
- Reusable UI components
- Light, dark, and system themes
- Clear navigation and visual hierarchy
- Accessible interface patterns

Theme tokens are defined in the application's stylesheet, allowing colors and appearance to be managed consistently across components.

## 📦 Prerequisites

Before running either application locally, install:

- [Node.js](https://nodejs.org/) v18 or higher
- npm, included with Node.js

Verify your installation:

```bash
node -v
npm -v
```

## 🚀 Getting Started

Choose the application you want to run.

### Option 1: Student Dashboard

Clone the repository:

```bash
git clone https://github.com/Msaneeh/ejaztechlmsuser.git
cd ejaztechlmsuser
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

`http://localhost:5173/`

### Option 2: Mentor Dashboard

Clone the repository:

```bash
git clone https://github.com/Msaneeh/ejaztechlmsmentor.git
cd ejaztechlmsmentor
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 🏗️ Build for Production

Run these commands inside either project directory:

```bash
npm run build
```

Vite generates the optimized production files in the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

The applications are maintained in separate repositories.

### Student Application

```text
ejaztechlmsuser/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── Layout/
│   ├── lib/
│   ├── mockdata/
│   ├── pages/
│   ├── store/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Mentor Application

```text
ejaztechlmsmentor/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   └── Mentor/
│   ├── Layout/
│   ├── mockData/
│   ├── pages/
│   ├── store/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

*The directory structures may change as development progresses.*

## 🌐 Deployment

Both applications are deployed on [Vercel](https://vercel.com/).

- **Student Dashboard:** https://ejaztechlmsuser.vercel.app/
- **Mentor Dashboard:** https://ejaztechlmsmentor.vercel.app/

To deploy your own version:

1. Fork the relevant GitHub repository.
2. Clone your fork and install its dependencies.
3. Import the repository into Vercel.
4. Configure the build settings and environment variables if required.
5. Deploy the application.

## 🤝 Contributing

Contributions, bug reports, suggestions, and feature requests are welcome.

To contribute:

1. Fork the relevant repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your changes and test them locally.
4. Commit your changes:

   ```bash
   git add .
   git commit -m "feat: describe your changes"
   ```

5. Push your branch:

   ```bash
   git push -u origin feature/your-feature
   ```

6. Open a Pull Request on GitHub.

Please follow the existing component patterns, reuse shared UI components, and keep the applications responsive and accessible.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file in each repository for details.

## 👨‍💻 Author

**Sani Aliyu Muhammad (Msaneeh)**

- GitHub: [@Msaneeh](https://github.com/Msaneeh)
- Student Dashboard: [Repository](https://github.com/Msaneeh/ejaztechlmsuser) · [Live Demo](https://ejaztechlmsuser.vercel.app/)
- Mentor Dashboard: [Repository](https://github.com/Msaneeh/ejaztechlmsmentor) · [Live Demo](https://ejaztechlmsmentor.vercel.app/)

---

**Ejaztech LMS — Learn. Build. Innovate.** 🚀