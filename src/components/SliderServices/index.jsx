import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderServices extends Component {
  render() {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        infinite: true,
        centerPadding: '0',
        centerMode: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 760,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <section className="foo slider-services">
        <div className="container">
            <h3 className="title_default clearflex">Serviços oferecidos</h3>
            <h4 className="subtitle_default clearflex">Conheça mais os serviços oferecidos</h4>
            <div className="slider-content">  
            <Slider  {...settings}>

                <div className="item">
                    <article>
                        <div className="service-image">
                            <picture><img src="images/services/skin.jpg" alt="Massoterapia"></img></picture>  
                        </div>
                        <div className="service-details">
                            <h5 className="subtitle"> A partir de<br/> R$ <span>140,00</span></h5>
                            <h4 className="title">Massoterapia</h4>
                            <p className="description">Direcionada de acordo com a necessidade do cliente.</p>
                            <button className="btn"><a href="servicos.html">Agendar</a></button>
                        </div>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <div className="service-image">
                            <picture><img src="images/services/makeup.jpg" alt="Maquiagem Simples"></img></picture>
                        </div>
                        <div className="service-details">
                            <h5 className="subtitle"> A partir de<br/> R$ <span>30,00</span></h5>
                            <h4 className="title">Maquiagem Simples</h4>
                            <p className="description">Moderna e com requinte para você curtir qualquer evento.</p>
                            <button className="btn"><a href="servicos.html">Agendar</a></button>
                        </div>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <div className="service-image">
                            <picture><img src="images/services/nailmaker.jpg" alt="Manicure Simples"></img></picture>
                        </div>
                        <div className="service-details">
                            <h5 className="subtitle"> A partir de<br/> R$ <span>25,00</span></h5>
                            <h4 className="title">Manicure Simples</h4>
                            <p className="description">Realizado a limpeza das unhas e esmaltação.</p>
                            <button className="btn"><a href="servicos.html">Agendar</a></button>
                        </div>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <div className="service-image">
                            <picture><img src="images/services/oil-masseur.jpg" alt="Massagem Relaxante"></img></picture>
                        </div>
                        <div className="service-details">
                            <h5 className="subtitle"> A partir de<br/> R$ <span>60,00</span></h5>
                            <h4 className="title">Massagem Relaxante</h4>
                            <p className="description">Aumenta a circulação sanguínea, alivia o stress e tensão muscular.</p>
                            <button className="btn"><a href="servicos.html">Agendar</a></button>
                        </div>
                    </article>
                </div>

                <div className="item">
                    <article>
                        <div className="service-image">
                            <picture><img src="images/services/clean-face.jpg" alt="Limpeza de pele"></img></picture>
                        </div>
                        <div className="service-details">
                            <h5 className="subtitle">
                                A partir de<br/> R$ <span>80,00</span></h5>
                            <h4 className="title">Limpeza de pele</h4>
                            <p className="description">Para desobstruir os poros, extrair comedões e espinhas</p>
                            <button className="btn"><a href="servicos.html">Agendar</a></button>
                        </div>
                    </article>
                </div>

            </Slider>
            </div> 
        </div>
      </section>
    );
  }
}