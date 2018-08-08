const database = require("./database-connection");

module.exports = {

  list() {
    return database("student")
      .select()
      .orderBy("last_name");
  },

  create(student) {
    return database("student")
      .from("student")
      .insert(student)
      .returning("*")
      .then(record => record[0]);
  },

  read(attribute, value) {
    return database("student")
      .select()
      .where(attribute, value)
      .orderBy("last_name");
  },

  update(id, student) {
    return database("student")
      .update(student)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },

  delete(id) {
    return database("student")
      .delete()
      .where("id", id);
  }

};
