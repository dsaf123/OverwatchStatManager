import React, { Fragment, Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '../Card'
import PlayerStats from "./PlayerStats"
import TextField from '@material-ui/core/TextField'



const styles = {
    card: {
      padding: 20,
    }
  };


class ComparePlayers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            players: [],
            Player1: "Muma",
            player2: "sinatraa",
            hero: "Tracer",
        };
    
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
      }


    componentWillMount() {
        this.getPlayers()
      }
    
    getPlayers = _ => {
        fetch('http://localhost:4000/players')
        .then(response => response.json())
        .then(response => this.setState({ players: response.data}))
        .catch(err => console.error(err))
      }
    
      handleChange1(event) {
        this.setState({player1: event.target.value});
      }

      handleChange2(event) {
        this.setState({player2: event.target.value});
      }

    render() {
        return (
            <Fragment>
                <Grid container justify="center" alignItems="center" spacing={16}>
                    <Grid item>
                    <TextField
                        id="player1"
                        label="Player 1"
                        margin="normal"
                        defaultValue={this.state.player1}
                        value={this.state.player1} 
                        onChange={this.handleChange1}
                    />
                    {this.state.players.map((item, index) => {
                        if(item.Name === document.getElementById("player1").value) {
                            return <Card key={1} player={item}>{JSON.stringify(item)}</Card>
                        }
                    })}
                    </Grid>
            
                    <Grid item>
                        <TextField 
                            id="hero"
                            label="Hero"
                            margin="normal"
                            defaultValue={this.state.hero}

                        />
                        <PlayerStats player1={this.state.player1} player2={this.state.player2}/>
                    </Grid>

                    <Grid item justify="center">
                    <TextField
                        id="player2"
                        label="Player 2"
                        margin="normal"
                        defaultValue={this.state.player2}
                        value={this.state.player2} 
                        onChange={this.handleChange2}
                    />
                    {this.state.players.map((item, index) => {
                        if(item.Name === document.getElementById("player2").value) {
                            return <Card key={1} player={item}>{JSON.stringify(item)}</Card>
                        }
                    })}
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

export default withStyles(styles)(ComparePlayers);