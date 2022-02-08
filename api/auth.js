const jwt = require("jsonwebtoken")
const secret = "dailyposts101";

module.exports.createAccessToken = (user) => {
	const data = {
		id: user._id, 
		email: user.email
	}

	return jwt.sign(data, secret, {});
}


module.exports.verify = (req, res, next) => {
	let token = req.headers.authorization

	if(typeof token !== "undefined"){
		
		token = token.slice(7, token.length)

		return jwt.verify(token, secret, (err, data) => {
			if(err){
				return res.send( {auth: "failed"} )
			} else {
				next()
			}
		})
	}
}


module.exports.decode = (token) => {

	return jwt.decode(token)
}