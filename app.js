//'use strict';
var express = require('express')
var routes = require('./routes/routes')
var bodyParser = require('body-parser')

const app = express()

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(routes)

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    //res.sendFile(__dirname+"/"+"index.html")
    res.render('index',{title:"Hi",message:"Jack, its EJS nodejs template"})
})

var server = app.listen(3000,()=>{
    console.log('server started at port 3000')
})