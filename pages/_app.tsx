import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'

import { theme, GlobalStyle } from '@/styles/globals'
import { AnimatePresence } from 'framer-motion'

import View from '@/components/View'

function App({ Component, pageProps, router }: AppProps) {

	return (
		<>
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#ccdce6" />
				<meta name="theme-color" content="#000000" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<AnimatePresence>
					<View key={router.route}>
						<Component {...pageProps} />
					</View>
				</AnimatePresence>
			</ThemeProvider>
		</>
	)
}

export default App
