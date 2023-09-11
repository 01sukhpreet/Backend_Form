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

    console.log("----body---", req.body)
    let firstName = req.body.firstName;
    console.log(firstName)

    let lastName = req.body.lastName;
    console.log(lastName);

    let email = req.body.email;
    console.log(email)

    let phone = req.body.phone;
    console.log(phone)


    let street = req.body.address.homeAddress.street;
    console.log(street)

    let city = req.body.address.homeAddress.city;
    console.log(city);

    let state = req.body.address.homeAddress.state;
    console.log(state);

    let zip = req.body.address.homeAddress.zip;
    console.log(zip);

    let homeAddress = { street, city, state, zip }

    let street2 = req.body.address.officeAddress.street2;
    console.log("----street---", street2);

    let city2 = req.body.address.officeAddress.city2;
    console.log(city2);

    let state2 = req.body.address.officeAddress.state2;
    console.log(state2);

    let zip2 = req.body.address.officeAddress.zip2;
    console.log(zip2);

    let officeAddress = {};
    officeAddress.street = street2;
    officeAddress.state = state2;
    officeAddress.city = city2;
    officeAddress.zip = zip2;

    let address = { homeAddress, officeAddress }



    // validation on digits of mobile number 
    if (phone.length < 10 || phone.length > 10) {
        let response = {
            status: 500,
            message: "Phone number error"
        }
        return res.status(500).json(response);
    }

    let dataSaves = {
        firstName, lastName, email, phone, address
    }

    // console.log("data saves", dataSaves)
    // return 


    // validation on duplicate data saved in mongoDB
    const User_data = await User.find({
        $or: [
            { email: req.body.email },
            { phone: req.body.phone }]
    })

    // $or: [
    //     {'the_key': 'value1'},
    //     {`the_key': 'value2'}
    // ]
    console.log("-------User_data ----------", User_data)


    if (User_data.length > 0) {
        let response = {
            status: 500,
            message: 'Email and phone already exist'
        }
        res.json(response)
    }
    else {
        try {

            console.log("---data saves---", dataSaves)
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

}






exports.update = async (req, res) => {
    console.log(req.body);
    try {
        let data = await User.findByIdAndUpdate({ _id: req.body.userId }, { $set: req.body }, { new: true })
        if (data) {
            let response = {
                status: 200,
                message: "Data is edited ",
                data: data
            }
            res.json(response)
        } else {
            console.log("Something in wrong")
        }

    } catch (error) {
        console.log(error.message)
    }
};




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
    let deletedData = await User.deleteOne({ _id: req.body.user_Id });

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