import React, {useState} from 'react';
import '../scss/input.basic.scss';

type BasicInputProps = {
    name: string,
    placeHolder: string,
    value: string | number,
    type: string,
    onChange: Function
}

const BasicInput = ({name, placeHolder, value, type, onChange} : BasicInputProps) => {

    const [isFocused, setIsFocused] = useState<Boolean>(value === "" ? false : true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const name = e.target.name;
        onChange(name, newValue);
    }

    return (
        <div className="input-container">
            {isFocused 
                ? (<label>{placeHolder}</label>) 
                : null
            }
            <input
                name = {name}
                onChange = {handleInputChange}
                type={type}
                placeholder={placeHolder} 
                value={value}
            />
        </div>
    )
};

export default BasicInput;
