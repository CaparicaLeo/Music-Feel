import React from 'react';
import './style.css';
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

const Footer = () => (
  <footer className="footer">
    <div className='bloco'>
      <p>Empresa</p>
      <ul>
        <li className='footer-links'><a href="#sobre">Sobre</a></li>
        <li className='footer-links'><a href="#empregos">Empregos</a></li>
      </ul>
    </div>
    <div className='bloco'>
      <p>Links Úteis</p>
      <ul>
        <li className='footer-links'><a href='#suporte'>Suporte</a></li>
      </ul>
    </div>
    <div className='bloco'>
      <p>Planos</p>
      <ul>
        <li>
          Plano Individual
        </li>
        <li>
          Plano Banda
        </li>
        <li>
          Plano Duo
        </li>
      </ul>
    </div>
    <div className='div-links'>
      <p>2024 Music Feel. Todos os direitos reservados.</p>
      <div className="div-imgs">
        {/* Links para as redes sociais */}
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="YouTube" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
