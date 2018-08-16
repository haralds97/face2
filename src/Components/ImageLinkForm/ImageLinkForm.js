import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
	return(
		<div className="center">
			<div className="form br2 shadow-5 mt2 mb4">
				<p className="f3 white">
					{'This magic brain will detect faces'}
				</p>
				<div className="center">
					<div className="  center br2 ma2 shadow-5">
						<input className="f3 w-70 br2" type="text" placeholder="paste image url"/>
						<button className="f3 w-30 br2 grow link pointer bg-gold">detect</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ImageLinkForm;