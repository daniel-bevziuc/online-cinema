import { FC } from 'react'

import Menu from './Menu'
import { firstMenu, userMenu } from './Menu.data'
import GenresMenu from './genres/GenresMenu'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenresMenu />
			<Menu menu={userMenu} />
		</div>
	)
}
export default MenuContainer
