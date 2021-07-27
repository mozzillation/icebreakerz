import { useState } from 'react'

import { getCards, getSchema } from '@/utils'

import View from '@/components/View'
import Deck from '@/components/Deck'
import Head from 'next/head'


const Cards = ({ cards, palette }: { cards: string[], palette: string[] }) => {


	return (
		<>
			<Head>
				<title>Icebreakerz</title>
			</Head>
			<Deck cards={cards} palette={palette} />
		</>
	)
}

export async function getServerSideProps() {
	const cards = getCards()
	const palette = getSchema(cards)

	return {
		props: { cards, palette }
	}

}


export default Cards