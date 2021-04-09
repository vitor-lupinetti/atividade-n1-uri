// Entrada
// A entrada contém muitos casos de teste. A primeira linha da entrada contém um inteiro C, indicando o número de casos de teste.
// Seguem C casos de teste ou instâncias. Cada caso de teste inicia com um inteiro N, que é o número de pessoas de uma turma (1 ≤ N ≤ 1000). 
// Seguem N inteiros, separados por espaços, cada um indicando a média final (um inteiro entre 0 e 100) de cada um dos estudantes desta turma.

// Saída
// Para cada caso de teste imprima uma linha dando o percentual de estudantes que estão acima da média da turma, com o valor arredondado e com 3 casas decimais.

function exercicio(input) {

    // para utilizar a entrada como uma string para facilitar no envio por parâmetro da api, alterei o split('/n') para split(" ")
    // o comentário abaixo é um exemplo de entrada adaptado 
    // var input = "5 5 50 50 70 80 100 7 100 95 90 80 70 60 50 3 70 90 80 3 70 90 81 9 100 99 98 97 96 95 94 93 91"
    var lines = input.split(" ");
    console.log(lines);
    var qtd = parseInt(lines[0]);
    lines.shift();

    let cont = 0;
    let resultado;
    let media;
    let soma;
    let saida = [];

    for (let n = 0; n < qtd; n++) {

        let turma = parseInt(lines[cont]);
        soma = 0;
        media = 0;
        resultado = 0;
        let acimaMedia;
        let notasTurma = [];

        for (let i = 0; i < turma; i++) {
            cont++;
            soma += parseInt(lines[cont]);
            notasTurma.push(lines[cont]);
        }
        cont++;
        media = soma / turma;
        console.log(notasTurma);
        acimaMedia = notasTurma.filter(function (nota) {
            return nota > media;
        })

        resultado = (100 * acimaMedia.length) / turma;
        console.log(resultado);
        console.log(n);
        saida.push(resultado.toFixed(3) + "%");
    }
    return (saida);
}

module.exports = exercicio;