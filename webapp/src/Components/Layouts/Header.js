import React from "react"
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default props => 
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Overwatch Stat Manager
      </Typography>
    </Toolbar>
  </AppBar>
