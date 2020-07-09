


// Syntax const nombre de la const = http.createServer(requestListener);

// creacion de servidor en memoria
// .write al paquete de repsuesta

const http = require('http')

const server = http.createServer((request, response) => {
    console.log('nos mandaron a llamar :D ')

    // para escribir en los parametros
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })

    console.log('met', request.method)

    if (request.url === '/adios') {
        response.write('<h1>ADIÓS</h1>')

    } else if (request.method === 'GET') {
        response.write('<h1>LO HICE UTILIZANDO GET</h1>')

    } else if (request.method === 'POST') {
        response.write('<h2>Utilizo post</h2>')
    } else {
        response.write('<h1>hola desde node :(((( me regaño Mau</h1>')
    }
    response.end()
})

    //  el 8080 es el puerto del servidor
    server.listen('8080', () => {
        console.log('el servidor esta escuchando ')
    })
