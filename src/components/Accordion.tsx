import React, {useState} from 'react';
import '../scss/accordion.scss';


type PropTypes = {
    title: string,
    content: string,
};

const Accordion = ({title, content} : PropTypes) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="accordion">
            <div className="accordion__header" onClick={handleClick}>
                {title}
                <div className="accordion__indicator">
                    {isOpen ? 'ʌ' : 'v'}
                </div>
            </div>
            {isOpen && (
                <div className="accordion__content">
                    {content}
                </div>
            )}
        </div>
    );
}

export default Accordion;