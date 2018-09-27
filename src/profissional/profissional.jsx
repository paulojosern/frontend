'use sctrict'

import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default props => (
    <div>
        <Header />
        <div className="foo banner_default banner_profissional">
        <section className="main-banner">
            <h2 className="title_default title_banner">Seja um Profissional Bfy.me agora mesmo</h2>
            <h3 className="subtitle_default subtitle_banner">Aqui você descobrirá uma nova forma de aumentar sua renda</h3>
        </section>
        </div>
        <section className="intro_profissional">
        <div className="banner_description">
            <h4 className="title">Descubra essa nova forma de ganhar uma <span>renda extra</span></h4>
            <p className="description">O Bfy.me é a forma mais prática, eficiênte e fácil de conseguir novos clientes e fidelizá-los. Com a nossa plataforma, você consegue fazer mais que você imagina com recursos fáceis, gratuitos e a toda hora.</p>
        </div>
        <div className="banner_image">
            <picture><img src="images/backgrounds/profissional_banner.jpg" alt=""/></picture>
        </div>
        </section>
        <section className="profissional">
        <div className="container">
            <h3 className="title_default clearflex">Como funciona para o profissional?</h3>
            <h4 className="subtitle_default clearflex">Processos simples que trazem uma renda extra</h4>
            <div className="item-profissional">
            <h5 className="title">Match</h5>
            <p className="description">Após um usuário pagar seu serviço, será feito uma requisição no nosso sistema para encontrar o profissional perfeito e caso você se encaixe no perfil buscado, receberá um match, ou seja, uma requisição do seu serviço.</p>
            </div>
            <div className="item-profissional">
            <h5 className="title">Ordem de Serviço</h5>
            <p className="description">Para facilitar a sua vida, você receberá uma ordem de serviço contendo todas as informações importantes para que esse serviço ocorra dentro do planejado. Não se preocupe, avisamos quando é gerado uma nova ordem de serviço.</p>
            </div>
            <div className="item-profissional">
            <h5 className="title">Comissão</h5>
            <p className="description">Nossos serviços tem preços fixos, pois queremos ser justos com nossos clientes e profissionais e por isso, todo serviço prestado nós descontamos apenas 18% do valor total e todo restante é passado integralmente para o prestador de serviço.</p>
            </div>
        </div>
        </section>
        <section className="cta_profissional">
        <h1 className="title">Conheça todas as nossas vantagens. Seja nosso parceiro.</h1>
        <button className="btn">Seja um parceiro Bfy.me</button>
        </section>
        <section className="advantages">
        <div className="container">
            <h3 className="title_default clearflex">Vantagens</h3>
            <h4 className="subtitle_default clearflex">É muito simples de usar, vaja abaixo as dicas</h4>
            <article className="card-profissional">
            <h5 className="title">Compromisso</h5>
            <p className="description">Assim que o cliente finalizar o agendamento e seu pagamento enviaremos imediatamente a você a confirmação com todos os dados do serviço.</p>
            <picture><img src="images/backgrounds/profissional_compromisso.jpg" alt=""/></picture>
            </article>
            <article className="card-profissional">
            <h5 className="title">Controle</h5>
            <p className="description">Assim que o cliente finalizar o agendamento e seu pagamento enviaremos imediatamente a você a confirmação com todos os dados do serviço.</p>
            <picture><img src="images/backgrounds/profissional_controle.jpg" alt=""/></picture>
            </article>
            <article className="card-profissional">
            <h5 className="title">Tempo</h5>
            <p className="description">Assim que o cliente finalizar o agendamento e seu pagamento enviaremos imediatamente a você a confirmação com todos os dados do serviço.</p>
            <picture><img src="images/backgrounds/profissional_tempo.jpg" alt=""/></picture>
            </article>
        </div>
        </section>   
        <Footer />
    </div> 
    
)