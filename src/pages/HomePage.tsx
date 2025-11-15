import React from 'react';
import Header from '../components/Header';
import { editors } from '../App';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {editors.map((editor) => (
            <button
              key={editor.id}
              onClick={() => onNavigate(editor.id)}
              className="text-left bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              <h2 className="text-xl font-semibold text-gray-800">{editor.title}</h2>
              <p className="text-gray-600 mt-2">{editor.description}</p>
            </button>
          ))}
        </div>
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>Showcase of various text editors in React.</p>
      </footer>
    </>
  );
};

export default HomePage;
