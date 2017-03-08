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
      return (

      <div>

      	<Motion defaultStyle={startStyle} style={endStyle} onRest={this.props.onRestHandler}>
  			{({x, scale}) => 
  				<div 
  				className={this.props.className}
  				style={{transform: `scale(${scale})`}}>
  				</div>
  			}
		</Motion>

	</div>
	)
  }

}

export default Box