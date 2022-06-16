import { IActor, IMovie } from '@/shared/types/movie.types'

export interface IActorPage {
	actor: IActor
	movies: IMovie[]
}
