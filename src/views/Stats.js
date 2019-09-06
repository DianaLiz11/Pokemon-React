import React, {Component} from 'react';
import Chart from '../components/Chart';

class Stats extends Component {
  constructor(props){
    super(props);
    this.state = {
      charData : {}
    }
  }

  componentWillMount(){
    this.getCharData();
  }

  getCharData(){
    console.log(this.props.allData);
    this.setState({
      charData: {
        labels:["Bulbasaur", "Ivysaur", "Charmander", "Charmeleon", "Squirtle", "Wartortle", "Caterpie", "Metapod", "Weedle", "Kakuna", "Pidgey", "Pidgeotto", "Rattata", "Spearow", "Ekans", "Pikachu", "Sandshrew", "Nidoran ♀ (Female)", "Nidorina", "Nidoran ♂ (Male)", "Nidorino", "Clefairy", "Vulpix", "Jigglypuff", "Zubat", "Oddish", "Gloom", "Paras", "Venonat", "Diglett", "Meowth", "Psyduck", "Mankey", "Growlithe", "Poliwag", "Poliwhirl", "Abra", "Kadabra", "Machop", "Machoke", "Bellsprout", "Weepinbell", "Tentacool", "Geodude", "Graveler", "Ponyta", "Slowpoke", "Magnemite", "Doduo", "Seel", "Grimer", "Shellder", "Gastly", "Haunter", "Drowzee", "Krabby", "Voltorb", "Exeggcute", "Cubone", "Koffing", "Rhyhorn", "Horsea", "Goldeen", "Staryu", "Magikarp", "Eevee", "Omanyte", "Kabuto", "Dratini", "Dragonair"],
        datasets: [
          {
            label:'candy_count by Pokemon',
            data: [25, 100, 25, 100, 25, 100, 12, 50, 12, 50, 12, 50, 25, 50, 50, 50, 50, 25, 100, 25, 100, 50, 50, 50, 50, 25, 100, 50, 50, 50, 50, 50, 50, 50, 25, 100, 25, 100, 25, 100, 25, 100, 50, 25, 100, 50, 50, 50, 50, 50, 50, 50, 25, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 400, 25, 50, 50, 25, 100],
            backgroundColor: 'rgb(110, 138, 210)',
            borderColor: 'rgb(11, 66, 159)'
          }
        ]
      }
    })

  }

  render(){
    return(
      <section >
        <Chart charData={this.state.charData} description="candy_count by Pokemon" />
      </section>
    )
  }
}

export default Stats;
