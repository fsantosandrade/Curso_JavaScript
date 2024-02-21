let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

/*for(let i = 0; i < valores.length; i++){
    console.log(valores[i])
} */  

//for otimizado para vetores
for(let i in valores){
    console.log(valores[i])
}