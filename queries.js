const database = require("./database-connection");

module.exports = {
  
  list() {
    return database("student")
      .select();
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
      .first();
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
