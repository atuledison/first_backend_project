require('dotenv').config()
const express = require('express') // it is written as import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) =>{

    res.send('@atuledison')
})

app.get('/example', (req, res) =>{

    res.send('<h1>You successfully entered in example<h1>')
})

app.get('/name', (req, res) =>{

    res.send('<h1>My name is Atul Yadav<h1>')
})

app.get('/details', (req, res) =>{

  res.send('<h1>This is my details change<h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

// http://localhost:3000/example