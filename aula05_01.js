/*
//Exercicio 1: Par ou Ímpar
const prompt = require('prompt-sync')();

let num = prompt('Digite um numero: ');

//Forma 01
if(num % 2 === 0){
    console.log("Par");
} else {
    console.log("Ímpar");
}

//Forma 02
console.log(num % 2 === 0 ? "Par" : "Ímpar");
*/
/*
//Exercicio 2: Maior de dois números

const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt("Insira o primeiro número: "));
let numero2 = parseInt(prompt("Insira o segundo número: "));

if(numero1 > numero2){
    console.log("O primeiro número é o maior.");
} else if (numero1 < numero2){
    console.log("O segundo número é o maior.");
} else {
    console.log("Os números são iguais.");
}
*/
/*
// Exercicio 3: Triangulo

const prompt = require('prompt-sync')();

let lado1 = parseInt(prompt("Insira o comprimento do primeiro lado: "));
let lado2 = parseInt(prompt("Insira o comprimento do segundo lado: "));
let lado3 = parseInt(prompt("Insira o comprimento do terceiro lado: "));

if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
    console.log("É possível formar um triângulo com essas medidas");
} else {
    console.log("Não é possível formar um triàngulo.")
}
*/
/*
//Exercicio 4: Calculadora

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Insira o primeiro número: "));
let num2 = parseInt(prompt("Insira o segundo número: "));
let operacao = prompt("Insira a operação desejada (+, -, /, *): ");

let resultado;

switch(operacao){
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        if(num2 !== 0){
            resultado = num1 + num2;
        } else {
            console.log("Erro: Divisão por zero");
        }
        break;
    default:
        console.log("Erro: Operação não aceita!");
        break;
}

if(resultado !== undefined){
    console.log(`O Resultado é: ${resultado}.`);
}
*/