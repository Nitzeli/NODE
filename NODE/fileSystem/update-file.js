
const fs = require ('fs')

fs.appendFile('hola.txt', ' Le estoy cambiando cositas :v', (error) => {
    if (error) throw error;
    console.log('se hizo la modificación correcta :3 !');
  });