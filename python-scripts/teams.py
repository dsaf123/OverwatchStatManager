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
url = "https://api.overwatchleague.com/teams"
response = urllib.request.urlopen(url)
data = json.loads(response.read())

db = create_connection("owdb.db")
c = db.cursor()
for i in data['competitors']:
    division = ""
    if i['competitor']['owl_division'] == 80:
        division = "Pacific"
    elif i['competitor']['owl_division'] == 79:
        division = "Atlantic"
    tmpdata = [i['competitor']['name'], i['competitor']['id'], division, i['competitor']['icon'], i['competitor']['primaryColor'], i['competitor']['secondaryColor'], i['competitor']['homeLocation']]
    query = 'update Team set Logo = \'' + i['competitor']['icon'] + "\' WHERE Name=\'" + i['competitor']['name'] + "\'"
    c.execute(query)
    #c.execute('insert into Team (Name, TeamID, Division, Logo, PrimaryColor, SecondaryColor, Location) values (?,?,?,?,?,?,?)', tmpdata)
db.commit()
db.close()
