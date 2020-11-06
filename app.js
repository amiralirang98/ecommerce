var express= require('express')
var app= express()
app.use(express.static("public"))
app.get('/',function(req,res){
    res.render('index.ejs')
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