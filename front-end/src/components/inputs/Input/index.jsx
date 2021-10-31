import {
    InputBox,
    InputElement,
    LabelComponent,
} from './styled';

const Input = ({
    name, 
    type,
    className,
    labelContent
}) => {
    return (
        <InputBox
            className={'inputContainer ' + className }
        >
            <InputElement
                required
                type={type}
                name={name}
                autoComplete={'none'}
            />
            <LabelComponent htmlFor={name}>
                {labelContent}
            </LabelComponent>
        </InputBox>
    );
}

export default Input;