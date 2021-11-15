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

const Select = ({ register }) => {
    const [ value, setValue ] = useState('');
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
                    required
                    type={'text'}
                    value={value}
                    name={'groups'}
                    { ...register('groups') }
                    placeholder={'selecione o grupo'}
                    autoComplete={'none'}
                    className={valid}
                    onFocus={() => {
                        setFocus('focus');
                    }}
                />

                <LabelSelect htmlFor={'groups'}>
                    Grupo
                </LabelSelect>

                <ButtonSelect
                    onClick={(event) => {
                        event.preventDefault();
                        setFocus('focus');
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
                                        setValue(item);
                                        setFocus('') 
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