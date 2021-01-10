import React, {useState} from 'react';
import '../../scss/radio.button.basic.scss';

type PropTypes = {
    name: string,
    value: string,
    onValueChange: Function,
    description: string,
    isChecked: boolean,
}

const RadioButton = ({name, value, onValueChange, description, isChecked} : PropTypes) => {


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const name = e.target.name;
        onValueChange(name, newValue);
    };

    return(
    <label>
        <input type="radio" name= {name} value= {value} checked={isChecked} onChange={handleChange}/>
    <span>{description}</span>
    </label>
    );
}

export default RadioButton;