function carregar() {
    var msg = document.getElementById('msg')
    var ims = document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}horas.`
}