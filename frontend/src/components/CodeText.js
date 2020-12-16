import { useState } from 'react';

const CodeText = ({ setNavBgText }) => {
  return (
    <>
      <textarea
        value={`
nav { 
    background-color: ${setNavBgText} 
}`}
        id='html-code'
        className='code-box'
        readOnly
      />
    </>
  );
};

export default CodeText;
