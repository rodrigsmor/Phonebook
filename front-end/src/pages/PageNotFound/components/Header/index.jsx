import {
    ButtonSpan,
    LoginButton,
    HeaderContainer,
} from './styled';

import Logo from '../../../../components/Logo';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            
            <ButtonSpan>
                <LoginButton 
                    to={'/login'}
                >
                    login
                </LoginButton>

                <button>
                    <HiOutlineMenuAlt3 />
                </button>
            </ButtonSpan>
        </HeaderContainer>
    );
}

export default Header;