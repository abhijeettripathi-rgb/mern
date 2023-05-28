const express=require('express');
const notes=require("./data/notes");
const dotenv=require('dotenv');

const app=express();
dotenv.config();


app.get('/api/notes',(req,res)=>{
    res.json(notes);
})
app.get('/api/notes/:id',(req,res)=>{
    notes.find((note)=>{
        if(note._id==req.params.id){
            res.send(note);
        }
    })
})

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is at ${PORT}`);
});
