'use strict'

import React from 'react'

export default props => (
    <section className="foo how_it_works">
      <div className="container">
        <div className="wrapper-flex how_it_works">
          <h3 className="title_default clearflex">Como funciona?</h3>
          <h4 className="subtitle_default clearflex">É mais fácil do que você imagina</h4>
          <div className="flexchild calendar">
            <h5 className="title">Agendamento no mesmo dia</h5>
            <p className="description">Só com o Bfy.me você marcar serviços no mesmo dia de solicitação</p>
          </div>
          <div className="flexchild location">
            <h5 className="title">Atendimento Delivery</h5>
            <p className="description">Você pode agendar seu serviço em qualquer localidade da capital de São Paulo e região</p>
          </div>
          <div className="flexchild professional">
            <h5 className="title">Profissionais qualificados</h5>
            <p className="description">Os profissionais passam por uma triagem para garantir qualidade em seus atendimentos</p>
          </div>
          <div className="flexchild price">
            <h5 className="title">Preços de mercado</h5>
            <p className="description">Praticamos os preços de mercado para que você use cada vez mais nossa plataforma</p>
          </div>
        </div>
      </div>
    </section>   
)