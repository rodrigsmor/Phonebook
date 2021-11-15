import * as yup from 'yup';

const schema = yup.object().shape({ 
    completeName: yup
                    .string()
                    .min(2, "Minímo de 2 caracteres")
                    .required("Nome é obrigatório"),
    email: yup
            .string()
            .email("Digite um e-mail válido"),
    phone: yup
            .string()
            .test(
                'len', "Digite um telefone válido", 
                val => val.replace(/\D/g, '').length === 13
            )
            .required("O telefone é obrigatório"),
    groups: yup
             .string()
             .required("Selecione um grupo"),
});

export default schema;