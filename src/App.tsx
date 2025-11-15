import React, { useState } from 'react';

// Editor Components
import TextAreaEditor from './components/TextAreaEditor';
import ContentEditableEditor from './components/ContentEditableEditor';
import GmailStyleEditor from './components/GmailStyleEditor';
import GDocsStyleEditor from './components/GDocsStyleEditor';
import CKEditorComponent from './components/CKEditorComponent';

// Page Components
import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';

export const editors = [
  {
    id: 'textarea',
    title: '1. Simple Text Area',
    description: 'A standard HTML textarea element.',
    component: <TextAreaEditor />,
  },
  {
    id: 'contenteditable',
    title: '2. Content Editable Div',
    description: 'A div with the contentEditable attribute.',
    component: <ContentEditableEditor />,
  },
  {
    id: 'gmail',
    title: '3. Rich Text (Gmail Style)',
    description: 'A Quill editor with a minimal toolbar.',
    component: <GmailStyleEditor />,
  },
  {
    id: 'gdocs',
    title: '4. Editor (Google Docs Style)',
    description: 'A Quill editor with extensive features.',
    component: <GDocsStyleEditor />,
  },
  {
    id: 'ckeditor',
    title: '5. CKEditor 5',
    description: 'A powerful and modern rich text editor.',
    component: <CKEditorComponent />,
  },
];

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const selectedEditor = editors.find(e => e.id === currentPage);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {currentPage === 'home' || !selectedEditor ? (
        <HomePage onNavigate={setCurrentPage} />
      ) : (
        <EditorPage
          title={selectedEditor.title}
          component={selectedEditor.component}
          onBack={() => setCurrentPage('home')}
        />
      )}
    </div>
  );
};

export default App;