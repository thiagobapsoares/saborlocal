import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormsCadastro() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="id_produtoartesanato">
        <Form.Label>Nome do Produto:</Form.Label>
        <Form.Control type="email" placeholder="Insira o nome do produto" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="descrição">
        <Form.Label>Descrição do Produto:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Insira a descrição do produto"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="artesão">
        <Form.Label>Artesão:</Form.Label>
        <Form.Control type="email" placeholder="Insira o nome do artesão" />
      </Form.Group>
      <div class="mb-3 form-group col-md-2">
        <label for="inputDataCriacao">Data de Criação</label>
        <input
          type="date"
          class="form-control"
          id="inputDataCriacao"
        ></input>
      </div>
      <Form.Group className="mb-3" controlId="quantidadeestoque">
        <Form.Label>Quantidade de Estoque</Form.Label>
        <Form.Select>
          <option>Selecione...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Verificar dados!" />
        <Button variant="primary">Enviar!</Button>
      </Form.Group>
    </Form>
  );
}

export default FormsCadastro;
