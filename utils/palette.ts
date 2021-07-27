import { shuffleArray } from './functions'

const paletteSchema = ['#ffc711', '#ff5032', '#00c36d', '#faa995', '#523ffc', '#a9a5ff', '#ff8100']

const getSchema: any = (items: any) => {
	const colorArray: string[] = []
	let resetPalette: number = 0

	const paletteShuffle = shuffleArray(paletteSchema)

	for (const i of items) {
		if (resetPalette < paletteSchema.length - 1) {
			resetPalette++
		} else {
			resetPalette = 0
		}

		colorArray.push(paletteShuffle[resetPalette])
	}

	return colorArray
}



export default getSchema
