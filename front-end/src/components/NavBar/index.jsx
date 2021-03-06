import { VscHome } from 'react-icons/vsc';
import { IoMdMore } from 'react-icons/io';
import { RiAddLine } from 'react-icons/ri';

import {
    LinkTo,
    Options,
    UserAccount,
    ContactButton,
    ProfileWrapper,
    NavBarContainer,
    MoreInformations
} from './styled'

import {
    BsGear,
    BsPerson,
    BsGearFill,
    BsTelephone,
    BsPersonFill,
    BsTelephoneFill,
} from 'react-icons/bs';

import Logo from '../Logo';
import { HiHome } from 'react-icons/hi';
import AddContact from '../modals/AddContact';
import { useAuth } from '../../providers/auth';

const NavBar = ({ page }) => {
    const { setDisplayModal } = useAuth();

    const options = [
        {
            pageTitle: 'home',
            textContent: 'Página Inicial',
            destination: '/home',
            icon: <VscHome />,
            iconSelected: <HiHome />,
        },
        {
            pageTitle: 'myContacts',
            textContent: 'Meus Contatos',
            destination: '/user/contacts',
            icon: <BsTelephone />,
            iconSelected: <BsTelephoneFill />
        },
        {
            pageTitle: '',
            textContent: '',
            destination: '',
            icon: '',
            iconSelected: ''
        },
        {
            pageTitle: 'myProfile',
            textContent: 'Meu Perfil',
            destination: '/user/profile',
            icon: <BsPerson />,
            iconSelected: <BsPersonFill />,
        },
        {
            pageTitle: 'configs',
            textContent: 'Configurações',
            destination: '/user/configs',
            icon: <BsGear />,
            iconSelected: <BsGearFill />,
        },
    ]

    const pageSelected = (title) => {
        if(page === title)
            return 'selected';
        else 
            return '';
    }

    return (
        <NavBarContainer>
            <Logo />
            <Options>
                {
                    options.map((option, id) => (
                        id !== 2 
                            ? (                
                                <li
                                    key={id}
                                    className={ pageSelected(option.pageTitle) }
                                >
                                    <LinkTo to={option.destination}>
                                        {
                                            page === option.pageTitle
                                                ? (
                                                    option.iconSelected
                                                )
                                                : (
                                                    option.icon
                                                )
                                        }
                                        <p>{option.textContent}</p>
                                    </LinkTo>
                                </li>
                            )
                            : (                
                                <li key={id}>
                                    <ContactButton
                                        onClick={() => {
                                            setDisplayModal('display');
                                        }}
                                    >
                                        <RiAddLine /> 
                                        <p>Novo contato</p>
                                    </ContactButton>
                                </li>
                            )
                    ))
                }
            </Options>

            <UserAccount>
                <ProfileWrapper>
                    <img 
                        src={'https://github.com/rodrigsmor.png'}
                        alt={'foto de perfil'}
                    />
                </ProfileWrapper>

                <h5>Rodrigo Moreira</h5>
                <h6>Usuário 1</h6>

                <MoreInformations>
                    <IoMdMore />
                </MoreInformations>
            </UserAccount>
            
            <AddContact />
        </NavBarContainer>
    );
}

export default NavBar;