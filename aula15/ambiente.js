let num = [5, 8, 2, 9, 3]
num[5] = 6
num.push(1)
num.sort()

let p = num.indexOf(8)
if(p == -1){
    console.log('valor não encontrado')
}else{
    console.log(num)
    console.log(`O número 8 está na posição ${p}`)
}
