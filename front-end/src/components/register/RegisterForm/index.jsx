import {
    RegisterSection,
} from './styled';

import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';

const RegisterForm = ({ type, text }) => {
    return (
        <RegisterSection className={type}>
            <h1>{type}</h1>
            <h5>{text}</h5>
        
            {
                type === 'Entrar' 
                    ? (
                        <LoginForm />
                    )
                    : (
                        <SignupForm />
                    )
            }
        </RegisterSection>
    );
}

export default RegisterForm;