
import React from 'react';
import Header from './components/Header';
import EditorCard from './components/EditorCard';
import TextAreaEditor from './components/TextAreaEditor';
import ContentEditableEditor from './components/ContentEditableEditor';
import GmailStyleEditor from './components/GmailStyleEditor';
import GDocsStyleEditor from './components/GDocsStyleEditor';
import CKEditorComponent from './components/CKEditorComponent';
import TinyMCEEditor from './components/TinyMCEEditor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <EditorCard title="1. Simple Text Area">
            <TextAreaEditor />
          </EditorCard>
          
          <EditorCard title="2. Content Editable Div">
            <ContentEditableEditor />
          </EditorCard>

          <EditorCard title="3. Rich Text (Gmail Style)">
            <GmailStyleEditor />
          </EditorCard>

          <EditorCard title="4. Editor (Google Docs Style)">
            <GDocsStyleEditor />
          </EditorCard>

          <EditorCard title="5. CKEditor 5">
            <CKEditorComponent />
          </EditorCard>

          <EditorCard title="6. TinyMCE Editor">
            <TinyMCEEditor />
          </EditorCard>

        </div>
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>Showcase of various text editors in React.</p>
      </footer>
    </div>
  );
};

export default App;