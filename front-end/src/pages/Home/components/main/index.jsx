import {
    MainContainer,
} from './styled'

import ToRemember from '../ToRemember';
import Statistics from '../Statistics'
import Greetings from '../Greetings';
import YourContacts from '../YourContacts';
import RecentContacts from '../RecentContacts';

const Main = () => {
    return (
        <MainContainer>
            <Greetings />
            <ToRemember />
            <RecentContacts />
            <YourContacts />
            <Statistics />
        </MainContainer>
    );
}

export default Main;