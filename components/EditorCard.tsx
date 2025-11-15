
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
      <div className="p-5 flex-grow">
        {children}
      </div>
    </div>
  );
};

export default EditorCard;
