import sqlite3
import sys

#Run program with no arguments drops all tables.
#Run program with 1 or more arguments drops tables with those names.

conn = sqlite3.connect("owdb.db")
c = conn.cursor()

if len(sys.argv) == 1:
    c.execute("DROP TABLE IF EXISTS Player")
    c.execute("DROP TABLE IF EXISTS Team")
    c.execute("DROP TABLE IF EXISTS PlayersTeam")
    c.execute("DROP TABLE IF EXISTS Coaches")
    c.execute("DROP TABLE IF EXISTS Personnel")
    c.execute("DROP TABLE IF EXISTS Hero")
    c.execute("DROP TABLE IF EXISTS Match")
    c.execute("DROP TABLE IF EXISTS Map")
    c.execute("DROP TABLE IF EXISTS PlayedOn")

else:
    for i in sys.argv[1:]:
        command = "DROP TABLE IF EXISTS " + i
        c.execute(command)

conn.commit()
conn.close()
