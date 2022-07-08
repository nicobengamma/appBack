const express = require('express')

const app = express()


app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('new.pug', {msn: 'hola' })
})

app.get('/datos', (req, res) => {
    res.render('datos.pug', req.query)
})

app.get('/test', (req,res)=> {
    res.send('ok')
})

app.listen(8080)