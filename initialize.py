import sqlite3

conn = sqlite3.connect("owdb.db")
c = conn.cursor()


c.execute("CREATE TABLE IF NOT EXISTS Player(PlayerID int, Handle varchar, Name varchar, Location varchar, Number int, Role varchar, Picture varchar, PRIMARY KEY(PlayerID));")
c.execute("CREATE TABLE IF NOT EXISTS Team(TeamID int, Name varchar, Division varchar, Logo varchar, PRIMARY KEY(TeamID));")
c.execute("CREATE TABLE IF NOT EXISTS PlayersTeam(PlayerID int, TeamID int, PRIMARY KEY(PlayerID, TeamID));")
c.execute("CREATE TABLE IF NOT EXISTS Coach(CoachID int, Handle varchar, Name varchar, Team varchar, PRIMARY KEY(CoachID));")
c.execute("CREATE TABLE IF NOT EXISTS Personnel(Name varchar, Handle varchar, Type varchar, Picture varchar, PRIMARY KEY(Name));")
c.execute("CREATE TABLE IF NOT EXISTS Hero(HeroID int, Name varchar, PRIMARY KEY(HeroID));")
c.execute("CREATE TABLE IF NOT EXISTS Match(MatchID int, Time int, Score varchar, Winner varchar, Loser varchar, PRIMARY KEY(MatchID));")
c.execute("CREATE TABLE IF NOT EXISTS Map(MatchID int, MapNumber int, MapName varchar, Time int, Score varchar, PRIMARY KEY(MatchID, MapNumber));")
c.execute("CREATE TABLE IF NOT EXISTS PlayedOn(MatchID int, MapNumber int, PlayerID int, Hero int, Damage int, Deaths int, Elims int, Healing int, PRIMARY KEY(MatchID, MapNumber, PlayerID, Hero));")

conn.commit()
conn.close()
