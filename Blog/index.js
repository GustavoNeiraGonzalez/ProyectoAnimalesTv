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
        handle: 'bro-de-covid-19-en-visones',
        titulo: 'El blog mas rápido',
        descripcion: 'En este post te muestro como hacer tu blog mas rapido',
        textoLadoImagen:"Hace pocos días, las autoridades sanitarias de los Países Bajos han informado del contagio\
        de varios visones en dos granjas situadas en la región de Brabante Septentrional. Los visone pocos días,\
        las autoridades sanitarias de los Países Bajos han informado del contagio de varios visones en dos\
        granjas situadas en la región de Brabante Septentrional. Los visones, de la misma familia de los\
        hurones, serían el primer caso de cont", //este texto es primer parrafo
        texto:['A través de un comunicado, la ministra Holandesa de Agricultura, Carola Schouten, recalcó que, las\
        autoridades asumen que el contagio se produjo de humanos a animales. Se realizaron pruebas a varios\
        animales después de que estos mostraran síntomas de problemas respiratorios y porque había una tasa\
        de mortalidad más alta de lo normal. Además, algunos de los empleados de ambas granjas dieron\
        positivo. Aun así, se aseguró que la investigación sigue en curso para determinar exactamente la\
        fuente de infección.'
        ,'*En estos países, las granjas albergan a estos animales para su cría, por su pelaje y se vende en\
        China, Corea, Grecia y Turquía, por lo que, pese a que el ministerio, citando el consejo de las\
        autoridades nacionales de salud advirtió que las posibilidades de propagación a humanos son\
        “mínimas”, se ha prohibido el movimiento de estos y otros mamíferos similares al visón o al hurón y\
        su estiércol.'
        ,'Pese a los nuevos brotes que han surgido en animales, la OIE (Organización Mundial de la Sanidad\
            Animal) sigue siendo enfático en que “La propagación actual del COVID-19 es el resultado de una\
            transmisión de humano a humano. Hasta la fecha, no existe evidencia de que los animales de compañía\
            tengan un rol significativo en la propagación de la enfermedad. Por consiguiente, no existe\
            justificación alguna para tomar medidas relacionadas con los animales de compañía que puedan afectar\
            a su bienestar.”'],
        //El texto con * al inicio se refiere a que esta en negrita
        //
    },
    {
        handle: 'seo-para-tu-blog',
        titulo: 'Cómo mejorar el SEO de tu blog',
        descripcion: 'Te muestro cómo hacer el Mejor SEO',
        textoLadoImagen:"Hace pocos días, las autoridades sanitarias de los Países Bajos han informado del contagio\
        de varios visones en dos granjas situadas en la región de Brabante Septentrional. Los visone pocos días,\
        las autoridades sanitarias de los Países Bajos han informado del contagio de varios visones en dos\
        granjas situadas en la región de Brabante Septentrional. Los visones, de la misma familia de los\
        hurones, serían el primer caso de cont", //este texto es primer parrafo
        texto:['A través de un comunicado, la ministra Holandesa de Agricultura, Carola Schouten, recalcó que, las\
        autoridades asumen que el contagio se produjo de humanos a animales. Se realizaron pruebas a varios\
        animales después de que estos mostraran síntomas de problemas respiratorios y porque había una tasa\
        de mortalidad más alta de lo normal. Además, algunos de los empleados de ambas granjas dieron\
        positivo. Aun así, se aseguró que la investigación sigue en curso para determinar exactamente la\
        fuente de infección.'
        ,'*En estos países, las granjas albergan a estos animales para su cría, por su pelaje y se vende en\
        China, Corea, Grecia y Turquía, por lo que, pese a que el ministerio, citando el consejo de las\
        autoridades nacionales de salud advirtió que las posibilidades de propagación a humanos son\
        “mínimas”, se ha prohibido el movimiento de estos y otros mamíferos similares al visón o al hurón y\
        su estiércol.'
        ,'Pese a los nuevos brotes que han surgido en animales, la OIE (Organización Mundial de la Sanidad\
            Animal) sigue siendo enfático en que “La propagación actual del COVID-19 es el resultado de una\
            transmisión de humano a humano. Hasta la fecha, no existe evidencia de que los animales de compañía\
            tengan un rol significativo en la propagación de la enfermedad. Por consiguiente, no existe\
            justificación alguna para tomar medidas relacionadas con los animales de compañía que puedan afectar\
            a su bienestar.”'],
        //El texto con * al inicio se refiere a que esta en negrita
        //
        
    },
    {
        handle: 'analiticas-para-tu-blog',
        titulo: 'como instalar y trackear a tu audiencia',
        descripcion: 'Te muestro cómo trackear lo que tu audiencia lee',
        textoLadoImagen:"Hace pocos días, las autoridades sanitarias de los Países Bajos han informado del contagio\
        de varios visones en dos granjas situadas en la región de Brabante Septentrional. Los visone pocos días,\
        las autoridades sanitarias de los Países Bajos han informado del contagio de varios visones en dos\
        granjas situadas en la región de Brabante Septentrional. Los visones, de la misma familia de los\
        hurones, serían el primer caso de cont", //este texto es primer parrafo
        texto:['A través de un comunicado, la ministra Holandesa de Agricultura, Carola Schouten, recalcó que, las\
        autoridades asumen que el contagio se produjo de humanos a animales. Se realizaron pruebas a varios\
        animales después de que estos mostraran síntomas de problemas respiratorios y porque había una tasa\
        de mortalidad más alta de lo normal. Además, algunos de los empleados de ambas granjas dieron\
        positivo. Aun así, se aseguró que la investigación sigue en curso para determinar exactamente la\
        fuente de infección.'
        ,'*En estos países, las granjas albergan a estos animales para su cría, por su pelaje y se vende en\
        China, Corea, Grecia y Turquía, por lo que, pese a que el ministerio, citando el consejo de las\
        autoridades nacionales de salud advirtió que las posibilidades de propagación a humanos son\
        “mínimas”, se ha prohibido el movimiento de estos y otros mamíferos similares al visón o al hurón y\
        su estiércol.'
        ,'Pese a los nuevos brotes que han surgido en animales, la OIE (Organización Mundial de la Sanidad\
            Animal) sigue siendo enfático en que “La propagación actual del COVID-19 es el resultado de una\
            transmisión de humano a humano. Hasta la fecha, no existe evidencia de que los animales de compañía\
            tengan un rol significativo en la propagación de la enfermedad. Por consiguiente, no existe\
            justificación alguna para tomar medidas relacionadas con los animales de compañía que puedan afectar\
            a su bienestar.”'],
        //El texto con * al inicio se refiere a que esta en negrita
        //
    },
];

app.get('/',(req, res) => res.render('home',{posts}));


app.get('/posts/:i/:handle',(req, res) =>{ // Dos puntos en la URL creará una variable (ejemplo --> :NOMBRE_VARIABLE_1/:NOMBRE_VARIABLE_2 )
    //Al poner el :i indica que i es variable, entonces al ejecutar varias veces incrementará en 1 valiendo inicialmente 0
    res.render(`plantillaPost`, { // Para usar la variable escribir req.params.NOMBRE_VARIABLE
        titulo: posts[req.params.i].titulo, 
        desc: posts[req.params.i].descripcion,
        texto: posts[req.params.i].texto,
        textoLadoImagen: posts[req.params.i].textoLadoImagen
    })
});

app.listen(app.get('port'), function(){
    console.log('Servidor escuchando %d',app.get('port'))
});


