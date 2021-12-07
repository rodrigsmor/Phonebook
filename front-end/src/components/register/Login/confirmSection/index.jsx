import {
    UserProfile,
    UserPicture,
    ButtonConfirm,
    ConfirmButtons,
    ConfirmContainer,
} from './styled';

import defaultPicture from '../../../../images/dataUri/patternPicture';

const ConfirmSection = ({
    className,
    setSectionNumber,
}) => {
    return (
        <ConfirmContainer className={className}>
            <UserProfile>
                <h4>Continuar como Usuário</h4>
                <UserPicture
                    src={defaultPicture}
                    alt={'Imagem de perfil do usuário'}
                /> 
            </UserProfile>

            <ConfirmButtons>
                <button 
                    className={'cta-left'}
                    onClick={(e) => {
                        e.preventDefault();

                        setSectionNumber(0);
                    }}
                >
                    cancelar
                </button>

                <ButtonConfirm
                    type={'submit'}
                    value={'confirmar'}
                />
            </ConfirmButtons>
        </ ConfirmContainer>
    );
}

export default ConfirmSection;