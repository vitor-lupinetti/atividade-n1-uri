// var input = require('fs').readFileSync('/dev/stdin', 'utf8');


function exercicio(input){
    var lines = input.split('\n');

    var qtd = parseInt(lines[0]);

    let linha;
    let qtdAlunos;
    let acimaMedia;
    let media;
    let soma;
    let resultado;
    let saida


    for(let n = 1; n <=qtd; n++){
        
        linha = lines[n].split(" ");
        
        qtdAlunos = parseInt(linha[0]);
        linha.shift();
        
        for(n of linha){
            soma += parseInt(n);
        }
        media = soma/qtdAlunos;
        
        acimaMedia = linha.filter(function(nota){
            return parseInt(nota) > media
        });
        
        resultado = (100 * acimaMedia.lenght) / qtdAlunos;
        
        saida.push(resultado.toFixed(3));
        
    }
    for(i of saida){
        console.log(i);
    }
        return('exercicio resolvido');
    }

module.exports = exercicio;