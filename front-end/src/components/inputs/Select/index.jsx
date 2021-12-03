import {
    Options,
    LabelSelect,
    SelectInput,
    ButtonSelect,
    SelectContainer,
    DropdownContainer
} from './styled';

import { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Select = ({ register, value, setValue, }) => {
    const [ valid, setValid ] = useState('');
    const [ focus, setFocus ] = useState('');

    useEffect(() => {
        value !== '' ? setValid('valid')
                     : setValid('');
    }, [value, focus]);

    const options = [
        'Escola',
        'Amigos',
        'Contatos',
        'Parentes',
        'Trabalho',
        'Outros'
    ];

    return (
        <SelectContainer
            name={'select'}
            className={'selectContainer'}
        >
            <div className={'inputWrapper'}>
                <SelectInput
                    readOnly
                    id={'group'}
                    type={'text'}
                    value={value}
                    name={'group'}
                    className={valid}
                    { ...register('group') }
                    placeholder={'selecione o grupo'}
                    onFocus={() => {
                        setFocus('focus');
                    }}
                />

                <LabelSelect htmlFor={'group'}>
                    Grupo
                </LabelSelect>

                <ButtonSelect
                    onClick={(event) => {
                        event.preventDefault();
                        focus === 'focus' ? setFocus('')
                                          : setFocus('focus');
                    }}
                >
                    <FiChevronDown />
                </ButtonSelect>
            </div>

            <DropdownContainer
                className={'options ' + focus}
            >
                {
                    options.map((item, index) => {
                        return (
                            <Options
                                key={index}
                                onClick={() => {
                                        setFocus('')   
                                        setValue(item);
                                    }
                                }
                            >
                                {item}
                            </Options>
                        );
                    })
                }
            </DropdownContainer>
        </SelectContainer>
    );
}

export default Select;