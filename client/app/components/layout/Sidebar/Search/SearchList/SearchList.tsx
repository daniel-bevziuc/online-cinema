import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IWidgetMovie } from '../../MoviesContainer/movie.types'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IWidgetMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie._id} href={`/movie/${movie.slug}`}>
						<a>
							<Image
								src={movie.poster || ''}
								width={50}
								height={50}
								objectFit="cover"
								objectPosition="top"
								alt={movie.title}
								draggable={false}
							/>
							<span>{movie.title}</span>
						</a>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not found!</div>
			)}
		</div>
	)
}

export default SearchList
