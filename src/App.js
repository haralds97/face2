import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Tachyons from 'tachyons';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {},

    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input
      )
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  displayFaceBox = () => {
    this.setState({ box: box })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const height = Number(image.height);
    const width = Number(image.width);
    return {
      leftCol: clarifaiFace.left_col * width, // // first is percentage of the width. if we multiply it by 'width', we will get the width of the actual displayed image - where the left column should be.
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  render() {
    return(
      <div className="App">
        <Particles className="particles" />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange}
        />
        <FaceRecognition 
          imageUrl={imageUrl}
          box={box}
        />
      </div>
    )
  }
}

export default App;
