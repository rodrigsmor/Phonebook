import * as yup from 'yup';

const emailschema = yup.object().shape({
    email: yup
            .string()
            .required('O e-mail é obrigatório')
            .email('Digite um e-mail válido'),
    password: yup
                .string()
                .required('Senha é obrigatória')
                .min(6, 'Minímo de 6 caracteres'),
});

export default emailschema;