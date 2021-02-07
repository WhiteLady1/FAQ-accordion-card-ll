import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Faq from './Faq/Faq';
import './index.html';
import './style.css';
import faqs from './faqs';
import womanMobile from './images/illustration-woman-online-mobile.svg';
import womanDesktop from './images/illustration-woman-online-desktop.svg';
import box from './images/illustration-box-desktop.svg';
import patternMobile from './images/bg-pattern-mobile.svg';
import patternDesktop from './images/bg-pattern-desktop.svg';

const App = () => {
  return (
    <>
      <div className="card">
        <div className="image imageMobil">
          <img src={womanMobile} alt="Woman illustration" />
          <img src={patternMobile} alt="Pattern" />
        </div>
        <div className="image imageDesktop">
          <img src={box} alt="box" />
          <img src={womanDesktop} alt="Woman illustration" />
          <img src={patternDesktop} alt="Pattern" />
        </div>
        <div className="faqs">
          <h1>FAQ</h1>
          {faqs.map((fag) => (
            <Faq question={fag.question} answer={fag.answer} />
          ))}
        </div>
      </div>
    </>
  );
};

render(<App />, document.getElementById('app'));
