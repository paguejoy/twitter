
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

	postDescription: {
		type: String,
		required: [true, "Course name is required"]
	},
	postedOn: {
		type: Date,
		default: new Date()
	}
})

module.exports = mongoose.model("Post", postSchema);