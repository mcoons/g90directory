// require/import the express module(s)
const express = require('express');  

// instantiate an instance of the express class as 'app'
const app = express();               

// set a local port number (development)
const localport = 3000;

// use the providers (heroku) port variable if there is one (published production)
// otherwise use our local port (development)
const port = process.env.port || localport;

// create a base route to direct requests to
app.get('/', (request, response, next) => response.send('Hello There'));       

// tell the app to listen for requests on our port       
app.listen(port, () => console.log(`Server is now listening on port ${port}`));