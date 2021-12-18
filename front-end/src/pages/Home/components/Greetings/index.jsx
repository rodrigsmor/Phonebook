import {
    GreetingsBox,
} from './styled';

import { useHistory } from 'react-router-dom';
import image from '../../../../images/welcome.svg';

const Greetings = () => {
    const navigate = useHistory();

    return (
        <GreetingsBox>
            <article>
                <h3>Olá, Rodrigo M.</h3>
                <p>
                    Bem-vindo de volta!
                </p>

                <button
                    onClick={() => {
                        navigate.push('/user/contacts');
                    }}
                >
                    Ver contatos
                </button>
            </article>

            <div>
                <img 
                    src={image} 
                    alt={'ilustração de um garoto em cima de um planeta enquanto segura um celular em sua mão e o observa.'} 
                />
            </div>
        </GreetingsBox>
    );
}

export default Greetings;