import {
    FormWrapper,
    ButtonsWrapper,
    ContactFormContainer
} from './styled';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../../../schemas/contactValidation'

import Input from '../../../../inputs/Input';
import Upload from '../../../../inputs/Upload';
import Select from '../../../../inputs/Select';
import MaskedInput from '../../../../inputs/MaskedInput';

const ContactForm = ({ setDisplay }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const newContact = (contact) => {
        /* contact.phone = contact.phone.replace(/[^0-9+]/g, '') */
        // alert(contact.groups);
        console.log(contact);
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
                    <li className={'errors'}>{ errors.completeName?.message }</li>
                </span>
                <span className={'field-3'}>
                    <Input
                        type={'text'}
                        name={'email'}
                        register={register}
                        labelContent={'Email (opcional)'}
                    />
                    <li className={'errors'}>{ errors.email?.message }</li>
                </span>
                <span className={'field-4'}>
                    <MaskedInput
                        name={'phone'}
                        register={register}
                        labelContent={'Número de telefone'}
                    />
                    <li className={'errors'}>{ errors.phone?.message }</li>
                </span>
                <span className={'field-5'}>
                    <Select
                        register={register}
                    />
                    <li className={'errors'}>{ errors.groups?.message }</li>
                </span>

                <ButtonsWrapper>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            setDisplay('');
                        }}
                    >
                        Cancelar
                    </button>
                    <input 
                        type={'submit'}
                        value={'Salvar'}
                    />
                </ButtonsWrapper>
            </FormWrapper>
        </ContactFormContainer>
    );
}

export default ContactForm;