import { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div id='search'>
        <h1>Search</h1>
        <input type="text" placeholder='Enter food' onChange={(e)=>{return this.props.handleSearch(e.target.value)}} />
      </div>
    )
  }
}