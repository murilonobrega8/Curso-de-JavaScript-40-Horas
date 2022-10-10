function fatorial(n) {
    // 5! = 5 x 4 x 3 x 2 x 1
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// OU ASSIM - CONCEITO DE ->RECURSIVIDADE<-:
// POR SER UMA LINGUAGEM FUNCIONAL, JAVASCRIPT TEM MUITAS POSSIBILIDADES DE FUNÇÕES.
/*
5! = 5 x 4 x 3 x 2 x 1 é o mesmo que:
5! = 5 x 4!
ou seja:
n! = n x (n-1)!
EXCETO 1! = 1 (Definição matemática)
*/
function fatorial2(n2) {
    if (n2 == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))