import {
    ButtonSpan,
    LoginButton,
    HeaderContainer,
} from './styled';

import Logo from '../../Logo';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Header = ({ where }) => {

    var login, signup;

    switch (where) {
        case 'login':
            login = 'notShow';
            signup = '';
            break;

        case 'signup':
            login = '';
            signup = 'notShow';
            break;

        default:
            login = '';
            signup = '';
            break;
    }

    return (
        <HeaderContainer>
            <Logo />

            <ButtonSpan>
                <LoginButton
                    className={signup}
                    to={'/signup'}
                >
                    cadastrar
                </LoginButton>

                <LoginButton
                    className={login}
                    to={'/login'}
                >
                    entrar
                </LoginButton>

                <button>
                    <HiOutlineMenuAlt3 />
                </button>
            </ButtonSpan>
        </HeaderContainer>
    );
}

export default Header;