const prompt = require("prompt-sync")();

//Exercicio 01
/*
let celsius = Number(prompt("Digite a temperatura em Celsius: "));
let farenheit = ((celsius * 1.8) + 32);

console.log(`A temperatuda em Farenheit é: ${farenheit}`)
*/

//Exercicio 02
/*
let eleitores = parseInt(prompt('Quantos eleitores existem no município?: '));
let votoEmBranco = parseInt(prompt('Quantos votos em branco?: '));
let votoNulo = parseInt(prompt('Quantos votos nulos?: '));
let votoValido = parseInt(prompt('Quantos votos válidos?: '));
let percentualEmBranco;
let percentualNulo;
let percentualValido;
console.log('');

if (votoEmBranco + votoNulo + votoValido !== eleitores){
    console.log('Você informou uma quantidade de votos diferente do total de eleitores!');
} else {
    percentualEmBranco = ((votoEmBranco/eleitores)*100).toFixed(2);
    percentualNulo = ((votoNulo/eleitores)*100).toFixed(2);
    percentualValido = ((votoValido/eleitores)*100).toFixed(2);
    console.log(`Votos em Branco: ${percentualEmBranco}%\nVotos Nulos: ${percentualNulo}%\nVotos Válidos: ${percentualValido}%`);
}
*/

//Exercicio 03
/*
let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
let num3 = parseInt(prompt("Digite o terceiro número: "));
let num4 = parseInt(prompt("Digite o quarto número: "));

num4 = num1 + num2 + num3;
num1 += 25;
num2 *= 3;
num3 *= 0.12;

console.log(num1, num2, num3, num4);
*/

//Exercicio 04
/*
let nota1 = parseFloat(prompt('Insira a primeira nota: '));
let nota2 = parseFloat(prompt('Insira a segunda nota: '));

if (typeof(nota1) === 'number' && typeof(nota2) === 'number'){
    let media = (nota1 + nota2) / 2;
    if(media >= 6){
        console.log('PARABÉNS! Você foi aprovado');
    }
} else {
    console.log('Você inseriu notas inválidas!')
}
*/

//Exercicio 05
/*
let nota1 = parseFloat(prompt('Insira a primeira nota: '));
let nota2 = parseFloat(prompt('Insira a segunda nota: '));

if (nota1.toString() !== 'NaN' && nota2.toString() !== 'NaN'){
    let media = (nota1 + nota2) / 2;
    if(media >= 6){
        console.log('PARABÉNS! Você foi aprovado');
    } else {
    console.log('Você foi REPROVADO! Estude mais');
    }
} else {
    console.log('Você inseriu notas inválidas!');
}
*/

//Exercicio 06
/*
let ladoA = parseFloat(prompt('Digite o valor do Lado A: '));
let ladoB = parseFloat(prompt('Digite o valor do Lado B: '));
let ladoC = parseFloat(prompt('Digite o valor do Lado C: '));

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA){
    if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        console.log('Esse triângulo é isósceles.');
    } else if(ladoA === ladoB && ladoB === ladoC){
        console.log('Esse triângulo é equilátero.');
    } else {
        console.log('Esse triângulo é escaleno.');
    }
} else {
    console.log('Essas medidas não formam um triângulo.')
}
*/

//Exercicio 07
/*
let quantidade = prompt('Quantas maçãs serão compradas?: ');
let valorTotal;

if(quantidade < 12){
    valorTotal = (quantidade * 0.30).toFixed(2);
    console.log(`Valor total da compra é: R$${valorTotal}.`)
} else {
    valorTotal = (quantidade * 0.25).toFixed(2);
    console.log(`Valor total da compra é: R$${valorTotal}.`)
}
*/

//Exercicio 08
/*
let num1 = 0;
let num2 = 0;

do{
    num1 = parseFloat(prompt('Digite o primeiro valor: '));
    num2 = parseFloat(prompt('Digite o segundo valor: '));
    if(num1.toString() === 'NaN' || num2.toString() === 'NaN'){
        console.log('Você digitou um valor inválido.\n')
        num1 = 0;
        num2 = 0;
    }
} while (num1 === num2);

if(num1 > num2){
    console.log(num2, num1);
} else {
    console.log(num1, num2);
}
*/

//Exercicio 09
/*
let codigo = parseInt(prompt('Qual o código do produto?: '));

switch(true){
    case (codigo === 5 || codigo === 6):
        console.log('Região Sul');
        break;
    case (codigo >= 7 && codigo <= 9):
        console.log('Região Norte');
        break;
    case (codigo >= 10 && codigo <= 20):
        console.log('Região Leste');
        break;
    case (codigo >= 25 && codigo <= 50):
        console.log('Região Oeste');
        break;
    default:
        console.log('Código inválido.');
        break;
}
*/

//Exercicio 10
/*
let num = parseInt(prompt('Digite um valor: '));
if(num.toString() !== 'NaN'){
    for(let i = 1; i <= 10; i++){
        console.log(num);
    }
} else {
    console.log('Valor não é inteiro.')
}
*/

//Exercicio 11
/*
let num;

do{
    num = prompt('Digite um valor: ');

    if(parseInt(num) % 2 === 0){
        console.log('Número é par!\n');
    } else if (parseInt(num) % 2 === 1){
        console.log('Número é ímpar!\n')
    } else {
        console.log('Programa Encerrado!\n');
    }
} while (num != null && parseInt(num) >= 0);
*/

//Exercicio 12
/*
let i;

for(i = 1000; i <= 1999; i++){
    if(i % 11 === 5){
        console.log(i);
    }
}
*/

//Exercicio 13
/*
let N;
let num1 = prompt("Digite o primeiro valor: ");
let num2 = prompt("Digite o segundo valor: ");
let num3 = prompt("Digite o terceiro valor: ");
let num4 = prompt("Digite o quarto valor: ");
let num5 = prompt("Digite o quinto valor: ");
N = prompt("Digite o valor da variável(repetição): ");

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= N; j++) {
        console.log(`${j} x ${eval("num" + i)} = ${j * eval("num" + i)}`);
    }
    console.log();
}
*/

//Exercicio 14
/*
let contador = 0;
let total = 0;
let valor;

while (valor !== 0){
    valor = parseFloat(prompt('Digite um valor: '));
    valor === 0 ? console.log() : contador++;
    total += valor;
}

total === 0 ? console.log('Não houve valores.') : console.log(`Média: ${total / contador}`);
*/

//Exercicio 15
/*
let contador = 0;
let total = 0;
let valor;
let peso;

while (valor !== 0){
    valor = parseFloat(prompt('Digite um valor: '));
    peso = parseFloat(prompt('Qual peso deste valor?: '));
    peso === 0 ? valor = 0 : total += (valor * peso);
    valor === 0 ? console.log() : contador++;
}

total === 0 ? console.log('Não houve valores.') : console.log(`Média: ${total / contador}`);
*/

//Exercicio 16
/*
let num = 101;
let contPrimo = 0;
let contDiv = 0;
let divisor = 1;

while (contPrimo < 50){
    while (contDiv < 3 && divisor <= num){
        num % divisor === 0 ? contDiv++ : '';
        divisor++;
    }
    contDiv === 2 ? contPrimo++ : '';
    contDiv === 2 ? console.log(num) : '';
    contDiv = 0;
    divisor = 1;
    num += 2;
}
*/