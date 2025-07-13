# 🛡️ Tactical Command Interface

<div align="center">

![Version](https://img.shields.io/badge/Version-2.1.7-orange)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

**A cyberpunk-themed tactical operations dashboard built with Next.js and shadcn/ui**

[Live Demo](https://tactical-command-interface.vercel.app) • [Features](#features) • [Installation](#installation)

![Dashboard Preview](/public/Screenshot%202025-07-13%20142048.png)

</div>

---

## ⚡ Features

- **🎮 Command Center** - Real-time agent monitoring and mission analytics
- **👥 Agent Network** - Comprehensive operative management system  
- **🎯 Operations Hub** - Mission planning and progress tracking
- **🔍 Intelligence Center** - Classified reports and threat analysis
- **🖥️ Systems Monitor** - Infrastructure health and performance metrics
- **🔐 Secure Auth** - Multi-factor authentication with social login

## 🚀 Quick Start

\`\`\`bash
# Clone the repository
git clone git@github.com:zabihbakhtiari/tactical-command-interface.git
cd tactical-command-interface

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Authentication**: Custom JWT implementation

## 📁 Project Structure

\`\`\`
app/
├── auth/                 # Authentication pages
├── command-center/       # Main dashboard
├── agent-network/        # Agent management
├── operations/          # Mission control
├── intelligence/        # Reports & analysis
├── systems/            # Infrastructure monitoring
└── page.tsx            # Root dashboard
\`\`\`

## 🎨 Design System

- **Colors**: Dark theme with orange accents (`#f97316`)
- **Typography**: Monospace fonts for technical elements
- **Components**: Built with shadcn/ui
- **Theme**: Cyberpunk/tactical aesthetic

## 🔧 Environment Variables

\`\`\`env
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your-secret-key
GITHUB_CLIENT_ID=your-github-id
GOOGLE_CLIENT_ID=your-google-id
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
\`\`\`bash
npm i -g vercel
vercel
\`\`\`

### Docker
\`\`\`bash
docker build -t tactical-command .
docker run -p 3000:3000 tactical-command
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Lucide](https://lucide.dev/) for the icon set
- Cyberpunk 2077 for design inspiration

---

<div align="center">

**Built by [Zabih Bakhtiari](https://github.com/zabihbakhtiari)**

⭐ Star this repo if you find it useful!

</div>
