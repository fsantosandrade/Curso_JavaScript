function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 16
    msg.innerHTML = `Agora são ${hora} horas!`
    if(hora >= 0 && hora < 13){
        //BOM DIA
        img.src = 'fotodia.jpg'
        document.body.style.background = 'blue'
    }else if(hora < 18){
        //BOA TARDE
        img.src = 'fototarde.jpg'
        document.body.style.background = 'orange'
    }else{
        //BOA NOITE
        img.src = 'fotonoite.jpg'
        document.body.style.background = 'gray'
    }
}
