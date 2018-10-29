import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '../Card'
import RightPlayerStats from "./RightPlayerStats"
import LeftPlayerStats from "./LeftPlayerStats"
import TextField from '@material-ui/core/TextField'


const styles = {
    card: {
      padding: 20,
    }
  };





class ComparePlayers extends React.Component {
    state = {
        player: []
    }


    componentWillMount() {
        this.getPlayers()
        console.log("Hello")
      }
    
    getPlayers = _ => {
        fetch('https://loclhost:4000/players')
        .then(response => response.json())
        .then(response => this.setState({ players: response.data}))
        .catch(err => console.error(err))
      }
    
    render() {
        return (
            <Fragment>
                <Grid container justify="center">
                    <TextField
                      id="player1"
                      label="Player 1"
                      margin="normal"
                      defaultValue="Muma"
                    />
                    <TextField
                      id="player2"
                      label="Player 2"
                      margin="normal"
                      defaultValue="sinatraa"
                    />
                </Grid>

                <Grid container justify="center" spacing={16}>
                    
                    <Card 
                        key={0} 
                        name="Muma" 
                        team="Houston Outlaws" 
                        role="Tank" 
                        picture="https://bnetcmsus-a.akamaihd.net/cms/page_media/EZTH4390SJCR1526600596230.png"
                        />
                    
                    {/*<Card key={0} player={this.state.players} />*/}  
                    <Card 
                        key={1} 
                        name="sinatraa" 
                        team="San Francisco Shock" 
                        role="Damage" 
                        picture="https://bnetcmsus-a.akamaihd.net/cms/page_media/GAH625QTQPGC1512777247784.png"/>
                </Grid>
                <Grid container justify="center">
                    <LeftPlayerStats />
                    <RightPlayerStats />
                </Grid>
            </Fragment>
        );
    }
}

export default withStyles(styles)(ComparePlayers);