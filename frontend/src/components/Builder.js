import { useState } from 'react';
import Navbar from './Navbar';
import { ChromePicker } from 'react-color';
import { Radio, useRadioState } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

const Builder = () => {
  const radio = useRadioState();

  const [bgColor, setBgColor] = useState({
    background: '#ffffff',
    navBackground: '#333333',
  });
  const [colorPicker, setColorPicker] = useState(false);

  const style = {
    background: bgColor.background,
  };

  const handleBgColorChange = (color) => {
    if (radio.state === 'bgColor') {
      setBgColor({ ...bgColor, background: color.hex });
    } else if (radio.state === 'navBgColor') {
      setBgColor({ ...bgColor, navBackground: color.hex });
    }
  };

  const handleClick = (e) => {
    if (e === 'bgColor') {
      setColorPicker(true);
    } else if (e === 'navBgColor') {
      setColorPicker(true);
    } else {
      console.log('nada');
    }
  };

  const handleClose = (e) => {
    if (e === 'bgColor') {
      setColorPicker(false);
    } else if (e === 'navBgColor') {
      setColorPicker(false);
    }
  };

  const popover = {
    position: 'absolute',
    zIndex: '2',
  };

  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };

  return (
    <div style={style} id='builder'>
      <Navbar navBg={bgColor.navBackground} />
      {/* Change Background Color */}
      <button className='circle-btn' onClick={() => handleClick(radio.state)} />
      {colorPicker ? (
        <div style={popover}>
          <div style={cover} onClick={() => handleClose(radio.state)} />
          <ChromePicker color={bgColor.background} onChange={handleBgColorChange} disableAlpha={true} />
        </div>
      ) : null}
      <Radio
        name='component'
        value='bgColor'
        shape='square'
        variant='fill'
        animation='jelly'
        color='info'
        bigger
        {...radio}
      >
        Background Color
      </Radio>
      <Radio
        name='component'
        value='navBgColor'
        shape='square'
        variant='fill'
        animation='jelly'
        color='info'
        bigger
        {...radio}
      >
        Navbar Background Color
      </Radio>
    </div>
  );
};

export default Builder;
