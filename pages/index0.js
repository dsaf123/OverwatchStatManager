/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
    {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const theme1 = createMuiTheme ({
  palette: {
    primary: {
        light: '#8561c5',
        main: '#673ab7',
        dark: '#482880',
      },
  },
  typography: {
    useNextVariants: true,
  },
});

const styles = theme => ({
  mainroot: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 5,
    background: '#fff',
  },

  tabroot: {
    background: '#E0E0E0',
    textAlign: 'center',
    flexGrow: 1,
  },
  gridroot: {
    background: '#E0E0E0',
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 5,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 250,
    width: 250,
  },
});

class Index extends React.Component {
  state = {
    open: false,
    value: 0,
    spacing: '32',
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleGridChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { open, spacing, direction, justify, alignItems } = this.state;
    const code = `
    \`\`\`jsx
    <Grid
    container
    direction="${direction}"
    justify="${justify}"
    alignItems="${alignItems}"
    >
    \`\`\`
    `;
    return (
      <MuiThemeProvider theme={theme1}>
      <div className={classes.mainroot}>
      <Dialog open={open} onClose={this.handleClose}>
      <DialogTitle>Super Secret Password</DialogTitle>
      <DialogContent>
      <DialogContentText>1-2-3-4-5</DialogContentText>
      </DialogContent>
      <DialogActions>
      <Button color="primary" onClick={this.handleClose}>
      OK
      </Button>
      </DialogActions>
      </Dialog>
      <Typography variant="h4" gutterBottom>
      Overwatch Statistics Manager
      </Typography>
      <div className={classes.tabroot}>
      <AppBar position="static" color="default">
      <Tabs
      value={this.state.value}
      onChange={this.handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
      >
      <Tab label="Compare Players" />
      <Tab label="Compare Teams" />
      <Tab label="Advanced Comparisons" />
      <Tab label="Player Lookup" />
      </Tabs>
      </AppBar>
      <SwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={this.state.value}
      onChangeIndex={this.handleChangeIndex}
      >
      <TabContainer dir={theme.direction}>
      <Grid container className={classes.gridroot} spacing={40}>
      <Grid item xs={12}>
      <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
      <Grid key={0} item>
      <Card className={classes.card}>
      <CardActionArea>
      <CardMedia
      className={classes.media}
      image="https://bnetcmsus-a.akamaihd.net/cms/page_media/GAH625QTQPGC1512777247784.png"
      title="sinatraa"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      sinatraa
      </Typography>
      <Typography component="p">
      San Francisco Shock
      </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
      Share
      </Button>
      <Button size="small" color="primary">
      Learn More
      </Button>
      </CardActions>
      </Card>
      </Grid>
      <Grid key={1} item>
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://bnetcmsus-a.akamaihd.net/cms/page_media/EZTH4390SJCR1526600596230.png"
          title="Muma"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Muma
          </Typography>
          <Typography component="p">
            Houston Outlaws
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
      </Grid>
      </Grid>
      <Grid item xs={12}>
      </Grid>
      </Grid>
      </TabContainer>
      <TabContainer dir={theme.direction}>Item Two</TabContainer>
      <TabContainer dir={theme.direction}>Item Three</TabContainer>
      <TabContainer dir={theme.direction}>Item Four</TabContainer>
      </SwipeableViews>

      </div>
      <style jsx global>{`
        body {
          background: #E0E0E0;
        }
        `}</style>
      </div>

      </MuiThemeProvider>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Index);
