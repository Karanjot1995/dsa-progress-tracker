// ProgressBar.js
import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ solved, total }) => {
  const progress = (solved / total) * 100 || 0;

  return (
    <div className="progress-bar">
      {/* <div className="progress-bar__text">
        {solved}/{total} Problems Solved
      </div> */}
      <div className="progress-bar__inner" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;