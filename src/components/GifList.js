import React, { Component } from 'react'

export default class GifList extends Component {

  // renderData() {
  //   return this.props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" />)
  // }

  render() {
    return (
      <div>
        {this.props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" />)}
      </div>
    )
  }
}

// import React from "react";

// const GifList = props => {
//   console.log(props);
//   return (
//     <div>
//       {props.gifs.map(gif => (
//         <img key={gif.url} src={gif.url} alt="gif" />
//       ))}
//     </div>
//   );
// };

// export default GifList;
