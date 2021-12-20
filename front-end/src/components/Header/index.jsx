import {
    PageTitle,
    HeaderContainer,
    ResponsiveHeader,
    NotificationButton
} from './styled'

import { FiBell } from 'react-icons/fi';
import Switcher from '../Toggles/Switcher';
import SearchBar from '../inputs/SearchBar';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Header = ({ pageTitle }) => {
    return (
        <HeaderContainer>
            <ResponsiveHeader>
                <figure>
                    <img
                        src={'https://github.com/rodrigsmor.png'}
                        alt={'imagem de perfil'}
                    />
                </figure>

                <button>
                    <HiOutlineMenuAlt3 />
                </button>
            </ResponsiveHeader>

            <PageTitle>
                {pageTitle}
            </PageTitle>

            <div className="components">
                <SearchBar />
                <NotificationButton>
                    <FiBell />
                </NotificationButton>
                <span className="divider"></span>
                <Switcher />
            </div>
        </HeaderContainer>
    );
}

export default Header;