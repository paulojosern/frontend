'use sctrict'

import React from 'react'
import List from './List'
import Header from '../components/header'
import Footer from '../components/footer'

const Servicos = ({ servicosList, filterList }) =>  (
    <div>
        <Header />
        
        <div className="foo banner_default banner-services">
            <section className="main-banner">
                <h2 className="title_default title_banner">Conheça os nossos serviços de beleza</h2>
                <h3 className="subtitle_default subtitle_banner">Há uma gama de serviços diversificados para você conhecer!</h3>
            </section>
        </div>
        <section className="services">
            <div className="services-list">
                <form onSubmit={e => e.preventDefault()}>
                    <fieldset className="form-group">
                    <input type="text" className="input-search form-control form-control-lg" placeholder="Procure o serviço..." onChange={filterList}/>
                    </fieldset>
                </form>
                <List items={servicosList}/>       
            </div>
        </section>
        <Footer />
    </div>
)       

export default Servicos  

    
