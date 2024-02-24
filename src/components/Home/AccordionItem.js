import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AccordionItem = ({ title, questions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-title" onClick={toggleAccordion}>
        {title}
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
                <td><input checked={q.solved} type="checkbox" /></td>
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

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default AccordionItem;
