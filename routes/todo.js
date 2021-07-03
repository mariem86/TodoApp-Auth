
const express=require("express")

const router=express.Router()
const Todo=require('../models/Todo')
const User=require("../models/User")
const isAuthorizerole=require('../middlewares/isAuthorizerole')
const isAuth=require('../middlewares/isAuth')

// test
//localhost:500/api/todo/test
//@ path
//test route
//public/private


// add todo
router.post('/addTodo',isAuth, isAuthorizerole(['client','admin']),(req,res)=>{
    const user =req.user.id
    const{name}=req.body
    const newTodo= new Todo({user,
        name
    })
    newTodo.save()
    .then(todos=>res.send(todos))
    .catch(err=>console.log(err))
})
    //get todos
    router.get("/all",isAuth,isAuthorizerole(['client','admin']),(req,res)=>{
        Todo.find()
    .then(todos=>res.send(todos))
    .catch(err=>console.log(err))
    })
// delete todo
router.delete("/deleteTodo/:_id",isAuth,isAuthorizerole(['client','admin']),(req,res)=>{
    const {_id}=req.params
    
    Todo.findOneAndDelete({user:req.user.id,_id})
    .then(todos=>res.send(todos))
    .catch(err=>console.log(err))

})

// edit contact
router.put("/editTodo/:_id",isAuth,isAuthorizerole(['client','admin']),(req,res)=>{
    const {_id}=req.params
    const {name}=req.body

    Todo.findOneAndUpdate({user: req.user.id,_id},{$set:{name}})
    .then(todos=>res.send(todos))
    .catch(err=>console.log(err))
})


module.exports=router