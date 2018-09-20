'use strict'

import React from 'react'
import Agendamento from '../Agendamento'

export default props => (
    <div className="foo banner banner_default">
      <section className="main-banner">
        <div className="container">
          <div className="wrapper">
            <div className="featured">
              <h1 className="title_default title_banner">A sua beleza a <span>toda hora</span></h1>
            </div>
            <div className="banner-schedule">
              <h2 className="title">Não perca tempo e comece a usar agora</h2>
              <Agendamento />
            </div>
          </div>
        </div>
      </section>
    </div>
)