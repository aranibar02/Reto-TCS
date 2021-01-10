import React, {useState} from 'react';


type WizardHeaderProps = {
    title: string,
    highlightedTitle: string,
    subTitle: string,
}

const WizardHeader = ({title, highlightedTitle, subTitle} : WizardHeaderProps) => {

    return(
        <div className="wizard-header">
            <div className="wizard-header__title">
                {title} <span className="wizard-header__title--highlighted">{highlightedTitle}</span>
            </div>
            <div className="wizard-header__subTitle">
                {subTitle}
            </div>
        </div>
    );
};

export default WizardHeader; 