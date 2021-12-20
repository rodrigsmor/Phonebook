import {
    ContactsMin,
    BoxContainer,
    ContactsWrapper
} from './styled';

const RecentContacts = () => {
    const contacts = [
        {
            name: 'Thales Jorge Cristo',
            phone: '+55 (95) 99730-9637',
            image: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg'
        },
        {
            name: 'Breno Emanuel Giovanni',
            phone: '+55 (83) 98782-1125',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f'
        },
        {
            name: 'Clarice Agatha',
            phone: '+55 (69) 98438-3161',
            image: 'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb'
        },
        {
            name: 'Josias Santana',
            phone: '+55 (54) 98823-9182',
            image: 'https://uifaces.co/our-content/donated/FJkauyEa.jpg'
        },
        {
            name: 'Samyra Carvalho Soares',
            phone: '+55 (78) 78451-9121',
            image: 'https://randomuser.me/api/portraits/women/9.jpg'
        },
        {
            name: 'Camyr Dj',
            phone: '+55 (81) 98221-2212',
            image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=73a9df4b7bd1b330db1e903e08575ec1'
        },
        {
            name: 'Amandha Sahmile',
            phone: '+55 (13) 98876-8221',
            image: 'https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82'
        },
        {
            name: 'Sandro Rafhel',
            phone: '+55 (21) 89177-2212',
            image: 'https://uifaces.co/our-content/donated/VxDQx_gA.jpg'
        },
    ];

    return (
        <BoxContainer>
            <h3>Adicionados recentemente</h3>
            <ContactsWrapper>
                {
                    contacts.map((contact, id) => (
                        <div className={'contactWrapper'}>
                            <ContactsMin key={id}>
                                <figure>
                                    <img 
                                        src={ contact.image }
                                        alt={`imagem de contato do ${contact.name}`}
                                        title={ contact.name }
                                    />
                                </figure>
                                <h4>{ contact.name }</h4>
                                <h5>{ contact.phone }</h5>
                            </ContactsMin>
                        </div>
                    ))
                }
            </ContactsWrapper>
        </BoxContainer>
    );
}

export default RecentContacts;