/*
Leia dois valores inteiros M e N indefinidamente.
 A cada leitura, calcule e escreva a soma dos fatoriais de cada um dos valores lidos. 
 Utilize uma variável apropriada, pois cálculo pode resultar em um valor com mais de 15 dígitos.*/


function resolve_exercicio_fatorial(M, N){
    let number1 = BigInt(M);
    let number2 = BigInt(N);

    let resultado1 = BigInt(1);
    let resultado2 = BigInt(1);

    while(number1 > 0){
        resultado1 = resultado1 * number1;
        number1--;
    }

    while(number2 > 0){
        resultado2 = resultado2 * number2;
        number2--;
    }

    return resultado1 + resultado2;

}

module.exports = resolve_exercicio_fatorial;

