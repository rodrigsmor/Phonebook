import {
    SwitchWrapper,
} from './styled'

import { BsCloudSun, BsCloudMoon } from 'react-icons/bs'

import { useState } from 'react';

const Switcher = () => {
    const [ mode, setMode ] = useState('light');
    const [ icon, setIcon ] = useState(BsCloudSun);

    return (
        <SwitchWrapper>
            <button
                onClick={() => {
                    let temp = mode === 'light' ? 'dark'
                                                : 'light'
                    
                    setMode(temp);

                    temp = mode === 'light' ? BsCloudMoon
                                            : BsCloudSun;

                    setIcon(temp)
                }}
                className={mode}>
                    {icon}
            </button>
        </SwitchWrapper>
    );
}

export default Switcher;