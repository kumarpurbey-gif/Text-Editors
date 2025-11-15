import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window { tinymce: any; }
}

const TinyMCEEditor: React.FC = () => {
  const editorRef = useRef<HTMLTextAreaElement | null>(null);
  const editorInstance = useRef<any>(null);
  const [tinymce, setTinymce] = useState(() => window.tinymce);

  useEffect(() => {
    if (tinymce) return;
    const interval = setInterval(() => {
        if (window.tinymce) {
            setTinymce(() => window.tinymce);
            clearInterval(interval);
        }
    }, 100);
    return () => clearInterval(interval);
  }, [tinymce]);

  useEffect(() => {
    if (editorRef.current && tinymce && !editorInstance.current) {
      tinymce.init({
        target: editorRef.current, // Use direct reference instead of selector
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
        height: '100%', // Fill the container
        resize: false,
        skin: "oxide",
        content_css: "default",
      }).then((editors: any[]) => {
          if (editors.length > 0) {
              editorInstance.current = editors[0];
          }
      }).catch((error: any) => {
          console.error("Failed to initialize TinyMCE:", error);
      });
    }

    return () => {
      if (editorInstance.current) {
        editorInstance.current.remove();
        editorInstance.current = null;
      }
    };
  }, [tinymce]);

  if (!tinymce) {
      return <div>Loading TinyMCE...</div>;
  }

  return (
    <div style={{ minHeight: '300px' }}>
      <textarea
        ref={editorRef}
        defaultValue="<p>Welcome to <strong>TinyMCE</strong>! This editor is known for its extensive features and customization options.</p>"
      />
    </div>
  );
};

export default TinyMCEEditor;