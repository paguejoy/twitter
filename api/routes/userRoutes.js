const express = require("express");
const router = express.Router();
 
const userController = require("./../controllers/userControllers");


router.post("/email-exists", (req, res) => {

	userController.checkEmail(req.body).then( result => res.send(result))
})


router.post("/register", (req, res) => {

	userController.register(req.body).then( result => res.send(result))
})


router.post("/login", (req, res) => {

	userController.login(req.body).then(result => res.send(result))
})