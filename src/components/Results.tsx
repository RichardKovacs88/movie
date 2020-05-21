import React from 'react';
import {Result }from './Result';
import { IMovie } from './IMovie';


const Results = (results: IMovie[], openPopup:(id: string) => void) => {

	return (
		<section>
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}
export default Results;

