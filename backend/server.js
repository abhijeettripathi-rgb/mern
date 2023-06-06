const express=require('express');
const notes=require("../frontend/src/data/notes");
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes=require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app=express(); 
dotenv.config();
connectDB();
app.use(express.json());

app.use(cors());

app.get('/',(req,res)=>{
    res.send("api is up");
  
})

app.get('/api/notes',(req,res)=>{
    res.json(notes);
})

app.use('/api/users',userRoutes)



app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is at ${PORT}`);
});
