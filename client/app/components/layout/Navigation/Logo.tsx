import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import imageLogo from '@/assets/images/cinema-logo.svg'

const Logo: FC = () => {
	return (
		<div className="px-layout mb-10 block text-primary">
			<Link href="/">
				<a>
					<Image
						src={imageLogo}
						width={300}
						height={100}
						alt="Movie app"
						draggable={false}
					/>
				</a>
			</Link>
		</div>
	)
}
export default Logo
