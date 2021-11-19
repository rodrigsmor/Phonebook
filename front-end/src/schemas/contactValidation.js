import * as yup from 'yup';

const schema = yup.object().shape({ 
    completeName: yup
                    .string()
                    .required("Nome é obrigatório")
                    .min(2, "Minímo de 2 caracteres"),
    email: yup
            .string()
            .email("Digite um e-mail válido"),
    phone: yup
            .string()
            .required("O telefone é obrigatório")
            .test(
                'len', "Digite um telefone válido", 
                val => val.replace(/\D/g, '').length === 13
            ),
    group: yup
             .string()
             .ensure()
             .test(
                'matchValues', 'Selecione um valor válido',
                val => [
                        'Escola',
                        'Amigos',
                        'Contatos',
                        'Parentes',
                        'Trabalho',
                        'Outros'
                ].includes(val)
             )
});

export default schema;