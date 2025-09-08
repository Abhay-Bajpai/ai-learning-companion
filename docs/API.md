# 🔌 API Documentation

## Base URL
- **Development**: `http://localhost:5000/api`
- **Production**: `https://your-api-domain.com/api`

## Authentication
The API uses JWT tokens stored in HTTP-only cookies for authentication. Include credentials in requests to authenticated endpoints.

### Headers
```
Content-Type: application/json
Cookie: token=<jwt-token>
```

## Response Format
All API responses follow a consistent format:

### Success Response
```json
{
  "success": true,
  "data": {...},
  "message": "Operation completed successfully"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE",
    "details": {...}
  }
}
```

## Authentication Endpoints

### Register User
**POST** `/auth/register`

Create a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "64f123...",
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2023-09-01T10:00:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "User registered successfully"
}
```

### Login User
**POST** `/auth/login`

Authenticate a user and receive a JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:** Same as register response.

### Logout User
**POST** `/auth/logout`

*Requires authentication*

Clear the authentication cookie.

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

### Get Current User
**GET** `/auth/me`

*Requires authentication*

Get current authenticated user information.

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "64f123...",
      "name": "John Doe",
      "email": "john@example.com",
      "preferences": {
        "theme": "dark",
        "learningGoals": ["javascript", "ai"],
        "difficulty": "intermediate"
      },
      "stats": {
        "totalDocuments": 5,
        "totalQuizzes": 12,
        "studyStreak": 7,
        "xpPoints": 850
      }
    }
  }
}
```

## Document Management Endpoints

### Upload Document
**POST** `/documents/upload`

*Requires authentication*

Upload a new document for processing.

**Request:** multipart/form-data
- `file`: Document file (PDF, DOCX, TXT, MD)
- `title`: Optional custom title
- `tags`: Optional comma-separated tags

**Response:**
```json
{
  "success": true,
  "data": {
    "document": {
      "id": "64f456...",
      "filename": "lecture-notes.pdf",
      "originalName": "Machine Learning Lecture 1.pdf",
      "fileType": "pdf",
      "size": 2048576,
      "processed": false,
      "createdAt": "2023-09-01T10:30:00Z"
    }
  },
  "message": "Document uploaded successfully"
}
```

### Get User Documents
**GET** `/documents`

*Requires authentication*

Retrieve all documents for the authenticated user.

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `search`: Search term
- `type`: File type filter
- `processed`: Filter by processing status

**Response:**
```json
{
  "success": true,
  "data": {
    "documents": [
      {
        "id": "64f456...",
        "filename": "lecture-notes.pdf",
        "originalName": "Machine Learning Lecture 1.pdf",
        "fileType": "pdf",
        "size": 2048576,
        "content": {
          "summary": "This lecture covers...",
          "keyPoints": ["Neural networks", "Backpropagation"],
          "topics": ["AI", "Machine Learning"]
        },
        "metadata": {
          "pageCount": 45,
          "wordCount": 8500,
          "readingTime": 34
        },
        "processed": true,
        "createdAt": "2023-09-01T10:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 25,
      "pages": 3
    }
  }
}
```

### Get Document Details
**GET** `/documents/:id`

*Requires authentication*

Get detailed information about a specific document.

**Response:**
```json
{
  "success": true,
  "data": {
    "document": {
      "id": "64f456...",
      "filename": "lecture-notes.pdf",
      "originalName": "Machine Learning Lecture 1.pdf",
      "content": {
        "text": "Full extracted text content...",
        "summary": "This lecture covers fundamental concepts...",
        "keyPoints": ["Neural networks", "Backpropagation", "Gradient descent"],
        "topics": ["AI", "Machine Learning", "Deep Learning"]
      },
      "metadata": {
        "pageCount": 45,
        "wordCount": 8500,
        "readingTime": 34
      },
      "processed": true,
      "createdAt": "2023-09-01T10:30:00Z"
    }
  }
}
```

### Delete Document
**DELETE** `/documents/:id`

*Requires authentication*

Delete a document and its associated data.

**Response:**
```json
{
  "success": true,
  "message": "Document deleted successfully"
}
```

## AI Services Endpoints

### Chat with AI Tutor
**POST** `/ai/chat`

*Requires authentication*

Send a message to the AI tutor and receive a response.

**Request Body:**
```json
{
  "message": "Explain neural networks in simple terms",
  "sessionId": "64f789...",
  "documentIds": ["64f456...", "64f457..."],
  "context": {
    "topics": ["neural networks", "machine learning"],
    "difficulty": "beginner"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "response": "Neural networks are computational models inspired by the human brain...",
    "sessionId": "64f789...",
    "tokens": 150,
    "suggestions": [
      "What are activation functions?",
      "How does backpropagation work?",
      "Show me examples of neural networks"
    ]
  }
}
```

### Generate Summary
**POST** `/ai/summarize`

