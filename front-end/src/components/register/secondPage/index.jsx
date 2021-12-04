import {
    SubmitButton,
    ElementDivisors,
    CheckBoxContainer,
    SecondPageContainer,
} from './styled';

import { useState } from 'react';
import Upload from '../../inputs/Upload';

const SecondPage = () => {
    const [ checked, setChecked ] = useState('');

    return (
        <SecondPageContainer>
            <ElementDivisors>
                <h4>Bem-vindo, Rodrigo</h4>
                <h5>Selecione uma imagem para seu perfil</h5>
            </ElementDivisors>

            <ElementDivisors>
                <Upload />

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