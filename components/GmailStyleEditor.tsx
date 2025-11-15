import React, { useState, useEffect } from 'react';

const GmailStyleEditor: React.FC = () => {
  const [ReactQuill, setReactQuill] = useState(() => (window as any).ReactQuill);

  useEffect(() => {
    if (ReactQuill) return;
    const interval = setInterval(() => {
      if ((window as any).ReactQuill) {
        setReactQuill(() => (window as any).ReactQuill);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [ReactQuill]);


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
    return <div>Loading Editor...</div>;
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