import React, { useState, useEffect, useRef } from 'react';

const DraftJsEditor: React.FC = () => {
  const [Draft, setDraft] = useState<any>(() => (window as any).Draft);
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (Draft) return;
    const interval = setInterval(() => {
      if ((window as any).Draft) {
        setDraft(() => (window as any).Draft);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [Draft]);

  // Derive constants from state. They will be undefined until Draft is loaded.
  const Editor = Draft?.Editor;
  const EditorState = Draft?.EditorState;
  const RichUtils = Draft?.RichUtils;
  const ContentState = Draft?.ContentState;

  const [editorState, setEditorState] = useState<any | null>(null);

  useEffect(() => {
    // Initialize editorState once Draft.js is loaded
    if (EditorState && ContentState && editorState === null) {
      const initialContent = ContentState.createFromText('This is a Draft.js editor. It provides a powerful framework for building rich text experiences.');
      setEditorState(EditorState.createWithContent(initialContent));
    }
  }, [EditorState, ContentState, editorState]);

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
    return <div>Loading Draft.js...</div>;
  }

  return (
    <div>
      <div className="flex space-x-2 mb-2 p-2 bg-gray-100 rounded-t-md border-b">
         <button onClick={onBoldClick} className="px-3 py-1 bg-white border rounded shadow-sm hover:bg-gray-50 font-bold">B</button>
         <button onClick={onItalicClick} className="px-3 py-1 bg-white border rounded shadow-sm hover:bg-gray-50 italic">I</button>
      </div>
      <div 
        style={{ height: '12rem' }}
        className="p-3 border border-gray-300 rounded-b-md cursor-text" 
        onClick={focusEditor}
      >
        <div className="draft-js-editor-container">
          <Editor 
            ref={editorRef}
            editorState={editorState} 
            onChange={setEditorState}
            handleKeyCommand={handleKeyCommand}
            placeholder="Tell a story..." 
          />
        </div>
      </div>
    </div>
  );
};

export default DraftJsEditor;