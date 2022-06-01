import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { getGenresListEach } from 'utils/movie/getGenresList'

import styles from './MovieList.module.scss'

import MaterialIcon from '@/ui/MaterialIcon'

import { IMovie } from '@/shared/types/movies.types'

import { getGenreUrl, getMovieUrl } from '@/config/url.config'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						alt={movie.title}
						width={65}
						height={97}
						src={movie.poster}
						draggable={false}
						priority
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map((genre, idx) => (
							<Link key={genre._id} href={getGenreUrl(movie.slug)}>
								<a>{getGenresListEach(idx, movie.genres.length, genre.name)}</a>
							</Link>
						))}
					</div>

					<div className={styles.rating}>
						<MaterialIcon name="MdStarRate" />
						<span>{movie.rating.toFixed(1)}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
export default MovieItem
