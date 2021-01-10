import React, {useState} from 'react';
import '../scss/benefits.card.scss';
import HealthPlan from "../interfaces/HealthPlan";
import BenefitsList from "./Benefits.list";
import BenefitThumnail from '../images/benefit_thumbnail.png';


const BenefitsCard = ({id, name, benefits, rate, period} : HealthPlan) => {
    return(
        <div className="benefit-card">
            <div className="card-header">
                <div className="card-header__title">
                    Cuentas con estos beneficios:
                </div>
            </div>
            <div className="card-body">
                <div className="card-coverage">
                    <div className="card-coverage-description">
                        <div className="card-coverage-description__title">
                            Cobertura Máxima
                        </div>
                        <div className="card-coverage-description__rate">
                            {benefits.coverageRate}
                        </div>
                        <div className="card-coverage-description__badge">
                            <span>{`PLAN ${name}`}</span>
                        </div>
                    </div>
                    <div className="card-coverage-thumbnail">
                        <img src={BenefitThumnail}/>
                    </div>
                </div>
                <div className="card-details">
                    <BenefitsList 
                        details={benefits.details}
                        coverageRate={benefits.coverageRate}
                    />
                </div>
            </div>
        </div>
    )
};

export default BenefitsCard;