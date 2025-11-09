import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#004080',
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        Home
      </Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        About
      </Link>
      <Link to="/services" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        Services
      </Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
