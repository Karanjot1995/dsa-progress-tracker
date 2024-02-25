import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../Common/ProgressBar';

const AccordionItem = ({ title, questions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    let cnt = 0
    questions.map(q=>q.solved? cnt+=1:'')
    setSolved(cnt)
  },[])

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-title" onClick={toggleAccordion}>
        <div className='d-flex justify-content-between'>
          {title}
          <div className="d-flex align-items-center pg-container">
            <p className='mb-0 pg-text'>({solved}/{questions.length})</p>
            <ProgressBar solved={solved} total={questions.length} />
          </div>
        </div>
      </div>

      {isOpen && 
        <div className="accordion-content">
          <table>
            <tr>
              <th>Solved</th>
              <th>Problem</th>
              <th>Difficulty</th>
            </tr>
            {questions.map(q=>
              <tr>
                <td><input defaultChecked={q.solved} type="checkbox" /></td>
                <td>{q.title}</td>
                <td>{q.difficulty}</td>
              </tr>
            )}
          </table>
        </div>
      }
    </div>
  );
};

export default AccordionItem;
