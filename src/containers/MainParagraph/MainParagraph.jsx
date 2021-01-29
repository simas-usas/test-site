import React from 'react';

import './MainParagraph.scss';
import data from '../../data';

const MainParagraph = () => (
  <div className="main-paragraph">
    <div className="main-text-field">{data.main}</div>
    <div className="side-bar">
      <div className="title">{data.formTitle}</div>
      <div className="text">{data.form}</div>
      <form id="sidebar" className="form">
        <label htmlFor="first-name">First name</label>
        <input type="text" id="first-name" name="first-name" placeholder="Your name here" />
        <label htmlFor="first-name">Last name</label>
        <input type="text" id="last-name" name="last-name" placeholder="Your last name here" />
        <label htmlFor="message">Your message</label>
        <textarea id="message" name="message" form="sidebar" placeholder="Type your message here" />
        <button className="submit-button" type="submit" form="sidebar" value="submit">Submit</button>
      </form>
    </div>
  </div>
);

export default MainParagraph;
