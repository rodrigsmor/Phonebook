import {
    ContactsMin,
    BoxContainer,
    ContactsWrapper
} from './styled';

const RecentContacts = () => {
    return (
        <BoxContainer>
            <h3>Adicionados recentemente</h3>

            {/* maximo de elementos é 9 */}
            <ContactsWrapper>
                <ContactsMin>
                    <img 
                        src={'https://github.com/rodrigsmor.png'} 
                        alt={'imagem de sim'} 
                    />
                </ContactsMin>
                <ContactsMin>
                    <img 
                        src={'https://github.com/rodrigsmor.png'} 
                        alt={'imagem de sim'} 
                    />
                </ContactsMin>
                <ContactsMin>
                    <img 
                        src={'https://github.com/rodrigsmor.png'} 
                        alt={'imagem de sim'} 
                    />
                </ContactsMin>
                <ContactsMin>
                    <img 
                        src={'https://github.com/rodrigsmor.png'} 
                        alt={'imagem de sim'} 
                    />
                </ContactsMin>
                <ContactsMin>
                    <img 
                        src={'https://github.com/rodrigsmor.png'} 
                        alt={'imagem de sim'} 
                    />
                </ContactsMin>
                <ContactsMin>
                    <img 
                        src={'https://github.com/rodrigsmor.png'} 
                        alt={'imagem de sim'} 
                    />
                </ContactsMin>
                <ContactsMin>
                    <img 
                        src={'https://github.com/rodrigsmor.png'} 
                        alt={'imagem de sim'} 
                    />
                </ContactsMin>
                <ContactsMin>
                    <img 
                        src={'https://github.com/rodrigsmor.png'} 
                        alt={'imagem de sim'} 
                    />
                </ContactsMin>
                <ContactsMin>
                    <img 
                        src={'https://github.com/rodrigsmor.png'} 
                        alt={'imagem de sim'} 
                    />
                </ContactsMin>
            </ContactsWrapper>
        </BoxContainer>
    );
}

export default RecentContacts;