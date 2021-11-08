const express = require('express');
const path = require('path');

var app = express();
app.set('port',3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.static(__dirname + '/public')); //Esto indica que la carpeta publica se puede utilizar,
//y la queremos utilizar para darle estilo al pug//

const posts = [
    {
        handle: 'brote-de-covid-19-en-visones',
        titulo: 'El blog mas rápido',
        descripcion: 'En este post te muestro como hacer tu blog mas rapido'
    },
    {
        handle: 'seo-para-tu-blog',
        titulo: 'Cómo mejorar el SEO de tu blog',
        descripcion: 'Te muestro cómo hacer el Mejor SEO'
    },
    {
        handle: 'analiticas-para-tu-blog',
        titulo: 'como instalar y trackear a tu audiencia',
        descripcion: 'Te muestro cómo trackear lo que tu audiencia lee'
    },
];

app.get('/',(req, res) => res.render('home',{posts}));

app.listen(app.get('port'), function(){
    console.log('Servidor escuchando %d',app.get('port'))
});


