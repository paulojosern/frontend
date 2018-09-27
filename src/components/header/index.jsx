'use strict'

import React from 'react'
import { NavLink } from "react-router-dom";
import Menu from './Menu'

const Header = () => {
    const openMenu = () => {
        let link = document.querySelector('nav');
        let hamburger = document.querySelector('.icon-hamburguer');
        
        if (link.classList.contains("open")) {
            link.classList.remove("open");
            hamburger.classList.remove("icon-hover")
        } else {
            link.classList.add("open");
            hamburger.classList.add("icon-hover")
        }
    }

    return (
        <header>
            <div className="container-header">
                <Menu  />
                <NavLink to="/login" className="btn btn-login" >Entrar</NavLink>
                <NavLink to="/" className="brand">
                    <svg>
                        <use xlinkHref="images/icons.svg#logo" title="A sua beleza a toda hora"></use>
                    </svg>
                </NavLink>
                <button onClick={openMenu} 
                className="label-login"><span className="icon-hamburguer"></span></button>
            </div>
        </header>
    )
}

export default Header