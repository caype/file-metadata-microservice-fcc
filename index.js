var express = require("express");
var formidable = require("formidable");
var port = process.env.PORT || 8080;

var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/',function(req,res){
   res.render("fileUpload");
});

app.post('/upload',function(req,res){
    var incomingForm = formidable.IncomingForm();
    incomingForm.parse(req);
    incomingForm.on('file',function(name,file){
       res.send({name:file.name.slice(0,file.name.indexOf('.')),size:file.size,filetype:file.type}); 
    });
});

app.listen(port,function(){
    console.log("something is happening at https://learn-something-new-chayakrishnaprasad.c9users.io/ ");
});
