import {
    MainContentBox,
    BackgroundScreen,
} from './styled';

import { useAuth } from '../../../providers/auth';

import SideBox from './components/SideBox';
import ContactForm from './components/ContactForm';

const AddContact = () => {
    const { displayModal } = useAuth();

    return (
        <BackgroundScreen 
            className={displayModal}
        >
            <MainContentBox>
                <SideBox />
                <ContactForm />
            </MainContentBox>
        </BackgroundScreen>
    );
}

export default AddContact;