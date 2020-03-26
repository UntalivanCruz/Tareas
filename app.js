const colors = require('colors')
const argv = require('./config/yargs').argv
const tareas = require('./tareas_por_hacer/accion')

for (comando of argv._) {
    switch (comando) {
        case 'crear':
            tareas.fncrear(argv.descripcion)
            break
        case 'actualizar':
            console.log('actualiza')
            break
        case 'listar':
            console.log("=== TAREAS POR HACER ===".green);
            tareas.fnlistar()
            console.log("========================".green);
    }
}