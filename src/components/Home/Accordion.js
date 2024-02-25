// Accordion.js
import React from 'react';
// import PropTypes from 'prop-types';
import AccordionItem from './AccordionItem';

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} questions={item.questions} />
      ))}
    </div>
  );
};

export default Accordion;
