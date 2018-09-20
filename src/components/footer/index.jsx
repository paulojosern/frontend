'use strict'

import React from 'react'

export default props => (
    <footer className="foo footer">
      <div className="container">
        <div className="brand">
          <svg>
            <use xlinkHref="images/icons.svg#logo"></use>
          </svg>
        </div>
        <div className="social">
            <p className="description_mini">Conheça nossa plataforma e aproveite as vantagens de utilizar serviços delivery</p>
            <div className="icons">
                <a className="social-link" href="#" title="Facebook">
                    <img src="images/icons/icon-facebook.svg" alt="Facebook" />
                </a>
                <a className="social-link" href="#" title="Instagram">
                    <img src="images/icons/icon-instagram.svg" alt="Instagram"/>
                </a>
                <a className="social-link" href="#" title="Twitter">
                    <img src="images/icons/icon-twitter.svg" alt="Twitter"/>
                </a>
                <a className="social-link" href="#" title="Google Plus">
                    <img src="images/icons/icon-google.svg" alt="Google Plus"/>
                </a>
            </div>
            <span>Bfy.me - Todos os direitos reservados 2017</span>
        </div>
      </div>
    </footer>
)