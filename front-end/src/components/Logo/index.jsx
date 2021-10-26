import {
    LogoContainer,
    LogoTypo
} from './styled'

import LogoSvg from '../../images/logoSvg';

const Logo = () => {
    return (
        <LogoContainer>
            <LogoSvg />
            <LogoTypo>
                Cont
                <span>Lotus</span>
            </LogoTypo>
        </LogoContainer>
    );
}

export default Logo;