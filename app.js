// require/import the express module(s)
const express = require("express");
// const cors = require("cors");
const queries = require("./queries");
// const methodOverride = require("method-override");

// instantiate an instance of the express class as 'app'
const app = express();

app.use(express.urlencoded({ extended: true }));
// app.use(cors);
app.use(express.static('public'));
// app.use(methodOverride("_method"));
app.set("view engine", "ejs");


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

app.get("/students/new", (request, response, next) => {
  response.render("postform");
});

app.get("/students/find", (requests, response, next) => {
  response.render("findform");
})

app.post("/students/found", (request, response, next) => {
  // response.json (console.log(request.body));
  queries
  .read("id",request.body.findValue)
  .then(student => {
    response.render( "view", {student: student});
  })
  .catch(next);  
})

app.get("/students/:id", (request, response, next) => {
  queries
    .read("id",request.params.id)
    .then(student => {
      response.render( "view", {student: student});
    })
    .catch(next);
});

app.post("/students", (request, response) => {
  queries
      .create(request.body.student)
      .then( () => {
          response.redirect("/");
      })
      .catch(err => {
          response.send("error: ", err);
      });
});
// app.put();

app.get("/students/:id/delete", (request, response, next) => {
    queries
      .delete(request.params.id)
      .then( () => { response.redirect("/students");})
      .catch(next);
});


// API Routes - read only

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
