const express = require('express')

const {somar,subtrair,dividir,multiplicar} = require('./intermediarios')

const app = express()


app.get('/somar', somar)

app.get('/subtrair', subtrair)

app.get('/multiplicar', multiplicar)

app.get('/dividir', dividir)



app.listen(3000)