import { GetStaticProps, GetStaticPropsContext } from 'next'

import Head from 'next/head'
import View from '@/components/View'
import Selector from '@/components/Selector'

import { getCategories } from '@/utils'
import { Category } from '@/utils/domain'

const CategorySelection = ({ categories }: { categories: Category[] }) => {

	return (
		<>
			<Head>
				<title>Icebreakerz</title>
			</Head>
			<View>
				<Selector categories={categories} />
			</View>
		</>
	)
}


export const getStaticProps: GetStaticProps = async () => {
	const categories = getCategories()
	return {
		props: { categories }
	}
}


export default CategorySelection
