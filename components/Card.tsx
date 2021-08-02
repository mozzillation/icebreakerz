import styled from 'styled-components'

const Card = ({ children }: { children: ReactNode }) => {

	return (
		<Flex>
			<Wrapper>
				{children}
			</Wrapper>
		</Flex>
	)
}

const Flex = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding: ${props => props.theme.spacing.sml};
  background: #9095fb;
`

const Wrapper = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 50px -10px rgba(50, 50, 73, 0.1), 0 10px 10px -10px rgba(50, 50, 73, 0.05);
  padding: ${props => props.theme.spacing.sml};
  width: 100%;
  max-width: 600px;
  font-size: 18px;
  line-height: 26px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;

  a{
    text-decoration: none;
    border-bottom: 1px solid ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.black};
  }
`

export default Card
