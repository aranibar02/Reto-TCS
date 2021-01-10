import React, {useState, useEffect} from 'react';
import RadioButton from "./Basic/RadioButton";
import '../scss/one.step.scss';
import WizardHeader from './Wizard.header';
import BasicInput from './BasicInput';
import Button from './Basic/Button';
import User from '../interfaces/User';
import {blankValidation} from '../util';
import {getNumberKeysEmpty} from '../util';



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
    firstname: string | null,
    paternalSurname: string | null,
    maternalSurname: string | null,
    genre: string | null,
    whoInsure: string | null,
}


const StepOneComponent = ({currentStep, handleNext, updateUser, handleBack, user} : PropTypes) => {

    const [isDone, setIsDone] = useState<boolean>(false);
    const [errors, setErrors] = useState<Errors>({
        dni:null, birthdate: null, firstname: null,
        paternalSurname: null, maternalSurname: null,
        genre: null, whoInsure: null
        });

    const UpdateErrors = () => {
        const validate = {
            dni: blankValidation('Dni', user.dni),
            birthdate: blankValidation('Fecha de nacimiento', user.birthdate),
            firstname: blankValidation('Nombre', user.firstname),
            paternalSurname: blankValidation('Apellido paterno', user.paternalSurname),
            maternalSurname: blankValidation('Apellido materno', user.maternalSurname),
            genre: blankValidation('Género', user.gender),
            whoInsure: blankValidation('*', user.whoInsure),
        };
        setErrors({...validate});
    }


    const handleStart = (e: any) => {
        if( user.dni === ""   ||
            user.birthdate === "" ||
            user.firstname === "" ||
            user.paternalSurname === "" ||
            user.maternalSurname === ""){
                UpdateErrors();
                setIsDone(false);
            }else{
                setIsDone(true);
                handleNext(e);
            }
    };

    return(
        
        <div className="one-step-container">
            <div className="container-header">
                <div className="container-header__back" onClick={handleBack}>
                    <span>{"<"}</span>
                </div>
                <div className="container-header__counter">
                    <span className="container-header__counter--highlighted">
                        PASO {currentStep}
                    </span> DE 7
                </div>
            </div>
            <div className="container-body">
                <div className="container-body__header">
                    <WizardHeader
                        title = {"Hola, "} 
                        highlightedTitle = {user.firstname} 
                        subTitle = "Valida que los datos sean correctos"/>
                </div>
                <div className="container-body__main-content">
                    <div style={{fontSize: "1.0rem", color: "#6C7282", margin: "10px 0px"}}>
                        Datos personales del titular
                    </div>
                    <BasicInput name="dni" placeHolder="Nro. de documento" value={user.dni} type="text" onChange={updateUser} validate={errors.dni}/>
                    <BasicInput name="firstname" placeHolder="Nombres" value={user.firstname} type="text" onChange={updateUser} validate={errors.firstname}/>
                    <BasicInput name="paternalSurname" placeHolder="Apellido Paterno" value={user.paternalSurname} type="text" onChange={updateUser} validate={errors.paternalSurname}/>
                    <BasicInput name="maternalSurname" placeHolder="Apellido Materno" value={user.maternalSurname} type="text" onChange={updateUser} validate={errors.maternalSurname}/>
                    <BasicInput name="birthdate" placeHolder="Fecha de Nacimiento" value={user.birthdate} type="text" onChange={updateUser} validate={errors.birthdate}/>
                    <div className="radio-container">
                        Género
                        <RadioButton 
                            name="gender" 
                            value="M"
                            isChecked={user.gender === "M" ? true : false} 
                            onValueChange = {()=>{}} 
                            description="Masculino"/>
                        <RadioButton 
                            name="gender" 
                            value="F" 
                            isChecked={user.gender === "F" ? true : false}
                            onValueChange = {updateUser} 
                            description="Femenino"/>
                    </div>
                    <div className="radio-container">
                        ¿A quién vamos a asegurar?
                        <RadioButton 
                            name="whoInsure" 
                            value="Me"
                            isChecked={user.whoInsure === "Me" ? true : false} 
                            onValueChange = {updateUser} 
                            description="Solo a mí"/>
                        <RadioButton 
                            name="whoInsure" 
                            value="Family" 
                            isChecked={user.whoInsure === "Family" ? true : false} 
                            onValueChange = {updateUser} 
                            description="A mí y a mi familia"/>
                    </div>
                    <div className="button_container-right">
                        <Button text="CONTINUAR" icon=">" onClickEvent={handleStart} isDisabled={false}/>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default StepOneComponent;