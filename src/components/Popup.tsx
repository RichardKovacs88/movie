import React from "react";
import Button from "@material-ui/core/Button";
import {Movie} from './Movie';


const Popup = (selected: any, closePopup: any) => {
	return (
		<section className="popup">
			<div className="content">
				<h2>
					{selected.Title} <span>({selected.Year})</span>
				</h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} alt={selected.Title} />
					<p>{selected.Plot}</p>
				</div>
				<Button variant="contained" color="primary" onClick={closePopup}>
					Close
				</Button>
			</div>
		</section>
	);
}
export default Popup;
