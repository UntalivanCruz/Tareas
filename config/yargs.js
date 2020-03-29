const opc = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const argv = require('yargs')
    .command('crear', 'Comando utilizado para crear una tarea', { descripcion: opc })
    .command('actualizar', 'Comando utilizado para actualizar una tarea', {
        descripcion: opc,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Especificar si la tarea se completo(true o false)',
            type: 'boolean'
        }
    })
    .command('listar', 'Listar todas las tareas por hacer')
    .command('eliminar', 'Eliminar una tarea por hacer', { descripcion: opc })
    .help()
    .argv

module.exports = {
    argv
}