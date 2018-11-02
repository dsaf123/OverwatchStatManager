import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PlayerView from "./PlayerView/PlayerView"
import ComparePlayers from "./ComparePlayers/ComparePlayers"




function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={this.props.root}>
          <Tabs classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }} borderBottom='1px solid #e8e8e8' fullWidth value={value} onChange={this.handleChange}>
            <LinkTab label="Player View" href="page1" />
            <LinkTab label="Compare Players" href="page2" />
            <LinkTab label="Team View" href="page3" />
            <LinkTab label="Compare Teams" href="page4" />
            <LinkTab label="Match View" href="page5" />
          </Tabs>
        {value === 0 && 
        <TabContainer>
            <PlayerView />
        </TabContainer>}
        {value === 1 && 
        <TabContainer>
            <ComparePlayers />
        </TabContainer>}
        {value === 2 && 
        <TabContainer>

        </TabContainer>}
        {value === 3 && 
        <TabContainer>

        </TabContainer>}
        {value === 4 && 
        <TabContainer>
            Page Five
        </TabContainer>}
      </div>
    );
  }
}

NavTabs.propTypes = {
    props: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);