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
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Ana', 159, 6.0, 24, 4.0),
  createData('Bastion', 237, 9.0, 37, 4.3),
  createData('Brigitte', 262, 16.0, 24, 6.0),
  createData('D.Va', 305, 3.7, 67, 4.3),
  createData('Doomfist', 356, 16.0, 49, 3.9),
  createData('Genji', 159, 6.0, 24, 4.0),
  createData('Hanzo', 237, 9.0, 37, 4.3),
  createData('Junkrat', 262, 16.0, 24, 6.0),
  createData('Lúcio', 305, 3.7, 67, 4.3),
  createData('McCree', 356, 16.0, 49, 3.9),
  createData('Mei', 159, 6.0, 24, 4.0),
  createData('Mercy', 237, 9.0, 37, 4.3),
  createData('Moira', 262, 16.0, 24, 6.0),
  createData('Orisa', 305, 3.7, 67, 4.3),
  createData('Pharah', 356, 16.0, 49, 3.9),
  createData('Reaper', 159, 6.0, 24, 4.0),
  createData('Reinhardt', 237, 9.0, 37, 4.3),
  createData('Roadhog', 262, 16.0, 24, 6.0),
  createData('Soldier: 76', 305, 3.7, 67, 4.3),
  createData('Sombra', 356, 16.0, 49, 3.9),
  createData('Symmetra', 159, 6.0, 24, 4.0),
  createData('Torbjörn', 237, 9.0, 37, 4.3),
  createData('Tracer', 262, 16.0, 24, 6.0),
  createData('Widowmaker', 305, 3.7, 67, 4.3),
  createData('Winston', 356, 16.0, 49, 3.9),
  createData('Wrecking Ball', 305, 3.7, 67, 4.3),
  createData('Zarya', 356, 16.0, 49, 3.9),
  createData('Zenyatta', 159, 6.0, 24, 4.0),
];

function SimpleTable(props) {
  //const { classes } = props;

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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.calories}</TableCell>
                <TableCell numeric>{row.fat}</TableCell>
                <TableCell numeric>{row.carbs}</TableCell>
                <TableCell numeric>{row.protein}</TableCell>
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