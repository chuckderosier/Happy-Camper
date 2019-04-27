const express = require('express')
const app = express()
const routes = require('./routes/index')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + '/client/build/'))

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/client/build/index.html')
// })

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
  })

app.use('/', routes)

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server is listening on PORT: ${port}`)
})
