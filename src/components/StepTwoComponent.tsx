import React, {useState, useEffect} from 'react';
import HealthPlan from '../interfaces/HealthPlan';
import HealthPlanContainer from './HealthPlan.container';
import BenefitsCard from './Benefits.card';
import Button from './Basic/Button';
import Accordion from './Accordion';
import WizardHeader from './Wizard.header';
import {servicesAndExclusions} from '../mocks/data';
import {healthPlans} from '../mocks/data';
import User from '../interfaces/User';
import '../scss/one.step.scss';


type PropTypes = {
    currentStep: number,
    handleNext: (event: React.MouseEvent) => void,
    handleBack: (event: React.MouseEvent) => void,
    updateUser: Function,
    user: User,
}

const StepTwoComponent = ({currentStep, handleNext, handleBack, updateUser, user} : PropTypes) => {
    const [currentHealthPlan, setCurrentHealthPlan] = useState<HealthPlan>(healthPlans[0]);

    const SetHealthPlanById = (id : number) => {
        const e = healthPlans.find(x=> x.id === id);
        setCurrentHealthPlan(e ? e : healthPlans[0]);
    }

    //Save User on localStorage
    const handleSaveUser = (e: React.MouseEvent) => {
        localStorage.setItem('user', JSON.stringify(user));
        handleNext(e);
    } 

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
                    title = {"Elige, "} 
                    highlightedTitle = "tu protección" 
                    subTitle = "Selecciona tu plan de salud ideal"/>
            </div>
            <div className="container-body__main-content">
                <HealthPlanContainer
                    healthPlans={healthPlans}
                    onClickCardEvent={SetHealthPlanById}
                />
                <BenefitsCard
                    id = {currentHealthPlan.id} 
                    name={currentHealthPlan.name} 
                    benefits={currentHealthPlan.benefits}
                    rate={currentHealthPlan.rate}
                    period={currentHealthPlan.period}
                />

                
                <div className="accordion-container">
                    <div className="accordion-container-header">
                        <p className="accordion-container-header__title">Revisa nuestros
                            <span className="accordion-container-header__title--highlighted">servicios y exclusiones</span>
                    </p>
                    </div>
                {servicesAndExclusions.map((e) => {
                    return(
                        <Accordion 
                            title={e.title} 
                            content={e.content}/>
                    )
                })}
              </div> 
                <div className="button_container-right">
                    <Button text="COMPRAR PLAN" icon="" onClickEvent={handleSaveUser} isDisabled={false}/>
                </div>    
            </div>
        </div>
    </div>
    )
}

export default StepTwoComponent;