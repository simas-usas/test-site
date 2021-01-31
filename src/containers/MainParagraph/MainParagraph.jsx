import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_MAIN_PARAGRAPH, GET_FORM_TEXT } from 'api/queries';

import './MainParagraph.scss';

const MainParagraph = () => {
  const mainParagraphQuery = useQuery(GET_MAIN_PARAGRAPH);
  const formTextQuery = useQuery(GET_FORM_TEXT);
  if (mainParagraphQuery.loading || formTextQuery.loading) {
    return <div>Loading...</div>;
  }

  const { data: { mainParagraph } } = mainParagraphQuery;
  const { data: { formText } } = formTextQuery;

  return (
    <div className="main-paragraph">
      <div className="main-text-field">
        <div className="title">Lorem ipsum dolor sit amet, consecte</div>
        {mainParagraph.map(item => <p key={item.id}>{item.text}</p>)}
      </div>
      <div className="side-bar">
        <div className="title">Quisque a justo</div>
        <div className="text">{formText}</div>
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
};

export default MainParagraph;
