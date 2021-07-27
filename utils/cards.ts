import fs from 'fs'
import path from 'path'
import process from 'process'
import * as yaml from 'js-yaml'
import { shuffleArray } from './functions'



const getCards = () => {
	const pathName = path.join(process.cwd(), 'data/cards.yml')
	const cards = yaml.load(fs.readFileSync(pathName, 'utf8'))
	let temporaryCards = shuffleArray(cards)
	temporaryCards = temporaryCards.slice(0, 5)
	return temporaryCards
}

export default getCards
