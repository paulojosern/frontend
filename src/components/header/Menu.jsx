'use strict'

import React from 'react'
import { NavLink } from "react-router-dom";

const Menu = (props) => (
    <nav className="menu">
        <ul className="menu-navegation">
            <li className="item hidden-lg"> <a href="login.html">Entrar</a></li>
            <li className="item servicos">
                <NavLink className="LinkDropdown" to="/servicos">
                    Servicos <div className="icon-arrow"></div>
                </NavLink>
                <ul>
                    <li className="menu-link-dropdown">Maquiagem</li>
                    <li className="menu-link-dropdown">Massagem</li>
                    <li className="menu-link-dropdown">Manicure</li>
                    <li className="menu-link-dropdown">Podologia</li>
                    <li className="menu-link-dropdown">Penteado</li>
                    <li className="menu-link-dropdown">Maquiagem</li>
                </ul>
            </li>
            <li className="item"><NavLink to="/duvidas">Dúvidas</NavLink></li>
            <li className="item"><a href="blog.php">Blog</a></li>
            <li className="item"><NavLink to="/profissional">Profissional</NavLink></li>
        </ul>
    </nav>

)

export default Menu