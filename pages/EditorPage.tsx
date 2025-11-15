import React from 'react';
import EditorCard from '../components/EditorCard';

interface EditorPageProps {
  title: string;
  component: React.ReactNode;
  onBack: () => void;
}

const EditorPage: React.FC<EditorPageProps> = ({ title, component, onBack }) => {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
            Editor Showcase
          </h1>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-colors"
          >
            &larr; Back to Home
          </button>
        </div>
      </header>
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 flex justify-center">
         <div className="w-full max-w-4xl">
            <EditorCard title={title}>
              {component}
            </EditorCard>
         </div>
      </main>
    </>
  );
};

export default EditorPage;
