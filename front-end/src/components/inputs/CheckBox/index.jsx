import {
    Label,
    CheckBoxElement,
    CheckBoxContainer
} from './styled';

const CheckBox = ({ labelContent, register, name  }) => {
    return (
        <CheckBoxContainer>
            <CheckBoxElement
                id={name}
                type={'checkbox'}
                { ...register(name) }
                name={name}
            />
            <Label htmlFor={name}>
                {labelContent}
            </Label>
        </ CheckBoxContainer>
    );
}

export default CheckBox;