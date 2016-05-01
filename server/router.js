module.exports = function(app) {
	// req - request is the object that handles the incoming http request, 
	//       data about the request made.
	// res - response is the ability to respond to the user
	// next -  error handling
	app.get('/', function(req, res, next) {
		res.send(['waterbottle', 'phone', 'paper']);
	});
	
}