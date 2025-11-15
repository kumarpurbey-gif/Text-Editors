import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorComponent: React.FC = () => {
    return (
        <div className="prose max-w-none">
            <CKEditor
                editor={ ClassicEditor }
                data="<h2>CKEditor 5</h2><p>This is a classic editor instance imported from an npm module. It offers a robust editing experience out-of-the-box.</p>"
                config={{
                    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ]
                }}
            />
        </div>
    );
};

export default CKEditorComponent;