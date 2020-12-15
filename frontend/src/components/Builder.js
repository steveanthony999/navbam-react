import { useState } from 'react';
import { ChromePicker } from 'react-color';

const Builder = () => {
  const [bgColor, setBgColor] = useState({
    background: '#ffffff',
  });

  const [colorPicker, setColorPicker] = useState(false);

  const style = {
    width: '100%',
    height: '100%',
    background: bgColor.background,
  };

  const handleBgColorChange = (color) => {
    setBgColor({ background: color.hex });
  };

  const handleClick = () => {
    setColorPicker(true);
  };

  const handleClose = () => {
    setColorPicker(false);
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
    <div style={style}>
      <button className='circle-btn' onClick={handleClick} />
      {colorPicker ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker color={bgColor.background} onChange={handleBgColorChange} />
        </div>
      ) : null}
    </div>
  );
};

export default Builder;
