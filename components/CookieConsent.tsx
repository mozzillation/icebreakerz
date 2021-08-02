import { useCookies } from 'react-cookie'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

const CookieConsent = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['consent']);
	const [isVisible, setVisible] = useState(true)

	useEffect(() => {
		cookies.consent && setVisible(false)

	}, [cookies])

	const handleClick = () => {
		setCookie('consent', true)
	}

	return (
		<Wrapper>
			<AnimatePresence>



				{isVisible && (
					<Bar onClick={handleClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }} exit={{ y: 80, opacity: 0, transition: { duration: 0.25 } }} >
						We are collecting cookies to enhance the experience. Tap to agree
          </Bar>
				)}


			</AnimatePresence>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  padding: ${props => props.theme.spacing.sml};
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  pointer-events: none;


  @media all and ${(props) => props.theme.mq.pwa} {
    padding: ${props => props.theme.spacing.sml} ${props => props.theme.spacing.sml} ${props => props.theme.spacing.mid};
  }
`

const Bar = styled(motion.div)`
  padding: ${props => props.theme.spacing.xsml} ${props => props.theme.spacing.sml};
  font-size: 14px;
  background: #232323;
  color: ${props => props.theme.colors.white};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  pointer-events: all;
  user-select: none;
`


export default CookieConsent
