
const fs = require('fs');
const colors = require('colors');

// const crearArchivo = (number = 1) => {

//     return new Promise( (resolve, reject) => {

//         let salida = '';

//         for(let i = 1; i <= 10; i++) {
//             salida += `${number} x ${i} = ${number * i}\n`;
//         }

//         // fs.writeFile(`tabla-${number}.txt`, salida, (err) => {

//         //     if(err) throw err;

//         //     console.log(`tabla del ${number} creado!`)
//         // })


//         fs.writeFileSync(`tabla-${number}.txt`, salida);

//         resolve(`tabla-${number}.txt`);
//     })
// }


const crearArchivo = async(number = 1, listar, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida  += `${number} x ${i} = ${number * i}\n`;
            consola += `${number} ${ 'x'.green } ${i} = ${number * i}\n`;
        }
    
        fs.writeFileSync(`./salida/tabla-${number}.txt`, salida);
    
        if(listar) 
            console.log(consola)

        return `tabla-${number}.txt`;

    } catch(err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}