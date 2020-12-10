function getRandom(min = 0, max = 10) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let b = getRandom()
let e = getRandom()

console.log(`
base = ${b} 
expoente = ${e}
resultado = ${b**e}`)