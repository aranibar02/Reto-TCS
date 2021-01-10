import React, {useState} from 'react';
import { healthPlans } from '../constants/Text';
import HealthPlan from '../interfaces/HealthPlan';
import '../scss/health.plan.card.scss';
import glCorrect from "../images/gl_correct.png";


type PropsType = {
    healthPlan : HealthPlan,
    onClickEvent: Function,
    isSelected: boolean,
    index: number,
    UpdateIndex: Function,
}

const HealthPlanCard = ({healthPlan, onClickEvent, index, isSelected, UpdateIndex} : PropsType) => {

    const handleClick = () => {
        UpdateIndex(index);
        onClickEvent(healthPlan.id);   
    };

    return(
        <div className={!isSelected ? "card" : "card selected"} onClick={handleClick}>
                
                <div className="card__dot">
                    {isSelected && <img src={glCorrect}/>}
                </div>
                <div className="card__title">{healthPlan.name}</div>
                <div className="card__rate">{`S/${healthPlan.rate}`}</div>
                <div className="card__period">{healthPlan.period}</div>
        </div>
    );
}

export default HealthPlanCard;
