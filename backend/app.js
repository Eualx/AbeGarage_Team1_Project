// Import the express module
const express = require("express");
// Import the dotenv module and call the config method to load the environment variables
require("dotenv").config();
// Create a variable to hold our port number
const port = process.env.PORT;
// Import the router 
const router = require('./routes');
// Create the webserver
const app = express();
// Add the routes to the application as middleware 
app.use(router);
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
// Export the webserver for use in the application
module.exports = app;
