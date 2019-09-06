import React, {Component} from 'react';
import CardPokemon from '../components/CardPokemon';

class OrderPokemon extends Component{
  constructor(props) {
   super(props);
   this.selectRadio = this.selectRadio.bind(this);
   this.state = {
     arrayFiltered: this.props.allData
   };
 }

  selectRadio(e) {
    let idRadio = e.target.id.split('-');
    const sortBy = idRadio[1];
    const sortOrder = idRadio[0];
    this.props.allData.map(element => {
      element.height = parseFloat(element.height);
      element.weight = parseFloat(element.weight);
    });

    if (sortOrder == 'asc') {
      let array = this.props.allData.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
      this.setState({arrayFiltered: array});
    }
    else if (sortOrder == 'desc') {
      let array = this.props.allData.sort((a, b) => (a[sortBy] < b[sortBy]) ?  1 : -1);
      this.setState({arrayFiltered: array});
    }
  }

  render() {
   return (
     <section>
       <h2>Order your Pokemon by:</h2>
        <section id="order-section">
          <section className="fieldset">
            <p className="legend">Name</p>
            <input id="asc-name" type="radio" name="order" onClick={this.selectRadio}/>
            <label forhtml="asc-name">A-Z</label>
            <input id="desc-name" type="radio" name="order" onClick={this.selectRadio}/>
            <label forhtml="desc-name">Z-A</label>
          </section>

          <section className="fieldset">
            <p className="legend">Weight</p>
            <input id="asc-weight" type="radio" name="order" onClick={this.selectRadio}/>
            <label forhtml="asc-weight">Light</label>
            <input id="desc-weight" type="radio" name="order" onClick={this.selectRadio}/>
            <label forhtml="desc-weight">Heavy</label>
          </section>

          <section className="fieldset">
            <p className="legend">Height</p>
            <input id="asc-height" type="radio" name="order" onClick={this.selectRadio}/>
            <label forhtml="asc-height">Small</label>
            <input id="desc-height" type="radio" name="order" onClick={this.selectRadio}/>
            <label forhtml="desc-height">Big</label>
          </section>
        </section>

        <section id="pokemons"><CardPokemon dataFiltered={this.state.arrayFiltered}/> </section>
     </section>
   );
 }
}

export default OrderPokemon;



// <section id="search-section">
// <input id="search-coincidences" type="search" value={NamePokemon} placeholder="Search by name"  onChange={this.handleChange} />
// <figure id="icon-search">
// <img id="icon-lup" src={searchImage} alt="search"/>
// </figure>
// </section>
// <ButtonFilter byCategory = {this.filterType} />
// <section id="pokemons"><CardPokemon dataFiltered={this.state.arrayFiltered}/> </section>;
