import { Link } from 'react-router-dom';

const Navbar = ({ navBg, linkColor, navbarPosition, navbarWidth }) => {
  const navStyle = {
    background: navBg,
    position: navbarPosition,
  };

  const innerNavStyle = {
    width: navbarWidth,
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
