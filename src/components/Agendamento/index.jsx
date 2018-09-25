'use strict'

import React, { Component } from 'react'
import axios from 'axios'
import {  Row, Col, FormControl } from 'react-bootstrap'

const URL = 'https://api.myjson.com/bins/15r2r0';

export default class Agendamento extends Component {
    constructor(props) {
        super(props)

        this.state = {
            servicos: [],
            selectedService: null,
            selectedDia: '',
            selectedHora: '',
            newDia: '',
            newHr: ''
        };

        this.handleChange = (e) => {
            const value = parseInt(e.target.value)
            const selectedService  = this.state.servicos.find(servico => servico.cd_servico === value)
            this.setState({ selectedService }, () => this.renders())
        };

        this.handleChangeDH = (e, prop) => {
            this.setState({ [prop]: e.target.value })
        };

        this.renders = () => {  
            const listDia = this.state.selectedService.dia || [];
            const selectedDia = listDia.map( (dia, i) => (
                <option key={i} value={dia}>{dia}</option>
            ))

            const listHora = this.state.selectedService.hora || [];
            const selectedHora = listHora.map( (dia, i) => (
                <option key={i} value={dia}>{dia}</option>
            ))

            this.setState({ 
                selectedDia,
                selectedHora
            })
        };

        this.handleSubmit = (e) => {
            e.preventDefault();
            if(this.state.selectedService.nm_servico && this.state.newDia && this.state.newHr){
                alert(`Confirma agendamento de ${this.state.selectedService.nm_servico} para o dia ${this.state.newDia} às ${this.state.newHr}` )
            }
            alert('SELECIONE TODOS OS CAMPOS')
        };

        this.renderServicos = () => {
            const list = this.state.servicos || [];
            if(!list){
                return <option>SEM SERVIÇOS</option>
            }
            return list.map(servico => (
                <option key={servico.cd_servico} value={servico.cd_servico}>{servico.nm_servico}</option>
            ))
        };
    }

    componentDidMount() {
        axios.get(URL)
            .then(res => {
                const servicos = res.data;
                this.setState({ servicos })
                //console.log(servicos)
            })
    }
    
    render () {
        return (
            <form className="schedule-form" onSubmit={this.handleSubmit}>
                <Row className="show-grid">
                    <Col xs={12} md={4}>
                        <FormControl
                            onChange={(e) => this.handleChange(e)}
                            componentClass="select" 
                            placeholder="select">
                            <option value="select">qual serviço desejado?</option>
                            {this.renderServicos()}
                        </FormControl>
                    </Col>
                    <Col xs={12} md={4}>
                        <FormControl
                            onChange={(e) => this.handleChangeDH(e, 'newDia')}
                            componentClass="select" 
                            placeholder="select">
                            {this.state.selectedDia ? this.state.selectedDia : <option value="select">Qual o dia?</option>}
                        </FormControl>
                    </Col>
                    <Col xs={12} md={4}>
                        <FormControl
                            onChange={(e) => this.handleChangeDH(e, 'newHr')}
                            componentClass="select" 
                            placeholder="select">
                            {this.state.selectedHora ? this.state.selectedHora : <option value="select">Qual o horário?</option>}
                        </FormControl>
                    </Col>
                </Row>
                <button className="btn" type="submit">Agendar</button>
            </form>
        )
    }

}