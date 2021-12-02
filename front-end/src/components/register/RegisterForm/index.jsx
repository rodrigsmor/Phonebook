import {
    RegisterSection,
} from './styled';

import SignupForm from '../SignupForm';

const RegisterForm = ({ type, text }) => {
    return (
        <RegisterSection>
            <h1>{type}</h1>
            <h5>{text}</h5>
        
            <SignupForm />
        </RegisterSection>
    );
}

export default RegisterForm;