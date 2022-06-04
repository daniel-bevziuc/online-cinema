import { FC } from 'react'

import MenuItem from '../MenuItem'
import LogoutButton from './LogoutButton'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/url.config'

const AuthItems: FC = () => {
	const { user } = useAuth()
	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile'
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem
					item={{
						icon: 'MdLogin',
						link: '/auth',
						title: 'Login'
					}}
				/>
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel'
					}}
				/>
			)}
		</>
	)
}
export default AuthItems
