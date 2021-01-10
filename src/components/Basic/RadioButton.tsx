import React, {useState} from 'react';
import '../../scss/radio.button.basic.scss';

type PropTypes = {
    name: string,
    value: string,
    onValueChange: Function,
    description: string,
}

const RadioButton = ({name, value, onValueChange, description} : PropTypes) => {
    return(
    <label>
        <input type="radio" name= {name} value= {value}/>
    <span>{description}</span>
    </label>
    );
}

export default RadioButton;