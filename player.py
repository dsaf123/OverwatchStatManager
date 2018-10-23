import json
import sqlite3
import urllib.request

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
url = "https://api.overwatchleague.com/players"
response = urllib.request.urlopen(url)
data = json.loads(response.read())

db = create_connection("owdb.db")
c = db.cursor()
ctr = 0
for i in data['content']:
    try:
        print (ctr)
        ctr += 1
        tmpdata = [i['id'], i['handle'], i['name'], i['homeLocation'], i['attributes']['player_number'], i['attributes']['role'], 0, 0, 0, 0, 0, i['teams'][-1]['team']['id']]
        c.execute('insert into Player (PlayerID, Handle, Name, Location, PlayerNumber, Role, TotalKills, TotalDeaths, KDRatio, Ultimates, TotalTimePlayed, Team) values (?,?,?,?,?,?,?,?,?,?,?,?)', tmpdata)
    except:
        pass
db.commit()
db.close()
