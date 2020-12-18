import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ navBg, linkColor, navbarPosition, navbarWidth, navbarHeight, navbarViewWidth, linkHoverState }) => {
  //   const [isHover, setIsHover] = useState('none');

  const navStyle = {
    width: navbarViewWidth,
    background: navBg,
    position: navbarPosition,
    left: navbarPosition === 'fixed' ? '50%' : '0',
    transform: navbarPosition === 'fixed' ? 'translateX(-50.05%)' : 'translateX(-0.025%)',
  };

  const linkHover = (e) => {
    if (linkHoverState === 'none') {
      e.target.classList.remove('toggled-hover');
    } else if (linkHoverState === 'scale') {
      e.target.classList.add('toggled-hover');
    }
  };

  const linkHoverExit = (e) => {
    if (linkHoverState === 'none') {
      //   setIsHover('none');
    } else if (linkHoverState === 'scale') {
      //
    }
  };

  const innerNavStyle = {
    width: navbarWidth,
    padding: `${navbarHeight} 0`,
    transition: '0.4s',
  };

  const linkStyle = {
    color: linkColor,
  };

  return (
    <nav id='navbar' style={navStyle}>
      <div id='nav-container' style={innerNavStyle}>
        <div id='nav-logo'>
          <Link to='/' style={linkStyle}>
            Nav<span>Bam</span>
          </Link>
        </div>
        <div id='nav-links'>
          <Link to='/about' style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkHoverExit}>
            About
          </Link>
          <Link to='/blog' style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkHoverExit}>
            Blog
          </Link>
          <Link to='/pricing' style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkHoverExit}>
            Pricing
          </Link>
          <Link to='/contact' style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkHoverExit}>
            Contact
          </Link>
          <Link to='/shop' style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkHoverExit}>
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
