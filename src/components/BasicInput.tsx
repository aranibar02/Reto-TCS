import React, {useState} from 'react';
import '../scss/input.basic.scss';

type BasicInputProps = {
    name: string,
    placeHolder: string,
    value: string | number,
    type: string,
    onChange: Function,
    validate: string | null,
}

const BasicInput = ({name, placeHolder, value, type, onChange, validate} : BasicInputProps) => {

    const [isFocused, setIsFocused] = useState<Boolean>(value === "" ? false : true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const name = e.target.name;
        onChange(name, newValue);
    }

    return (
        <div>
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
        {validate && <span style={{fontSize:"8px", color: "red", position: "relative", top: "-10px"}}>{validate}</span>}
        </div>
    )
};

export default BasicInput;
