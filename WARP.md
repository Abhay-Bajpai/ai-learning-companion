# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is an AI-powered interactive personal learning companion - a full-stack application that transforms how students interact with educational content through personalized AI tutoring, interactive visualizations, and gamified progress tracking.

**Tech Stack:**
- **Frontend**: React 18.2 + TypeScript + Vite
- **Backend**: Node.js + Express.js + TypeScript  
- **Database**: MongoDB with Mongoose ODM
- **AI Integration**: OpenAI API + LangChain for document processing
- **Key Libraries**: Three.js, Framer Motion, GSAP, Recharts, TailwindCSS

## Architecture Overview

### Monorepo Structure
This project uses npm workspaces with two main applications:
- `frontend/` - React application (port 3000)
- `backend/` - Node.js API server (port 5000)

### Key Architectural Patterns
- **Frontend**: Component-based architecture with Zustand for state management
- **Backend**: RESTful API with middleware-based architecture using Express.js
- **Database**: MongoDB with ODM using Mongoose schemas
- **AI Integration**: LangChain pipeline for document processing and OpenAI for chat/content generation

### Core Data Flow
```
Document Upload → Text Extraction → AI Processing → Vector Embeddings → Semantic Search
User Query → Context Retrieval → LLM Processing → Personalized Response
```

### Database Schema Architecture
- **Users**: Authentication, preferences, stats, gamification data
- **Documents**: File metadata, extracted content, AI-generated summaries
- **ChatSessions**: Conversation history with context and document references
- **Progress**: Learning analytics, achievements, streaks

## Common Development Commands

### Project Setup
```bash
# Install all dependencies for both frontend and backend
npm run install:all

# Set up environment variables
npm run setup:env
# Then manually configure backend/.env with your API keys
```

### Development
```bash
# Start both frontend and backend simultaneously
npm run dev

# Start only frontend (port 3000)
npm run dev:frontend

# Start only backend (port 5000)  
npm run dev:backend
```

### Building
```bash
# Build both applications
npm run build

# Build individual applications
npm run build:frontend
npm run build:backend
```

### Testing & Quality
```bash
# Run tests for both applications
npm test

# Lint all code
npm run lint

# Lint individual applications
npm run lint:frontend
npm run lint:backend
```

### Utilities
```bash
# Clean all node_modules and build artifacts
npm run clean

# Health check (when backend is running)
curl http://localhost:5000/health
```

## Key Development Concepts

### Frontend Architecture
- **Component Organization**: UI components in `/ui`, feature components in dedicated folders (`/dashboard`, `/chat`, `/3d`)
- **State Management**: Zustand stores for auth, documents, chat, and UI state
- **Routing**: React Router v6 with protected routes
- **Styling**: TailwindCSS with custom design system and dark/light theme support
- **3D Graphics**: Three.js with React Three Fiber for data visualization
- **Animations**: Framer Motion for UI animations, GSAP for advanced sequences

### Backend Architecture
- **Route Structure**: Controllers handle business logic, services contain reusable functionality
- **Authentication**: JWT tokens with HTTP-only cookies, bcrypt for password hashing
- **File Processing**: Multi-format support (PDF, DOCX, TXT, MD) with automatic text extraction
- **AI Integration**: OpenAI API for chat completions, embeddings for semantic search
- **Error Handling**: Centralized error handler with structured logging using Winston

### Development Patterns
- **Path Aliases**: Both frontend and backend use `@/` path mapping for clean imports
- **TypeScript**: Strict mode enabled with comprehensive type definitions
- **API Design**: Consistent response format with success/error structure
- **Security**: Rate limiting, CORS, helmet, input validation with express-validator

### Document Processing Pipeline
1. **Upload**: Multer handles multipart file uploads with validation
2. **Extraction**: Different parsers based on file type (pdf-parse, mammoth, etc.)
3. **AI Processing**: LangChain processes content, generates summaries and key points
4. **Storage**: MongoDB stores metadata and content with indexing for search

