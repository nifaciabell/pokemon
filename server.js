const express = require('express')
const pokemon = require('./models/pokemon')
const PORT = 3000


const app = express()

app.get('/', (req, res)=>{
  res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
  res.send(pokemon);
})


app.listen(PORT, ()=>{
  console.log(`Server is running on port: ${PORT}`)
})

