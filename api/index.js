const express = require('express')

const app = express()
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/api', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/api/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app