import { useState, useEffect } from 'react';
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

  const [navbarPosition, setNavbarPosition] = useState('static');
  const [navbarWidth, setNavbarWidth] = useState('100%');
  const [navbarHeight, setNavbarHeight] = useState('0');
  const [storedNavbarHeight, setStoredNavbarHeight] = useState('0');
  const [navbarViewWidth, setNavbarViewWidth] = useState('100%');
  const [navbarShrink, setNavbarShrink] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [linkHoverState, setLinkHoverState] = useState('none');

  const style = {
    background: colors.background,
  };

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.pageYOffset);
      if (navbarShrink === true && navbarPosition === 'fixed') {
        if (scrollY > 50) {
          setNavbarHeight('0');
        } else if (scrollY < 50) {
          setNavbarHeight(storedNavbarHeight);
        }
      } else {
        setNavbarHeight(storedNavbarHeight);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollY, navbarPosition, navbarShrink, storedNavbarHeight]);

  const handleColorChange = (color) => {
    setStoredColors({ ...storedColors, navBackground: colors.navBackground });
    if (radio === 'bgColor') {
      setColors({ ...colors, background: color.hex });
      //   document.getElementById('root').style.backgroundColor = colors.background;
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
    // setStoredColors({ ...storedColors, navBackground: colors.navBackground });
    setRadio(x);
    if (x === 'transparentNavBg') {
      //   setStoredColors({ ...storedColors, navBackground: colors.navBackground });
      setColors({ ...colors, navBackground: 'transparent' });
    } else if (x === 'navBgColor') {
      setColors({ ...colors, navBackground: storedColors.navBackground });
    } else if (x === 'navbarPositionFixed') {
      setNavbarPosition('fixed');
    } else if (x === 'navbarPositionStatic') {
      setNavbarPosition('static');
    } else if (x === 'navbarWidthWide') {
      setNavbarWidth('100%');
    } else if (x === 'navbarWidthContained') {
      setNavbarWidth('1100px');
    } else if (x === 'navbarHeightShort') {
      setNavbarHeight('0');
      setStoredNavbarHeight('0');
    } else if (x === 'navbarHeightMedium') {
      setNavbarHeight('1rem');
      setStoredNavbarHeight('1rem');
    } else if (x === 'navbarHeightTall') {
      setNavbarHeight('2rem');
      setStoredNavbarHeight('2rem');
    } else if (x === 'viewWidthDesktop') {
      setNavbarViewWidth('100%');
    } else if (x === 'viewWidthTablet') {
      setNavbarViewWidth('768px');
    } else if (x === 'viewWidthMobile') {
      setNavbarViewWidth('480px');
    } else if (x === 'navbarShrinkOff') {
      setNavbarShrink(false);
      setNavbarHeight(storedNavbarHeight);
    } else if (x === 'navbarShrinkOn') {
      setNavbarShrink(true);
    } else if (x === 'linksHoverNone') {
      setLinkHoverState('none');
    } else if (x === 'linksHoverScale') {
      setLinkHoverState('scale');
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
      <Navbar
        navBg={colors.navBackground}
        linkColor={colors.linkColor}
        navbarPosition={navbarPosition}
        navbarWidth={navbarWidth}
        navbarHeight={navbarHeight}
        navbarViewWidth={navbarViewWidth}
        linkHoverState={linkHoverState}
      />
      <div style={style} id='builder'>
        {/* <div id='builder'> */}
        <div id='view-width'>
          <Radio
            name='viewWidth'
            value='viewWidthDesktop'
            shape='round'
            variant='fill'
            animation='jelly'
            color='info'
            bigger
            onChange={() => handleRadio('viewWidthDesktop')}
            defaultChecked
          >
            Desktop
          </Radio>
          <Radio
            name='viewWidth'
            value='viewWidthTablet'
            shape='round'
            variant='fill'
            animation='jelly'
            color='info'
            bigger
            onChange={() => handleRadio('viewWidthTablet')}
          >
            Tablet
          </Radio>
          <Radio
            name='viewWidth'
            value='viewWidthMobile'
            shape='round'
            variant='fill'
            animation='jelly'
            color='info'
            bigger
            onChange={() => handleRadio('viewWidthMobile')}
          >
            Mobile
          </Radio>
        </div>
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
            {/* ================= PAGE BACKGROUND COLOR */}
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
            {/* ================= NAVBAR BACKGROUND COLOR */}
            <div className='title-box'>
              <hr />
              <h6>NAVBAR BACKGROUND COLOR</h6>
              <hr />
            </div>
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
            {/* ================= NAVBAR POSITION */}
            <div className='title-box'>
              <hr />
              <h6>NAVBAR POSITION</h6>
              <hr />
            </div>
            <Radio
              name='navbarPosition'
              value='navbarPositionStatic'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('navbarPositionStatic')}
              defaultChecked
            >
              Navbar Position - Static
            </Radio>
            <Radio
              name='navbarPosition'
              value='navbarPositionFixed'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('navbarPositionFixed')}
            >
              Navbar Position - Fixed
            </Radio>
            {/* ================= INNER NAVBAR WIDTH */}
            <div className='title-box'>
              <hr />
              <h6>INNER NAVBAR WIDTH</h6>
              <hr />
            </div>
            <Radio
              name='navbarWidth'
              value='navbarWidthWide'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('navbarWidthWide')}
              defaultChecked
            >
              Navbar Width - Wide
            </Radio>
            <Radio
              name='navbarWidth'
              value='navbarWidthContained'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('navbarWidthContained')}
            >
              Navbar Width - Contained
            </Radio>
            {/* ================= NAVBAR HEIGHT */}
            <div className='title-box'>
              <hr />
              <h6>NAVBAR HEIGHT</h6>
              <hr />
            </div>
            <Radio
              name='navbarHeight'
              value='navbarHeightShort'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('navbarHeightShort')}
              defaultChecked
            >
              Navbar Height - Short
            </Radio>
            <Radio
              name='navbarHeight'
              value='navbarHeightMedium'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('navbarHeightMedium')}
            >
              Navbar Height - Medium
            </Radio>
            <Radio
              name='navbarHeight'
              value='navbarHeightTall'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('navbarHeightTall')}
            >
              Navbar Height - Tall
            </Radio>
            {/* ================= NAVBAR SHRINK ON SCROLL */}
            <div className='title-box'>
              <hr />
              <h6>NAVBAR SHRINK ON SCROLL</h6>
              <hr />
            </div>
            <Radio
              name='navbarShrink'
              value='navbarShrinkOff'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('navbarShrinkOff')}
              defaultChecked
            >
              Navbar Shrink - Off
            </Radio>
            <Radio
              name='navbarShrink'
              value='navbarShrinkOn'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('navbarShrinkOn')}
            >
              Navbar Shrink - On
            </Radio>
            {/* ================= LINKS COLOR */}
            <div className='title-box'>
              <hr />
              <h6>LINKS COLOR</h6>
              <hr />
            </div>
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
            {/* ================= LINKS HOVER EFFECTS */}
            <div className='title-box'>
              <hr />
              <h6>LINKS HOVER EFFECTS</h6>
              <hr />
            </div>
            <Radio
              name='linksHover'
              value='linksHoverNone'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('linksHoverNone')}
              defaultChecked
            >
              Links Hover - None
            </Radio>
            <Radio
              name='linksHover'
              value='linksHoverScale'
              shape='round'
              variant='fill'
              animation='jelly'
              color='info'
              bigger
              onChange={() => handleRadio('linksHoverScale')}
            >
              Links Hover - Scale
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
        <CodeText
          id={'html-code'}
          title={'HTML'}
          textSelectId={'html-select'}
          theCode={`<nav>
  <div id="nav-container">
    <div id="nav-logo">
      <!-- YOUR LOGO HERE -->
    </div>
    <div id="nav-links">
      <a href="#"><!-- YOUR LINKS --></a>
      <a href="#"><!-- WILL GO HERE --></a>
      <a href="#"><!-- ADD OR REMOVE --></a>
      <a href="#"><!-- AS MANY AS --></a>
      <a href="#"><!-- YOU'D LIKE --></a>
    </div>
    <div id="nav-links-mobile">
      <div id="nav-icon">
        <span class='nav-icon-span'></span>
        <span class='nav-icon-span'></span>
        <span class='nav-icon-span'></span>
        <span class='nav-icon-span'></span>
      </div>
    </div>
  </div>
  <div id="nav-mobile-menu">
    <div id="nav-mobile-links">
      <a href="#"><!-- THE SAME LINKS --></a>
      <a href="#"><!-- FROM ABOVE --></a>
      <a href="#"><!-- WILL GO HERE --></a>
      <a href="#"><!-- AS WELL --></a>
      <a href="#"><!-- YOUR LINKS --></a>
    </div>
  </div>
</nav>`}
        />

        <CodeText
          id={'css-code'}
          title={'CSS'}
          textSelectId={'css-select'}
          theCode={`nav { 
  background-color: ${colors.navBackground} 
  width: 100%;
  position: ${navbarPosition};
}

#nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${navbarWidth}; 
  margin: 0 auto; 
  padding: ${storedNavbarHeight} 0;
}`}
        />
        <CodeText
          id={'javascript-code'}
          title={'JAVASCRIPT'}
          textSelectId={'javascript-select'}
          theCode={
            navbarShrink
              ? `const nav = document.querySelector('nav');

window.onscroll = () => scrollNav();

function scrollNav() {
  if (window.pageYOffset > 50) {
    nav.style.padding = '0 32px';
  } else {
    nav.style.padding = '${storedNavbarHeight} 32px';
  }
}
          `
              : ''
          }
        />
      </div>
      <div id='section-2'></div>
    </>
  );
};

export default Builder;
