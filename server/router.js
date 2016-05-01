// req - request is the object that handles the incoming http request, 
//       data about the request made.
// res - response is the ability to respond to the user
// next -  error handling

const Authentication = require('./controllers/authentication');

module.exports = function(app) {
	app.post('/signup', Authentication.signup )
}