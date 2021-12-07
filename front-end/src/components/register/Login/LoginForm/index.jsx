import {
    LoginFormContainer,
} from './styled';

import { useForm } from 'react-hook-form';
import LoginSection from '../loginSection';
import ConfirmSection from '../confirmSection';
import SuccessSection from '../successSection';
import { useState, useRef, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import emailschema from '../../../../schemas/login/emailValidation';
import usernameschema from '../../../../schemas/login/usernameValidation';

const LoginForm = () => {
    const currentSchema = useRef(emailschema);
    const [ checked, setChecked ] = useState('e-mail');
    const [ sectionNumber, setSectionNumber ] = useState(0);

    useEffect(() => {
        checked === 'e-mail' 
            ? currentSchema.current = emailschema
            : currentSchema.current = usernameschema;
    }, [ checked ]);

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(currentSchema.current),
    });

    const login = (user) => {
        if(sectionNumber === 0) {
            setSectionNumber(1);    
        }
        else {
            setSectionNumber(2);
            reset();

            setTimeout(() => {
                window.location.href = '/';
            }, 3500);
        }
    }

    return (
        <LoginFormContainer onSubmit={handleSubmit(login)}>
            <LoginSection 
                errors={errors}
                checked={checked}
                register={register}
                setChecked={setChecked}
                className={ 
                    sectionNumber === 0
                        ? ''
                        : 'notShow'
                }
            />

            <ConfirmSection
                className={
                    sectionNumber === 1
                        ? ''
                        : 'notShow'
                }
                setSectionNumber={setSectionNumber}
            />

            <SuccessSection 
                className={
                    sectionNumber === 2
                        ? ''
                        : 'notShow'
                }
            />
        </ LoginFormContainer>
    );
}

export default LoginForm;