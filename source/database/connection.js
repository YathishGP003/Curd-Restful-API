//This file serves as a connection between the database and server we have created using mongoose

const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/users", {
    // useCreateIndex: true,
    // useNewUrlParser:true,
    // useUnifiedTopology:true
    //These are no longer supported
}).then(() => {
    console.log("Connection successful");
}).catch((e) => {
    console.log(`No Connection ${e}`);
})
