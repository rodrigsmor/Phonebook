import {
    MainContainer,
} from './styled'

import Greetings from '../Greetings';
import ToRemember from '../ToRemember';
import Statistics from '../Statistics';
import YourContacts from '../YourContacts';
import RecentContacts from '../RecentContacts';

const Main = () => {
    return (
        <MainContainer>
            <Greetings />
            <ToRemember />
            <RecentContacts />
            <Statistics />
            <YourContacts />
        </MainContainer>
    );
}

export default Main;