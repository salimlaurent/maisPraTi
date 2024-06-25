//Exercitando Arrays e Funções
//Exercicio 1: Somar todos os elementos de um array
/*
let elementos = [1, 2, 3, 4];

console.log(elementos[4]);

function somaElementos(vetor){
    let soma = 0
    for(let i = 0; i < length; i++){
        soma += vetor[i];
    }
    return soma;
}

console.log("A soma dos elementos é: ", somaElementos(elementos));
*/

//Exercicio 2: Encontrar o maior número em um Array
/*
let numeros = [1, 3, 4, 2, 35, 20, 50, 40, 23];

function encontrarMaior (vetor){
    let temp = 0;

    for(let i = 0; i < numeros.length; i++){
        if (temp < numeros[i]){
            temp = numeros[i];
        }
    }
    return temp;
}

console.log(`O maior elemento do array é: ${encontrarMaior(numeros)}.`);
*/

//Exercicio 3: Reverte um array
/*
let numeros = [1, 3, 4, 2, 35, 20, 50, 40, 23];

function reverterArray(vetor){
    let vetorResultado = [];
    for(let i = vetor.length - 1; i >= 0; i--){
        vetorResultado.push(vetor[i]);
    }
    return vetorResultado;
}

console.log('O vetor invertido é: ', reverterArray(numeros));
*/

//Matrizes
//Exercicio 1: Somar todos os elementos de uma matriz
/*
function somaTodosElementos(matriz){
    let total = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            total += matriz[i][j];
        }
    }
    return total;
}

console.log('Total: ', somaTodosElementos([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
*/

//Exercicio 2: Encontrar o maior número em uma matriz
/*
let numerosArray = Array();   
    for(let i = 0; i < 2; i++){
        numerosArray[i] = Array();
        for(let j = 0; j < 2; j++){
            numerosArray[i][j] = Math.round(Math.random() * 100);
        }
    }

function encontrarMaior(matriz){
    let maior = 0;

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] > maior){
                maior = matriz[i][j];
            }
        }
    }
    return maior;
}

console.log('O maior número é: ', encontrarMaior(numerosArray));
*/

//Funções avançadas: String
/*
    String é considerado um valor primitivo, porém ao ser 
    interpretado o JS os converte em objetos, possuindo propriedade e métodos.
*/

//indexOf
/*
let nome = 'Gabriela'
console.log(nome.indexOf('A')) //método case-sensitive;
*/

//replace
/*
let nome = 'Dick Vigarista';
console.log(nome.replace('Dick Vigarista', 'Pica Pau'));
*/

//substring
/*
let nome = 'Dick Vigarista';
console.log(nome.substr('7', '5'));
*/

//toLocaleUpperCase e toLocaleLowerCase
/*
let nome = 'Dick Vigarista';
console.log(nome.toLocaleUpperCase());
console.log(nome.toLocaleLowerCase());
*/

//Funções avançadas: Matemáticas - Math

let x = 10.100;
let y = 10.600;

//ceil - Arredondar pra cima | floor - Arredondar pra baixo | round - medias (acima de 0.5, pra cima e abaixo de 0.5, pra baixo)
//random - numero aleatorio

//Exemplos
/*
console.log(Math.ceil(x));
console.log(Math.ceil(y));

console.log(Math.floor(x));
console.log(Math.floor(y));

console.log(Math.round(x));
console.log(Math.round(y));

console.log(Math.random());
*/

//Funções avançadas: Datas
let data = new Date();

/*
getDate() -> Retorna o dia atual
getMonth() -> Retorna o mês atual - 1 (para trazer info correta sempre somar 1)
getFullYear() -> Retorna o ano atual
*/

//Exemplo
console.log(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear());