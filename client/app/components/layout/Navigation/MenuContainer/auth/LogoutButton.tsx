import { FC, MouseEvent } from 'react'

import { useActions } from '@/hooks/useActions'

import MaterialIcon from '@/components/ui/MaterialIcon'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const handleLogout = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		logout()
	}
	return (
		<li>
			<a onClick={handleLogout}>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</a>
		</li>
	)
}

export default LogoutButton
