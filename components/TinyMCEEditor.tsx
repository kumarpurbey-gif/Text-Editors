import React, { useEffect, useRef } from 'react';

declare global {
  interface Window { tinymce: any; }
}

const TinyMCEEditor: React.FC = () => {
  const tinymce = window.tinymce;
  const editorRef = useRef<HTMLTextAreaElement | null>(null);
  const tinymceInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current && tinymce) {
      tinymce.init({
        target: editorRef.current,
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
        height: '100%',
        resize: false,
        // The following lines are the fix: they force the editor to load assets
        // from the self-hosted cdnjs source, preventing it from contacting
        // Tiny Cloud and entering read-only mode.
        skin_url: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/7.2.1/skins/ui/oxide',
        content_css: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/7.2.1/skins/content/default/content.min.css',
        promotion: false,
      }).then((editors: any[]) => {
          if (editors.length > 0) {
              tinymceInstanceRef.current = editors[0];
          }
      }).catch((error: any) => {
          console.error("Failed to initialize TinyMCE:", error);
      });
    }

    return () => {
      // Use the ref to ensure we're destroying the correct instance.
      if (tinymceInstanceRef.current) {
        tinymceInstanceRef.current.remove();
        tinymceInstanceRef.current = null;
      }
    };
  }, [tinymce]);

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