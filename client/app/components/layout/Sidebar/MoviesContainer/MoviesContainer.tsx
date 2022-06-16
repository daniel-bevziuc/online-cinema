import { FC } from 'react'

import FavoriteMovieList from './FavoriteMovieList/FavoriteMovieList'
import PopularMovieList from './PopularMovieList/PopularMovieList'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovieList />
			<FavoriteMovieList />
		</div>
	)
}

export default MoviesContainer
