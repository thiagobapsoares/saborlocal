import NavProjeto from "../components/NavProjeto";
import Cabecalho from "../components/Cabecalho";
import Footer from "../components/Footer";
import Forms from "../components/usuario";
import "../App.css";

function Login() {
  return (
    <div>
      <Cabecalho />
      <div>
        <NavProjeto />
      </div>
      <div>
        <Forms />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Login;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
