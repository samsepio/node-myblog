const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const comentarySchema = Schema({
	email:{type: String},
	comentary:{type: String},
	status:{
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('comentarys',comentarySchema);
