import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'
import { FC, ReactNode } from 'react'

interface ILayout {
	children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
