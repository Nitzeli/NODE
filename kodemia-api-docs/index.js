

//console.log(' ewe salio el script')

/* ocupar express para crear un api 
CRUD
Create = POST crear archivo
Reade = GET leer koder
Update = Patch editar archivo koder
Delete = delete  borrar koder

Crear aplicacion CRUD sobreun archivo JSON que contenga los koders 
crear API que nos ayude a crear el archvo

CON EL ARCHIVO FS Y PARSEARLO JSON.PARSE 

*/
/*

const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let koder = {
    name: '',
    gerder: ''
};
let response = {
    error: false,
    code: 200,
    message: ''
};
app.get('/kodemia', function (req, res) {
    response.json = {
        error: true,
        code: 200,
        message: '{.kodemia}'
    };
    res.send(response);
});
app.get('/kodemia', function (req, res) {
    response.json = {
        error: false,
        code: 200,
        message: ''
    };
    if (koder.name === '' || koder.gerder === '') {
        response.json = {
            error: true,
            code: 501,
            message: 'El koder no ha sido creado'
        };
    } else {
        response.json = {
            error: false,
            code: 200,
            message: 'response del koder',
            response: koder
        };
    }
    res.send(response);
});
app.post('/kodemia', function (req, res) {
    if (!req.body.name || !req.body.gerder) {
        response = {
            error: true,
            code: 502,
            message: 'El campo name y gerder son requeridos'
        };
    } else {
        if (koder.name !== '' || koder.gerder !== '') {
            response = {
                error: true,
                code: 503,
                message: 'El koder ya fue creado previamente'
            };
        } else {
            koder = {
                name: req.body.name,
                gerder: req.body.gerder
            };
            response = {
                error: false,
                code: 200,
                message: 'koder creado',
                response: koder
            };
        }
    }

    res.send(response);
});
app.patch('/kodemia', function (req, res) {
    if (!req.body.name || !req.body.gerder) {
        response = {
            error: true,
            code: 502,
            message: 'El campo name y gerder son requeridos'
        };
    } else {
        if (koder.name === '' || koder.gerder === '') {
            response = {
                error: true,
                code: 501,
                message: 'El koder no ha sido creado'
            };
        } else {
            koder = {
                name: req.body.name,
                gerder: req.body.gerder
            };
            response = {
                error: false,
                code: 200,
                message: 'koder actualizado',
                response: koder
            };
        }
    }

    res.send(response);
});
app.delete('/kodemia', function (req, res) {
    if (koder.name === '') {
        response = {
            error: false,
            code: 200,
            message: 'El koder ha sido eliminado'
        }
    res.send(response);
    }
});

app.listen(8080, () => {
    console.log("El servidor está inicializado en el puerto 8080");
});*/

/* ESTO NOMAS ES EJEMPLO DEBE BORRARLO 
app.post('/hola' , (request , response) =>{
    response.write('aquí posteando')
    response.end ()
})
*/

const fs = require('fs')

const express = require('express');
const { response, request } = require('express');
const app = express();


app.use(express.json())

//1. checa el header content type de cada request
//2. si el content type es JSON entonces parsea el contenido como un JSON 
// 3. El JSON resultante nos lo provee en request.body

app.get('/koders',(request, response)=>{
    const k = JSON.parse(fs.readFileSync('./kodemia.json')) // hacerlo una funcion que nos arme el JSON
//ejemplo  k.koders
    const koders = k.koders

    response.json({
        success: true,
        data:{
            koders    //o puedo poner koders:koders pero se hace de la otra manera para hacermas corto el codigo
        }
    })
})

// POST /koders

app.post('/koders', (request , response) =>{
    console.log ('request body', request.body)
    const kodemia = JSON.parse(fs.readFileSync('./kodemia.json'))
    console.log('kodemia', kodemia)

    kodemia.koders.push(request.body)

    const jsonAsString = JSON.stringify(kodemia,'\n',2 )

    fs.writeFileSync('./kodemia.json', jsonAsString)

    response.json({
        success:true,
        data: kodemia.koders
    })

})

//uri params
app.delete('/koders/:name', (request, response)=>{
    const name = request.params.name

    const kodemia = JSON.parse(fs.readFileSync('./kodemia.json'))

    const filteredKoders = kodemia.koders.filter((koder)=>{
        return koder.name !== name
    })

    kodemia.koders = filteredKoders

    const jsonAsString = JSON.stringify(kodemia,'\n',2 )  // ESAS LINEAS HACERLAS 
    fs.writeFileSync('./kodemia.json', jsonAsString)   // LINEAS HACERLAS 

    response.json({
        success:true,
        data:{
            filteredKoders
        }
    })
})

app.patch('/koders/:name',(request,response)=>{
    const currentName = request.params.name
    const newName = request.body.name
    const newGender = request.body.gender

    console.log (currentName)  

    const kodemia = JSON.parse(fs.readFileSync('./kodemia.json'))

    const mapKoder = kodemia.koders.map((koder) => {
        if (currentName === koder.name){ 

            const name = newName || koder.name 
            const gender = newGender ? newGender : koder.gender

            return {
                name, 
                gender
            }
        }
        return koder
    })

    kodemia.koders = mapKoder

    const jsonAsString = JSON.stringify(kodemia,'\n',2 )  
    fs.writeFileSync('./kodemia.json', jsonAsString)   

    response.json({
        success: true,
        data: mapKoder
    })
   // 

})

app.listen(8080, () => {
    console.log("El servidor está inicializado en el puerto 8080");
})

//1. AGREGAR EL METODO PATCH (leer archivo, actualizar koders, escribir al archivo)
// 2. hacer funcionar los uti params sin importar el case 
//3. crear una api para una tienda y sus productos 