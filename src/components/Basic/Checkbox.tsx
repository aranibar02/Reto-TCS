import React, {ChangeEvent, useState} from 'react';
import '../../scss/checkbox.basic.scss';

type PropTypes = {
    name: string,
    value: string,
    onValueChange: Function,
    description: string,
    underlined: string,
    isChecked: boolean,
}

const Checkbox = ({name, value, onValueChange, description, underlined, isChecked} : PropTypes) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked;
        onValueChange(newValue);
    };

    return(
        <div>
            <label className="container-checkbox">
            {description} <span className="container-checkbox--underlined">{underlined}</span>
            <input type="checkbox" name={name} value={value} checked={isChecked} onChange={handleChange}/>
            <span className="checkmark"></span>
            </label>
        </div>
    );
}

export default Checkbox;