'use strict'

import React  from 'react'
import {  Row, Col, FormControl } from 'react-bootstrap'


const Agendamento = ({ 
		selectedDia, 
		selectedHora, 
		loadOptionServices,
		loadOption,
		renderServices,
		handleSubmit 
    }) => {
        return (
            <form className="schedule-form" onSubmit={handleSubmit}>
                <Row className="show-grid">
                    <Col xs={12} md={4}>
                        <FormControl
                            onChange={(e) => loadOptionServices(e)}
                            componentClass="select" 
                            placeholder="select">
                            <option value="select">qual serviço desejado?</option>
                            {renderServices()}
                        </FormControl>
                    </Col>
                    <Col xs={12} md={4}>
                        <FormControl
                            onChange={(e) => loadOption(e, 'newDia')}
                            componentClass="select" 
                            placeholder="select">
                            {selectedDia ? selectedDia : <option value="select">Qual o dia?</option>}
                        </FormControl>
                    </Col>
                    <Col xs={12} md={4}>
                        <FormControl
                            onChange={(e) => loadOption(e, 'newHr')}
                            componentClass="select" 
                            placeholder="select">
                            {selectedHora ? selectedHora : <option value="select">Qual o horário?</option>}
                        </FormControl>
                    </Col>
                </Row>
                <button className="btn" type="submit">Agendar</button>
            </form>
        )

}
    

export default Agendamento