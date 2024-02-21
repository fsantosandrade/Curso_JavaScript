window.document.querySelector('input#bot').addEventListener('click', tabuada)

function tabuada(){
    var num = document.querySelector('input#tx')
    var res = document.querySelector('select#res')
    res.innerHTML = ''
    if(num.value.length == 0){
        window.alert("[ERRO] Preencha todos os campos!");
    }else{
        var n = Number(num.value)
        for(var m = 0; m <= 10; m++){
            var som = n * m
            var item = document.createElement('option')
            item.text = `${n} x ${m} = ${som}`
            res.appendChild(item)
        }
    }
}