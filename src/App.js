import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import axios from 'axios';
import Navigation from './components/Navigation';
import Home from './views/Home';
import TypePokemon from './views/TypePokemon'

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state= {
      dataPokemon: []
    };

    axios.get("http://localhost:3001/pokemon")
    .then(response=>{
      this.setState({
        dataPokemon:response.data
      })
      console.log(this.state.dataPokemon);
    })
    .catch(error => {
      console.log(error);
    })

  }

  render() {
    return (
      <BrowserRouter>
        <div className="">
          <header>
            <Navigation/>
          </header>
          <main>
            <Route exact path="/" component={Home}/>
            <Route path="/typePokemon/" render={() => <TypePokemon allData= {this.state.dataPokemon}/>} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//<Route path="/typePokemon/" component={TypePokemon}/>

// <Route path="/MyWork" component={MyWork}/>
