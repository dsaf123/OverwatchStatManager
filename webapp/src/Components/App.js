import React, { Component, Fragment } from "react"
import Header from "./Layouts/Header"
import NavTabs from "./Layouts/NavTabs"
import Footer from "./Layouts/Footer"
import CssBaseline from '@material-ui/core/CssBaseline';


const styles = theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
        width: 1100,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
});

export default props => 
    <Fragment width="auto">        
        <CssBaseline />
        <Header />
        <NavTabs />
        <Footer />
    </Fragment>
