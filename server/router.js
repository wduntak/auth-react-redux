// req - request is the object that handles the incoming http request, 
//       data about the request made.
// res - response is the ability to respond to the user
// next -  error handling

const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function(app) {
	app.get('/', requireAuth, function(req, res) {
		res.send({ hi: 'there' });
	});
	
	app.post('/signup', Authentication.signup )
}