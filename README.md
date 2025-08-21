# DevConnect - Developer Networking Platform

A modern, responsive web application built with React, TypeScript, and Tailwind CSS for a developer networking platform where tech professionals can connect, collaborate, and grow together. This platform facilitates meaningful connections between developers, enabling real-time communication, skill matching, and professional networking.

## 🚀 Features

### 👤 User Authentication & Profile

- **Secure Authentication**: Email-based login system with password encryption
- **Profile Creation**: Comprehensive developer profile setup
- **Skill Tagging**: Add and showcase your technical skills
- **Experience Showcase**: Display work history and projects
- **GitHub Integration**: Connect and display GitHub contributions
- **Profile Customization**:
  - Upload profile photos
  - Add bio and professional summary
  - Highlight key achievements

### 🤝 Networking Features

- **Connection Management**:
  - Send/receive connection requests
  - Accept/reject pending requests

### 💬 Communication

- **Real-time Chat System**:
  - Instant messaging with Socket.IO
  - One-on-one conversations
  - Message history persistence
- **Notifications**:
  - Real-time connection updates
  - Profile view notifications

### 📱 UI/UX Features

- **Accessibility**:
  - WCAG 2.1 compliance
  - Screen reader support
  - Keyboard navigation

## 🛠️ Tech Stack

### Frontend Core

- **Framework**: React 19 with TypeScript
- **State Management**: Redux Toolkit for predictable state
- **Routing**: React Router DOM v7 for navigation
- **Real-time**: Socket.IO client for live updates

### Styling & UI

- **CSS Framework**: Tailwind CSS
- **Component Library**: DaisyUI
- **Icons**: Heroicons
- **Animations**: Framer Motion

### Development Tools

- **Build Tool**: Vite
- **Package Manager**: npm
- **Type Checking**: TypeScript
- **Code Quality**:
  - ESLint for linting
  - Prettier for formatting
  - Husky for pre-commit hooks

## 📦 Prerequisites

- Node.js (v18.0.0 or higher)
- npm v9.0.0 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd UI
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
UI/
├── src/
│   ├── components/         # React components
│   │   ├── auth/          # Authentication components
│   │   ├── chat/          # Chat related components
│   │   ├── profile/       # Profile components
│   │   ├── common/        # Shared components
│   │   └── premium/       # Premium feature components
│   ├── utils/             # Utility functions
│   │   ├── api/          # API integration
│   │   ├── hooks/        # Custom React hooks
│   │   ├── store/        # Redux store setup
│   │   └── helpers/      # Helper functions
│   ├── types/            # TypeScript definitions
│   ├── assets/           # Static assets
│   ├── styles/           # Global styles
│   ├── App.tsx          # Root component
│   └── main.tsx         # Entry point
├── public/              # Public assets
├── tests/              # Test files
└── config/             # Configuration files
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run preview` - Preview production build

## 🔐 Environment Variables

```env
# API Configuration
VITE_BASE_URL=your_backend_api_url
VITE_SOCKET_URL=your_socket_server_url

# Feature Flags
VITE_ENABLE_PREMIUM=true
VITE_ENABLE_GITHUB_INTEGRATION=true

# Analytics
VITE_ANALYTICS_ID=your_analytics_id

# Third Party Integration
VITE_GITHUB_CLIENT_ID=your_github_client_id
```

## 🚀 Deployment

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Preview the build**

   ```bash
   npm run preview
   ```

## 🔍 Code Quality

- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier
- **Git Hooks**: Husky for pre-commit checks
- **Type Safety**: Strict TypeScript configuration
- **Testing**: Jest and React Testing Library

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Follow semantic commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Goutam Shetty** - _Initial work_ - [goutam.shetty@314ecorp.com]

## 🙏 Acknowledgments

- Inspired by modern social networking platforms
- Built with developer experience in mind
- Special thanks to the open-source community

## 📚 Documentation

For detailed documentation, please visit:

- [API Documentation](docs/api.md)
- [Component Documentation](docs/components.md)
- [Contributing Guidelines](CONTRIBUTING.md)
- [Change Log](CHANGELOG.md)

## 🆘 Support

For support, please:

1. Check the [Documentation](docs/)
2. Open an [Issue](issues/new)
3. Contact the development team

---

Built with ❤️ for the developer community
