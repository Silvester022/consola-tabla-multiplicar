const argv = require('yargs')
    .option('n', {
        alias: 'number',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Profundidad de la tabla'
    })
    .check((argv, options) => {
        if( isNaN(argv.n) ) {
            throw 'El numero tiene que ser de tipo numerico'
        }

        return true;
    })
    .argv;

module.exports = argv;