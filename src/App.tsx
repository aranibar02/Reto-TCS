import React from 'react';
import logo from './logo.svg';
import './styles.scss';
import Illustration from './images/Illustration-1.png';
import HealthPlan from './interfaces/HealthPlan';
import Base from './images/Base.png';

import Wizard from './components/Wizard';

function App() {
  
  return (
    <>
     <img id="base__image" src= {Base} alt="base" width="100%" height="80%"></img>
     <img id="second__image" src= {Illustration} alt="base" width="100%" height="80%"></img>
     <main>
    <div className="section-left">
      <div className="section-left__container">
        <div></div>
        <div className="section-left__container_content">
          <h1 className="section-left__container__title">Seguro de <strong>Salud</strong></h1>
          <div className="section-left__container__item">Compralo de manera facil</div>
          <div className="section-left__container__item">Hasta S/.12 millones de cobertura anual</div>
          <div className="section-left__container__item">Más de 300 clínicas en todo el Perú</div>
          <div className="section-left__container__item">&#169; 2021 ;y Company</div>
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
            {/*<StepTwoComponent healthPlans = {healthPlans}/>*/}
          {/*<BasicInput name="dni" placeHolder="Nro de Documento" value="" type="text" onChange = {()=>{}}/>
          <BasicInput name="birthday" placeHolder="Fecha de Nacimiento" value="" type="text" onChange = {()=>{}}/>
          <BasicInput name="cellphone" placeHolder="Celular" value="" type="text" onChange = {()=>{}}/>  
          <div>
            <label className="container-checkbox">
            Acepto la Politica de Proteccion de Datos Personales y los Terminos y Condicioness
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
          <label className="container-checkbox">
          Acepto la Politica de Proteccion de Datos Personales y los Terminos y Condicioness
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
          </div>*/}
        </div>
      </div>
      </div>
    </div>
  </main>
  </>
  );
}

export default App;


