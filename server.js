const express = require('express')
const app = express()
const routes = require('./routes/index')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + '/api/client/build/'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/api/client/build/index.html')
})

app.use('/', routes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`)
})