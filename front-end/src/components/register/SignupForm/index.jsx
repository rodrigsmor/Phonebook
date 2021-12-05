import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../schemas/signupValidation';
import SecondPage from '../secondPage';

import defaultPicture from '../../../images/dataUri/patternPicture';

import Input from '../../inputs/Input';
import CheckBox from '../../inputs/CheckBox';

import {
    FormFields,
    SignUpSubmit,
    ButtonWrapper,
    SignupFormContainer,
} from './styled';

const SignupForm = () => {
    const pageNumber = useRef(0);
    const name = useRef('Usuário');

    const { register, handleSubmit, setValue, reset,
        formState: { errors: {
            email,
            username,
            password,
            completeName,
            profilePicture,
            termsOfService,
            confirmPassword,
        }
    }} = useForm({ 
        resolver: yupResolver(schema),
        reValidateMode: 'onChange',
        defaultValues: {
            profilePicture: defaultPicture
        }
    });

    const fields = [
        {
            typeOfField: 'text',
            fieldName: 'completeName',
            labelContent: 'Nome Completo',
            errorField: completeName,
        },
        {
            typeOfField: 'text',
            fieldName: 'username',
            labelContent: 'Nome de usuário',
            errorField: username,
        },
        {
            typeOfField: 'text',
            fieldName: 'email',
            labelContent: 'E-mail',
            errorField: email,
        },
        {
            typeOfField: 'password',
            fieldName: 'password',
            labelContent: 'Senha',
            errorField: password,
        },
        {
            typeOfField: 'password',
            fieldName: 'confirmPassword',
            labelContent: 'Confirme a senha',
            errorField: confirmPassword,
        }
    ]

    const signUp = ( user ) => {
        name.current = user.completeName.split(" ", 1);
    
        if(pageNumber.current === 0) {
            pageNumber.current = 1;
            setValue('profilePicture', ' ');
        }
        else {
            pageNumber.current = 0;
            reset();
        }
    }

    return (
        <SignupFormContainer onSubmit={handleSubmit(signUp)}>
            {
                pageNumber.current === 0 
                    ? (
                        <>
                            {
                                fields.map((field, id) => (
                                    <FormFields key={id}>
                                        <Input
                                            type={field.typeOfField}
                                            name={field.fieldName}
                                            register={register}
                                            labelContent={field.labelContent}
                                        />
                                        <p className={'errors'}> { field.errorField?.message } </p>
                                    </ FormFields>
                                ))
                            }

                            <FormFields>
                                <CheckBox
                                    register={register}
                                    name={'termsOfService'}
                                    labelContent={'Concorda com os nossos Termos de Uso?'}
                                />
                                <p className={'errors'}> { termsOfService?.message } </p>
                            </FormFields>

                            <ButtonWrapper>
                                <Link to={'/user/login'}>fazer login</Link>
                                <SignUpSubmit
                                    type={'submit'}
                                    className={'next'}
                                    value={'prosseguir'}
                                />
                            </ButtonWrapper>
                        </>
                    )
                    : (
                        <SecondPage
                            name={name.current}
                            errors={profilePicture}
                            setValue={setValue}
                        />
                    )
            }
        </SignupFormContainer>
    );
}

export default SignupForm;