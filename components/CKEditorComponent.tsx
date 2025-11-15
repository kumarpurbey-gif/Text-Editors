import React, { useEffect, useRef } from 'react';

declare global {
    interface Window { ClassicEditor: any; }
}

const CKEditorComponent: React.FC = () => {
    const ClassicEditor = window.ClassicEditor;
    const editorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let editor: any = null;

        if (editorRef.current && ClassicEditor) {
            ClassicEditor
                .create(editorRef.current, {
                    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
                    initialData: '<h2>CKEditor 5</h2><p>This is a classic editor instance created using its CDN build. It offers a robust editing experience out-of-the-box.</p>'
                })
                .then((newEditor: any) => {
                    editor = newEditor;
                })
                .catch((error: any) => {
                    console.error('There was a problem initializing CKEditor:', error);
                });
        }

        return () => {
            if (editor) {
                editor.destroy()
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