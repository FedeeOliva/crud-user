const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
	username:{
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		trim: true
	},
	profile:{
		type: Schema.Types.ObjectId,
    	ref: 'Profile',
   		required: true
	}
});

module.exports = model('User', UserSchema);