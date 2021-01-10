import React, {useState} from 'react';
import '../../scss/button.basic.scss';

type PropTypes = {
    text: string,
    icon: string,
    onClickEvent: (event: React.MouseEvent) => void,
    isDisabled: boolean,
}

const Button = ({text, icon, onClickEvent, isDisabled} : PropTypes) => {
    return(
        <button onClick={onClickEvent} className={isDisabled ? 'button-next--disabled' : 'button-next'}>
            {text}
            <span className="button-next__icon">{icon}</span>
        </button>
    );
}

export default Button;