let num = [5, 8, 2, 9, 3] // 0-1-2-3-4

console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posições!`)

num[5] = 6 // Acrescenta automaticamente o vetor num5 que não existia

console.log(num)
console.log(`Nosso vetor agora é o ${num}`)
console.log(`Agora, nosso vetor tem ${num.length} posições!`)

num.push(9) // Acrescenta e cria automaticamente após o último vetor existente

console.log(num)
console.log(`Nosso vetor agora é o ${num}`)

console.log(`Agora, nosso vetor tem ${num.length} posições!`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log(`Ordenando crescente, nosso vetor será: ${num.sort()}`)

console.log(`Agora, o primeiro valor do vetor é ${num[0]}`)

//-------#------------

console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
console.log(num[6])


console.log('Podemos fazer assim tbm')
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log('Podemos fazer assim tbm')
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log('Buscando valores...') // Resultado -1 significa que não tem valor buscado
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)
/*let pos2 = num.indexOf(7)
console.log(`O valor 7 está na posição ${pos2}`)*/

let pos2 = num.indexOf(7)
if (pos2 == -1) {
    console.log('O valor não foi encontrado.')
} else{ 
    console.log(`O valor está na posição ${pos2}`)
}