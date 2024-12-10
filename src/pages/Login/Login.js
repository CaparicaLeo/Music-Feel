import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import do hook de navegação
import './style.css';
import facebook from "../../assets/facebook.png";
import gmail from "../../assets/gmail.png";
import logo from '../../assets/logosemfundoroxo.png';  

const Login = () => {
    const navigate = useNavigate(); // Inicializa o hook de navegação

    const handleLogin = () => {
        navigate('/courses'); // Redireciona diretamente para a rota "Courses"
    };

    return (
        <div className="login-container">
            <div className="logo">
                <img src={logo} alt="Logo do MusicFeel" />
            </div>

            <h2>LOGIN</h2>
            <form>
                <div className="input-group">
                    <label>Usuário:</label>
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                    />
                </div>

                <div className="input-group">
                    <label>Senha:</label>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                    />
                    <a href="#esqueceu">Esqueci minha senha</a>
                </div>

                {/* Botão que redireciona diretamente para /courses */}
                <button type="button" onClick={handleLogin}>
                    Entrar
                </button>
            </form>

            <div className="div-msg">
                <p>Não tem uma conta?</p> <a href="#naotem">Inscreva-se</a>
            </div>

            <div className="div-log">
                <p>Logar com</p>
                <div>
                    <img src={facebook} alt="Facebook" />
                    <img src={gmail} alt="E-mail" />
                </div>
            </div>
        </div>
    );
};

export default Login;
