import { IMovie } from './IMovie';
export interface IResults{
	results: IMovie[];
    openPopup: (id: string) => void
}