import React, { useEffect, useRef } from 'react';

const GDocsStyleEditor: React.FC = () => {
  const Quill = (window as any).Quill;
  const editorContainerRef = useRef<HTMLDivElement | null>(null);
  const quillInstance = useRef<any>(null);

  useEffect(() => {
    if (Quill && editorContainerRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorContainerRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            [{ 'color': [] }, { 'background': [] }],
            ['code-block'],
            ['clean']
          ],
        },
      });
      
      quillInstance.current.root.innerHTML = `<h1>Google Docs Style Editor</h1><p>This editor has more features, like headings, code blocks, and colors, similar to a full document editor.</p><pre class="ql-syntax" spellcheck="false">function helloWorld() {
  console.log("Hello, world!");
}</pre>`;
    }
  }, [Quill]);

  if (!Quill) {
    return <div>Initializing Editor... This should be brief.</div>;
  }

  return (
    <div style={{ height: '16rem' }} className="quill-manual-wrapper">
       <style>{`
        .quill-manual-wrapper .ql-toolbar {
          border-top-left-radius: 0.375rem;
          border-top-right-radius: 0.375rem;
          border-color: #d1d5db;
        }
        .quill-manual-wrapper .ql-container {
          border-bottom-left-radius: 0.375rem;
          border-bottom-right-radius: 0.375rem;
          border-color: #d1d5db;
          height: calc(100% - 42px); /* Adjust based on toolbar height */
          font-family: inherit;
        }
        .quill-manual-wrapper .ql-syntax {
          background-color: #f3f4f6;
          color: #1f2937;
          padding: 0.5rem;
          border-radius: 0.25rem;
        }
      `}</style>
       <div ref={editorContainerRef} style={{height: '100%'}} />
    </div>
  );
};

export default GDocsStyleEditor;
