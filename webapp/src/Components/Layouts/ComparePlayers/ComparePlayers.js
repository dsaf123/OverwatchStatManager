import React, { Fragment, Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '../Card'
import PlayerStats from "./PlayerStats"
import TextField from '@material-ui/core/TextField'
import AutoComplete from './AutoComplete';


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
            value2: '',
            players: [],
            player1: "Muma",
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
    
      handleChange1(val) {
        this.setState({player1: val});
      }

      handleChange2(val) {
        this.setState({player2: val});
      }

    render() {
        return (
            <Fragment>
                <Grid container justify="center" alignItems="center" spacing={16}>
                    <Grid item>
                    <AutoComplete
                        id="Player"
                        defaultValue={this.state.player1}
                        value={this.state.value} 
                        onChange={this.handleChange1} 
                        />
                    {this.state.players.map((item, index) => {
                        if(item.Name === this.state.player1.value) {
                            return <Card key={1} player={item}>{JSON.stringify(item)}</Card>
                        }
                    })}
                    </Grid>
                    <Grid item justify="center">

                    <PlayerStats player1={this.state.player1.value} player2={this.state.player2.value}/>
                    </Grid>
                    
                    <Grid item>
                    <AutoComplete
                        id="Player2"
                        defaultValue={this.state.player2}
                        value={this.state.value2} 
                        onChange={this.handleChange2} 
                        />
                    {this.state.players.map((item, index) => {
                        if(item.Name === this.state.player2.value) {
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