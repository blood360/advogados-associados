import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar-container'>
            <div className='navbar-logo'>
                {/*Colocar o logo aqui*/}
                <a href="/">Advocacia [NOME]</a>
            </div>
            <ul className='navbar-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/advogada">Advogada Fundadora</a></li>
                <li><a href="especialidades">Especialidades</a></li>
                <li><a href="/servicos">Serviços</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
            <div className='navbar-actions'>
                {/*Icone do whatsapp visivel mas clicavel após o pagamento*/}
                <a href="#" className='whatsapp-link'>Whatsapp</a>
                <a href="/agendar" className='schedule-button'>Agendar Consulta</a>
                <a href="/login" className='login-link'>Entrar</a>
            </div>
        </nav>
    );
}

export default Navbar;