### AI Integration Points
- **Chat Interface**: Context-aware conversations with document content
- **Content Generation**: Auto-generated flashcards, quizzes, and summaries  
- **Semantic Search**: Vector embeddings for document similarity and retrieval
- **Personalization**: Adaptive responses based on user's learning level and history

## Important Configuration Files

### Environment Variables (backend/.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-learning-companion
JWT_SECRET=your-jwt-secret
OPENAI_API_KEY=your-openai-api-key
FRONTEND_URL=http://localhost:3000
```

### TypeScript Configuration
- Backend uses path mapping with `@/` for clean imports from src/
- Frontend uses similar path mapping for components and utilities
- Both use strict TypeScript settings with ESNext modules

### Build Configuration
- **Frontend**: Vite with PWA plugin, proxy to backend API
- **Backend**: TypeScript compilation to dist/ folder
- **Deployment**: Frontend → Vercel, Backend → Render/Railway, Database → MongoDB Atlas

## Testing Strategy

### Current State
- Jest configuration set up for both frontend and backend
- Unit testing structure in place but tests need to be implemented

### Testing Approach
- **Frontend**: React Testing Library for components, MSW for API mocking
- **Backend**: Supertest for API endpoints, MongoDB Memory Server for database tests
- **Integration**: End-to-end testing with document upload and AI processing flows

## Performance Considerations

### Frontend Optimization
- Code splitting with React.lazy() for route-based splitting
- React Query for API caching and background updates
- Image optimization and lazy loading
- Bundle analysis to maintain <500KB gzipped size

### Backend Optimization  
- Database indexing on frequently queried fields (userId, createdAt, topics)
- Request/response compression with gzip
- Connection pooling for MongoDB
- Rate limiting to prevent abuse

### AI Service Optimization
- Token usage optimization for OpenAI API calls
- Caching of frequently requested summaries and flashcards
- Batch processing for multiple documents
- Error handling and fallback for AI service outages

## Security Implementation

### Authentication Flow
1. User registration/login with email + password validation
2. Password hashing with bcrypt (salt rounds: 12)
3. JWT token generation with expiration
4. HTTP-only cookie storage for tokens
5. Middleware validation on protected routes

### Data Protection
- Input sanitization and validation on all endpoints
- File upload restrictions (size, type validation)
- CORS configured for specific origins
- Rate limiting on authentication and AI endpoints
- Helmet.js for security headers

## Deployment Architecture

### Development Environment
- Frontend dev server (Vite) on port 3000
- Backend API server on port 5000  
- MongoDB local instance or Atlas connection
- Hot reload enabled for both applications

### Production Environment
- **Frontend**: Static deployment on Vercel with automatic builds
- **Backend**: Container deployment on Render/Railway
- **Database**: MongoDB Atlas with connection pooling
- **CDN**: Cloudinary for file storage and optimization

## Common Issues & Solutions

### Development Setup
- **MongoDB Connection**: Ensure MongoDB is running locally or Atlas URI is correct
- **OpenAI API**: Verify API key is set and has sufficient credits
- **Port Conflicts**: Default ports are 3000 (frontend) and 5000 (backend)
- **CORS Issues**: Backend CORS is configured for localhost:3000 in development

### File Processing
- **Large Files**: Current limit is 10MB, configurable in multer middleware
- **File Type Support**: PDF, DOCX, TXT, MD - add new parsers in services/documentProcessor
- **Text Extraction Failures**: Fallback mechanisms in place for corrupted files

### AI Integration
- **Rate Limits**: OpenAI rate limits handled with exponential backoff
- **Context Size**: Large documents are chunked to fit within token limits
- **Embedding Costs**: Monitor usage and implement caching for frequently accessed content

## Future Enhancements

### Planned Features
- Real-time collaboration on documents
- Voice chat interface with speech-to-text
- Advanced 3D visualizations for learning progress
- Mobile app with React Native
- Integration with external learning platforms

### Scalability Considerations
- Microservices architecture for AI processing
- Redis caching layer for frequently accessed data
- CDN integration for global performance
- Kubernetes deployment for container orchestration
