import { availableFonts, availableSizes, defaultFont } from '../../constants/fonts';
import { availableColors, defaultColor } from '../../constants/colors';
import './StyleControls.css';

const StyleControls = ({ currentStyles, setCurrentStyles }) => {
  const handleStyleChange = (property, value) => {
    setCurrentStyles({ ...currentStyles, [property]: value });
  };

  return (
    <div className="style-controls">
      <div className="control-group">
        <label>Font: </label>
        <select value={currentStyles.font || defaultFont} onChange={(e) => handleStyleChange('font', e.target.value)}>
          {availableFonts.map((font) => (
            <option key={font.value} value={font.value}>
              {font.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="control-group">
        <label>Size: </label>
        <select value={currentStyles.size || 16} onChange={(e) => handleStyleChange('size', parseInt(e.target.value))}>
          {availableSizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="control-group">
        <label>Color: </label>
        <select value={currentStyles.color || defaultColor} onChange={(e) => handleStyleChange('color', e.target.value)}>
          {availableColors.map((color) => (
            <option key={color.value} value={color.value}>
              {color.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="control-group">
        <label>
          <input 
            type="checkbox" 
            checked={currentStyles.isUpperCase || false}
            onChange={(e) => handleStyleChange('isUpperCase', e.target.checked)}
          />
          Uppercase
        </label>
      </div>
    </div>
  );
};

export default StyleControls;