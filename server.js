const express = require('express');
const app = express();
app.use(express.json());

const exercicio_exemplo = require('./exercicios/exemplo');

app.get("/exemplo", (request, response)=> {
    const resultado = exercicio_exemplo();
    return response.json(resultado);
})


app.listen(3333, ()=> {
    console.log('server ir running');
})