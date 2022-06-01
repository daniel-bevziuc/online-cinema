import { FC } from 'react'
import { useQuery } from 'react-query'

import MovieList from '../MovieList'

import { MovieService } from '@/services/movie.service'

import SkeletonLoader from '@/ui/SkeletonLoader'

const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery(
		'popular movies in sidebar',
		() => MovieService.getMostPopularMovies()
	)

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			title="Popular Movies"
			link="trending"
			movies={popularMovies || []}
		/>
	)
}
export default PopularMovies
