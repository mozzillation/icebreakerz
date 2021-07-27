import fs from 'fs'
import path from 'path'
import process from 'process'
import * as yaml from 'js-yaml'
import { shuffleArray } from './functions'
import getConfig from 'next/config'


const getCards = () => {
	const { serverRuntimeConfig } = getConfig()
	const file = fs.readFileSync(path.join(serverRuntimeConfig.PROJECT_ROOT, './data/cards.yml'))
	const cards = yaml.load(file)
	let temporaryCards = shuffleArray(cards)
	temporaryCards = temporaryCards.slice(0, 5)
	return temporaryCards
}

export default getCards
