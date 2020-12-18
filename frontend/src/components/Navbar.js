import { Link } from 'react-router-dom';

const Navbar = ({ navBg, linkColor, navbarPosition, navbarWidth, navbarHeight, navbarViewWidth }) => {
  const navStyle = {
    width: navbarViewWidth,
    background: navBg,
    position: navbarPosition,
    left: navbarPosition === 'fixed' ? '50%' : '0',
    transform: navbarPosition === 'fixed' ? 'translateX(-50.05%)' : 'translateX(-0.025%)',
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
    </nav>
  );
};

export default Navbar;
