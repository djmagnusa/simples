import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? <i className="fa fa-minus-circle" />: <i className="fa fa-plus-circle" /> }</div>
      </div>
      {isActive && <div className="accordion-content"><div className="inner-accordion">{content}</div></div>}
    </div>
  );
};

export default Accordion;