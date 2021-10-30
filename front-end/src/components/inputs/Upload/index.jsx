import {
    LabelUpload,
    UploadContainer,
} from './styled';

import { BiCamera } from 'react-icons/bi';

const Upload = () => {
    return (
        <UploadContainer
            className={'upload'}
        >
            <LabelUpload htmlFor={'upload'}>
                <BiCamera />
            </LabelUpload>
            <input
                type={'file'}
                name={'contactPhoto'}
                id={'upload'}
                accept={'image/*'}
            />
            <img 
                src={'https://uifaces.co/our-content/donated/vIqzOHXj.jpg'}
                alt={'imagem selecionada'}
            />
            <span></span>
        </UploadContainer>
    );
}

export default Upload;