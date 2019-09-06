import React, { Component } from 'react';
import '../App.css';
import { buttonsFilter } from '../data/buttonsFilter.json';

class ButtonFilter extends Component {
  constructor(props) {
   super(props);

 }

 filterByType(type){
   console.log(type);
   this.props.byCategory(type);
 }

  render() {

    const buttons= buttonsFilter.map(
      (element)=>{
        return(
          <button key={element.id} id={element.id} className="typesPokemon" name={element.name} title={element.name} onClick={this.filterByType.bind(this, element.name)} ></button>
        );
      }
    );

    return (
      <section id="type-button">
        {buttons}
      </section>
    )
  }
}

export default ButtonFilter;
