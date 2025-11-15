import React, { useEffect, useRef } from 'react';

declare global {
    interface Window { ClassicEditor: any; }
}

const CKEditorComponent: React.FC = () => {
    const ClassicEditor = window.ClassicEditor;
    const editorRef = useRef<HTMLDivElement | null>(null);
    const editorInstanceRef = useRef<any | null>(null); // Ref to hold the editor instance

    useEffect(() => {
        // Prevent re-initialization if the instance already exists
        if (editorRef.current && ClassicEditor && !editorInstanceRef.current) {
            ClassicEditor
                .create(editorRef.current, {
                    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
                    initialData: '<h2>CKEditor 5</h2><p>This is a classic editor instance created using its CDN build. It offers a robust editing experience out-of-the-box.</p>'
                })
                .then((newEditor: any) => {
                    editorInstanceRef.current = newEditor;
                })
                .catch((error: any) => {
                    console.error('There was a problem initializing CKEditor:', error);
                });
        }

        // Cleanup function
        return () => {
            if (editorInstanceRef.current) {
                editorInstanceRef.current.destroy()
                    .then(() => {
                        editorInstanceRef.current = null;
                    })
                    .catch((error: any) => {
                        console.error('Error destroying CKEditor instance:', error);
                    });
            }
        };
    }, [ClassicEditor]);

    if (!ClassicEditor) {
        return <div>Initializing CKEditor... This should be brief.</div>;
    }

    return (
        <div 
          className="prose max-w-none ck-editor-container" 
          style={{ minHeight: '15rem' }} 
          ref={editorRef}
        >
        </div>
    );
};

export default CKEditorComponent;