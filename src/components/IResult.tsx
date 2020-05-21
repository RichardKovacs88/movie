import { IMovie } from './IMovie';
export interface IResult{
	key: string,
    result: IMovie,
	openPopup: (id: string) => void
}