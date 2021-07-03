const express = require("express");
const connectDB = require("./config/connectDB");
const authRouter = require("./routes/auth");
const todoRouter=require("./routes/todo")
const app = express();



//middleWares
app.use(express.json());


//start the server
connectDB();

//routes
app.use("/api/auth", authRouter);
app.use("/api/auth", todoRouter);


//lunch the Server
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`The Serveris Running on port ${port}....`);
});