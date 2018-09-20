import React from "react";
import "./grid.css";

const images = [
  {
    id: 1,
    image: require("./pokemon-icons/png/pikachu.png"),
    hasBeenClicked: false
  },
  {
    id: 2,
    image: require("./pokemon-icons/png/snorlax.png"),
    hasBeenClicked: false
  },
  {
    id: 3,
    image: require("./pokemon-icons/png/charmander.png"),
    hasBeenClicked: false
  },
  {
    id: 4,
    image: require("./pokemon-icons/png/jigglypuff.png"),
    hasBeenClicked: false
  },
  {
    id: 5,
    image: require("./pokemon-icons/png/psyduck.png"),
    hasBeenClicked: false
  },
  {
    id: 6,
    image: require("./pokemon-icons/png/eevee.png"),
    hasBeenClicked: false
  },
  {
    id: 7,
    image: require("./pokemon-icons/png/meowth.png"),
    hasBeenClicked: false
  },
  {
    id: 8,
    image: require("./pokemon-icons/png/bellsprout.png"),
    hasBeenClicked: false
  },
  {
    id: 9,
    image: require("./pokemon-icons/png/rattata.png"),
    hasBeenClicked: false
  },
  {
    id: 10,
    image: require("./pokemon-icons/png/caterpie.png"),
    hasBeenClicked: false
  },
  {
    id: 11,
    image: require("./pokemon-icons/png/bullbasaur.png"),
    hasBeenClicked: false
  },
  {
    id: 12,
    image: require("./pokemon-icons/png/squirtle.png"),
    hasBeenClicked: false
  },
];

class Grid extends React.Component {
  constructor() {
    super()
    this.state = {
      images: images,
      score: 0,
      highScore: 0
    }
  }

  onImageClick = id => {

    

      for (let i = 0; i < images.length; i++) {
        if (images[i].id === id && images[i].hasBeenClicked === false) {
          images[i].hasBeenClicked = true;
          this.state.score++;
        } else if (images[i].id === id && images[i].hasBeenClicked === true) {
          if (this.state.score >= this.state.highScore) {
            this.state.highScore = this.state.score;
          }
          this.state.score = 0;
          for (let j = 0; j < images.length; j++) {
            images[j].hasBeenClicked = false;
          }
        }
      }

      let newArray = images.sort(() => Math.random() - .5);

      this.setState({
        images: newArray
      })
   
  };

  render() {

    let displayImages = this.state.images.map((eachObj, index) =>
      <img onClick={() => this.onImageClick(eachObj.id)} key={index} alt={index} src={eachObj.image} />
    )

    return (
      <div>
        <div className="score-container">
          <div className="score">Current Score<br /> {this.state.score}</div>
          <div className="highScore">High Score<br />{this.state.highScore}</div>
        </div>
        <div className="grid-container">
          {displayImages}
        </div>
      </div>
    )
  }
};


export default Grid;