const express = require('express')
const {roundControler, remover, adicionar} = require('./controladores/roundControler')

const app = express();

app.get('/', roundControler)

app.get('/remover', remover)

app.get('/adicionar', adicionar)

app.listen(8000)