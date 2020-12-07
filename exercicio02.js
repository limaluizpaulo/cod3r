/*  Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: 
Todos os lados são diferentes.Crie uma função que recebe os comprimentos dos três 
lados de um triângulo e retorne sua classificação quantoao tamanho de seus lados. 
(Neste exemplo deve-se abstrair as condições matemáticas de existência de umtriângulo).*/

function getRandom(min = 0, max = 10) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let a = getRandom()
let b = getRandom()
let c = getRandom()

if(a == b && b == c) {
    console.log(a,b,c,`equilatero`)
} else if (a != b && b != c && c != a) {
    console.log(a,b,c,`escaleno`)
} else {
    console.log(a,b,c,`isóceles`)

}