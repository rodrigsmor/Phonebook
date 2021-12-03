import {
    PageContainer,
} from './styled';

import Main from './components/Main';
import Footer from './components/Footer';
import Header from '../../components/register/Header';

const PageNotFound = () => {
    return (
        <PageContainer>
            <Header />
            <Main />
            <Footer />
        </PageContainer>
    );
}

export default PageNotFound;