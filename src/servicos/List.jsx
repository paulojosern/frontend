'use strict'

import React from 'react'

const List = ({ items }) => (
    //console.log(items),
    <ul className="list-group">
    {
        items.map(function(item) {
            return <li className="list-group-item" data-category={item.cd_servico} key={item.cd_servico}>
            <div className="services-box">
                <div className="service-item">
                    <div className="service-item-details">
                        <h4 className="title">{item.nm_servico}</h4><span className="time">{item.nr_duracao_maxima_servico} minutos</span>
                        <p className="text">{item.ds_servico}</p>
                    </div>
                    <div className="service-item-price">
                        <p className="price">R$ <span>{item.vl_servico}</span></p>
                        <button className="btn"><a href="schedule.html">Agendar</a></button>
                    </div>
                </div>
            </div>
            </li>
        })
    }
    </ul>
)


export default List
