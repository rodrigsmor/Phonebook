import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../schemas/signupValidation';
import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Input from '../../inputs/Input';

import {
    FormFields,
    ButtonWrapper,
    SignupFormContainer,
} from './styled'

const SignupForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    const signUp = ( user ) => {
        reset();
    }

    return (
        <SignupFormContainer onSubmit={handleSubmit(signUp)}>
            <FormFields>
                <Input
                    type={'text'}
                    name={'completeName'}
                    register={register}
                    labelContent={'Nome Completo'}
                />
                <p className={'errors'}> { errors.completeName?.message } </p>
            </ FormFields>

            <FormFields>
                <Input
                    type={'text'}
                    name={'username'}
                    register={register}
                    labelContent={'Nome de usuário'}
                />
                <p className={'errors'}> { errors.username?.message } </p>
            </ FormFields>

            <FormFields>
                <Input
                    type={'text'}
                    name={'email'}
                    register={register}
                    labelContent={'E-mail'}
                />
                <p className={'errors'}> { errors.email?.message } </p>
            </ FormFields>

            <FormFields>
                <Input
                    type={'password'}
                    name={'password'}
                    register={register}
                    labelContent={'Senha'}
                />
                <p className={'errors'}> { errors.password?.message } </p>
            </ FormFields>

            <FormFields>
                <Input
                    type={'password'}
                    name={'confirmPassword'}
                    register={register}
                    labelContent={'Confirme a senha'}
                />
                <p className={'errors'}> { errors.confirmPassword?.message } </p>
            </ FormFields>

            <ButtonWrapper>
                <Link to={'/user/login'}>login</Link>
                <button className={'next'}>
                    prosseguir
                    <MdNavigateNext />
                </button>
            </ButtonWrapper>
        </SignupFormContainer>
    );
}

export default SignupForm;