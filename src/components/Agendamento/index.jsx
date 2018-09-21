'use strict'

import React, { Component } from 'react'
import axios from 'axios'
import {  Row, Col, FormControl } from 'react-bootstrap'
const URL = 'https://api.myjson.com/bins/12e4l0/';

export default class Agendamento extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            servicos: [],
            listaDias: ['1','3','4','5','6','7','11','12','13','14','17','18','21','22','25','26','29','30'],
            listaHorarios: ['8h00','9h00','11h00','13h00','15h00','16h00','18h00'],
            newDia: '',
            newHr: ''
        };

        this.handleChange= (e, prop) => {
            this.setState({ [prop]: e.target.value })
        }; 

        this.handleSubmit = (e) => {
            e.preventDefault();
            if(this.state.value && this.state.newDia && this.state.newHr) {
                alert(`Confirma agendamento de ${this.state.value} para o dia ${this.state.newDia} às ${this.state.newHr}` )
            }
            alert('Selecione todos os campos')
        };

        this.renderServicos = () => {
            const list = this.state.servicos || [];
            if(!this.state.servicos){
                return <option>SEM SERVIÇOS</option>
            }
            return list.map(servico => (
                <option key={servico.cd_servico} value={servico.nm_servico}>{servico.nm_servico}</option>
            ))
        };

        this.renderHR = (select, tipo) => {
            const list =  select || [];
            if(!list){
                return <option>INDISPONÍVEL</option>
            }
            return list.map(dias => (
                <option key={dias} value={dias}>{tipo} {dias}</option>
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
                {this.state.servico}

                <Row className="show-grid">
                    <Col xs={12} md={4}>
                        <FormControl
                            onChange={(e) => this.handleChange(e, 'value')}
                            componentClass="select" 
                            placeholder="select">
                            <option value="select">qual serviço desejado?</option>
                            {this.renderServicos()}
                        </FormControl>
                    </Col>
                    <Col xs={12} md={4}>
                        <FormControl
                            onChange={(e) => this.handleChange(e, 'newDia')}
                            componentClass="select" 
                            placeholder="select">
                            <option value="select">Qual o dia?</option>
                            {this.renderHR(this.state.listaDias, 'Dia')}
                        </FormControl>
                    </Col>
                    <Col xs={12} md={4}>
                        <FormControl
                            onChange={(e) => this.handleChange(e, 'newHr')}
                            componentClass="select" 
                            placeholder="select">
                            <option value="select">Qual o horário?</option>
                            {this.renderHR(this.state.listaHorarios, "")}
                        </FormControl>
                    </Col>
                </Row>
                <button className="btn" type="submit">Agendar</button>
            </form>
        )
    }

}