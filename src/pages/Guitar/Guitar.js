import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 
import aula1Image from '../../assets/violão 2.jpg'; 
import aula2Image from '../../assets/violão 3.jpg';
import aula3Image from '../../assets/violão 4.jpg';
import aula4Image from '../../assets/violão 5.jpg';
import logo from '../../assets/logosemfundoroxo.png';

const Guitar = () => {
  return (
    <div className="guitar-container">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo do MusicFeel" />
      </div>
      
      <h1>Aulas de Violão</h1>
      <p>
        Bem-vindo ao curso de violão para iniciantes! O violão é um dos
        instrumentos mais versáteis e populares no mundo da música, usado em
        diversos gêneros e estilos. Neste curso, você será guiado passo a passo
        pelos fundamentos essenciais, começando com a postura correta, os
        primeiros acordes, ritmos básicos e técnicas que farão você tocar suas
        primeiras músicas em pouco tempo.
      </p>
      <div className="lessons-grid">
        <div className="lesson-card">
          <img src={aula1Image} alt="Aula 1: Introdução ao Violão" />
          <h3>Aula 1: Introdução ao Violão e Primeiros Acordes</h3>
        </div>
        <div className="lesson-card">
          <img src={aula2Image} alt="Aula 2: Ritmos Básicos e Mudança de Acordes" />
          <h3>Aula 2: Ritmos Básicos e Mudança de Acordes</h3>
        </div>
        <div className="lesson-card">
          <img src={aula3Image} alt="Aula 3: Dedilhado & Técnicas de Mão Direita" />
          <h3>Aula 3: Dedilhado & Técnicas de Mão Direita</h3>
        </div>
        <div className="lesson-card">
          <img src={aula4Image} alt="Aula 4: Montando sua Primeira Música Simples" />
          <h3>Aula 4: Montando sua Primeira Música Simples</h3>
        </div>
      </div>
    </div>
  );
};

export default Guitar;
