import { FC } from 'react'

import AdminNavItem from './AdminNavItem'
import { navItems } from './admin-navigation.data'

import styles from './AdminNavigation.module.scss'

const AdminNavigation: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map((item) => (
					<AdminNavItem navItem={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default AdminNavigation
