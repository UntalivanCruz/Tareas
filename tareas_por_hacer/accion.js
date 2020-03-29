 const fs = require('fs')

 let data = []

 const fncargar = () => {
     try {
         data = require('../db/tareas.json')
     } catch (error) {
         data = []
     }
 }

 const fnguardar = () => {
     fs.writeFile('db/tareas.json', JSON.stringify(data), (err) => {
         if (err) throw err('Error al crear el archivo con', descripcion)
     })
 }

 const fncrear = (descripcion) => {
     fncargar()
     data.push({
         descripcion,
         completado: false
     })

     fnguardar()
 }

 const fnlistar = () => {
     fncargar()
     for (valor of data) {
         console.log(`La tarea ${valor.descripcion} esta ${(valor.completado)?'completada':'incompleta'}`);
     }
 }

 const fnactualizar = (descripcion, completado = true) => {
     fncargar()
     let i = data.findIndex(valor => valor.descripcion === descripcion)
     if (i >= 0)
         data[i].completado = completado

     fnguardar()
 }

 const fneliminar = descripcion => {
     fncargar()
     let ndata = data.filter(valor => valor.descripcion !== descripcion)
     if (data > ndata)
         data = ndata
     fnguardar()
 }

 module.exports = {
     fncrear,
     fnlistar,
     fnactualizar,
     fneliminar
 }