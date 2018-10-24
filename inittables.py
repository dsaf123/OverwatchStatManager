import sqlite3

def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by db_file
    :param db_file: database file
    :return: Connection object or None
    """
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)

    return None

db = create_connection("owdb.db")
c = db.cursor()
dropList = ['DROP TABLE Player', 'DROP TABLE PlayersTeam', 'DROP TABLE Team', 'DROP TABLE Hero', 'DROP TABLE Coach', 'DROP TABLE Personel', 'DROP TABLE Match', 'DROP TABLE Map', 'DROP TABLE PlayedOn', 'DROP TABLE MapInstance']
for i in dropList:
    try:
        c.execute(i)
    except:
        pass

createList = ["CREATE TABLE IF NOT EXISTS Player (PlayerID int PRIMARY KEY, Handle char(30), Name char(30), Location char(30), PlayerNumber int, Role char(10), Picture varchar)",
              "CREATE TABLE IF NOT EXISTS PlayersTeam (PlayerID int REFERENCES Player(PlayerID), TeamID int REFERENCES Team(TeamID), UNIQUE(PlayerID, TeamID))",
              "CREATE TABLE IF NOT EXISTS Team (TeamID int PRIMARY KEY, Name char(30), Division char(30), Logo varchar)",
              "CREATE TABLE IF NOT EXISTS Match (MatchID int PRIMARY KEY, Team1 int REFERENCES Team(TeamID), Team2 int REFERENCES Team(TeamID), Time int, Score char(10), Winner int REFERENCES Team(TeamID))",
              "CREATE TABLE IF NOT EXISTS Map (Name varchar PRIMARY KEY, Type varchar, Picture varchar)",
              "CREATE TABLE IF NOT EXISTS MapInstance (Number int, MatchID REFERENCES Match (MatchID), Name varchar REFERENCES Map, Time int, Score char(10), PRIMARY KEY(Number, MatchID))",
              "CREATE TABLE IF NOT EXISTS PlayedOn(Match int, MapNumber int, Hero varchar, Player int REFERENCES Player(PlayerID), Damage float, Deaths int, Eliminations int, Healing float, FOREIGN KEY(Match, MapNumber) REFERENCES MapInstance, PRIMARY KEY(Match, MapNumber, Hero, Player))",
              "CREATE TABLE IF NOT EXISTS Coach (CoachID int PRIMARY KEY, Handle char(30), Name char(30), Team int REFERENCES Team(TeamID))",
              "CREATE TABLE IF NOT EXISTS Personel (StageName char(30) PRIMARY KEY, Name varchar, Type varchar, Picture varchar)"]

for i in createList:
    c.execute(i)

db.commit()
db.close()
