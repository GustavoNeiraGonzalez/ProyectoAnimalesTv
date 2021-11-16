const express = require('express');
const path = require('path');

var app = express();
app.set('port',3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.static(__dirname + '/public')); //Esto indica que la carpeta publica se puede utilizar,
//y la queremos utilizar para darle estilo al pug//
//sección plantillanoticias
const posts = [
    {
        handle: 'bro-de-covid-19-en-visones',
        titulo: 'BROTE DE COVID-19 EN VISONES',
        linkImagen: 'https://static.wixstatic.com/media/4ef24d_82a6c4867bc748d38190a4ad07425053~mv2.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90/4ef24d_82a6c4867bc748d38190a4ad07425053~mv2.webp',
        descripcion: 'Hace pocos días, las autoridades sanitarias de los Países Bajos han informado del contagio de varios visones en dos granjas situadas en...',
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
        handle: 'cuarentena-por-el-coronavirus-hace-que-salgan-a-la-luz-los-seres-vivos-de-la-laguna-de-venecia',
        titulo: 'Cuarentena por el coronavirus hace que salgan a la luz los seres vivos de la laguna de Venecia',
        linkImagen: 'https://static.wixstatic.com/media/4ef24d_0f75d8074dcc413c964901862ae21bed~mv2.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90/4ef24d_0f75d8074dcc413c964901862ae21bed~mv2.webp',
        descripcion: '“La flora y la fauna de la laguna no cambiaron durante él confinamiento. Lo que cambió es nuestra oportunidad de verlo”, dice el zoólogo...',
        textoLadoImagen:'“La flora y la fauna de la laguna no cambiaron durante él\
        confinamiento. Lo que cambió es nuestra oportunidad de verlo”, dice el zoólogo Andrea Mangoni mientras sumerge su cámara en las aguas de Venecia para explorar la vida acuática.', //este texto es primer parrafo
        texto:['Cangrejos,  medusas emergen a ras de la superficie mientras bancos de peces pasan tranquilamente por debajo, los moluscos se aferran a los famosos pilotes de la Serenísima y las algas de todos los colores se balancean a merced de la corriente.\
        ','En Venecia, ante la ausencia de turistas desde principios de marzo, el agua y su lodo ya no son removidos por los miles de barcos, taxis, “vaporetti”, góndolas y embarcaciones privadas, que la \
        recorren normalmente.','Una oportunidad de oro para Andrea Mangoni, cuya profesión \
        consiste en divulgar la zoología, en abastecerse de imágenes. \
        Su foto de una medusa propulsándose suavemente en un canal \
        límpido de la ciudad se hizo viral en las redes sociales.','“Los sedimentos permanecen en el fondo. Ahora, podemos ver a \
        50 ó 60 centímetros, e incluso a un metro bajo la superficie”, dice. “Como resultado se pueden observar animales que estaban \
        literalmente ocultos en las aguas enturbiadas”, prosigue y explica que nunca había visto “un agua tan clara” en 20 años de trabajo en Venecia.'
        ,'“La fauna y la flora de la laguna de Venecia son mucho más \
        diversas e interesantes de lo que creemos. Pero como el agua está en general enturbiada, no prestamos atención a estos organismos”'],
        //El texto con * al inicio se refiere a que esta en negrita
        //
        
    },
    {
        handle: 'analiticas-para-tu-blog',
        titulo: 'Murciélagos recién descubiertos ¿están vinculados al coronavirus?',
        linkImagen: 'https://static.wixstatic.com/media/4ef24d_f11cdaa0bc6f44b2bf7cd6fe2b3df76e~mv2.jpg/v1/fill/w_350,h_325,al_c,q_90/4ef24d_f11cdaa0bc6f44b2bf7cd6fe2b3df76e~mv2.webp',
        descripcion: 'Los murciélagos continúan siendo en gran parte un misterio para nosotros. Los investigadores estiman que solo hemos identificado el 25%...',
        textoLadoImagen:"Los murciélagos continúan siendo en gran parte un misterio para nosotros. Los investigadores estiman que solo hemos identificado el 25% de todas las especies de murciélagos en los últimos 15 años. Son difíciles de localizar y estudiar, por lo que carecemos de \
        información sobre dónde viven, cómo evolucionaron y su verdadero papel en el mundo que los rodea.\
        ¿Cómo estalló el brote de coronavirus? Mercados, armas biológicas, murciélagos y otras teorías de los investigadores detrás de la \
        pandemia", //este texto es primer parrafo
        texto:['Los murciélagos nariz de hoja viven en Asia, África, Australia y Nueva Zelandia, pero las especies en África no se han estudiado tanto porque las áreas donde están son inaccesibles. Estos \
        animales obtienen su nombre por los colgajos de piel únicos en sus narices que actúan como un radar para ayudarlos a atrapar insectos y orientar sus señales a los demás.'
        ,'“Ninguno de estos murciélagos nariz de hoja es portador de alguna enfermedad que resulte problemática hoy en día, pero no sabemos si ese siempre será el caso. Y ni siquiera sabemos la cantidad de especies que existen”, advirtió en un comunicado Terry Demos, coautor del estudio e investigador postdoctoral en el laboratorio de Patterson.        '
        ,'“Todos los organismos tienen virus. Las rosas en tu jardín tienen virus”, dijo Patterson. “Nos preocupamos por los virus en lo que \
        respecta a la gripe y las pandemias, pero los virus hacen parte de la naturaleza y han estado tanto tiempo como nosotros. Y muchos virus son inofensivos. Como [los murciélagos] se amontonan juntos y se cuidan unos a otros, no toma mucho tiempo para que un \
        patógeno pase de un extremo de la colonia al otro”, añadió.',
        'Los murciélagos también pueden volar, lo que los hace \
        increíblemente fuertes y probablemente lleva a que sean portadores de enfermedades en lugar de terminar enfermándose. ',
        'Los murciélagos tienen un alto metabolismo, ADN autoreparador y sistemas inmunológicos sanos.        ',
        'Los humanos entran en contacto con los \
        murciélagos destruyendo sus hábitats, cazándolos y comiendo su carne. El consumo de carne de murciélago ocurre en Asia, África y las islas del Pacífico (es decir, Oceanía), indicó Patterson.',
        'Dañar a los murciélagos no frenará la enfermedad, pero sí afectará una mejor comprensión de ellos.',
        '“Estos murciélagos tienen un lugar en la naturaleza y realizan \
        funciones ecológicas esenciales, y no podemos permitir que nuestro terror al covid-19 nos haga destrozar los sistemas ecológicos \
        naturales”, advirtió Patterson.'],
        //El texto con * al inicio se refiere a que esta en negrita
        //
    },
];
//sección plantilla noticia
app.get('/',(req, res) => res.render('Noticias',{posts}));


