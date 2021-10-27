import {
    PageComponent,
} from '../../styles/PageStyled';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import Main from './components/main';

const Home = () => {
    return (
        <PageComponent>
            <Header pageTitle={'Página Inicial'}/>
            <NavBar page={'home'}/>
            <Main />
        </PageComponent>
    );
}

export default Home;