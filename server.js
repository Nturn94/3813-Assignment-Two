// Use Express
var express = require("express");
const app = express()
// Use body-parser
var bodyParser = require("body-parser");
const session = require('express-session')
const mongoose = require('mongoose')

app.use(session({
    secret: 'hethjkerogouergouergoergroeg',
    saveUnintialized: false,
    resave: false
}))


mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/assignment')
.then(() => console.log("Mongoose up"))

const User = require('./schemas/User')


// Create new instance of the express server

// Define the JSON parser as a default way 
// to consume and produce data through the 
// exposed APIs
app.use(bodyParser.json());


// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
// var distDir = __dirname + "/dist/";
// app.use(express.static(distDir));



// Local port.
app.listen(8080, () => console.log("Server listening at 8080"))

const path = require('path');

/**
* All other logic
*/

// app.use('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'login.html'));
// });

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.post("/api/login", async (req, res)=> {
    const {email, password} = req.body

    const resp = await User.findOne({email, password})
    if(!resp){
        console.log("incorrect")
        res.json({
            success: false,
            message : "Incorrect details"
        })
    }else{
        res.json({
            success : true
        })
        req.session.user = email
        console.log("Logging you in")
    }
        // login is incorrect
        // make a session
});


// app.post("/api/logout", function (req, res) {

// });

app.post("/api/register", async (req, res) =>{
    console.log(req.body)


    const {email, password} = req.body
    const existingUser = await User.findOne({email})
    console.log(existingUser, email, password)

    if(existingUser){
        res.json({
            success: false,
            message: "Email already in use"
        })
        return
    }
    const user = new User({
        email,
        password
    })

    const result = await user.save()
    console.log("Saved in DB")
    res.json(result)
    res.json({
        success: true,
        message: "Welcome"
    })

    //store data on database
    // Usermodel.save({})

});

app.get('/api/data', async (req, res) => {
    const user = await User.findOne({email : req.session.email})
    if(!user){
        res.json({
            status: false,
            message: "user was deleted"
        })
        return
    }
    console.log("hello world")
    res.json({
        status: true,
        email: req.session.email,
        rank : user.rank
    })
});

app.get('/api/isLoggedin', (req, res) => {
    res.json({
        status: !!req.session.user
    })
})


app.get('/api/logout', (req, res) =>{
    req.session.destroy()
    req.session.save()
    res.json({
        success: true
    })
})





