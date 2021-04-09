const express = require('express');
const app = express();
app.use(express.json());

const exercicio_exemplo = require('./exercicios/exemplo');
const exercicio1214 = require('./exercicios/exercicio1214');

app.get("/exemplo", (request, response)=> {
    const resultado = exercicio_exemplo();
    return response.json(resultado);
})

app.get("/exercicio1214/:input", (request, response) => {
    const resultado = exercicio1214(request.params.input);
    return response.json(resultado);
})


app.listen(3333, ()=> {
    console.log('server ir running');
})