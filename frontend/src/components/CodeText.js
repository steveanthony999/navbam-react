import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const CodeText = ({ setNavBgText, id, title, textSelectId }) => {
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

  const selectAllText = (e) => {
    if (e === 'css-select') {
      const p = document.getElementById(e);
      p.select();
      document.execCommand('copy');
    } else {
      console.log('p');
    }
  };

  return (
    <div className='code-box-container' id={id} style={style}>
      <div className='code-box-header' onClick={() => handleClick(id)}>
        <h3>{title}</h3>
      </div>
      <div className='code-box-body'>
        <textarea
          id={textSelectId}
          value={`nav { 
    background-color: ${setNavBgText} 
}`}
          className='code-box'
          readOnly
        />
      </div>
      <div className='code-box-footer'>
        <FontAwesomeIcon icon={faCopy} size='2x' onClick={() => selectAllText(textSelectId)} />
      </div>
    </div>
  );
};

export default CodeText;
