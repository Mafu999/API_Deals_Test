// Body parse das Requisições
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const port = 3033

//parse das requisições via formulário
app.use(bodyParser.urlencoded({ extended: true }))
//parse das requisições via json
app.use(bodyParser.json())

app.listen(port, ()=>console.log(`Servidor rodando na porta ${port}`))