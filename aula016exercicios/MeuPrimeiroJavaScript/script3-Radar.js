var res = document.querySelector('div#res')
let vel = document.querySelector('div#vel')
let a = window.document.querySelector('div#area')
let si = 0
let sf = 0

a.addEventListener('mousedown', clicar)
a.addEventListener('mouseup', soltar) 
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
        vel.innerHTML = `Detectando velocidade...`
        var data = new Date();
        si = data.getSeconds();
        a.innerText = 'Solte e Reduza!'
        a.style.background = 'orange'
        res.innerHTML = 'Acelerando!'
}

function soltar() {
        var data = new Date();
        sf = data.getSeconds();
        if (sf-si < 0) {
                vel.innerHTML = `Radar com defeito! Dessa vez você deu sorte!`
                res.innerHTML = `A velocidade máxima atingida não foi detectada!`
        } else if (sf-si == 0) {
                a.innerText = 'Aceleração zero!'
                a.style.background = 'blue'
                vel.innerHTML = `Velocímetro: ${(sf-si)*20}km/h`
                res.innerHTML = `A velocidade máxima atingida foi de ${(sf-si)*20}km/h! Veículo no Neutro, acelere novamente!`
        } else if ((sf-si)*20 < 61) {
                a.innerText = 'Reduzindo velocidade!'
                a.style.background = 'blue'
                vel.innerHTML = `Velocímetro: ${(sf-si)*20}km/h`
                res.innerHTML = (`A velocidade máxima atingida foi de ${(sf-si)*20}km/h! Velocidade dentro do limite! Dirija sempre com cinto de segurança!`)
        } else if ((sf-si)*20 < 100) {
                a.innerText = 'MULTADO!'
                a.style.background = 'red'
                vel.innerHTML = `Velocímetro: ${(sf-si)*20}km/h`
                res.innerHTML = `A velocidade máxima atingida foi de ${(sf-si)*20}km/h! Multa GRAVE!`
        } else {
                a.innerText = 'MULTADO!'
                a.style.background = 'red'
                vel.innerHTML = `Velocímetro: ${(sf-si)*20}km/h`
                res.innerHTML = `A velocidade máxima atingida foi de ${(sf-si)*20}km/h! Multa GRAVÍSSIMA! CNH SUSPENSA!`
        }
        
}

function entrar() {
        a.innerText = 'Carro ligado!'
        a.style.background = 'green'
}

function sair() {
        a.innerText = "Carro desligado!"
        a.style.background = 'black';
}

function continuar() {
        window.location.href="page97-AnEle.html";
}

function encerrar() {
        window.location.assign("page99-Fim.html");
}

function voltar() {
        window.location.href="page2-Nome.html";
}