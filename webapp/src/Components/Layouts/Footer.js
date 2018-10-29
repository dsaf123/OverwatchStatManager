import React from "react"
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default props => 
  <AppBar position="static" color="white">
    <Toolbar>
      <Typography variant="caption" color="inherit" justify="center">
        Andrew Henningsen & Evan Wilcox
      </Typography>
    </Toolbar>
  </AppBar>
