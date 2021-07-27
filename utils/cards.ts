import fs from 'fs'
import path from 'path'
import process from 'process'
import * as yaml from 'js-yaml'
import { shuffleArray } from './functions'
import getConfig from 'next/config'
import cards from '../data/cards.yml'

const getCards = () => {
	let temporaryCards = shuffleArray(cards)
	temporaryCards = temporaryCards.slice(0, 5)
	return temporaryCards
}

export default getCards
