import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Tachyons from 'tachyons';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';

class App extends Component {

  render() {
    return(
      <div className="App">
        <Particles className="particles" />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    )
  }
}

export default App;
