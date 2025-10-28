import { languageOptions } from '../../constants/languages';
import './LanguageSelector.css';

const LanguageSelector = ({ currentLanguage, setCurrentLanguage }) => {
  return (
    <div className="language-selector">
      <label>Language: </label>
      <select value={currentLanguage} onChange={(e) => setCurrentLanguage(e.target.value)}>
        {languageOptions.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;