const express = require('express');

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rihem:rihemkacem@contacts.agp4w.mongodb.net/contactdb?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
},
(err)=> {
    if (err) console.log(err)
    else console.log("db connected")
})

const app = express();

app.use (express.json());

app.use("/api/contacts", require("./routes/prototypeRoute"));

app.listen(5000, (err) =>{
    if (err) console.log(err)
    else console.log("server is running on port 5000")
});
