import type { NextApiRequest, NextApiResponse } from 'next'
import { getCardsCategory } from '@/utils'

const Handler = (req: NextApiRequest, res: NextApiResponse) => {
	const { category } = Array.isArray(req.query) ? req.query[0] : req.query
	let cards = getCardsCategory(category)
	cards && res.status(200).json(cards)
}

export default Handler
