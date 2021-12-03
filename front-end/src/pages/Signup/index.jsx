import {
    PageContainer,
    MainComponent
} from '../../styles/RegisterStyled';

import Header from '../../components/register/Header'
import RegisterForm from '../../components/register/RegisterForm';
import Illustration from '../../components/register/Illustration';

const Signup = () => {
    return (
        <PageContainer>
            <Header where={'signup'} />
            <MainComponent>
                <Illustration />
                <RegisterForm
                    type={'Cadastrar'}
                    text={'Registre-se e tenha seus contatos salvos e organizados.'}
                />
            </MainComponent>
        </PageContainer>
    );
}

export default Signup;