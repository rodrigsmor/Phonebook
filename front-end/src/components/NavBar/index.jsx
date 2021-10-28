import { IoMdMore } from 'react-icons/io';
import { RiAddLine } from 'react-icons/ri';
import { VscHome } from 'react-icons/vsc';

import {
    LinkTo,
    Options,
    UserAccount,
    ContactButton,
    ProfileWrapper,
    NavBarContainer,
    MoreInformations
} from './styled'

import Logo from '../Logo';
import { 
    BsTelephone,
    BsPerson,
    BsGear
} from 'react-icons/bs';

const NavBar = ({ page }) => {
    return (
        <NavBarContainer>
            <Logo />
            <Options>
                <li className={ page === 'home' ? 'selected' : '' }>
                    <LinkTo to={'#'}> 
                        <VscHome /> Página Inicial
                    </LinkTo>
                </li>
                <li className={ page === 'myContacts' ? 'selected' : '' }>
                    <LinkTo to={'#'}>
                        <BsTelephone /> Meus Contatos
                    </LinkTo>
                </li>
                <li>
                    <ContactButton>
                        <RiAddLine /> Novo contato
                    </ContactButton>
                </li>
                <li className={ page === 'myProfile' ? 'selected' : '' }>
                    <LinkTo to={'#'}>
                        <BsPerson /> Meu Perfil
                    </LinkTo>
                </li>
                <li className={ page === 'configs' ? 'selected' : '' }>
                    <LinkTo to={'#'}>
                        <BsGear /> Configurações
                    </LinkTo>
                </li>
            </Options>

            <UserAccount>
                <ProfileWrapper>
                    <img 
                        src={'https://github.com/rodrigsmor.png'}
                        alt={'foto de perfil'}
                    />
                </ ProfileWrapper>

                <h5>Rodrigo Moreira</h5>
                <h6>Usuário 1</h6>

                <MoreInformations>
                    <IoMdMore />
                </MoreInformations>
            </UserAccount>
        </NavBarContainer>
    );
}

export default NavBar;