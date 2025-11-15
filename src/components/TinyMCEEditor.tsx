import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TinyMCEEditor: React.FC = () => {
  return (
    // For open-source projects, you can use the 'gpl' license key.
    // For commercial projects, get a key from tiny.cloud.
    <Editor
      licenseKey='gpl'
      init={{
        height: 300,
        menubar: false,
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
      }}
      initialValue="<p>Welcome to <strong>TinyMCE</strong>! This editor is known for its extensive features and customization options.</p>"
    />
  );
};

export default TinyMCEEditor;