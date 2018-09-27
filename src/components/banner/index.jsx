'use strict'

import React from 'react'
import Agendamento from '../Agendamento'

const Banner = ({ 
		selectedDia, 
		selectedHora, 
		loadOptionServices,
		loadOption,
		renderServices,
		handleSubmit 
	}) => (
		<div className="foo banner banner_default">
		<section className="main-banner">
			<div className="container">
			<div className="wrapper">
				<div className="featured">
				<h1 className="title_default title_banner">A sua beleza a <span>toda hora</span></h1>
				</div>
				<div className="banner-schedule">
				<h2 className="title">Não perca tempo e comece a usar agora</h2>
				<Agendamento  
					selectedDia={selectedDia}
					selectedHora={selectedHora}
					loadOptionServices={loadOptionServices}
					loadOption={loadOption}
					renderServices={renderServices}
					handleSubmit={handleSubmit}
				/>
				</div>
			</div>
			</div>
		</section>
		</div>
)
export default Banner