import {
    FormFields,
    ButtonsBox,
    LoginButton,
    CheckBoxCard,
    LoginContainer,
} from './styled';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';

import Input from '../../../inputs/Input';

const LoginSection = ({
    errors,
    checked,
    register,
    className,
    setChecked,
}) => {
    return (
        <LoginContainer className={className}>
            <ButtonsBox>
                <CheckBoxCard className={checked === 'e-mail' ? 'checked' : ''}>
                    <HiOutlineMail />
                    <input type={'checkbox'} id={'e-mail'} name={'e-mail'}
                        onClick={() => {
                            setChecked('e-mail')
                        }}
                    />
                    <label htmlFor={'e-mail'}>e-mail</label>
                </CheckBoxCard>

                <CheckBoxCard className={checked === 'username' ? 'checked' : ''}>
                    <AiOutlineUser />
                    <input type={'checkbox'} id={'username'} name={'username'}
                        onClick={() => {
                            setChecked('username')
                        }}
                    />
                    <label htmlFor={'username'}>username</label>
                </CheckBoxCard>
            </ButtonsBox>

            {
                checked === 'e-mail'
                    ? (
                        <FormFields>
                            <Input
                                type={'text'}
                                name={'email'}
                                register={register}
                                labelContent={'E-mail'}
                            />
                            <p className={'errors'}> {errors.email?.message} </p>
                        </FormFields>
                    )
                    : (
                        <FormFields>
                            <Input
                                type={'text'}
                                name={'username'}
                                register={register}
                                labelContent={'Nome de usuário'}
                            />
                            <p className={'errors'}> {errors.username?.message} </p>
                        </FormFields>
                    )
            }

            <FormFields>
                <Input
                    type={'password'}
                    name={'password'}
                    register={register}
                    labelContent={'Senha'}
                />
                <p className={'errors'}> {errors.password?.message} </p>
            </FormFields>

            <FormFields>
                <a href={'/users/login/#'}>
                    Esqueceu sua senha?
                </a>
            </FormFields>

            <LoginButton
                type={'submit'}
                value={'fazer login'}
            />
        </LoginContainer>
    );
}

export default LoginSection;