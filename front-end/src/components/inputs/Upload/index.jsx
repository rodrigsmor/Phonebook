import {
    LabelUpload,
    UploadContainer,
} from './styled';

import { BiCamera } from 'react-icons/bi';
import UserSvg from '../../../images/UserSvg';
import { useEffect, useState } from 'react';

import defaultPicture from '../../../images/dataUri/patternPicture';

const Upload = ({ name, setValue, picture, setPicture }) => {
    const [ image, setImage ] = useState(null);
    const [ preview, setPreview ] = useState(null);

    useEffect(() => {
        if(image) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setPreview(reader.result);
                setPicture(reader.result);
            }

            reader.readAsDataURL(image);
        } else {
            setPreview(null);
            setPicture(' ');
        }
    }, [image, name, setPicture, setValue]);

    useEffect(() => {
        if( picture === defaultPicture) {
            setPreview(null);
        }
    }, [picture, preview]);

    return (
        <UploadContainer
            className={'upload'}
        >
            <LabelUpload htmlFor={name}>
                <BiCamera />
            </LabelUpload>
            <input
                id={name}
                name={name}
                type={'file'}
                accept={'image/*'}
                onChange={(event) => {
                    const file = event.target.files[0];

                    if(file && file.type.substr(0, 5) === 'image') {
                        setImage(file);
                    } else {
                        setImage(null);
                        setValue(name, null);
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