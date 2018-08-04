// require/import the express module(s)
const express = require('express');  

const queries = require('./queries');

// instantiate an instance of the express class as 'app'
const app = express();               

app.set("view engine", "ejs");


// set a local port number (development)
const localport = 3000;

// use the providers (heroku) port variable if there is one (published production)
// otherwise use our local port (development)
const port = process.env.PORT || localport;


// create a base route to direct page requests to
app.get("/", (req, res) => {
    res.redirect("/students");
});

app.get("/students", (req, res) => {
    queries.list().then(student => res.render("index", { student: student }));
}); 


// create a base route to direct API requests to
app.get('/api/', (request, response, next) => {
    queries.list().then(students => {
        response.json({students});
    }).catch(next);
});



// create a base route to direct API requests to
//app.get('/api/', (request, response, next) => response.send('API data'));       
// app.get('/api/', (request, response, next) => response.json(queries.list()));       





// tell the express app to listen for requests on our port       
app.listen(port, () => console.log(`Server is now listening on port ${port}`));