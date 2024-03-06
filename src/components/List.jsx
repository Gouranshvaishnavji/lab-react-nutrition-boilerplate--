import { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <div id='calories'>
        <div>
        <h3>{this.props.count} {this.props.name} = {this.props.totalAmount} Calories</h3>
        </div>
        <div>
        <button onClick={this.props.handleReset}>Reset</button>
        </div>
      </div>
    )
  }
}