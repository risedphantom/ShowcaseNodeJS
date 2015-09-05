var portfolio = require("./controller/portfolioController");

// Define routes
module.exports = function (app){
	app.get('/greeting', portfolio.greeting);
	// Views
	app.get('/', portfolio.index);
	app.get('/index', portfolio.index);
	app.get('/uses', portfolio.uses);
	app.get('/about', portfolio.about);
	app.get('/resume', portfolio.resume);
	app.get('/contacts', portfolio.contacts);
	app.get('/portfolio', portfolio.portfolio);
};