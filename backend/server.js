const express=require('express');
// const notes=require("../frontend/src/data/notes");
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes=require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const noteRoutes=require('./routes/noteRoutes')
const path=require("path");

const app=express(); 
dotenv.config();
connectDB();
app.use(express.json());

app.use(cors());





app.use('/api/users',userRoutes);
app.use('/api/notes',noteRoutes);



// --------------------------deployment------------------------------
// __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));
  
    app.get("*", (req, res) =>
      // res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
      res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
    );
  } else {
    app.get("/", (req, res) => {
      res.send("API is running..");
    });
  }




// --------------------------deployment------------------------------

// Error Handling middlewares

app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is at ${PORT}`);
});
