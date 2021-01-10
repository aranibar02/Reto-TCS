import React, {useState} from "react";
import BenefitDetail from '../interfaces/BenefitDetail';
import '../scss/benefits.card.scss';


const BenefitsItem = ({description, additionalDescription, trikethrough} : BenefitDetail) => {
    return(
        <li className="card-details-list__item">
                <div className={`${trikethrough ? 'card-details-list__item--trikethrough' : ''}`}>
                    <span>♥</span>
                    <i>{description}</i>
                    <i className="parentheses">{additionalDescription}</i>
                </div>
        </li>
    );
}

export default BenefitsItem;