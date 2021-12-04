import {
    PageContainer,
    MainComponent
} from '../../styles/RegisterStyled';

import Header from '../../components/register/Header';
import RegisterForm from '../../components/register/RegisterForm';
import Illustration from '../../components/register/Illustration';

const Login = () => {
    return (
        <PageContainer>
            <Header where={'login'} />
            <MainComponent>
                <Illustration type={'login'}/>
                <RegisterForm
                    type={'Entrar'}
                    text={'Bem-vindo! Seus contatos estão com saudades.'}
                />
            </MainComponent>
        </PageContainer>
    );
}

export default Login;