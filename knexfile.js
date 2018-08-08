module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/g90",
    migrations: {
      tableName: 'student'
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + "?ssl=true"
  }
};
