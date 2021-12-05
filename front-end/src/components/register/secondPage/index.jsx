import {
    SubmitButton,
    ElementDivisors,
    CheckBoxContainer,
    SecondPageContainer,
} from './styled';

import Upload from '../../inputs/Upload';
import { useState, useEffect } from 'react';

import defaultPicture from '../../../images/dataUri/patternPicture';

const SecondPage = ({ name, errors, setValue }) => {
    const [ checked, setChecked ] = useState('');

    useEffect(() => {
        checked === 'checked'
            ? setValue('profilePicture', defaultPicture)
            : setValue('profilePicture', ' ');
    }, [checked, name, setValue]);

    return (
        <SecondPageContainer>
            <ElementDivisors>
                <h4>Bem-vindo, {name}</h4>
                <h5>Selecione uma imagem para seu perfil</h5>
            </ElementDivisors>

            <ElementDivisors>
                <Upload name={'profilePicture'} setValue={setValue} />
                <p className={'errors'}> { errors?.message } </p>

                <CheckBoxContainer className={checked}>
                    <input
                        type={'checkbox'}
                        name={'selectBox'}
                        id={'checkbox'}
                        onChange={() => {
                            checked === 'checked' 
                                ? setChecked('') 
                                : setChecked('checked')
                        }}
                    />
                    <label htmlFor={'checkbox'}>
                        Escolher mais tarde?
                    </label>
                </CheckBoxContainer>
            </ElementDivisors>

            <ElementDivisors>
                <SubmitButton
                    type={'submit'}
                    value={'finalizar cadastro'}
                />
            </ElementDivisors>
        </SecondPageContainer>
    );
}

export default SecondPage;