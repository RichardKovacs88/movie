import React from 'react';
import {Result }from './Result';
import {Movie} from './Movie';
import { IResults } from './IResults';
import { IResult } from './IResult';

const Results = (results: IResults, openPopup:string) => {
	let result: IResult;
	return (
		<section>
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}
export default Results;

