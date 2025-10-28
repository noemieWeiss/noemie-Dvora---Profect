import { availableKeys } from '../../constants/languages';
import './Keyboard.css';

const Keyboard = ({ currentLanguage, addChar }) => {
  const keys = availableKeys[currentLanguage] || [];

  const renderKey = (key, index) => {
    const displayKey = key === ' ' ? 'Space' : key;
    const keyClass = key === ' ' ? 'space-key' : 'regular-key';
    
    return (
      <button 
        key={index} 
        className={keyClass}
        onClick={() => addChar(key)}
      >
        {displayKey}
      </button>
    );
  };

  return (
    <div className="keyboard">
      <h3>Keyboard - {currentLanguage.toUpperCase()}</h3>
      <div className="keys-container">
        {keys.map((key, index) => renderKey(key, index))}
      </div>
    </div>
  );
};

export default Keyboard;