import React from 'react';
import { Link } from 'react-router-dom';  // Importando o Link do react-router-dom
import './style.css'; // Arquivo de estilos
import guitar from '../../assets/violão.png';
import bass from '../../assets/baixo.png';
import piano from '../../assets/piano.jpg';
import violin from '../../assets/violino.jpg';

const Courses = () => {
    return (
        <div className="courses-container">
            <div className="logo">
                <h1>MusicFeel</h1>
            </div>
            <p className="intro-text">
                Escolha o instrumento dos seus sonhos e comece sua jornada musical hoje mesmo!
            </p>
            <div className="instrument-grid">
                <div className="instrument-card" data-instrument="Guitarra">
                    <Link to="/guitar">  {/* Tornando o cartão de Guitarra um link */}
                        <img src={guitar} alt="Guitarra" />
                        <span className="instrument-name">Guitarra</span>
                    </Link>
                </div>
                <div className="instrument-card" data-instrument="Baixo">
                    <Link to="/bass">  {/* Tornando o cartão de Baixo um link */}
                        <img src={bass} alt="Baixo" />
                        <span className="instrument-name">Baixo</span>
                    </Link>
                </div>
                <div className="instrument-card" data-instrument="Piano">
                    <Link to="/piano">  {/* Tornando o cartão de Piano um link */}
                        <img src={piano} alt="Piano" />
                        <span className="instrument-name">Piano</span>
                    </Link>
                </div>
                <div className="instrument-card" data-instrument="Violino">
                    <Link to="/violin">  {/* Tornando o cartão de Violino um link */}
                        <img src={violin} alt="Violino" />
                        <span className="instrument-name">Violino</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Courses;
