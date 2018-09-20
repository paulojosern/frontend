'use strict'

import React from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import Works from '../components/works'
import SliderServices from '../components/SliderServices'
import Depoimentos from '../components/depoimentos'
import Footer from '../components/footer'

export default props => (
    <div>
      <Header />
      <Banner />
      <Works />
      <SliderServices />
      <Depoimentos />
      <Footer />
    </div>
)