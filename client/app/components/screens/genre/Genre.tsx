import { FC } from 'react'
import { IGenrePage } from './genre.types'
import Catalog from '../templates/catalog-movies/Catalog'

const Genre: FC<IGenrePage> = ({ genre, movies }) => {
	return (
		<Catalog
			movies={movies}
			title={genre.name}
			description={genre.description}
		/>
	)
}

export default Genre
