The g90 Directory is a student directory of my cohort.


This is a full stack app written in express, ejx and knex on a PostgreSQL database.

Knex migrations and seeds are used to prepare the database.

It is published at https://g90-directory.herokuapp.com/.

The server also has an API with the following points.

/api - Query all.

/api/id/:id - Query by ID.

/api/lname/:lname - Query by last name

/api/fname/:fname - Query by first name

/api/reset - Reset API data