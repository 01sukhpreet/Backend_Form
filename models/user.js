const mongoose = require("mongoose");

const reqString = {
    type: String,
    required: true
}

// const addressSchema = mongoose.Schema(
//     {
//         street: reqString,
//         city: reqString,
//         state: reqString,
//         zip: reqString

//     }
// )

// const addressSchema = new mongoose.Schema({
//     street: reqString,
//     city: reqString,
//     state: reqString,
//     zip: reqString
// })



const userSchema = mongoose.Schema(
    {
        firstName: reqString,
        lastName: reqString,
        email: reqString,
        phone: {
            type: Number,
            required: true,
            max: 9999999999,
            min: 1000000000
        },
        address: {
            // embedded documents , in which field have another document
            homeAddress: {
                street: reqString,
                city : reqString,
                state : reqString,
                zip : reqString

            },
            officeAddress: 
            {
                street: reqString,
                city  : reqString,
                state : reqString,
                zip : reqString
            }
        }
    }
    

        // address: {
        //     homeAddress: {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "address"
        //     },
        //     officeAddress: [
        //         {
        //             type: mongoose.Schema.Types.ObjectId,
        //             ref: "address"
        //         },
        //         {
        //             type: mongoose.Schema.Types.ObjectId,
        //             ref: "address"
        //         },
        //         {
        //             type: mongoose.Schema.Types.ObjectId,
        //             ref: "address"
        //         }
        //     ]
        // }
//}
)
module.exports = mongoose.model("user", userSchema)   // collection name is defined here