'use strict'

import React from 'react'
import { NavLink } from "react-router-dom";

const Login = ({ servicos }) => (
    console.log(servicos),
    <div className="foo">
        <div className="foo-login"></div>
        <div className="container">
            <div className="modal-login">
                <div className="modal-image">
                    <h1 className="title">Entre e aproveite nossos serviços</h1>
                    <h2 className="subtitle">Sua beleza a toda hora</h2>
                </div>
                <form className="modal-form" action="login" method="post">
                <h3 className="title">Login</h3>
                <fieldset className="login-field">
                    <label className="login-label" htmlFor="txtUsuario">Usuário</label>
                    <input className="login-input" type="text" name="txtUsuario" id="txtUsuario" placeholder="Digite seu usuário" required />
                </fieldset>
                <fieldset className="login-field">
                    <label className="login-label" htmlFor="senha">Senha</label>
                    <input className="login-input" type="password" name="senha" id="senha" placeholder="Digite sua senha" required />>
                </fieldset>
                <button className="btn"><a href="account.html">Entrar</a></button><a className="forgot-psw" href="#">Esqueci minha senha!</a><span className="do-account">Ainda não tem cadastro? <a href="cadastro.html">Clique aqui</a></span>
                </form>
            </div>
            <NavLink to="/" className="btn btn-back-login" >Voltar</NavLink>
        </div>
    </div>   
)

export default Login