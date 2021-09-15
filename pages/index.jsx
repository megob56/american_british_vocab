import React from "react";
import Head from "next/head";
import Image from "next/Image";
import { Box, Grid } from "grommet";
import { getWords } from "../lib/index";
import NavBar from "../components/NavBar";

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

			<NavBar />
			<main>
				<Grid
					columns={{
						count: 3,
						size: ["1/3", "1/3", "1/3"]
					}}
					gap="small"
					pad="small"
					justify="center"
				>
					<Box direction="row" background="accent-1">
						<h1>American</h1>
						<Image src={'/USflag.png'} alt="us flag" width={150} height={50}/>
					</Box>
					<Box background="brand"></Box>
					<Box direction="row" background="accent-1">
						<h1>British</h1>
						<Image src={'/UKflag.png'} alt="uk flag" width={150} height={50} />
					</Box>
				</Grid>
				<Grid
					columns={{
						count: 3,
						size: "auto",
					}}
					gap="small"
					pad="medium"
				>
					{wordsData.map((word, index) => {
						return (
							<>
								<Box key={`usa-list-${word.usa_id}`} align="center">
									{word.usa_word.toUpperCase()}
								</Box>
								<Box key={`image-${index}`} align="center">
									<Image
										src={"/" + word.usa_word.toLowerCase() + ".png"}
										alt={word.usa_word.toLowerCase()}
										width="50"
										height="50"
									/>
								</Box>
								<Box key={`uk-list-${word.usa_id}`} align="center">
									{word.uk_word.toUpperCase()}
								</Box>
							</>
						);
					})}
				</Grid>
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
	const wordsData = await getWords();

	return {
		props: {
			wordsData,
		},
	};
}
