
import React, { useState } from 'react';

const TextAreaEditor: React.FC = () => {
  const [content, setContent] = useState('This is a simple, uncontrolled textarea. Type here...');

  return (
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      className="w-full h-48 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out text-gray-800"
      placeholder="Type something..."
    />
  );
};

export default TextAreaEditor;
