'use strict'

import React from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import Works from '../components/works'
import SliderServices from '../components/SliderServices'
import Depoimentos from '../components/depoimentos'
import Footer from '../components/footer'

const Main = ({ 
		selectedDia, 
		selectedHora, 
		loadOptionServices,
		loadOption,
		renderServices,
		handleSubmit 
	}) => (
		<div>
			<Header />
			<Banner 
				selectedDia={selectedDia}
				selectedHora={selectedHora}
				loadOptionServices={loadOptionServices}
				loadOption={loadOption}
				renderServices={renderServices}
				handleSubmit={handleSubmit}
			/>
			<Works />
			<SliderServices />
			<Depoimentos />
			<Footer />  
		</div>
	)

export default Main

