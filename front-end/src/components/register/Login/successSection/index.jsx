import {
    MessageWarning,
    FunctionMessage,
    SuccessContainer,
    GreetingsUserText,
} from './styled';

import { GiCheckMark } from 'react-icons/gi';

const SuccessSection = ({ className }) => {
    return (
        <SuccessContainer className={className}>
            <GreetingsUserText>Bem-vindo, Usuário</GreetingsUserText>
            <MessageWarning>Login efetuado com sucesso</MessageWarning>
            <span className={'success-icon'}>
                <GiCheckMark />
            </span>
            <FunctionMessage>redirecionando para a página inicial da aplicação...</FunctionMessage>
        </SuccessContainer>
    );
}

export default SuccessSection;