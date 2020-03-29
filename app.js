const colors = require('colors')
const argv = require('./config/yargs').argv
const tareas = require('./tareas_por_hacer/accion')

for (comando of argv._) {
    switch (comando) {
        case 'crear':
            tareas.fncrear(argv.descripcion)
            break
        case 'actualizar':
            tareas.fnactualizar(argv.descripcion, argv.completado)
            break
        case 'listar':
            console.log("=== TAREAS POR HACER ===".green);
            tareas.fnlistar()
            console.log("========================".green);
            break
        case 'eliminar':
            tareas.fneliminar(argv.descripcion)
            break
        default:
            console.log('Opcion no valida');
            break
    }
}