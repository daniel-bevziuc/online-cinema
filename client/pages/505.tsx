import Meta from 'utils/meta/Meta'

import Heading from '@/ui/heading/Heading'

export default function Error500() {
	return (
		<Meta title="Page not found">
			<div className="text-center text-white font-bold text-3xl text-shadow">
				<Heading title="500 - Server-side error occurred" />
			</div>
		</Meta>
	)
}
