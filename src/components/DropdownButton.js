// DropdownButton.js

import React, { useState } from 'react';
import { LANGUAGE_VERSIONS } from "../constants";
const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const DropdownButton = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        Select an Option
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {languages.map((lang, version) => (
            <li key={lang} onClick={() => handleOptionClick(lang)}>
              {lang}&nbsp;<div>({version})</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
