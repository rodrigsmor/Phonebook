import {
    MainContainer,
    GreetingsBox
} from './styled'

import RecentContacts from '../RecentContacts';
import image from '../../../../images/welcome.svg';

const Main = () => {
    return (
        <MainContainer>
            <GreetingsBox className="box-1">
                <article>
                    <h3>Olá, Rodrigo M.</h3>
                    <p>Bem-vindo de volta! Dê uma olhada nos seus contatos!</p>

                    <button>
                        Ver contatos
                    </button>
                </article>

                <img src={image} alt={'character'} />
            </GreetingsBox>

            <section className="box-2"></section>
            <RecentContacts />
            <section className="box-4"></section>
            <aside className="box-5"></aside>
        </MainContainer>
    );
}

export default Main;