import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({
  navBg,
  linkColor,
  navbarPosition,
  navbarWidth,
  navbarHeight,
  navbarViewWidth,
  linkHoverState,
  hoverLinkColor,
  mobileNavDrawerBackground,
}) => {
  const [navOpen, setNavOpen] = useState(false);

  const navStyle = {
    width: navbarViewWidth,
    background: navBg,
    position: navbarPosition,
    left: navbarPosition === 'fixed' ? '50%' : '0',
    transform: navbarPosition === 'fixed' ? 'translateX(-50.05%)' : 'translateX(-0.025%)',
  };

  const linkHover = (e) => {
    if (linkHoverState === 'none') {
      e.target.classList.remove('toggled-hover-scale');
      e.target.classList.remove('toggled-hover-color');
    } else if (linkHoverState === 'scale') {
      e.target.classList.add('toggled-hover-scale');
      e.target.classList.remove('toggled-hover-color');
    } else if (linkHoverState === 'color') {
      e.target.classList.remove('toggled-hover-scale');
      e.target.classList.add('toggled-hover-color');
      e.target.style.color = hoverLinkColor;
    } else if (linkHoverState === 'scaleandcolor') {
      e.target.classList.add('toggled-hover-scale');
      e.target.classList.add('toggled-hover-color');
      e.target.style.color = hoverLinkColor;
    }
  };

  const linkHoverExit = (e) => {
    if (linkHoverState === 'color') {
      e.target.style.color = linkColor;
    } else if (linkHoverState === 'scaleandcolor') {
      e.target.style.color = linkColor;
    }
  };

  const toggleNavIcon = (e) => {
    document.getElementById('nav-icon').classList.toggle('open');
    if (navOpen === true) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
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

  const navIconSpan = {
    backgroundColor: linkColor,
  };

  const mobileStyle = {
    display: navbarViewWidth === '480px' ? 'block' : 'none',
  };

  const desktopStyle = {
    display: navbarViewWidth === '480px' ? 'none' : 'block',
  };

  const mobileMenuStyle = {
    transform: navOpen ? 'scaleY(1) translateX(-50%)' : 'scaleY(0) translateX(-50%)',
    backgroundColor: mobileNavDrawerBackground,
  };

  return (
    <>
      <nav id='navbar' style={navStyle}>
        <div id='nav-container' style={innerNavStyle}>
          <div id='nav-logo'>
            <Link to='/' style={linkStyle}>
              Nav<span>Bam</span>
            </Link>
          </div>
          <div id='nav-links' style={desktopStyle}>
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
          {/* MOBILE */}
          {/* NAV ICON */}
          <div id='nav-links-mobile' style={mobileStyle}>
            <div id='nav-icon' onClick={toggleNavIcon}>
              <span className='nav-icon-span' style={navIconSpan}></span>
              <span className='nav-icon-span' style={navIconSpan}></span>
              <span className='nav-icon-span' style={navIconSpan}></span>
              <span className='nav-icon-span' style={navIconSpan}></span>
            </div>
          </div>
        </div>
      </nav>
      {/* MOBILE MENU */}
      <div id='nav-mobile-menu' style={mobileMenuStyle}>
        <div id='nav-mobile-links'>
          <Link to='/about' style={linkStyle}>
            About
          </Link>
          <Link to='/blog' style={linkStyle}>
            Blog
          </Link>
          <Link to='/pricing' style={linkStyle}>
            Pricing
          </Link>
          <Link to='/contact' style={linkStyle}>
            Contact
          </Link>
          <Link to='/shop' style={linkStyle}>
            Shop
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
