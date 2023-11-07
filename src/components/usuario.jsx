import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Forms() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Endereço de e-mail:</Form.Label>
        <Form.Control type="email" placeholder="thiago@exemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="senha">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="Password" placeholder="Inserir senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
             <Button variant="primary">Enviar!</Button>
      </Form.Group>
    </Form>
  );
}

export default Forms;

