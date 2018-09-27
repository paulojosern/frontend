'use strict'

import React from 'react' 

const faq = ({ pergunta, resposta }) => {
        function open(e) {
            
            if (e.target.classList.contains("openCard")) {
                e.target.classList.remove("openCard");
            } else {
                e.target.classList.add("openCard")
            }
        }

        return (
        <div className="card-faq"  onClick={(e) => open(e)}>
            <a className="card-head">
                {pergunta}
                <div className="card-resp">
                    {resposta}
                </div>
            </a>
            
        </div>   
    )
}

export default faq