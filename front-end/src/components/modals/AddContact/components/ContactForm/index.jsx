import {
    FormWrapper,
    ButtonsWrapper,
    ContactFormContainer
} from './styled';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../../../schemas/contactValidation'

import Input from '../../../../inputs/Input';
import Upload from '../../../../inputs/Upload';
import Select from '../../../../inputs/Select';
import { useAuth } from '../../../../../providers/auth'
import MaskedInput from '../../../../inputs/MaskedInput';

const ContactForm = () => {
    const { setDisplayModal } = useAuth();
    const [ selectValue, setSelectValue ] = useState('');

    const { 
        register,
        handleSubmit, 
        setValue,
        reset, 
        formState: { errors } 
    } = useForm({
        resolver: yupResolver(schema),
    });

    const newContact = ( contact ) => {
        // fazer resetar somente quando a resposta da criação do usuario for ok
        setTimeout(() => {
            resetValues();
        }, 2000);
    }
    
    function resetValues() {
        reset({
            phone: '+55 (__) _____-____',
            group: '',
        });
        setSelectValue('');
        setDisplayModal('');
    }

    return (
        <ContactFormContainer>
            <h1>Novo contato</h1>
            <h5>Preencha com as informações do contato</h5>
            
            <FormWrapper onSubmit={handleSubmit(newContact)}>
                <Upload />
                <span className={'field-2'}>
                    <Input
                        type={'text'}
                        name={'completeName'}
                        register={register}
                        labelContent={'Nome do contato'}
                    />
                    <p className={'errors'}>{ errors.completeName?.message }</p>
                </span>
                <span className={'field-3'}>
                    <Input
                        type={'text'}
                        name={'email'}
                        register={register}
                        labelContent={'Email (opcional)'}
                    />
                    <p className={'errors'}>{ errors.email?.message }</p>
                </span>
                <span className={'field-4'}>
                    <MaskedInput
                        name={'phone'}
                        register={register}
                        labelContent={'Número de telefone'}
                    />
                    <p className={'errors'}>{ errors.phone?.message }</p>
                </span>
                <span className={'field-5'}>
                    <Select
                        register={register}
                        value={selectValue}
                        setValue={setSelectValue}
                    />
                    <p className={'errors'}>{ errors.group?.message }</p>
                </span>

                <ButtonsWrapper>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            resetValues();
                        }}
                    >
                        Cancelar
                    </button>
                    <input 
                        type={'submit'}
                        value={'Salvar'}
                        onClick={() => {
                            setValue('group', selectValue);
                        }}
                    />
                </ButtonsWrapper>
            </FormWrapper>
        </ContactFormContainer>
    );
}

export default ContactForm;