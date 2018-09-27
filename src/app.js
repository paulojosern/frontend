'use strict'

import React, { Component } from 'react'
import  {BrowserRouter as Router, Route}  from 'react-router-dom';
import axios from 'axios'

import Main from './main'
import Profissional from './profissional/profissional'
import Servicos from './servicos/servicos'
import Duvidas from './duvidas/duvidas'
import Login from './login/login'

import './style/style.scss'

const URL = 'https://api.myjson.com/bins/15r2r0';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            servicos: [],
            servicosList: [],
            selectedDia: '',
            selectedHora: '',
            newDia: '',
            newHr: ''
        }

        this.loadOptionServices = (e) => {
            const value = parseInt(e.target.value)
            const selectedService  = this.state.servicos.find(servico => servico.cd_servico === value)
            this.setState({ selectedService }, () => {
                this.renders(this.state.selectedService.dia, 'selectedDia')
                this.renders(this.state.selectedService.hora, 'selectedHora')
            })  
        };

        this.loadOption = (e, prop) => {
            this.setState({ [prop]: e.target.value })
        };

        this.renders = (value, selected) => {  
            const selectedItem = value.map( (item, i) => (
                <option key={i} value={item}>{item}</option>
            ));
            this.setState({ 
                [selected]: selectedItem
            });
            
        };

        this.renderServices = () => {
            const list = this.state.servicos || [];
            if(!list){
                return <option>SEM SERVIÇOS</option>
            }
            return list.map(servico => (
                <option key={servico.cd_servico} value={servico.cd_servico}>{servico.nm_servico}</option>
            ))
        };

        this.handleSubmit = (e) => {
            e.preventDefault();
            if(this.state.selectedService.nm_servico && this.state.newDia && this.state.newHr){
                alert(`Confirma agendamento de ${this.state.selectedService.nm_servico} para o dia ${this.state.newDia} às ${this.state.newHr}` )
            }
            alert('SELECIONE TODOS OS CAMPOS')
        };

        this.filterList = (e) => {
            const value = e.target.value
            var updatedList = this.state.servicosList;
            updatedList = updatedList.filter(item => (
                    item.nm_servico.toUpperCase().search(value.toUpperCase()) !== -1)
                )
            this.setState({servicosList: updatedList});
            if(value === '') {
                this.setState({ 
                    servicosList: this.state.servicos
                 })
            }
        }  
    }

    componentDidMount() {
        axios.get(URL)
            .then(res => {
                const servicos = res.data;
                this.setState({ servicos, servicosList: servicos })
            })
    }

    render () {
        return (
            <div>
                <Router>
                    <React.Fragment>
                        <Route exact path="/" render={() => 
                            <Main  
                                servicos={this.state.servicos}
                                selectedDia={this.state.selectedDia}
                                selectedHora={this.state.selectedHora}
                                newDia={this.state.newDia}
                                newHr={this.state.newHr}
                                LoadOptionServices={this.LoadOptionServices}
                                LoadOption={this.LoadOption}
                                renders={this.renders}
                                renderServices={this.renderServices}
                                handleSubmit={this.handleSubmit}
                            />}  
                        />
                        <Route  path="/profissional" component={Profissional} />
                        <Route  path="/servicos" render={() => <Servicos servicosList={this.state.servicosList} filterList={this.filterList}/>}/>
                        <Route  path="/duvidas" component={Duvidas} />
                        <Route  path="/login" render={() => <Login  servicos={this.state.servicos}/>}  />
                    </React.Fragment>
                </Router>
            </div>
        )
    }
}
