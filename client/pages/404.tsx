import Meta from 'utils/meta/Meta'

import Heading from '@/ui/heading/Heading'

export default function Error404() {
	return (
		<Meta title="Page not found">
			<div className="text-center text-white font-bold text-3xl text-shadow">
				<Heading title="404 - Page Not Found" />
			</div>
		</Meta>
	)
}
