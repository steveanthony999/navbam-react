import { useState } from 'react';
import Navbar from './Navbar';
import CodeText from './CodeText';
import { ChromePicker } from 'react-color';
import { Radio } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';

const Builder = () => {
  const [radio, setRadio] = useState();

  const [colors, setColors] = useState({
    background: '#cccccc',
    navBackground: '#333333',
    linkColor: '#ffffff',
  });

  const [storedColors, setStoredColors] = useState({
    navBackground: '#333333',
  });

  const [colorPicker, setColorPicker] = useState(false);

  const style = {
    background: colors.background,
  };

  const handleColorChange = (color) => {
    if (radio === 'bgColor') {
      setColors({ ...colors, background: color.hex });
    } else if (radio === 'navBgColor') {
      setColors({ ...colors, navBackground: color.hex });
    } else if (radio === 'linkColor') {
      setColors({ ...colors, linkColor: color.hex });
    }
  };

  const handleClick = (e) => {
    if (e) {
      setColorPicker(true);
    } else {
      console.log('no');
    }
  };

  const handleClose = () => {
    setColorPicker(false);
  };

  const handleRadio = (x) => {
    setRadio(x);
    if (x === 'transparentNavBg') {
      setStoredColors({ ...colors, navBackground: colors.navBackground });
      setColors({ ...colors, navBackground: 'transparent' });
    } else if (x === 'navBgColor') {
      setColors({ ...colors, navBackground: storedColors.navBackground });
    }
  };

  const popover = {
    position: 'absolute',
    bottom: '0',
    right: '0',
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
    <>
      <Navbar navBg={colors.navBackground} linkColor={colors.linkColor} />
      <div style={style} id='builder'>
        <div id='attributes-window'>
          {/* HEADER */}
          {/* HEADER */}
          {/* HEADER */}
          <div id='attributes-header'>
            <h2>Designer</h2>
          </div>
          {/* BODY */}
          {/* BODY */}
          {/* BODY */}
          <div id='attributes-body'>
            <Radio
              name='component'
              value='bgColor'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('bgColor')}
            >
              Page Background Color
            </Radio>
            <Radio
              name='component'
              value='navBgColor'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('navBgColor')}
            >
              Navbar Background Color
            </Radio>
            <Radio
              name='component'
              value='transparentNavBg'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('transparentNavBg')}
            >
              Transparent Navbar
            </Radio>
            <Radio
              name='component'
              value='linkColor'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('linkColor')}
            >
              Links Color
            </Radio>
          </div>
          {/* FOOTER */}
          {/* FOOTER */}
          {/* FOOTER */}
          <div id='attributes-footer'>
            <div></div>
            <button className='circle-btn' onClick={() => handleClick(radio)} />
            {colorPicker ? (
              <div style={popover}>
                <div style={cover} onClick={handleClose} />
                <ChromePicker
                  color={
                    radio === 'bgColor'
                      ? colors.background
                      : radio === 'navBgColor'
                      ? colors.navBackground
                      : colors.linkColor
                  }
                  onChange={handleColorChange}
                  disableAlpha={true}
                />
              </div>
            ) : null}
          </div>
        </div>

        {/* TEXTAREA */}
        {/* TEXTAREA */}
        {/* TEXTAREA */}
        <CodeText />
      </div>
    </>
  );
};

export default Builder;
