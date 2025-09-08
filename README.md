# 🚀 AI-Powered Interactive Personal Learning Companion

A full-stack, AI-integrated learning platform that transforms how students interact with educational content through personalized AI tutoring, interactive visualizations, and gamified progress tracking.

![AI Learning Companion](https://img.shields.io/badge/Status-In%20Development-yellow)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0+-green)

## 🔑 Concept

An AI-powered study dashboard where users can upload documents, get AI-generated summaries and flashcards, have interactive conversations with an AI tutor, and visualize their learning progress through gamified interfaces with stunning 3D animations.

## ⚡ Core Features

### 📂 Document Upload & AI Processing
- **Multi-format Support**: Upload PDF, DOCX, TXT, and Markdown files
- **AI Content Extraction**: Automatic key concept identification and learning objective generation
- **Smart Summarization**: AI-powered content summaries and highlights
- **Document Organization**: Categorize and tag documents for easy retrieval

### 🧠 AI Tutor & Chat Interface
- **Context-Aware Conversations**: AI remembers uploaded content and learning history
- **Adaptive Learning**: Personalized explanations based on user's comprehension level
- **Interactive Q&A**: Ask questions like "Explain topic X in simple words" or "Generate practice questions"
- **Multi-modal Support**: Text, voice, and visual learning interactions

### 📝 AI-Generated Learning Materials
- **Smart Flashcards**: Auto-generated flashcards with spaced repetition algorithms
- **Dynamic Quizzes**: Multiple-choice quizzes with adaptive difficulty levels
- **Custom Practice Tests**: AI creates tests based on your weak areas
- **Progress-Based Content**: Materials adapt based on your learning curve

### 📊 Interactive Learning Dashboard
- **Gamified Progress**: Badges, streaks, XP points, and achievement levels
- **Visual Analytics**: Interactive charts showing improvement trends and learning patterns
- **3D Data Visualization**: Immersive progress tracking with Three.js
- **Performance Insights**: AI-powered learning recommendations

### 🎨 Premium Frontend Experience
- **3D Animations**: Stunning Three.js and GSAP animations throughout the interface
- **Responsive Design**: Mobile-first approach with seamless cross-device experience
- **Dark/Light Themes**: Beautiful themes with smooth transitions
- **Progressive Web App**: Offline functionality and native app-like experience

## 🛠 Tech Stack

### Frontend
- **Framework**: React 18.2 + TypeScript + Vite
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion + GSAP + Three.js for 3D graphics
- **Data Visualization**: Recharts + D3.js for interactive charts
- **State Management**: Zustand for global state
- **HTTP Client**: React Query + Axios for API management
- **UI Components**: Custom component library with Radix UI primitives

### Backend
- **Runtime**: Node.js + Express.js + TypeScript
- **Database**: MongoDB with Mongoose ODM
- **AI/ML**: OpenAI API + LangChain for document processing
- **Authentication**: JWT tokens + bcrypt for security
- **File Processing**: Multer + pdf-parse + mammoth for document handling
- **API**: RESTful APIs with comprehensive validation

### AI & Machine Learning
- **Language Models**: OpenAI GPT-4/3.5-turbo for chat and content generation
- **Document Processing**: LangChain for RAG (Retrieval-Augmented Generation)
- **NLP**: Natural language processing for content analysis
- **Vector Storage**: Embedding-based semantic search for documents

### DevOps & Deployment
- **Frontend Hosting**: Vercel with automatic deployments
- **Backend Hosting**: Render/Railway for API services
- **Database**: MongoDB Atlas for cloud database
- **CDN**: Cloudinary for file storage and optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB (local or Atlas)
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-learning-companion.git
   cd ai-learning-companion
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Setup**
   ```bash
   # Backend environment
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   
   # Add your OpenAI API key, MongoDB URI, and other secrets
   ```

5. **Start Development Servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend  
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/health

## 📁 Project Structure

```
ai-learning-companion/
├── frontend/                 # React + TypeScript frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/         # Basic UI components  
│   │   │   ├── dashboard/  # Dashboard-specific components
│   │   │   ├── chat/       # AI chat interface
│   │   │   └── 3d/         # Three.js 3D components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API service functions
│   │   ├── store/          # Zustand state management
│   │   ├── types/          # TypeScript type definitions
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # Node.js + Express backend
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API route definitions
│   │   ├── services/       # Business logic services
│   │   ├── middleware/     # Express middleware
│   │   ├── utils/          # Backend utilities
│   │   └── types/          # TypeScript types
│   ├── uploads/            # File upload storage
│   └── package.json
├── docs/                   # Documentation
├── shared/                 # Shared types and utilities
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Documents
- `GET /api/documents` - List user documents
- `POST /api/documents/upload` - Upload new document
- `GET /api/documents/:id` - Get document details
- `DELETE /api/documents/:id` - Delete document

### AI Services
- `POST /api/ai/chat` - Chat with AI tutor
- `POST /api/ai/summarize` - Generate document summary
- `POST /api/ai/flashcards` - Generate flashcards
- `POST /api/ai/quiz` - Generate quiz questions

### User Progress
- `GET /api/users/progress` - Get learning progress
- `POST /api/users/progress` - Update progress
- `GET /api/users/achievements` - Get user achievements

## 🎯 Development Roadmap

### Phase 1: Core Foundation ✅
- [x] Project setup and architecture
- [x] Basic frontend structure with React + Vite
- [x] Backend API with Express + MongoDB
- [x] Authentication system
- [x] File upload functionality

### Phase 2: AI Integration 🚧
- [ ] OpenAI API integration
- [ ] Document processing pipeline
- [ ] Basic chat functionality
- [ ] Content summarization

### Phase 3: Interactive Features 📋
- [ ] Flashcard generation and management
- [ ] Quiz creation and taking
- [ ] Progress tracking system
- [ ] Gamification elements

### Phase 4: Advanced UI/UX 📋
- [ ] 3D dashboard components
- [ ] Advanced animations with GSAP
- [ ] Data visualization charts
- [ ] Mobile responsiveness

### Phase 5: Enhancement & Polish 📋
- [ ] PWA functionality
- [ ] Advanced AI features
- [ ] Performance optimization
- [ ] Comprehensive testing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for providing powerful language models
- The React and Node.js communities for excellent tooling
- Contributors and testers who help improve the platform

---

**Built with ❤️ for learners everywhere**
