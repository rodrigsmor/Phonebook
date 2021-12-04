import {
    LabelUpload,
    UploadContainer,
} from './styled';

import { BiCamera } from 'react-icons/bi';
import UserSvg from '../../../images/UserSvg';
import { useEffect, useRef, useState } from 'react';

const Upload = ({ name }) => {
    const [ image, setImage ] = useState(null);
    const [ preview, setPreview ] = useState(null);

    useEffect(() => {
        if(image) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setPreview(reader.result);
            }

            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }
    }, [ image ]);

    return (
        <UploadContainer
            className={'upload'}
        >
            <LabelUpload htmlFor={'upload'}>
                <BiCamera />
            </LabelUpload>
            <input
                type={'file'}
                name={name}
                id={'upload'}
                accept={'image/*'}
                onChange={(event) => {
                    const file = event.target.files[0];

                    if(file && file.type.substr(0, 5) === 'image') {
                        setImage(file);
                    } else {
                        setImage(null);
                    }
                }}
            />
            {
                preview 
                    ? (
                        <img
                            src={preview}
                            alt={'imagem selecionada'}
                        />
                    )
                    : <UserSvg />
            }
            <span></span>
        </UploadContainer>
    );
}

export default Upload;