import React from 'react'

import Result from './Result'

let results: any;
interface Movie {
    Year: number;
    Poster: string;
    Title: string;
    imdbRating: string;
    Plot: string;
  }

const Results = (result: any, openPopup: any) => {
	return (
		<section className="results">
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}

export default Results
