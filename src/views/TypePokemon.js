import React, {Component} from 'react';
import searchImage from '../assets/images/search.png';
import ButtonFilter from '../components/ButtonFilter'
import CardPokemon from '../components/CardPokemon';

class TypePokemon extends Component{
  constructor(props) {
   super(props);
   this.handleChange = this.handleChange.bind(this);
   this.filterType = this.filterType.bind(this);
   this.state = {
     NamePokemon: '',
     arrayFiltered: []
   };
 }

 handleChange(e) {
   this.setState({NamePokemon: e.target.value});
   if (this.state.NamePokemon !== '') {
     const concidence = this.props.allData.filter(data => (data.name.toLowerCase().match(this.state.NamePokemon.toLowerCase())));
     console.log(concidence);
     this.setState({arrayFiltered: concidence});
   }
 }

 filterType(type) {
   console.log(type);
   const filteredData = this.props.allData.filter(data =>(data.type.includes(type)));
   console.log(filteredData);
   this.setState({arrayFiltered: filteredData});
 }

 render() {
   const NamePokemon = this.state.NamePokemon;
   return (
     <section>
       <section id="search-section">
         <input id="search-coincidences" type="search" value={NamePokemon} placeholder="Search by name"  onChange={this.handleChange} />
         <figure id="icon-search">
           <img id="icon-lup" src={searchImage} alt="search"/>
         </figure>
       </section>
       <ButtonFilter byCategory = {this.filterType} />
       <section id="pokemons"><CardPokemon dataFiltered={this.state.arrayFiltered}/> </section>;
     </section>

   );
 }
}

export default TypePokemon;
