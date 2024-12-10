import React, { useState } from 'react';
import './style.css';  // Arquivo de estilos (opcional, mas recomendado)
import facebook from "../../assets/facebook.png";
import gmail from "../../assets/gmail.png";
import logo from '../../assets/logosemfundoroxo.png';  

const Login = () => {
    const [email, setEmail] = useState(''); // Estado para armazenar o email
    const [password, setPassword] = useState(''); // Estado para armazenar a senha
    const [error, setError] = useState(''); // Estado para erros de login
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controle de login

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de recarregar a página

        // Aqui você pode colocar as credenciais que quiser (sem backend)
        const validEmail = 'user@example.com';
        const validPassword = '123456';

        // Verificando se as credenciais são válidas
        if (email === validEmail && password === validPassword) {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Credenciais inválidas');
        }
    };

    return (
        <><div className="logo">
            <img src={logo} alt="Logo do MusicFeel" />
        </div><div className="login-container">
                {isLoggedIn ? (
                    <h2>Bem-vindo, {email}!</h2> // Se o login for bem-sucedido
                ) : (
                    <>
                        <h2>LOGIN</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label>Usuário:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Atualiza o estado com o valor digitado
                                />
                            </div>

                            <div className="input-group">
                                <label>Senha:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // Atualiza o estado com o valor digitado
                                />
                                <a href='#esqueceu'>Esqueci minha senha</a>
                            </div>

                            <button type="submit">Entrar</button>
                            {error && <p className="error-message">{error}</p>} {/* Exibe erro, se houver */}
                        </form>
                    </>
                )}

                <div className='div-msg'>
                    <p>Não tem uma conta?</p> <a href='#naotem'>Inscreva-se</a>
                </div>

                <div className='div-log'>
                    <p>Logar com</p>
                    <div>
                        <img src={facebook} alt="Facebook" />
                        <img src={gmail} alt="E-mail" />
                    </div>
                </div>
            </div></>
    );
};

export default Login;
