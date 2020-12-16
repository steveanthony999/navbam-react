import { useState } from 'react';

const CodeText = ({ setNavBgText, id, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    left: isOpen ? '0' : '-300px',
  };

  const handleClick = (x) => {
    if (x === 'css-code') {
      if (isOpen === false) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
  };

  return (
    <div className='code-box-container' id={id} style={style}>
      <div className='code-box-header' onClick={() => handleClick(id)}>
        <h3>{title}</h3>
      </div>
      <div className='code-box-body'>
        <textarea
          value={`
nav { 
    background-color: ${setNavBgText} 
}`}
          className='code-box'
          readOnly
        />
      </div>
      <div className='code-box-footer'></div>
    </div>
  );
};

export default CodeText;
