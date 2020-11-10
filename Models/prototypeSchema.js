const mongoose = require('mongoose')

const prototypeSchema = mongoose.Schema({
    Name : String ,
    Email: {
        type: String ,
        require: true,
    },
    passWord: {
        type: String ,
        require: true,
    },
    Age :{
        type: Number,
        require: true,
    },
    Weight: Number,
    FavoriteFoods : {
        type: [String] ,
        require: true,
    },
});
module.exports = mongoose.model("contacts", prototypeSchema)