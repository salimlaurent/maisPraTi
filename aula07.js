//Array ou Vetor
/*
let listaCompras = Array();

listaCompras[0] = "Shampoo";
listaCompras[1] = "Condicionador";
listaCompras['x'] = 100;

console.log(listaCompras);

let listaFrutas = ['Banana', 'Morango'];
console.log(listaFrutas);

let lista_viagem = Array ('Passagens', 'Malas');

console.log(lista_viagem);
*/

//Arrays multidimensionais
/*
let lista_coisas = Array();

lista_coisas['Frutas'] = Array();

lista_coisas['Frutas'][0] = 'Morango';
lista_coisas['Frutas'][1] = 'Uva';
lista_coisas['Frutas'][2] = 'Laranja';
lista_coisas['Frutas'][3] = 'Bergamota';

lista_coisas['Viagem'] = Array();
lista_coisas['Viagem'][0] = 'Passagens';
lista_coisas['Viagem'][1] = 'Malas';

console.log(lista_coisas);

//Inserção de elementos no final do array
lista_coisas['Frutas'].push('Banana');

//Inserção de elementos no começo do array
lista_coisas['Frutas'].unshift('Limão');
console.log(lista_coisas);

//Exlusão de elementos no final do array
lista_coisas['Frutas'].pop();

//Exlusão de elementos no inicio do array
lista_coisas['Frutas'].shift();

console.log(lista_coisas);
*/

//Exemplo 1
/*
listaProdutos = Array('Computador', 'Caneta', 'Chuteira');

let aux = listaProdutos.indexOf('chuteira');

if(aux === -1){
    console.log('Elemento não existe no Array');
} else {
    console.log('Elemento existe e está na posição [' + aux + ']');
}
*/

//Exemplo 2
/*
let listaProdutos = Array('Lousa', 'Caneta', 'Chuteira', 'Garrafa de água');

console.log(listaProdutos.sort());
*/

//Exemplo 3
/*
let listaProdutos = Array(1, 3, 2, 4);

console.log(listaProdutos.sort());
*/

//Funções
/*
function calcularAreaTerreno(largura, comprimento){
    let area = largura * comprimento;
    return area;
}

let prompt = require('prompt-sync')();

let lg = prompt('Digite a largura do terreno em metros: ');
let cp = prompt('Digite o comprimento do terreno em metros: ')

//Chamada da função e passagem de parâmentros
let resultado = calcularAreaTerreno(lg, cp);

console.log('o terreno possui ' + resultado + ' metros quadrados')
*/

//Função anônima
/*
let exibirFuncao = function() {
    console.log('Olá');
}

exibirFuncao();
*/

//Exemplo 1
let callbackSucesso = function(titulo) {
    console.log(titulo);
}

let callbackErro = function(erro) {
    console.log(erro);
}

function exibirFuncao(x, y) {
    if(true) {
        x('Funções de callback em caso de sucesso');
    } else {
        y('Função de callBack em caso de erro');
    }
}

exibirFuncao(callbackSucesso, callbackErro) // x = função sucesso e y = função erro