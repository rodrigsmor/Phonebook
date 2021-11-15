import {
    InputBox,
    InputElement,
    LabelComponent,
} from './styled';

import { useState } from 'react';

const Input = ({
    name, 
    type,
    register,
    className,
    labelContent
}) => {
    const [ inputValue, setInputValue ] = useState('');

    return (
        <InputBox
            className={'inputContainer ' + className }
        >
            <InputElement
                type={type}
                name={name}
                className={inputValue !== '' ? 'valid'
                                             : ''}
                { ...register(name) }
                autoComplete={'none'}
                onChange={ (event) => {
                    setInputValue(event.target.value);
                }}
            />
            <LabelComponent htmlFor={name}>
                {labelContent}
            </LabelComponent>
        </InputBox>
    );
}

export default Input;