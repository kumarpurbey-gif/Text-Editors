import React, { useState } from 'react';

// The bootstrap loader in index.html ensures window.ReactQuill is available.
const ReactQuill = (window as any).ReactQuill;

const GmailStyleEditor: React.FC = () => {
  const [value, setValue] = useState(
    `<p>This editor mimics the <strong>Gmail</strong> compose experience.</p><p><br></p><p><u>Simple and clean.</u></p>`
  );

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link'],
    ],
  };

  if (!ReactQuill) {
    return <div>Initializing Editor... This should be brief.</div>;
  }

  return (
    <div style={{ height: '12rem' }} className="react-quill-wrapper">
      <style>{`
        .react-quill-wrapper .quill {
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .react-quill-wrapper .ql-container {
            flex-grow: 1;
            overflow-y: auto;
        }
      `}</style>
      <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={setValue} 
        modules={modules}
      />
    </div>
  );
};

export default GmailStyleEditor;