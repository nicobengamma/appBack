const express = require('express')

const app = express()

app.set( 'views', './views' )
app.set('view engine', 'ejs')

app.get('/pets', (req, res) => {
    const mascotas = [
        {nombre: 'raul', animal: 'perro' ,edad: 1 },
        {nombre: 'pepe', animal: 'gato' ,edad: 2 },
        {nombre: 'jorge', animal: 'perro' ,edad: 10 },
        {nombre: 'shamlu', animal: 'gato' ,edad: 5 }
    ]
    const mensaje = 'Mis Mascotas'
    res.render('pets.ejs', {mascotas, mensaje})
})


app.listen(8080)