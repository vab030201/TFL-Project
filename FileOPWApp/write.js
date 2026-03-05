
var fs= require('fs');
var fileName="./data/result.txt";

var dataTobeWritten="This data is written by Node Js Application.......";

var onFileWrite=function(err){
    if (err){
        throw err;
}
console.log("Content has been successfully written into file");
};
//first parameter : path of the file
// second parameter : data to be written
// third parameter : callback function name, which will be called automatically
// after write operation is done by the system

fs.writeFile(fileName,dataTobeWritten,onFileWrite);

console.log("Node js application about to be terminated");