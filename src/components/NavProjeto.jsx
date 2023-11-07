import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="/" className='text-light'>Sabor Local</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='md-auto'>
          <Nav.Link href="/" className='text-light'>Home</Nav.Link>
            <Nav.Link href="/Login" className='text-light'>Login</Nav.Link>
            <Nav.Link href="/CadastroProdutos" className='text-light'>Cadastro de Produtos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;