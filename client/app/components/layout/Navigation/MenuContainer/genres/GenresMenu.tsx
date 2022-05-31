import { FC } from 'react'

import Menu from '../Menu'
import { usePopularGenres } from './usePopularGenres'

import SkeletonLoader from '@/ui/SkeletonLoader'

const GenresMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={5} className="h-5 mt-5" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}
export default GenresMenu
