import React from 'react';
import Textarea from 'react-textarea-autosize';

import _s from 'assets/css/TextArea.module.scss';

const TextArea = ({ onChange, ...rest }) => {
  return <Textarea onChange={(e) => onChange(e.target.value)} className={_s.component} {...rest} />;
};

export default TextArea;
