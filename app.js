const express = require("express");
const app = express();
var cors = require("cors");
const database = require('./database')

const PORT = 5000;

database();

// for req,body
app.use(express.json());
// for req.body url-form-encoded
app.use(express.urlencoded({ extended: true })); 

const user = require('./routes/user')
const product = require('./routes/product')

app.use(cors());


app.get('/', function (req, res) {
    console.log('hello world')
    // res.send('hello world')
    let response = {
        message: 'response from server'
    }
    res.json(response)
})


app.use("/user", user)
app.use('/product', product)

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});