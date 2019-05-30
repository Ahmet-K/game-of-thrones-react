import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      episode_info: [],
      imgSrc: null
    };
  }

  componentDidMount() {
    fetch(`https://api.tvmaze.com/shows/82/episodes`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          episode_info: data
        });
      });
  }
 
  render() {
    return (
      <div className="App-header App">
        <h2>Game of Throne</h2>
        {this.state.episode_info.map(episode => {
          return (
          <div>  
            <h3>Episode Name: {episode.name}</h3>
            <h4>Episode: {episode.number} - Season:{episode.season}</h4>
            <img src={getImageForEpisode(episode)} alt="" />
            <p>{episode.summary}</p>
            <p>Airdate: {episode.airdate} </p> 
            <br></br>
          </div>  )
        })}
      </div>
    );
  }
}

function getImageForEpisode(ep) {
  return ep.image ? ep.image.medium : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
}

/*
       
*/

export default App;
