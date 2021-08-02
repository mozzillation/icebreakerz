import { Power4 } from 'gsap'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import CookieConsent from '@/components/CookieConsent'

const View = ({ children }: { children?: React.ReactNode }) => {

	return (
		<>
			<Module initial={{ y: '100vh' }} animate={{ y: 0 }} exit={{ y: '100vh' }} transition={{ ease: Power4.easeInOut, duration: 1 }}>
				{children}
				<CookieConsent />
			</Module>

		</>
	)
}

const Module = styled(motion.main)`
  width: 100%;
	overflow: hidden;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`

export default View
