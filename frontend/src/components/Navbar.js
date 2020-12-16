import { Link } from 'react-router-dom';

const Navbar = ({ navBg, linkColor }) => {
  const navStyle = {
    background: navBg,
  };

  const linkStyle = {
    color: linkColor,
  };

  return (
    <nav id='navbar' style={navStyle}>
      <div id='nav-container'>
        <div id='nav-logo'>
          <Link to='/' style={linkStyle}>
            Nav<span>Bam</span>
          </Link>
        </div>
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
    </nav>
  );
};

export default Navbar;
