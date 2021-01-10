import React, {useState, useEffect} from 'react';
import RadioButton from "./Basic/RadioButton";
import '../scss/one.step.scss';
import WizardHeader from './Wizard.header';
import BasicInput from './BasicInput';
import Button from './Basic/Button';
import Checkbox from './Basic/Checkbox';
import User from '../interfaces/User';
import {blankValidation} from '../util';


type PropTypes = {
    currentStep: number,
    handleNext: (event: React.MouseEvent) => void
    handleBack: (event: React.MouseEvent) => void,
    updateUser: Function,
    user: User,
}

type Errors = {
    dni: string | null,
    birthdate: string | null,
    cellphone: string | null,
}



const StepZeroComponent = ({currentStep, handleNext, handleBack, updateUser, user} : PropTypes) => {

    const [termsAndConditions, setTermsAndConditions] = useState<boolean>(false);
    const [commercialCommunications, setCommercialCommunications] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);
    const [errors, setErrors] = useState<Errors>({dni:null, birthdate: null, cellphone: null});

    const updateTermsAndConditions = (value: boolean) => {
        setTermsAndConditions(value);
    };

    const updateCommercialCommunications = (value: boolean) => {
        console.log(value);
        setCommercialCommunications(value)
    }

    useEffect(()=>{
        setErrors({dni:null, birthdate: null, cellphone: null});
    }, [user]);

    const handleStart = (e: any) => {
        if( user.dni === ""   ||
            user.birthdate === "" ||
            user.cellphone === "" ||
            !termsAndConditions ||
            !commercialCommunications){
                const validate = {
                    dni: blankValidation('Dni', user.dni),
                    birthdate: blankValidation('Fecha de nacimiento', user.birthdate),
                    cellphone: blankValidation('Celular', user.cellphone)
                };
                console.log(validate);
                setErrors({...validate});
                setIsDone(false);
            }else{
                console.log("wdwe");
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
                    <BasicInput name="dni" placeHolder="Nro de Documento" value={user.dni} type="text" onChange={updateUser} validate={errors.dni}/>
                    <BasicInput name="birthdate" placeHolder="Fecha de nacimiento" value={user.birthdate} type="text" onChange={updateUser} validate={errors.birthdate}/>
                    <BasicInput name="cellphone" placeHolder="Celular" value={user.cellphone} type="text" onChange={updateUser} validate={errors.cellphone}/>
                    <Checkbox name="termsAndConditions" value={""}
                        onValueChange={updateTermsAndConditions}
                        isChecked = {termsAndConditions} 
                        description="Acepto la "
                        underlined="Política de Protección de Datos Personales y los Términos y Condiciones"/>
                    <Checkbox name="commercialCommunications" value={""}
                        onValueChange={updateCommercialCommunications} 
                        isChecked = {commercialCommunications}
                        description="Acepto la"
                        underlined="Política de Envío de Comunicaciones Comerciales"
                        />  
                    <div className="button_container-left">
                        <Button text="COMENCEMOS" icon="" onClickEvent={handleStart} isDisabled={false}/>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default StepZeroComponent;