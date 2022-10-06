const fs = require('fs');
const moment = require('moment');
const file = './';

// fs.watchFile(file, (current, previos) => {
//     const time = moment().format("MMMM DO YYYY, h:mm:ss a");
//     console.log(`the ${file} was updated in ${time}`);
// })

fs.watch(file, (eventType, filename) => { 
    const time = moment().format("MMMM Do YYYY, h:mm:ss a"); 
    console.log(`${filename} updated ${time}`); 
    console.log(`evento: ${eventType}`); 
});


