
const fs = require ('fs')

fs.readFile('hola.txt', 'utf8', function(error,data){
    if (error) return console.log("No se puede leer el archivo");
    console.log(data); 
})
