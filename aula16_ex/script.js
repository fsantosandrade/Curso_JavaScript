window.document.querySelector('input#botad').addEventListener('click', adicionar)
window.document.querySelector('input#fim').addEventListener('click', finalizar)

let num = document.querySelector('input#tx')
let res = document.querySelector('select#res')
let arm = []
let total = document.querySelector('div#total')

function isnumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isnumber(num.value) && !inlista(num.value, arm) && num.value.length >= 1){
        let n = Number(num.value)
        let item = document.createElement('option')
        item.text = `Número ${n} adicionado`
        res.appendChild(item)
        arm.push(n)
    }else{
         window.alert('[ERRO]')
    }
    num.value = ''
    num.focus()
}

function numcad(){
    let p = arm.length
    return p
}

function finalizar(){
    if(arm.length == 0){
        window.alert('[ERRO]')
    }else{
        var maior = arm[0]
        var menor = arm[0]
        var soma = 0
        media = 0
        for(let i in arm){
            soma += arm[i]
            
            if(arm[i] > maior){
                maior = arm[i]
            }if(arm[i] < menor){
                menor = arm[i]
            }
        }
        media = soma / arm.length
    total.innerHTML = `Ao todo temos ${numcad()} números cadastrados<br>
    O menor número é ${menor}<br>
    O maior número é ${maior}<br>
    A soma dos valores é ${soma}<br>
    A média desses valores é ${media}`
    }
    
}