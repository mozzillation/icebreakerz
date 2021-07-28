import styled from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Back = () => {

	return (
		<Wrapper>
			<Link href='/' passHref >
				<Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.01, transition: { duration: 0.05 } }}>
					Close
			  </Button>
			</Link>
		</Wrapper>
	)
}

const Wrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.sml};


  @media all and ${(props) => props.theme.mq.pwa} {
		padding: ${props => props.theme.spacing.sml} ${props => props.theme.spacing.sml} ${props => props.theme.spacing.lrg};
	}
`

const Button = styled(motion.div)`
  padding: ${props => props.theme.spacing.sml} ${props => props.theme.spacing.mid};
  font-size: 18px;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  box-shadow: 0 12px 50px -10px rgba(50, 50, 73, 0.1), 0 10px 10px -10px rgba(50, 50, 73, 0.05);
  backdrop-filter: blur(24px);
  visibility: visible;

  @media ${(props) => props.theme.mq.desktop}{
    visibility: hidden;
  }
`

export default Back
