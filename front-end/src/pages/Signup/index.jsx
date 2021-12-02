import {
    PageContainer,
    MainComponent
} from '../../styles/RegisterStyled';

import RegisterForm from '../../components/register/RegisterForm';

const Signup = () => {
    return (
        <PageContainer>
            <MainComponent>
                <div className={'illustration'}> </div>
                <RegisterForm 
                    type={'Cadastrar'}
                    text={'Registre-se e tenha seus contatos salvos e organizados.'}
                />
            </MainComponent>
        </PageContainer>
    );
}

export default Signup;