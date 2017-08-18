import React from 'react';

import _s from 'assets/css/TextArea.css';

function TextArea({ text, onChange, ...rest }) {
  return (
    <textarea onChange={(e) => onChange(e.target.value)} className={_s.component} {...rest} />
  );
}

TextArea.defaultProps = {
  text: '',
  onChange: () => {}
}

export default TextArea;
