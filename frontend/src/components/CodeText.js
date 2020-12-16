import { useState } from 'react';

const CodeText = () => {
  const [code, setCode] = useState({
    mainCode: 'Hello World',
    varText: '#ff0000',
  });

  const [text, setText] = useState();

  const displayCode = (e) => {
    // setText(e);
    // setCode({ ...code, varText: e });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCode({ ...code, varText: text });
    // displayCode(code);
    displayCode(code.varText);
  };

  const handleChange = (e) => {
    // setText(e);
    setCode({ ...code, varText: e });
  };

  return (
    <>
      <input type='text' onChange={(e) => handleChange(e.target.value)} />
      <textarea
        value={`Hello ${code.mainCode}, today I am submitting: ${code.varText}`}
        id='html-code'
        className='code-box'
      />
    </>
  );
};

export default CodeText;
