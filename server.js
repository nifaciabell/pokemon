const express = require('express')

const PORT = 3000

const app = express()

app.get('/', (req, res)=>{
  res.send('Welcome to the Pokemon App!')
})


app.listen(PORT, ()=>{
  console.log(`Server is running on port: ${PORT}`)
})

