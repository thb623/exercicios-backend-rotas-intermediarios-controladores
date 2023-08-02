const express = require('express');
const { encontrarImovel , todosImoveis } = require('./controladores/imoveis')

const app = express();

app.get('/imoveis', todosImoveis);

app.get('/imoveis/:id', encontrarImovel);

app.listen(8000);


