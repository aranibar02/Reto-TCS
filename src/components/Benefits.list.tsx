import React, {useState, useEffect} from "react";
import '../scss/benefits.card.scss';
import BenefitsItem from './Benefits.item';
import Benefit from '../interfaces/Benefit';


const BenefitsList = ({details, coverageRate} : Benefit) => {

    useEffect(() => {
        console.log(details);
    },[])

    return(
        <ul className="card-details-list">
            
            {details.map((e) => {
                return(
                <BenefitsItem 
                description = {e.description}
                additionalDescription = {e.additionalDescription}
                trikethrough = {e.trikethrough}
                />)
            })}
        </ul>
    );
}

export default BenefitsList