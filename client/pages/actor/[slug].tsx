import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Actor from '@/screens/actor/Actor'

import { IActorPage } from '@/components/screens/actor/actor.types'

import { ActorService } from '@/services/actor/actor.service'
import { MovieService } from '@/services/movie/movie.service'

import Error404 from '../404'

const ActorPage: NextPage<IActorPage> = ({ actor, movies }) => {
	return actor ? <Actor actor={actor} movies={movies} /> : <Error404 />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorService.getAll()
		const paths = actors.map((g) => ({
			params: { slug: g.slug },
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: actor } = await ActorService.getBySlug(String(params?.slug))

		const { data: movies } = await MovieService.getByActor(actor._id)

		return {
			props: { movies, actor },
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			props: {},
			// notFound: true,
		}
	}
}

export default ActorPage
