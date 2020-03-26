 const fs = require('fs')

 let data = []

 const fncargar = () => {
     try {
         data = require('../db/tareas.json')
     } catch (error) {
         data = []
     }
 }

 const fncrear = (descripcion) => {
     fncargar()
     data.push({
         descripcion,
         completado: false
     })

     fs.writeFile('db/tareas.json', JSON.stringify(data), (err) => {
         if (err) throw err('Error al crear el archivo con', descripcion)
     })
 }

 const fnlistar = () => {
     fncargar()
     for (valor of data) {
         console.log(`La tarea ${valor.descripcion} esta ${(valor.completado)?'completada':'incompleta'}`);
     }
 }

 module.exports = {
     fncrear,
     fnlistar
 }