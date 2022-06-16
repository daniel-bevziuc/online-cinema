import { FC, Fragment } from 'react'
import Link from 'next/link'

import styles from './ContentList.module.scss'

interface ILink {
	_id: string
	link: string
	title: string
}

interface IContentList {
	name: string
	links: ILink[]
}

const ContentList: FC<IContentList> = ({ name, links }) => {
	return (
		<div className={styles.list}>
			<div className={styles.name}>{name}:</div>
			<div className={styles.links}>
				{links.slice(0, 3).map(({ link, title, _id }, idx) => (
					<Fragment key={_id}>
						<Link href={link}>
							<a>{title}</a>
						</Link>
						{idx + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default ContentList
