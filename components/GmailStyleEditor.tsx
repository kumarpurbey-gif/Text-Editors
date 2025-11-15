import React, { useEffect, useRef } from 'react';

const GmailStyleEditor: React.FC = () => {
  const Quill = (window as any).Quill;
  const editorContainerRef = useRef<HTMLDivElement | null>(null);
  const quillInstance = useRef<any>(null);

  useEffect(() => {
    if (Quill && editorContainerRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorContainerRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
          ],
        },
      });
      
      quillInstance.current.root.innerHTML = `<p>This editor mimics the <strong>Gmail</strong> compose experience.</p><p><br></p><p><u>Simple and clean.</u></p>`;
    }
  }, [Quill]);

  if (!Quill) {
    return <div>Initializing Editor... This should be brief.</div>;
  }

  return (
    <div style={{ height: '12rem' }} className="quill-manual-wrapper">
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
      `}</style>
      <div ref={editorContainerRef} style={{height: '100%'}} />
    </div>
  );
};

export default GmailStyleEditor;
