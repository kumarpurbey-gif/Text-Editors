import React, { useEffect, useRef, useState } from 'react';

declare global {
    interface Window { ClassicEditor: any; }
}

const CKEditorComponent: React.FC = () => {
    const editorRef = useRef<HTMLDivElement | null>(null);
    const editorInstanceRef = useRef<any>(null);
    const [ClassicEditor, setClassicEditor] = useState(() => window.ClassicEditor);

    useEffect(() => {
        if (ClassicEditor) return;
        const interval = setInterval(() => {
            if (window.ClassicEditor) {
                setClassicEditor(() => window.ClassicEditor);
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [ClassicEditor]);

    useEffect(() => {
        if (editorRef.current && ClassicEditor && !editorInstanceRef.current) {
            ClassicEditor
                .create(editorRef.current, {
                    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
                })
                .then((editor: any) => {
                    editorInstanceRef.current = editor;
                })
                .catch((error: any) => {
                    console.error('There was a problem initializing CKEditor:', error);
                });
        }

        return () => {
            if (editorInstanceRef.current) {
                editorInstanceRef.current.destroy()
                    .catch((error: any) => {
                        console.error('Error destroying CKEditor instance:', error);
                    });
                editorInstanceRef.current = null;
            }
        };
    }, [ClassicEditor]);

    if (!ClassicEditor) {
        return <div>Loading CKEditor...</div>;
    }

    return (
        <div className="prose max-w-none" style={{ minHeight: '15rem' }}>
            <div ref={editorRef}>
                <h2>CKEditor 5</h2>
                <p>This is a classic editor instance created using its CDN build. It offers a robust editing experience out-of-the-box.</p>
            </div>
        </div>
    );
};

export default CKEditorComponent;