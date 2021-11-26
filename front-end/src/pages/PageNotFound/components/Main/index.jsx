import {
    Redirect,
    WarningText,
    MainComponent,
    ImageContainer
} from './styled';

import { FiChevronRight } from 'react-icons/fi';
import Image from '../../../../images/not-found.svg';

const Main = () => {
    return (
        <MainComponent>
            <ImageContainer>
                <img
                    src={Image}
                    alt={'Uma ilustração'}
                />
            </ImageContainer>

            <WarningText>
                <h2>404</h2>
                <h3>PÁGINA NÃO ENCONTRADA</h3>
                <h5>A página que você está procurando não está disponível</h5>
            
                <Redirect to={'/'}>
                    Ir para a Página Inicial
                    <FiChevronRight />
                </Redirect>
            </WarningText>
        </MainComponent>
    );
}

export default Main;