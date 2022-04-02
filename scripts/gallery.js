const folder = './Assets/Gallery/';
const fs = require('fs');

window.onload = readDirectory();

function readDirectory(){
    fs.readdir(folder, (err, files) => {
        files.forEach(file => {
            console.log(file);
        })
    })
    
}