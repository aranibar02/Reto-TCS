import React from 'react';
import logo from './logo.svg';
import './styles.scss';
import Illustration from './images/Illustration-1.png';
import HealthPlan from './interfaces/HealthPlan';
import Base from './images/Base.png';

import Wizard from './components/Wizard';
import glShield from './images/gl_shield.png';
import glMobile from './images/gl_mobile.png';

function App() {
  
  return (
    <>
     <img id="base__image" src= {Base} alt="base" width="100%" height="80%"></img>
     <img id="second__image" src= {Illustration} alt="base" width="100%" height="80%"></img>
     <main>
    <div className="section-left">
      <div className="section-left__container">
        <div className="section-left__container_content">
          <h1 className="section-left__container__title">Seguro de <strong>Salud</strong></h1>
          <div style={{
            display:"flex",
            flexDirection:"column"
          }}>
          <div className="section-left__container__item">
            <img src={glShield}/>Compralo de manera fácil
          </div>
          <div className="section-left__container__item">
            <img src={glMobile}/> Cotiza y compra tu seguro 100% digital
            </div>
          <div className="section-left__container__item">
            <img src={glShield}/>Hasta S/.12 millones de cobertura anual
            </div>
          <div className="section-left__container__item">
            <img src={glMobile}/>Más de 300 clínicas en todo el Perú
            </div>
          <div className="section-left__container__item--site-title">&#169; 2021 Rimac Seguros y Reaseguros</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div className="section-right">
      <div className="section-right__container">
      <div className="section-right__container_content">
        <div className="section_right__container_header">
        </div>
        <div className="section_right__container_body">
            <Wizard/>
        </div>
      </div>
      </div>
    </div>
  </main>
  </>
  );
}

export default App;


