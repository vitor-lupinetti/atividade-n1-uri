const express = require('express');
const app = express();
app.use(express.json());

const exercicio_exemplo = require('./exercicios/exemplo');
const exercicio1279 = require('./exercicios/exercicio1279');

app.get("/exemplo", (request, response) => {
    const resultado = exercicio_exemplo();
    return response.json(resultado);
})

app.get("/exercicio1279/:ano", (request, response) => {
    const resultado = exercicio1279(request.params.ano);
    return response.json(resultado);
})

app.listen(3333, () => {
    console.log('server ir running');
})