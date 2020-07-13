
const express = require ('express')

const app = express()

// HTTP REQUEST 
// GET
// POST
// PUT
// DELETE
// PATCH

/*app.get()
app.post()
app.put()
app.all ()*/

// endpoint es la conjunción de una ruta y un método 

app.get('/hola' , (request , response) =>{
    response.write('holi koders')
    response.end ()
})

app.post('/hola' , (request , response) =>{
    response.write('aquí posteando')
    response.end ()
})

app.listen(8080, ()=>{
    console.log ('server is ready on port 8080')
})

