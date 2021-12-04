import {
    FormFields,
    ButtonsBox,
    LoginButton,
    LoginFormContainer,
} from './styled';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailschema from '../../../schemas/login/emailValidation';
import usernameschema from '../../../schemas/login/usernameValidation';

import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';

import Input from '../../inputs/Input';

const LoginForm = () => {
    const currentSchema = useRef(emailschema);
    const [ checked, setChecked ] = useState('e-mail');

    useEffect(() => {
        checked === 'e-mail' 
            ? currentSchema.current = emailschema
            : currentSchema.current = usernameschema;
    }, [ checked ]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(currentSchema.current),
    });

    const login = (user) => {
        reset();
    }

    return (
        <LoginFormContainer onSubmit={handleSubmit(login)}>
            <ButtonsBox>
                <div className={ checked === 'e-mail' ? 'checked' : '' }>
                    <HiOutlineMail />
                    <input type={'checkbox'} id={'e-mail'} name={'e-mail'}
                        onClick={() => {
                            setChecked('e-mail')
                        }}
                    />
                    <label htmlFor={'e-mail'}>e-mail</label>
                </div>

                <div className={ checked === 'username' ? 'checked' : '' }>
                    <AiOutlineUser />
                    <input type={'checkbox'} id={'username'} name={'username'}
                        onClick={() => {
                            setChecked('username')
                        }}
                    />
                    <label htmlFor={'username'}>username</label>
                </div>
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
                <a href={'/#'}>
                    Esqueceu sua senha?
                </a>
            </FormFields>

            <LoginButton
                type={'submit'}
                value={'fazer login'}
            />
        </ LoginFormContainer>
    );
}

export default LoginForm;