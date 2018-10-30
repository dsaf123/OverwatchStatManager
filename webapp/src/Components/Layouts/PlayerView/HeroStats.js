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

const rows = [
  createData('Winston', 356, 16.0, 49, 3.9, 345),
  createData('Reinhardt', 237, 9.0, 37, 4.3, 304),
  createData('Orisa', 305, 3.7, 67, 4.3, 205),
  createData('Roadhog', 262, 16.0, 24, 6.0, 30),
  createData('Wrecking Ball', 305, 3.7, 67, 4.3, 25),
  createData('Brigitte', 305, 3.7, 67, 4.3, 4),
];

function SimpleTable(props) {

  return (
    <Paper className={props.root}>
      <Table className={props.table}>
        <TableHead>
          <TableRow>
            <TableCell>Hero</TableCell>
            <TableCell numeric>Elims</TableCell>
            <TableCell numeric>Deaths</TableCell>
            <TableCell numeric>Damage</TableCell>
            <TableCell numeric>Healing</TableCell>
            <TableCell numeric>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.hero}
                </TableCell>
                <TableCell numeric>{row.elims}</TableCell>
                <TableCell numeric>{row.deaths}</TableCell>
                <TableCell numeric>{row.damage}</TableCell>
                <TableCell numeric>{row.healing}</TableCell>
                <TableCell numeric>{row.time}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
    props: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);