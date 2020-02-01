import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor() {
    super()
    this.state = {
      baseUrl: 'https://api.giphy.com/v1/gifs/search?q=',
      gifs: []
    }
  }

  componentDidMount() {
    this.fetchGifs()
  }

  // API key will be deleted from account following lab submission
  fetchGifs = (query = "bears") => {
    fetch(`${this.state.baseUrl}${query}&api_key=Vh6uTcEYWvLiGJlLPNfIbmmKtn4Xotbt&limit=3`)
      .then(result => result.json())
      .then(({data}) => {
        this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url }))})
      })
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}
