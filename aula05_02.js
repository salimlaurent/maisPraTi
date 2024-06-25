//Repetição: For, While e Do/While

//1- For

/*
for(let multiplicando = 0; multiplicando <= 9; multiplicando++){
    for(let contador = 1; contador <= 10; contador++){
        console.log(`${multiplicando} * ${contador} =`, multiplicando * contador);
    }
    console.log("");
}
*/

//2- While
/*
let i = 10;

while(i >= 1){
    console.log(i);
    i--;
}
*/

//Exerc: Imprimir os múltiplos de 5 menores que 100
/*
let i = 0;
while (i <= 100) {
    console.log(i);
    i += 5;
}
*/

//Exerc: calcular soma de 1 a 1000
/*
let soma = 0;
let i = 0;

while(i <= 1000){
    soma += i;
    i++;
}

console.log(soma);
*/

//Pedir ao usuário para adivinhar um número entre 1 e 10
const prompt = require('prompt-sync')();
const numeroCorreto = Math.floor((Math.random() * 10) + 1);
let tentativa;

do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10: "));
    tentativa < numeroCorreto ? console.log("Tente um número maior") : console.log("Tente um número menor");
} while (tentativa != numeroCorreto)

console.log("Parabéns. Você acertou!");