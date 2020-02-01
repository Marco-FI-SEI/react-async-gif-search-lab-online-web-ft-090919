import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor() {
    super()
    this.state = {
      query: ""
    }
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter a Search Term:
            <input onChange={this.handleChange} value={this.state.query} />
          </label>
          <input type="submit" value="Find Gifs" />
        </form>
      </div>
    )
  }
}
