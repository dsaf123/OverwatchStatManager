import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '../Card'
import TextField from '@material-ui/core/TextField'
import HeroStats from "./HeroStats"
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import AutoComplete from './AutoComplete';


const styles = theme => ({
    root: {
      flexGrow: 1,
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });


class PlayerView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            players: [],
            player: "Muma",
            hero: "Tracer",
        };
    
        this.handleChange = this.handleChange.bind(this);
      }



    componentDidMount() {
        this.getPlayers()
      }
    
    getPlayers = _ => {
        fetch('http://localhost:4000/players')
        .then(response => response.json())
        .then(response => this.setState({ players: response.data}))
        .catch(err => console.error(err))
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

    render() {
      return (
        <Fragment>
            <Grid container justify="center" alignItems="center" spacing={16}> 
                <Grid item> 
                    
                    <AutoComplete
                        id="player"
                        defaultValue={this.state.player}
                        value={this.state.value} 
                        onChange={this.handleChange} 
                        />
                    
                    <TextField
                        id="player"
                        label="Player"
                        margin="normal"
                        defaultValue={this.state.player}
                        value={this.state.value} 
                        onChange={this.handleChange}
                    />
                    {this.state.players.map((item, index) => {
                        if(item.Name === document.getElementById("player").value) {
                            return <Card key={1} player={item}>{JSON.stringify(item)}</Card>
                        }
                    })}
                </Grid>
                <Grid item justify="center">                
                    <HeroStats />
                </Grid>
         </Grid>
        </Fragment>
      )
    }
}

export default withStyles(styles)(PlayerView);