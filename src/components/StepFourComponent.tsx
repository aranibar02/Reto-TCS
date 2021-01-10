import React from 'react';
import '../scss/four.step.scss';
import Button from './Basic/Button';

const StepFourComponent = () => {
    return(
        <div className="four-step-container">
            <div className="four-step-container__header">
            !Gracias por <span className="four-step-container__header--highlighted"> confiar en nosotros</span>
            </div>
            <div className="four-step-container__content">
                Queremos conocer mejor la salud de los asegurados. Un asesor <span className="four-step-container__content--bold">se 
                pondra en contacto</span> contigo en las siguientes <span className="four-step-container__content--bold">48 horas</span>.  
            </div>
            <div className="four-step-container__right-button">
                    <Button text="IR A SALUD" icon="" onClickEvent={()=>{}} isDisabled={false}/>
            </div>    
        </div>
    );
}

export default StepFourComponent;