import { FC } from 'react'
import Meta from 'utils/meta/Meta'

import Statistics from './Statistics/Statistics'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'

const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Some statistics" />

			<Statistics />
		</Meta>
	)
}

export default Admin
