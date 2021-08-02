import styled from 'styled-components'
import { Asterisk } from 'phosphor-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Header = ({ ...props }) => {

	return (
		<Wrapper>
			<Link href="/about" passHref>
				<motion.div {...props}>
					<Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.05 }}>
						<Asterisk size={32} />
					</Button>
				</motion.div>
			</Link>
		</Wrapper>
	)

}

const Wrapper = styled.header`

  padding: ${props => props.theme.spacing.xsml} 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;

  @media ${(props) => props.theme.mq.tablet} {
    padding: ${props => props.theme.spacing.xsml};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }


`

const Button = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xxsml};
  box-shadow: 0 12px 50px -10px rgba(50, 50, 73, 0.1), 0 10px 10px -10px rgba(50, 50, 73, 0.05);
  border-radius: 8px;
  cursor: pointer;

  svg{
    display: block;
  }
`

export default Header
