import React from 'react';
import {Result }from './Result';
import { IMovie } from './IMovie';

interface IResultsProps {
	results: IMovie[],
	openPopup:(id: string) => void
}

const Results: React.FC<IResultsProps> = (props: IResultsProps) => {

	return (
		<section>
			{props.results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={props.openPopup} />
			))}
		</section>
	)
}
export default Results;

