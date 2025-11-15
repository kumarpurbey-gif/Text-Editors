import React, { useState } from 'react';

// The bootstrap loader in index.html ensures window.ReactQuill is available.
const ReactQuill = (window as any).ReactQuill;

const GDocsStyleEditor: React.FC = () => {
  const [value, setValue] = useState(
    `<h1>Google Docs Style Editor</h1><p>This editor has more features, like headings, code blocks, and colors, similar to a full document editor.</p><pre class="ql-syntax" spellcheck="false">function helloWorld() {
  console.log("Hello, world!");
}</pre>`
  );

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }],
      ['code-block'],
      ['clean']
    ],
  };

  if (!ReactQuill) {
    return <div>Initializing Editor... This should be brief.</div>;
  }

  return (
    <div style={{ height: '16rem' }} className="react-quill-wrapper">
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

export default GDocsStyleEditor;