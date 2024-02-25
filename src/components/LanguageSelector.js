import { LANGUAGE_VERSIONS } from "../constants";
const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const LanguageSelector = ({ language, onSelect }) => {

  return (
    <div className="language-selector">
      <div className="title mb-2">
        Language:
      </div>
      <div className="">
        <select value={language} className="language-btn" onChange={(e)=>onSelect(e.target.value)} >
          {languages.map(([lang, version]) => (
            <option value={lang} key={lang}>
              {lang}&nbsp;<div>({version})</div>
            </option>
          ))}
        </select>
        {/* <button>{language}</button>
        <ul>
          {languages.map(([lang, version]) => (
            <li
              key={lang}
              color={lang === language ? ACTIVE_COLOR : ""}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <div>
                ({version})
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};
export default LanguageSelector;
