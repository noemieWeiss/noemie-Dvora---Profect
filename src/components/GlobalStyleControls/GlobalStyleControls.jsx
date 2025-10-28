import { availableColors, defaultColor } from '../../constants/colors';
import { availableFonts, availableSizes, defaultFont } from '../../constants/fonts';
import './GlobalStyleControls.css';

const GlobalStyleControls = ({ applyGlobalStyle }) => {
  return (
    <div className="global-style-controls">
      <h3>Apply to All Text:</h3>
      
      <div className="global-control-group">
        <label>Font: </label>
        <select onChange={(e) => applyGlobalStyle({ font: e.target.value })} defaultValue={defaultFont}>
          <option value="">Select Font</option>
          {availableFonts.map((font) => (
            <option key={font.value} value={font.value}>
              {font.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="global-control-group">
        <label>Size: </label>
        <select onChange={(e) => applyGlobalStyle({ size: parseInt(e.target.value) })} defaultValue={16}>
          <option value="">Select Size</option>
          {availableSizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="global-control-group">
        <label>Color: </label>
        <select onChange={(e) => applyGlobalStyle({ color: e.target.value })} defaultValue={defaultColor}>
          <option value="">Select Color</option>
          {availableColors.map((color) => (
            <option key={color.value} value={color.value}>
              {color.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="global-control-group">
        <button onClick={() => applyGlobalStyle({ isUpperCase: true })}>UPPERCASE ALL</button>
        <button onClick={() => applyGlobalStyle({ isUpperCase: false })}>lowercase all</button>
      </div>
    </div>
  );
};

export default GlobalStyleControls;