import { useEffect } from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { CookiesProvider } from 'react-cookie';
import { DefaultSeo } from 'next-seo';
import SEO from '@/next-seo';

import styled, { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import * as ga from '@/utils/ga'
import { theme, GlobalStyle } from '@/styles/globals'
import View from '@/components/View'

function App({ Component, pageProps, router }: AppProps) {

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			ga.pageview(url)
		}
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on('routeChangeComplete', handleRouteChange)

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<>
			<Head>
				<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="msapplication-TileColor" content="#ccdce6" />
				<meta name="theme-color" content="#000000" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
			</Head>
			<DefaultSeo {...SEO} />
			<CookiesProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<AnimatePresence>
						<View key={router.route}>
							<Component {...pageProps} />
						</View>
					</AnimatePresence>
				</ThemeProvider>
			</CookiesProvider>
		</>
	)
}

export default App
