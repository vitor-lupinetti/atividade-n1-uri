const express = require('express');
const app = express();
app.use(express.json());

const exercicio_exemplo = require('./exercicios/exemplo');
const exercicio_fatorial = require('./exercicios/fatoriais');

app.get("/exemplo", (request, response)=> {
    const resultado = exercicio_exemplo();
    return response.json(resultado);
})


app.get("/fatorial/:numero1/:numero2", (request, response)=> {

    const {numero1, numero2} = request.params;

    const resultado = String(exercicio_fatorial(numero1,numero2));
    return response.json(resultado);
})


app.listen(3333, ()=> {
    console.log('server ir running');
})