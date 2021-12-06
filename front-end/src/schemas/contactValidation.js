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
             ),
        contactPicture: yup.lazy((value) =>
                /^data/.test(value)
                        ? yup.string()
                                .trim()
                                .matches(
                                /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)$/i,
                                'Selecione uma imagem',
                        )
                        : yup.string().trim().url('Selecione uma imagem'),
        ),
});

export default schema;