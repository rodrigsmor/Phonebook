import {
    ToRememberContainer,
    ContactMin
} from './styled';

const ToRemember = () => {
    const contacts = [
        {
            name: 'Rodrigo',
            image: 'https://images.unsplash.com/photo-1598411072028-c4642d98352c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Sabrina',
            image: 'https://images.unsplash.com/photo-1546539782-6fc531453083?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
        },
        {
            name: 'Samantha',
            image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Wellington',
            image: 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            name: 'Katarina',
            image: 'https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
    ];

    return (
        <ToRememberContainer>
            <h3>Para se lembrar</h3>
            <div className={'cardWrapper'}>
                {
                    contacts.map((contact, id) => (
                        <ContactMin key={id}>
                            <figure>
                                <img 
                                    src={contact.image}
                                    alt={`Imagem de perfil de ${contact.name}`} 
                                />
                            </figure>
                            <span>{ contact.name }</span>
                        </ContactMin>
                    ))
                }
            </div>
        </ToRememberContainer>
    );
}

export default ToRemember;