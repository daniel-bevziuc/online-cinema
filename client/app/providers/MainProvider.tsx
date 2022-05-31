import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from '@/components/layout/Layout'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

type IProviderProps = {
	children: React.ReactNode
}

const MainProvider: FC<IProviderProps> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}
export default MainProvider
