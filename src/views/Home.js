import React from 'react';
import pokemonTitle from '../assets/images/pokemon-logo.png';

const Home = () => (
  <section className="fondo">
    <figure id='logo-poke'>
      <img id='pokemon-title' src={pokemonTitle} alt='POKÉMON'/>
    </figure>
    <p id='subtitle'>Encyclopedia</p>
  </section>
);

export default Home;
