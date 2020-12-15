import { Link } from 'react-router-dom';

const Navbar = ({ navBg }) => {
  const style = {
    background: navBg,
  };

  return (
    <nav id='navbar' style={style}>
      <div id='nav-container'>
        <div id='nav-logo'>
          <Link to='/'>
            Nav<span>Bam</span>
          </Link>
        </div>
      </div>
      <div id='nav-links'>
        <Link>About</Link>
        <Link>Blog</Link>
        <Link>Pricing</Link>
        <Link>Contact</Link>
        <Link>Shop</Link>
      </div>
    </nav>
  );
};

export default Navbar;
