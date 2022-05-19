
 const zodiac = require('zodiac-signs')('es');
 let sebastian=require('./datos/sebastian_zapata');
 

 let bautista =require('./datos/bautista_cozzani');
 
 let renata = require ('./datos/renata_soria');
 
 let  mariana  = require ('./datos/mariana_elstner' );

 let agustin = require ('./datos/agustin_valdera');

 
 /*
 nombrevar + " mensaje"
 `${nombrevar} mensaje `
 */
 function mensaje(datos){
    let signo=zodiac.getSignByDate(datos[3]);
    return `Hola, soy ${datos[0]}, disfruto ${datos[1]} y soy de ${datos[2]}
    y mi signo es ${signo.name} su simbolo es ${signo.symbol}`;
 }
 console.log(zodiac.getSignByDate({ day: 22, month: 6 }));
 console.log(mensaje(bautista)); 
 console.log(mensaje(sebastian)); 
 console.log(mensaje(renata));
 console.log(mensaje(mariana));
 console.log(mensaje(agustin));

 