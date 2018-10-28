import json
import urllib.request
from datetime import datetime, timezone
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

url = "https://api.overwatchleague.com/match/"
staturl = "https://api.overwatchleague.com/stats/matches/"
response = urllib.request.urlopen(url)
data = json.loads(response.read())
print(json.dumps(data['content'][0]['id'], sort_keys=True, indent=4))
ctr = 1
for i in range(10223,10633):
    try:
        tmpurl = url + str(i)
        response = urllib.request.urlopen(tmpurl)
        data = json.loads(response.read())
        if (data['bracket']['stage']['tournament']['attributes']['program']['type'] == "owl"):
            print(ctr, ":", data['id'], data['competitors'][0]['name'], "vs", data['competitors'][1]['name'], data['scores'][0]['value'], "-", data['scores'][1]['value'], data['startDate'], data['winner']['name'])
            matchdata = [data['id'], data['competitors'][0]['id'], data['competitors'][1]['id'], str(data['scores'][0]) + '-' + str(data['scores'][1]), data['winner']['id']]
            c.execute('insert into Match (MatchID, Team1, Team2, Score, Winner) VALUES (?,?,?,?,?)', matchdata)
            for j in range(1,5):
                tmpurl2 = staturl + str(i) + "/maps/" + str(j)
                response2 = urllib.request.urlopen(tmpurl2)
                statdata = json.loads(response2.read())
                print("\t", statdata['game_number'], end=" ")
                for k in statdata['teams']:
                    for l in k["players"]:
                        for m in l["heroes"]:
                            print("\t",l['esports_player_id'])
                            try:
                                insertdata = [statdata['esports_match_id'], j, m['name'], l['esports_player_id'], m['stats'][0]['value'], m['stats'][1]['value'], m['stats'][2]['value'], m['stats'][3]['value']]
                                c.execute('insert into PlayedOn (Match, MapNumber, Hero, Player, Damage, Deaths, Eliminations, Healing) values (?,?,?,?,?,?,?,?)', insertdata)
                            except:
                                try:
                                    insertdata = [statdata['esports_match_id'], j, m['name'], l['esports_player_id'], m['stats'][0]['value'], m['stats'][1]['value'], m['stats'][2]['value']]
                                    c.execute('insert into PlayedOn (Match, MapNumber, Hero, Player, Damage, Deaths, Eliminations) values (?,?,?,?,?,?,?)', insertdata)
                                except:
                                    pass
                    print("| ", end="")
                print()
            ctr += 1
    except KeyboardInterrupt:
        break
    except:
        pass
db.commit()
db.close()
#10223 - 10632 are stages 1 - 4
#13121 to 13134 are finals
