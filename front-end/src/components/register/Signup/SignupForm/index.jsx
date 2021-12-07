import { useForm } from 'react-hook-form';
import { useRef, useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../../schemas/signupValidation';
import FirstPage from '../firstPage';
import SecondPage from '../secondPage';
import SuccessStep from '../successStep';

import defaultPicture from '../../../../images/dataUri/patternPicture';

import {
    SignupFormContainer,
} from './styled';

const SignupForm = () => {
    const [ pageNumber, setPageNumber ] = useState(0);
    const [ userPicture, setUserPicture ] = useState(defaultPicture);
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
    
        if(pageNumber === 0) {
            setPageNumber(1);
            setValue('profilePicture', ' ');
        }
        else {
            setPageNumber(2);
            reset();
            setUserPicture(defaultPicture);

            setTimeout(() => {
                window.location.href = '/';
            }, 3500);
        }
    }

    useEffect(() => {
        if( userPicture !== defaultPicture && userPicture !== ' ') {
            setValue('profilePicture', userPicture);
        }
        else if(pageNumber === 1 && userPicture === defaultPicture) {
            setValue('profilePicture', ' ');
        } else {
            setValue('profilePicture', defaultPicture);
        }
    }, [pageNumber, setValue, userPicture]);
    

    return (
        <SignupFormContainer onSubmit={handleSubmit(signUp)}>
            <FirstPage
                fields={fields} 
                register={register}
                termsOfService={termsOfService} 
                profilePicture={profilePicture} 
                className={pageNumber === 0
                    ? ''
                    : 'notShow'
                }
            />
            
            <SecondPage
                name={name.current}
                setValue={setValue}
                errors={profilePicture}
                userPicture={userPicture}
                setPageNumber={setPageNumber}
                className={pageNumber === 1
                    ? ''
                    : 'notShow'
                }
                setUserPicture={setUserPicture}
            />

            <SuccessStep
                className={pageNumber === 2
                    ? ''
                    : 'notShow'
                }
            />
        </SignupFormContainer>
    );
}

export default SignupForm;