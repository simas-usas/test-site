import React from 'react';

import './AdditionalParagraph.scss';
import data from '../../data';

const AdditionalParagraph = () => (
  <div className="additional-paragraph">
    <div className="column">{data.column}</div>
    <div className="column">{data.column}</div>
    <div className="column">{data.column}</div>
  </div>
);

export default AdditionalParagraph;
