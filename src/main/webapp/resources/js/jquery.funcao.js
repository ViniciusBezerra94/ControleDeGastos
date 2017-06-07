$('#gerarboleto').on("click", function () {
    $('#pedido').slideToggle();
});

$(function () {
    var atual, proximo, anterior;
    $('.proximo').click(function () {
        atual = $(this).parent();
        proximo = $(this).parent().next();

        $('#progresso li').eq($('#caixa').index(proximo)).addClass('ativo')
        atual.hide(800);
        proximo.show(800);
    });
});

$(function () {
    $("#abascadastro").tabs();
});


$(document).ready(function () {

    $("#img01").elevateZoom({
        gallery: 'galeria01',
        galleryActiveClass: 'active',
        imageCrossfade: true,
    });

    $("#img01").bind("click", function (e) {
        var ez = $('#img01').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
    });

    $("#img02").elevateZoom({
        gallery: 'galeria02',
        galleryActiveClass: 'active',
        imageCrossfade: true,
    });

    $("#img02").bind("click", function (e) {
        var ez = $('#img02').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
    });

    $("#img03").elevateZoom({
        gallery: 'galeria03',
        galleryActiveClass: 'active',
        imageCrossfade: true,
    });

    $("#img03").bind("click", function (e) {
        var ez = $('#img03').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
    });

    $("#img04").elevateZoom({
        gallery: 'galeria04',
        galleryActiveClass: 'active',
        imageCrossfade: true,
    });

    $("#img04").bind("click", function (e) {
        var ez = $('#img04').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
    });

});

$("#carrinho").mouseenter(function () {
    //mostra div
    $("#finalizar").modal({
        show: true

    });
    document.getElementById('frete').style.display = "none";
    document.getElementById('total').style.display = "none";
    document.getElementById('sair').style.display = "none";
    document.getElementById('finalizarcompra').style.height = "100%";
    event.preventDefault();
});


function mostrar_abas(obj) {

    document.getElementById('boleto').style.display = "none";
    document.getElementById('cartao').style.display = "none";
    switch (obj.id) {
        case 'mostra_aba1':
            document.getElementById('boleto').style.display = "block";
            break
        case 'mostra_aba2':
            document.getElementById('cartao').style.display = "block";
            break
    }
}
;

function mostrar_abas2(obj) {

    document.getElementById('pj').style.display = "none";
    switch (obj.id) {
        case 'mostra_pf':
            document.getElementById('pf').style.display = "block";
            break
        case 'mostra_pj':
            document.getElementById('pj').style.display = "block";
            break
    }
}
;

$(document).ready(function () {
    $("#mostra_pf").click(function (mostrar_abas2) {
        $("#pj").hide();
        $("#pf").toggle();
    });
    $("#mostra_pj").click(function (mostrar_abas2) {
        $("#pf").hide();
        $("#pj").toggle();
    });
});

$(document).ready(function () {
    $("#mostra_aba2").click(function (mostrar_abas) {
        $("#boleto").hide();
        $("#cartao").toggle();
    });
    $("#mostra_aba1").click(function (mostrar_abas) {
        $("#cartao").hide();
        $("#boleto").toggle();
    });
});

$(document).ready(function () {
    $().hide();
    $().click(function () {
        $(this).toggleClass(active).next().slideToggle("slow");
        return false;
    });
});

jQuery(function ($) {
    $("#pf\\:dataNasc").mask("99/99/9999", {placeholder: "dd/mm/aaaa"});
    $("#pf\\:rg").mask("99.999.999-9", {placeholder: "__.___.___-_"});
    $("#pf\\:cpf").mask("999.999.999-99", {placeholder: "___.___.___-__"});
    $("#pj\\:cnpj").mask("99.999.999/9999-99", {placeholder: "__.___.___/___-__"});
    $("#pf\\:cep").mask("99999-999", {placeholder: "_____-___"});
    $("#pj\\:ceppj").mask("99999-999", {placeholder: "_____-___"});
    $("#formulario\\:calculafrete").mask("99999-999", {placeholder: "_____-___"});
    $("#pf\\:tel").mask("(99) 9999.9999", {placeholder: "(   )___________"});
    $("#pj\\:tel1").mask("(99) 9999.9999", {placeholder: "(   )___________"});
    $("#pj\\:tel2").mask("(99) 9999.9999", {placeholder: "(   )___________"});
    $("#pf\\:celular").mask("(99) 99999.9999", {placeholder: "(   )____________"});
    $("#formulariopagamento\\:numcartao").mask("9999.9999.9999.9999", {placeholder: "________________"});
    $("#formulariopagamento\\:codseguranca").mask("999", {placeholder: "___"});

});

