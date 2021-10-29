import {
    BoxInput,
    SideBlock,
    SectionForm,
    ContactForm,
    InputWrapper,
    ButtonWrapper,
    BackgroundScreen,
    SectionContainer
} from './styled';

import Logo from '../../Logo';
import image from '../../../images/new-contact.svg';

const AddContact = ({ display, setDisplay }) => {
    return (
        <BackgroundScreen className={display}>
            <SectionContainer>
                <SideBlock>
                    <Logo />
                    <img
                        src={image}
                        alt={'alternative'}
                    />
                </SideBlock>

                <SectionForm>
                    <h2>Novo Contato</h2>

                    <ContactForm>
                        <BoxInput>
                            <InputWrapper>
                                <input 
                                    type={'text'}
                                    name={'completeName'}
                                    autoComplete={'none'}
                                    required
                                />
                                <label htmlFor={'completeName'}>
                                    Nome do Contato
                                </label>
                            </InputWrapper>
                            <span>
                                Precisa haver mais de 2 caracteres
                            </span>
                        </BoxInput>
                        <BoxInput>
                            <InputWrapper>
                                <input 
                                    type={'text'}
                                    name={'email'}
                                    autoComplete={'none'}
                                    required
                                />
                                <label htmlFor={'email'}>
                                    E-mail do Contato
                                </label>
                            </InputWrapper>
                            <span>
                                Precisa haver mais de 2 caracteres
                            </span>
                        </BoxInput>
                        <BoxInput>
                            <InputWrapper>
                                <input 
                                    type={'text'}
                                    name={'phone'}
                                    autoComplete={'none'}
                                    required
                                />
                                <label htmlFor={'phone'}>
                                    Número do Contato
                                </label>
                            </InputWrapper>
                            <span>
                                Precisa haver mais de 2 caracteres
                            </span>
                        </BoxInput>
                        <BoxInput></BoxInput>
                    <ButtonWrapper>
                        <button
                            onClick={() => {
                                setDisplay('');
                            }}
                        >
                            Cancelar
                        </button>
                        <input
                            type={'submit'}
                            value={'Salvar'}
                        />
                    </ButtonWrapper>
                    </ContactForm>
                </SectionForm>
            </SectionContainer>
        </BackgroundScreen>
    );
}

export default AddContact;