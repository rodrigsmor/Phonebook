import {
    FormWrapper,
    ButtonsWrapper,
    ContactFormContainer
} from './styled';

import Input from '../../../../inputs/Input';
import Upload from '../../../../inputs/Upload';

const ContactForm = () => {
    return (
        <ContactFormContainer>
            <h1>Novo contato</h1>
            <h5>Preencha com as informações do contato</h5>
            <FormWrapper>
                <Upload />
                <Input 
                    type={'text'}
                    className={'box-2'}
                    name={'completeName'}
                    labelContent={'Nome do contato'}
                />
                <Input
                    type={'text'}
                    name={'email'}
                    className={'box-3'}
                    labelContent={'Email do contato'}
                />
                <Input
                    type={'text'}
                    name={'phone'}
                    className={'box-4'}
                    labelContent={'Número de telefone'}
                />
                <Input
                    type={'text'}
                    name={'group'}
                    className={'box-5'}
                    labelContent={'Grupo'}
                />

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