var connection = require("./connection.js");
//aa
var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, res) {
            if (err) throw err;
            callback(res)
        });
    },
    insertOne: function(Cabboose, Washington, Tucker, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);"
        connection.query(queryString, [Cabboose, Washington, Tucker], function(err, Church) {
            if (err) throw err;
            callback(Church);
        })
    },
    updateOne: function(colVal, id, callback) {
        var queryString = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
        connection.query(queryString, [id], function(err, result) {

            if (err) throw err;

            callback(result);
        });
    },
    deleteOne: function(id, callback) {
        var queryString = "DELETE FROM burgers WHERE " + id + ";";
        connection.query(queryString, [id], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
}

module.exports = orm;