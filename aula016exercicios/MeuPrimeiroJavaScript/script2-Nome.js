function analisar() {
        nome = 'Jair' // Saber como pegar variavel de arquivo HTML anterior e depois como reproduzir ele dentro da div
        document.write(`Bem vindo(a), ${nome}! Seu nome tem ${nome.length} letras. Escrito em maiúsculas dessa maneira (${nome.toUpperCase()}) e em minúsculas dessa maneira (${nome.toLowerCase()})!`)
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