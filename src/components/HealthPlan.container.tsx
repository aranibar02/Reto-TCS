import React, {useState} from 'react';
import HealthPlan from '../interfaces/HealthPlan';
import '../scss/health.plan.card.scss';
import HealthPlanCard from './HealthPlan.card';

type PropsType = {
    healthPlans : HealthPlan[],
    onClickCardEvent : Function, 
}


const HealthPlanContainer = ({healthPlans, onClickCardEvent} : PropsType) => {

    const [selectedIndex, SetSelectedIndex] = useState<number>(0);
    
    const updateSelectedIndex = (value: number) => {
        SetSelectedIndex(value);
    };
    
    return(
        <div className="health-card-container">
            {healthPlans.map((e, key)=>{
                return(
                    <HealthPlanCard
                        key={key} 
                        healthPlan={e}
                        index= {key}
                        isSelected = {selectedIndex === key ? true : false}
                        onClickEvent = {onClickCardEvent} 
                        UpdateIndex={updateSelectedIndex}
                    />
                )
            })}
        </div>
    );
};

export default HealthPlanContainer;
