const {Schema, model} = require('mongoose');

const ProfileSchema = new Schema({
	name:{
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	user:{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = model('Profile', ProfileSchema);