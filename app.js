const express = require("express");
const app = express();
const connection = require("./connection")
const adminController = require("./Controllers/admin.controller");
const userController = require("./Controllers/user.controller")
const artistController = require("./Controllers/artist.controller");
const cors = require("cors");
// const cookieParser = require('cookie-parser')
const {verify} = require('jsonwebtoken')
const {ArtistLogin} = require("./Controllers/artist.controller");


// app.use(cookieParser())
app.use(cors());
app.use(express.json());

app.set("/", (req, res) => {
    res.send("Response from server");
});


function adminAuthorization_HTTP_Request(req, res, next) {
    if (!req.body.token) {
        return res.json({error: 'Unauthorized Access', message: ''})
    }

    let token = req.body.token
    let secret = "abc@123"

    try {
        // verify token
        req['adminInfo'] = verify(token, secret) // return data
        next()
    } catch (error) {
        res.json({error: error.message, message: ''})
    }
}

function artistAuthorization_HTTP_Request(req, res, next) {
    // console.log("*****");
    console.log(req.body);
    // console.log(req.body.token);
    if (!req.body.token) {
        return res.json({error: 'Unauthorized Access', message: ''})
    }

    let token = req.body.token
    let secretkey = "abc@1234"

    try {
        // verify token
        // console.log(token)
        req['artistInfo'] = verify(token, secretkey) // return data
        next()
    } catch (error) {
        console.log(error.message)
        res.json({error: error.message, message: ''})
    }
}


app.post("/category", adminController.AddCategory);
app.get("/category", adminController.ReadCategory);
app.delete("/category/:id", adminController.DeleteCategory);

app.post("/admin-login", adminController.AdminLogin)
app.post('/change-password', adminAuthorization_HTTP_Request, adminController.AdminChangePassword);

app.post('/user-signup', userController.UserSignup)
app.post('/user-login', userController.UserSingIn)

app.post('/artist-signup', artistController.ArtistSignup);
app.post('/artist-login', artistController.ArtistLogin);
app.get('/manage-artist', artistController.ShowData);
app.get('/manage-art-work', artistController.Showartwork);
app.post('/manage-artist', artistController.UpdateStatus)

app.post('/manage-art-work', artistController.ManageArtWork)
// app.post('/manage-art-work', artistAuthorization_HTTP_Request, (req, res) => {
// // app.post('/manage-art-work', adminAuthorization_HTTP_Request, (req, res) => {
//    try {
//        // console.log(req['artistInfo']);
//        console.log(req.body);
//        res.json({error: "", message: "Art work Added"});
//    } catch (e) {
//        res.json({error: e.message});
//    }
// })


const Port = 5000;
app.listen(Port, (error) => {
    if (error) {
        console.log(error.message);
    } else {
        console.log("Server is Running")
    }
});