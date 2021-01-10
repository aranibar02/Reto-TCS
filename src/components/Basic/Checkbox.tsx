import React, {ChangeEvent, useState} from 'react';
import '../../scss/checkbox.basic.scss';

type PropTypes = {
    name: string,
    value: string,
    description: string,
    underlined: string,
}

const Checkbox = ({name, value, description, underlined} : PropTypes) => {
    return(
        <div>
            <label className="container-checkbox">
            {description} <span className="container-checkbox--underlined">{underlined}</span>
            <input type="checkbox" name={name} value={value}/>
            <span className="checkmark"></span>
            </label>
        </div>
    );
}

export default Checkbox;