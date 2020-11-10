const express = require('express');
const route = express.Router();
const Prototype = require("../Models/prototypeSchema") ;

route.post("/", (req,res) =>{
    const newPrototype = new Prototype(req.body);

    newPrototype.save((err, data) => {
        if (err) console.log("err")
        else res.send("prototype enregistré")
    });
});

route.get("/",(req,res)=>{
    Prototype.find({Name:personName}, (err, data) =>{
        res.json(data);
    });
});

route.get("/",(req,res)=>{
    Prototype.findOne({FavoriteFoods:Food}, (err, data) =>{
        res.json(data);
    });
});

route.get("/:idContact",(req,res)=>{
    const idcontact = req.params.idcontact;
    const foodToAdd = 'hamburger';
    Prototype.findById(idContact, (err, data) =>{
        data.FavoriteFoods.push(foodToAdd).save();
    });
});

route.put("/:Name",(req,res)=>{
    const Name = req.params.Name;
    const AgeToSet = "20";
    Prototype.findOneAndUpdate({Name:Name}, AgeToSet, { new: true },(err, data)=>{
        if (err) console.log(err);
        else res.send(data);
    });
});

route.delete("/:idContact", (req,res) =>{
    const idcontact = req.params.idcontact;
    Prototype.findByIdAndDelete(idContact, (err,data) =>{
        res.send(data);
    });
});

route.delete("/:Name", (req,res) =>{
    const Name = req.params.Name;
    const NameToRemove = "Ranim";
    Prototype.remove({Name:NameToRemove}, (err, deleted) =>{
        if (err) console.log(err);
        else res.send(deleted);
    });
});

const queryChain = (done) => {
    const foodToSearch = "burrito";
    const results = Prototype.find({FavoriteFoods: foodToSearch}).sort('name').limit(2).select('name favoriteFoods').exec((err, data)=>{
        if (err) return console.log(err);
        else res.send(data);
    });
};

module.exports = route;