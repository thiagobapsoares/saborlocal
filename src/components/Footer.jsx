import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className='containerrodape'>
          <Nav className="ms-auto">
            <p className='footer' href="/">Copyright &#169; Thiago Baptista da Silva Soares</p>
          </Nav>
        </div>
      </Navbar>
    </>
  );
}

export default Footer;