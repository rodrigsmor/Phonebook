import * as yup from 'yup';

const loginschema = yup.object().shape({
    username: yup
                .string()
                .required('O nome de usuário é obrigatório')
                .test(
                    'contains', 'O username deve conter um @',
                    val => val.indexOf('@') === 0
                )
                .min(5, 'Minímo de 5 caracteres'),
    password: yup
                .string()
                .required('Senha é obrigatória')
                .min(6, 'Minímo de 6 caracteres'),
});

export default loginschema;