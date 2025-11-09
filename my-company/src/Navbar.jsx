import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        padding: '12px 20px',
        backgroundColor: '#0b3d91',
        color: 'white'
      }}
    >
      <span style={{ fontWeight: 'bold', marginRight: '12px' }}>My Company</span>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
