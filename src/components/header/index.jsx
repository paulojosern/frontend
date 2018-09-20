'use strict'

import React from 'react'
import Menu from './Menu'

const Header = () => (
    <header>
        <div className="container-header">
            <Menu />
            <a className="btn btn-login" href="login.html">Entrar</a>
            <a className="brand" href="index.html">
                <svg>
                    <use xlinkHref="images/icons.svg#logo" title="A sua beleza a toda hora"></use>
                </svg>
            </a>
            <input type="checkbox" id="label-login" name="login"/>
            <label className="label-login" htmlFor="label-login"><span className="icon-hamburguer"></span></label>
        </div>
    </header>
)

export default Header