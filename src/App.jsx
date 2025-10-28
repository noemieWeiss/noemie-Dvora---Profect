import { useState } from 'react';
import TextDisplay from './components/TextDisplay/TextDisplay';
import Keyboard from './components/Keyboard/Keyboard';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import StyleControls from './components/StyleControls/StyleControls';
import GlobalStyleControls from './components/GlobalStyleControls/GlobalStyleControls';
import ActionControls from './components/ActionControls/ActionControls';
import './styles/App.css';

const App = () => {
  const [text, setText] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [currentStyles, setCurrentStyles] = useState({
    font: 'Arial',
    size: 16,
    color: '#000000',
    isUpperCase: false,
  });
  const [history, setHistory] = useState([]);

  const addChar = (char) => {
    const newChar = { char, ...currentStyles };
    const newText = [...text, newChar];
    setText(newText);
    setHistory([...history, { action: 'add', prevText: text }]);
  };

  const addSpace = () => {
    addChar(' ');
  };

  const deleteLastChar = () => {
    if (text.length === 0) return;
    const newText = text.slice(0, -1);
    setText(newText);
    setHistory([...history, { action: 'delete', prevText: text }]);
  };

  const clearText = () => {
    if (text.length === 0) return;
    setText([]);
    setHistory([...history, { action: 'clear', prevText: text }]);
  };

  const undo = () => {
    if (history.length === 0) return;
    const lastAction = history[history.length - 1];
    setText(lastAction.prevText);
    setHistory(history.slice(0, -1));
  };

  const applyGlobalStyle = (style) => {
    if (text.length === 0) return;
    const prevText = [...text];
    const newText = text.map((char) => ({ ...char, ...style }));
    setText(newText);
    setHistory([...history, { action: 'globalStyle', prevText }]);
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>Advanced Text Editor</h1>
      </div>
      
      <div className="editor-container">
        <div className="display-section">
          <TextDisplay text={text} />
        </div>
        
        <div className="controls-section">
          <div className="language-section">
            <LanguageSelector currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
          </div>
          
          <div className="style-section">
            <StyleControls currentStyles={currentStyles} setCurrentStyles={setCurrentStyles} />
          </div>
          
          <div className="global-style-section">
            <GlobalStyleControls applyGlobalStyle={applyGlobalStyle} />
          </div>
          
          <div className="actions-section">
            <ActionControls 
              deleteLastChar={deleteLastChar} 
              clearText={clearText} 
              undo={undo} 
              addSpace={addSpace}
              canUndo={history.length > 0}
            />
          </div>
        </div>
        
        <div className="keyboard-section">
          <Keyboard currentLanguage={currentLanguage} addChar={addChar} />
        </div>
      </div>
    </div>
  );
};

export default App;