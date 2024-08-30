//File for schema 
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        //required : true, 

        trim: true
    },
    FirstName: {
        type: String,
        //required : true, 

        trim: true
    },
    LastName: {
        type: String,
        //required : true, 

        trim: true
    },
    Password:{
        // required : false,
        type : Number,
    },
    // PasswordHash:{
    //     required: false,
    // },
    RelatedUserID: {
        type: Number,
        //required : true, 

        //trim :  true
    },
    RelatedComapnyID: {
        type: Number,

        //required : true
    },
    RelatedRoleID: {
        type: Number,
        ///required : true, 

        //trim :  true
    },
    AccountEmailAddress: {
        type: String,
        
        //required : true, 

        trim: true
    },
    AccountPhoneNumber: {
        type: Number,
        //required : true, 

        //trim :  true
    },
    AccountFax: {
        type: Number,
        //required : true, 

        //trim :  true
    },
    Name: {
        type: String,
        //required : true, 

        trim: true
    },
    AccessLevel: {
        type: Number,
        //required : true, 

        //trim :  true
    },
    RelatedAccountID: {
        type: Number,
        //required : true, 

        //trim :  true                                    
    },
    Planlevel: {
        type: Number,
        //required : true, 

        //trim :  true
    },
},
// {
//     isadmin : {
//         default : false,
//     }
// }
)

//We are creating a new collection
const UsersSchema = new mongoose.model("usersSchema", userSchema);

//module exporting
module.exports = UsersSchema;