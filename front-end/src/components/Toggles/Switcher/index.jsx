import {
    SwitchWrapper,
} from './styled'

import { BsCloudSun, BsCloudMoon } from 'react-icons/bs'

import { useState } from 'react';
import { useAuth } from '../../../providers/auth';

const Switcher = () => {
    const { theme, setTheme } = useAuth();
    const [ icon, setIcon ] = useState(BsCloudSun);

    const changeTheme = () => {
        let temp = theme === 'light' ? 'dark'
                                     : 'light'
        
        setTheme(temp);
    
        temp = theme === 'light' ? BsCloudMoon
                                 : BsCloudSun;
    
        setIcon(temp)
    }

    return (
        <SwitchWrapper>
            <button
                onClick={changeTheme}
                className={theme}
            >
                    {icon}
            </button>
        </SwitchWrapper>
    );
}

export default Switcher;