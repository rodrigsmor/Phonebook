import {
    InputBox,
    FormWrapper,
    ButtonsWrapper,
    ContactFormContainer
} from './styled';

import Upload from '../../../../inputs/Upload';

const ContactForm = () => {
    return (
        <ContactFormContainer>
            <h1>Novo contato</h1>
            <h5>Preencha com as informações do contato</h5>
            <FormWrapper>
                <Upload />
                <InputBox className={'box-2'}>
                    <input
                        required
                        type={'text'}
                        name={'completeName'}
                        autoComplete='none'
                    />
                    <label htmlFor={'completeName'}>
                        Nome do Contato
                    </label>
                </InputBox>
                <InputBox className={'box-3'}>
                    <input
                        required
                        type={'text'}
                        name={'email'}
                        autoComplete={'none'}
                    />
                    <label htmlFor={'email'}>
                        E-mail do contato
                    </label>
                </InputBox>
                <InputBox className={'box-4'}>
                    <input
                        required
                        type={'text'}
                        name={'phone'}
                        autoComplete={'none'}
                    />
                    <label htmlFor={'phone'}>
                        Telefone do contato
                    </label>
                </InputBox>
                <InputBox className={'box-5'}>
                    <input
                        required
                        type={'text'}
                        name={'phone'}
                        autoComplete={'none'}
                    />
                    <label htmlFor={'phone'}>
                        Grupo
                    </label>
                </InputBox>

                <ButtonsWrapper>
                    <button>Cancelar</button>
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