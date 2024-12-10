import React from 'react';
import './style.css';  // Estilos globais
import Footer from '../../components/Footer/Footer';  // Corrigindo o caminho para Footer.js
import logo from '../../assets/logosemfundoroxo.png';

const Home = () => (
  <div className="home">
    {/* Logo - Alterando para uma tag div correta */}
    <div className="logo">
      <img src={logo} alt="Logo do MusicFeel" />
    </div>
    <section id="comecar" className="intro-section">
      <h1>Bem-vindo ao MusicFeel!</h1>
      <p>
        Aqui, a música ganha vida em suas mãos! Aprenda a tocar instrumentos
        musicais com lições interativas, dicas práticas e uma comunidade
        apaixonada por música.
      </p>
    </section>
    <section id="planos" className="plans-section">
      <div className="buttons">
        <button className="button-primary">Comece agora</button>
        <button className="button-secondary">Visualizar todos os planos</button>
      </div>
      <h2>Planos acessíveis para qualquer situação. Escolha o plano ideal e aprenda a tocar o instrumento dos seus sonhos.
      Vários métodos de pagamento. Cancele quando quiser.</h2>
    </section>
    <Footer />
  </div>
);

export default Home;
