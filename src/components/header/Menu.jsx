'use strict'

import React from 'react'

const Menu = () => (
    <nav className="menu">
        <ul className="menu-navegation">
            <li className="item hidden-lg"> <a href="login.html">Entrar</a></li>
            <li className="item servicos">
                <a href="#dropdown" className="LinkDropdown">Serviços
                    <div className="icon-arrow"></div>
                    <div id="dropdown">
                        <a className="menu-link-dropdown" href="servicos.html">Maquiagem</a>
                        <a className="menu-link-dropdown" href="servicos.html">Massagem</a>
                        <a className="menu-link-dropdown" href="servicos.html">Manicure</a>
                        <a className="menu-link-dropdown" href="servicos.html">Podologia</a>
                        <a className="menu-link-dropdown" href="servicos.html">Penteado</a>
                        <a className="menu-link-dropdown" href="servicos.html">Maquiagem</a>
                    </div>
                </a>
            </li>
            <li className="item"><a href="duvidas.html">Dúvidas</a></li>
            <li className="item"><a href="blog.php">Blog</a></li>
            <li className="item"><a href="profissional.html">Seja um profissional</a></li>
        </ul>
    </nav>

)

export default Menu