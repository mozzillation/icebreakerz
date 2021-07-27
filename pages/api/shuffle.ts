import type { NextApiRequest, NextApiResponse } from 'next'
import { getCards } from '@/utils'

type Data = {
	name: string
}

const Handler = (req: NextApiRequest, res: NextApiResponse) => {
	let cards = getCards()
	res.status(200).json(cards)
}

export default Handler
