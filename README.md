# Sting.my - The Ultimate Insect Sting Challenge

A modern web application featuring live-streamed insect sting challenges on pump.fun via the STING token, with educational content, community engagement, and tokenized rewards.

## 🚀 Features

- **7-Level Sting Challenge**: Progressive difficulty based on Schmidt Sting Pain Index
- **Live on pump.fun**: All challenges streamed live via STING token
- **STING Token**: Trade and earn tokens on pump.fun platform
- **Community Voting**: Token-based voting and rewards system
- **Safety First**: Comprehensive medical information and safety protocols
- **Modern UI**: Beautiful, responsive design with smooth animations

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Railway

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── levels/            # Sting levels overview
│   ├── safety/            # Safety and medical information
│   ├── token/             # Token system and community
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
└── globals.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sting-my.git
cd sting-my
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment

### Railway Deployment

This project is configured for easy deployment on Railway:

1. Connect your GitHub repository to Railway
2. Railway will automatically detect the Next.js configuration
3. The app will be deployed and accessible via Railway's provided URL

### Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Sting.my"
```

## 📚 Pages Overview

### Homepage (`/`)
- Hero section with project introduction
- Current progress display
- Feature highlights
- Call-to-action sections

### Sting Levels (`/levels`)
- Detailed overview of all 7 sting levels
- Insect information and risk assessments
- Progress tracking
- Interactive level details


### Token System (`/token`)
- Token earning mechanisms
- Community voting
- Leaderboard
- Token utility information

### Safety (`/safety`)
- Comprehensive safety protocols
- Medical information
- Risk assessments
- Emergency procedures

## 🎨 Design System

The application uses a consistent design system with:

- **Colors**: Red and orange gradient theme
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components
- **Animations**: Smooth transitions with Framer Motion

## 🔒 Safety & Legal

⚠️ **Important**: This project is for educational and entertainment purposes only. All content includes comprehensive safety warnings and disclaimers. Never attempt to replicate these activities without proper medical supervision.

## 📖 Educational Value

The project aims to educate users about:

- Entomology and insect biology
- Pain science and the Schmidt Sting Pain Index
- Safety protocols for working with stinging insects
- Medical considerations and allergic reactions
- Ecological importance of insects

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Coyote Peterson's educational content
- Based on Dr. Justin Schmidt's research on insect sting pain
- Built with modern web technologies and best practices

## 📞 Support

For questions or support, please open an issue on GitHub or contact the development team.

---

**Remember**: Safety first! This content is educational only and should not be replicated without proper medical supervision.