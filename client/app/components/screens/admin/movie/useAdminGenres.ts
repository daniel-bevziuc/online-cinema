import { useQuery } from 'react-query'

import { IOption } from '@/ui/select/select.interface'

import { GenreService } from '@/services/genre/genre.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

export const useAdminGenres = () => {
	const queryData = useQuery('list of genre', () => GenreService.getAll(), {
		select: ({ data }) =>
			data.map(
				(genre): IOption => ({
					label: genre.name,
					value: genre._id,
				})
			),
		onError(error) {
			toastError(error, 'genre list')
		},
	})

	return queryData
}
