import React from 'react';

import { Input, TextArea } from '../Fields';

import './index.css';

const Field = ({field}) => {
  const getField = field => {
    const map = {
      string: <Input key={field.code} code={field.code} description={field.description} />,
      number: <Input key={field.code} code={field.code} description={field.description} />,
      datetime: <Input key={field.code} code={field.code} description={field.description} />,
      text: <TextArea key={field.code} code={field.code} description={field.description} />,
      singlevaluelist: null,
      multivaluelist: null
    };

    return map[field.datatype];
  }

  return (
    <div className="Field">
      {getField(field)}
    </div>
  );
};

export default Field;
