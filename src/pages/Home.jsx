import NavProjeto from "../components/NavProjeto";
import Cabecalho from "../components/Cabecalho";
import Carrossel from "../components/Carrossel";
import Descubra from "../components/Descubra";
import Footer from "../components/Footer";
import "../App.css";

function Home() {
  return (
    <div calss="cabecalho">
      <Cabecalho />
      <div>
        <NavProjeto />
        <div>
          <Carrossel />
          <div className="main">
          <div className="home">
            <h1 class="h1-home">VEJA NOSSOS PRODUTOS REGIONAIS!</h1>
            <p class="p-home">Nosso site é uma celebração da riqueza e diversidade da cultura local, destacando a conexão única entre a comida regional e o artesanato. Aqui, exploramos a história, os sabores e as histórias por trás dos produtos locais, artesanato e pratos tradicionais que fazem parte da identidade de nossa região. Convidamos você a mergulhar na cultura local, conhecendo os segredos culinários e artísticos que são transmitidos de geração em geração. Nossa missão é destacar os aspectos únicos de nossa região e promover a apreciação de produtos feitos à mão e da comida local, que são verdadeiras joias culturais.</p>
          
          <section>
          <div className="d-flex flex-column justify-content-center align-items-center taxas">
              <Descubra
                titulo="Produtos Locais"
                paragrafo="Compre produtos que são feitos em nossa região!"
                descubra="src/assets/descubra.jpg"
              />
          </div>
          </section>
          </div>
          <div><br />
            <Footer />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
