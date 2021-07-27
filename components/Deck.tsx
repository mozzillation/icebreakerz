import React, { useState, useEffect } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import styled from 'styled-components'
import { getCards, getSchema } from '@/utils'
import { shuffleArray } from '@/utils/functions'
// Helpers

const from = (_i: number) => ({
	x: 0,
	rot: 0,
	scale: 1.2,
	y: 2000,
	opacity: 0
})

const to = (i: number) => ({
	x: 0,
	y: i * -4,
	scale: 1,
	rot: -10 + Math.random() * 20,
	delay: i * 100,
	opacity: 1,
})

const trans = (r: number, s: number) => `perspective(1500px) rotateX(10deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

// Component

const Deck = ({ cards: initialCards, palette }: { cards: string[], palette: string[] }) => {


	const [cards, setCards] = useState(initialCards)
	const [backgroundColor, setColor] = useState(palette[0])

	const [gone] = useState(new Set()) // The set flags all the cards that are flicked out

	const [props, api] = useSprings(cards.length, i => ({
		...to(i),
		from: from(i)
	}))

	const refreshCards = async () => {
		let req = await fetch('/api/shuffle')
		let newCards = await req.json()
		setCards(newCards)
	}


	const changeBackground = (index: number) => {
		setColor(prevstate => palette[index])
	}


	const bind = useDrag(({ args: [index], active, movement: [mx, my], direction: [xDir, yDir], velocity: [vx, vy] }) => {
		const trigger = vx > 0.2 || vy > 0.2 // If you flick hard enough it should trigger the card to fly out
		if (!active && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
		api.start(i => {
			if (index !== i) return // We're only interested in changing spring-data for the current spring
			const isGone = gone.has(index)
			if (isGone) changeBackground(index)
			const y = isGone ? (200 + window.innerHeight) * yDir : active ? my : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
			const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
			const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0) // How much the card tilts, flicking it harder makes it rotate faster
			const scale = active ? 1.1 : 1 // Active cards lift up a bit
			return {
				x,
				y,
				rot,
				scale,
				delay: undefined,
				config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
			}
		})
		if (!active && gone.size === cards.length) {
			refreshCards()
			setTimeout(() => {
				gone.clear()
				api.start(i => to(i))
			}, 600)
		}
	})

	return (
		<Background style={{ backgroundColor }}>
			<Flex>
				{props.map(({ x, y, rot, scale }, i) => {

					return (
						<CardWrapper key={i} style={{ x, y }}>
							{/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
							<Card
								style={{
									transform: interpolate([rot, scale], trans),
								}}
								{...bind(i)}
							>
								{cards[i]}
							</Card>
						</CardWrapper>
					)
				})}
			</Flex>
		</Background>
	)
}

const Background = styled(animated.div)`
  width: 100%;
  min-height: 100%;
  will-change: background-color;
  transition: background-color 0.1s;
`

const Flex = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`

const CardWrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Card = styled(animated.div)`
  touch-action: none;
  user-select: none;
  background-color: ${props => props.theme.colors.white};
  background-size: 100%;
  background-repeat: repeat;
  width: 100%;
  max-width: 800px;
  height: 100%;
  max-height: 600px;
  will-change: transform;
  border-radius: 10px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  box-shadow: 0 12px 50px -10px rgba(50, 50, 73, 0.1), 0 10px 10px -10px rgba(50, 50, 73, 0.05);
  font-size: 32px;
  text-align: center;
  padding: ${props => props.theme.spacing.mid};
`


export default Deck