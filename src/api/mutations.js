import { gql } from '@apollo/client';

export const SUBMIT_FORM = gql`
  mutation Mutation($firstName: String!, $lastName: String!, $message: String!) {
    submitForm(firstName: $firstName, lastName: $lastName, message: $message) @client
  }
`;
