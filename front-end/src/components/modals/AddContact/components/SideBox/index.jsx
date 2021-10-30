import {
    SideContainer,
} from './styled';

import Logo from '../../../../Logo';
import image from '../../../../../images/new-contact.svg';

const SideBox = () => {
    return (
        <SideContainer>
            <Logo />
            <img
                src={image}
                alt={''}
            />
            <p>
                Salve seus contatos para nunca mais esquecê-los.
            </p>
        </SideContainer>
    );
}

export default SideBox;