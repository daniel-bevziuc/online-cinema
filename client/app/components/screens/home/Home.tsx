import { FC } from 'react'
import Meta from 'utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch Movie Star App and TV shows online or streams right to your browsse"
		>
			<h1>Home Page</h1>
		</Meta>
	)
}

export default Home
