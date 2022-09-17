function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    let hora = 19 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA 
        img.src = 'fotomanha.png' 
        document.body.style.background = '#f4e1bc' 
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#b33d1c'
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#073d4d'
    }
}
