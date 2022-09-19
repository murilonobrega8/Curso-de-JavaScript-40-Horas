let sobrenome = document.querySelector('input#txtnome')
var res = document.querySelector('div#res')

function analisar() {
        res.innerHTML = `Bem vindo(a), ${sobrenome}! Seu sobrenome tem ${sobrenome.length} letras. Escrito em maiúsculas dessa maneira (${sobrenome.toUpperCase()}) e em minúsculas dessa maneira (${sobrenome.toLowerCase()})!`
}

function continuar() {
        window.location.href="page98-AnNum.html";
}

function encerrar() {
        window.location.assign("page99-Fim.html");
}

function voltar() {
        window.location.href="page1-Home.html";
}