*Requires authentication*

Generate an AI summary for a document.

**Request Body:**
```json
{
  "documentId": "64f456...",
  "length": "medium",
  "focus": ["key concepts", "important formulas"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "summary": "This document covers the fundamentals of neural networks...",
    "keyPoints": ["Perceptron model", "Multi-layer networks", "Training algorithms"],
    "readingTime": 12
  }
}
```

### Generate Flashcards
**POST** `/ai/flashcards`

*Requires authentication*

Generate flashcards from document content.

**Request Body:**
```json
{
  "documentId": "64f456...",
  "count": 10,
  "difficulty": "intermediate",
  "topics": ["neural networks", "backpropagation"]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "flashcards": [
      {
        "front": "What is a perceptron?",
        "back": "A perceptron is the simplest form of a neural network...",
        "difficulty": "beginner",
        "topic": "neural networks"
      }
    ]
  }
}
```

### Generate Quiz
**POST** `/ai/quiz`

*Requires authentication*

Generate a quiz based on document content.

**Request Body:**
```json
{
  "documentIds": ["64f456..."],
  "questionCount": 5,
  "questionTypes": ["multiple-choice", "true-false"],
  "difficulty": "intermediate"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "quiz": {
      "id": "64f999...",
      "title": "Neural Networks Quiz",
      "questions": [
        {
          "type": "multiple-choice",
          "question": "What is the primary function of an activation function?",
          "options": [
            "To introduce non-linearity",
            "To reduce overfitting",
            "To speed up training",
            "To normalize inputs"
          ],
          "correct": 0,
          "explanation": "Activation functions introduce non-linearity..."
        }
      ],
      "timeLimit": 600,
      "createdAt": "2023-09-01T11:00:00Z"
    }
  }
}
```

## User Progress Endpoints

### Get Learning Progress
**GET** `/users/progress`

*Requires authentication*

Get comprehensive learning progress data.

**Response:**
```json
{
  "success": true,
  "data": {
    "progress": {
      "totalDocuments": 15,
      "documentsThisWeek": 3,
      "totalQuizzes": 28,
      "quizzesThisWeek": 5,
      "averageScore": 85.6,
      "studyStreak": 12,
      "xpPoints": 2450,
      "level": 8,
      "weeklyGoal": {
        "target": 5,
        "completed": 3,
        "progress": 60
      },
      "topicProgress": [
        {
          "topic": "Neural Networks",
          "mastery": 78,
          "documentsRead": 5,
          "quizzesTaken": 8
        }
      ],
      "recentActivity": [
        {
          "type": "quiz_completed",
          "title": "Machine Learning Basics",
          "score": 92,
          "timestamp": "2023-09-01T09:30:00Z"
        }
      ]
    }
  }
}
```

### Update Progress
**POST** `/users/progress`

*Requires authentication*

Update user learning progress.

**Request Body:**
```json
{
  "activity": "quiz_completed",
  "data": {
    "quizId": "64f999...",
    "score": 85,
    "timeSpent": 420,
    "topics": ["neural networks", "backpropagation"]
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "xpGained": 50,
    "newLevel": 8,
    "achievements": ["Quiz Master", "Week Warrior"],
    "streak": 13
  }
}
```

### Get Achievements
**GET** `/users/achievements`

*Requires authentication*

Get user achievements and badges.

**Response:**
```json
{
  "success": true,
  "data": {
    "achievements": [
      {
        "id": "first_upload",
        "title": "Document Pioneer",
        "description": "Upload your first document",
        "icon": "📄",
        "unlockedAt": "2023-08-15T10:00:00Z"
      },
      {
        "id": "quiz_master",
        "title": "Quiz Master",
        "description": "Complete 10 quizzes with 80%+ score",
        "icon": "🎯",
        "progress": 8,
        "required": 10
      }
    ]
  }
}
```

## Error Codes

| Code | Description |
|------|-------------|
| `AUTH_REQUIRED` | Authentication required |
| `INVALID_CREDENTIALS` | Invalid email or password |
| `USER_EXISTS` | User already exists |
| `DOCUMENT_NOT_FOUND` | Document not found |
| `DOCUMENT_PROCESSING_FAILED` | Document processing failed |
| `FILE_TOO_LARGE` | File size exceeds limit |
| `UNSUPPORTED_FILE_TYPE` | File type not supported |
| `AI_SERVICE_ERROR` | AI service unavailable |
| `RATE_LIMIT_EXCEEDED` | Too many requests |
| `VALIDATION_ERROR` | Request validation failed |

## Rate Limits

| Endpoint | Limit |
|----------|-------|
| `/auth/*` | 10 requests/minute |
| `/documents/upload` | 5 uploads/minute |
| `/ai/chat` | 30 requests/minute |
| `/ai/*` (other) | 20 requests/minute |
| General API | 100 requests/15 minutes |
