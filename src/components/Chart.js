import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      charData: props.charData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'bottom',
    description: ''
  }

  render() {
    return(
      <div className="container">
        <Line
          data={this.state.charData}
          options={{
            title: {
              display: this.props.displayTitle,
              text:this.props.description,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