function teste() {
    bootbox.alert("Cadastrado com Sucesso").css({
        "font-size": "15pt",
        "font-family": "Helvetica",
        "color": "blue",
        "text-align": "center"

    });
}

function pedidocartao() {

    document.getElementById('pedidocartao').style.display = "block";

}

function pedidoboleto() {

    document.getElementById('pedidoboleto').style.display = "block";

}

$(function () {
    // valida o formulário
    $('#pf').validate({
        // define regras para os campos

        rules: {
            nome: {
                required: true,
                minlength: 5
            },
            cpf: {
                required: true,
            },
            telefone: {
                required: true
            },
            matricula: {
                required: true,
                number: true

            },
            login: {
                required: true,
                number: true
            },
            codigo: {
                required: true,
                number: true
            }

        },
        // define messages para cada campo
        messages: {
            nome: "Preencha o seu nome",
            cpf: "Preencha seu cpf",
            matricula: "Informe a matrícula",
            login: "Informe o login",
            codigo: "Informe o código",
            telefone: "Informe o telefone"
        }
    });
});

function validarCampos(pf) {
    senha = document.cadastro.senha.value
    rep_senha = document.cadastro.rep_senha.value
    if (senha != rep_senha) {
        alert("Repita a senha corretamente");
        document.cadastro.rep_senha.focus();
        return false;
    }
}

function maiuscula() {
    document.cadastro.nome.value = document.cadastro.nome.value.toUpperCase();
}

function minuscula() {
    document.cadastro.sobre_nome.value = document.cadastro.sobre_nome.value.toLowerCase();
}

function autenticado() {
    bootbox.alert("Logado com Sucesso").css({
        "font-size": "15pt",
        "font-family": "Helvetica",
        "color": "blue",
        "text-align": "center"

    });
}

function naoautenticado() {
    bootbox.alert("E-mail ou Senha incorreto!").css({
        "font-size": "15pt",
        "font-family": "Helvetica",
        "color": "red",
        "text-align": "center"

    });
    $(document).ready(function () {
        $('#login').modal();
    });

}

function naologado() {
    bootbox.alert("Faça o Login ou Cadastre-se no Site para Finalizar a compra").css({
        "font-size": "15pt",
        "font-family": "Helvetica",
        "color": "red",
        "text-align": "center"

    });
    $(document).ready(function () {
        $('#login').modal();
    });

}


function finalizar() {
    bootbox.alert("Sessão Finalizada").css({
        "font-size": "15pt",
        "font-family": "Helvetica",
        "color": "blue",
        "text-align": "center"

    });
}

function produtojaadicionado() {
    bootbox.alert("Produto já adicionado no carrinho!").css({
        "font-size": "15pt",
        "font-family": "Helvetica",
        "color": "red",
        "text-align": "center"

    });
}

function cepnaoencontrado() {
    bootbox.alert("CEP não encontrado!").css({
        "font-size": "15pt",
        "font-family": "Helvetica",
        "color": "red",
        "text-align": "center"

    });
}

function carrinhovazio() {
    bootbox.alert("Adicione produtos no seu carrinho").css({
        "font-size": "15pt",
        "font-family": "Helvetica",
        "color": "red",
        "text-align": "center"

    });

}

function barradeprogresso() {
    $(document).ready(function () {
        var width = 0;
        var tempo = 50;
        var carga = document.querySelector('.carga');
        var barra = setInterval(function () {
            width = width + 1;
            carga.style.width = width + '%';
            if (width === 100) {
                clearInterval(barra);
                width = 0;
                bootbox.alert("Adicione produtos no seu carrinho");
                document.getElementById('barra').style.display = "none";
            }
        }, tempo);

    });

}

