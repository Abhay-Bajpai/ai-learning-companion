import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">
            🚀 AI Learning Companion
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
            Transform how you learn with AI-powered document analysis, 
            interactive tutoring, and personalized study materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/chat"
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
            >
              Try AI Chat
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-4">Document Upload</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Upload PDFs, Word docs, and more. Get AI-generated summaries and insights.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">AI Tutor</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Chat with an AI that understands your documents and learning style.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Progress Tracking</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Visualize your learning journey with interactive charts and achievements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
