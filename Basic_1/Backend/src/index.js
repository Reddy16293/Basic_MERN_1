const express = require('express');
const connectdb=require('./Config/databases.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send('Hello World');
})


app.listen(3000,async ()=>{
    await connectdb();
    console.log('Server is running on port 3000')
})