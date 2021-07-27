
import fs from 'fs'
import path from "path"
import YAML from 'yaml'
import { shuffleArray } from './functions'


const getCards = () => {
	const directory = path.resolve(process.cwd(), "data");
	const file = fs.readFileSync(
		path.join(directory, "cards.yml"),
		"utf8"
	);

	const cards = YAML.parse(file)

	let temporaryCards = shuffleArray(cards)
	temporaryCards = temporaryCards.slice(0, 5)
	return temporaryCards
}

export default getCards
