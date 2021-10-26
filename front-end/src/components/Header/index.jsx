import {
    HeaderContainer,
    PageTitle,
    NotificationButton
} from './styled'

import { FiBell } from 'react-icons/fi';
import Switcher from '../Toggles/Switcher';
import SearchBar from '../inputs/SearchBar';

const Header = ({ pageTitle }) => {
    return (
        <HeaderContainer>
            <PageTitle>
                {pageTitle}
            </PageTitle>

            <div className="join_elements">
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