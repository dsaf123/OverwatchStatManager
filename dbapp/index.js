const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const path = require('path')
const allPlayers = 'SELECT * FROM Players';

let db = new sqlite3.Database('./owdb.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

app.use(cors());

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
  db.all(`SELECT * FROM Stats JOIN (SELECT PlayerId FROM Player WHERE Name='${player}') where Stats.Player=PlayerId`, [], (err, rows) => {
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
  db.all(`SELECT * FROM
          (SELECT Hero, Damage as P1Damage, Healing AS P1Healing, Eliminations as P1Elims, Deaths as P1Deaths, Ultimates as P1Ultimates, FinalBlows as P1FinalBlows, Time as P1Time
            FROM Stats JOIN
              (SELECT PlayerId FROM Player WHERE Name='${player1}') as p1id
                WHERE Stats.Player=p1id.PlayerId) AS P1
          JOIN
          (SELECT Hero, Damage as P2Damage, Healing AS P2Healing, Eliminations as P2Elims, Deaths as P2Deaths, Ultimates as P2Ultimates, FinalBlows as P2FinalBlows, Time as P2Time
            FROM Stats as S2 JOIN
              (SELECT PlayerId FROM Player WHERE Name='${player2}') as p2id
                WHERE S2.Player=p2id.PlayerId) AS P2
          WHERE P1.Hero = P2.Hero
          `, [], (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    return res.json({
      data: rows
    });
  })
});


// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../../webapp/public')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../../webapp/public/index.html'))
})

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
app.listen(port, "0.0.0.0", () => {
  console.log("Server listening on " + port);
});
