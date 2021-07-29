import { createGlobalStyle } from 'styled-components'

import colors from '@/styles/tokens/colors'
import spacing from '@/styles/tokens/spacing'
import mq from '@/styles/tokens/mq'

const theme = {
	mq,
	colors,
	spacing
}

export type ThemeInterface = {
	theme: typeof theme
}

const GlobalStyle = createGlobalStyle<ThemeInterface>`

	*{
		box-sizing: border-box;
	}

	html, body, #__next{
		height: 100%;
		width: 100%;
		min-height: 100%;
		margin: 0;
		overflow: hidden;
		background-color: ${(props) => props.theme.colors.background};

		@media all and ${(props) => props.theme.mq.pwa} {
			background-color: ${(props) => props.theme.colors.black};
		}
	}

  body {
    color: ${(props) => props.theme.colors.black};
		font-size: 18px;
	  font-family: 'Krona One', -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;

	  padding: 0;
	  margin: 0;
	  letter-spacing: 0.015em;
	  word-spacing: 0.001em;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-rendering: optimizeLegibility;
  }

	h1, h2, h3, h4, h5, h6{
		margin: 0;
		font-weight: normal;
	}

	p{
		margin: 0;
		padding: 0;
	}


	@keyframes grain {
	  0%, 100% {transform: translate(0,0);}
		25%, 75% {transform: translate(10%, -10%);}
	  50% {transform: translate(-10%,10%);}
	}

`

export { theme, GlobalStyle }
