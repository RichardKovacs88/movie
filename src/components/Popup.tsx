import React from "react";
import Button from "@material-ui/core/Button";
import { IMovie } from './IMovie';

interface IPopupProps {
	selected: IMovie,
	closePopup: () => void
}

const Popup: React.FC<IPopupProps> = (props: IPopupProps) => {
	if (props.selected.Title === "") {
		return <></>;
	}
	return (
		<section className="popup">
			<div className="content">
				<h2>
					{props.selected.Title} <span>({props.selected.Year})</span>
				</h2>
				<p className="rating">Rating: {props.selected.imdbRating}</p>
				<div className="plot">
					<img src={props.selected.Poster} alt={props.selected.Title} />
					<p>{props.selected.Plot}</p>
				</div>
				<Button variant="contained" color="primary" onClick={props.closePopup}>
					Close
				</Button>
			</div>
		</section>
	);
}
export default Popup;