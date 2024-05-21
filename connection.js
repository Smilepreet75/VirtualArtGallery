const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Smile@75",
    database: "artgallery"
})

connection.connect((error) => {
    if (error) {
        console.log("Error");
    } else {
        console.log("DB Connected")
    }
});

module.exports = connection

