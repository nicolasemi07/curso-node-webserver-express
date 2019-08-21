const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

// Para Heroku ("process.env.PORT" para ambiente local NO va a existir, por eso está el "|| 3000")
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS (este es un Template Engine -esto hace que el sitio web pueda ser DINAMICO-)
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('Hello World')

    res.render('home', {
        nombre: 'Nicolás'
    });

});

app.get('/about', (req, res) => {
    // res.send('Hello World')

    res.render('about');

});

app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`);
});