import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../Card'
import RightPlayerStats from "../ComparePlayers/RightPlayerStats"
import LeftPlayerStats from "../ComparePlayers/LeftPlayerStats"
import TextField from '@material-ui/core/TextField'
import HeroStats from "./HeroStats"
import MostPlayed from "./MostPlayed"
import { Typography } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });


export default props =>
    <Fragment>
        <Grid container> 
            <TextField
                id="standard-name"
                label="Player 1"
                margin="normal"
                defaultValue="Muma"
            />
            <Typography variant="subheading">
                Overall Stats
            </Typography>
            <Typography variant="subheading">
                Most Played
            </Typography>
        </Grid>
        <Grid container>
            <Card 
                key={0} 
                name="Muma" 
                team="Houston Outlaws" 
                role="Tank"
                link="https://bnetcmsus-a.akamaihd.net/cms/page_media/EZTH4390SJCR1526600596230.png"
            />
            <HeroStats />
            <MostPlayed />
            <test />
        </Grid>
    </Fragment>