app.get('/posts/:i/:handle',(req, res) =>{ // Dos puntos en la URL creará una variable (ejemplo --> :NOMBRE_VARIABLE_1/:NOMBRE_VARIABLE_2 )
    //Al poner el :i indica que i es variable, entonces al ejecutar varias veces incrementará en 1 valiendo inicialmente 0
    res.render(`plantillaPost`, { // Para usar la variable escribir req.params.NOMBRE_VARIABLE
        titulo: posts[req.params.i].titulo, 
        desc: posts[req.params.i].descripcion,
        texto: posts[req.params.i].texto,
        linkImagen: posts[req.params.i].linkImagen,
        textoLadoImagen: posts[req.params.i].textoLadoImagen
    })
});

const vetYCom = [
    {
        //de esta forma podemos darle formato a algo, por ejemplo los 1 tendran unas caracteristicas
        //como 2 botones con sus redes sociales, y el 2 puede ser solo texto con whatsapp y demás 
        handle:"cerro-Navia",  
        1:[{
            linkIcono: 'https://static.wixstatic.com/media/4ef24d_783c41e58d334e00976c9c4b7739604d~mv2.jpg/v1/fill/w_149,h_149,al_c,q_80,usm_0.66_1.00_0.01/4ef24d_783c41e58d334e00976c9c4b7739604d~mv2.webp',
            linkFondo:'https://static.wixstatic.com/media/4ef24d_2e48570c7fa649df979c97d3efb21f8c~mv2.png/v1/fill/w_603,h_311,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_2e48570c7fa649df979c97d3efb21f8c~mv2.webp',
            linkImagenDentroFondo:'https://static.wixstatic.com/media/4ef24d_783c41e58d334e00976c9c4b7739604d~mv2.jpg/v1/fill/w_149,h_149,al_c,q_80,usm_0.66_1.00_0.01/4ef24d_783c41e58d334e00976c9c4b7739604d~mv2.webp',
            whatsapp:'22 815 55 88',
            texoNegrita:['Nuestros horarios de atención'],
            textoNormal:['lunes a sábado de 10:00-15:00 y 16:00-18:00','(Colación de 15:00-16:00)'],
            linkRedireccionar:['http://www.integravet.cl/']
        }]
    },
    {
        handle:"Cerrillos",
        1:[{
            linkIcono: 'https://static.wixstatic.com/media/4ef24d_f5fb6a594cc34375b97eb4078396949b~mv2.png/v1/crop/x_0,y_0,w_334,h_124/fill/w_239,h_90,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_f5fb6a594cc34375b97eb4078396949b~mv2.webp',
            linkImagenFondo:'https://static.wixstatic.com/media/4ef24d_2e48570c7fa649df979c97d3efb21f8c~mv2.png/v1/fill/w_603,h_311,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_2e48570c7fa649df979c97d3efb21f8c~mv2.webp',
            whatsapp:'+56225863727 /  +56999195575',
            texoNegrita:['Horarios'],
            textoNormal:['Lunes a domingo: 10:00 a 21:00 hrs','Av. Américo Vespucio #1501, Local BT-121'],
            linkRedireccionar:['http://www.integravet.cl/'],
            linkVisible:['www.doctorpet.cl'],
            imagenInstagram:['https://static.wixstatic.com/media/4ef24d_6138ae673c0b46b3b69ec4e15215468c~mv2.png/v1/fill/w_144,h_47,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_6138ae673c0b46b3b69ec4e15215468c~mv2.webp'],
            imagenFacebook:['https://static.wixstatic.com/media/4ef24d_7f8fd7c2c2364d74bf6628081bcaa27c~mv2.png/v1/fill/w_168,h_27,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_7f8fd7c2c2364d74bf6628081bcaa27c~mv2.webp']
        }]
    },
    {
        handle:"Delivery",
        1:[{
            linkIcono: 'https://static.wixstatic.com/media/4ef24d_df8888d6fb944e50ae00d23399ea5eac~mv2.png/v1/fill/w_254,h_166,al_c,q_85,usm_0.66_1.00_0.01/dognita.webp',
            linkImagenFondo:'https://static.wixstatic.com/media/4ef24d_2e48570c7fa649df979c97d3efb21f8c~mv2.png/v1/fill/w_603,h_311,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_2e48570c7fa649df979c97d3efb21f8c~mv2.webp',
            texoNegrita:['Horarios'],
            textoNormal:['Lunes a domingo: 10:00 a 21:00 hrs','Av. Américo Vespucio #1501, Local BT-121'],
            linkRedireccionar:['http://www.integravet.cl/'],
            linkVisible:['www.doctorpet.cl'],
            imagenInstagram:['https://static.wixstatic.com/media/4ef24d_6138ae673c0b46b3b69ec4e15215468c~mv2.png/v1/fill/w_144,h_47,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_6138ae673c0b46b3b69ec4e15215468c~mv2.webp'],
            imagenFacebook:['https://static.wixstatic.com/media/4ef24d_7f8fd7c2c2364d74bf6628081bcaa27c~mv2.png/v1/fill/w_168,h_27,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_7f8fd7c2c2364d74bf6628081bcaa27c~mv2.webp']
        }]
    }
]

app.listen(app.get('port'), function(){
    console.log('Servidor escuchando %d',app.get('port'))
});

