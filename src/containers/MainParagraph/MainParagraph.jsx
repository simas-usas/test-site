import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { isEmpty, map } from 'lodash';

import { GET_MAIN_PARAGRAPH, GET_FORM_TEXT } from 'api/queries';
import FormInput from 'components/FormInput';
import FormTextArea from 'components/FormTextArea';

import './MainParagraph.scss';

const MainParagraph = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);

  const mainParagraphQuery = useQuery(GET_MAIN_PARAGRAPH);
  const formTextQuery = useQuery(GET_FORM_TEXT);

  if (mainParagraphQuery.loading || formTextQuery.loading) {
    return <div>Loading...</div>;
  }

  const { data: { mainParagraph } } = mainParagraphQuery;
  const { data: { formText } } = formTextQuery;

  const validateForm = () => {
    if (isEmpty(firstName) || isEmpty(lastName) || isEmpty(message)) {
      if (isEmpty(firstName)) {
        setIsFirstNameValid(false);
      }
      if (isEmpty(lastName)) {
        setIsLastNameValid(false);
      }
      if (isEmpty(message)) {
        setIsMessageValid(false);
      }
    } else {
      console.log('validate form');
    }
  };

  return (
    <div className="main-paragraph">
      <div className="main-text-field">
        <div className="title">Lorem ipsum dolor sit amet, consecte</div>
        {map(mainParagraph, item => <p key={item.id}>{item.text}</p>)}
      </div>
      <div className="side-bar">
        <div className="title">Quisque a justo</div>
        <div className="text">{formText}</div>
        <div id="sidebar" className="form">
          <FormInput
            id="first-name"
            label="First name"
            placeholder="Your name here"
            value={firstName}
            onChange={setFirstName}
            isValid={isFirstNameValid}
            setIsValid={setIsFirstNameValid}
          />
          <FormInput
            id="last-name"
            label="Last name"
            placeholder="Your last name here"
            value={lastName}
            onChange={setLastName}
            isValid={isLastNameValid}
            setIsValid={setIsLastNameValid}
          />
          <FormTextArea
            id="message"
            label="Your message"
            placeholder="Type your message here"
            value={message}
            onChange={setMessage}
            isValid={isMessageValid}
            setIsValid={setIsMessageValid}
          />
          <button
            className="submit-button"
            type="button"
            value="submit"
            onClick={() => validateForm()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainParagraph;
