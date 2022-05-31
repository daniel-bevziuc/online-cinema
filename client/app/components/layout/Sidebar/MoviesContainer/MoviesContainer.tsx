import { FC } from 'react'

import FavoritesMovies from './FavoriteMovies/FavoritesMovies'
import PopularMovies from './PopularMovies'

const MoviesContainer: FC = () => {
	return (
		<>
			<PopularMovies />
			<FavoritesMovies />
		</>
	)
}
export default MoviesContainer
