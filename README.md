# Ejaztech LMS

A modern, responsive Learning Management System (LMS) for the **AI From Zero To Hero** cohort program.

Built with **React, Vite, Tailwind CSS, shadcn/ui, React Router, Context API, and Lucide React**.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react\&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite\&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)

---

## 🔗 Links

* **GitHub Repository:** https://github.com/Msaneeh/ejaztechlmsuser
* **Live Demo:** https://ejaztechlmsuser.vercel.app/

---

## 📖 About

**Ejaztech LMS** is a modern Learning Management System designed for students participating in the **AI From Zero To Hero** cohort program.

The platform provides students with a centralized environment to access learning materials, track their progress, complete quizzes and assignments, participate in evaluations, earn certificates, and monitor their position on the leaderboard.

The application is designed with a clean, minimal, monochrome interface and is fully responsive across desktop, tablet, and mobile devices.

---

## ✨ Features

| Feature                  | Description                                                                             |
| ------------------------ | --------------------------------------------------------------------------------------- |
| 🔐 **Authentication**    | Protected routes and authentication state management using `AuthContext`                |
| 🏠 **Dashboard**         | Personalized greeting, current phase progress, streak, and leaderboard information      |
| 📚 **Learning Phases**   | Structured learning phases with weekly modules, lessons, and evaluation sessions        |
| 🧠 **Quizzes**           | Phase-based quizzes with one-attempt enforcement, instant results, and answer breakdown |
| 📝 **Tasks**             | Weekly assignments with repository and demo link submissions                            |
| 🏆 **Leaderboard**       | Student rankings based on XP, with podium and user highlighting                         |
| 🎓 **Certificates**      | Certificates issued after completing phases, with download and sharing functionality    |
| 🔔 **Notifications**     | Notification center with read/unread filtering                                          |
| ⚙️ **Settings**          | Account, learning, notification, privacy, and appearance settings                       |
| 🌗 **Dark Mode**         | Light, dark, and system theme support                                                   |
| 📱 **Responsive Design** | Optimized for desktop, tablet, and mobile devices                                       |
| 🎨 **Design System**     | Minimal monochrome interface with glassmorphism-inspired UI                             |

---

## 🖥️ Screens & Modules

### Dashboard

The student dashboard provides an overview of:

* Current learning phase
* Overall progress
* Learning streak
* XP
* Leaderboard position
* Recent learning activities

### Learning Phases

Students can access structured learning content organized into phases and weekly modules.

Each module can contain:

* Lessons
* Learning materials
* Evaluation sessions
* Weekly tasks

### Quizzes

Students can take quizzes at the end of learning phases.

The quiz system supports:

* One attempt per quiz
* Multiple-choice questions
* Automatic scoring
* Instant results
* Correct/incorrect answer breakdown

### Tasks

Students can submit weekly assignments through the LMS.

Submission fields can include:

* GitHub repository URL
* Live demo URL
* Additional submission information

### Leaderboard

Students can compete through an XP-based leaderboard.

The leaderboard includes:

* Student ranking
* XP
* Top performers
* Podium
* Current user's position

### Certificates

Students can receive certificates after completing eligible phases.

Certificates can be:

* Viewed
* Downloaded
* Shared

### Notifications

The notification system allows students to keep track of important LMS activities and updates.

Students can filter notifications by:

* All
* Read
* Unread

### Settings

Students can manage:

* Profile
* Learning preferences
* Notifications
* Privacy
* Appearance
* Theme

---

# 🛠️ Tech Stack

### Frontend

* **React 18** — UI library
* **Vite** — Build tool and development server
* **React Router v6** — Client-side routing
* **Tailwind CSS v4** — Utility-first CSS framework
* **shadcn/ui** — Accessible and reusable UI components
* **Lucide React** — Icon library

### State Management

* **Context API** — Authentication and theme state
* **LocalStorage** — Theme persistence and client-side preferences

### Deployment

* **Vercel** — Production deployment

---

# 📦 Prerequisites

Before running the project, make sure you have the following installed:

