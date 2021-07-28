import fs from 'fs'
import path from 'path'
import process from 'process'
import * as yaml from 'js-yaml'
import { shuffleArray } from './functions'
import cards from '@/data/cards.yml'
import categories from '@/data/categories.yml'


const flatten = (object: any, current: any = []) => {
	if (typeof (object) === 'object' && object !== null) {
		for (const key of Object.keys(object)) {
			flatten(object[key], current)
		}
	} else {
		current.push(object)
	}
	return current
}


const getCategories = () => {
	return categories
}

const getCardsCategory = (category: string) => {

	let categoryCards

	if (category !== 'all') {
		categoryCards = cards[category]
	} else {
		categoryCards = flatten(cards)
	}

	if (!categoryCards) return []

	let temporaryCards = shuffleArray(categoryCards)
	temporaryCards = temporaryCards.slice(0, 5)
	return temporaryCards
}

export { getCategories, getCardsCategory }
