
var http=require('http');  //Step1
var fs =require('fs');      //Step2

var onRequestHandler=function(request,response){   //Step 4
    
    var pathname="./"+request.url;
    console.log(pathname);
    fs.readFile(pathname,(err,data)=>{               //Step 5
        if(err){
            console.log("Something has gone wrong");
            console.log(err);
            response.writeHead(404,{'Content-Type':'text/html'});
        }
        else{
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
};

var server=http.createServer(onRequestHandler); //Step 3

server.listen(9999); //avoid port number 0 to 1024   //step 6

console.log("HTTP server is listening on port number 9898");