const { response } = require("express");
const User = require("../../models/user")
exports.get = async (req, res) => {
    console.log('---called get method on user module');

    let userData = await User.find();

    if (userData) {

        console.log("user data ---", userData)

        let response = {
            status: 200,
            message: 'User Data found',
            data: userData
        }

        res.json(response)

    } else {
        console.log("error")
        let response = {
            status: 500,
            message: 'Error in get user'
        }
        res.json(response)
    }
}




exports.add = async (req, res) => {


    console.log("body", req.body)
    let firstName = req.body.firstname;
    console.log(firstName)

    let lastName = req.body.lastname;
    console.log(lastName);

    let email = req.body.email;
    console.log(email)

    let phone = req.body.phone;
    console.log(phone)
    
    if(phone.length < 10 || phone.length > 10) {
        let response = {
            status: 500,
            message: "Phone number error"
        }
        return res.status(500).json(response);
    }


    let dataSaves = {
        firstName, lastName, email, phone
    }



    try {
        let userSaved = await User.create(dataSaves);
        if (userSaved) {
            console.log("user saved success")

            let response = {
                status: 200,
                message: 'User has been added'
            }

            res.json(response)

        } else {
            console.log("---error in adding user---")

            let response = {
                status: 500,
                message: 'User not added'
            }

            res.json(response)
        }
    } catch (error) {

        console.log("Error in data", error)
        let response = {
            status: 500,
            message: " Error in data"
        }
        res.status(500).json(response)

    }



}

exports.update = (req, res) => {

    let response = {
        message: 'inside user module update method'
    }
    res.json(response)
}


exports.deleteAll = async (req, res) => {
    let deletedData = await User.deleteMany();
    if (deletedData) {
        console.log("deleted data ---", deletedData)
        let response = {
            status: 200,
            message: 'All user data deleted'
        }
        res.json(response)
    }
    else {
        // console.log("error")
        let response = {
            message: 'Error in deleted all userData'
        }

        res.json(response)
    }
}


exports.deleteOne = async (req, res) => {
    let deletedData = await User.deleteOne({_id : req.body.user_Id});

    if (deletedData) {
        console.log("deleted particular data ---", deletedData)
        let response = {
            status: 200,
            message: 'All user data deleted'
        }
        res.json(response)
    }
    else {
        // console.log("error")
        let response = {
            message: 'Error in deleted particular userData'
        }

        res.json(response)
    }




}