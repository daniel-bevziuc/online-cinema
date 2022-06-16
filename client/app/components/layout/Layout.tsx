import { FC } from 'react'

import Sidebar from './Sidebar/Sidebar'
import Navigation from './Navigation/Navigation'

import styles from './Layout.module.scss'

const Layout: FC = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
