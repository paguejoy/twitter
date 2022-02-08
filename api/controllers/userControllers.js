const User = require("./../models/User");

const bcrypt = require("bcrypt");
const auth = require("./../auth");

module.exports.checkEmail = (reqBody) => {
	const {email} = reqBody 

	return User.findOne({email: email}).then( (result, error) => {
		if(result != null){
			return `Email already exists`
		} else {
			if(result == null){
				return true
			} else {
				return error 
			}
		}
	})
}


module.exports.register = (reqBody) => {

	let newUser = new User({
		firstName: reqBody.firstName,
		lastName: reqBody.lastName,
		email: reqBody.email,
		password: bcrypt.hashSync(reqBody.password, 10)
	})

	return newUser.save().then( (result, error) => {
		if(result){
			return true
		} else {
			return error
		}
	})
}


module.exports.login = (reqBody) => {
	const {email, password} = reqBody;

	return User.findOne({email: email}).then( (result, error) => {

		if(result == null){
			return false
		} else {
			let isPasswordCorrect = bcrypt.compareSync(password, result.password)

			if(isPasswordCorrect == true){
				return {access: auth.createAccessToken(result)}
			} else {
				return false
			}
		}
	})
}