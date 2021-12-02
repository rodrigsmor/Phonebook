import {
    GreetingsBox,
} from './styled';

import image from '../../../../images/welcome.svg';

const Greetings = () => {
    return (
        <GreetingsBox>
            <article>
                <h3>Olá, Rodrigo M.</h3>
                <p>
                    Bem-vindo de volta!
                    Dê uma olhada nos seus contatos!
                </p>

                <button>
                    Ver contatos
                </button>
            </article>

            <img src={image} alt={'character'} />
        </GreetingsBox>
    );
}

export default Greetings;