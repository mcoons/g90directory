const express = require("express");
// const cors = require("cors");
const queries = require("./queries");
const methodOverride = require("method-override");
const localport = 3001;
const port = process.env.PORT || localport;
const database = require("./database-connection");

const app = express();

app.use(express.urlencoded({ extended: true }));
// app.use(cors);
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.redirect("/students");
});

app.get("/reset", (request, response) => {
    database.seed.run()
    .then(() => {response.redirect("/students");});
});


app.get("/about", (request, response, next) => {
  queries
    .read("id","19")
    .then(student => { response.render( "about", { student: student[0] }); })
    .catch(next);
});

app.get("/new", (request, response, next) => {
  response.render("postform");
});

app.get("/find", (requests, response, next) => {
  response.render("findform");
});

app.post("/find", (request, response, next) => {
  queries
    .read(request.body.radio_find,request.body.findValue)
    .then(student => { response.render( "view", {student: student}); })
    .catch(next);  
});

app.get("/edit/:id", (request, response, next) => {
  queries
    .read("id", request.params.id)
    .then(student => { response.render("edit", { student: student[0] }); })
    .catch(next);
});


//////     CRUD ROUTES     //////


app.get("/students", (request, response, next) => {
  queries
    .list()
    .then(student => { response.render("index", { student: student }); })
    .catch(next);
});

app.post("/students", (request, response) => {
  queries
    .create(request.body.student)
    .then(response.redirect("/"))
    .catch(err => { response.send("error: ", err); });
});

app.get("/students/:id", (request, response, next) => {
  queries
    .read("id",request.params.id)
    .then(student => { response.render( "view", { student: student }); })
    .catch(next);
});

app.put("/students/:id", (request, response, next) => {
  queries
    .update(request.params.id, request.body.student)
    .then(response.redirect("/students/"+request.params.id))
    .catch(next);
});

app.delete("/students/:id", (request, response, next) => {
  if (request.params.id === "19"){
    response.redirect("/students")
  } 
  else {
    queries
      .delete(request.params.id)
      .then(response.redirect("/students"))
      .catch(next);
  }
});


//////     API ROUTES  (read only)     //////


app.get("/api/", (request, response, next) => {
  queries
    .list()
    .then(students => { response.json({ students }); })
    .catch(next);
});

app.get("/api/id/:id", (request, response, next) => {
  queries
    .read('id', request.params.id)
    .then(student => { response.json({student}); })
    .catch(next);
});

app.get("/api/lname/:lname", (request, response, next) => {
  queries
    .read('last_name', request.params.lname)
    .then(student => { response.json({student}); })
    .catch(next);
});

app.get("/api/fname/:fname", (request, response, next) => {
  queries
    .read('first_name', request.params.fname)
    .then(student => { response.json({student}); })
    .catch(next);
});


app.listen(port, () => console.log(`Server is now listening on port ${port}`));
