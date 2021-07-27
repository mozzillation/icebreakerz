import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'
import styled from 'styled-components'


const Intro = () => {

	return (
		<Background>
			<Flex>
				<Image src="/logo.svg" width={800} height={400} alt={'Icebreakerz'} />
				<Link href="/cards" passHref>
					<Button animate={{ rotate: 360, transition: { repeat: Infinity, duration: 5 } }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.05 }}>
						Start now
          </Button>
				</Link>
			</Flex>
		</Background>
	)

}

const Background = styled(motion.div)`
  width: 100%;
  height: 100%;
`

const Button = styled(motion.button)`
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  padding: ${props => props.theme.spacing.xsml} ${props => props.theme.colors.mid};
  font-size: 18px;
  font-family: 'Krona One', sans-serif;
  outline: 0;
  border: 0;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  position: fixed;
  bottom: ${props => props.theme.spacing.xsml};
  right: ${props => props.theme.spacing.xsml};
  cursor: pointer;
`

const Flex = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
`

export default Intro
