import {
    SocialMedias,
    FooterContainer
} from './styled';

import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <FooterContainer>
            <SocialMedias>
                <BsGithub />
                <BsTwitter />
                <BsLinkedin />
            </SocialMedias>

            <cite>@2021 - Rodrigo Moreira</cite>
        </FooterContainer>
    );
}

export default Footer;