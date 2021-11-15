import {
    InputBox,
    LabelComponent,
} from '../Input/styled';

import { useState } from 'react';
import { InputMasked } from './styled';

const MaskedInput = ({
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
            <InputMasked
                type={type}
                name={name}
                mask={'+55 (99) 99999-9999'}
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

export default MaskedInput;