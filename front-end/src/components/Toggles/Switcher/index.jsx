import {
    SwitchWrapper,
} from './styled'

import { BsCloudSun, BsCloudMoon } from 'react-icons/bs'

import { useState } from 'react';
import { useAuth } from '../../../providers/auth';

const Switcher = () => {
    const { theme, setTheme } = useAuth();

    const showIcon = () => {
        if(theme === 'light')
            return <BsCloudSun />
        else
            return <BsCloudMoon />
    }
    
    const changeTheme = () => {
        if(theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light')
        }
    }
    
    return (
        <SwitchWrapper>
            <button
                onClick={changeTheme}
                className={theme}
            >
                    {showIcon()}
            </button>
        </SwitchWrapper>
    );
}

export default Switcher;