import type { AppProps /*, AppContext */ } from 'next/app'
import styled, { ThemeProvider } from 'styled-components'

import { theme, GlobalStyle } from '@/styles/globals'
import { AnimatePresence } from 'framer-motion'

import View from '@/components/View'

function App({ Component, pageProps, router }: AppProps) {

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<AnimatePresence exitBeforeEnter>
					<View key={router.route}>
						<Component {...pageProps} />
					</View>
				</AnimatePresence>
			</ThemeProvider>
		</>
	)
}

export default App
