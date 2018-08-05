// require/import the express module(s)
const express = require("express");

const queries = require("./queries");

// instantiate an instance of the express class as 'app'
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'))


// set a local port number (development)
const localport = 3000;

// use the providers (heroku) port variable if there is one (published production)
// otherwise use our local port (development)
const port = process.env.PORT || localport;

// Webpage Routes

app.get("/", (req, res) => {
  res.redirect("/students");
});

app.get("/students", (request, response, next) => {
  queries
    .list()
    .then(student => {
      response.render("index", { student: student });
    })
    .catch(next);
});

app.get("/students/id/:id", (request, response, next) => {
  queries
    .read('id',request.params.id)
    .then(student => {
      response.render( "view", {student: student});
    })
    .catch(next);
});

app.get("/students/new", (request, response, next) => {
  response.render("postform");
});

app.get("/students/find", (requests, response, next) => {
  response.render("findform");
})


// API Routes

app.get("/api/", (request, response, next) => {
  queries
  .list()
  .then(students => {
    response.json({ students });
  })
  .catch(next);
});

app.get("/api/id/:id", (request, response, next) => {
  queries
    .read('id',request.params.id)
    .then(student => {
      response.json({student})
    })
    .catch(next);
});

app.get("/api/lname/:lname", (request, response, next) => {
  queries
    .read('last_name',request.params.lname)
    .then(student => {
      response.json({student})
    })
    .catch(next);
});

app.get("/api/fname/:fname", (request, response, next) => {
  queries
    .read('first_name',request.params.fname)
    .then(student => {
      response.json({student})
    })
    .catch(next);
});


// tell the express app to listen for requests on our port
app.listen(port, () => console.log(`Server is now listening on port ${port}`));
