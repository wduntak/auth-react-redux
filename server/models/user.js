const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: { type: String }
});

// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre('save', function(next) {
	const user = this; // equals the user model, ie. user.email, user.password

	// Generate a salt then run callback
	bcrypt.genSalt(10, function(err, salt) {
		if(err) { return next(err); }

		// Hash(encrypt) our password using the salt
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if(err) { return next(err); }

			// Overwrite plain text password with encryped password
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if(err) { return callback(err) };

		callback(null, isMatch);
	});
};

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;