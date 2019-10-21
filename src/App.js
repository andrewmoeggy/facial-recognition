import React, { Component } from 'react';
import Header from './components/Header/Header';
import ImageSearch from './components/ImageSearch/ImageSearch';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import WaveAnimation from './layout/WaveAnimation/WaveAnimation';
import Layout from './layout/Layout';
import './App.css';

const Clarifai = require('clarifai');
const clarifaiKey = '50f6c94653794746bb4bfaffe108ec0b';
const app = new Clarifai.App({
  apiKey: clarifaiKey
});

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
      imageUrl: '',
      coords: {
        top_row: '',
        left_col: '',
        bottom_row: '',
        right_col: ''
      },
      box: {
        top_row: '',
        left_col: '',
        bottom_row: '',
        right_col: ''
      }
    }
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }


  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.input
    })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(res => res.outputs[0].data.regions[0].region_info.bounding_box)
      .then(data => this.setState({
        coords: {
          top_row: data.top_row,
          left_col: data.left_col,
          bottom_row: data.bottom_row,
          right_col: data.right_col
        }
      })
      )
      .then(() => this.displayBox())
      .then(() => console.log(this.state.coords))
      .catch(err => console.log(err))
  }

  displayBox = () => {
    const image = document.querySelector(".image-display__image");
    const width = image.width;
    const height = image.height;
    this.setState({
      box: {
        leftCol: this.state.coords.left_col * width,
        topRow: this.state.coords.top_row * height,
        rightCol: width - (this.state.coords.right_col * width),
        bottomRow: height - (this.state.coords.bottom_row * height)
      }
    })
    console.log(this.state.box)
  }
  render() {
    let image = '';
    if (this.state.imageUrl) {
      image = this.state.imageUrl;
    }
    return (
      <div className="App">
        <Layout>
          <Header />
          <ImageSearch handleInput={this.handleInput} onButtonSubmit={this.onButtonSubmit} />
          <ImageDisplay image={image} box={this.state.box} />
        </Layout>
        <WaveAnimation />
      </div>
    );
  }
}

export default App;

// TODO
// GET URL 
// SET IT TO STATE
// SEND URL TO CLARIFAI API
// USE THE RETURN PROMISE TO ADD CSS TO FACE RECOG