import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Category } from '@/utils/domain'


const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.25,
			staggerChildren: 0.15,
			delayChildren: 0.75
		}
	}
}

const item = {
	hidden: { opacity: 0, scale: 0.5 },
	show: { opacity: 1, scale: 1, transition: { ease: 'backOut', duration: 0.5 } },
}

const Selector = ({ categories }: { categories: Category[] }) => {

	return (
		<Background>
			<Flex>
				<AnimatePresence>
					<motion.div variants={container} initial="hidden" animate="show" >
						{categories.map(({ name, slug, emoji }, index) => (
							<motion.div variants={item} key={index}>
								<Link href={`/${slug}`} passHref >
									<Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.01, transition: { duration: 0.05 } }}>
										<Emoji>{emoji}</Emoji>
										<Text>{name}</Text>
									</Button>
								</Link>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>
			</Flex>
		</Background>
	)
}


const Background = styled.div`
  width: 100%;
  min-height: 100%;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
  overflow: scroll;
  padding: ${props => props.theme.spacing.xsml} ${props => props.theme.spacing.xsml} 0;

  @media all and ${(props) => props.theme.mq.pwa} {
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    background-color: ${(props) => props.theme.colors.background};
  }
`


const Flex = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
`


const Button = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  height: auto;
  padding: ${props => props.theme.spacing.sml};
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
  flex-direction: row;
	background: #fff;
  text-transform: uppercase;
  border-radius: 16px;
  box-shadow: 0 12px 50px -10px rgba(50, 50, 73, 0.1), 0 10px 10px -10px rgba(50, 50, 73, 0.05);
  margin-bottom: ${props => props.theme.spacing.xsml};
  cursor: pointer;
`
const Text = styled.div`
  width: 100%;

`

const Emoji = styled.div`
  max-width: 60px;
  height: 60px;
  flex-basis: 100%;
  background: #F3F9FC;
  border-radius: 20px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-size: 32px;
  line-height: 32px;
  margin-right: 16px;
`



export default Selector
