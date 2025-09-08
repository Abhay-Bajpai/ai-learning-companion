import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          AI Learning Companion Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Upload your learning materials and get AI-powered insights.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Chat with AI</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Ask questions about your documents and get personalized explanations.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Progress Tracking</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor your learning progress and achievements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
