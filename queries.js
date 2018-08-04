const database = require('./database-connection');

module.exports = {
    list(){
        return database('student').select();
    }
}