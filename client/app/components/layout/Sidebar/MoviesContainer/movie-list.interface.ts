import { IMovie } from './../../../../shared/types/movies.types';

export interface IMovieList {
  title: string;
  link: string;
  movies: IMovie[];
}