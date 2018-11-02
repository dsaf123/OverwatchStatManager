import React from "react"
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default props => 
  <Toolbar backgroundColor='white' color='white' borderBottom='1px solid ${theme.palette.grey[300]}'>
    <Typography flex="1" component="h2" variant="h5" color="inherit" align="center" nowrap>
      Overwatch Stat Manager
    </Typography>
  </Toolbar>
 
