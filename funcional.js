//lista de palavras em ordem alfabética a partir de uma lista de palavras fornecida

const palavras = ["banana", "abacaxi", "laranja", "manga", "uva"];

// Função que recebe duas palavras e retorna 1 se a primeira palavra vem antes na ordem alfabética ou -1 se vem depois
const comparaPalavras = (a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
};

// Função que recebe uma lista de palavras e retorna a mesma lista ordenada em ordem alfabética
const ordenaPalavras = (lista) => lista.sort(comparaPalavras);

const palavrasOrdenadas = ordenaPalavras(palavras);

console.log(palavrasOrdenadas);
// Saída: ["abacaxi", "banana", "laranja", "manga", "uva"]

// Nesse exemplo, usamos a função sort() da lista para ordenar as palavras, passando a
// função comparaPalavras() como argumento para determinar a ordem alfabética.
// Em seguida, definimos a função ordenaPalavras() que recebe a lista de palavras e retorna
// a mesma lista ordenada. Por fim, usamos ordenaPalavras() para ordenar a lista palavras
