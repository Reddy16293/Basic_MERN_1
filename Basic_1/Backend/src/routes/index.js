const express = require('express');

const Register=require('../controllers/register-controller.js');
const Login=require('../controllers/login-controller.js');
const router=express.Router();
const exampleMiddleware = (req, res, next) => {
    // Middleware logic here
    next(); // Don't forget to call next to pass control to the next middleware or route handler
};

router.post('/register',Register);
router.post('/login',Login);
module.exports=router;