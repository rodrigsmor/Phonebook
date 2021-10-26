import {
    PageComponent,
    Main,
} from '../../styles/PageStyled';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';

const Home = () => {
    return (
        <PageComponent>
            <Header pageTitle={'Página Inicial'}/>
            <NavBar page={'home'}/>
            <Main></Main>
        </PageComponent>
    );
}

export default Home;