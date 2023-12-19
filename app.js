
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')


// let number = 3;

// crearArchivo(number)
//     .then( console.log )
//     .catch( console.log )


// const [,, arg3 = 'number=9' ] = process.argv;
// const [ , number = 9 ] = arg3.split('=');

// crearArchivo(number)
//     .then( console.log )
//     .catch( console.log )


// console.log(process.argv);
// console.log(argv);

crearArchivo(argv.n, argv.l, argv.h)
    .then( console.log )
    .catch( console.log )