import React from 'react';

interface EditorCardProps {
  title: string;
  children: React.ReactNode;
}

const EditorCard: React.FC<EditorCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow hover:shadow-2xl flex flex-col">
      <div className="p-5 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      </div>
      <div className="p-5 flex-grow bg-gray-50">
        {/* Tablet Frame */}
        <div className="bg-gray-200 rounded-xl p-2 shadow-lg w-full max-w-3xl mx-auto relative">
           {/* Tablet camera dot */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full ring-1 ring-gray-300"></div>

          {/* Tablet Screen */}
          <div className="bg-white rounded-md overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorCard;