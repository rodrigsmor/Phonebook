import { Link } from 'react-router-dom';
import Input from '../../../inputs/Input';
import CheckBox from '../../../inputs/CheckBox';

import {
    FormFields,
    SignUpSubmit,
    FirstPageContainer,
    ButtonWrapperField,
} from './styled';

const FirstPage = ({ fields, register, termsOfService, profilePicture, className }) => {
    return (
        <FirstPageContainer className={className}>
            {
                fields.map((field, id) => (
                    <FormFields key={id}>
                        <Input
                            type={field.typeOfField}
                            name={field.fieldName}
                            register={register}
                            labelContent={field.labelContent}
                        />
                        <p className={'errors'}> {field.errorField?.message} </p>
                    </ FormFields>
                ))
            }

            <FormFields>
                <CheckBox
                    register={register}
                    name={'termsOfService'}
                    labelContent={'Concorda com os nossos Termos de Uso?'}
                />
                <p className={'errors'}> {termsOfService?.message} </p>
                <p className={'errors'}> {profilePicture?.message} </p>
            </FormFields>

            <ButtonWrapperField>
                <Link
                    to={'/user/login'}
                    className={'cta-left'}
                >
                    fazer login
                </Link>
                <SignUpSubmit
                    type={'submit'}
                    value={'prosseguir'}
                />
            </ButtonWrapperField>
        </FirstPageContainer>
    );
}

export default FirstPage;