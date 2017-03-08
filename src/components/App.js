import React, { Component } from 'react';
import {Motion, spring, presets} from 'react-motion';
import Box from './Box'
import Circle from './Circle'

/*
Presets
  noWobble: {stiffness: 170, damping: 26}, // the default, if nothing provided
  gentle: {stiffness: 120, damping: 14},
  wobbly: {stiffness: 180, damping: 12},
  stiff: {stiffness: 210, damping: 20},
*/

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {animPhase:0};
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this)
  }

  handleAnimationEnd() {
    this.setState({animPhase:this.state.animPhase+1})
  } 

  render() {
     const isOdd = this.state.animPhase % 2
      if (isOdd) {
        return <Box className="box" onRestHandler={this.handleAnimationEnd}/>
      }
      if (!isOdd) {
        return <Circle className="circle" onRestHandler={this.handleAnimationEnd}/>
      }
  }
}

export default App;
