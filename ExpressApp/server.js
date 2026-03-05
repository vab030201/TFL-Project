
var express = require('express');
var path=require('path');

var app=express();  //get global object 
                    //global object contains HTTP server
//__dirname ---------virtual path-----http://localhost:9000
//           --------physical path-----D:\TAP\WPT\ExpressApp

var staticMiddleware=express.static(path.join(__dirname,"public"));

//Express framework configuration
//configure static middleware
app.use(staticMiddleware);


//Express framework setting handlers 
//mapping incoming request to call back function
// three req handlers are implemented 
// http://localhost:9000/------callback function
// http://localhost:9000/hello------callback function
// http://localhost:9000/flowers------callback function
//HTTP Request Handlers of type GET Request
// GET function takes two parameters 
// first parameter is path 
// second parameter is call back function
// There are 4 HTTP handlers






app.get("/",(request,response)=>{

    response.sendFile(__dirname+"/index.html");

});   

app.get("/hello",(request,response)=>{
    var flower= [{ "id":34,"title":"Gerbera","unitpric":5}, 
                 { "id":35,"title":"Lotus","unitpric":999},
                 { "id":36,"title":"Rose","unitpric":50}
    ];
    response.send(flowers);
})

app.get("/customers",(request,response)=>{
    var flower= [{ "id":3,"title":"Giraj","unitpric":5756585}, 
                 { "id":311,"title":"Jay","unitpric":89765},
                 { "id":3456,"title":"Vipul","unitpric":97685}
    ]
    response.send(customers);
})

app.listen(9000);
console.log("Express web application is listening on port number 9000");