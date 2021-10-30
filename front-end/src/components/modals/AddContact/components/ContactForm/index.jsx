import {
    FormWrapper,
    ContactFormContainer
} from './styled';

import Upload from '../../../../inputs/Upload';

const ContactForm = () => {
    return (
        <ContactFormContainer>
            <h1>Novo contato</h1>
            
            <FormWrapper>
                <Upload />
                <div className={'box-2'}></div>
                <div className={'box-6'}></div>
                <div className={'box-3'}></div>
                <div className={'box-4'}></div>
                <div className={'box-5'}></div>
            </FormWrapper>
        </ContactFormContainer>
    );
}

export default ContactForm;