
const express = require('express');

const User=require('../models/user-model.js');

const Register=async(req,res)=>{
    try{
        const {fullname,email,password,confirmpassword}=req.body;
        if(!fullname || !email || !password || !confirmpassword){
            return res.json({
                success:false,

                message:'Please enter all fields',
            })
        }
        const exists =await User.findOne({email});
        if(exists){
            return res.status(400).json({
                success:false,
                message:'Email already exists',
                error:{},
            })      
        }
        if(password!==confirmpassword){
            return res.status(400).json({
                success:false,
                message:'Password does not match',
                error:{},
            })
    
        }
    
        let newUser= await  User({
            fullname,
            email,
            password,
            confirmpassword
        })
        newUser.save();
        return res.status(200).json({
            success:true,
            message:'User registered successfully',
            user:newUser,
        })

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:'Server Error',
            error:err,
        })
    }
   
    }



module.exports=Register;
