import React, { Fragment } from 'react';
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
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
});

let id = 0;
function createData(stats, player1Stats, player2Stats) {
  id += 1;
  return { id, stats, player1Stats, player2Stats };
}

const rows = [
  createData('Elims', 159, 6.0),
  createData('Deaths', 237, 9.0),
  createData('Damage', 262, 16.0),
  createData('Healing', 305, 3.7),
];

function SimpleTable(props) {
  //const { classes } = props;

  return (
    <Fragment>
    <Paper className={props.root}>
      <Table className={props.table}>
        <TableHead>
          <TableRow>
            <TableCell >{props.player1}</TableCell>
            <TableCell>Stats</TableCell>
            <TableCell >{props.player2}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell >{row.player1Stats}</TableCell>
                <TableCell component="th" scope="row" >
                  {row.stats}
                </TableCell>
                <TableCell numeric>{row.player2Stats}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    </Fragment>
  );
}

SimpleTable.propTypes = {
    props: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);