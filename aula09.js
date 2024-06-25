//Objetos

const pessoa = {
    nome: "Lucas",
    idade: 18,
    email: "lucas@teste.com",
    profissao: "Músico",
    empregada: true,
}

/*
criar método para objeto
pessoa.falar = function() {
    return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}.`
}
*/

//Formas de chamar os valores das chaves
/*
console.log(pessoa.nome);
console.log(pessoa['nome']);
*/

/*
pessoa.nome = "Jurema"
console.log(pessoa);
delete pessoa.empregada; // deleta uma chave do Objeto
console.log(pessoa);
*/

//Exercicio: Criar um Objeto e atribua caracteristicas e o que ele faz
/*
const prato = {
    cor: "Branco",
    diametro: 1.2,
}

prato.limpar = function(){
    return "Prato foi limpo";
}

console.log(prato.limpar());
*/

//FOR IN - chave retorna o indice de um array ou o atributo de um objeto
/*
for (const chave in pessoa) {
    console.log(chave + ": " + pessoa[chave])
}
*/

//FOR OF - chave retorna os atributos de um objetos ou os valores de um array
/*
let numeros = [10, 20, 100];

for (const numero of numeros) {
    console.log(numero);
}
*/

//Exercicio
/*
    Você tem uma lista de objetos que representam diferentes tipos de veículos
    e suas características. Seu objetivo é primeiro usar o FOR IN para listar
    todas as propriedades e valores de cada veículo. Depois, utilizar o FOR OF para
    listar apenas os modelos dos veículos.
*/
/*
const carros = [
    {
        modelo: 'Gol',
        cor: 'vermelho',
        ano: 2020
    },
    {
        modelo: 'Palio',
        cor: 'branco',
        ano: 2022
    },
    {
        modelo: 'Fiat',
        cor: 'azul',
        ano: 2021
    }
];

for (const carro in carros) {
    console.log(carros[carro]);
}

for (const carro of carros) {
    console.log(carro['modelo']);
}
*/

//forEach - método de array
/*
let cores = ['Azul', 'Preto', 'Branco'];

cores.filter((cor) => cor !== 'Azul')
    .forEach((cor, indice) => {
    console.log(indice + ": " + cor);
});
*/

//Exercicio
/*
    Construa um array de números e calcule a soma total dos números e também imprima 
    cada número multiplicado por dois.
*/
let somaTotal = 0;
let numeros = [1, 2, 3];

numeros.forEach((valor) => {
    somaTotal += valor;
    console.log(`${valor} multiplicado por 2: ${valor * 2}`);
});
console.log(`Soma Total: ${somaTotal}`);