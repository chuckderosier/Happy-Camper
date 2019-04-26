const express = require('express')
const app = express()
const routes = require('./routes/index')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + '/client/build/'))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/client/build/index.html')
// })

app.get('/:language(' + content.languageSelector + ')/:page', function (req, res) {
    res.header("Cache-Control", "no-cache, no-store, must revalidate")
    res.header("Pragma", "no-cache")
    res.header("Expires", 0)
})

app.use('/', routes)

// app.disable('etag')

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
