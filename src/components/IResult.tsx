import { IMovie } from "./IMovie";

export interface IResult{
    result: IMovie
    openPopup: (id: string) => void
}