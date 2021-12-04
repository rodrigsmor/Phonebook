import {
    IllustrationContainer
} from './styled';

import Login from '../../../images/login.svg'
import Signup from '../../../images/signup_image.svg'

const Illustration = ({ type }) => {
    return (
        <IllustrationContainer className={type}>
            {
                type === 'login' 
                    ? (
                        <img
                            src={Login}
                            alt={'Ilustração de uma garota sentada no planeta Terra navegando na internet.'}
                        />
                    )
                    : (        
                            <img
                                src={Signup}
                                alt={'Ilustração de um cientista criando um perfil humano.'}
                            />
                    )
            }
        </ IllustrationContainer>
    );
}

export default Illustration;