import React, { useEffect, useRef } from 'react';

declare global {
  interface Window { tinymce: any; }
}

const tinymce = window.tinymce;

const TinyMCEEditor: React.FC = () => {
  const editorRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    let editorInstance: any = null;

    if (editorRef.current && tinymce) {
      tinymce.init({
        target: editorRef.current,
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
        height: '100%',
        resize: false,
        skin: "oxide",
        content_css: "default",
        promotion: false, // Fix for the "read-only" mode warning in self-hosted versions
      }).then((editors: any[]) => {
          if (editors.length > 0) {
              editorInstance = editors[0];
          }
      }).catch((error: any) => {
          console.error("Failed to initialize TinyMCE:", error);
      });
    }

    return () => {
      if (editorInstance) {
        editorInstance.remove();
        editorInstance = null;
      }
    };
  }, []);

  if (!tinymce) {
      return <div>Initializing TinyMCE... This should be brief.</div>;
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