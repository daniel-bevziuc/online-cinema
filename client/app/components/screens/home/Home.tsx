import { IHome } from './home.interface'
import { FC } from 'react'

import Layout from '@/components/layout/Layout'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>Home Page</h1>
		</Layout>
	)
}

export default Home
