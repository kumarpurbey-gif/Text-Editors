import React, { useState, useRef } from 'react';

// The bootstrap loader in index.html ensures window.Draft is available.
const { Editor, EditorState, RichUtils, ContentState } = (window as any).Draft || {};

const DraftJsEditor: React.FC = () => {
  const editorRef = useRef<any>(null);

  const [editorState, setEditorState] = useState(() => {
    if (!EditorState || !ContentState) return null;
    const initialContent = ContentState.createFromText('This is a Draft.js editor. It provides a powerful framework for building rich text experiences.');
    return EditorState.createWithContent(initialContent);
  });

  const focusEditor = () => {
    editorRef.current?.focus();
  };
  
  const handleKeyCommand = (command: string, state: any) => {
    if (!RichUtils || !state) return 'not-handled';
    const newState = RichUtils.handleKeyCommand(state, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };
  
  const onBoldClick = () => {
    if (!RichUtils || !editorState) return;
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const onItalicClick = () => {
    if (!RichUtils || !editorState) return;
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };
  
  if (!Editor || !editorState) {
    return <div>Initializing Draft.js... This should be brief.</div>;
  }

  return (
    <div>
      <div className="flex space-x-2 mb-2 p-2 bg-gray-100 rounded-t-md border-b">
         <button onClick={onBoldClick} className="px-3 py-1 bg-white border rounded shadow-sm hover:bg-gray-50 font-bold">B</button>
         <button onClick={onItalicClick} className="px-3 py-1 bg-white border rounded shadow-sm hover:bg-gray-50 italic">I</button>
      </div>
      <div 
        style={{ height: '12rem', overflowY: 'auto' }}
        className="p-3 border border-gray-300 rounded-b-md cursor-text" 
        onClick={focusEditor}
      >
        <Editor 
          ref={editorRef}
          editorState={editorState} 
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          placeholder="Tell a story..." 
        />
      </div>
    </div>
  );
};

export default DraftJsEditor;