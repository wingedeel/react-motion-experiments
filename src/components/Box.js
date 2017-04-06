import React, { Component } from 'react';
import {Motion, spring, presets} from 'react-motion';

class Box extends Component {

	constructor(props) {
    	super(props);
  	}

	render() {

  	const startStyle 	= 	{x: 0, scale:0}
  	const endStyle 		= 	{
	  							x: spring(100),
	  							scale:spring(1,presets.wobbly)
  							}
    
    const getRandomArbitrary = (max, min) => Math.random() * (max - min) + min
    const leftX = getRandomArbitrary(50,300);
    const topX = getRandomArbitrary(50,300);

      return (

      	<Motion defaultStyle={startStyle} style={endStyle} onRest={this.props.onRestHandler}>
  			{({x, scale}) => 
  				<div 
  				className={this.props.className}
  				style={{
            transform: `scale(${scale})`,
            left:leftX,
            top: topX
          }}>
  				</div>
  			}
		  </Motion>
	)
  }

}

export default Box