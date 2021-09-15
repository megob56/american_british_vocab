import Head from "next/head"
import { Box } from "grommet"
import { getWords } from '../lib/index'

export default function Home({ wordsData }) {
	return (
		<div>
			<Head>
				<title>US UK Baby Lingo</title>
				<meta
					name="description"
					content="UK equivalent of US words used to discuss baby related things!"
				/>
				<link rel="icon" href="/babyfeet_32px.ico" />
			</Head>

			<main>
        {console.log(wordsData)}
        {console.log(typeof wordsData)}
				<Box direction="row" gap="large" pad="medium">
					<Box align="center" fill={true}>
						<Box align="center">
							<h1>American Version</h1>
              <Box pad="medium" gap="small" fill={true} background="accent-2">
                {wordsData.map((word) => {
                  return (
                    <Box direction="row" key={`list-${word.usa_id}`}>{word.usa_word.toUpperCase()}</Box>
                  )
                })}
              </Box>
            </Box>
					</Box>
					<Box align="center" fill={true}>
						<Box align="center">
							<h1>British Equivalent</h1>
              <Box pad="medium" gap="small" fill={true} background="accent-3">
              {wordsData.map((word) => {
                  return (
                    <Box direction="row" key={`list-${word.usa_id}`}>{word.uk_word.toUpperCase()}</Box>
                  )
                })}
              </Box>
            </Box>
					</Box>
				</Box>
			</main>

			<footer>
				<Box pad="xlarge" background="brand">
					US UK translations
				</Box>
			</footer>
		</div>
	);
}

export async function getServerSideProps() {
  const wordsData = await getWords()

  return {
    props: {
      wordsData,
    }
  }
}