// Accordion.js
import React from 'react';
// import PropTypes from 'prop-types';
import AccordionItem from './AccordionItem';

const Accordion = ({ items, me }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem me={me} key={index} title={item.title} questions={item.questions} />
      ))}
    </div>
  );
};

export default Accordion;
