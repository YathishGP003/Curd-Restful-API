const express = require("express");
//Cretaing router
const router = new express.Router();

const UsersSchema = require("../models/ussers");

//if we are requesting data through postman then we need to access permission from express

router.get("/", async (req, res) => {
    res.send("Hello");
})

//We will handle post requests
router.post("/ussers", async (req, res) => {
    // const email = req.body.AccountEmailAddress;

    try {
        // //The below code can work as checking the emails

        const existEmail = UsersSchema.findOne({ email: "AccountEmailAddress" })
        if (!existEmail) {
            res.send("user already exist")
        } else {
            const addingUserDetails = new UsersSchema(req.body);
            console.log(req.body);
            const insertUsers = await addingUserDetails.save();
            res.status(201).send(insertUsers)
            // addingUserDetails.save();
            // res.status(200).json({
            //     message: "user created",
            //     addingUserDetails
            // })
        }

        // //We will be using simple adding now
        // const user = await UsersSchema.create(req.body);
        // res.status(200).json(user)
        // console.log(user)

        // const addingUserDetails = await UsersSchema(req.body).save();
        // console.log(req.body);
        // // const insertUsers = await addingUserDetails.save();
        // res.status(201).send(insertUsers)
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
})

//now we will handle GET requests :/id is http request
router.get("/ussers/:id", async (req, res) => {
    //finding request from our databse
    try {
        //now we will call our unique id params is fnx
        const _id = req.params.id;
        // const getUsers = await UsersSchema.find({});
        //To find a single id db we  will use findById method and users ka user krdia kuki user ka chahiye
        const getUser = await UsersSchema.findById({ _id });
        res.status(201).send(getUser);
    }
    catch (e) {
        res.status(400).send(e);
    }
})

//now we will handle update requests --> patch for single updation
router.patch("/ussers/:id", async (req, res) => {
    //finding request from our databse
    try {
        //now we will call our unique id params is fnx
        const _id = req.params.id;
        // const getUsers = await UsersSchema.find({});
        //To find a single id db we  will use findById method and will add Update to update users ka user krdia kuki user ka chahiye
        const getUser = await UsersSchema.findByIdAndUpdate(_id,
            req.body,
            {
                new: true //to update the data directly on postman
            });
        console.log(getUser);
        res.send(getUser);
    }
    catch (e) {
        res.status(500).send(e);
    }
})

//now we will handle delete requests --> patch for single deletion
router.delete("/ussers/:id", async (req, res) => {
    //finding request from our databse
    try {
        //now we will call our unique id params is fnx
        const _id = req.params.id;
        const getUser = await UsersSchema.findByIdAndDelete(_id);
        res.send(getUser);
    }
    catch (e) {
        res.status(500).send(e);
    }
})

//Exporting this file
module.exports = router;