const sqlite3 = require('sqlite3').verbose();
var Players = [];
// Open Database



// Query


// Close

function getPlayers(Players) {
  return Players
}
module.exports.node = {
  child_process: 'empty'
}
module.exports = {
  players: function() {
    let db = new sqlite3.Database('./owdb.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the database.');
    });
    db.all(`SELECT * FROM Player`, [], (err, rows) => {
        if (err) {
          console.error(err.message);
        }
        return rows;
    });
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}
};
