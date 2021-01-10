import React, {useState, useEffect} from 'react';
import StepOneComponent from './StepOneComponent';
import StepTwoComponent from './StepTwoComponent';
import {healthPlans} from '../mocks/data';
import StepZeroComponent from './StepZeroComponent';
import User from '../interfaces/User';
import StepFourComponent from './StepFourComponent';



const Wizard = ({}) => {
    const [step, setStep] = useState<number>(0);
    const [user, setUser] = useState<User>({
        dni: "",
        firstname: "",
        birthdate: "",
        cellphone: "",
        paternalSurname: "",
        maternalSurname:"",
        gender: "",
        whoInsure: "",
    });

    const fetchUser = async() => {
        const data = await fetch("https://freestyle.getsandbox.com/dummy/obtenerdatospersona",
            {method: "POST"});
        const response = await data.json();
        const userJson = response.data.tercero;
        console.log(userJson);
        const x : User = {
            dni: userJson.numDocumento,
            firstname: userJson.nombres,
            birthdate: userJson.fecNacimiento,
            cellphone: userJson.telefono,
            paternalSurname: userJson.apellidoPaterno,
            maternalSurname: userJson.apellidoMaterno,
            gender: userJson.sexo,
            whoInsure: "",
        };
        setUser({...x});
    }

    useEffect(() => {
        fetchUser();
    }, []);





    const setUserAttribute = (attribute: any, value: string) => {
        console.log(attribute);
        console.log(value);
        const key: keyof User = attribute;
        let x :User = user;
        x[key] = value;
        setUser({...x});
    }


    const handleNext = () => {
        setStep(step + 1);
    }

    const handleBack = () => {
        if(step > 0){
            setStep(step - 1);
        }
    }


    const renderSwitch = (x: number) => {
        switch(x) {
            case 0: return(<StepZeroComponent 
                currentStep={step} 
                handleNext={handleNext} 
                handleBack={handleBack} 
                user={user}
                updateUser={setUserAttribute}/>);
            case 1: return(<StepOneComponent currentStep={step} 
                handleNext={handleNext} 
                handleBack={handleBack} 
                user={user}
                updateUser={setUserAttribute}
                />);
            case 2: return(<StepTwoComponent 
                currentStep={step} 
                handleNext={handleNext} 
                handleBack={handleBack} 
                user={user}
                updateUser={setUserAttribute}/>);
            case 3: return(<StepFourComponent/>)
            default: return(<></>);
        };
    };

    return(
        <div>
            {renderSwitch(step)}
        </div>
    );
}

export default Wizard;