* [Node.js](https://nodejs.org/) **v18 or higher**
* npm, which comes with Node.js

You can verify your installation with:

```bash
node -v
npm -v
```

You should see Node.js version `18` or higher.

---

# 🚀 Getting Started

## 1. Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/Msaneeh/ejaztechlmsuser.git
```

Move into the project directory:

```bash
cd ejaztechlmsuser
```

---

## 2. Install Dependencies

Install all project dependencies using npm:

```bash
npm install
```

---

## 3. Start the Development Server

Run:

```bash
npm run dev
```

Vite will start the development server.

You should see something similar to:

```text
Local: http://localhost:5173/
```

Open the URL in your browser.

---

# 🧑‍💻 Development Workflow

After cloning the repository, the typical development workflow is:

```bash
git clone https://github.com/Msaneeh/ejaztechlmsuser.git
cd ejaztechlmsuser
npm install
npm run dev
```

After making changes:

```bash
git status
```

Review your changes:

```bash
git diff
```

Stage your changes:

```bash
git add .
```

Create a commit:

```bash
git commit -m "your commit message"
```

Push your changes:

```bash
git push origin main
```

---

# 🔄 Pull Latest Changes

Before starting new work, it is recommended to pull the latest version of the repository:

```bash
git pull origin main
```

If you are working on a separate branch:

```bash
git pull origin <branch-name>
```

---

# 🌿 Branch Workflow

Create a new feature branch:

```bash
git checkout -b feature/your-feature-name
```

Example:

```bash
git checkout -b feature/quiz-system
```

After completing your changes:

```bash
git add .
git commit -m "feat: add quiz system"
git push -u origin feature/quiz-system
```

Then create a Pull Request on GitHub.

---

# 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

The production files will be generated in the:

```text
dist/
```

directory.

---

# 🔍 Preview Production Build

After building the application, you can preview the production version locally:

```bash
npm run preview
```

---

# 📁 Project Structure

A simplified project structure:

```text
ejaztechlmsuser/
│
├── public/
│   └── ...
│
├── src/
│   ├── assets/
│   │   └── ...
│   │
│   ├── components/
│   │   └── ...
│   │
│   ├── context/
│   │   └── ...
│   │
│   ├── pages/
│   │   └── ...
│   │
│   ├── routes/
│   │   └── ...
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

> The exact structure may change as the project evolves.

---

# 🎨 Design System

Ejaztech LMS follows a clean and minimal visual language.

### Design principles

* Minimal interface
* Monochrome color palette
* Glassmorphism-inspired components
* Strong typography hierarchy
* Consistent spacing
* Responsive layouts
* Accessible UI components
* Clear navigation
* Reduced visual clutter

The interface is designed to keep the focus on **learning and student progress**.

---

# 🌗 Theme System

The application supports:

* Light mode
* Dark mode
* System preference

Theme preferences are persisted using `localStorage`.

---

# 📜 Available Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Starts the development server |
| `npm run build`   | Creates a production build    |
| `npm run preview` | Previews the production build |
| `npm run lint`    | Runs ESLint if configured     |

Run a command with:

```bash
npm run <command>
```

Example:

```bash
npm run dev
```

---

# 🚀 Deployment

The application is deployed using **Vercel**.

Live application:

**https://ejaztechlmsuser.vercel.app/**

To deploy your own copy:

1. Fork the repository.
2. Clone your fork.
3. Install dependencies.
4. Push your changes to GitHub.
5. Import the repository into Vercel.
6. Deploy.

For Vercel CLI deployment, you can also use:

```bash
npm install -g vercel
```

Then:

```bash
vercel
```

For production deployment:

```bash
vercel --prod
```

---

# 🤝 Contributing

Contributions are welcome.

To contribute:

### 1. Fork the repository

Fork the project from GitHub.

### 2. Clone your fork

```bash
git clone https://github.com/YOUR_USERNAME/ejaztechlmsuser.git
```

### 3. Enter the project

```bash
cd ejaztechlmsuser
```

### 4. Install dependencies

```bash
npm install
```

### 5. Create a feature branch

```bash
git checkout -b feature/your-feature
```

### 6. Make your changes

Develop and test your changes locally.

### 7. Commit your changes

```bash
git add .
git commit -m "feat: describe your change"
```

### 8. Push your branch

```bash
git push -u origin feature/your-feature
```

### 9. Open a Pull Request

Create a Pull Request on GitHub describing your changes.

---

# 🐛 Reporting Issues

If you discover a bug or have a feature request, please open an issue on the GitHub repository.

When reporting a bug, include:

* Description of the problem
* Steps to reproduce it
* Expected behavior
* Actual behavior
* Browser and operating system
* Screenshots when applicable

---

# 📄 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for more information.

---

# 👨‍💻 Author

**Sani Aliyu Muhammad**

GitHub:

https://github.com/Msaneeh

---

# ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

**Ejaztech LMS — Learn. Build. Innovate.**
