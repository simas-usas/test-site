import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_ADDITIONAL_PARAGRAPH } from 'api/queries';

import './AdditionalParagraph.scss';

const AdditionalParagraph = () => {
  const { loading, data } = useQuery(GET_ADDITIONAL_PARAGRAPH);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="additional-paragraph">
      {data.additionalParagraph.map(item => <div key={item.id} className="column">{item.text}</div>)}
    </div>
  );
};

export default AdditionalParagraph;
