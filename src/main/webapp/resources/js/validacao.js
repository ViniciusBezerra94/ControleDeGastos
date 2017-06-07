/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    $(document).ready(function(){
    $("#formCadastro").validate({
        debug: false,
        rules: {
            'formCadastro:email': {
                required: true,
                email: true
                
            },
            'formCadastro:nome' :{
                required: true,
                minlength: 3,
                number: false
            },
            'formCadastro:pws' :{

                minlength: 6,
                maxlength: 10,
                required: true
            },
            'formCadastro:confpws' :{
                equalTo: '#formCadastro\\:pws'
            }
           
        },
        messages: {
            'formCadastro:email' : {
                required: "Por favor insira um e-mail",
                email: "E-Mail Inválido"
                
            },
            'formCadastro:nome' :{
                required: "Por favor insira um nome",
                minlength: "Por favor insira um nome válido"
            },
            'formCadastro:pws' :{
                minlength: "A senha deve conter no mínimo 6 caracteres",
                maxlength: "A senha deve conter no máximo 10 caracteres",
                required: "Por favor insira uma senha"
            },
            'formCadastro:confpws' :{
                equalTo: "Senhas Diferentes"
            }

        }

    
        

        });
    });