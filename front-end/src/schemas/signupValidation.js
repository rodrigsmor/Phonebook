import * as yup from 'yup';

const signschema = yup.object().shape({
    completeName: yup
                    .string()
                    .required("Nome é obrigatório")
                    .min(2, "Minímo de 2 caracteres"),
    username: yup
                .string()
                .required("Nome de usuário é obrigatório")
                .test(
                    'contains', 'Deve iniciar com um @',
                    val => val.indexOf('@') === 0
                )
                .test(
                    'space', 'Não pode conter espaços',
                    val => !/[\s]/g.test(val)
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
                ),
    profilePicture: yup.lazy((value) =>
            /^data/.test(value)
                ? yup.string()
                    .required('Selecione uma imagem')
                    .trim()
                    .matches(
                        /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)$/i,
                        'Selecione uma imagem',
                    )
                : yup.string().required('Selecione uma imagem').trim().url('Selecione uma imagem'),
        ),
});

export default signschema;