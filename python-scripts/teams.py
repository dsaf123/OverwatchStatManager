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
    tmpdata = [i['competitor']['name'], i['competitor']['id']]
    c.execute('insert into Team (Name, TeamID) values (?,?)', tmpdata)
db.commit()
db.close()
