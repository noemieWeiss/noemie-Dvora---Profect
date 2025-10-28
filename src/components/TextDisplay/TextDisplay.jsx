import './TextDisplay.css';

const TextDisplay = ({ text }) => {
  const renderText = () => {
    if (text.length === 0) {
      return <div className="placeholder">Start typing to see your text here...</div>;
    }

    return text.map((charObj, index) => (
      <span
        key={index}
        style={{
          fontFamily: charObj.font,
          fontSize: `${charObj.size}px`,
          color: charObj.color,
          textTransform: charObj.isUpperCase ? 'uppercase' : 'none',
        }}
      >
        {charObj.char}
      </span>
    ));
  };

  return (
    <div className="text-display">
      <h2>Text Editor Output</h2>
      <div className="text-content">
        {renderText()}
        <span className="cursor">|</span>
      </div>
      <div className="text-info">
        Characters: {text.length}
      </div>
    </div>
  );
};

export default TextDisplay;