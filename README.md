# Overwatch Statistics Manager
This is our CS2300 Final Project which contains our complete submission.
# There are two submodules:
dsaf123/OverwatchStatisticsHost (dbapp) containing the node js server which connects to the database and hosts in information

dsaf123/OverwatchStatisticsView (webapp) containing a React JS server which provides an interface and website to view information hosted by the Node server.





# Amp! it up Stats.

Amp! it up Stats is a statistics viewer for Blizzard's Overwatch League. 
You can use this program to see stats on individual players, teams, and matches. 
As well as compare players and teams.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You must install the following things 

```
Node.js 8.12
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

Clone the repository and move in to the directory

```
git clone https://github.com/dsaf123/OverwatchStatManager.git
cd OverwatchStatManager
```

Setup and start the database server

```
cd dbapp
node install
node index.js
```

Setup and start the web server

```
cd ..
cd webapp
npm install
npm start
```

Navigate to 

'''
localhost:3000
'''

## Built With

* [Node.js](https://nodejs.org/en/) - The web framework used

## Authors

* **Andrew Henningsen** [dsaf123](https://github.com/dsaf123)
* **Evan Wilcox** [EvanWilcox](https://github.com/EvanWilcox)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
