import React, {useState, useEffect} from 'react';
import RadioButton from "./Basic/RadioButton";
import '../scss/one.step.scss';
import WizardHeader from './Wizard.header';
import BasicInput from './BasicInput';
import Button from './Basic/Button';
import User from '../interfaces/User';



type PropTypes = {
    currentStep: number,
    handleNext: (event: React.MouseEvent) => void
    handleBack: (event: React.MouseEvent) => void,
    updateUser: Function,
    user: User,
}

const StepOneComponent = ({currentStep, handleNext, updateUser, handleBack, user} : PropTypes) => {



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
                    <div>Datos personales del titular</div>
                    <BasicInput name="dni" placeHolder="Nro. de documento" value={user.dni} type="text" onChange={updateUser}/>
                    <BasicInput name="firstname" placeHolder="Nombres" value={user.firstname} type="text" onChange={updateUser}/>
                    <BasicInput name="paternalSurname" placeHolder="Apellido Paterno" value={user.paternalSurname} type="text" onChange={updateUser}/>
                    <BasicInput name="maternalSurname" placeHolder="Apellido Materno" value={user.maternalSurname} type="text" onChange={updateUser}/>
                    <BasicInput name="birthdate" placeHolder="Fecha de Nacimiento" value={user.birthdate} type="text" onChange={updateUser}/>
                    <div className="radio-container">
                        Genero
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
                        A quien vamos a asegurar?
                        <RadioButton 
                            name="whoInsure" 
                            value="Me"
                            isChecked={user.whoInsure === "Me" ? true : false} 
                            onValueChange = {updateUser} 
                            description="Solo a mi"/>
                        <RadioButton 
                            name="whoInsure" 
                            value="Family" 
                            isChecked={user.whoInsure === "Family" ? true : false} 
                            onValueChange = {updateUser} 
                            description="A mi y a mi familia"/>
                    </div>
                    <div className="button_container-right">
                        <Button text="CONTINUAR" icon=">" onClickEvent={handleNext} isDisabled={true}/>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default StepOneComponent;