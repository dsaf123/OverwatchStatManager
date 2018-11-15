import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    height: 300,
    marginTop: theme.spacing.unit * 3,
    overflowY: 'auto',
  },
  table: {
    minWidth: 700,
    maxHeight: 300,
    overflow: 'auto'
  },
  paper: {
    height: 300,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflow: 'auto',
  },
});

let id = 0;
function createData(hero, elims, deaths, damage, healing, time) {
  id += 1;
  return { id, hero, elims, deaths, damage, healing, time };
}

let rows = [
  createData('Winston', 356, 16.0, 49, 3.9, 345),
  createData('Reinhardt', 237, 9.0, 37, 4.3, 304),
  createData('Orisa', 305, 3.7, 67, 4.3, 205),
  createData('Roadhog', 262, 16.0, 24, 6.0, 30),
  createData('Wrecking Ball', 305, 3.7, 67, 4.3, 25),
  createData('Brigitte', 305, 3.7, 67, 4.3, 4),
];

class HeroTable extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    hs: [],
    playerstats: [],

    };
  componentDidMount() {
    console.log("MOUNTED")
  }
  updateStats() {
    this.state.playerstats = this.state.hs.map(hero => (createData(hero.Hero, 1,2,3,4, 0)));
    console.log(this.state.hs);
    console.log("HOOOO");
    console.log(this.props.player.value.label);
  }
  render() {
    console.log(this.state.hs);
    return (
      <Paper className={this.props.root}>
        <Table className={this.props.table}>
          <TableHead>
            <TableRow>
              <TableCell>Hero</TableCell>
              <TableCell numeric>Elims</TableCell>
              <TableCell numeric>Deaths</TableCell>
              <TableCell numeric>Damage</TableCell>
              <TableCell numeric>Healing</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.hs.map(row => {
              console.log(row);
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.Hero}
                  </TableCell>
                  <TableCell numeric>{row.elims}</TableCell>
                  <TableCell numeric>{row.deaths}</TableCell>
                  <TableCell numeric>{row.damage}</TableCell>
                  <TableCell numeric>{row.healing}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

HeroTable.propTypes = {
    props: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroTable);
