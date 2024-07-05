const express=require('express');

const mongoose=require('mongoose');

const connectdb=async()=>{
   await mongoose.connect('mongodb://localhost:27017/basic1');
   console.log('Database connected');
}

module.exports=connectdb;