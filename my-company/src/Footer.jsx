function Footer() {
  return (
    <footer
      style={{
        marginTop: '40px',
        padding: '12px 20px',
        backgroundColor: '#222',
        color: 'white',
        textAlign: 'center'
      }}
    >
      © {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer;
