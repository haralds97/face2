import React from 'react';
import Tilt from 'react-tilt';
import lightning from './lightning.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className="ma4 mt0">
			<Tilt className="Tilt gradient shadow-5 br3" options={{ max : 45 }} style={{ height: 170, width: 170 }} >
				<div className="Tilt-inner pa4"> 
					<img alt="lightning" src={lightning}/>
				</div>
			</Tilt>
		</div>
	)
}

export default Logo;