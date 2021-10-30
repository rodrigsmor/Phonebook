import {
    MainContentBox,
    BackgroundScreen,
} from './styled';

import SideBox from './components/SideBox';
import ContactForm from './components/ContactForm';

const AddContact = ({ display, setDisplay }) => {
    return (
        <BackgroundScreen 
            className={display}
        >
            <MainContentBox>
                <SideBox />
                <ContactForm />
            </MainContentBox>
        </BackgroundScreen>
    );
}

export default AddContact;