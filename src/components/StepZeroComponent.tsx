import React, {useState, useEffect} from 'react';
import RadioButton from "./Basic/RadioButton";
import '../scss/one.step.scss';
import WizardHeader from './Wizard.header';
import BasicInput from './BasicInput';
import Button from './Basic/Button';
import Checkbox from './Basic/Checkbox';
import User from '../interfaces/User';

type PropTypes = {
    currentStep: number,
    handleNext: (event: React.MouseEvent) => void
    handleBack: (event: React.MouseEvent) => void,
    updateUser: Function,
    user: User,
}

const StepZeroComponent = ({currentStep, handleNext, handleBack, updateUser, user} : PropTypes) => {

    const [termsAndConditions, setTermsAndConditions] = useState<string>("");
    const [commercialCommunications, setCommercialCommunications] = useState<string>("");
    const [isDone, setIsDone] = useState<boolean>(false);


    const handleStart = (e: any) => {
        if( user.dni === "" &&
            user.birthdate === "" &&
            user.cellphone === "" &&
            termsAndConditions === "" &&
            commercialCommunications === ""){
                setIsDone(false);
                return;
            }else{
                setIsDone(true);
                handleNext(e);
            }
    };

    return(
        <div className="one-step-container">
            <div className="container-body">
                <div className="container-body__header">
                    <WizardHeader
                        title = {"Obtén tu, "} 
                        highlightedTitle = "seguro ahora" 
                        subTitle = "Ingresa los datos para comenzar"/>
                </div>
                <div className="container-body__main-content">
                    <BasicInput name="dni" placeHolder="Nro de Documento" value={user.dni} type="text" onChange={updateUser}/>
                    <BasicInput name="birthdate" placeHolder="Fecha de nacimiento" value={user.birthdate} type="text" onChange={updateUser}/>
                    <BasicInput name="cellphone" placeHolder="Celular" value={user.cellphone} type="text" onChange={updateUser}/>
                    <Checkbox name="termsAndConditions" value={""} 
                        description="Acepto la "
                        underlined="Politica de Proteccion de Datos Personales y los Terminos y Condiciones"/>
                    <Checkbox name="commercialCommunications" value={""} 
                        description="Acepto la"
                        underlined="Politica de Envio de Comunicaciones Comerciales"
                        />  
                    <div className="button_container-left">
                        <Button text="COMENCEMOS" icon="" onClickEvent={handleStart} isDisabled={isDone ? false : true}/>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default StepZeroComponent;