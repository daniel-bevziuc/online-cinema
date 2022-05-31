import { FC } from 'react'

import { IHeading } from './heading.interface'

const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<h1
			className={`text-white text-opacity-80 font-semiBold ${
				className?.includes('xl') ? '' : 'test-3xl'
			} ${className}`}
		>
			{title}
		</h1>
	)
}
export default Heading
