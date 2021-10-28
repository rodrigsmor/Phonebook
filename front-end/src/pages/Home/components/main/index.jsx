import {
    MainContainer,
    GreetingsBox
} from './styled'

import ToRemember from '../ToRemember';
import Statistics from '../Statistics'
import YourContacts from '../YourContacts';
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

            <ToRemember />
            <RecentContacts />
            <YourContacts />
            <Statistics />
        </MainContainer>
    );
}

export default Main;