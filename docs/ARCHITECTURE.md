# 🏗️ Architecture Overview

## System Architecture

The AI Learning Companion follows a modern full-stack architecture with clear separation of concerns and microservice-like organization.

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   External      │
│   React + TS    │────│   Node.js API   │────│   Services      │
│   Port: 3000    │    │   Port: 5000    │    │   OpenAI, etc   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Frontend Architecture

### Technology Stack
- **Framework**: React 18.2 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: TailwindCSS with custom design system
- **State Management**: Zustand for global state
- **Routing**: React Router v6
- **HTTP Client**: React Query + Axios
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion + GSAP

### Component Structure
```
src/
├── components/
│   ├── ui/              # Base UI components (Button, Input, etc.)
│   ├── dashboard/       # Dashboard-specific components
│   ├── chat/           # AI chat interface components
│   ├── 3d/             # Three.js 3D components
│   └── layout/         # Layout components
├── hooks/              # Custom React hooks
├── services/           # API service functions
├── store/              # Zustand stores
├── types/              # TypeScript definitions
└── utils/              # Utility functions
```

### State Management
- **Zustand Stores**: Lightweight state management
  - `authStore`: User authentication state
  - `documentStore`: Document management
  - `chatStore`: Chat history and state
  - `uiStore`: UI preferences (theme, sidebar state)

## Backend Architecture

### Technology Stack
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens with HTTP-only cookies
- **File Processing**: Multer, pdf-parse, mammoth
- **AI Integration**: OpenAI API, LangChain

### API Structure
```
src/
├── controllers/        # Route handlers and business logic
├── models/            # MongoDB schemas and models
├── routes/            # Express route definitions
├── middleware/        # Custom middleware functions
├── services/          # Business logic services
├── utils/             # Utility functions
└── types/             # TypeScript type definitions
```

### Database Schema

#### User Model
```typescript
{
  _id: ObjectId,
  email: string,
  password: string (hashed),
  name: string,
  avatar?: string,
  preferences: {
    theme: 'light' | 'dark',
    learningGoals: string[],
    difficulty: 'beginner' | 'intermediate' | 'advanced'
  },
  stats: {
    totalDocuments: number,
    totalQuizzes: number,
    studyStreak: number,
    xpPoints: number
  },
  createdAt: Date,
  updatedAt: Date
}
```

#### Document Model
```typescript
{
  _id: ObjectId,
  userId: ObjectId,
  filename: string,
  originalName: string,
  fileType: 'pdf' | 'docx' | 'txt' | 'md',
  size: number,
  path: string,
  content: {
    text: string,
    summary?: string,
    keyPoints: string[],
    topics: string[]
  },
  metadata: {
    pageCount?: number,
    wordCount: number,
    readingTime: number
  },
  processed: boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### Chat Session Model
```typescript
{
  _id: ObjectId,
  userId: ObjectId,
  documentId?: ObjectId,
  title: string,
  messages: [{
    role: 'user' | 'assistant',
    content: string,
    timestamp: Date,
    tokens?: number
  }],
  context: {
    documentIds: ObjectId[],
    topics: string[]
  },
  createdAt: Date,
  updatedAt: Date
}
```

## AI Integration Architecture

### OpenAI Integration
- **Chat Completions**: GPT-4/3.5-turbo for conversational AI
- **Embeddings**: text-embedding-ada-002 for semantic search
- **Content Generation**: Automatic flashcard and quiz generation

### LangChain Pipeline
```
Document Upload → Text Extraction → Chunking → Embeddings → Vector Store
                                        ↓
User Query → Similarity Search → Context Retrieval → LLM Processing → Response
```

### Document Processing Flow
1. **Upload**: File received via multipart/form-data
2. **Validation**: File type and size validation
3. **Extraction**: Text extraction based on file type
4. **Processing**: NLP processing for key concepts
5. **Storage**: Save metadata and content to database
6. **Indexing**: Create embeddings for semantic search

## Security Architecture

### Authentication Flow
1. User registration/login with email + password
2. Password hashing with bcrypt
3. JWT token generation and HTTP-only cookie storage
4. Token validation middleware on protected routes
5. Refresh token mechanism for session management

### Data Protection
- Input validation with express-validator
- Rate limiting with express-rate-limit
- CORS configuration for cross-origin requests
- Helmet.js for security headers
- File upload restrictions and validation

## Deployment Architecture

### Development Environment
```
Frontend (Vite Dev Server) ← → Backend (Express) ← → MongoDB (Local/Atlas)
     Port 3000                    Port 5000              Port 27017
```

### Production Environment
```
Vercel (Frontend) ← → Render/Railway (Backend) ← → MongoDB Atlas
    Static Files        Container Deployment         Cloud Database
```

## Performance Considerations

### Frontend Optimization
- Code splitting with React.lazy()
- Image optimization with Next.js Image component
- Bundle analysis and tree shaking
- Service worker for PWA functionality
- Caching strategies for API responses

### Backend Optimization
- Database indexing for frequently queried fields
- Request/response compression with gzip
- Connection pooling for MongoDB
- Caching layers with Redis (optional)
- API response optimization

## Monitoring and Logging

### Logging Strategy
- Winston logger for structured logging
- Different log levels (error, warn, info, debug)
- Log rotation and archival
- Error tracking with stack traces

### Health Monitoring
- Health check endpoints
- Database connection monitoring
- API response time tracking
- Memory and CPU usage monitoring

## Future Scalability

### Potential Enhancements
- Microservices architecture for different AI services
- Message queue system for background processing
- CDN integration for static assets
- Kubernetes deployment for container orchestration
- Multi-region deployment for global availability
