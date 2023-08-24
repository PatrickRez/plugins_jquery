

$(document).ready(function () {
    $('#telefone').mask('(00) 0 0000-0000')
    $('#Cep').mask('0 0000-000')
    $('#Cpf').mask('000-000-000-00')

    $('formValid').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                Number: true
            },
            Cep: {
                required: true,
                Number: true
            },
            Cpf: {
                required: true,
                Number: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numeberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

})