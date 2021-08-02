import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next'
import { useState, useEffect } from 'react'
import { getCardsCategory, getCategories, getSchema } from '@/utils'

import Head from 'next/head'
import View from '@/components/View'
import Deck from '@/components/Deck'

import { Category } from '@/utils/domain'

const Cards = ({ cards, palette, category }: { cards: string[], palette: string[], category: string }) => {

	const title = category.split(' ')
		.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
		.join(' ')


	return (
		<>
			<Head>
				<title>{title} Cards / Icebreakerz</title>
			</Head>
			<Deck cards={cards} palette={palette} category={category} />
		</>
	)
}

type Params = {
	params: {
		category: string
	}
}

export const getStaticProps = async ({ params }: Params) => {
	const { category } = params
	const cards = getCardsCategory(category)

	if (!cards.length) {
		return {
			notFound: true,
		}
	}

	const palette = getSchema(cards)

	return {
		props: { cards, palette, category }
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const categories = getCategories()

	const paths = categories.map((category: Category) => ({
		params: { category: category.slug },
	}))

	return { paths, fallback: 'blocking' }
}



export default Cards
