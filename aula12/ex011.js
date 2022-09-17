let idade = 38
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não Vota!')
} else if (idade < 18 || idade > 65) { // (idade >= 16) no início é desnecessário pois só chega até aqui se for 16+
        console.log('Voto Opcional!')
    } else {
        console.log('Voto Obrigatório!')
}