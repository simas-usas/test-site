import { gql } from '@apollo/client';

export const GET_MAIN_PARAGRAPH = gql`
  query Query {
    mainParagraph @client
  }
`;

export const GET_FORM_TEXT = gql`
  query Query {
    formText @client
  }
`;

export const GET_ADDITIONAL_PARAGRAPH = gql`
  query Query {
    additionalParagraph @client
  }
`;

export const GET_FOOTER_TEXT = gql`
  query Query {
    footerText @client
  }
`;
