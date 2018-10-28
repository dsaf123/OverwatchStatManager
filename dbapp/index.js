const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();

const allPlayers = 'SELECT * FROM Players';

let db = new sqlite3.Database('./owdb.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello world')
});

app.get('/players', (req, res) => {
  db.all('SELECT * FROM Player', [], (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    return res.json({
      data: rows
    });
  })
});

app.get('/player', (req, res) => {
  const {player} = req.query;
  db.all(`SELECT * FROM Player WHERE Name='${player}'`, [], (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    return res.json({
      data: rows
    });
  })
});

app.get('/stats/player', (req, res) => {
  const {player} = req.query;
  db.all(`SELECT * FROM PlayedOn JOIN (SELECT PlayerId FROM Player WHERE Name='${player}') where PlayedOn.Player=PlayerId`, [], (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    return res.json({
      data: rows
    });
  })
});

app.get('/herostats/player', (req, res) => {
  const {player} = req.query;
  db.all(`SELECT PlayedOn.Hero, SUM(damage), SUM(eliminations), SUM(deaths), SUM(healing) FROM PlayedOn JOIN (SELECT PlayerId FROM Player WHERE Name='${player}') where PlayedOn.Player=PlayerId GROUP BY PlayedOn.Hero`, [], (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    return res.json({
      data: rows
    });
  })
});

app.get('/cmpplayer', (req, res) => {
  const {player1, player2} = req.query;
  db.all(`Select * FROM (SELECT * FROM PlayedOn as P1 Join (SELECT PlayerId FROM Player WHERE Name='${player1}') where P1.Player=PlayerId) JOIN (SELECT * FROM PlayedOn AS P2 Join (SELECT PlayerId FROM Player WHERE Name='${player2}') where P2.Player=PlayerId) WHERE P1.MatchId=P2.MatchId and P1.MapNumber=P2.MapNumber`, [], (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    return res.json({
      data: rows
    });
  })
});

app.listen(4000, () => {
  console.log("Server listening on 4000");
});
