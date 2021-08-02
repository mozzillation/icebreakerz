import Head from 'next/head'
import Card from '@/components/Card'
import Back from '@/components/Back'

const About = () => {

	return (
		<>
			<Head>
				<title> About / Icebreakerz</title>
			</Head>
			<Card>
				Icebreakerz is a small tool to liven up meetings or parties with +200 icebreaker questions.
        If you are interested in contributing or want to see the credits, discover the project on <a href="https://github.com/mozzillation/icebreakerz">Github</a>.
		  </Card>
			<Back />
		</>
	)

}

export default About
