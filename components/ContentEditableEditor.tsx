
import React from 'react';

const ContentEditableEditor: React.FC = () => {
  return (
    <div
      contentEditable={true}
      suppressContentEditableWarning={true}
      className="w-full h-48 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out text-gray-800"
    >
      This is a <strong>div</strong> with the <code>contentEditable</code> attribute. You can 
      <em> directly edit</em> this text in the browser.
    </div>
  );
};

export default ContentEditableEditor;
