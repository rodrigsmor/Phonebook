import * as yup from 'yup';

const loginschema = yup.object().shape({
    username: yup
                .string()
                .test(
                    'isEmpty', 'Esse campo é obrigatório',
                    val => val !== ''
                )
                .test(
                    'contains', 'O username deve conter um @',
                    val => val.indexOf('@') === 0
                )
                .min(5, 'Minímo de 5 caracteres'),
    email: yup
            .string()
            .required('O e-mail é obrigatório')
            .email('Digite um e-mail válido'),
    password: yup
                .string()
                .required('Senha é obrigatória')
                .min(6, 'Minímo de 6 caracteres'),
});

export default loginschema;