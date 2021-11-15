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
            .min(19, "precisa ter 19 caracteres")
            .max(20, "precisa ter ")
            .required("O telefone é obrigatório"),
    groups: yup
             .string()
             .required("Selecione um grupo"),
});

export default schema;