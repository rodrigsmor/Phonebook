import {
    PageContainer,
} from './styled';

import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

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