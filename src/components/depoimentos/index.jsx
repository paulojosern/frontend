'use strict'

import React from 'react';

export default props => (
    <section className="foo depositions">
        <div className="container">
        <div className="wrapper-flex depositions">
            <h3 className="title_default clearflex">Depoimentos</h3>
            <h4 className="subtitle_default clearflex">O que dizem dos nossos serviços</h4>
            <article className="flexchild item">
            <picture className="profile-img"><img src="images/profiles/beautiful-woman_3.jpg" alt=""/></picture>
            <p className="description">Usei o Bfy.me para fazer uma massagem relaxante e depilação. Amei o serviço, pois atendeu na minha casa e a profissional foi competente com seu trabalho.</p>
            <h5 className="author">Mariana Roussef - <span>São Paulo</span></h5>
            </article>
            <article className="flexchild item">
            <picture className="profile-img"><img src="images/profiles/beautiful-woman_2.jpg" alt=""/></picture>
            <p className="description">Usei o Bfy.me para fazer uma massagem relaxante e depilação. Amei o serviço, pois atendeu na minha casa e a profissional foi competente com seu trabalho.</p>
            <h5 className="author">Mariana Roussef - <span>São Paulo</span></h5>
            </article>
            <article className="flexchild item">
            <picture className="profile-img"><img src="images/profiles/beautiful-woman_3.jpg" alt=""/></picture>
            <p className="description">Usei o Bfy.me para fazer uma massagem relaxante e depilação. Amei o serviço, pois atendeu na minha casa e a profissional foi competente com seu trabalho.</p>
            <h5 className="author">Mariana Roussef - <span>São Paulo</span></h5>
            </article>
        </div>
        </div>
    </section>
)