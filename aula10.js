/* Exercicio 01
const professor = {
    nome: "Tony Stark",
    materia: "Matemática",
    notas: {
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
}

// for in para iterar sobre as propriedade dentro das notas, calcule a média e 
// imprima da turma. caso a média esteja acima de 3.0, indique que a turma está 
// acima da média de aprovação.

let somaNotas = 0;
let numeroDeNotas = 0;

for (const nota in professor.notas) {
    somaNotas += professor.notas[nota];
    numeroDeNotas++;
}

let media = somaNotas / numeroDeNotas;

if(media > 3){
    console.log('Turma acima da média!');
} else {
    console.log('Turma abaixo da média!');
}
*/

/* Exercicio 02

const biblioteca = [
    { titulo: '12 Regras para Vida', autor: 'Jordan Peterson', ano: 1925 },
    { titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', ano: 1937 },
    { titulo: 'Senhora do Jogo', autor: 'Sidney Sheldon', ano: 2009 },
    { titulo: 'Zé Carioca', autor: 'Disney', ano: 1940 },
    { titulo: 'Nação Dopamina', autor: 'Anna Lembke', ano: 2021 }
]

// For of para iterar sobre o array biblioteca
// Para cada livro, verifique se foi publicado antes de 2000
// Imprimir o título e o ano dos livros que atendem essa condição

for (const chave of biblioteca) {
    if (chave.ano < 2000) {
        console.log(`O livro "${chave.titulo}" foi publicado em ${chave.ano}.`)
    }
}
*/

/* Exercicio 03
const filmes = [
    { titulo: 'Tropa de Elite', genero: 'Ação' },
    { titulo: 'Capitão Fantástico', genero: 'Drama' },
    { titulo: 'O Poderoso Chefão', genero: 'Crime' },
    { titulo: 'Clube ad Luta', genero: 'Drama' },
    { titulo: 'Oppenheimer', genero: 'Biografia' },
    { titulo: 'High School Musical', genero: 'Musical' },
    { titulo: 'Barbie', genero: 'Live Action' }
]

// Com foreach para iterar sobre o array, crie um objeto para armazenar a contagem de filme por gênero
// Para cada filme no array, verifique se o gênero já existe no objeto contagem
// se existir, incremente a contagem, senão, adicione o gênero ao objeto com a contagem inicial de 1
// após o loop, imprima cada gênero e o número de filmes correspondente

let contagem = {};



filmes.forEach(filme => {
    if (contagem[filme.genero]){
        contagem[filme.genero]++;
    } else {
        contagem[filme.genero] = 1;
    }
});

for (const chave in contagem) {
    console.log(`Existem ${contagem[chave]} filmes do gênero ${chave}.`);
}
*/

// PESQUISA BINÁRIA

//Desenvolver um algoritmo que seja capaz de receber uma lista e um valor correto. e execute uma pesquisa binaria para encontrar o valor certo.
/*
const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high){
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];

        if(guess === item){
            return mid;
        } else if (guess > item){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}

const myList = [1, 3, 5, 7, 9, 11];

console.log(binarySearch(myList, 7));
*/

// spread = espalhar | rest = juntar
/*Spread
let listaTimes = ['Gremio', 'FPA'];
let listaTimes2 = ['São José', 'Pelotas'];

let listaTimesCompletos = ['Flamengo', 'São Paulo', ... listaTimes, ... listaTimes2];

console.log(listaTimesCompletos);
*/

/*Rest
function soma (...param){
    let resultado = 0;

    console.log(param);

    param.forEach(v => resultado += v);

    return resultado;
}

console.log(soma(3, 8, 5, 7));
*/

