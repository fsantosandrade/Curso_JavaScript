window.document.querySelector('input#bot').addEventListener('click', verificar)

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.querySelector('input#anotx')
    var img = window.document.querySelector('img#img')
    var res = document.querySelector('div#res')
    if(formano.value.length == 0 || formano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else{
        var formsex = document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(formsex[0].checked){
            genero = 'Homem'
            if(idade > 12 && idade < 18){
                img.setAttribute('src', 'homemjovem.jpg')
            }else if(idade < 60){
                img.setAttribute('src', 'homemadulto.jpg')
            }else if(idade <= 105){
                img.setAttribute('src', 'homemidoso.jpg')
            }else{
                window.alert('[ERRO] Verifique os dados e tente novamente.')
            }
        }else{
            genero = 'Mulher'
            if(idade > 12 && idade < 18){
                img.setAttribute('src', 'mulherjovem.jpg')
            }else if(idade < 60){
                img.setAttribute('src', 'mulheradulta.jpg')
            }else if(idade <= 105){
                img.setAttribute('src', 'mulheridosa.jpg')
            }else{
                window.alert('[ERRO] Verifique os dados e tente novamente.')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}