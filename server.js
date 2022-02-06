require("dotenv").config({ path: "./config/.env"});
const express = require('express');
const mongoose = require('mongoose');
// require("./config/db");
const app = express()

//importation du module utilisateur

const users = require('./model/user')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//connection a la base de données 

 mongoose.connect(process.env.MONGO_URI,{
     useNewUrlParser:true,
     useUnifiedTopology:true,
 })
 .then(() => console.log("vous etes connectez"))
 .catch((err) => console.log(err));

//routes
//GET
app.get('/users', (req,res) =>{
   users.find((err,data)=>{
        if (err) res.send(err)
        res.json(data)
    })
}) 
//POST

app.post('/users',(req, res)=> {
    users.create(req.body,(err,data)=>{
        if(err) res.send(err)
        res.json(data)
    })
})

//PUT
app.put('/users/:id', (req,res)=> {
    users.findById(req.params.id,req.body,(err,data) =>{
        if(err) res.send(err)
        res.json(data)
    })
})

//DELETE

app.delete('/users/:id',(req,res)=>{
    users.findByIdAndRemove(req.params.id,(err,data) =>{
        if(err) res.send(err)
        res.json(data)
    })
})

app.listen(8080, () => console.log('server start on http://localhost:8080'))