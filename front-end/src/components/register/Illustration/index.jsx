import {
    IllustrationContainer
} from './styled';

import Image from '../../../images/signup_image.svg'

const Illustration = () => {
    return (
        <IllustrationContainer>
            <img
                src={Image}
                alt={'Ilustração'}
            />
        </ IllustrationContainer>
    );
}

export default Illustration;