# onic-gustino-id

🔥 Personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and modern web technologies.

[![GitHub Repo stars](https://img.shields.io/github/stars/Onic1234/onic-gustino-id)](https://github.com/Onic1234/onic-gustino-id/stargazers)

<br/>

## 📘 Introduction

Welcome to my personal portfolio and project showcase. This website is a comprehensive platform where I display my achievements, projects, coding statistics, and insights.

The site features real-time integrations with various platforms like GitHub, CodeWars, LeetCode, Monkeytype, and more. It's built with modern technologies and continuously evolving.

Feel free to explore the source code, use it as inspiration, or fork it as a template. If you find this project useful, consider giving it a star ⭐.

Have feedback or questions? Feel free to reach out through the contact page! 🙌

---

## Tech Stack

This website is built using:

- **⚛️ Next.js 14+** - React framework
- **🔰 TypeScript** - Type safety
- **💠 Tailwind CSS** - Styling
- **🦫 Zustand** - State management
- **〰️ SWR** - Data fetching
- **➰ Framer Motion** - Animations
- **💢 React Icons** - Icon library
- **🌐 Next-Intl** - Multi-language support (EN & ID)
- **🔐 NextAuth** - Authentication
- **🔥 Firebase** - Backend services
- **📦 Absolute Imports** - Clean imports
- **📏 ESLint & Prettier** - Code quality

---

## 🚀 Features

### 📊 Dashboard
Comprehensive dashboard showcasing live statistics from multiple platforms:
- **Wakatime** - Coding time and activity statistics
- **GitHub** - Contributions and repositories
- **CodeWars** - Coding challenges stats
- **LeetCode** - Problem solving progress
- **Monkeytype** - Typing speed records
- **Umami** - Website analytics

### 🏆 Achievements
Track and display achievements from various coding platforms with filtering and categorization.

### 💼 Projects Showcase
Display of featured projects with detailed information, links, and images.

### 👤 About Section
Personal information, career history, education background, and professional experience.

### 💬 Smart Talk
Interactive chat feature powered by AI for engaging conversations.

### 📧 Contact
Contact form for direct communication with integrated email functionality.

### 🌍 Internationalization
Full support for multiple languages (English & Indonesian) using `next-intl`.

---

## 🛠 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Onic1234/onic-gustino-id.git
cd onic-gustino-id
```

---

### 2. Install Dependencies

```bash
bun install
```

> 💡 It's recommended to use **Bun** for package management.

---

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add your environment variables:

```bash
# Copy from .env.example if available
cp .env.example .env.local
```

You'll need credentials for:

- **GitHub** - For contributions and profile data
- **CodeWars** - For coding challenge stats
- **LeetCode** - For problem solving stats
- **Monkeytype** - For typing speed records
- **Wakatime** - For coding time statistics
- **Umami** - For website analytics
- **Firebase** - For backend and authentication
- **NextAuth** - For authentication
- **Email Service** - For contact form (Nodemailer/SendGrid)
- **AI Services** - For Smart Talk feature (Gemini API)

Example environment variables structure:

```env
# GitHub
GITHUB_READ_USER_TOKEN_PERSONAL=your_github_token

# CodeWars
CODEWARS_USER_ID=your_codewars_username

# LeetCode & Other Platforms
WAKATIME_API_KEY=your_wakatime_key
MONKEYTYPE_API_KEY=your_monkeytype_key
UMAMI_API_KEY=your_umami_api_key

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Email Service
NODEMAILER_EMAIL=your_email@example.com
NODEMAILER_PW=your_email_password

# AI Services
GEMINI_API_KEY=your_gemini_api_key

# Misc
NEXT_PUBLIC_AUTHOR_EMAIL=your_email@example.com
```

---

### 4. Run Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 5. Build for Production

```bash
bun run build
bun run start
```

---

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes for external services
│   ├── about/             # About page
│   ├── achievements/      # Achievements page
│   ├── dashboard/         # Statistics dashboard
│   ├── projects/          # Projects showcase
│   └── ...
├── common/                # Shared utilities and components
│   ├── components/        # Reusable UI components
│   ├── types/            # TypeScript type definitions
│   ├── constants/        # App constants
│   ├── stores/           # Zustand state stores
│   └── utils/            # Helper utilities
├── modules/              # Feature modules
├── services/             # External API services
├── hooks/                # Custom React hooks
├── contents/             # MDX content files
├── messages/             # i18n translation files
└── public/               # Static assets
```

---

## 🌐 Live Demo

Visit the live website: [onic-gustino-id](https://onic-gustino-id.vercel.app)

---

## 📄 License

This project is licensed under the MIT License - feel free to use it as a template!

---

## 🙋 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Check existing documentation
- Contact me through the website

---

**Made with ❤️ by Onic Gustino**
