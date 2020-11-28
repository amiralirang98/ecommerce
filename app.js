var express= require('express')
var app= express()
app.use(express.static("public"))
var mysql= require('mysql');
var multer=require("multer")
var path = require("path")
var con=mysql.createConnection({
"host":"localhost",
"user":"root",
"password":"",
"database":"shoedb"
})
con.connect(function(err){
    if (err)
    console.log(err)
    else
    console.log("connected")

}

)
var storage=multer.diskStorage({
    destination:"./public/css/images",
    filename: function(req,file,cb){
        cb(null,file.originalname+"_"+Date.now()+path.extname(file.originalname))
    }
});
var upload=multer({
    storage:storage
})

app.get('/',function(req,res){
    res.render('index.ejs')
})
app.get('/uploadimagetest', function(req,res){
    res.render("testimgupload.ejs")
})
app.post('/uploadimagetest',upload.single('testimg'), function(req,res){
    res.send(" uploaded")
})
app.get('/views',function(req,res){
    res.render('product_view.ejs')
})
app.get('/buypage',function(req,res){
    res.render('buy_page.ejs')
})
app.get('/buyform', function(req,res){
    res.render('buy_form.ejs')
})
app.get('/cartview',function(req,res){
    res.render('cart_view.ejs')
})
app.listen('3001',function(err){
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('server started successfully work done')
    }

}) 
