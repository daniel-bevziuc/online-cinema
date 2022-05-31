import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

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
			<ReactQueryDevtools initialIsOpen={false} />
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}
export default MainProvider
