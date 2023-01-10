const express = require("express");

const User = require("../models/user.js");

const router = new express.Router();

// Creates a new person
router.post("/POST/people", async (req, res) => 
{
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send({ user,message: "New Account Created!" });
    } catch (e) 
    {
        console.log(e);
        // res.status(500).send({ message: "Something went wrong" });
    }
});

//Retrieves a list of all people in the system
router.get("/GET/people", async (req, res) => 
{
    try{
        const user = await User.find();
        res.send(user);
    }
    catch(err){
        res.send(err);
    }
});

// //Retrieves the person with the given ID
router.get("/GET/people/:id", async (req, res) => 
{
    try{
        const user = await User.find({_id:req.body.id});
        res.send(user);
    }
    catch(err){
        res.send(err);
    }
});

// //Updates the person with the given ID
router.put("/PUT/people/:id", async (req, res) => 
{
    console.log(req.body.id.id);
    console.log(req.body.update);
    try{
        const user = await User.findOneAndUpdate({_id:req.body.id.id},{
            $set : req.body.update
        },{
            new : true,
            useFindAndModify : false
        });
        res.send(user);
    }
    catch(err){
        res.send(err);
    }
});

// //Deletes the person with the given ID
router.delete("/DELETE/people/:id", async (req, res) => 
{
    try{
        const user = await User.findOneAndDelete({_id:req.body.id});
        res.send(user);
    }
    catch(err){
        res.send(err);
    }
});

module.exports = router;