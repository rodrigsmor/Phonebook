import * as yup from 'yup';

const signschema = yup.object().shape({
    completeName: yup
                    .string()
                    .required("Nome é obrigatório")
                    .min(2, "Minímo de 2 caracteres"),
    username: yup
                .string()
                .required("O nome de usuário é obrigatório")
                .test(
                    'contains', 'O username deve conter um @',
                    val => val.indexOf('@') === 0
                )
                .min(5, 'Minímo de 5 caracteres'),
    email: yup
            .string()
            .required('O E-mail é obrigatório')
            .email('Digite um e-mail válido'),
    password: yup
                .string()
                .required('Senha é obrigatória')
                .min(6, 'Minímo de 6 caracteres'),
    confirmPassword: yup
                        .string()
                        .required('Campo obrigatório')
                        .oneOf(
                            [yup.ref('password'), null],
                            'As senhas precisam ser iguais'
                        ),
    termsOfService: yup
                .boolean()
                .required('Precisa concordar com os termos')
                .oneOf(
                    [true],
                    'Precisa concordar com os termos'
                )
});

export default signschema;