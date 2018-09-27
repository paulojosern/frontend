'use strict'

import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Faq from './faq'

export default props => (
    <div>
        <Header />
        <div className="foo banner_default banner_duvidas">
            <section className="main-banner">
                <h2 className="title_default title_banner">Encontre as dúvidas mais comuns aqui</h2>
                <h3 className="subtitle_default subtitle_banner">Respostas às perguntas frequentes de clientes e profissionais</h3>
            </section>
        </div>
        <section className="quests">
            <div className="quest-user">
                <div className="container">
                    <h3 className="title_default clearflex">Dúvidas</h3>
                    <h4 className="subtitle_default clearflex">Aqui estão as principais dúvidas</h4>
                    <h4 className="title_item">Clientes</h4>
                    <Faq 
                        pergunta='Como funciona?'
                        resposta='Nosso e-commerce vende serviços de beleza delivery. O processo acontece desta forma: escolha a região que você está localizado, o serviço que deseja, o horário e o dia podendo agendar para o mesmo dia desde que seja com quatro horas de antecedência. O sistema vai buscar no nosso banco de talentos um profissional que atenda o serviço solicitado e que esteja ente 5 km a 8 km de distância do solicitante, ou seja, na mesma região.'/>
                    <Faq
                        pergunta='Eu posso cancelar no mesmo dia do atendimento?'
                        resposta='Sim, porém existe uma taxa de cancelamento de serviço equivalente a 50% do valor do serviço contratado.'/>
                    <Faq
                        pergunta='Quais são as formas de pagamento?'
                        resposta='Os pagamentos serão realizados integralmente pela plataforma do PagSeguro. Será aceito como forma de pagamento cartão de crédito e cartão de débito. Verifique no site do PagSeguro as operadoras de cartões aceitas.'/>
                    <Faq
                        pergunta='Posso ser atendida novamente pelo mesmo profissional?'
                        resposta='Sim, você poderá ser atendida com o mesmo profissional nos próximos agendamentos.'/>
                    <h4 className="title_item">Profissionais</h4>
                    <Faq
                        pergunta='Como eu faço meu cadastro?'
                        resposta='Clique na opção do menu "Seja um profissional" para de cadastrar na plataforma do Bfy.me. O cadastro é o primeiro passo para iniciar seu trabalho como prestador de serviço. Após o cadastro completo, você receberá um e-mail de confirmação de cadastro e os seguintes passos. Seu e-mail de cadastro como profissional também pode ser utilizado para agendar um serviço com outro profissional.'/>
                    <Faq
                        pergunta='Eu posso cancelar um atendimento?'
                        resposta='Após o match realizado e as mensagens de aviso, você terá 20 minutos para responder ao chamado. Caso não queira, o serviço será passado a diante. Cancelar um serviço após esse processo gera multa para o prestador de serviço equivalente a 50% do valor do serviço que deveria ser prestado.'/>
                    <Faq
                        pergunta='Eu posso fazer mais de um atendimento por dia?'
                        resposta='Nosso sistema busca trabalhar de forma que garanta que todos os profissionais cadastrados no raio de distância correspondente de cada área consigam atendimentos, logo isso pode variar. Considerando que todos os profissionais livres na instância solicitada serão considerados para a escolha de um prestador.'/>
                </div>
            </div>
        </section>
         <Footer />
    </div>
)