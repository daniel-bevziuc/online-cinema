import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { INavItem } from './admin-navigation.interface'

import styles from './AdminNavigation.module.scss'

const AdminNavItem: FC<{ navItem: INavItem }> = ({ navItem }) => {
	const { asPath } = useRouter()

	return (
		<li>
			<Link href={navItem.link}>
				<a className={cn({ [styles.active]: asPath === navItem.link })}>
					{navItem.title}
				</a>
			</Link>
		</li>
	)
}

export default AdminNavItem
