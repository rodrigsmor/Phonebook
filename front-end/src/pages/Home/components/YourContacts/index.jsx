import {
    ContactContainer,
    YourContactsContainer,
} from './styled';

const YourContacts = () => {
    return (
        <YourContactsContainer>
            <h3>Seus Contatos</h3>
            <ContactContainer>
                <picture>
                    <img 
                        src={'https://images.unsplash.com/photo-1595412212084-cc97030c594d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'}
                        alt={''}
                    />
                </picture>

                <h4>Giovanna Josefa T.</h4>
                <h5>Contatos</h5>
                <button>VISUALIZAR</button>
            </ContactContainer>
            <ContactContainer>
                <picture>
                    <img
                        src={'https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}
                        alt={''}
                    />
                </picture>

                <h4>Reginaldo Santana</h4>
                <h5>Parentes</h5>
                <button>VISUALIZAR</button>
            </ContactContainer>
        </YourContactsContainer>
    );
}

export default YourContacts;