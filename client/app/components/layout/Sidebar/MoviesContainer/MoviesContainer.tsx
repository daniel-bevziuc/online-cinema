import { FC } from 'react'

import FavoritesMovies from './FavoriteMovies/FavoritesMovies'
import PopularMovies from './PopularMovieList/PopularMovies'

const MoviesContainer: FC = () => {
	return (
		<>
			<PopularMovies />
			<FavoritesMovies />
		</>
	)
}
export default MoviesContainer
