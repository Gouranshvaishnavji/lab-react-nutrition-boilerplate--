import { Component } from 'react'
import List from './List'

export default class Food extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0,
        totalAmount: 0
      }
    }

    handleCount = (value) => {
        this.setState({count:value})
    }

    handleTotal = () => {
        this.setState({totalAmount:this.state.count*this.props.food.cal})
    }

    handleReset = () => {
        this.setState({count:0,totalAmount:0})
    }

    render() {
        return (
        <div id='food-container'>
            <div id='food-box'>
                <img src={this.props.food.img} alt="" />
                    <h1>{this.props.food.name}</h1>
                    <p>{this.props.food.cal} Calories</p>
                <div id='add-box'>
                    <input type="number" value={this.state.count} placeholder='enter a number here' onChange={(e) => this.handleCount(e.target.value) } />
                    <button onClick={this.handleTotal}>Add</button>
                </div>
            </div>
            <div>
                <List count={this.state.count} name={this.props.food.name} totalAmount={this.state.totalAmount} handleReset={this.handleReset} />
            </div>
        </div>
        )
  }
}