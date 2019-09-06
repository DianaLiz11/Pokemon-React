import React, { Component } from 'react';
import '../App.css';

class CardPokemon extends Component {
  
  render() {

    const cards= this.props.dataFiltered.map(
      (pokemon)=>{
        return(
          <div key={pokemon.id} className="divPokemon">
            <div className="flip-card-inner">
              <div className="flip-card-front"><h5># {pokemon.id}</h5><img id={pokemon.id} src={pokemon.img} alt={pokemon.id}/><p>{pokemon.name}</p>
                <span className="color-type">{pokemon.type}</span>
              </div>
              <div className="flip-card-back">
              <h4>{pokemon.name}</h4>
              <table id="details">
                <tbody>
                  <tr>
                    <th>Height</th><td>{pokemon.height}</td>
                  </tr>
                  <tr>
                    <th>Weight</th><td>{pokemon.weight}</td>
                  </tr>
                  <tr>
                    <th>Candy</th><td>{pokemon.candy}</td>
                  </tr>
                  <tr>
                    <th>Egg</th><td>{pokemon.egg}</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        );
      }
    );

    return (
      <section id="pokemons">
        {cards}
      </section>
    )
  }
}

export default CardPokemon;
