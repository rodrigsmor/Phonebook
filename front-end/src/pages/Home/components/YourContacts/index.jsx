import {
    ContactsWrapper,
    ContactContainer,
    YourContactsContainer,
} from './styled';

const YourContacts = () => {
    const contacts = [
        {
            name: 'Giovanna Josefa T.',
            image: 'https://images.unsplash.com/photo-1595412212084-cc97030c594d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            group: 'Contatos',
        },
        {
            name: 'Reginaldo Santana',
            image: 'https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            group: 'Parentes',
        }
    ]

    return (
        <YourContactsContainer>
            <h3>Seus Contatos</h3>
            <ContactsWrapper>
                {
                    contacts.map((contact, id) => (
                        <ContactContainer key={id}>
                            <picture>
                                <img 
                                    src={contact.image}
                                    alt={`imagem do contato ${contact.name}`}
                                />
                            </picture>

                            <h4>
                                {contact.name}
                                <span>+55 (15) 98765-8271</span>
                            </h4>
                            <h5>{contact.group}</h5>
                            <button>VISUALIZAR</button>
                        </ContactContainer>
                    ))
                }
            </ContactsWrapper>
        </YourContactsContainer>
    );
}

export default YourContacts;