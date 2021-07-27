import { motion } from 'framer-motion'
import styled from 'styled-components'

const View = ({ children }: { children?: React.ReactNode }) => {

	return (
		<Module initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
			{children}
		</Module>
	)
}

const Module = styled(motion.main)`
  width: 100%;
  min-height: 100%;
`

export default View
