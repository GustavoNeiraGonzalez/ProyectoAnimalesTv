const express = require('express');
const path = require('path');

var app = express();
app.set('port',3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.static(__dirname + '/public')); //Esto indica que la carpeta publica se puede utilizar,
//y la queremos utilizar para darle estilo al pug//
//sección plantillanoticias



const vetYCom = [
    {
        //de esta forma podemos darle formato a algo, por ejemplo los 1 tendran unas caracteristicas
        //como 2 botones con sus redes sociales, y el 2 puede ser solo texto con whatsapp y demás 
        handle:"cerro-Navia",  
        1:[{
            linkIcono: 'https://static.wixstatic.com/media/4ef24d_783c41e58d334e00976c9c4b7739604d~mv2.jpg/v1/fill/w_149,h_149,al_c,q_80,usm_0.66_1.00_0.01/4ef24d_783c41e58d334e00976c9c4b7739604d~mv2.webp',
            whatsapp:'22 815 55 88',
            texoNegrita:['Nuestros horarios de atención'],
            textoNormal:['lunes a sábado de 10:00-15:00 y 16:00-18:00','(Colación de 15:00-16:00)'],
            textoSubrayado:['este texto esta subrayado'],
            linkRedireccionar:['http://www.integravet.cl/'],
            imagenInstagram:['https://static.wixstatic.com/media/4ef24d_6138ae673c0b46b3b69ec4e15215468c~mv2.png/v1/fill/w_144,h_47,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_6138ae673c0b46b3b69ec4e15215468c~mv2.webp'],
            imagenFacebook:['https://static.wixstatic.com/media/4ef24d_7f8fd7c2c2364d74bf6628081bcaa27c~mv2.png/v1/fill/w_168,h_27,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_7f8fd7c2c2364d74bf6628081bcaa27c~mv2.webp']

        }]
    }
    {
        handle:"Cerrillos",
        1:[{
            linkIcono: 'https://static.wixstatic.com/media/4ef24d_783c41e58d334e00976c9c4b7739604d~mv2.jpg/v1/fill/w_149,h_149,al_c,q_80,usm_0.66_1.00_0.01/4ef24d_783c41e58d334e00976c9c4b7739604d~mv2.webp',
            whatsapp:'22 815 55 88',
            texoNegrita:['Nuestros horarios de atención'],
            textoNormal:['lunes a sábado de 10:00-15:00 y 16:00-18:00','(Colación de 15:00-16:00)'],
            textoSubrayado:['este texto esta subrayado'],
            linkRedireccionar:['http://www.integravet.cl/'],
            imagenInstagram:['https://static.wixstatic.com/media/4ef24d_6138ae673c0b46b3b69ec4e15215468c~mv2.png/v1/fill/w_144,h_47,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_6138ae673c0b46b3b69ec4e15215468c~mv2.webp'],
            imagenFacebook:['https://static.wixstatic.com/media/4ef24d_7f8fd7c2c2364d74bf6628081bcaa27c~mv2.png/v1/fill/w_168,h_27,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_7f8fd7c2c2364d74bf6628081bcaa27c~mv2.webp']
        }]
    },
    {
        handle:"Delivery",
        1:[{
            linkIcono: 'https://static.wixstatic.com/media/4ef24d_783c41e58d334e00976c9c4b7739604d~mv2.jpg/v1/fill/w_149,h_149,al_c,q_80,usm_0.66_1.00_0.01/4ef24d_783c41e58d334e00976c9c4b7739604d~mv2.webp',
            whatsapp:'22 815 55 88',
            texoNegrita:['Nuestros horarios de atención'],
            textoNormal:['lunes a sábado de 10:00-15:00 y 16:00-18:00','(Colación de 15:00-16:00)'],
            textoSubrayado:['este texto esta subrayado'],
            linkRedireccionar:['http://www.integravet.cl/'],
            imagenInstagram:['https://static.wixstatic.com/media/4ef24d_6138ae673c0b46b3b69ec4e15215468c~mv2.png/v1/fill/w_144,h_47,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_6138ae673c0b46b3b69ec4e15215468c~mv2.webp'],
            imagenFacebook:['https://static.wixstatic.com/media/4ef24d_7f8fd7c2c2364d74bf6628081bcaa27c~mv2.png/v1/fill/w_168,h_27,al_c,q_85,usm_0.66_1.00_0.01/4ef24d_7f8fd7c2c2364d74bf6628081bcaa27c~mv2.webp']
        }]
    }
]

app.get('/posts/:i/:handle',(req, res) =>{ // Dos puntos en la URL creará una variable (ejemplo --> :NOMBRE_VARIABLE_1/:NOMBRE_VARIABLE_2 )
    //Al poner el :i indica que i es variable, entonces al ejecutar varias veces incrementará en 1 valiendo inicialmente 0
    res.render(`plantillaPost`, { // Para usar la variable escribir req.params.NOMBRE_VARIABLE
        linkIcono: posts[req.params.i].linkIcono, 
        whatsapp: posts[req.params.i].whatsapp,
        texoNegrita: posts[req.params.i].texoNegrita,
        textoNormal: posts[req.params.i].textoNormal,
        textoSubrayado: posts[req.params.i].textoSubrayado,
        linkRedireccionar: posts[req.params.i].linkRedireccionar,
        imagenInstagram: posts[req.params.i].imagenInstagram,
        imagenFacebook: posts[req.params.i].imagenFacebook
    })
});

app.get('/',(req, res) => res.render('vetYCom',{posts}));

app.listen(app.get('port'), function(){
    console.log('Servidor escuchando %d',app.get('port'))
});
