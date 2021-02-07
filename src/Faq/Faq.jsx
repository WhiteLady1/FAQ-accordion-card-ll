import React, { useState } from 'react';
import '../style.css';
import arrow from '../images/icon-arrow-down.svg';

const Faq = (props) => {
  const [openedAnswer, setOpenedAnswer] = useState(false);
  return (
    <>
      <div className="faq">
        <div className="question">
          <h2>{props.question}</h2>
          <img
            className={openedAnswer ? 'arrow opened' : 'arrow'}
            src={arrow}
            alt="arrow"
            onClick={() => {
              openedAnswer ? setOpenedAnswer(false) : setOpenedAnswer(true);
            }}
          />
        </div>
        <div className={openedAnswer ? 'answer openedAnswer' : 'answer'}>
          {' '}
          {props.answer}
        </div>
      </div>
    </>
  );
};
export default Faq;
