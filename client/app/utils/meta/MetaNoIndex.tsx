import { FC } from 'react'
import Head from 'next/head'

import { titleMerge } from '@/configs/seo.config'

export const MetaNoIndex: FC<{ title?: string }> = ({ title = 'Error' }) => {
	return (
		<Head>
			<title>{titleMerge(title)}</title>
			<meta name='robots' content='noindex, nofollow' />
		</Head>
	)
}
